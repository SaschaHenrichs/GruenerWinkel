import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sprout, Users, MapPin, Sparkles, Leaf } from "lucide-react";

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-32">
        {/* Decorative blobs */}
        <div aria-hidden className="absolute top-20 -left-32 w-[420px] h-[420px] bg-[#4A7C59]/15 blob-shape-1 animate-floaty" />
        <div aria-hidden className="absolute -bottom-32 -right-24 w-[360px] h-[360px] bg-[#F9A03F]/20 blob-shape-2" />
        <div aria-hidden className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-[#E2725B]/10 blob-shape-3" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <span
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-[#E8E3D3] text-[#4A7C59] text-[12px] font-semibold uppercase tracking-[0.18em]"
            >
              <Sparkles className="w-3.5 h-3.5" /> Gegründet 1946
            </span>

            <h1 className="font-display text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.98] font-semibold text-[#1E2E24] tracking-tight">
              Hallo liebe<br />
              <span className="wavy-underline">Gartenfreunde</span>,<br />
              willkommen<br />
              im Grünen Winkel.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#4B5E53] leading-relaxed max-w-xl">
              Wir sind ein Kleingartenverein mit Herz in Duisburg-Wedau: 54 liebevoll
              gepflegte Parzellen, ein gemütliches Vereinsheim und ganz viele bunte
              Geschichten – seit fast 80 Jahren.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/wir-ueber-uns"
                data-testid="hero-cta-about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#4A7C59] text-white font-semibold shadow-[0_10px_30px_rgba(74,124,89,0.25)] hover:bg-[#3A6347] transition-all hover:-translate-y-0.5"
              >
                Verein entdecken <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[#1E2E24] text-[#1E2E24] font-semibold hover:bg-[#1E2E24] hover:text-white transition-all"
              >
                Mit uns sprechen
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "1946", l: "Gegründet" },
                { n: "54", l: "Parzellen" },
                { n: "18.812", l: "m² Fläche" },
              ].map((s) => (
                <div key={s.l} className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-[#E8E3D3]">
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-[#4A7C59]">{s.n}</div>
                  <div className="text-xs text-[#4B5E53] mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              {/* REPLACE WITH GOOGLE DRIVE IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1560266444-5d1bd041d929?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
                alt="Frühlingsgarten mit bunten Blumen"
                className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover rounded-[40px_80px_60px_30px] shadow-[0_30px_80px_-20px_rgba(74,124,89,0.45)]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-5 shadow-xl border border-[#E8E3D3] max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-full bg-[#F9A03F]/20 grid place-items-center">
                    <Leaf className="w-4 h-4 text-[#F9A03F]" />
                  </span>
                  <span className="font-display font-semibold text-sm">Mitten im Grünen</span>
                </div>
                <p className="text-xs text-[#4B5E53] leading-relaxed">
                  Direkt am Sportpark Wedau – zwischen Regattabahn und Sechs-Seen-Platte.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E2725B] text-white rounded-full px-5 py-3 font-display font-semibold text-sm rotate-6 shadow-lg">
                Seit 1946 🌱
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INTRO CARDS */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Eine Gemeinschaft",
                text: "Bei uns gärtnert man nicht allein. Wir feiern, helfen und lachen miteinander – generationsübergreifend.",
                color: "#4A7C59",
                bg: "#4A7C59",
              },
              {
                icon: Sprout,
                title: "54 Gartenparzellen",
                text: "Auf 18.812 m² wachsen Gemüse, Blumen, Erinnerungen – und manch ein neuer Lieblingsplatz.",
                color: "#E2725B",
                bg: "#E2725B",
              },
              {
                icon: MapPin,
                title: "Beste Lage",
                text: "Direkt zwischen MSV-Arena, Regattabahn und Sechs-Seen-Platte – Natur und Sport zum Greifen nah.",
                color: "#F9A03F",
                bg: "#F9A03F",
              },
            ].map((c) => (
              <div
                key={c.title}
                data-testid={`feature-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-3xl p-8 border border-[#E8E3D3] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(74,124,89,0.2)]"
              >
                <span
                  style={{ background: `${c.bg}1A`, color: c.color }}
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
            {/* REPLACE WITH GOOGLE DRIVE IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
              alt="Gartenfreunde lachen gemeinsam"
              className="w-full h-[460px] object-cover rounded-[60px_30px_60px_30px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
            />
            <div className="absolute -bottom-8 -right-4 bg-[#4A7C59] text-white rounded-3xl p-6 max-w-[220px] shadow-xl">
              <div className="font-display text-3xl font-semibold">~106</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-90">
                Kleingartenvereine in Duisburg
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#E2725B]/12 text-[#E2725B] text-[12px] font-semibold uppercase tracking-[0.16em]">
              Wir über uns
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight mb-6">
              Ein Stückchen Grün – mit ganz viel Geschichte.
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Unser Verein wurde <strong className="text-[#1E2E24]">1946</strong> gegründet und hat
              heute <strong className="text-[#1E2E24]">54 Gartenparzellen</strong> auf einer
              Gesamtfläche von <strong className="text-[#1E2E24]">18.812 m²</strong>. Wir sind dem
              Verband Duisburger Kleingartenvereine e.V. angeschlossen.
            </p>
            <p className="text-[#4B5E53] leading-relaxed mb-8">
              Unsere Nachbarn sind der Friedhof und der Sportpark Wedau – mit der MSV-Arena,
              der Regattabahn und der Sechs-Seen-Platte direkt vor der Tür. Hier kann
              richtig gefeiert werden, ohne dass sich jemand beschwert.
            </p>
            <Link
              to="/wir-ueber-uns"
              data-testid="about-link"
              className="inline-flex items-center gap-2 font-semibold text-[#4A7C59] hover:gap-3 transition-all"
            >
              Mehr über uns lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS + EVENTS PREVIEW */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#F9A03F]/15 text-[#F9A03F] text-[12px] font-semibold uppercase tracking-[0.16em]">
                Aktuelles & Termine
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                Was bei uns los ist
              </h2>
            </div>
            <div className="flex gap-3">
              <Link to="/aktuelles" data-testid="news-link" className="px-5 py-2.5 rounded-full bg-white border border-[#E8E3D3] font-semibold text-sm hover:bg-[#4A7C59] hover:text-white hover:border-[#4A7C59] transition-all">
                Alle News
              </Link>
              <Link to="/feste" data-testid="events-link" className="px-5 py-2.5 rounded-full bg-[#1E2E24] text-white font-semibold text-sm hover:bg-[#4A7C59] transition-all">
                Alle Feste
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-3xl p-8 border border-[#E8E3D3] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-[#4A7C59] font-semibold">
                <Calendar className="w-4 h-4" /> Hinweis vom Vorstand
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#1E2E24]">
                Briefkasten – Kummerkasten
              </h3>
              <p className="text-[#4B5E53] leading-relaxed mb-4">
                Am Clubhaus neben dem Küchenfenster hängt der Brief- bzw. Kummerkasten.
                Hier kann sich jedes Mitglied auch schriftlich Luft machen. Zählerstände
                bitte mit Gartennummer und Name einwerfen.
              </p>
              <Link to="/aktuelles" className="inline-flex items-center gap-2 text-[#4A7C59] font-semibold text-sm hover:gap-3 transition-all">
                Weiterlesen <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <article className="bg-gradient-to-br from-[#E2725B] to-[#F9A03F] text-white rounded-3xl p-8 relative overflow-hidden">
              <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/15 blob-shape-1" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider font-semibold opacity-95">
                  <Calendar className="w-4 h-4" /> Nächstes Fest
                </div>
                <h3 className="font-display text-3xl font-semibold mb-3">St. Martin im Vereinsheim</h3>
                <p className="leading-relaxed mb-4 opacity-95">
                  Wir singen Martinslieder mit den Kindern, verteilen Weckmänner und lassen
                  den Abend gemütlich im Vereinsheim ausklingen. Bringt Freunde und Familie mit!
                </p>
                <Link to="/feste" className="inline-flex items-center gap-2 bg-white text-[#E2725B] px-5 py-2.5 rounded-full font-semibold text-sm hover:gap-3 transition-all">
                  Zu den Festen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F9A03F] text-[#1E2E24] font-semibold hover:bg-white transition-all"
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
