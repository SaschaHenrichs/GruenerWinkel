import PageHero from "@/components/PageHero";
import { Image as ImageIcon, Camera } from "lucide-react";

const Galerie = () => {
  // Decorative tiles – keine Stock-Fotos. Wird durch User-Bilder ersetzt.
  const tiles = [
    { label: "Frühling", sub: "März – Mai", color: "#4A7C59", shape: "blob-shape-1" },
    { label: "Sommer", sub: "Juni – August", color: "#F9A03F", shape: "blob-shape-2" },
    { label: "Herbst", sub: "September – November", color: "#E2725B", shape: "blob-shape-3" },
    { label: "Vereinsheim", sub: "unser Treffpunkt", color: "#4A7C59", shape: "blob-shape-2" },
    { label: "Feste", sub: "wenn richtig gefeiert wird", color: "#E2725B", shape: "blob-shape-1" },
    { label: "Natur pur", sub: "im Sportpark Wedau", color: "#F9A03F", shape: "blob-shape-3" },
  ];

  return (
    <div data-testid="galerie-page">
      <PageHero
        eyebrow="Galerie"
        title="Bilder aus unserem Vereinsleben."
        subtitle="Demnächst an dieser Stelle: echte Eindrücke aus dem Grünen Winkel."
        breadcrumb="Galerie"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#F9A03F]/15 text-[#F9A03F] blob-shape-1 shrink-0">
              <Camera className="w-6 h-6" />
            </span>
            <div className="flex-1">
              <span className="font-script text-xl text-[#E2725B] block">— bald hier —</span>
              <h3 className="font-display text-2xl font-semibold mb-1 mt-1">
                Echte Bilder aus dem Verein folgen
              </h3>
              <p className="text-[#4B5E53] text-sm leading-relaxed">
                Wir möchten hier keine austauschbaren Stockfotos zeigen, sondern Bilder, die
                wirklich aus dem Grünen Winkel kommen. Habt ihr schöne Fotos vom Vereinsleben?
                Sendet sie uns gerne an{" "}
                <a
                  href="mailto:info@kgvgruenerwinkel.de"
                  className="text-[#4A7C59] font-bold hover:underline"
                >
                  info@kgvgruenerwinkel.de
                </a>
                .
              </p>
            </div>
          </div>

          {/* Decorative season tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((t, i) => (
              <div
                key={t.label}
                data-testid={`gallery-tile-${t.label.toLowerCase()}`}
                className="relative aspect-[4/5] overflow-hidden border border-[#E8E3D3] bg-white"
                style={{ borderRadius: ["40px 60px 30px 50px", "30px 50px 60px 40px", "60px 30px 50px 40px"][i % 3] }}
              >
                <div
                  className={`absolute inset-4 ${t.shape} dots-pattern`}
                  style={{ background: t.color }}
                />
                <div className="absolute inset-12 bg-[#FDFBF7] blob-shape-2 grid place-items-center text-center p-6">
                  <div>
                    <ImageIcon className="w-7 h-7 text-[#4B5E53] mx-auto mb-2 opacity-50" strokeWidth={1.5} />
                    <div className="font-display text-2xl font-semibold text-[#1E2E24]">{t.label}</div>
                    <div className="font-script text-lg text-[#E2725B] mt-1">{t.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4 text-center">
            {[
              { n: "80", l: "Jahre Vereinsleben" },
              { n: "54", l: "kleine Welten" },
              { n: "∞", l: "Geschichten" },
            ].map((s) => (
              <div key={s.l} className="bg-[#F4F1E1] rounded-3xl p-6 border border-[#E8E3D3]">
                <div className="font-display text-4xl font-semibold text-[#4A7C59]">{s.n}</div>
                <div className="font-script text-xl text-[#E2725B] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
