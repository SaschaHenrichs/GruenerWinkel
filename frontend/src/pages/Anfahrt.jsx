import PageHero from "@/components/PageHero";
import { MapPin, ExternalLink, Car, Bus } from "lucide-react";

const Anfahrt = () => {
  return (
    <div data-testid="anfahrt-page">
      <PageHero
        eyebrow="Anfahrt & Überblick"
        title="So finden Sie zu uns."
        subtitle="Mitten in Duisburg-Wedau, in direkter Nähe zur MSV-Arena."
        breadcrumb="Anfahrt"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-6">
              <MapPin className="w-6 h-6" />
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1E2E24] mb-3 tracking-tight">
              Kleingartenverein Grüner Winkel e.V.
            </h2>
            <p className="text-[#4B5E53] mb-1">Im Verband der Duisburger Kleingartenvereine e.V.</p>
            <p className="text-[#1E2E24] font-display text-xl mt-4 leading-snug">
              Kruppstraße 35a<br />
              47055 Duisburg
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kruppstra%C3%9Fe+35a+47055+Duisburg"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="anfahrt-directions-link"
                className="flex items-center gap-3 bg-[#4A7C59] text-white px-5 py-4 rounded-2xl font-semibold hover:bg-[#3A6347] transition-colors"
              >
                <Car className="w-5 h-5" /> Route planen <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              <a
                href="https://maps.google.de/maps?ll=51.41152,6.7881336&z=17&t=h&hl=de"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="anfahrt-aerial-link"
                className="flex items-center gap-3 border-2 border-[#1E2E24] text-[#1E2E24] px-5 py-4 rounded-2xl font-semibold hover:bg-[#1E2E24] hover:text-white transition-colors"
              >
                <Bus className="w-5 h-5" /> Blick von oben <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E3D3]">
              <h4 className="font-display font-semibold text-[#1E2E24] mb-3">In der Nachbarschaft</h4>
              <ul className="space-y-2 text-sm text-[#4B5E53]">
                <li>· MSV-Arena (Vorplatz: Trödelmärkte, Kirmes, Zirkus)</li>
                <li>· Regattabahn Duisburg (Kanu- und Rudersport)</li>
                <li>· Sechs-Seen-Platte (Wandern & Erholung)</li>
                <li>· Sportpark Wedau</li>
              </ul>
              <p className="text-xs text-[#4B5E53] mt-4 font-script text-lg text-[#E2725B]">
                Bezirk E (Mitte) im Verband Duisburger Kleingartenvereine e.V.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#E8E3D3] min-h-[420px]">
            <iframe
              title="Standort KGV Grüner Winkel"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.781%2C51.408%2C6.795%2C51.415&layer=mapnik&marker=51.41152%2C6.7881336"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              data-testid="anfahrt-map"
            />
          </div>
        </div>

        {/* Foto-Strip */}
        <div className="mx-auto max-w-7xl px-5 lg:px-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {["g07.jpg", "g15.jpg", "g26.jpg", "g37.jpg"].map((f, i) => (
            <img
              key={f}
              src={process.env.PUBLIC_URL + `/images/gallery/${f}`}
              alt="Eindruck aus dem Verein"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover border border-[#E8E3D3]"
              style={{ borderRadius: ["30px 50px 40px 60px", "50px 30px 60px 40px", "40px 60px 30px 50px", "60px 30px 50px 40px"][i] }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Anfahrt;
