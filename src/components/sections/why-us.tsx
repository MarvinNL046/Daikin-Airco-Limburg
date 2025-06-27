import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Award, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Gratis Offerte",
    description: "Vrijblijvende offerte binnen 24 uur, transparante prijzen zonder verborgen kosten",
  },
  {
    icon: Award,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen certificaat en Daikin gecertificeerd, vakkundig en betrouwbaar",
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Ma-Vr bereikbaar, snelle reactie binnen 24 uur op al uw vragen",
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Uitgebreide garantie op installatie en onderdelen voor uw gemoedsrust",
  },
];

export function WhyUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Waarom Kiezen voor Daikin Airco Limburg?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ontdek waarom meer dan 1000+ klanten in <a href="/werkgebied" className="text-orange-500 hover:text-orange-600 underline">heel Limburg</a> voor ons kiezen
          </motion.p>
        </div>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Vraag Nu Uw Gratis Offerte Aan
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Geen verplichtingen • Reactie binnen 24 uur
          </p>
        </motion.div>
      </div>
    </section>
  );
}