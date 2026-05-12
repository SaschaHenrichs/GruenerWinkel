import PageHero from "@/components/PageHero";

const Impressum = () => {
  return (
    <div data-testid="impressum-page">
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        breadcrumb="Impressum"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-10 space-y-8">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-4">KGV Grüner Winkel e.V.</h2>
            <p className="text-[#4B5E53] leading-relaxed">
              Kruppstraße 35a<br />
              47055 Duisburg<br />
              Tel.: <a href="tel:+492039353734" className="text-[#4A7C59] hover:underline">0203 9353734</a><br />
              E-Mail: <a href="mailto:info@kgvgruenerwinkel.de" className="text-[#4A7C59] hover:underline">info@kgvgruenerwinkel.de</a><br />
              Web: <a href="https://www.kgvgruenerwinkel.de" className="text-[#4A7C59] hover:underline">www.kgvgruenerwinkel.de</a>
            </p>
            <p className="text-sm text-[#4B5E53] mt-4">Medienrechtlich verantwortlich: Der Vorstand</p>
          </div>

          <article className="bg-white border border-[#E8E3D3] rounded-3xl p-8 space-y-6">
            <h3 className="font-display text-xl font-semibold">Haftungsausschluss</h3>

            <div>
              <h4 className="font-semibold text-[#1E2E24] mb-2">1. Inhalt des Onlineangebotes</h4>
              <p className="text-sm text-[#4B5E53] leading-relaxed">
                Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder
                Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich
                auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
                der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger
                Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors
                kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote
                sind freibleibend und unverbindlich.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1E2E24] mb-2">2. Verweise und Links</h4>
              <p className="text-sm text-[#4B5E53] leading-relaxed">
                Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb des
                Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in
                dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch
                möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der
                Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte
                auf den zu verlinkenden Seiten erkennbar waren.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1E2E24] mb-2">3. Urheber- und Kennzeichenrecht</h4>
              <p className="text-sm text-[#4B5E53] leading-relaxed">
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken,
                Tondokumente, Videosequenzen und Texte zu beachten. Das Copyright für veröffentlichte, vom
                Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
                Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen
                oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
