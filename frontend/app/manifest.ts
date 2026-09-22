import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pleasant Holiday",
    short_name: "Pleasant Holiday",
    description:
      "Trekking, tours and tailor-made Himalayan journeys across Nepal, Bhutan, Tibet and India.",

    start_url: "/",
    display: "standalone",
    background_color: "#F8F6F2",
    theme_color: "#081827",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}