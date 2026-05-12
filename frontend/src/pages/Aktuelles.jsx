import PageHero from "@/components/PageHero";
import { Mailbox, Droplets, Bell } from "lucide-react";

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
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-6">
              <Mailbox className="w-6 h-6" />
            </span>
            <span className="inline-block mb-3 text-[11px] uppercase tracking-[0.18em] text-[#E2725B] font-semibold">
              Hinweis vom Vorstand
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1E2E24] tracking-tight mb-5">
              Briefkasten – Kummerkasten am Clubhaus
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Am Clubhaus neben dem Küchenfenster hat der Vorstand einen Brief- bzw. Kummerkasten
              angebracht. Hier kann sich jedes Mitglied auch in schriftlicher Form Luft machen.
            </p>
            <div className="bg-[#F4F1E1] rounded-2xl p-6 border border-[#E8E3D3] mb-4">
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

          <aside className="bg-gradient-to-br from-[#E2725B] to-[#F9A03F] text-white rounded-3xl p-8 relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/15 blob-shape-2" />
            <div className="relative">
              <Bell className="w-8 h-8 mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-3">Nichts verpassen</h3>
              <p className="opacity-95 leading-relaxed mb-5 text-sm">
                Alle wichtigen Termine, Hinweise und Feste findet ihr außerdem auf der
                Übersicht zu unseren Festen.
              </p>
              <a
                href="/feste"
                data-testid="aktuelles-feste-link"
                className="inline-flex items-center gap-2 bg-white text-[#E2725B] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1E2E24] hover:text-white transition-colors"
              >
                Zu den Festen →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Aktuelles;
