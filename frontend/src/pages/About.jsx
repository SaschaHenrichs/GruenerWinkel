import PageHero from "@/components/PageHero";
import { Calendar, Sprout, MapPin, Waves, Trophy } from "lucide-react";

const About = () => {
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="Wir über uns"
        title="Rund um den KGV Grüner Winkel"
        subtitle="Ein Verein mit Geschichte, mitten in einer der schönsten Ecken Duisburgs."
        breadcrumb="Wir über uns"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div className="relative lg:sticky lg:top-28">
            {/* REPLACE WITH GOOGLE DRIVE IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
              alt="Gemeinschaft im Garten"
              className="w-full h-[520px] object-cover rounded-[60px_30px_60px_30px] shadow-xl"
            />
            <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl p-6 max-w-xs shadow-xl border border-[#E8E3D3]">
              <div className="flex items-center gap-2 mb-2 text-[#4A7C59] font-semibold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4" /> Gegründet
              </div>
              <div className="font-display text-4xl font-semibold text-[#1E2E24]">1946</div>
              <p className="text-xs text-[#4B5E53] mt-2">
                Wir blicken auf fast 80 Jahre Vereinsgeschichte zurück.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-[#4B5E53]">
            <p>
              Der Verein wurde <strong className="text-[#1E2E24]">1946</strong> gegründet und hat heute
              <strong className="text-[#1E2E24]"> 54 Gartenparzellen</strong> und einen abgeschlossenen
              Parkplatz, mit einer Gesamtfläche von <strong className="text-[#1E2E24]">18.812 m²</strong>.
              In Duisburg gibt es etwa <strong className="text-[#1E2E24]">106 Kleingartenvereine</strong>,
              die dem Verband Duisburger Kleingartenvereine e.V. angeschlossen sind.
            </p>
            <p>
              Unsere Gartenfreunde haben einen großen Vorteil gegenüber anderer Gartenvereine:
              wenn mal richtig gefeiert werden soll, dann können sie es bei uns tun – denn wir haben
              keine direkten Nachbarn, die sich über Lärm aufregen könnten. Unsere Nachbarn sind der
              Friedhof und der Sportpark Wedau.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-4">
              {[
                { icon: Trophy, t: "MSV-Arena", d: "Die Heimstätte des MSV Duisburg liegt in unmittelbarer Nähe. Auf dem Vorplatz finden regelmäßig Trödelmärkte, Kirmes und Zirkus statt." },
                { icon: Waves, t: "Regattabahn Duisburg", d: "Ca. 2.300 m lang und 150 m breit – Austragungsort nationaler und internationaler Wettkämpfe im Kanu- und Rudersport." },
                { icon: Sprout, t: "Sechs-Seen-Platte", d: "150 Hektar Wasserfläche, 18 km Wanderwege – ein traumhaftes Erholungsgebiet im Stadtteil Wedau." },
                { icon: MapPin, t: "Mitten drin", d: "Wir sind von allen sportlichen Attraktionen nur einen Steinwurf entfernt – ein echtes Stück Lebensqualität." },
              ].map((b) => (
                <div key={b.t} className="bg-white border border-[#E8E3D3] rounded-3xl p-6">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-[#4A7C59]/10 text-[#4A7C59] blob-shape-1 mb-4">
                    <b.icon className="w-5 h-5" />
                  </span>
                  <h4 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">{b.t}</h4>
                  <p className="text-sm text-[#4B5E53] leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
