import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init({
  publicKey: "JOVuOJTC7ReYFRkQ_",
});

export const emailConfig = {
  serviceId: "service_1rruujp",
  templateId: "template_rkcpzhg",
  contactEmail: "info@staycoolairco.nl",
  contactPhone: "046 202 1430"
} as const;