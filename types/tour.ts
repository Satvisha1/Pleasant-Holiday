export type TourActivityLevel =
  | "Easy"
  | "Easy-Moderate"
  | "Moderate"
  | "Moderate-Challenging"
  | "Challenging";

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;

  duration?: string;
  distance?: string;

  accommodation?: string;
  meals?: string[];

  startLocation?: string;
  endLocation?: string;

  activities?: string[];
}

export interface TourGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface TourGeneralInfo {
  accommodation?: string;
  meals?: string;
  transportation?: string;
  guideAndStaff?: string;

  fitness?: string;
  activityLevel?: string;

  permits?: string;
  visa?: string;
  insurance?: string;

  luggage?: string;
  electricity?: string;
  internet?: string;
  communication?: string;

  weather?: string;
  clothing?: string;
  equipment?: string;

  culturalEtiquette?: string;
  responsibleTravel?: string;
}

export interface TourSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Tour {
  id: number;

  // Core identity
  name: string;
  slug: string;
  country: string;
  category: string;
  type: "Tour";

  // Core tour information
  duration: number;
  durationLabel: string;

  activityLevel?: TourActivityLevel;

  // Card content
  shortDescription: string;
  image: string;
  featured?: boolean;

  // Main package content
  overview: string;
  highlights: string[];

  // Travel information
  bestSeason?: string[];
  groupSize?: string;

  startLocation: string;
  endLocation: string;

  // Optional richer classification
  activities?: string[];
  accommodationTypes?: string[];
  mealPlan?: string[];
  transportationTypes?: string[];

  // Full itinerary
  itinerary: TourItineraryDay[];

  // Package cost information
  includes: string[];
  excludes: string[];

  // Media
  gallery?: TourGalleryImage[];
  mapImage?: string;
  mapAlt?: string;

  // Essential travel information
  generalInfo?: TourGeneralInfo;

  // Frequently asked questions
  faqs?: TourFAQ[];

  // Commercial information
  price?: number;
  currency?: string;
  priceLabel?: string;

  // Related journeys
  relatedTourSlugs?: string[];

  // SEO
  seo?: TourSEO;
}