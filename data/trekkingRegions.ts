export interface TrekkingRegion {
  id: number;
  name: string;
  slug: string;
  image: string;
  trekCountLabel: string;
  description: string;
  country: string;
  featured: boolean;
}

export const trekkingRegions: TrekkingRegion[] = [
  {
    id: 1,
    name: "Everest Region",
    slug: "everest",
    image: "/images/regions/everest-region.jpg",
    trekCountLabel: "12+ Treks",
    description:
      "Home to Everest Base Camp, Namche Bazaar, Sherpa culture, and dramatic high-altitude trails.",
    country: "Nepal",
    featured: true,
  },
  {
    id: 2,
    name: "Annapurna Region",
    slug: "annapurna",
    image: "/images/regions/annapurna-region.jpg",
    trekCountLabel: "15+ Treks",
    description:
      "Known for Annapurna Base Camp, Poon Hill, Thorong La Pass, and diverse landscapes.",
    country: "Nepal",
    featured: true,
  },
  {
    id: 3,
    name: "Langtang Region",
    slug: "langtang",
    image: "/images/regions/langtang-region.jpg",
    trekCountLabel: "6+ Treks",
    description:
      "Accessible Himalayan trekking close to Kathmandu with Tamang culture and mountain valleys.",
    country: "Nepal",
    featured: true,
  },
  {
    id: 4,
    name: "Manaslu Region",
    slug: "manaslu",
    image: "/images/regions/manaslu-region.jpg",
    trekCountLabel: "5+ Treks",
    description:
      "Remote trails, Tibetan-influenced villages, and the challenging Larkya La Pass.",
    country: "Nepal",
    featured: true,
  },
  {
    id: 5,
    name: "Mustang Region",
    slug: "mustang",
    image: "/images/regions/mustang-region.jpg",
    trekCountLabel: "4+ Treks",
    description:
      "A dramatic desert-like Himalayan landscape shaped by ancient culture and hidden valleys.",
    country: "Nepal",
    featured: true,
  },
];