import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Scale, Sprout, Snowflake, Bug, Trees, ShieldAlert, FileText, ExternalLink, Building } from "lucide-react";

const Recht = () => {
  return (
    <div data-testid="recht-page">
      <PageHero
        eyebrow="Recht & Regeln"
        title="Was im Kleingarten zählt."
        subtitle="Wir richten uns nach dem Bundeskleingartengesetz und der Garten- und Bauordnung des Verbandes. Hier eine verständliche Übersicht."
        breadcrumb="Recht & Regeln"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-3 gap-6">
          {/* BKleingG */}
          <article className="lg:col-span-2 bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-5">
              <Scale className="w-6 h-6" />
            </span>
            <span className="font-script text-xl text-[#E2725B] block">— Grundlage —</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-1 mb-5">
              Bundeskleingartengesetz (BKleingG)
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              Das Bundeskleingartengesetz ist die rechtliche Grundlage für alle Kleingärten in
              Deutschland. Es regelt insbesondere, was ein Kleingarten überhaupt ist, wie er
              genutzt werden darf und welche Pflichten Pächterinnen und Pächter haben.
            </p>

            <h3 className="font-display text-lg font-semibold text-[#1E2E24] mt-6 mb-3">
              Kernpunkte – auf einen Blick
            </h3>
            <ul className="leaf-list space-y-3 text-[#4B5E53] text-[15px] leading-relaxed">
              <li>
                <strong className="text-[#1E2E24]">Kleingärtnerische Nutzung:</strong> Eine
                Parzelle dient der nicht-erwerbsmäßigen Nutzung, insbesondere zur Gewinnung von
                Gartenbauerzeugnissen für den Eigenbedarf und zur Erholung.
              </li>
              <li>
                <strong className="text-[#1E2E24]">Drittel-Regel:</strong> Mindestens ein Drittel
                der Gartenfläche soll dem Anbau von Obst und Gemüse dienen.
              </li>
              <li>
                <strong className="text-[#1E2E24]">Laube max. 24 m²:</strong> Eine Gartenlaube
                darf maximal 24 m² Grundfläche (inkl. überdachtem Freisitz) haben und ist nicht
                zum dauerhaften Wohnen geeignet.
              </li>
              <li>
                <strong className="text-[#1E2E24]">Gemeinnützigkeit:</strong> Der Verein ist
                gemeinnützig organisiert; Pachtpreise sind sozial verträglich.
              </li>
              <li>
                <strong className="text-[#1E2E24]">Pacht- & Kündigungsrecht:</strong> Das BKleingG
                schützt Pächterinnen und Pächter vor willkürlichen Kündigungen.
              </li>
            </ul>
          </article>

          {/* Side card – Verband */}
          <aside className="bg-[#1E2E24] text-white rounded-3xl p-8 relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#4A7C59]/30 blob-shape-1" />
            <div className="relative">
              <Building className="w-8 h-8 text-[#F9A03F] mb-4" />
              <span className="font-script text-xl text-[#F9A03F] block">— Mitglied im —</span>
              <h3 className="font-display text-2xl font-semibold mt-1 mb-3">
                Verband der Duisburger Kleingartenvereine e.V.
              </h3>
              <p className="opacity-90 text-sm leading-relaxed mb-5">
                In Duisburg gibt es rund <strong>106 Vereine</strong> mit über <strong>7.000
                Pächtern</strong> auf etwa <strong>2,3 Mio. m²</strong>. Wir gehören zu
                Bezirk E (Mitte).
              </p>
              <a
                href="https://kleingarten-duisburg.de"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="recht-verband-link"
                className="inline-flex items-center gap-2 bg-[#F9A03F] text-[#1E2E24] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors"
              >
                Zum Verband <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </aside>

          {/* GuBO */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10 lg:col-span-3">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#E2725B]/12 text-[#E2725B] blob-shape-1 mb-5">
                  <FileText className="w-6 h-6" />
                </span>
                <span className="font-script text-xl text-[#E2725B] block">— Garten- und Bauordnung —</span>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-1 mb-5">
                  Was darf wie wachsen und gebaut werden?
                </h2>
                <p className="text-[#4B5E53] leading-relaxed mb-4">
                  Die Garten- und Bauordnung des Verbandes konkretisiert das Bundeskleingartengesetz
                  und regelt das Miteinander in der Anlage. Sie ist verbindlich für alle Pächter.
                </p>
                <p className="text-[#4B5E53] leading-relaxed">
                  Bei konkreten Fragen sprecht ihr am besten unsere{" "}
                  <Link to="/vorstand" className="text-[#4A7C59] font-bold hover:underline">
                    Fachberatung oder den Vorstand
                  </Link>{" "}
                  an, bevor ihr größere Veränderungen plant.
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  { t: "Lauben", d: "Max. 24 m² Grundfläche inkl. überdachtem Freisitz. Kein dauerhaftes Wohnen." },
                  { t: "Bäume & Hecken", d: "Höhen und Abstände sind geregelt; großwüchsige Waldbäume sind unzulässig." },
                  { t: "Drittel-Regel", d: "Mind. 1/3 der Fläche für Obst & Gemüse, Rasen und Erholung im Rest." },
                  { t: "Zäune & Tore", d: "Einheitliche Außen­abgrenzung; Tor­anlagen nach Anlagenordnung." },
                  { t: "Wasser & Strom", d: "Zählerstände werden jährlich erfasst – bitte rechtzeitig melden." },
                  { t: "Tierhaltung", d: "Nur bestimmte Tiere erlaubt (z. B. Bienen), nach Absprache mit Vorstand." },
                ].map((b) => (
                  <li key={b.t} className="bg-[#F4F1E1] rounded-2xl p-5 border border-[#E8E3D3]">
                    <div className="font-display font-semibold text-[#1E2E24] mb-1">{b.t}</div>
                    <div className="text-sm text-[#4B5E53] leading-relaxed">{b.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Schottergärten */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#E2725B]/12 text-[#E2725B] blob-shape-1 mb-4">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-[#1E2E24] mb-3">
              Keine Schottergärten
            </h3>
            <p className="text-sm text-[#4B5E53] leading-relaxed">
              Schottergärten sind in der Anlage <strong>nicht zulässig</strong>. Sie schaden der
              Biodiversität und widersprechen der kleingärtnerischen Nutzung. Bundeskleingartengesetz
              und Garten- und Bauordnung schließen sie ohnehin aus.
            </p>
          </article>

          {/* Hecken */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-4">
              <Trees className="w-5 h-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-[#1E2E24] mb-3">
              Heckenschnitt­zeitraum
            </h3>
            <p className="text-sm text-[#4B5E53] leading-relaxed">
              Vom <strong>1. März bis 30. September</strong> dürfen Hecken, Gehölze und Gebüsche
              gemäß Bundesnaturschutzgesetz nicht entfernt oder stark geschnitten werden.
              Schonende Pflegeschnitte bleiben erlaubt.
            </p>
          </article>

          {/* Bienen */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#F9A03F]/15 text-[#F9A03F] blob-shape-1 mb-4">
              <Bug className="w-5 h-5" />
            </span>
            <h3 className="font-display text-xl font-semibold text-[#1E2E24] mb-3">
              Bienenhaltung
            </h3>
            <p className="text-sm text-[#4B5E53] leading-relaxed">
              Imkerei wird im Verband ausdrücklich begrüßt – ökologisch wertvoll und gut für die
              Anlage. Aus nachbarschaftlichen und versicherungsrechtlichen Gründen ist sie an
              Bedingungen geknüpft. Bitte sprecht uns vorher an.
            </p>
          </article>

          {/* Boden + Naturschutz */}
          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10 lg:col-span-3">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
              <div>
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-5">
                  <Sprout className="w-6 h-6" />
                </span>
                <span className="font-script text-xl text-[#4A7C59] block">— Naturgemäß gärtnern —</span>
                <h2 className="font-display text-3xl font-semibold tracking-tight mt-1 mb-4">
                  Mit der Natur, nicht gegen sie.
                </h2>
                <p className="text-[#4B5E53] leading-relaxed mb-4">
                  Blühende Kleingärten leisten einen wichtigen Beitrag zu Biodiversität und
                  Klimaschutz: Sie sind Lebensraum für Vögel, Insekten und Kleintiere, mildern
                  Hitze ab und lassen Regen besser versickern.
                </p>
                <p className="text-[#4B5E53] leading-relaxed">
                  Wir empfehlen unseren Mitgliedern <strong>torffrei zu gärtnern</strong> – der
                  Abbau von Torf zerstört wertvolle Moorlandschaften und schadet dem Klima.
                </p>
              </div>

              <div className="bg-[#F4F1E1] rounded-3xl p-6 border border-[#E8E3D3]">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white text-[#E2725B] blob-shape-1 mb-4">
                  <Snowflake className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">
                  Bodenuntersuchungen
                </h3>
                <p className="text-sm text-[#4B5E53] leading-relaxed">
                  In Teilen Duisburgs gab es in der Vergangenheit Bodenbelastungen aus
                  industrieller Nutzung. Für unsere Anlage besteht laut aktuellem Stand kein
                  besonderer Handlungsbedarf. Wir folgen den Verhaltensempfehlungen der Stadt
                  Duisburg.
                </p>
              </div>
            </div>
          </article>

          {/* Disclaimer */}
          <div className="lg:col-span-3 bg-[#1E2E24]/5 border border-[#E8E3D3] rounded-3xl p-6 text-sm text-[#4B5E53] leading-relaxed">
            <strong className="text-[#1E2E24]">Hinweis:</strong> Diese Übersicht ersetzt keine
            Rechtsberatung. Verbindlich sind das Bundeskleingartengesetz, die Garten- und
            Bauordnung des Verbandes sowie die Vereinssatzung. Aktuelle Fassungen erhaltet ihr beim
            Vorstand oder direkt beim{" "}
            <a
              href="https://kleingarten-duisburg.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A7C59] font-bold hover:underline"
            >
              Verband der Duisburger Kleingartenvereine e.V.
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recht;
