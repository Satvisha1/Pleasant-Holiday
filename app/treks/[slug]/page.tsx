import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { treks } from "@/data/treks";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PackageHero from "@/components/package/PackageHero";
import PackageQuickFacts from "@/components/package/PackageQuickFacts";
import PackageSectionNav from "@/components/package/PackageSectionNav";
import PackageOverview from "@/components/package/PackageOverview";
import PackageItinerary from "@/components/package/PackageItinerary";
import PackageIncludesExcludes from "@/components/package/PackageIncludesExcludes";
import PackageMap from "@/components/package/PackageMap";
import PackageEssentialInfo from "@/components/package/PackageEssentialInfo";
import PackageFAQ from "@/components/package/PackageFAQ";
import PackageInquiry from "@/components/package/PackageInquiry";
import RelatedJourneys from "@/components/package/RelatedJourneys";
import PackageGallery from "@/components/package/PackageGallery";

type TrekPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return treks.map((trek) => ({
    slug: trek.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrekPageProps): Promise<Metadata> {
  const { slug } = await params;

  const trek = treks.find((item) => item.slug === slug);

  if (!trek) {
    return {
      title: "Trek Not Found | Pleasant Holiday",
    };
  }

  return {
    title: trek.seo?.title ?? `${trek.name} | Pleasant Holiday`,
    description: trek.seo?.description ?? trek.shortDescription,
    keywords: trek.seo?.keywords,
  };
}

export default async function TrekPage({ params }: TrekPageProps) {
  const { slug } = await params;

  const trek = treks.find((item) => item.slug === slug);

  if (!trek) {
    notFound();
  }

  const relatedTreks = treks
    .filter((item) => trek.relatedTrekSlugs?.includes(item.slug))
    .map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.image,
      durationLabel: item.durationLabel,
      meta: item.difficulty,
      href: `/treks/${item.slug}`,
    }));

  return (
    <>
      {/* Package Hero */}
      <PackageHero
        name={trek.name}
        image={trek.image}
        country={trek.country}
        category={trek.region}
        shortDescription={trek.shortDescription}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Treks",
            href: "/treks",
          },
          {
            label: trek.name,
          },
        ]}
      />

      {/* Quick Facts */}
      <PackageQuickFacts
        facts={[
          {
            label: "Duration",
            value: trek.durationLabel,
          },
          {
            label: "Difficulty",
            value: trek.difficulty,
          },
          {
            label: "Max Altitude",
            value: trek.altitudeDetails?.location
              ? `${trek.maxAltitude} • ${trek.altitudeDetails.location}`
              : trek.maxAltitude,
          },
          {
            label: "Best Season",
            value:
              trek.bestSeason.length > 0
                ? trek.bestSeason.join(" / ")
                : "To be confirmed",
          },
        ]}
      />

      {/* Sticky Package Navigation */}
      <PackageSectionNav />

      {/* Journey Gallery */}
      <PackageGallery
        images={trek.gallery ?? []}
        heading={`${trek.name} in pictures`}
      />

      {/* Overview + Highlights */}
      <PackageOverview
        overview={trek.overview}
        highlights={trek.highlights}
        heading="About this trek"
      />

      {/* Day-by-Day Itinerary */}
      <PackageItinerary
        itinerary={trek.itinerary}
        durationLabel={trek.durationLabel}
      />

      {/* Included / Excluded */}
      <PackageIncludesExcludes
        includes={trek.includes}
        excludes={trek.excludes}
      />

      {/* Route Map */}
      <PackageMap
        mapImage={trek.mapImage}
        mapAlt={trek.mapAlt}
        startLocation={trek.startLocation}
        endLocation={trek.endLocation}
        routeSummary={trek.routeSummary}
      />

      {/* Essential Information */}
      <PackageEssentialInfo
        items={[
          {
            label: "Accommodation",
            value: trek.generalInfo?.accommodation,
          },
          {
            label: "Meals",
            value: trek.generalInfo?.meals,
          },
          {
            label: "Drinking Water",
            value: trek.generalInfo?.drinkingWater,
          },
          {
            label: "Difficulty",
            value: trek.generalInfo?.difficulty,
          },
          {
            label: "Fitness",
            value: trek.generalInfo?.fitness,
          },
          {
            label: "Altitude",
            value: trek.generalInfo?.altitude,
          },
          {
            label: "Acclimatisation",
            value: trek.generalInfo?.acclimatisation,
          },
          {
            label: "Permits",
            value: trek.generalInfo?.permits,
          },
          {
            label: "Transportation",
            value: trek.generalInfo?.transportation,
          },
          {
            label: "Luggage",
            value: trek.generalInfo?.luggage,
          },
          {
            label: "Electricity",
            value: trek.generalInfo?.electricity,
          },
          {
            label: "Internet",
            value: trek.generalInfo?.internet,
          },
          {
            label: "Communication",
            value: trek.generalInfo?.communication,
          },
          {
            label: "Insurance",
            value: trek.generalInfo?.insurance,
          },
          {
            label: "Equipment",
            value: trek.generalInfo?.equipment,
          },
          {
            label: "Weather",
            value: trek.generalInfo?.weather,
          },
          {
            label: "Guide & Support Staff",
            value: trek.generalInfo?.guideAndStaff,
          },
        ]}
      />

      {/* Frequently Asked Questions */}
      <PackageFAQ faqs={trek.faqs ?? []} />

      {/* Conversion CTA */}
      <PackageInquiry
        packageName={trek.name}
        durationLabel={trek.durationLabel}
        difficulty={trek.difficulty}
        country={trek.country}
      />

      {/* Related Treks */}
      <RelatedJourneys
        journeys={relatedTreks}
        heading="More Himalayan journeys"
        description="Explore other trekking experiences that may suit your interests, timing, and preferred level of challenge."
      />
    </>
  );
}