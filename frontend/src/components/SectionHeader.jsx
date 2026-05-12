export const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-10`}>
    {eyebrow && (
      <span
        data-testid="section-eyebrow"
        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#E2725B]/12 text-[#E2725B] text-[12px] font-semibold uppercase tracking-[0.16em]"
      >
        {eyebrow}
      </span>
    )}
    <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1E2E24] leading-[1.05] tracking-tight">
      {title}
    </h1>
    {subtitle && (
      <p className="mt-5 text-[17px] leading-relaxed text-[#4B5E53]">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
