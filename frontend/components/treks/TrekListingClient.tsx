"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Trek } from "@/types/trek";

type TrekListingClientProps = {
  treks: Trek[];
};

const durationFilters = [
  {
    label: "All Durations",
    value: "all",
  },
  {
    label: "1–7 Days",
    value: "short",
  },
  {
    label: "8–14 Days",
    value: "medium",
  },
  {
    label: "15+ Days",
    value: "long",
  },
];

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function matchesDurationFilter(duration: number, filter: string) {
  if (filter === "short") {
    return duration >= 1 && duration <= 7;
  }

  if (filter === "medium") {
    return duration >= 8 && duration <= 14;
  }

  if (filter === "long") {
    return duration >= 15;
  }

  return true;
}

export default function TrekListingClient({ treks }: TrekListingClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const regions = useMemo(() => {
    return Array.from(new Set(treks.map((trek) => trek.region))).sort();
  }, [treks]);

  const difficulties = useMemo(() => {
    return Array.from(new Set(treks.map((trek) => trek.difficulty))).sort();
  }, [treks]);

  const filteredTreks = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return treks.filter((trek) => {
      const matchesSearch =
        !normalizedSearch ||
        trek.name.toLowerCase().includes(normalizedSearch) ||
        trek.shortDescription.toLowerCase().includes(normalizedSearch) ||
        trek.region.toLowerCase().includes(normalizedSearch);

      const matchesRegion =
        selectedRegion === "all" || trek.region === selectedRegion;

      const matchesDifficulty =
        selectedDifficulty === "all" ||
        trek.difficulty === selectedDifficulty;

      const matchesDuration = matchesDurationFilter(
        trek.duration,
        selectedDuration
      );

      return (
        matchesSearch &&
        matchesRegion &&
        matchesDifficulty &&
        matchesDuration
      );
    });
  }, [treks, searchTerm, selectedRegion, selectedDifficulty, selectedDuration]);

  function resetFilters() {
    setSearchTerm("");
    setSelectedRegion("all");
    setSelectedDifficulty("all");
    setSelectedDuration("all");
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-12 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] lg:items-end">
          <div>
            <label
              htmlFor="trekSearch"
              className="mb-2 block text-sm font-bold"
            >
              Search Trek
            </label>

            <input
              id="trekSearch"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search Everest, Annapurna, Langtang..."
              className="w-full border border-[#081827]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            />
          </div>

          <div>
            <label
              htmlFor="regionFilter"
              className="mb-2 block text-sm font-bold"
            >
              Region
            </label>

            <select
              id="regionFilter"
              value={selectedRegion}
              onChange={(event) => setSelectedRegion(event.target.value)}
              className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            >
              <option value="all">All Regions</option>

              {regions.map((region) => (
                <option key={region} value={region}>
                  {formatLabel(region)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="difficultyFilter"
              className="mb-2 block text-sm font-bold"
            >
              Difficulty
            </label>

            <select
              id="difficultyFilter"
              value={selectedDifficulty}
              onChange={(event) => setSelectedDifficulty(event.target.value)}
              className="w-full border border-[#081827]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C9A46A]"
            >
              <option value="all">All Difficulties</option>

              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
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
          Showing {filteredTreks.length} of {treks.length} treks.
        </p>
      </div>

      {/* Trek Grid */}
      {filteredTreks.length > 0 ? (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTreks.map((trek) => (
            <article
              key={trek.id}
              className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/treks/${trek.slug}`} className="block">
                <div className="overflow-hidden bg-[#081827]">
                  {trek.image ? (
                    <div
                      className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${trek.image})`,
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
                    {formatLabel(trek.region)} • {trek.durationLabel} •{" "}
                    {trek.difficulty}
                  </p>

                  <h3 className="text-2xl font-extrabold leading-tight">
                    {trek.name}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#081827]/60">
                    {trek.shortDescription}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#081827]/10 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#081827]/40">
                        Max Altitude
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {trek.maxAltitude}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-[#9C773E] transition group-hover:translate-x-1">
                      View Trek →
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
            No treks match your filters.
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#081827]/60">
            Try changing the region, difficulty, duration, or search keyword.
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