import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, Phone, Mail, Clock, Shield } from "lucide-react";
import { contactConfig } from "@/config/contact";

const headlines = [
  "Airco Limburg Specialist",
  "Airco Service Limburg",
  "Klimaatbeheersing Limburg",
  "Daikin Airco Limburg",
];

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Gecertificeerde Daikin Specialist</span>
            </div>

            {/* Typewriter Headlines */}
            <div className="h-20 mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  {headlines[currentHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              <strong>Nr. 1 Daikin specialist</strong> in heel <a href="/werkgebied" className="underline hover:text-white">Limburg</a> • Installatie binnen 1 week 
              • 163 tevreden klanten • Onderhoud vanaf €11/maand
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-current' : 'fill-current opacity-50'}`} />
                  ))}
                </div>
                <span className="font-semibold">4.7/5</span>
                <span className="text-gray-400">(163 Google reviews)</span>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                "Gratis offerte binnen 24 uur",
                "5 jaar garantie op installatie",
                "Onderhoud vanaf €11 per maand",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Gratis Offerte Aanvragen
              </a>
              <a
                href={`tel:+31${contactConfig.phoneClean}`}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Bel Direct: {contactConfig.phone}
              </a>
            </div>

            {/* Urgency Message */}
            <div className="mt-6 inline-flex items-center gap-2 text-orange-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Binnen 24 uur reactie gegarandeerd</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Ribbon */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-20 transform rotate-12">
              Binnen 24u reactie
            </div>

            {/* Glassmorphic Form Container */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Direct een offerte aanvragen
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Uw naam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="E-mailadres"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Vertel ons over uw project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Verstuur Aanvraag
                </button>
              </form>

              {/* Contact Options */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-3">Of neem direct contact op:</p>
                <div className="flex flex-col gap-2 text-white/90">
                  <a href={`tel:+31${contactConfig.phoneClean}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>{contactConfig.phone}</span>
                  </a>
                  <a href={`mailto:${contactConfig.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>{contactConfig.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}