type PackageOverviewProps = {
  overview: string;
  highlights: string[];
  heading?: string;
  eyebrow?: string;
};

export default function PackageOverview({
  overview,
  highlights,
  heading = "About this journey",
  eyebrow = "Journey Overview",
}: PackageOverviewProps) {
  return (
    <section
      id="overview"
      className="scroll-mt-40 bg-[#F8F6F2] px-6 py-20 text-[#081827] sm:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
        {/* Overview */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            {eyebrow}
          </p>

          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            {heading}
          </h2>

          {overview ? (
            <div className="mt-8 max-w-3xl">
              <p className="text-base leading-8 text-[#081827]/70 md:text-lg md:leading-9">
                {overview}
              </p>
            </div>
          ) : (
            <p className="mt-8 max-w-3xl text-base leading-8 text-[#081827]/50 md:text-lg">
              A complete journey overview will be added here.
            </p>
          )}
        </div>

        {/* Highlights */}
        <aside className="border-t border-[#081827]/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Journey Highlights
          </p>

          {highlights.length > 0 ? (
            <div>
              {highlights.map((highlight, index) => (
                <div
                  key={`${highlight}-${index}`}
                  className="flex gap-4 border-b border-[#081827]/10 py-5 first:pt-0"
                >
                  <span className="mt-0.5 text-sm font-bold text-[#C9A46A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-medium leading-7 text-[#081827]/80">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="leading-7 text-[#081827]/50">
              Journey highlights will be added here.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}