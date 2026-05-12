import PageHero from "@/components/PageHero";
import { Phone, Mail, User } from "lucide-react";

const team = [
  { role: "1. Vorsitzende", name: "Alexandra Gliemko", phone: "0162 4660411", accent: "#4A7C59" },
  { role: "2. Vorsitzender", name: "Sascha Henrichs", accent: "#E2725B" },
  { role: "Schriftführerin", name: "Steffi Volkmer", accent: "#F9A03F" },
  { role: "Kassenwart/in", name: "Wird bekannt gegeben", accent: "#4A7C59" },
  { role: "Gartenwart", name: "Willi Winter & Totti Lauderbach", accent: "#E2725B" },
  { role: "Fachberatung", name: "Alexandra Gliemko", accent: "#F9A03F" },
  { role: "Vereinsheim", name: "Manuel Pelzer", phone: "0162 4670519", accent: "#4A7C59" },
];

const Vorstand = () => {
  return (
    <div data-testid="vorstand-page">
      <PageHero
        eyebrow="Vorstandsteam"
        title="Die Menschen hinter dem Grünen Winkel."
        subtitle="Wir existieren nicht nur virtuell – und freuen uns über Feedback, Kritik, Lob oder einfach Anmerkungen."
        breadcrumb="Vorstand"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {/* Foto-Banner */}
          <div className="mb-12 grid grid-cols-3 gap-3 sm:gap-5">
            {[
              { src: "g08.jpg", r: "rounded-[30px_50px_40px_60px]" },
              { src: "g19.jpg", r: "rounded-[50px_30px_60px_40px]" },
              { src: "g30.jpg", r: "rounded-[40px_60px_30px_50px]" },
            ].map((p) => (
              <img
                key={p.src}
                src={process.env.PUBLIC_URL + `/images/gallery/${p.src}`}
                alt="Eindruck aus dem Verein"
                loading="lazy"
                className={`${p.r} w-full h-32 sm:h-48 object-cover border border-[#E8E3D3]`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.role}
                data-testid={`vorstand-card-${m.role.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "").replace(/\//g, "-")}`}
                className="bg-white border border-[#E8E3D3] rounded-3xl p-7 hover:-translate-y-1 transition-transform"
              >
                <span
                  style={{ background: `${m.accent}1A`, color: m.accent }}
                  className="grid place-items-center w-14 h-14 rounded-2xl blob-shape-1 mb-5"
                >
                  <User className="w-6 h-6" />
                </span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-[#4B5E53] font-semibold mb-2">
                  {m.role}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#1E2E24] mb-3">{m.name}</h3>
                {m.phone && (
                  <a
                    href={`tel:+49${m.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-2 text-sm text-[#4A7C59] font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" /> {m.phone}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#4A7C59] to-[#3A6347] text-white rounded-[40px] p-10 sm:p-14 relative overflow-hidden">
            <div aria-hidden className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 blob-shape-1" />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
                  Adresse & Telefon
                </h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Kleingartenverein Grüner Winkel e.V.<br />
                  Im Verband der Duisburger Kleingartenvereine e.V.<br />
                  Kruppstraße 35a · 47055 Duisburg
                </p>
              </div>
              <div className="grid gap-4">
                <a
                  href="tel:+492039353734"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F]">
                    <Phone className="w-5 h-5 text-[#1E2E24]" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Telefon</div>
                    <div className="font-display font-semibold">0203 9353734</div>
                  </div>
                </a>
                <a
                  href="mailto:info@kgvgruenerwinkel.de"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F]">
                    <Mail className="w-5 h-5 text-[#1E2E24]" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-80">E-Mail</div>
                    <div className="font-display font-semibold">info@kgvgruenerwinkel.de</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vorstand;
