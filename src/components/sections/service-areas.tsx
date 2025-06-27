import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Maastricht", slug: "maastricht", highlight: true },
  { name: "Heerlen", slug: "heerlen", highlight: true },
  { name: "Sittard", slug: "sittard", highlight: true },
  { name: "Roermond", slug: "roermond", highlight: true },
  { name: "Geleen", slug: "geleen" },
  { name: "Kerkrade", slug: "kerkrade" },
  { name: "Brunssum", slug: "brunssum" },
  { name: "Venlo", slug: "venlo" },
  { name: "Weert", slug: "weert" },
  { name: "Landgraaf", slug: "landgraaf" },
  { name: "Voerendaal", slug: "voerendaal" },
  { name: "Hoensbroek", slug: "hoensbroek" },
];

export function ServiceAreas() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Airco Installatie in Heel Limburg
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Wij installeren Daikin airconditioners in alle steden en dorpen van Limburg
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={`/werkgebied/${city.slug}`}
                className={`block p-4 rounded-lg text-center transition-all ${
                  city.highlight
                    ? "bg-white shadow-md hover:shadow-lg hover:bg-orange-50 border-2 border-orange-200"
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <MapPin className={`h-6 w-6 mx-auto mb-2 ${
                  city.highlight ? "text-orange-500" : "text-gray-400"
                }`} />
                <h3 className={`font-semibold ${
                  city.highlight ? "text-gray-900" : "text-gray-700"
                }`}>
                  Airco {city.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/werkgebied"
            className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
          >
            Bekijk alle werkgebieden
            <MapPin className="h-5 w-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}