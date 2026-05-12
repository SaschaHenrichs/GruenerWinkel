import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

const NAV = [
  { to: "/", label: "Startseite" },
  { to: "/wir-ueber-uns", label: "Wir über uns" },
  { to: "/vorstand", label: "Vorstand" },
  { to: "/aktuelles", label: "Aktuelles" },
  { to: "/recht", label: "Recht & Regeln" },
  { to: "/galerie", label: "Galerie" },
  { to: "/anfahrt", label: "Anfahrt" },
  { to: "/kontakt", label: "Kontakt" },
];

const slug = (s) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/&/g, "und");

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grain-bg min-h-screen flex flex-col">
      {/* Navbar */}
      <header
        data-testid="site-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#FDFBF7]/90 shadow-[0_4px_30px_rgba(74,124,89,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-3 flex items-center justify-between">
          <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="KGV Grüner Winkel Logo"
              className="w-12 h-12 object-cover blob-shape-1 group-hover:rotate-6 transition-transform shadow-sm"
            />
            <span className="leading-tight">
              <span className="block font-display text-[18px] font-semibold text-[#1E2E24]">
                KGV Grüner Winkel
              </span>
              <span className="font-script block text-[15px] text-[#E2725B] -mt-0.5">
                seit 1946 · Duisburg
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`nav-link-${slug(n.label)}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#4A7C59] text-white shadow-[0_6px_18px_rgba(74,124,89,0.28)]"
                      : "text-[#1E2E24] hover:bg-[#4A7C59]/10"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-white border border-[#E8E3D3] text-[#1E2E24]"
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[#E8E3D3] bg-[#FDFBF7]/95 backdrop-blur-md" data-testid="mobile-menu">
            <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  data-testid={`mobile-nav-link-${slug(n.label)}`}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-[15px] font-bold ${
                      isActive ? "bg-[#4A7C59] text-white" : "text-[#1E2E24] hover:bg-[#4A7C59]/10"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer data-testid="site-footer" className="mt-20 bg-[#1E2E24] text-[#FDFBF7] relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#4A7C59]/15 blob-shape-1" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpg" alt="KGV Logo" className="w-12 h-12 object-cover blob-shape-1" />
              <div>
                <div className="font-display text-lg font-semibold">KGV Grüner Winkel e.V.</div>
                <div className="font-script text-[#F9A03F] text-lg -mt-1">80 Jahre Gemeinschaft</div>
              </div>
            </div>
            <p className="text-[#FDFBF7]/70 leading-relaxed text-sm">
              Seit 1946 ein grünes Zuhause für 54 Gartenfreundinnen und Gartenfreunde
              im Sportpark Wedau.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-[#F9A03F]">Kontakt</h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#F9A03F]" />
                Kruppstraße 35a, 47055 Duisburg
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F9A03F]" />
                <a href="tel:+492039353734" className="hover:underline">0203 9353734</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F9A03F]" />
                <a href="mailto:info@kgvgruenerwinkel.de" className="hover:underline">
                  info@kgvgruenerwinkel.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-[#F9A03F]">Schnellzugriff</h4>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              <li><Link to="/wir-ueber-uns" className="hover:text-[#F9A03F]">Wir über uns</Link></li>
              <li><Link to="/vorstand" className="hover:text-[#F9A03F]">Vorstand</Link></li>
              <li><Link to="/aktuelles" className="hover:text-[#F9A03F]">Aktuelles</Link></li>
              <li><Link to="/recht" className="hover:text-[#F9A03F]">Recht & Regeln</Link></li>
              <li><Link to="/galerie" className="hover:text-[#F9A03F]">Galerie</Link></li>
              <li><Link to="/winterdienst" className="hover:text-[#F9A03F]">Winterdienst</Link></li>
              <li><Link to="/vereinsheim" className="hover:text-[#F9A03F]">Vereinsheim</Link></li>
              <li><Link to="/impressum" className="hover:text-[#F9A03F]">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FDFBF7]/60">
            <span>© {new Date().getFullYear()} KGV Grüner Winkel e.V. – Alle Rechte vorbehalten.</span>
            <span className="font-script text-base text-[#F9A03F]/80">
              Im Verband Duisburger Kleingartenvereine e.V.
            </span>
            <Link to="/datenschutz" className="hover:text-[#F9A03F]">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
