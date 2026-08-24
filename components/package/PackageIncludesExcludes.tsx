type PackageIncludesExcludesProps = {
  includes: string[];
  excludes: string[];
};

export default function PackageIncludesExcludes({
  includes,
  excludes,
}: PackageIncludesExcludesProps) {
  return (
    <section
      id="included"
      className="scroll-mt-40 bg-[#F8F6F2] px-6 py-20 text-[#081827] sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Package Details
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            What&apos;s included
            <span className="block text-[#081827]/35">
              and what&apos;s not
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#081827]/65 md:text-lg">
            Review the services covered by the journey and any additional
            expenses that remain the traveler&apos;s responsibility.
          </p>
        </div>

        {/* Included / excluded columns */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 md:mt-16">
          {/* Included */}
          <div className="border-t-2 border-[#C9A46A] bg-white px-6 py-8 sm:px-8 sm:py-10">
            <div className="mb-8 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A46A]">
                  Included
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Covered in your journey
                </h3>
              </div>

              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A46A]/15 text-lg font-bold text-[#9C773E]"
              >
                ✓
              </span>
            </div>

            {includes.length > 0 ? (
              <ul className="divide-y divide-[#081827]/10">
                {includes.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-sm font-bold text-[#C9A46A]"
                    >
                      ✓
                    </span>

                    <span className="text-sm leading-7 text-[#081827]/72 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-8 text-[#081827]/50">
                Detailed package inclusions will be added here.
              </p>
            )}
          </div>

          {/* Excluded */}
          <div className="border-t-2 border-[#081827]/25 bg-white px-6 py-8 sm:px-8 sm:py-10">
            <div className="mb-8 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#081827]/45">
                  Not Included
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  Additional expenses
                </h3>
              </div>

              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#081827]/7 text-lg font-bold text-[#081827]/45"
              >
                —
              </span>
            </div>

            {excludes.length > 0 ? (
              <ul className="divide-y divide-[#081827]/10">
                {excludes.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-sm font-bold text-[#081827]/35"
                    >
                      —
                    </span>

                    <span className="text-sm leading-7 text-[#081827]/72 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-8 text-[#081827]/50">
                Detailed package exclusions will be added here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}