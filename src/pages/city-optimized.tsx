import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle, Star, Clock } from "lucide-react";
import { ContactOptimized } from "@/components/sections/contact-optimized";
import { Products } from "@/components/sections/products";
import { contactConfig } from "@/config/contact";

// SEO data voor elke stad
const cityData: Record<string, {
  title: string;
  description: string;
  keywords: string[];
  nearbyAreas: string[];
  localInfo: string;
}> = {
  "maastricht": {
    title: "Airco Maastricht",
    description: "Daikin airco specialist in Maastricht en omstreken. Installatie binnen 3 dagen mogelijk.",
    keywords: ["airco maastricht", "airconditioning maastricht", "daikin maastricht"],
    nearbyAreas: ["Amby", "Borgharen", "Heugem", "Heer", "De Heeg", "Wolder"],
    localInfo: "Meer dan 200 tevreden klanten in Maastricht"
  },
  "heerlen": {
    title: "Airco Heerlen", 
    description: "Airco installatie Heerlen door gecertificeerde monteurs. Parkstad specialist sinds 2015.",
    keywords: ["airco heerlen", "airconditioning heerlen", "airco parkstad"],
    nearbyAreas: ["Hoensbroek", "Heerlerbaan", "Heerlerheide", "Welten"],
    localInfo: "Snelste service in Parkstad regio"
  },
  "sittard": {
    title: "Airco Sittard",
    description: "Airco service Sittard-Geleen. Onderhoud vanaf €11/maand, installatie binnen 1 week.",
    keywords: ["airco sittard", "airco service sittard", "airconditioning sittard"],
    nearbyAreas: ["Geleen", "Born", "Limbricht", "Munstergeleen"],
    localInfo: "Officiële Daikin dealer Westelijke Mijnstreek"
  },
  "roermond": {
    title: "Airco Roermond",
    description: "Airco specialist Roermond voor bedrijven en particulieren. 5 jaar garantie op installatie.",
    keywords: ["airco roermond", "airconditioning roermond", "daikin roermond"],
    nearbyAreas: ["Swalmen", "Herten", "Melick", "Maasniel"],
    localInfo: "Grootste Daikin dealer in Midden-Limburg"
  },
  "geleen": {
    title: "Airco Geleen",
    description: "Airco installateur Geleen met 24 uur service. Direct contact via WhatsApp mogelijk.",
    keywords: ["airco geleen", "airco service geleen", "airco direct geleen"],
    nearbyAreas: ["Sittard", "Beek", "Stein", "Elsloo"],
    localInfo: "Erkend installateur voor heel Sittard-Geleen"
  },
  "kerkrade": {
    title: "Airco Kerkrade",
    description: "Airconditioning Kerkrade door lokale specialist. Gratis offerte binnen 24 uur.",
    keywords: ["airco kerkrade", "airconditioning kerkrade"],
    nearbyAreas: ["Eygelshoven", "Chevremont", "Bleijerheide", "Spekholzerheide"],
    localInfo: "Actief in heel Parkstad sinds 2015"
  },
  "brunssum": {
    title: "Airco Brunssum",
    description: "Split airco Brunssum voor woning en kantoor. Energiezuinige oplossingen met subsidie.",
    keywords: ["airco brunssum", "split airco brunssum"],
    nearbyAreas: ["Treebeek", "Rumpen", "Schinveld"],
    localInfo: "Specialist in split-unit airconditioners"
  },
  "venlo": {
    title: "Airco Venlo",
    description: "Airco installatie Venlo en Noord-Limburg. Daikin specialist met showroom.",
    keywords: ["airco venlo", "airconditioning venlo"],
    nearbyAreas: ["Blerick", "Tegelen", "Belfeld", "Steyl"],
    localInfo: "Noord-Limburg specialist sinds 2018"
  },
  "weert": {
    title: "Airco Weert",
    description: "Airco service Weert voor particulier en zakelijk. Onderhoud en installatie.",
    keywords: ["airco weert", "airconditioning weert"],
    nearbyAreas: ["Nederweert", "Stramproy", "Tungelroy"],
    localInfo: "Uw lokale klimaatspecialist"
  },
  "landgraaf": {
    title: "Airco Landgraaf",
    description: "Airco specialist Landgraaf met jarenlange ervaring. Vraag vrijblijvend advies.",
    keywords: ["airco landgraaf", "airconditioning landgraaf"],
    nearbyAreas: ["Nieuwenhagen", "Schaesberg", "Ubach over Worms"],
    localInfo: "Parkstad's meest ervaren installateur"
  },
  "voerendaal": {
    title: "Airco Voerendaal",
    description: "Airco service Voerendaal en Heuvelland. Snelle service, eerlijke prijzen.",
    keywords: ["airco voerendaal", "airco service voerendaal"],
    nearbyAreas: ["Klimmen", "Ransdaal", "Ubachsberg", "Kunrade"],
    localInfo: "Heuvelland specialist met lokale kennis"
  },
  "hoensbroek": {
    title: "Airco Hoensbroek",
    description: "Airco installatie Hoensbroek door ervaren monteurs. Altijd scherpe prijzen.",
    keywords: ["airco hoensbroek"],
    nearbyAreas: ["Heerlen-Noord", "Terschuren", "Maria-Gewanden"],
    localInfo: "Uw buurtspecialist in Hoensbroek"
  }
};

