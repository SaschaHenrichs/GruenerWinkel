import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Kontakt = () => {
  const [form, setForm] = useState({
    vorname: "", nachname: "", email: "", telefon: "", nachricht: "", datenschutz: false,
  });
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [k]: v }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.datenschutz) return;

    const subject = encodeURIComponent("Anfrage über kgvgruenerwinkel.de");
    const body = encodeURIComponent(
      `Name: ${form.vorname} ${form.nachname}\n` +
      `E-Mail: ${form.email}\n` +
      (form.telefon ? `Telefon: ${form.telefon}\n` : "") +
      `\nNachricht:\n${form.nachricht}\n\n` +
      `---\nGesendet über das Kontaktformular auf kgvgruenerwinkel.de`
    );
    window.location.href = `mailto:info@kgvgruenerwinkel.de?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ vorname: "", nachname: "", email: "", telefon: "", nachricht: "", datenschutz: false });
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <div data-testid="kontakt-page">
      <PageHero
        eyebrow="Kontakt"
        title="Schreibt uns ein paar Zeilen."
        subtitle="Der einfachste Weg, mit uns in Kontakt zu treten. Über Rückmeldungen freuen wir uns immer."
        breadcrumb="Kontakt"
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-10">

          {/* Kontaktdaten */}
          <aside className="space-y-4">
            <div className="bg-[#1E2E24] text-white rounded-3xl p-8 relative overflow-hidden">
              <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#4A7C59]/30 blob-shape-1" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold mb-6 tracking-tight">
                  Direkt erreichen
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F] shrink-0">
                      <MapPin className="w-5 h-5 text-[#1E2E24]" />
                    </span>
                    <div className="text-sm leading-relaxed">
                      <div className="font-semibold mb-0.5">Adresse</div>
                      <div className="opacity-85">Kruppstraße 35a<br />47055 Duisburg</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F] shrink-0">
                      <Phone className="w-5 h-5 text-[#1E2E24]" />
                    </span>
                    <div className="text-sm">
                      <div className="font-semibold mb-0.5">Telefon</div>
                      <a href="tel:+492039353734" className="opacity-85 hover:opacity-100 hover:underline">
                        0203 9353734
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F] shrink-0">
                      <Mail className="w-5 h-5 text-[#1E2E24]" />
                    </span>
                    <div className="text-sm">
                      <div className="font-semibold mb-0.5">E-Mail</div>
                      <a href="mailto:info@kgvgruenerwinkel.de"
                        className="opacity-85 hover:opacity-100 hover:underline break-all">
                        info@kgvgruenerwinkel.de
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-[#E8E3D3] rounded-3xl p-7">
              <h4 className="font-display font-semibold text-lg mb-2">Vorstand am Telefon</h4>
              <p className="text-sm text-[#4B5E53] leading-relaxed mb-4">
                Für dringende Anliegen erreicht ihr unsere 1. Vorsitzende direkt mobil.
              </p>
              <a href="tel:+491624660411"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#4A7C59] text-white font-semibold text-sm hover:bg-[#3A6347] transition-colors">
                <Phone className="w-4 h-4" /> 0162 4660411
              </a>
            </div>

            {/* Datenschutz-Hinweis */}
            <div className="bg-[#F4F1E1] border border-[#E8E3D3] rounded-3xl p-6 text-xs text-[#4B5E53] leading-relaxed">
              <span className="font-semibold text-[#1E2E24] block mb-1">🔒 Datenschutz</span>
              Beim Klick auf „Nachricht senden" öffnet sich Ihr E-Mail-Programm.
              Es werden keine Daten auf fremden Servern gespeichert —
              die Nachricht wird direkt von Ihrem eigenen Postfach verschickt.{" "}
              <Link to="/datenschutz" className="text-[#4A7C59] font-semibold hover:underline">
                Datenschutzerklärung
              </Link>
            </div>
          </aside>

          {/* Formular */}
          <form onSubmit={submit} data-testid="contact-form"
            className="bg-white border border-[#E8E3D3] rounded-[40px] p-8 sm:p-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
              Nachricht senden
            </h2>
            <p className="text-[#4B5E53] mb-8 text-sm">
              Das Formular öffnet Ihr E-Mail-Programm mit allen Angaben vorausgefüllt. * Pflichtfelder
            </p>

            {sent && (
              <div className="mb-6 flex items-center gap-3 bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded-2xl px-5 py-4 text-[#4A7C59] font-semibold text-sm">
                <CheckCircle className="w-5 h-5 shrink-0" />
                Ihr E-Mail-Programm sollte sich geöffnet haben — bitte die Nachricht noch absenden.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Vorname *" name="vorname" value={form.vorname} onChange={handle("vorname")} required />
              <Field label="Nachname *" name="nachname" value={form.nachname} onChange={handle("nachname")} required />
              <Field label="E-Mail *" name="email" type="email" value={form.email} onChange={handle("email")} required />
              <Field label="Telefon" name="telefon" value={form.telefon} onChange={handle("telefon")} />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-[#1E2E24] mb-2">Nachricht *</label>
              <textarea
                data-testid="contact-input-nachricht"
                required rows={6}
                value={form.nachricht} onChange={handle("nachricht")}
                className="w-full px-5 py-4 rounded-2xl border-2 border-[#E8E3D3] bg-[#FDFBF7] focus:outline-none focus:border-[#4A7C59] focus:ring-4 focus:ring-[#4A7C59]/15 transition-all resize-none"
                placeholder="Schreib uns, was Dich bewegt..."
              />
            </div>

            <label className="mt-5 flex items-start gap-3 cursor-pointer">
              <input type="checkbox"
                data-testid="contact-input-datenschutz"
                checked={form.datenschutz} onChange={handle("datenschutz")} required
                className="mt-1 w-5 h-5 rounded-md border-2 border-[#E8E3D3] text-[#4A7C59] focus:ring-[#4A7C59]"
              />
              <span className="text-sm text-[#4B5E53] leading-relaxed">
                Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der{" "}
                <Link to="/datenschutz" className="text-[#4A7C59] font-semibold hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                einverstanden. *
              </span>
            </label>

            <button type="submit"
              disabled={!form.datenschutz}
              data-testid="contact-submit-button"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A7C59] text-white font-semibold hover:bg-[#3A6347] disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5">
              <Send className="w-4 h-4" />
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-sm font-semibold text-[#1E2E24] mb-2">{label}</label>
    <input
      data-testid={`contact-input-${name}`}
      type={type} name={name}
      value={value} onChange={onChange} required={required}
      className="w-full px-5 py-4 rounded-2xl border-2 border-[#E8E3D3] bg-[#FDFBF7] focus:outline-none focus:border-[#4A7C59] focus:ring-4 focus:ring-[#4A7C59]/15 transition-all"
    />
  </div>
);

export default Kontakt;
