import PageHero from "@/components/PageHero";

const Datenschutz = () => {
  return (
    <div data-testid="datenschutz-page">
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        breadcrumb="Datenschutz"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-8 space-y-6 text-sm text-[#4B5E53] leading-relaxed">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten Ihre Daten ausschließlich
              auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>

            <div>
              <h3 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">Verantwortlicher</h3>
              <p>
                KGV Grüner Winkel e.V., Kruppstraße 35a, 47055 Duisburg,
                E-Mail: <a href="mailto:info@kgvgruenerwinkel.de" className="text-[#4A7C59] font-semibold hover:underline">info@kgvgruenerwinkel.de</a>
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">Ihre Rechte</h3>
              <p>
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung
                Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen
                Aufsichtsbehörde beschweren.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-[#1E2E24] mb-2">Cookies</h3>
              <p>
                Unsere Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine
                Tracking- oder Marketing-Cookies gesetzt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
