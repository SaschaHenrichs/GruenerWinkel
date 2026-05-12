import { Link } from "react-router-dom";

export const PageHero = ({ eyebrow, title, subtitle, breadcrumb }) => (
  <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
    <div
      aria-hidden
      className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#4A7C59]/12 blob-shape-1"
    />
    <div
      aria-hidden
      className="absolute -bottom-24 -left-20 w-[260px] h-[260px] bg-[#F9A03F]/15 blob-shape-2"
    />
    <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
      {breadcrumb && (
        <nav className="mb-6 text-sm text-[#4B5E53]" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#4A7C59]">Startseite</Link>
          <span className="mx-2">·</span>
          <span className="text-[#1E2E24] font-semibold">{breadcrumb}</span>
        </nav>
      )}
      <span
        className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white border border-[#E8E3D3] text-[#4A7C59] text-[12px] font-semibold uppercase tracking-[0.18em]"
      >
        {eyebrow}
      </span>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] font-semibold text-[#1E2E24] max-w-3xl tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg text-[#4B5E53] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
