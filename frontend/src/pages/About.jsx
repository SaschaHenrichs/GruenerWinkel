import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Calendar, Sprout, MapPin, Waves, Trophy, Building2, Compass, Leaf } from "lucide-react";

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
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          {/* Decorative tile instead of stock photo */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#4A7C59] blob-shape-1" />
              <div className="absolute inset-5 bg-[#F4F1E1] blob-shape-2 grid place-items-center p-8 dots-pattern">
                <div className="text-center">
                  <div className="font-script text-3xl text-[#E2725B] mb-2">gegründet</div>
                  <div className="font-display text-[88px] sm:text-[120px] font-semibold text-[#1E2E24] leading-none">1946</div>
                  <div className="font-script text-2xl text-[#4A7C59] mt-3">— ein Stück Heimat —</div>
                  <div className="mt-6 grid grid-cols-2 gap-3 max-w-[240px] mx-auto">
                    <div className="bg-white rounded-2xl p-3 border border-[#E8E3D3]">
                      <div className="font-display text-2xl font-semibold text-[#4A7C59]">54</div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[#4B5E53]">Parzellen</div>
                    </div>
                    <div className="bg-white rounded-2xl p-3 border border-[#E8E3D3]">
                      <div className="font-display text-2xl font-semibold text-[#E2725B]">80</div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-[#4B5E53]">Jahre</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-[#F9A03F] text-[#1E2E24] rounded-full px-4 py-2 font-script text-xl rotate-[6deg] shadow-lg animate-wiggle">
                seit 80 Jahren
              </div>
            </div>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-[#4B5E53]">
            <p>
              Unser Verein wurde <strong className="text-[#1E2E24]">1946</strong> gegründet – also
              kurz nach dem Krieg, in einer Zeit, in der Kleingärten viele Familien mit Obst und Gemüse
              versorgten. Heute haben wir <strong className="text-[#1E2E24]">54 Gartenparzellen</strong>{" "}
              und einen abgeschlossenen Parkplatz auf einer Gesamtfläche von
              <strong className="text-[#1E2E24]"> 18.812 m²</strong>. In Duisburg gibt es etwa
              <strong className="text-[#1E2E24]"> 106 Kleingartenvereine</strong> mit zusammen über
              7.000 Pächterinnen und Pächtern auf rund 2,3 Millionen m² – wir gehören zum
              <strong className="text-[#1E2E24]"> Bezirk E (Mitte)</strong> im Verband der Duisburger
              Kleingartenvereine e.V.
            </p>

            <p>
              <span className="font-script text-2xl text-[#E2725B]">Unser kleiner Bonus:</span> Wenn
              bei uns gefeiert wird, beschwert sich niemand. Denn unsere Nachbarn sind der Friedhof
              und der Sportpark Wedau – keine Wohnhäuser, also kein Stress mit Lärmnachbarn.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-4">
              {[
                { icon: Trophy, t: "MSV-Arena", d: "Die Heimstätte des MSV Duisburg liegt direkt nebenan. Auf dem Vorplatz finden regelmäßig Trödelmärkte, Kirmes und Zirkus statt." },
                { icon: Waves, t: "Regattabahn Duisburg", d: "Ca. 2.300 m lang und 150 m breit – Austragungsort nationaler und internationaler Wettkämpfe im Kanu- und Rudersport." },
                { icon: Sprout, t: "Sechs-Seen-Platte", d: "150 Hektar Wasserfläche, 18 km Wanderwege – ein traumhaftes Erholungsgebiet im Stadtteil Wedau." },
                { icon: Compass, t: "Bezirk E (Mitte)", d: "Wir sind dem Verband der Duisburger Kleingartenvereine e.V. angeschlossen – einer der größten in NRW." },
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

            {/* History timeline */}
            <div className="mt-12 bg-white rounded-3xl border border-[#E8E3D3] p-8">
              <span className="font-script text-2xl text-[#E2725B]">— Eckpfeiler —</span>
              <h3 className="font-display text-2xl font-semibold text-[#1E2E24] mb-6 mt-1">
                Kurze Chronik
              </h3>
              <ol className="space-y-5">
                {[
                  { y: "1946", t: "Vereinsgründung", d: "Nach dem Krieg entsteht der KGV Grüner Winkel – Selbstversorgung und Gemeinschaft als Idee." },
                  { y: "1996", t: "50-jähriges Jubiläum", d: "Die Presse berichtet, der Verein feiert mit Mitgliedern und Gartenfreunden." },
                  { y: "2006", t: "Festschrift zum 60.", d: "Eine eigene Festschrift wird zum Jubiläum herausgegeben." },
                  { y: "Heute", t: "Lebendige Gemeinschaft", d: "54 Parzellen, ein gepflegtes Vereinsheim, regelmäßige Treffen und Aktionen." },
                  { y: "2026", t: "80 Jahre · Jubiläum", d: "Ein besonderes Jahr für uns – wir feiern stolze 80 Jahre Grüner Winkel.", highlight: true },
                ].map((e) => (
                  <li key={e.y} className="flex gap-5">
                    <div className={`shrink-0 w-20 font-display font-semibold ${e.highlight ? "text-[#E2725B]" : "text-[#4A7C59]"} text-lg pt-1`}>
                      {e.y}
                    </div>
                    <div className={`flex-1 pb-5 border-b last:border-b-0 ${e.highlight ? "border-[#E2725B]/30" : "border-[#E8E3D3]"}`}>
                      <div className="font-display font-semibold text-[#1E2E24]">{e.t}</div>
                      <div className="text-sm text-[#4B5E53] mt-1 leading-relaxed">{e.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 bg-[#F4F1E1] rounded-3xl border border-[#E8E3D3] p-7">
              <div className="flex items-start gap-4">
                <Leaf className="w-7 h-7 text-[#4A7C59] mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">
                    Mehr als nur ein Garten
                  </h4>
                  <p className="text-sm text-[#4B5E53] leading-relaxed">
                    Kleingärten leisten einen wichtigen Beitrag zur Biodiversität, zum Klimaschutz
                    und zur Integration. Familien mit Kindern, Erfahrene und Neulinge gärtnern hier
                    Seite an Seite. Mehr zu den{" "}
                    <Link to="/recht" className="text-[#4A7C59] font-bold hover:underline">
                      Regeln und gesetzlichen Grundlagen
                    </Link>{" "}
                    findet ihr auf unserer Recht-Seite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
