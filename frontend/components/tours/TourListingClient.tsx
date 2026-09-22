"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Tour } from "@/types/tour";

type TourListingClientProps = {
  tours: Tour[];
};

const durationFilters = [
  {
    label: "All Durations",
    value: "all",
  },
  {
    label: "1–4 Days",
    value: "short",
  },
  {
    label: "5–8 Days",
    value: "medium",
  },
  {
    label: "9+ Days",
    value: "long",
  },
];

function matchesDurationFilter(duration: number, filter: string) {
  if (filter === "short") {
    return duration >= 1 && duration <= 4;
  }

  if (filter === "medium") {
    return duration >= 5 && duration <= 8;
  }

  if (filter === "long") {
    return duration >= 9;
  }

  return true;
}

export default function TourListingClient({ tours }: TourListingClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const countries = useMemo(() => {
    return Array.from(new Set(tours.map((tour) => tour.country))).sort();
  }, [tours]);

  const categories = useMemo(() => {
    return Array.from(new Set(tours.map((tour) => tour.category))).sort();
  }, [tours]);

  const filteredTours = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return tours.filter((tour) => {
      const matchesSearch =
        !normalizedSearch ||
        tour.name.toLowerCase().includes(normalizedSearch) ||
        tour.shortDescription.toLowerCase().includes(normalizedSearch) ||
        tour.country.toLowerCase().includes(normalizedSearch) ||
        tour.category.toLowerCase().includes(normalizedSearch);

      const matchesCountry =
        selectedCountry === "all" || tour.country === selectedCountry;

      const matchesCategory =
        selectedCategory === "all" || tour.category === selectedCategory;

      const matchesDuration = matchesDurationFilter(
        tour.duration,
        selectedDuration
      );

      return (
        matchesSearch &&
        matchesCountry &&
        matchesCategory &&
        matchesDuration
      );
    });
  }, [tours, searchTerm, selectedCountry, selectedCategory, selectedDuration]);

  function resetFilters() {
    setSearchTerm("");
    setSelectedCountry("all");
    setSelectedCategory("all");
    setSelectedDuration("all");
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-12 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] lg:items-end">
          <div>
            <label
              htmlFor="tourSearch"
              className="mb-2 block text-sm font-bold"
            >
              Search Tour
            </label>

            <input
              id="tourSearch"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search Kathmandu, Bhutan, Tibet..."
              className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            />
          </div>

          <div>
            <label
              htmlFor="countryFilter"
              className="mb-2 block text-sm font-bold"
            >
              Country
            </label>

            <select
              id="countryFilter"
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
              className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            >
              <option value="all">All Countries</option>

              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="categoryFilter"
              className="mb-2 block text-sm font-bold"
            >
              Category
            </label>

            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            >
              <option value="all">All Categories</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="durationFilter"
              className="mb-2 block text-sm font-bold"
            >
              Duration
            </label>

            <select
              id="durationFilter"
              value={selectedDuration}
              onChange={(event) => setSelectedDuration(event.target.value)}
              className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            >
              {durationFilters.map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={resetFilters}
            className="rounded-full border border-[#081827]/20 px-6 py-3 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
          >
            Reset
          </button>
        </div>

        <p className="mt-5 text-sm leading-7 text-[#081827]/55">
          Showing {filteredTours.length} of {tours.length} tours.
        </p>
      </div>

      {/* Tour Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.map((tour) => (
            <article
              key={tour.id}
              className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                    {tour.country} • {tour.durationLabel}
                  </p>

                  <h3 className="text-2xl font-extrabold leading-tight">
                    {tour.name}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#081827]/60">
                    {tour.shortDescription}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#081827]/10 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#081827]/40">
                        Journey Type
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {tour.category}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-[#9C773E] transition group-hover:translate-x-1">
                      View Tour →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A46A]">
            No Results
          </p>

          <h3 className="mt-4 text-2xl font-extrabold">
            No tours match your filters.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#081827]/60">
            Try changing the country, category, duration, or search keyword.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 rounded-full bg-[#081827] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#10243D]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
}