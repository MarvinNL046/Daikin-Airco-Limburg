import { Mail, MapPin, Phone, Clock, MessageSquare, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { contactConfig } from "@/config/contact";

export function FooterOptimized() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{contactConfig.companyName}</h3>
            <p className="text-gray-400 mb-4">
              Specialist in Daikin airconditioningsystemen in heel Limburg. 
              Professionele installatie, onderhoud en reparatie.
            </p>
            <div className="flex gap-4">
              <a 
                href={contactConfig.socialMedia.facebook} 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={contactConfig.socialMedia.instagram} 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <a href={`tel:+31${contactConfig.phoneClean}`} className="hover:text-orange-500 transition-colors">
                    {contactConfig.phone}
                  </a>
                  <p className="text-sm text-gray-400">Telefoon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <a href={`https://wa.me/31${contactConfig.whatsappClean}`} className="hover:text-green-500 transition-colors">
                    {contactConfig.whatsapp}
                  </a>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <a href={`mailto:${contactConfig.email}`} className="hover:text-blue-500 transition-colors">
                    {contactConfig.email}
                  </a>
                  <p className="text-sm text-gray-400">E-mail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="text-gray-400">
                  <p>{contactConfig.address.street}</p>
                  <p>{contactConfig.address.postalCode} {contactConfig.address.city}</p>
                  <p className="text-sm italic">{contactConfig.address.note}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Installatie Limburg
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Onderhoud
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Reparatie
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Daikin Warmtepompen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Gratis Offerte
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              Openingstijden
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Maandag</span>
                <span>{contactConfig.openingHours.monday}</span>
              </li>
              <li className="flex justify-between">
                <span>Dinsdag</span>
                <span>{contactConfig.openingHours.tuesday}</span>
              </li>
              <li className="flex justify-between">
                <span>Woensdag</span>
                <span>{contactConfig.openingHours.wednesday}</span>
              </li>
              <li className="flex justify-between">
                <span>Donderdag</span>
                <span>{contactConfig.openingHours.thursday}</span>
              </li>
              <li className="flex justify-between">
                <span>Vrijdag</span>
                <span>{contactConfig.openingHours.friday}</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span className="text-red-400">{contactConfig.openingHours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag</span>
                <span className="text-red-400">{contactConfig.openingHours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Werkgebied Links */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Werkgebied:</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link to="/werkgebied/maastricht" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Maastricht
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/heerlen" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Heerlen
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/sittard" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Sittard
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/roermond" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Roermond
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/geleen" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Geleen
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/kerkrade" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Kerkrade
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied/brunssum" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Airco Brunssum
                </Link>
                <span className="text-gray-600">•</span>
                <Link to="/werkgebied" className="text-orange-500 hover:text-orange-400 transition-colors font-medium">
                  Heel Limburg →
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {currentYear} {contactConfig.companyName}. Alle rechten voorbehouden.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                KvK: 12345678 • BTW: NL123456789B01
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}