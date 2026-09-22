import Link from "next/link";
import { tours } from "@/data/tours";

export default function FeaturedTours() {
  const featuredTours = tours.filter((tour) => tour.featured).slice(0, 3);

  return (
    <section className="bg-[#081827] px-8 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Featured Tours
            </p>

            <h2 className="max-w-3xl text-4xl font-extrabold md:text-5xl">
              Discover the culture beyond the mountains
            </h2>
          </div>

          <button className="hidden rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#081827] md:block">
            View All Tours
          </button>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {featuredTours.map((tour) => (
            <article
              key={tour.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white text-[#081827] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <div
                  className="h-60 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${tour.image})`,
                  }}
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  {tour.category}
                </p>

                <h3 className="mb-4 text-2xl font-extrabold">
                  {tour.name}
                </h3>

                <p className="mb-6 text-sm text-[#081827]/70">
                  Duration: {tour.durationLabel}
                </p>

                <Link
                  href={`/tours/${tour.slug}`}
                  className="inline-flex rounded-full bg-[#C9A46A] px-5 py-2.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
                >
                  View Tour
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}