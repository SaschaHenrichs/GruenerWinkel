import PageHero from "@/components/PageHero";
import { Home, Users, PartyPopper } from "lucide-react";

const Vereinsheim = () => {
  return (
    <div data-testid="vereinsheim-page">
      <PageHero
        eyebrow="Vereinsheim"
        title="Unser Wohnzimmer im Grünen."
        subtitle="Hier kommen wir zusammen – zum Feiern, Klönen oder einfach für einen guten Kaffee."
        breadcrumb="Vereinsheim"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* REPLACE WITH GOOGLE DRIVE IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1759716705561-3bbe0691770c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
              alt="Vereinsheim"
              className="w-full h-[480px] object-cover rounded-[60px_30px_60px_30px] shadow-xl"
            />
          </div>
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#F9A03F]/15 text-[#F9A03F] text-[12px] font-semibold uppercase tracking-[0.16em]">
              Treffpunkt
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight mb-6">
              Feiern ohne Stress.
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Unsere Gartenfreunde haben einen großen Vorteil gegenüber anderen Vereinen:
              Wenn mal richtig gefeiert werden soll, dann können sie es bei uns – denn wir
              haben keine direkten Nachbarn, die sich beschweren könnten.
            </p>
            <p className="text-[#4B5E53] leading-relaxed mb-8">
              Unsere Nachbarn sind der Friedhof und der Sportpark Wedau. Das Vereinsheim
              ist Treffpunkt für unsere Mitglieder und Veranstaltungen.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Home, t: "Gemütlich" },
                { icon: Users, t: "Für Mitglieder" },
                { icon: PartyPopper, t: "Feste & Feiern" },
              ].map((i) => (
                <div key={i.t} className="bg-white border border-[#E8E3D3] rounded-2xl p-4 text-center">
                  <i.icon className="w-5 h-5 text-[#4A7C59] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-[#1E2E24]">{i.t}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#F4F1E1] rounded-2xl p-6 border border-[#E8E3D3]">
              <p className="text-sm text-[#4B5E53]">
                <strong className="text-[#1E2E24]">Vereinsheim-Verantwortlicher:</strong>{" "}
                Manuel Pelzer ·{" "}
                <a href="tel:+491624670519" className="text-[#4A7C59] font-semibold hover:underline">
                  0162 4670519
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vereinsheim;
