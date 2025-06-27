import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wrench, Settings, Shield, Play } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Installatie",
    description: "Professionele installatie van Daikin airconditioners door gecertificeerde monteurs",
    features: [
      "Gratis inmeting en advies",
      "Binnen 1 week geïnstalleerd",
      "5 jaar installatiegarantie",
      "Inclusief alle benodigde materialen"
    ]
  },
  {
    icon: Wrench,
    title: "Onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur",
    features: [
      "Jaarlijkse onderhoudsbeurt",
      "Filterreiniging en vervanging",
      "Koudemiddelcontrole",
      "Preventief onderhoud"
    ]
  },
  {
    icon: Shield,
    title: "Reparatie",
    description: "Snelle en vakkundige reparatie bij storingen tijdens kantooruren",
    features: [
      "Snelle storingsdienst",
      "Binnen 24 uur ter plaatse",
      "Transparante prijzen",
      "Garantie op reparaties"
    ]
  }
];

export function ServicesOptimized() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Airco Service Limburg - Onze Diensten
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Van installatie tot onderhoud en reparatie, wij zorgen voor uw comfort
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Meer informatie →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video */}
            <div className="relative aspect-video lg:aspect-auto bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="Daikin Airco Installatie"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors cursor-pointer">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Zie hoe wij te werk gaan
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk onze professionele installatieprocedure en ontdek waarom klanten 
                voor Daikin Airco Limburg kiezen. Van de eerste inspectie tot de oplevering, 
                wij zorgen voor een vlekkeloze installatie.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Gratis inspectie en advies op maat</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Professionele installatie binnen 1 week</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Uitleg en garantie bij oplevering</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}