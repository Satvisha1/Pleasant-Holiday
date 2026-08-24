export interface Destination {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  highlight: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Nepal",
    slug: "nepal",
    image: "/images/destinations/nepal.jpg",
    description:
      "Trekking, culture, mountains, and Himalayan journeys.",
    highlight: "Main Destination",
    featured: true,
  },
  {
    id: 2,
    name: "Bhutan",
    slug: "bhutan",
    image: "/images/destinations/bhutan.jpg",
    description:
      "Peaceful cultural tours and Himalayan landscapes.",
    highlight: "Cultural Journeys",
    featured: true,
  },
  {
    id: 3,
    name: "Tibet",
    slug: "tibet",
    image: "/images/destinations/tibet.jpg",
    description:
      "High plateau adventures and spiritual travel routes.",
    highlight: "Roof of the World",
    featured: true,
  },
  {
    id: 4,
    name: "India",
    slug: "india",
    image: "/images/destinations/india.jpg",
    description:
      "Himalayan trails, heritage tours, and nature escapes.",
    highlight: "Diverse Experiences",
    featured: true,
  },
];