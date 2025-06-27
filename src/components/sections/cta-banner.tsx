import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, ArrowRight, Clock, Shield } from "lucide-react";
import { contactConfig } from "@/config/contact";

interface CTABannerProps {
  variant?: 'default' | 'urgent' | 'seasonal';
}

export function CTABanner({ variant = 'default' }: CTABannerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    default: {
      bg: "bg-gradient-to-r from-orange-500 to-orange-600",
      title: "Klaar voor perfect klimaatcomfort?",
      subtitle: "Vraag vandaag nog uw gratis offerte aan",
      icon: Shield,
    },
    urgent: {
      bg: "bg-gradient-to-r from-red-500 to-orange-500",
      title: "🔥 Zomeractie: Profiteer van scherpe prijzen",
      subtitle: "Alleen deze maand - vraag snel uw offerte aan!",
      icon: Clock,
    },
    seasonal: {
      bg: "bg-gradient-to-r from-blue-600 to-blue-700",
      title: "Winter aanbieding: Warmtepompen met subsidie",
      subtitle: "Profiteer van de ISDE subsidie - wij helpen met de aanvraag",
      icon: Shield,
    },
  };

  const config = variants[variant];

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`${config.bg} rounded-2xl shadow-xl overflow-hidden`}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="text-white text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {config.title}
                </h2>
                <p className="text-lg opacity-90">
                  {config.subtitle}
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <config.icon className="h-5 w-5" />
                    <span className="text-sm">5 jaar garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm">Binnen 24 uur reactie</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                >
                  Gratis Offerte
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:+31${contactConfig.phoneClean}`}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Bel Direct
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -ml-24 -mb-24" />
        </motion.div>
      </div>
    </section>
  );
}