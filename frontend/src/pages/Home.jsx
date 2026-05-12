import { Link } from "react-router-dom";
import { ArrowRight, PartyPopper, Sprout, Users, MapPin, Sparkles, Sun } from "lucide-react";

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-24 lg:pt-20 lg:pb-36">
        {/* Decorative blobs */}
        <div aria-hidden className="absolute top-10 -left-32 w-[460px] h-[460px] bg-[#4A7C59]/15 blob-shape-1 animate-floaty" />
        <div aria-hidden className="absolute -bottom-40 -right-24 w-[420px] h-[420px] bg-[#F9A03F]/20 blob-shape-2" />
        <div aria-hidden className="absolute top-1/3 right-1/4 w-[180px] h-[180px] bg-[#E2725B]/10 blob-shape-3" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-[#E8E3D3] text-[#E2725B] text-[12px] font-bold uppercase tracking-[0.18em]"
            >
              <Sparkles className="w-3.5 h-3.5" /> Jubiläumsjahr 2026 · 80 Jahre
            </span>

            <h1 className="font-display text-[48px] sm:text-[68px] lg:text-[92px] leading-[0.95] font-semibold text-[#1E2E24] tracking-tight">
              <span className="block">Hallo liebe</span>
              <span className="font-script text-[64px] sm:text-[88px] lg:text-[120px] text-[#E2725B] block leading-[0.85] -my-2 sm:-my-3 lg:-my-4 rotate-[-2deg] origin-left inline-block">
                Gartenfreunde
              </span>
              <span className="block">willkommen!</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#4B5E53] leading-relaxed max-w-xl">
              Wir sind ein Kleingartenverein mit Herz in Duisburg-Wedau: 54 liebevoll gepflegte
              Parzellen, ein gemütliches Vereinsheim und ganz viele bunte Geschichten – seit
              <span className="font-script text-2xl text-[#4A7C59] mx-1">stolzen 80 Jahren.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/wir-ueber-uns"
                data-testid="hero-cta-about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#4A7C59] text-white font-bold shadow-[0_10px_30px_rgba(74,124,89,0.25)] hover:bg-[#3A6347] transition-all hover:-translate-y-0.5"
              >
                Verein entdecken <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[#1E2E24] text-[#1E2E24] font-bold hover:bg-[#1E2E24] hover:text-white transition-all"
              >
                Mit uns sprechen
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "80", l: "Jahre", sub: "seit 1946" },
                { n: "54", l: "Parzellen" },
                { n: "18.812", l: "m² Fläche" },
              ].map((s) => (
                <div key={s.l} className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-[#E8E3D3]">
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-[#4A7C59]">{s.n}</div>
                  <div className="text-xs text-[#4B5E53] mt-1 uppercase tracking-wider font-bold">{s.l}</div>
                  {s.sub && <div className="font-script text-base text-[#E2725B] -mt-0.5">{s.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Hero illustration (no stock photo) */}
          <div className="relative animate-fade-up hidden lg:block" style={{ animationDelay: "0.1s" }}>
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              {/* Decorative big blob with sun */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C59] to-[#3A6347] blob-shape-1 shadow-[0_30px_80px_-20px_rgba(74,124,89,0.45)]" />
              <div className="absolute inset-6 bg-[#FDFBF7] blob-shape-2 dots-pattern grid place-items-center">
                <div className="text-center px-8">
                  <Sun className="w-14 h-14 text-[#F9A03F] mx-auto mb-3 animate-spin-slow" strokeWidth={1.5} />
                  <div className="font-script text-[72px] text-[#4A7C59] leading-none">
                    1946
                  </div>
                  <div className="font-display text-3xl font-semibold text-[#1E2E24] mt-1">
                    — 2026 —
                  </div>
                  <div className="font-display text-xl mt-3 text-[#E2725B] font-semibold">
                    80 Jahre Grüner Winkel
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 -left-6 bg-[#F9A03F] text-white rounded-full px-5 py-2.5 font-script text-xl rotate-[-6deg] shadow-lg animate-wiggle">
                wir blühen auf!
              </div>
              <div className="absolute -bottom-4 right-10 bg-white rounded-2xl p-3 shadow-lg border border-[#E8E3D3]">
                <Sprout className="w-6 h-6 text-[#4A7C59]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JUBILÄUM CTA STRIP */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="relative bg-gradient-to-br from-[#E2725B] via-[#E2725B] to-[#F9A03F] text-white rounded-[40px] p-8 sm:p-12 overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 bg-white/15 blob-shape-1" />
            <div aria-hidden className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 blob-shape-2" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <PartyPopper className="w-10 h-10 mb-4" />
                <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                  Wir feiern <span className="font-script text-5xl sm:text-7xl">80 Jahre</span>!
                </h2>
                <p className="mt-4 opacity-95 text-lg max-w-xl leading-relaxed">
                  1946 wurde unser Verein gegründet – und seitdem wachsen hier Gemüse,
                  Freundschaften und Erinnerungen. 2026 wird ordentlich gefeiert.
                </p>
              </div>
              <Link
                to="/aktuelles"
                data-testid="hero-jubilaeum-link"
                className="inline-flex items-center gap-2 bg-white text-[#E2725B] px-7 py-4 rounded-full font-bold hover:bg-[#1E2E24] hover:text-white transition-colors whitespace-nowrap"
              >
                Aktuelles ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INTRO CARDS */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center mb-12">
            <span className="font-script text-3xl text-[#E2725B] block">— ein Steinwurf vom Stadion —</span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-1">
              Was uns ausmacht
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Eine Gemeinschaft",
                text: "Bei uns gärtnert man nicht allein. Wir feiern, helfen und lachen miteinander – generationsübergreifend.",
                color: "#4A7C59",
              },
              {
                icon: Sprout,
                title: "54 Gartenparzellen",
                text: "Auf 18.812 m² wachsen Gemüse, Blumen, Erinnerungen – und manch ein neuer Lieblingsplatz.",
                color: "#E2725B",
              },
              {
                icon: MapPin,
                title: "Beste Lage",
                text: "Direkt zwischen MSV-Arena, Regattabahn und Sechs-Seen-Platte – Natur und Sport zum Greifen nah.",
                color: "#F9A03F",
              },
            ].map((c) => (
              <div
                key={c.title}
                data-testid={`feature-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-3xl p-8 border border-[#E8E3D3] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,124,89,0.2)]"
              >
                <span
                  style={{ background: `${c.color}1A`, color: c.color }}
                  className="grid place-items-center w-14 h-14 rounded-2xl blob-shape-1 mb-6 group-hover:rotate-6 transition-transform"
                >
                  <c.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-xl font-semibold mb-3 text-[#1E2E24]">{c.title}</h3>
                <p className="text-[#4B5E53] leading-relaxed text-[15px]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* CSS art replacement for stock photo */}
            <div className="relative w-full aspect-[4/5] max-w-[480px]">
              <div className="absolute inset-0 bg-[#4A7C59] blob-shape-2" />
              <div className="absolute inset-4 bg-[#F9A03F] blob-shape-1 dots-pattern" />
              <div className="absolute inset-12 bg-white blob-shape-3 grid place-items-center text-center px-6">
                <div>
                  <div className="font-script text-2xl text-[#E2725B] mb-2">unsere Heimat</div>
                  <div className="font-display text-4xl sm:text-5xl font-semibold text-[#1E2E24] leading-tight">
                    18.812<span className="text-[#4A7C59]">m²</span>
                  </div>
                  <div className="font-display text-lg text-[#4B5E53] mt-2">grünes Glück</div>
                  <div className="mt-5 h-px w-12 bg-[#E2725B] mx-auto" />
                  <div className="font-script text-xl text-[#4A7C59] mt-3">54 Parzellen</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-2 bg-[#1E2E24] text-white rounded-full px-4 py-2 font-script text-lg rotate-[8deg] shadow-lg">
                seit 1946
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 bg-[#4A7C59] text-white rounded-3xl p-6 max-w-[220px] shadow-xl">
              <div className="font-display text-3xl font-semibold">~106</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-90">
                Kleingartenvereine in Duisburg
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-script text-3xl text-[#E2725B] block mb-1">Wir über uns</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight mb-6">
              Ein Stückchen Grün – mit ganz viel Geschichte.
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Unser Verein wurde <strong className="text-[#1E2E24]">1946</strong> gegründet und hat
              heute <strong className="text-[#1E2E24]">54 Gartenparzellen</strong> auf einer
              Gesamtfläche von <strong className="text-[#1E2E24]">18.812 m²</strong>. Wir sind dem
              Verband Duisburger Kleingartenvereine e.V. angeschlossen – Bezirk E (Mitte).
            </p>
            <p className="text-[#4B5E53] leading-relaxed mb-8">
              Unsere Nachbarn sind der Friedhof und der Sportpark Wedau – mit der MSV-Arena,
              der Regattabahn und der Sechs-Seen-Platte direkt vor der Tür. Hier kann
              richtig gefeiert werden, ohne dass sich jemand beschwert.
            </p>
            <Link
              to="/wir-ueber-uns"
              data-testid="about-link"
              className="inline-flex items-center gap-2 font-bold text-[#4A7C59] hover:gap-3 transition-all"
            >
              Mehr über uns lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="font-script text-3xl text-[#F9A03F] block">— frisch vom Vorstand —</span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                Was bei uns los ist
              </h2>
            </div>
            <Link
              to="/aktuelles"
              data-testid="news-link"
              className="px-5 py-2.5 rounded-full bg-[#1E2E24] text-white font-bold text-sm hover:bg-[#4A7C59] transition-all whitespace-nowrap self-start"
            >
              Alle News
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-3xl p-8 border border-[#E8E3D3] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-[#4A7C59] font-bold">
                <PartyPopper className="w-4 h-4" /> Jubiläum 2026
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1E2E24]">
                80 Jahre Grüner Winkel
              </h3>
              <p className="text-[#4B5E53] leading-relaxed mb-4">
                2026 wird unser Verein <span className="font-script text-xl text-[#E2725B]">80 Jahre</span> alt – und das
                wollen wir gebührend feiern. Details zum Programm folgen rechtzeitig auf dieser Seite.
              </p>
              <Link to="/aktuelles" className="inline-flex items-center gap-2 text-[#4A7C59] font-bold text-sm hover:gap-3 transition-all">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <article className="bg-white rounded-3xl p-8 border border-[#E8E3D3] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-[#E2725B] font-bold">
                <Sprout className="w-4 h-4" /> Hinweis Vorstand
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1E2E24]">
                Briefkasten – Kummerkasten
              </h3>
              <p className="text-[#4B5E53] leading-relaxed mb-4">
                Am Clubhaus neben dem Küchenfenster hängt der Brief- bzw. Kummerkasten.
                Hier kann sich jedes Mitglied auch schriftlich Luft machen. Zählerstände
                bitte mit Gartennummer und Name einwerfen.
              </p>
              <Link to="/aktuelles" className="inline-flex items-center gap-2 text-[#4A7C59] font-bold text-sm hover:gap-3 transition-all">
                Weiterlesen <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="relative overflow-hidden bg-[#1E2E24] rounded-[40px] p-10 sm:p-16 text-center">
            <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 bg-[#4A7C59]/25 blob-shape-1" />
            <div aria-hidden className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#F9A03F]/20 blob-shape-2" />
            <div className="relative">
              <span className="font-script text-3xl text-[#F9A03F] block mb-2">na, neugierig?</span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white mb-5 tracking-tight">
                Lust auf einen eigenen Garten?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Schreiben Sie uns – wir freuen uns über Nachrichten, Anfragen oder einfach
                ein freundliches Hallo.
              </p>
              <Link
                to="/kontakt"
                data-testid="cta-contact-bottom"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F9A03F] text-[#1E2E24] font-bold hover:bg-white transition-all"
              >
                Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
