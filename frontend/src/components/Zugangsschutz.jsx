import { useState, useEffect } from "react";
import { Lock, LogOut } from "lucide-react";

/* Codeabfrage vor einem Bereich, der nur den Vorstand angeht.
 *
 * Geprueft wird nicht im Browser, sondern von der Edge Function in Supabase:
 * der eingegebene Code geht dorthin, und nur sie kennt den richtigen. Im
 * JavaScript dieser Seite steht er nirgends.
 *
 * Der Code landet unter denselben Schluesseln im localStorage, die auch die
 * Schluesselliste unter /schluessel/ benutzt. Weil beide auf derselben Domain
 * liegen, genuegt dadurch eine einzige Eingabe fuer Seite und Liste.
 *
 * Was dieser Schutz NICHT leistet: die Seite selbst ist oeffentlich abrufbar,
 * und /schluessel/ laesst sich direkt aufrufen. Geschuetzt sind die Daten —
 * die Liste fragt denselben Code noch einmal gegen dieselbe Funktion ab.
 * Diese Abfrage haelt Neugierige von der Werkzeugliste fern, sie ist kein
 * Ersatz fuer die Pruefung am Server.
 */

const API = "https://yrvlclolmkdqrkkhbnvn.supabase.co/functions/v1/api";
const SPEICHER_CODE = "schluessel.code";
const SPEICHER_NAME = "schluessel.name";

const lies = (schluessel) => {
  try {
    return localStorage.getItem(schluessel) || "";
  } catch {
    return "";
  }
};

const schreibe = (schluessel, wert) => {
  try {
    if (wert) localStorage.setItem(schluessel, wert);
    else localStorage.removeItem(schluessel);
  } catch {
    /* Privates Fenster ohne Speicher: dann gilt die Eingabe nur diesmal. */
  }
};

async function pruefeCode(code) {
  let antwort;
  try {
    antwort = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ aktion: "pruefen", code }),
    });
  } catch {
    return { ok: false, fehler: "Keine Verbindung. Bitte Internet pruefen." };
  }
  if (antwort.ok) return { ok: true };
  const inhalt = await antwort.json().catch(() => ({}));
  return { ok: false, status: antwort.status, fehler: inhalt.fehler };
}

const Zugangsschutz = ({ children }) => {
  const [zustand, setZustand] = useState("laedt");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [meldung, setMeldung] = useState("");
  const [laeuft, setLaeuft] = useState(false);

  /* Beim Oeffnen: liegt schon ein Code im Browser, einmal gegenpruefen. So
     faellt ein inzwischen geaenderter Code hier auf und nicht erst spaeter. */
  useEffect(() => {
    let abgebrochen = false;
    setName(lies(SPEICHER_NAME));

    const gespeichert = lies(SPEICHER_CODE);
    if (!gespeichert) {
      setZustand("gesperrt");
      return undefined;
    }

    pruefeCode(gespeichert).then((e) => {
      if (abgebrochen) return;
      if (e.ok) {
        setZustand("offen");
      } else {
        if (e.status === 401) schreibe(SPEICHER_CODE, "");
        setZustand("gesperrt");
        if (e.status === 401) setMeldung("Der gespeicherte Zugangscode gilt nicht mehr.");
        else if (e.fehler) setMeldung(e.fehler);
      }
    });

    return () => {
      abgebrochen = true;
    };
  }, []);

  const absenden = async (e) => {
    e.preventDefault();
    setMeldung("");

    if (!code.trim()) {
      setMeldung("Bitte den Zugangscode eingeben.");
      return;
    }

    setLaeuft(true);
    const ergebnis = await pruefeCode(code);
    setLaeuft(false);

    if (ergebnis.ok) {
      schreibe(SPEICHER_CODE, code);
      schreibe(SPEICHER_NAME, name.trim());
      setCode("");
      setZustand("offen");
      return;
    }
    setMeldung(ergebnis.fehler || "Die Anmeldung hat nicht funktioniert.");
  };

  const abmelden = () => {
    schreibe(SPEICHER_CODE, "");
    setZustand("gesperrt");
    setMeldung("Abgemeldet. Der Code wurde aus diesem Browser entfernt.");
  };

  if (zustand === "laedt") {
    return (
      <div className="mx-auto max-w-3xl px-5 lg:px-10 py-16 text-center text-[#4B5E53]">
        Einen Moment …
      </div>
    );
  }

  if (zustand === "offen") {
    return (
      <>
        {children}
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <button
            type="button"
            onClick={abmelden}
            data-testid="abmelden"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#4B5E53] hover:text-[#1E2E24]"
          >
            <LogOut className="w-4 h-4" />
            Abmelden
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-5 lg:px-10 pb-20">
      <form
        onSubmit={absenden}
        data-testid="zugangsformular"
        className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10"
      >
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-6">
          <Lock className="w-6 h-6" />
        </span>

        <h2 className="font-display text-2xl font-semibold text-[#1E2E24] mb-3 tracking-tight">
          Zugang nur für den Vorstand
        </h2>
        <p className="text-[#4B5E53] leading-relaxed mb-6">
          Bitte den gemeinsamen Zugangscode eingeben. Den bekommt ihr persönlich vom Vorstand.
        </p>

        {meldung && (
          <p
            data-testid="zugangsmeldung"
            className="mb-5 rounded-2xl bg-[#E2725B]/10 border border-[#E2725B]/40 text-[#8A3A28] text-sm px-4 py-3"
          >
            {meldung}
          </p>
        )}

        <label htmlFor="zugangscode" className="block text-sm font-semibold text-[#1E2E24] mb-2">
          Zugangscode
        </label>
        <input
          id="zugangscode"
          type="password"
          autoComplete="current-password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full rounded-2xl border border-[#E8E3D3] px-4 py-3 mb-5 text-[#1E2E24] focus:outline-none focus:border-[#4A7C59]"
        />

        <label htmlFor="zugangsname" className="block text-sm font-semibold text-[#1E2E24] mb-2">
          Dein Name <span className="font-normal text-[#4B5E53]">(freiwillig)</span>
        </label>
        <input
          id="zugangsname"
          type="text"
          autoComplete="name"
          placeholder="z. B. Sascha"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-[#E8E3D3] px-4 py-3 mb-2 text-[#1E2E24] focus:outline-none focus:border-[#4A7C59]"
        />
        <p className="text-xs text-[#4B5E53] mb-6">
          Steht später an deinen Einträgen in der Schlüsselliste. Kann leer bleiben.
        </p>

        <button
          type="submit"
          disabled={laeuft}
          className="inline-flex items-center gap-2 bg-[#4A7C59] text-white rounded-2xl px-5 py-3 text-sm font-semibold hover:bg-[#3A6347] transition-colors disabled:opacity-60"
        >
          {laeuft ? "Wird geprüft …" : "Öffnen"}
        </button>
      </form>
    </div>
  );
};

export default Zugangsschutz;
