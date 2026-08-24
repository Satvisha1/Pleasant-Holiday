type EssentialInfoItem = {
  label: string;
  value?: string;
};

type PackageEssentialInfoProps = {
  items: EssentialInfoItem[];
  heading?: string;
  description?: string;
};

export default function PackageEssentialInfo({
  items,
  heading = "Essential trip information",
  description = "Practical information to help you understand the journey and prepare with confidence.",
}: PackageEssentialInfoProps) {
  const availableItems = items.filter(
    (item): item is EssentialInfoItem & { value: string } =>
      Boolean(item.value?.trim())
  );

  return (
    <section
      id="essential-info"
      className="scroll-mt-40 bg-[#081827] px-6 py-20 text-white sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Before You Travel
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              {heading}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60">
            {description}
          </p>
        </div>

        {/* Information rows */}
        {availableItems.length > 0 ? (
          <div className="mt-12 border-t border-white/15 md:mt-16">
            {availableItems.map((item, index) => (
              <article
                key={`${item.label}-${index}`}
                className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[90px_240px_1fr] md:gap-8 md:py-10"
              >
                {/* Number */}
                <p className="text-xs font-bold tracking-[0.18em] text-[#C9A46A]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Topic */}
                <h3 className="text-lg font-bold leading-7 text-white md:text-xl">
                  {item.label}
                </h3>

                {/* Information */}
                <p className="max-w-3xl text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 border-t border-white/15 pt-10 md:mt-16">
            <p className="max-w-2xl text-base leading-8 text-white/50">
              Detailed practical information for this journey will be added
              here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}