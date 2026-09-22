type PackageItineraryDay = {
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
};

type PackageItineraryProps = {
  itinerary: PackageItineraryDay[];
  durationLabel?: string;
};

export default function PackageItinerary({
  itinerary,
  durationLabel,
}: PackageItineraryProps) {
  return (
    <section
      id="itinerary"
      className="scroll-mt-40 bg-[#081827] px-6 py-20 text-white sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              The Journey
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Day-by-day itinerary
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
              Follow the journey day by day, from arrival and acclimatisation
              to the main highlights of the route.
            </p>
          </div>

          {durationLabel && (
            <div className="w-fit border-l-2 border-[#C9A46A] pl-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                Journey Length
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {durationLabel}
              </p>
            </div>
          )}
        </div>

        {/* Itinerary content */}
        {itinerary.length > 0 ? (
          <div className="mt-12 border-t border-white/15 md:mt-16">
            {itinerary.map((day, index) => (
              <details
                key={day.day}
                open={index === 0}
                className="group border-b border-white/15"
              >
                <summary className="flex cursor-pointer list-none items-start gap-5 py-7 transition hover:bg-white/[0.025] sm:gap-7 md:items-center md:py-8 [&::-webkit-details-marker]:hidden">
                  {/* Day number */}
                  <div className="shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A46A]/50 text-xs font-bold text-[#C9A46A] sm:h-14 sm:w-14">
                      {String(day.day).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Day title */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A46A] sm:text-xs">
                      Day {day.day}
                    </p>

                    <h3 className="text-lg font-bold leading-7 text-white sm:text-xl md:text-2xl">
                      {day.title}
                    </h3>

                    {/* Compact route preview */}
                    {(day.startLocation || day.endLocation) && (
                      <p className="mt-2 text-sm text-white/45">
                        {day.startLocation}
                        {day.startLocation && day.endLocation && " → "}
                        {day.endLocation}
                      </p>
                    )}
                  </div>

                  {/* Expand indicator */}
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl font-light text-white/65 transition duration-300 group-open:rotate-45 group-open:border-[#C9A46A] group-open:text-[#C9A46A] md:mt-0"
                  >
                    +
                  </span>
                </summary>

                {/* Expanded content */}
                <div className="pb-8 pl-[4.25rem] sm:pl-[5.25rem] md:pb-10">
                  <div className="max-w-4xl">
                    <p className="text-base leading-8 text-white/65">
                      {day.description}
                    </p>

                    {/* Day metadata */}
                    {(day.altitude ||
                      day.duration ||
                      day.distance ||
                      day.accommodation ||
                      (day.meals && day.meals.length > 0)) && (
                      <div className="mt-7 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                        {day.duration && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                              Duration
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/75">
                              {day.duration}
                            </p>
                          </div>
                        )}

                        {day.distance && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                              Distance
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/75">
                              {day.distance}
                            </p>
                          </div>
                        )}

                        {day.altitude && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                              Altitude
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/75">
                              {day.altitude}
                            </p>
                          </div>
                        )}

                        {day.accommodation && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                              Accommodation
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/75">
                              {day.accommodation}
                            </p>
                          </div>
                        )}

                        {day.meals && day.meals.length > 0 && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
                              Meals
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/75">
                              {day.meals.join(", ")}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="mt-12 border-t border-white/15 pt-10">
            <p className="max-w-2xl text-base leading-8 text-white/50">
              The complete day-by-day itinerary will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}