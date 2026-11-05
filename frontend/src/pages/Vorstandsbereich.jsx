import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Zugangsschutz from "@/components/Zugangsschutz";
import { Key, ExternalLink, ArrowRight } from "lucide-react";

/* Werkzeuge des Vorstands.
 *
 * Zum Erweitern genuegt ein weiterer Eintrag in dieser Liste — an der Seite
 * selbst ist nichts zu aendern. Drei Arten von Zielen sind moeglich:
 *
 *   "/schluessel/"        eine eigenstaendige Seite auf dieser Domain, die
 *                         nicht zur React-App gehoert  -> normaler Link
 *   "/winterdienst"       eine Seite dieser React-App, mit route: true
 *                         gekennzeichnet               -> Link der App
 *   "https://…"           etwas Fremdes                -> neuer Tab
 */
const werkzeuge = [
  {
    titel: "Schlüsselausgabe Außentore",
    text: "Welcher Garten hat seinen Schlüssel bekommen, auf welchem Weg und mit welchem Nachweis.",
    ziel: "/schluessel/",
    knopf: "Zur Schlüsselliste",
    icon: Key,
    accent: "#4A7C59",
    pruefname: "schluesselausgabe",
  },
];

const istExtern = (ziel) => /^https?:\/\//.test(ziel);

const KNOPF =
  "inline-flex items-center gap-2 bg-[#4A7C59] text-white rounded-2xl px-5 py-3 text-sm font-semibold hover:bg-[#3A6347] transition-colors";

const Werkzeugknopf = ({ w }) => {
  if (istExtern(w.ziel)) {
    return (
      <a href={w.ziel} target="_blank" rel="noopener noreferrer" className={KNOPF}>
        {w.knopf}
        <ExternalLink className="w-4 h-4 opacity-80" />
      </a>
    );
  }
  if (w.route) {
    return (
      <Link to={w.ziel} className={KNOPF}>
        {w.knopf}
        <ArrowRight className="w-4 h-4 opacity-80" />
      </Link>
    );
  }
  /* Eigenstaendige Seite auf derselben Domain: bewusst kein Link der React-App,
     sonst versucht der Router daraus eine eigene Seite zu machen und landet
     bei "nicht gefunden". */
  return (
    <a href={w.ziel} className={KNOPF}>
      {w.knopf}
      <ArrowRight className="w-4 h-4 opacity-80" />
    </a>
  );
};

const Vorstandsbereich = () => {
  return (
    <div data-testid="vorstandsbereich-page">
      <PageHero
        eyebrow="Vorstandsbereich"
        title="Werkzeuge für die Vereinsarbeit."
        subtitle="Gesammelte Hilfsmittel des Vorstands. Der Zugang ist durch einen gemeinsamen Code geschützt."
        breadcrumb="Vorstandsbereich"
      />

      <section className="pb-20">
        <Zugangsschutz>
          <div className="mx-auto max-w-3xl px-5 lg:px-10">
            <div className="grid gap-6">
              {werkzeuge.map((w) => {
                const Symbol = w.icon;
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
                    <Werkzeugknopf w={w} />
                  </div>
                );
              })}
            </div>

            <Link
              to="/vorstand"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C59] hover:underline"
            >
              Zurück zum Vorstand
            </Link>
          </div>
        </Zugangsschutz>
      </section>
    </div>
  );
};

export default Vorstandsbereich;
