import type { MetadataRoute } from "next";

import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { treks } from "@/data/treks";
import { trekkingRegions } from "@/data/trekkingRegions";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pleasantholiday.com";

function createUrl(path: string) {
  return `${siteUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: createUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: createUrl("/treks"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: createUrl("/tours"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: createUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: createUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: createUrl("/faq"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: createUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: createUrl("/terms-and-conditions"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: createUrl("/booking-conditions"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const trekRoutes: MetadataRoute.Sitemap = treks.map((trek) => ({
    url: createUrl(`/treks/${trek.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: createUrl(`/tours/${tour.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: createUrl(`/destinations/${destination.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const trekkingRegionRoutes: MetadataRoute.Sitemap = trekkingRegions.map(
    (region) => ({
      url: createUrl(`/trekking-regions/${region.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...staticRoutes,
    ...trekRoutes,
    ...tourRoutes,
    ...destinationRoutes,
    ...trekkingRegionRoutes,
  ];
}