import PageHero from "@/components/PageHero";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "St. Martin im Vereinsheim",
    date: "09. November",
    time: "ab 17:00 Uhr",
    place: "Vereinsheim",
    accent: "#E2725B",
    text:
      "Wir feiern St. Martin mit den Kindern des Vereins und deren Freunden und Verwandten. Wir singen Martinslieder, verteilen Weckmänner und lassen den Abend gemütlich im Vereinsheim ausklingen. Bringt Freunde und Familie gerne mit!",
    image:
      "https://images.unsplash.com/photo-1648136113216-8152fa9a1e31?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
];

const Feste = () => {
  return (
    <div data-testid="feste-page">
      <PageHero
        eyebrow="Feste & Termine"
        title="Bei uns wird gerne und richtig gefeiert."
        subtitle="Ein Vorteil unseres Standorts: Wir haben keine direkten Nachbarn, die sich über Lärm aufregen könnten."
        breadcrumb="Feste"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 space-y-10">
          {events.map((e) => (
            <article
              key={e.title}
              data-testid={`event-card-${e.title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`}
              className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch bg-white border border-[#E8E3D3] rounded-[40px] overflow-hidden"
            >
              {/* REPLACE WITH GOOGLE DRIVE IMAGE */}
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-[300px] lg:h-full object-cover"
              />
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <span
                  style={{ background: `${e.accent}1A`, color: e.accent }}
                  className="inline-block self-start mb-4 px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.16em]"
                >
                  Nächstes Fest
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#1E2E24] mb-5">
                  {e.title}
                </h3>
                <p className="text-[#4B5E53] leading-relaxed mb-6">{e.text}</p>

                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: Calendar, label: e.date },
                    { icon: Clock, label: e.time },
                    { icon: MapPin, label: e.place },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center gap-3 bg-[#F4F1E1] rounded-2xl px-4 py-3">
                      <d.icon className="w-4 h-4 text-[#4A7C59]" />
                      <span className="text-sm font-semibold text-[#1E2E24]">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="bg-[#1E2E24] text-white rounded-[40px] p-10 sm:p-14 text-center">
            <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-3 tracking-tight">
              Weitere Termine folgen.
            </h3>
            <p className="opacity-80 max-w-xl mx-auto">
              Aktuelle Hinweise gibt es regelmäßig am Schwarzen Brett und im
              <a href="/aktuelles" className="text-[#F9A03F] hover:underline ml-1">Aktuelles-Bereich</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feste;
