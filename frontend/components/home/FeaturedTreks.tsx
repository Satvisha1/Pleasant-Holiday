import Link from "next/link";
import { treks } from "@/data/treks";

export default function FeaturedTreks() {
  const featuredTreks = treks.filter((trek) => trek.featured).slice(0, 4);

  return (
    <section
    id="featured-treks"
    className="bg-[#F8F6F2] px-8 py-24 text-[#081827]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Featured Treks
            </p>

            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Signature journeys in Nepal
            </h2>
          </div>

          <button className="hidden rounded-full border border-[#081827]/20 px-6 py-3 text-sm font-bold transition hover:bg-[#081827] hover:text-white md:block">
            View All Treks
          </button>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTreks.map((trek) => (
            <article
              key={trek.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${trek.image})`,
                  }}
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  {trek.durationLabel} • {trek.difficulty}
                </p>

                <h3 className="mb-4 text-xl font-extrabold leading-tight">
                  {trek.name}
                </h3>

                <div className="mb-6 space-y-2 text-sm text-[#081827]/65">
                  <p>Altitude: {trek.maxAltitude}</p>

                  <p>
                    Best Season: {trek.bestSeason.join(" / ")}
                  </p>
                </div>

                <Link
                  href={`/treks/${trek.slug}`}
                  className="inline-flex rounded-full bg-[#C9A46A] px-5 py-2.5 text-sm font-bold text-[#081827] transition hover:bg-[#081827] hover:text-white"
                >
                  View Journey
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}