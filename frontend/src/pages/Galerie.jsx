import PageHero from "@/components/PageHero";
import { Image as ImageIcon } from "lucide-react";

/*
  REPLACE WITH GOOGLE DRIVE IMAGES
  Drive folder: https://drive.google.com/drive/folders/13Y4_szaulW0PN4DelBKnbAE6duaEBRl-?usp=sharing
  Bitte die Bilder lokal hochladen (z.B. nach /app/frontend/public/images/) und unten ersetzen.
*/
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1560266444-5d1bd041d929?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "Frühling im Garten", h: "h-[320px]" },
  { src: "https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "Gartenfreunde im Gespräch", h: "h-[420px]" },
  { src: "https://images.unsplash.com/photo-1759716705561-3bbe0691770c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "Frühlingsblüte", h: "h-[300px]" },
  { src: "https://images.unsplash.com/photo-1689870565017-522b42ed0a6d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "Bunte Beete", h: "h-[380px]" },
  { src: "https://images.unsplash.com/photo-1648136113216-8152fa9a1e31?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "St. Martin Laternen", h: "h-[340px]" },
  { src: "https://images.unsplash.com/photo-1560266444-5d1bd041d929?crop=entropy&cs=srgb&fm=jpg&q=85&w=900", alt: "Blumenwiese", h: "h-[300px]" },
];

const radii = [
  "rounded-[40px_60px_30px_50px]",
  "rounded-[30px_60px_50px_40px]",
  "rounded-[60px_30px_60px_30px]",
  "rounded-[30px_50px_30px_60px]",
  "rounded-[50px_30px_60px_30px]",
  "rounded-[40px_50px_50px_30px]",
];

const Galerie = () => {
  return (
    <div data-testid="galerie-page">
      <PageHero
        eyebrow="Galerie"
        title="Bilder aus unserem Vereinsleben."
        subtitle="Ein kleiner Eindruck von dem, was uns ausmacht – Natur, Gemeinschaft, Feste."
        breadcrumb="Galerie"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <figure
                key={i}
                data-testid={`gallery-image-${i}`}
                className="break-inside-avoid relative group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full ${img.h} object-cover ${radii[i % radii.length]} shadow-md group-hover:shadow-2xl transition-all duration-500`}
                />
                <figcaption className="absolute bottom-3 left-3 right-3 bg-white/85 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-[#1E2E24] opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#F9A03F]/15 text-[#F9A03F] blob-shape-1 shrink-0">
              <ImageIcon className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Eigene Bilder beisteuern?</h3>
              <p className="text-[#4B5E53] text-sm leading-relaxed">
                Habt ihr schöne Fotos vom Vereinsleben? Sendet sie uns gerne an{" "}
                <a href="mailto:info@kgvgruenerwinkel.de" className="text-[#4A7C59] font-semibold hover:underline">
                  info@kgvgruenerwinkel.de
                </a>{" "}
                – wir freuen uns!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
