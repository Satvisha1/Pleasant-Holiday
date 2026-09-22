import Link from "next/link";
import { trekkingRegions } from "@/data/trekkingRegions";

export default function TrekkingRegions() {
  const featuredRegions = trekkingRegions.filter(
    (region) => region.featured
  );

  return (
    <section
      id="trekking-regions"
      className="bg-[#0A1628] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A46A]">
            Trekking Regions
          </p>

          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Explore Nepal by region
          </h2>

          <p className="mt-5 max-w-2xl text-white/70">
            From Everest to Annapurna, discover the most iconic trekking regions
            in Nepal with routes suited to different durations and experience
            levels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {featuredRegions.map((region, index) => (
            <article
              key={region.id}
              className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${region.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/55 to-transparent" />

              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A46A]">
                  {region.trekCountLabel}
                </p>

                <h3 className="mb-3 text-3xl font-bold">
                  {region.name}
                </h3>

                <p className="mb-6 text-sm leading-6 text-white/75">
                  {region.description}
                </p>

                <Link
                  href={`/trekking-regions/${region.slug}`}
                  className="w-fit rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:border-[#C9A46A] hover:bg-[#C9A46A] hover:text-[#0A1628]"
                >
                  Explore Region
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}