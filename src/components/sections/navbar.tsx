import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactConfig } from "@/config/contact";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isHashLink: false },
    { href: "/#products", label: "Producten", isHashLink: true },
    { href: "/#services", label: "Diensten", isHashLink: true },
    { href: "/werkgebied", label: "Werkgebied", isHashLink: false },
    { href: "/#contact", label: "Contact", isHashLink: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isHashLink) {
      e.preventDefault();
      const hash = link.href.split('#')[1];
      
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl"
          >
            <Wind className={`h-8 w-8 ${isScrolled ? "text-orange-500" : "text-white"}`} />
            <span className={`${isScrolled ? "text-gray-900" : "text-white"}`}>
              Daikin Airco Limburg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-400"
                } ${
                  location.pathname === link.href.split('#')[0]
                    ? isScrolled
                      ? "text-orange-500"
                      : "text-orange-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href={`tel:+31${contactConfig.phoneClean}`}
              className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>{contactConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link);
                    setIsOpen(false);
                  }}
                  className={`block py-2 font-medium transition-colors ${
                    location.pathname === link.href.split('#')[0]
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <a
                href={`tel:+31${contactConfig.phoneClean}`}
                className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md w-full"
              >
                <Phone className="h-4 w-4" />
                <span>Bel {contactConfig.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}