import emailjs from '@emailjs/browser';
import { z } from 'zod';

// Debug mode - set to true for troubleshooting
const DEBUG_MODE = false;

// Email configuration from environment or fallback to existing config
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_q8z4g6n';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3g9oejn';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'wKOJNVRD49DUfGIYG';

// Webhook configuration
const WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f';

// Define the email data schema
const emailDataSchema = z.object({
  name: z.string().min(1, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(1, 'Telefoonnummer is verplicht'),
  city: z.string().optional(),
  message: z.string().min(1, 'Bericht is verplicht')
});

export type EmailData = z.infer<typeof emailDataSchema>;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      city: data.city || 'Niet opgegeven',
      message: data.message,
      to_email: 'info@staycoolairco.nl'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || '',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      console.log('Webhook response:', await response.text());
    }

    return response.ok;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  // Validate the data
  const validatedData = emailDataSchema.parse(data);

  // Send to both services in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(validatedData),
    sendToWebhook(validatedData)
  ]);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Webhook success:', webhookSuccess);
  }

  // Only throw error if BOTH methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Er is een fout opgetreden bij het verzenden van het formulier. Probeer het later opnieuw.');
  }

  // If at least one succeeded, we consider it a success
  if (DEBUG_MODE) {
    console.log('Form submission successful!');
  }
};

// Function to send only to webhook (for testing)
export const sendToWebhookOnly = async (data: EmailData): Promise<void> => {
  const validatedData = emailDataSchema.parse(data);
  const success = await sendToWebhook(validatedData);
  
  if (!success) {
    throw new Error('Webhook submission failed');
  }
};