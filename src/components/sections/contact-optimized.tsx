import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { sendEmail } from "@/utils/email";
import { trackFormSubmission, trackPixelFormSubmission } from "@/utils/analytics";
import toast, { Toaster } from "react-hot-toast";

export function ContactOptimized() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        city: formData.city || 'Limburg',
      });

      // Track analytics
      trackFormSubmission('contact_optimized', true);
      trackPixelFormSubmission('contact_optimized', true);
      
      // Show success message
      toast.success('Bericht succesvol verzonden!');
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "", city: "" });
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate('/tot-snel');
      }, 1000);
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Track failed submission
      trackFormSubmission('contact_optimized', false);
      trackPixelFormSubmission('contact_optimized', false);
      
      toast.error('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Airco Installateur Limburg - Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Vraag vandaag nog uw gratis offerte aan voor airco installatie in Limburg
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Direct Contact
            </h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <a href={`tel:+31${contactConfig.phoneClean}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Phone className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefoon</p>
                  <p className="text-gray-600 group-hover:text-orange-500 transition-colors">
                    {contactConfig.phone}
                  </p>
                </div>
              </a>

              <a href={`https://wa.me/31${contactConfig.whatsappClean}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageSquare className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600 group-hover:text-green-500 transition-colors">
                    {contactConfig.whatsapp}
                  </p>
                </div>
              </a>

              <a href={`mailto:${contactConfig.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <p className="text-gray-600 group-hover:text-blue-500 transition-colors">
                    {contactConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adres</p>
                  <p className="text-gray-600">
                    {contactConfig.address.street}<br />
                    {contactConfig.address.postalCode} {contactConfig.address.city}<br />
                    <span className="text-sm italic">{contactConfig.address.note}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Openingstijden
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Maandag - Donderdag</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vrijdag</span>
                  <span className="font-medium">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weekend</span>
                  <span className="font-medium">Gesloten</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vraag een Gratis Offerte Aan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Vertel ons over uw airco wensen..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Verzenden..."
                ) : (
                  <>
                    Verstuur Offerte Aanvraag
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Gratis offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Binnen 24u reactie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Vrijblijvend advies</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}