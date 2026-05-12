import { useState } from "react";
import PageHero from "@/components/PageHero";
import { X, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = Array.from({ length: 45 }, (_, i) => ({
  src: process.env.PUBLIC_URL + `/images/gallery/g${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Eindruck aus dem KGV Grüner Winkel ${i + 1}`,
}));

const radii = [
  "rounded-[40px_60px_30px_50px]",
  "rounded-[30px_50px_60px_40px]",
  "rounded-[60px_30px_50px_40px]",
  "rounded-[50px_60px_30px_40px]",
  "rounded-[30px_50px_50px_60px]",
  "rounded-[40px_50px_60px_30px]",
];

const Galerie = () => {
  const [active, setActive] = useState(null);

  const prev = (e) => { e.stopPropagation(); setActive((a) => (a > 0 ? a - 1 : PHOTOS.length - 1)); };
  const next = (e) => { e.stopPropagation(); setActive((a) => (a < PHOTOS.length - 1 ? a + 1 : 0)); };

  return (
    <div data-testid="galerie-page">
      <PageHero
        eyebrow="Galerie"
        title="Bilder aus unserem Vereinsleben."
        subtitle="Eindrücke aus dem Grünen Winkel – Blumen, Beete, Begegnungen."
        breadcrumb="Galerie"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center gap-5">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#F9A03F]/15 text-[#F9A03F] blob-shape-1 shrink-0">
              <Camera className="w-5 h-5" />
            </span>
            <p className="text-sm text-[#4B5E53] leading-relaxed">
              <span className="font-script text-xl text-[#E2725B]">— alle Bilder aus dem Verein —</span>
              <br />
              Habt ihr eigene Fotos, die hier nicht fehlen dürfen? Sendet sie gerne an{" "}
              <a href="mailto:info@kgvgruenerwinkel.de" className="text-[#4A7C59] font-bold hover:underline">
                info@kgvgruenerwinkel.de
              </a>
              .
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {PHOTOS.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setActive(i)}
                data-testid={`gallery-photo-${i + 1}`}
                className={`group block w-full break-inside-avoid overflow-hidden border border-[#E8E3D3] bg-white ${radii[i % radii.length]} cursor-zoom-in transition-transform hover:-translate-y-0.5`}
                aria-label={p.alt}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </button>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-4 text-center">
            {[
              { n: "80", l: "Jahre Vereinsleben" },
              { n: "54", l: "kleine Welten" },
              { n: PHOTOS.length, l: "Eindrücke hier" },
            ].map((s) => (
              <div key={s.l} className="bg-[#F4F1E1] rounded-3xl p-6 border border-[#E8E3D3]">
                <div className="font-display text-4xl font-semibold text-[#4A7C59]">{s.n}</div>
                <div className="font-script text-xl text-[#E2725B] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setActive(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 grid place-items-center rounded-full bg-white text-[#1E2E24] hover:bg-[#F9A03F] transition-colors z-10"
            onClick={() => setActive(null)}
            aria-label="Schließen"
            data-testid="gallery-lightbox-close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1E2E24] transition-colors z-10"
            onClick={prev}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1E2E24] transition-colors z-10"
            onClick={next}
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={PHOTOS[active].src}
            alt={PHOTOS[active].alt}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-script text-lg">
            {active + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Galerie;
