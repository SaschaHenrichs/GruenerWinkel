import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS config – replace these with your own from emailjs.com (free)
// Service ID:  create a Gmail/SMTP service → copy the Service ID
// Template ID: create a template with variables {{vorname}}, {{nachname}}, {{email}}, {{telefon}}, {{nachricht}}
// Public Key:  Account → API Keys → Public Key
const EMAILJS_SERVICE  = "service_kgv";      // ← ersetzen
const EMAILJS_TEMPLATE = "template_kontakt"; // ← ersetzen
const EMAILJS_KEY      = "YOUR_PUBLIC_KEY";  // ← ersetzen

const Kontakt = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    vorname: "", nachname: "", email: "", telefon: "", nachricht: "", datenschutz: false,
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handle = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [k]: v }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.datenschutz) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY);
      setStatus("success");
      setForm({ vorname: "", nachname: "", email: "", telefon: "", nachricht: "", datenschutz: false });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Fallback: open mailto
      const subject = encodeURIComponent("Anfrage über kgvgruenerwinkel.de");
      const body = encodeURIComponent(
        `Name: ${form.vorname} ${form.nachname}\nE-Mail: ${form.email}\n` +
        (form.telefon ? `Telefon: ${form.telefon}\n` : "") +
        `\nNachricht:\n${form.nachricht}`
      );
      window.location.href = `mailto:info@kgvgruenerwinkel.de?subject=${subject}&body=${body}`;
      setStatus("idle");
    }
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

          <aside className="space-y-4">
            <div className="bg-[#1E2E24] text-white rounded-3xl p-8 relative overflow-hidden">
              <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#4A7C59]/30 blob-shape-1" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold mb-6 tracking-tight">Direkt erreichen</h3>
                <ul className="space-y-5">
                  {[
                    { icon: MapPin, label: "Adresse", content: <span className="opacity-85">Kruppstraße 35a<br />47055 Duisburg</span> },
                    { icon: Phone, label: "Telefon", content: <a href="tel:+492039353734" className="opacity-85 hover:opacity-100 hover:underline">0203 9353734</a> },
                    { icon: Mail, label: "E-Mail", content: <a href="mailto:info@kgvgruenerwinkel.de" className="opacity-85 hover:opacity-100 hover:underline break-all">info@kgvgruenerwinkel.de</a> },
                  ].map(({ icon: Icon, label, content }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="grid place-items-center w-11 h-11 rounded-full bg-[#F9A03F] shrink-0">
                        <Icon className="w-5 h-5 text-[#1E2E24]" />
                      </span>
                      <div className="text-sm leading-relaxed">
                        <div className="font-semibold mb-0.5">{label}</div>
                        {content}
                      </div>
                    </li>
                  ))}
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
          </aside>

          <form ref={formRef} onSubmit={submit} data-testid="contact-form"
            className="bg-white border border-[#E8E3D3] rounded-[40px] p-8 sm:p-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
              Nachricht senden
            </h2>
            <p className="text-[#4B5E53] mb-8 text-sm">Wir freuen uns über Deine Nachricht. * Pflichtfelder</p>

            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded-2xl px-5 py-4 text-[#4A7C59] font-semibold">
                <CheckCircle className="w-5 h-5 shrink-0" />
                Nachricht gesendet – wir melden uns bald!
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-red-700 text-sm">
                Senden fehlgeschlagen. Bitte versuche es später erneut oder schreib direkt an info@kgvgruenerwinkel.de.
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
              <textarea name="nachricht" required rows={6} value={form.nachricht} onChange={handle("nachricht")}
                data-testid="contact-input-nachricht"
                className="w-full px-5 py-4 rounded-2xl border-2 border-[#E8E3D3] bg-[#FDFBF7] focus:outline-none focus:border-[#4A7C59] focus:ring-4 focus:ring-[#4A7C59]/15 transition-all resize-none"
                placeholder="Schreib uns, was Dich bewegt..." />
            </div>

            <label className="mt-5 flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="datenschutz" data-testid="contact-input-datenschutz"
                checked={form.datenschutz} onChange={handle("datenschutz")} required
                className="mt-1 w-5 h-5 rounded-md border-2 border-[#E8E3D3] text-[#4A7C59] focus:ring-[#4A7C59]" />
              <span className="text-sm text-[#4B5E53] leading-relaxed">
                Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der{" "}
                <Link to="/datenschutz" className="text-[#4A7C59] font-semibold hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                einverstanden. *
              </span>
            </label>

            <button type="submit" disabled={!form.datenschutz || status === "sending"}
              data-testid="contact-submit-button"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A7C59] text-white font-semibold hover:bg-[#3A6347] disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5">
              {status === "sending"
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Wird gesendet…</>
                : <><Send className="w-4 h-4" /> Nachricht senden</>}
            </button>

            <p className="mt-4 text-xs text-[#4B5E53]/70">
              Oder direkt per E-Mail:{" "}
              <a href="mailto:info@kgvgruenerwinkel.de" className="text-[#4A7C59] hover:underline">
                info@kgvgruenerwinkel.de
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-sm font-semibold text-[#1E2E24] mb-2">{label}</label>
    <input data-testid={`contact-input-${name}`} type={type} name={name}
      value={value} onChange={onChange} required={required}
      className="w-full px-5 py-4 rounded-2xl border-2 border-[#E8E3D3] bg-[#FDFBF7] focus:outline-none focus:border-[#4A7C59] focus:ring-4 focus:ring-[#4A7C59]/15 transition-all" />
  </div>
);

export default Kontakt;
