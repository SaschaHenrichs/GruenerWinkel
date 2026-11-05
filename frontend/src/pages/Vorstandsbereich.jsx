import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Key, ExternalLink, ArrowRight } from "lucide-react";

/* Werkzeuge des Vorstands.
 *
 * Zum Erweitern genuegt ein weiterer Eintrag in dieser Liste — an der Seite
 * selbst ist nichts zu aendern. "ziel" darf eine vollstaendige Adresse sein
 * (oeffnet in einem neuen Tab) oder ein interner Pfad wie "/winterdienst"
 * (bleibt in der Seite).
 */
const werkzeuge = [
  {
    titel: "Schlüsselausgabe Außentore",
    text: "Welcher Garten hat seinen Schlüssel bekommen, auf welchem Weg und mit welchem Nachweis.",
    ziel: "https://aphexx100.github.io/kleingarten-schluessel/",
    knopf: "Zur Schlüsselliste",
    icon: Key,
    accent: "#4A7C59",
    pruefname: "schluesselausgabe",
  },
];

const istExtern = (ziel) => /^https?:\/\//.test(ziel);

const Vorstandsbereich = () => {
  return (
    <div data-testid="vorstandsbereich-page">
      <PageHero
        eyebrow="Vorstandsbereich"
        title="Werkzeuge für die Vereinsarbeit."
        subtitle="Gesammelte Hilfsmittel des Vorstands. Die verlinkten Listen sind durch einen eigenen Zugangscode geschützt."
        breadcrumb="Vorstandsbereich"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <div className="grid gap-6">
            {werkzeuge.map((w) => {
              const Symbol = w.icon;
              const extern = istExtern(w.ziel);

              return (
                <div
                  key={w.titel}
                  data-testid={`werkzeug-${w.pruefname}`}
                  className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10"
                >
                  <span
                    style={{ background: `${w.accent}1F`, color: w.accent }}
                    className="grid place-items-center w-14 h-14 rounded-2xl blob-shape-1 mb-6"
                  >
                    <Symbol className="w-6 h-6" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-[#1E2E24] mb-3 tracking-tight">
                    {w.titel}
                  </h2>
                  <p className="text-[#4B5E53] leading-relaxed mb-6">{w.text}</p>

                  {extern ? (
                    <a
                      href={w.ziel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#4A7C59] text-white rounded-2xl px-5 py-3 text-sm font-semibold hover:bg-[#3A6347] transition-colors"
                    >
                      {w.knopf}
                      <ExternalLink className="w-4 h-4 opacity-80" />
                    </a>
                  ) : (
                    <Link
                      to={w.ziel}
                      className="inline-flex items-center gap-2 bg-[#4A7C59] text-white rounded-2xl px-5 py-3 text-sm font-semibold hover:bg-[#3A6347] transition-colors"
                    >
                      {w.knopf}
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Der Zugangscode steht bewusst nirgends auf dieser Seite: sie ist
              öffentlich erreichbar, auch wenn sie nicht im Menü verlinkt ist. */}
          <p className="mt-8 text-sm text-[#4B5E53] leading-relaxed">
            Die Zugangscodes bekommt ihr persönlich vom Vorstand — sie stehen aus gutem Grund
            nicht auf dieser Seite.
          </p>

          <Link
            to="/vorstand"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C59] hover:underline"
          >
            Zurück zum Vorstand
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Vorstandsbereich;
