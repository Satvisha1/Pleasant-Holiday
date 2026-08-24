import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";
import { treks } from "@/data/treks";
import { tours } from "@/data/tours";

import Breadcrumbs from "@/components/shared/Breadcrumbs";

type DestinationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found | Pleasant Holiday",
    };
  }

  return {
    title: `${destination.name} Travel & Journeys | Pleasant Holiday`,
    description: destination.description,
  };
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const destinationTreks = treks.filter(
    (trek) =>
      trek.country.toLowerCase() === destination.name.toLowerCase()
  );

  const destinationTours = tours.filter(
    (tour) =>
      tour.country.toLowerCase() === destination.name.toLowerCase()
  );

  const hasJourneys =
    destinationTreks.length > 0 || destinationTours.length > 0;

  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Destination Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#081827] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${destination.image})`,
          }}
        />

        <div className="absolute inset-0 bg-[#081827]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081827]/90 via-[#081827]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/95 via-transparent to-[#081827]/25" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-8 md:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C9A46A] sm:text-sm">
              <span className="h-px w-8 bg-[#C9A46A]" />
              Destination
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              {destination.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {destination.description}
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
            label: "Destinations",
            href: "/#destinations",
          },
          {
            label: destination.name,
          },
        ]}
      />

      {/* Intro */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              {destination.highlight}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Travel experiences in {destination.name}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#081827]/65 md:text-lg md:leading-9">
            <p>
              {destination.name} offers a distinct Himalayan travel experience,
              shaped by landscapes, culture, local traditions, and journey
              style. This page will become the central destination hub for
              related treks, tours, travel information, seasonal guidance, and
              planning support.
            </p>

            <p>
              As the Pleasant Holiday catalogue grows, this page will connect
              travelers to relevant journeys, regional highlights, practical
              information, and recommended ways to plan a private or guided
              trip.
            </p>
          </div>
        </div>
      </section>

      {/* Available Treks */}
      {destinationTreks.length > 0 && (
        <section className="bg-white px-6 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                  Trekking
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                  Treks in {destination.name}
                </h2>
              </div>

              <Link
                href="/treks"
                className="w-fit rounded-full border border-[#081827]/20 px-6 py-3 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
              >
                View All Treks
              </Link>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {destinationTreks.map((trek) => (
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
                        {trek.region} • {trek.durationLabel} •{" "}
                        {trek.difficulty}
                      </p>

                      <h3 className="text-2xl font-extrabold leading-tight">
                        {trek.name}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#081827]/60">
                        {trek.shortDescription}
                      </p>

                      <div className="mt-6 border-t border-[#081827]/10 pt-5">
                        <span className="text-sm font-bold text-[#9C773E]">
                          View Trek →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available Tours */}
      {destinationTours.length > 0 && (
        <section className="bg-[#081827] px-6 py-20 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                  Tours
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                  Tours in {destination.name}
                </h2>
              </div>

              <Link
                href="/tours"
                className="w-fit rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#081827]"
              >
                View All Tours
              </Link>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {destinationTours.map((tour) => (
                <article
                  key={tour.id}
                  className="group overflow-hidden bg-white text-[#081827] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={`/tours/${tour.slug}`} className="block">
                    <div className="overflow-hidden bg-[#081827]">
                      {tour.image ? (
                        <div
                          className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${tour.image})`,
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
                        {tour.category} • {tour.durationLabel}
                      </p>

                      <h3 className="text-2xl font-extrabold leading-tight">
                        {tour.name}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#081827]/60">
                        {tour.shortDescription}
                      </p>

                      <div className="mt-6 border-t border-[#081827]/10 pt-5">
                        <span className="text-sm font-bold text-[#9C773E]">
                          View Tour →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty catalogue state */}
      {!hasJourneys && (
        <section className="bg-white px-6 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                Coming Soon
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Journeys for {destination.name} will be added here.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#081827]/60">
                This destination page is ready. Add matching treks or tours to
                the central data files and they will appear here automatically.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
              >
                Plan a Custom Journey
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#081827]/55">
              Tailor-Made Travel
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Plan a journey to {destination.name}
            </h2>
          </div>

          <Link
            href={`/contact?trip=${encodeURIComponent(
              `${destination.name} custom journey`
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