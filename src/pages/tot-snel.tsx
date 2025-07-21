import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TotSnelPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Bedankt voor uw aanvraag!
        </h1>
        
        <p className="text-gray-600 mb-8">
          We hebben uw bericht in goede orde ontvangen. Een van onze specialisten neemt binnen 24 uur contact met u op om uw wensen te bespreken.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-900 mb-2">
            <strong>Spoed?</strong> Bel ons direct:
          </p>
          <a 
            href="tel:0850606649" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            085 060 66 49
          </a>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar de homepage
        </Link>
      </div>
    </div>
  );
}