export default function CityOptimizedPage() {
  const { city } = useParams();
  const cityKey = city || "";
  const data = cityData[cityKey] || cityData["maastricht"];
  
  const cityName = cityKey
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Update document title voor SEO
  if (typeof document !== 'undefined') {
    document.title = `${data.title} | Daikin Specialist ✓ Installatie & Service`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${data.description} ✓ 4.7/5 reviews ✓ Gratis offerte ✓ 5 jaar garantie. Bel 046 202 1430`);
    }
  }

  return (
    <>
      {/* Hero Section met stad-specifieke content */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
        
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <Link 
            to="/werkgebied" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar werkgebied
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {data.title} Specialist
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {data.description} Daikin Airco Limburg is dé specialist voor <strong>airco installatie {cityName}</strong> 
              en omgeving. {data.localInfo}.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-current' : 'fill-current opacity-50'}`} />
                  ))}
                </div>
                <span className="font-semibold text-white">4.7/5</span>
                <span className="text-gray-400">(163 Google reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>Installatie binnen 1 week</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Gratis Offerte {cityName}
              </a>
              <a
                href={`tel:+31${contactConfig.phoneClean}`}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Direct Bellen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lokale Service Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Gebied */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <MapPin className="h-10 w-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold mb-3">Werkgebied {cityName}</h2>
              <p className="text-gray-600 mb-4">
                Wij installeren airco's in {cityName} en directe omgeving:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {data.nearbyAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Waarom Kiezen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h2 className="text-xl font-bold mb-3">Waarom Daikin {cityName}?</h2>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Lokale monteurs uit de regio</li>
                <li>✓ Snelle levertijden</li>
                <li>✓ Bekend met lokale regelgeving</li>
                <li>✓ Persoonlijk contact</li>
                <li>✓ Service binnen 24 uur</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-orange-50 rounded-xl p-6"
            >
              <Phone className="h-10 w-10 text-orange-600 mb-4" />
              <h2 className="text-xl font-bold mb-3">Direct Contact</h2>
              <div className="space-y-3">
                <a href={`tel:+31${contactConfig.phoneClean}`} className="flex items-center gap-3 text-gray-700 hover:text-orange-600">
                  <Phone className="h-5 w-5" />
                  {contactConfig.phone}
                </a>
                <a href={`https://wa.me/31${contactConfig.whatsappClean}`} className="flex items-center gap-3 text-gray-700 hover:text-green-600">
                  <Mail className="h-5 w-5" />
                  WhatsApp: {contactConfig.whatsapp}
                </a>
                <p className="text-sm text-gray-600">
                  Ma-Do: 09:00-17:00<br />
                  Vr: 09:00-16:00
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Airco Installatie {cityName} - Uw Lokale Daikin Specialist
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Op zoek naar een betrouwbare <strong>airco installateur in {cityName}</strong>? 
                Daikin Airco Limburg is al jaren dé specialist voor het installeren, onderhouden 
                en repareren van airconditioners in {cityName} en omstreken. Met onze gecertificeerde 
                monteurs en jarenlange ervaring garanderen wij een perfecte installatie.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
                Onze Airco Diensten in {cityName}
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Airco installatie {cityName}</strong> - Professionele montage binnen 1 week, 
                    inclusief alle benodigde materialen en 5 jaar garantie
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Airco onderhoud {cityName}</strong> - Onderhoudscontract vanaf €11 per maand, 
                    inclusief jaarlijkse servicebeurt en filtervervanging
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Airco reparatie {cityName}</strong> - Snelle storingsdienst tijdens kantooruren, 
                    vaak dezelfde dag nog geholpen
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
                Populaire Daikin Modellen in {cityName}
              </h3>
              
              <p>
                In {cityName} installeren wij vooral de populaire <strong>Daikin Stylish</strong> en 
                <strong> Daikin Emura</strong> modellen. Deze airconditioners combineren een stijlvol 
                design met fluisterstille werking (vanaf 19 dB) en hebben een A+++ energielabel. 
                Perfect voor de moderne woning in {cityName}.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h4 className="font-semibold text-lg mb-2">Wist u dat?</h4>
                <p>
                  {data.localInfo}. Wij kennen de lokale situatie in {cityName} als geen ander 
                  en kunnen u daarom het beste advies geven voor uw specifieke situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Contact Section */}
      <ContactOptimized />

      {/* Interne Links naar andere steden */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Onze Service in Andere Steden
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {Object.keys(cityData).filter(c => c !== cityKey).map((citySlug) => (
              <Link
                key={citySlug}
                to={`/werkgebied/${citySlug}`}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                {cityData[citySlug].title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}