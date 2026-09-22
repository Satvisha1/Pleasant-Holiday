export type TrekDifficulty =
  | "Easy"
  | "Easy-Moderate"
  | "Moderate"
  | "Moderate-Challenging"
  | "Challenging"
  | "Strenuous";

export interface TrekItineraryDay {
  day: number;
  title: string;
  description: string;

  altitude?: string;
  duration?: string;
  distance?: string;

  accommodation?: string;
  meals?: string[];

  startLocation?: string;
  endLocation?: string;

  activities?: string[];
}

export interface TrekAltitudeDetails {
  meters: number;
  feet?: number;
  location?: string;
}

export interface TrekGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface TrekFAQ {
  question: string;
  answer: string;
}

export interface TrekGeneralInfo {
  accommodation?: string;
  meals?: string;
  drinkingWater?: string;
  difficulty?: string;
  fitness?: string;
  altitude?: string;
  acclimatisation?: string;
  permits?: string;
  transportation?: string;
  luggage?: string;
  electricity?: string;
  internet?: string;
  communication?: string;
  insurance?: string;
  equipment?: string;
  weather?: string;
  guideAndStaff?: string;
}

export interface TrekSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Trek {
  id: number;

  // Core identity
  name: string;
  slug: string;
  country: string;
  region: string;
  type: "Trekking";

  // Core trek information
  duration: number;
  durationLabel: string;
  difficulty: TrekDifficulty;

  /*
   * Kept for compatibility with current cards and pages.
   * Example: "5,545m"
   */
  maxAltitude: string;

  /*
   * Richer altitude information for detailed package pages.
   * We will gradually migrate treks to this structure.
   */
  altitudeDetails?: TrekAltitudeDetails;

  // Card content
  shortDescription: string;
  image: string;
  featured?: boolean;

  // Main package content
  overview: string;
  highlights: string[];

  // Travel information
  bestSeason: string[];
  groupSize?: string;
  startLocation: string;
  endLocation: string;

  // Optional richer classification
  activities?: string[];
  accommodationTypes?: string[];
  mealPlan?: string[];

  // Full itinerary
  itinerary: TrekItineraryDay[];

  // Package cost information
  includes: string[];
  excludes: string[];

  // Media
  gallery?: TrekGalleryImage[];
  mapImage?: string;
  mapAlt?: string;
  routeSummary?: string;

  // Essential trip information
  generalInfo?: TrekGeneralInfo;

  // Frequently asked questions
  faqs?: TrekFAQ[];

  // Commercial information
  price?: number;
  currency?: string;
  priceLabel?: string;

  // Related journeys
  relatedTrekSlugs?: string[];

  // SEO
  seo?: TrekSEO;
}