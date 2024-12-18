import { Check, Minus } from "lucide-react";

const comparisonData = {
  headers: ["Kenmerken", "Sensira", "Perfera", "Emura", "Stylish"],
  features: [
    {
      name: "Energielabel koelen",
      values: ["A++", "A+++", "A+++", "A+++"]
    },
    {
      name: "Energielabel verwarmen",
      values: ["A+", "A++", "A+++", "A+++"]
    },
    {
      name: "Geluidsniveau (min. dB)",
      values: ["21dB", "19dB", "19dB", "19dB"]
    },
    {
      name: "Flash Streamer luchtzuivering",
      values: [false, true, true, true]
    },
    {
      name: "3-D luchtstroomregeling",
      values: [false, true, true, true]
    },
    {
      name: "Wifi-besturing ingebouwd",
      values: [false, true, true, true]
    },
    {
      name: "Bewegingssensor",
      values: [false, true, true, true]
    },
    {
      name: "Coanda luchtstroomeffect",
      values: [false, false, false, true]
    },
    {
      name: "Verkrijgbaar in meerdere kleuren",
      values: [false, false, true, true]
    }
  ],
  prices: ["Vanaf €1.599,-", "Vanaf €1.899,-", "Vanaf €2.199,-", "Vanaf €2.399,-"]
};

export function ProductComparison() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={index}
                    className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 ${
                      index === 0 ? "sticky left-0 bg-gray-50 z-10" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.features.map((feature, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 sticky left-0 bg-white whitespace-nowrap font-medium">
                    {feature.name}
                  </td>
                  {feature.values.map((value, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-sm text-gray-600">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : (
                          <Minus className="h-5 w-5 text-gray-400" />
                        )
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50">
                  Vanaf prijs (incl. installatie)
                </td>
                {comparisonData.prices.map((price, index) => (
                  <td key={index} className="px-6 py-4 text-sm font-semibold text-primary">
                    {price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          * Prijzen zijn inclusief BTW en standaard installatie. Exacte prijs is afhankelijk van uw situatie.
        </div>
      </div>
    </div>
  );
}