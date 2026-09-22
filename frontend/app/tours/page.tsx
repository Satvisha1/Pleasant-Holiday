import type { Metadata } from "next";

import TourListingClient from "@/components/tours/TourListingClient";
import { companyInfo } from "@/data/company";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: `Tours | ${companyInfo.name}`,
  description:
    "Explore cultural, scenic, heritage, and tailor-made tours across Nepal, Bhutan, Tibet, and India with Pleasant Holiday.",
};

export default function ToursPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Page Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Cultural & Scenic Tours
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Discover journeys beyond the mountains
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Browse cultural, heritage, overland, and scenic journeys across
            Nepal, Bhutan, Tibet, and India.
          </p>
        </div>
      </section>

      {/* Tour Listing */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                All Tours
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Explore cultural journeys
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#081827]/60">
              {tours.length} tour journeys currently available in the{" "}
              {companyInfo.name} catalogue.
            </p>
          </div>

          <TourListingClient tours={tours} />
        </div>
      </section>
    </main>
  );
}