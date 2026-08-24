import Link from "next/link";

export type RelatedJourneyItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
  durationLabel: string;
  meta: string;
  href: string;
};

type RelatedJourneysProps = {
  journeys: RelatedJourneyItem[];
  heading?: string;
  eyebrow?: string;
  description?: string;
};

export default function RelatedJourneys({
  journeys,
  heading = "Continue exploring",
  eyebrow = "Related Journeys",
  description = "Discover other journeys that may suit your interests, timing, and travel style.",
}: RelatedJourneysProps) {
  if (journeys.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-6 py-20 text-[#081827] sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              {eyebrow}
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              {heading}
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#081827]/60">
            {description}
          </p>
        </div>

        {/* Journey list */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {journeys.slice(0, 3).map((journey) => (
            <article
              key={journey.id}
              className="group border-t border-[#081827]/15 pt-5"
            >
              <Link href={journey.href} className="block">
                {/* Image */}
                <div className="overflow-hidden bg-[#081827]">
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${journey.image})`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                    {journey.durationLabel} • {journey.meta}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight transition duration-300 group-hover:text-[#9C773E]">
                    {journey.name}
                  </h3>

                  <div className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-[#081827]/65 transition duration-300 group-hover:text-[#081827]">
                    <span>View Journey</span>

                    <span
                      aria-hidden="true"
                      className="transition duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}