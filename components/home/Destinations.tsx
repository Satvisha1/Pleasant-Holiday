import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  const featuredDestinations = destinations.filter(
    (destination) => destination.featured
  );

  return (
    <section
      id="destinations"
      className="bg-[#F8F8F5] px-6 py-24 text-[#0A1628]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A46A]">
            Destinations
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Where would you like to go?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {featuredDestinations.map((destination, index) => (
            <article
              key={destination.id}
              className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#0A1628] shadow-sm ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${destination.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />

              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-8 text-white">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A46A]">
                  {destination.highlight}
                </p>

                <h3 className="mb-3 text-4xl font-bold">
                  {destination.name}
                </h3>

                <p className="mb-6 max-w-sm text-sm leading-6 text-white/80">
                  {destination.description}
                </p>

                <Link
                  href={`/destinations/${destination.slug}`}
                  className="w-fit rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:border-[#C9A46A] hover:bg-[#C9A46A] hover:text-[#0A1628]"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}