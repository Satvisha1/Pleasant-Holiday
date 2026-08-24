import Link from "next/link";

type PackageInquiryProps = {
  packageName: string;
  durationLabel?: string;
  difficulty?: string;
  country?: string;
};

export default function PackageInquiry({
  packageName,
  durationLabel,
  difficulty,
  country,
}: PackageInquiryProps) {
  return (
    <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          {/* Main message */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#081827]/55">
              Plan Your Journey
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Interested in the
              <span className="block">
                {packageName}?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#081827]/70 md:text-lg">
              Speak with our travel team to discuss dates, private departures,
              group preferences, and ways to tailor the journey around your
              plans.
            </p>
          </div>

          {/* Action area */}
          <div className="lg:border-l lg:border-[#081827]/20 lg:pl-10">
            {(durationLabel || difficulty || country) && (
              <div className="mb-7 space-y-3 border-b border-[#081827]/20 pb-7">
                {durationLabel && (
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#081827]/50">
                      Duration
                    </span>

                    <span className="text-sm font-bold">
                      {durationLabel}
                    </span>
                  </div>
                )}

                {difficulty && (
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#081827]/50">
                      Difficulty
                    </span>

                    <span className="text-sm font-bold">
                      {difficulty}
                    </span>
                  </div>
                )}

                {country && (
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#081827]/50">
                      Destination
                    </span>

                    <span className="text-sm font-bold">
                      {country}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={`/contact?trip=${encodeURIComponent(packageName)}`}
                className="inline-flex items-center justify-center rounded-full bg-[#081827] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#10243D]"
              >
                Enquire Now
              </Link>

              <Link
                href={`/contact?trip=${encodeURIComponent(
                  packageName
                )}&customize=true`}
                className="inline-flex items-center justify-center rounded-full border border-[#081827]/35 px-6 py-3.5 text-sm font-bold text-[#081827] transition duration-300 hover:border-[#081827] hover:bg-[#081827] hover:text-white"
              >
                Customize This Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}