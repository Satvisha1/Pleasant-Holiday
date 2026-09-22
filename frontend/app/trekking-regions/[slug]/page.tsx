import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { trekkingRegions } from "@/data/trekkingRegions";
import { treks } from "@/data/treks";

import Breadcrumbs from "@/components/shared/Breadcrumbs";

type TrekkingRegionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return trekkingRegions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrekkingRegionPageProps): Promise<Metadata> {
  const { slug } = await params;

  const region = trekkingRegions.find((item) => item.slug === slug);

  if (!region) {
    return {
      title: "Trekking Region Not Found | Pleasant Holiday",
    };
  }

  return {
    title: `${region.name} Treks | Pleasant Holiday`,
    description: region.description,
  };
}

export default async function TrekkingRegionPage({
  params,
}: TrekkingRegionPageProps) {
  const { slug } = await params;

  const region = trekkingRegions.find((item) => item.slug === slug);

  if (!region) {
    notFound();
  }

  const regionTreks = treks.filter(
    (trek) => trek.region.toLowerCase() === region.slug.toLowerCase()
  );

  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Region Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#081827] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${region.image})`,
          }}
        />

        <div className="absolute inset-0 bg-[#081827]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081827]/90 via-[#081827]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/95 via-transparent to-[#081827]/25" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 md:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C9A46A] sm:text-sm">
              <span className="h-px w-8 bg-[#C9A46A]" />
              Trekking Region
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              {region.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {region.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Trekking Regions",
            href: "/#trekking-regions",
          },
          {
            label: region.name,
          },
        ]}
      />

      {/* Region Intro */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              {region.country}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Trekking in {region.name}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#081827]/65 md:text-lg md:leading-9">
            <p>
              {region.name} is one of Nepal&apos;s major Himalayan trekking
              areas. This page connects travelers to relevant routes, regional
              highlights, practical information, and journey options.
            </p>

            <p>
              As the Pleasant Holiday trek catalogue grows, this region page
              will automatically collect all journeys assigned to this area from
              the central trek data.
            </p>
          </div>
        </div>
      </section>

      {/* Region Treks */}
      <section className="bg-white px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                Available Journeys
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Treks in this region
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#081827]/60">
              {regionTreks.length > 0
                ? `${regionTreks.length} journeys currently available.`
                : "Journeys for this region will be added here."}
            </p>
          </div>

          {regionTreks.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {regionTreks.map((trek) => (
                <article
                  key={trek.id}
                  className="group overflow-hidden bg-[#F8F6F2] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={`/treks/${trek.slug}`} className="block">
                    <div className="overflow-hidden bg-[#081827]">
                      {trek.image ? (
                        <div
                          className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${trek.image})`,
                          }}
                        />
                      ) : (
                        <div className="flex h-64 items-center justify-center bg-[#081827] px-8 text-center">
                          <p className="text-sm font-medium text-white/45">
                            Image coming soon
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                        {trek.durationLabel} • {trek.difficulty}
                      </p>

                      <h3 className="text-2xl font-extrabold leading-tight">
                        {trek.name}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#081827]/60">
                        {trek.shortDescription}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-[#081827]/10 pt-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#081827]/40">
                            Max Altitude
                          </p>

                          <p className="mt-1 text-sm font-bold">
                            {trek.maxAltitude}
                          </p>
                        </div>

                        <span className="text-sm font-bold text-[#9C773E]">
                          View Trek →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl border-t border-[#081827]/10 pt-8">
              <p className="text-base leading-8 text-[#081827]/60">
                This region page is ready. Add matching treks to{" "}
                <code className="bg-[#081827]/5 px-1 py-0.5">
                  data/treks.ts
                </code>{" "}
                and they will appear here automatically.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
              >
                Plan a Custom Trek
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#081827]/55">
              Private Trek Planning
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Plan a trek in {region.name}
            </h2>
          </div>

          <Link
            href={`/contact?trip=${encodeURIComponent(
              `${region.name} custom trek`
            )}&customize=true`}
            className="w-fit rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}