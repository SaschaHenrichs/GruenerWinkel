import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Mailbox, Droplets, Bell, CalendarOff } from "lucide-react";

const Aktuelles = () => {
  return (
    <div data-testid="aktuelles-page">
      <PageHero
        eyebrow="Aktuelles"
        title="Liebe Gartenfreunde – hier die nächsten Termine."
        subtitle="Wir bemühen uns, diese Seite laufend zu aktualisieren. Sollte etwas fehlen, sprecht uns gerne an."
        breadcrumb="Aktuelles"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {/* Keine-Termine-Hinweis */}
          <div
            data-testid="no-events-notice"
            className="mb-10 bg-white border border-[#E8E3D3] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#E2725B]/12 text-[#E2725B] blob-shape-1 shrink-0">
              <CalendarOff className="w-6 h-6" />
            </span>
            <div className="flex-1">
              <span className="font-script text-xl text-[#E2725B] block leading-none">— kurze Info —</span>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1E2E24] mt-1 mb-2">
                Aktuell stehen keine Termine an.
              </h2>
              <p className="text-sm text-[#4B5E53] leading-relaxed">
                Sobald neue Termine feststehen, findet ihr sie an dieser Stelle und am Schwarzen
                Brett im Vereinsheim. Bei Fragen meldet euch gerne beim{" "}
                <Link to="/vorstand" className="text-[#4A7C59] font-bold hover:underline">Vorstand</Link>.
              </p>
            </div>
          </div>

          {/* Foto-Banner */}
          <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {["g06.jpg", "g22.jpg", "g35.jpg", "g42.jpg"].map((f, i) => (
              <img
                key={f}
                src={process.env.PUBLIC_URL + `/images/gallery/${f}`}
                alt="Vereinsleben"
                loading="lazy"
                className="w-full aspect-square object-cover border border-[#E8E3D3]"
                style={{ borderRadius: ["30px 50px 40px 60px", "50px 30px 60px 40px", "40px 60px 30px 50px", "60px 30px 50px 40px"][i] }}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
          {/* Kummerkasten */}
          <article className="lg:col-span-2 bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-6">
              <Mailbox className="w-6 h-6" />
            </span>
            <span className="font-script text-xl text-[#E2725B] block mb-1">— vom Vorstand —</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1E2E24] tracking-tight mb-5">
              Briefkasten – Kummerkasten am Clubhaus
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Am Clubhaus neben dem Küchenfenster hat der Vorstand einen Brief- bzw. Kummerkasten
              angebracht. Hier kann sich jedes Mitglied auch in schriftlicher Form Luft machen.
            </p>
            <div className="bg-[#F4F1E1] rounded-2xl p-6 border border-[#E8E3D3]">
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-[#E2725B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-[#1E2E24] mb-2">Zählerstände abgeben</h4>
                  <p className="text-sm text-[#4B5E53] leading-relaxed">
                    Bitte die Zählerstände mit <strong>Garten-Nr. und Name</strong> in den
                    Briefkasten einwerfen. Andernfalls muss der Vorstand schätzen, da nicht mehr
                    wie früher Zettel eingesammelt werden. Computerinhaber können selbstverständlich
                    weiterhin per E-Mail senden. Der Zeitraum für die Ablesung wird rechtzeitig
                    bekannt gegeben.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Seasonal aside */}
          <aside className="bg-[#1E2E24] text-white rounded-3xl p-8 relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#4A7C59]/30 blob-shape-1" />
            <div className="relative">
              <Bell className="w-8 h-8 mb-4 text-[#F9A03F]" />
              <span className="font-script text-xl text-[#F9A03F] block">— Saisonal —</span>
              <h3 className="font-display text-2xl font-semibold mt-1 mb-3">Winterdienst nicht vergessen</h3>
              <p className="opacity-95 leading-relaxed mb-5 text-sm">
                Da wir eine öffentliche Anlage sind, müssen die Wege auch im Winter
                verkehrssicher sein – Laub räumen und bei Eis/Schnee freihalten.
              </p>
              <Link
                to="/winterdienst"
                data-testid="aktuelles-winterdienst-link"
                className="inline-flex items-center gap-2 bg-[#F9A03F] text-[#1E2E24] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors"
              >
                Zum Winterdienst →
              </Link>
            </div>
          </aside>

          {/* Hecken / Naturschutz */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10 lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="font-script text-xl text-[#E2725B] block">— bitte merken —</span>
                <h3 className="font-display text-2xl font-semibold text-[#1E2E24] mt-1 mb-3">
                  Heckenschnitt: 1. März – 30. September verboten
                </h3>
                <p className="text-sm text-[#4B5E53] leading-relaxed">
                  Gemäß Bundesnaturschutzgesetz dürfen Hecken, Gehölze und Gebüsche in dieser Zeit
                  in Deutschland <strong>nicht entfernt oder stark geschnitten</strong> werden – zum
                  Schutz von brütenden Vögeln und Insekten. Zulässig sind nur schonende Form- und
                  Pflegeschnitte.
                </p>
              </div>
              <div>
                <span className="font-script text-xl text-[#4A7C59] block">— weiterlesen —</span>
                <h3 className="font-display text-2xl font-semibold text-[#1E2E24] mt-1 mb-3">
                  Recht & Regeln auf einen Blick
                </h3>
                <p className="text-sm text-[#4B5E53] leading-relaxed">
                  Eine verständliche Übersicht zu Bundeskleingartengesetz, Garten- und Bauordnung,
                  Lauben, Bienenhaltung und mehr findet ihr auf unserer{" "}
                  <Link to="/recht" className="text-[#4A7C59] font-bold hover:underline">
                    Recht-Seite
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aktuelles;
