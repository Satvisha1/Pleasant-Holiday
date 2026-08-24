type PackageFact = {
  label: string;
  value: string;
};

type PackageQuickFactsProps = {
  facts: PackageFact[];
};

export default function PackageQuickFacts({
  facts,
}: PackageQuickFactsProps) {
  return (
    <section className="border-b border-[#081827]/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-5 sm:px-8 md:grid-cols-4">
        {facts.map((fact, index) => (
          <div
            key={`${fact.label}-${fact.value}`}
            className={`py-5 ${
              index % 2 !== 0
                ? "border-l border-[#081827]/10 pl-5"
                : ""
            } ${
              index >= 2
                ? "border-t border-[#081827]/10 md:border-t-0"
                : ""
            } md:border-l md:border-[#081827]/10 md:px-6 md:first:border-l-0`}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A46A] sm:text-xs">
              {fact.label}
            </p>

            <p className="text-sm font-bold text-[#081827] sm:text-base">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}