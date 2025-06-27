import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { contactConfig } from "@/config/contact";

const products = [
  {
    name: "Daikin Stylish",
    description: "Stijlvol design met superieure prestaties",
    features: [
      "Fluisterstil: slechts 19 dB(A)",
      "Energielabel A+++",
      "Coanda-effect voor optimale luchtverdeling",
      "Wifi-bediening standaard"
    ],
    images: [
      { src: "/images/daikin-stylish-wit.webp", alt: "Daikin Stylish airco wit - Fluisterstille airconditioner voor woonkamer Limburg" },
      { src: "/images/daikin-stylish-zwart.webp", alt: "Daikin Stylish airco zwart - Design airconditioner installatie Limburg" },
      { src: "/images/daikin-stylish-silver.webp", alt: "Daikin Stylish airco zilver - Energiezuinige airconditioning A+++ Limburg" }
    ],
    popular: true
  },
  {
    name: "Daikin Emura",
    description: "Bekroond design met geavanceerde technologie",
    features: [
      "Red Dot Design Award winnaar",
      "2-zone bewegingssensor",
      "Zelfreinigend filter",
      "Krachtige luchtzuivering"
    ],
    images: [
      { src: "/images/daikin-emura-wit.webp", alt: "Daikin Emura airco wit - Bekroond design airconditioner met luchtzuivering Limburg" },
      { src: "/images/daikin-emura-zwart.webp", alt: "Daikin Emura airco zwart - Premium airconditioning met 2-zone sensor Limburg" },
      { src: "/images/daikin-emura-zilver.webp", alt: "Daikin Emura airco zilver - Red Dot Award winnende airco installatie Limburg" }
    ],
    popular: true
  },
  {
    name: "Daikin Perfera",
    description: "Ultieme comfort en energie-efficiëntie",
    features: [
      "Hoogste energie-efficiëntie",
      "3D-luchtstroom",
      "Titanium luchtzuiveringsfilter",
      "Flash Streamer technologie"
    ],
    images: [
      { src: "/images/daikin-perfera-wit.webp", alt: "Daikin Perfera airco - Meest energiezuinige airconditioner met 3D-luchtstroom Limburg" }
    ],
    popular: false
  },
  {
    name: "Daikin Sensira",
    description: "Betaalbaar comfort voor ieder interieur",
    features: [
      "Uitstekende prijs-kwaliteitverhouding",
      "Energiezuinig koelen en verwarmen",
      "Compact design",
      "Eenvoudige installatie"
    ],
    images: [
      { src: "/images/daikin-sensira-wit.webp", alt: "Daikin Sensira airco - Betaalbare airconditioning voor slaapkamer en woonkamer Limburg" }
    ],
    popular: false
  }
];

export function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Daikin Airco Modellen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ontdek ons assortiment premium Daikin airconditioners voor optimaal klimaatcomfort
          </motion.p>
        </div>

        {/* Products Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Images */}
              <div className="relative h-64 bg-white p-8">
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Populair
                  </div>
                )}
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
                >
                  Vraag offerte aan
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Niet zeker welk model bij u past?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Onze experts helpen u graag met het kiezen van de perfecte Daikin airco voor uw situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Gratis Adviesgesprek
            </a>
            <a
              href={`tel:+31${contactConfig.phoneClean}`}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-blue-500"
            >
              Bel Direct: {contactConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}