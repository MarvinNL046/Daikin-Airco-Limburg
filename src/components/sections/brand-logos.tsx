import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const brands = [
  { name: "Daikin", logo: "/images/brands/daikin.png" },
  { name: "Mitsubishi", logo: "/images/brands/mitsubishi.png" },
  { name: "Fujitsu", logo: "/images/brands/fujitsu.png" },
  { name: "Toshiba", logo: "/images/brands/toshiba.png" },
  { name: "Panasonic", logo: "/images/brands/panasonic.png" },
  { name: "LG", logo: "/images/brands/lg.png" },
];

export function BrandLogos() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            Wij Werken met Top Merken
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600"
          >
            Specialist in alle grote airconditioning merken
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div ref={ref} className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
                {/* Placeholder voor logo's - in productie zou je echte logo's gebruiken */}
                <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{brand.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daikin Specialist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-blue-50 rounded-full px-6 py-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-blue-900">Officiële Daikin Dealer</p>
              <p className="text-sm text-blue-700">Gecertificeerd sinds 2015</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}