import { Leaf, Snowflake, Euro, ThermometerSun } from "lucide-react";

const benefits = [
  {
    title: "Energiezuinig",
    description: "Bespaar op uw energierekening met onze A+++ energielabel airconditioners",
    icon: Leaf,
  },
  {
    title: "Perfecte Temperatuur",
    description: "Geniet van aangename koeling in de zomer en efficiënte verwarming in de winter",
    icon: ThermometerSun,
  },
  {
    title: "Kosten Effectief",
    description: "Aantrekkelijke prijzen en verschillende financieringsmogelijkheden",
    icon: Euro,
  },
  {
    title: "Jaar-rond Comfort",
    description: "Optimaal binnenklimaat in elk seizoen met één systeem",
    icon: Snowflake,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Waarom Kiezen voor Onze Daikin Airconditioners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 mb-4 text-[rgb(68,200,245)]" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}