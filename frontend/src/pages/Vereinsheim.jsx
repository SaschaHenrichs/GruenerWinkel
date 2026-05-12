import PageHero from "@/components/PageHero";
import { Home, Users, PartyPopper, Phone } from "lucide-react";

const Vereinsheim = () => {
  return (
    <div data-testid="vereinsheim-page">
      <PageHero
        eyebrow="Vereinsheim"
        title="Unser Wohnzimmer im Grünen."
        subtitle="Hier kommen wir zusammen – zum Klönen, Helfen und Feiern."
        breadcrumb="Vereinsheim"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          {/* Vereinsfoto */}
          <div className="relative w-full max-w-md mx-auto">
            <img
                          src={process.env.PUBLIC_URL + "/images/gallery/g25.jpg"}
              alt="Vereinsheim KGV Grüner Winkel"
              className="w-full aspect-[5/6] object-cover rounded-[60px_30px_60px_30px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
            />
            <img
                          src={process.env.PUBLIC_URL + "/images/gallery/g41.jpg"}
              alt="Detail aus dem Verein"
              className="absolute -bottom-8 -right-6 w-40 h-40 object-cover blob-shape-2 border-4 border-[#FDFBF7] shadow-xl"
            />
            <div className="absolute -top-3 -right-3 bg-[#4A7C59] text-white rounded-full px-4 py-2 font-script text-lg rotate-[6deg] shadow-lg animate-wiggle">
              keine Nachbarn!
            </div>
          </div>

          <div>
            <span className="font-script text-3xl text-[#F9A03F] block mb-1">Treffpunkt</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight mb-6">
              Feiern ohne Stress.
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Unsere Gartenfreunde haben einen großen Vorteil gegenüber anderen Vereinen:
              Wenn mal richtig gefeiert werden soll, dann können sie es bei uns – denn wir
              haben keine direkten Nachbarn, die sich beschweren könnten.
            </p>
            <p className="text-[#4B5E53] leading-relaxed mb-8">
              Unsere Nachbarn sind der Friedhof und der Sportpark Wedau. Das Vereinsheim ist
              Treffpunkt für unsere Mitglieder und Veranstaltungen.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Home, t: "Gemütlich" },
                { icon: Users, t: "Für Mitglieder" },
                { icon: PartyPopper, t: "Feste & Feiern" },
              ].map((i) => (
                <div key={i.t} className="bg-white border border-[#E8E3D3] rounded-2xl p-4 text-center">
                  <i.icon className="w-5 h-5 text-[#4A7C59] mx-auto mb-2" />
                  <div className="text-sm font-bold text-[#1E2E24]">{i.t}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#F4F1E1] rounded-2xl p-6 border border-[#E8E3D3]">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#4A7C59] mt-0.5" />
                <p className="text-sm text-[#4B5E53] leading-relaxed">
                  <strong className="text-[#1E2E24]">Vereinsheim-Verantwortlicher:</strong>{" "}
                  Manuel Pelzer ·{" "}
                  <a href="tel:+491624670519" className="text-[#4A7C59] font-bold hover:underline">
                    0162 4670519
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vereinsheim;
