import { TimelineEvent } from "@/components/timeline/timeline-event";

const timelineEvents = [
  {
    year: 1924,
    title: "Oprichting in Osaka",
    description: "Akira Yamada richt Osaka Kinzoku Kogyosho Ltd. op in Osaka, Japan. Het bedrijf start met slechts 15 medewerkers en specialiseert zich in vliegtuigradiatoren.",
    category: "Oprichting"
  },
  {
    year: 1936,
    title: "Eerste Koelunit Innovatie",
    description: "Daikin levert de 'Mifujirator', de eerste koelunit in Japan met fluorkoolstofkoelmiddel. Dit markeert het begin van Daikin's focus op koeltechnologie.",
    category: "Innovatie"
  },
  {
    year: 1951,
    title: "Revolutie in Airconditioning",
    description: "Een historisch moment: Daikin ontwikkelt Japan's eerste pakket-airconditioner, waarmee het bedrijf officieel de airconditioningmarkt betreedt.",
    category: "Innovatie"
  },
  {
    year: 1958,
    title: "Doorbraak in Huishoudelijke Airco",
    description: "Introductie van de eerste raam-airconditioner voor huishoudelijk gebruik, waarmee airconditioning toegankelijk wordt voor particuliere woningen.",
    category: "Innovatie"
  },
  {
    year: 1963,
    title: "Strategische Naamswijziging",
    description: "Het bedrijf wordt omgedoopt tot Daikin Kogyo Co., Ltd., wat de groeiende ambities en internationale focus weerspiegelt.",
    category: "Groei"
  },
  {
    year: 1969,
    title: "Start Europese Expansie",
    description: "Daikin zet voet op Europese bodem met de eerste vestiging op Malta, het begin van een succesvolle internationale expansie.",
    category: "Expansie"
  },
  {
    year: 1973,
    title: "Europese Productiebasis",
    description: "Opening van de eerste Europese fabriek in België, een strategische zet die Daikin's positie in Europa versterkt en lokale productie mogelijk maakt.",
    category: "Expansie"
  },
  {
    year: 1982,
    title: "Wereldwijde Merkidentiteit",
    description: "Het bedrijf krijgt zijn huidige naam: Daikin Industries, Ltd., wat het begin markeert van een nieuw tijdperk als wereldwijd merk.",
    category: "Groei"
  },
  {
    year: 1994,
    title: "Nieuwe Leiding, Nieuwe Visie",
    description: "Noriyuki Inouye wordt benoemd tot president en vertegenwoordigend directeur, wat leidt tot een periode van versnelde internationale groei.",
    category: "Leiderschap"
  },
  {
    year: 2004,
    title: "Noord-Amerikaanse Expansie",
    description: "Daikin betreedt de Noord-Amerikaanse airconditioningmarkt, een cruciale stap in de wereldwijde expansiestrategie.",
    category: "Expansie"
  },
  {
    year: 2012,
    title: "Duurzame Innovatie",
    description: "Daikin introduceert als eerste R32-koelmiddel in zijn producten, wat een nieuwe standaard zet voor milieuvriendelijke klimaatbeheersing.",
    category: "Innovatie"
  },
  {
    year: 2015,
    title: "Open Innovatie Strategie",
    description: "In een baanbrekende zet verleent Daikin gratis toegang tot zijn R32-patenten, wat de industrie stimuleert om over te stappen op milieuvriendelijkere oplossingen.",
    category: "Innovatie"
  },
  {
    year: 2017,
    title: "Amerikaanse Productiemijlpaal",
    description: "Opening van Daikin Texas Technology Park, de grootste productiefaciliteit van het bedrijf, wat de toewijding aan de Amerikaanse markt onderstreept.",
    category: "Expansie"
  },
  {
    year: 2024,
    title: "100 Jaar Wereldwijd Leiderschap",
    description: "Daikin viert zijn 100-jarig bestaan als wereldleider in klimaatbeheersing met meer dan 96.000 werknemers in 173 landen. Van een klein Japans bedrijf uitgegroeid tot een mondiale pionier in duurzame klimaatoplossingen.",
    category: "Mijlpaal"
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            100 Jaar Innovatie in Klimaatbeheersing
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Van een bescheiden start met 15 medewerkers tot een wereldwijde leider met meer dan 96.000 werknemers. 
            Ontdek de mijlpalen die Daikin hebben gevormd tot de innovatieve klimaatspecialist van vandaag.
          </p>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                category={event.category}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}