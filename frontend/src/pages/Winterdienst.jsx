import PageHero from "@/components/PageHero";
import { Snowflake, AlertCircle, Key } from "lucide-react";

const Winterdienst = () => {
  return (
    <div data-testid="winterdienst-page">
      <PageHero
        eyebrow="Winterdienst"
        title="Auch im Winter gut begehbar."
        subtitle="Da wir eine öffentliche Gartenanlage sind, müssen unsere Wege auch in der kalten Jahreszeit verkehrssicher sein."
        breadcrumb="Winterdienst"
      />

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-10 space-y-6">
          <div className="bg-white border border-[#E8E3D3] rounded-3xl p-8 sm:p-10">
            <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#4A7C59]/12 text-[#4A7C59] blob-shape-1 mb-6">
              <Snowflake className="w-6 h-6" />
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1E2E24] mb-4 tracking-tight">
              Liebe Gartenfreunde,
            </h2>
            <p className="text-[#4B5E53] leading-relaxed mb-4">
              da wir eine öffentliche Gartenanlage sind, müssen die Wege auch in der kalten
              Jahreszeit verkehrssicher gemacht werden.
            </p>
            <p className="text-[#4B5E53] leading-relaxed">Das heißt:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 bg-[#F4F1E1] rounded-2xl p-4">
                <AlertCircle className="w-5 h-5 text-[#E2725B] mt-0.5 shrink-0" />
                <span className="text-[#4B5E53]"><strong className="text-[#1E2E24]">Laub beseitigen</strong> und bei Bedarf Wege freihalten.</span>
              </li>
              <li className="flex items-start gap-3 bg-[#F4F1E1] rounded-2xl p-4">
                <Snowflake className="w-5 h-5 text-[#4A7C59] mt-0.5 shrink-0" />
                <span className="text-[#4B5E53]">Bei <strong className="text-[#1E2E24]">Eis und Schnee</strong> die Wege sicher begehbar machen.</span>
              </li>
              <li className="flex items-start gap-3 bg-[#F4F1E1] rounded-2xl p-4">
                <Key className="w-5 h-5 text-[#F9A03F] mt-0.5 shrink-0" />
                <span className="text-[#4B5E53]">Bei Eis oder Schnee bitte die <strong className="text-[#1E2E24]">Eingangstore hinter euch wieder abschließen</strong>.</span>
              </li>
            </ul>
            <p className="mt-6 text-[#4B5E53]">Mit freundlichen Grüßen,<br />Der Vorstand</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Winterdienst;
