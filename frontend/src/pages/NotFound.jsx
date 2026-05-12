import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section
      data-testid="notfound-page"
      className="min-h-[70vh] grid place-items-center px-5"
    >
      <div className="text-center max-w-md">
        <div className="font-display text-[120px] sm:text-[180px] leading-none text-[#4A7C59] tracking-tighter">
          404
        </div>
        <h1 className="font-display text-3xl font-semibold mt-2 mb-3">
          Hier wächst leider nichts.
        </h1>
        <p className="text-[#4B5E53] mb-8 leading-relaxed">
          Die Seite, die Du suchst, gibt es nicht – oder sie wurde verpflanzt.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4A7C59] text-white font-semibold hover:bg-[#3A6347] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
