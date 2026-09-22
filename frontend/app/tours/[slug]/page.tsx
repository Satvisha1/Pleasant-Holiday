import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { tours } from "@/data/tours";

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

type TourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found | Pleasant Holiday",
    };
  }

  return {
    title: tour.seo?.title ?? `${tour.name} | Pleasant Holiday`,
    description: tour.seo?.description ?? tour.shortDescription,
    keywords: tour.seo?.keywords,
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = tours
    .filter((item) => tour.relatedTourSlugs?.includes(item.slug))
    .map((item) => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.image,
      durationLabel: item.durationLabel,
      meta: item.category,
      href: `/tours/${item.slug}`,
    }));

  return (
    <>
      {/* Package Hero */}
      <PackageHero
        name={tour.name}
        image={tour.image}
        country={tour.country}
        category={tour.category}
        shortDescription={tour.shortDescription}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Tours",
            href: "/tours",
          },
          {
            label: tour.name,
          },
        ]}
      />

      {/* Quick Facts */}
      <PackageQuickFacts
        facts={[
          {
            label: "Duration",
            value: tour.durationLabel,
          },
          {
            label: "Journey Type",
            value: tour.category,
          },
          {
            label: "Start",
            value: tour.startLocation || "To be confirmed",
          },
          {
            label: "End",
            value: tour.endLocation || "To be confirmed",
          },
        ]}
      />

      {/* Sticky Package Navigation */}
      <PackageSectionNav />

      {/* Overview + Highlights */}
      <PackageOverview
        overview={tour.overview}
        highlights={tour.highlights}
        heading="About this tour"
      />

      {/* Day-by-Day Itinerary */}
      <PackageItinerary
        itinerary={tour.itinerary}
        durationLabel={tour.durationLabel}
      />

      {/* Included / Excluded */}
      <PackageIncludesExcludes
        includes={tour.includes}
        excludes={tour.excludes}
      />

      {/* Route Map */}
      <PackageMap
        mapImage={tour.mapImage}
        mapAlt={tour.mapAlt}
        startLocation={tour.startLocation}
        endLocation={tour.endLocation}
      />

      {/* Essential Information */}
      <PackageEssentialInfo
        heading="Essential travel information"
        description="Practical information to help you understand the journey, local conditions, and what to expect before you travel."
        items={[
          {
            label: "Accommodation",
            value: tour.generalInfo?.accommodation,
          },
          {
            label: "Meals",
            value: tour.generalInfo?.meals,
          },
          {
            label: "Transportation",
            value: tour.generalInfo?.transportation,
          },
          {
            label: "Guide & Support",
            value: tour.generalInfo?.guideAndStaff,
          },
          {
            label: "Fitness",
            value: tour.generalInfo?.fitness,
          },
          {
            label: "Activity Level",
            value: tour.generalInfo?.activityLevel,
          },
          {
            label: "Permits",
            value: tour.generalInfo?.permits,
          },
          {
            label: "Visa",
            value: tour.generalInfo?.visa,
          },
          {
            label: "Insurance",
            value: tour.generalInfo?.insurance,
          },
          {
            label: "Luggage",
            value: tour.generalInfo?.luggage,
          },
          {
            label: "Electricity",
            value: tour.generalInfo?.electricity,
          },
          {
            label: "Internet",
            value: tour.generalInfo?.internet,
          },
          {
            label: "Communication",
            value: tour.generalInfo?.communication,
          },
          {
            label: "Weather",
            value: tour.generalInfo?.weather,
          },
          {
            label: "Clothing",
            value: tour.generalInfo?.clothing,
          },
          {
            label: "Equipment",
            value: tour.generalInfo?.equipment,
          },
          {
            label: "Cultural Etiquette",
            value: tour.generalInfo?.culturalEtiquette,
          },
          {
            label: "Responsible Travel",
            value: tour.generalInfo?.responsibleTravel,
          },
        ]}
      />

      {/* Frequently Asked Questions */}
      <PackageFAQ faqs={tour.faqs ?? []} />

      {/* Conversion CTA */}
      <PackageInquiry
        packageName={tour.name}
        durationLabel={tour.durationLabel}
        difficulty={tour.activityLevel}
        country={tour.country}
      />

      {/* Related Tours */}
      <RelatedJourneys
        journeys={relatedTours}
        heading="More journeys to explore"
        description="Discover other cultural and scenic journeys that may suit your interests, schedule, and preferred travel style."
      />
    </>
  );
}