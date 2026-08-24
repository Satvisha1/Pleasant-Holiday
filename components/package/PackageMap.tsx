type PackageMapProps = {
  mapImage?: string;
  mapAlt?: string;

  startLocation?: string;
  endLocation?: string;

  routeSummary?: string;
};

export default function PackageMap({
  mapImage,
  mapAlt = "Journey route map",
  startLocation,
  endLocation,
  routeSummary,
}: PackageMapProps) {
  return (
    <section
      id="map"
      className="scroll-mt-40 bg-white px-6 py-20 text-[#081827] sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Route Overview
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Follow the journey
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#081827]/60">
            {routeSummary ||
              "Explore the route, key locations, and overall direction of the journey."}
          </p>
        </div>

        {/* Map area */}
        <div className="mt-12 overflow-hidden border border-[#081827]/10 bg-[#F8F6F2] md:mt-16">
          {mapImage ? (
            <div className="relative">
              <img
                src={mapImage}
                alt={mapAlt}
                className="h-auto w-full object-cover"
              />

              {/* Subtle map overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#081827]/80 to-transparent px-6 pb-6 pt-16 sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Journey Route
                </p>

                {(startLocation || endLocation) && (
                  <p className="mt-2 text-sm font-semibold text-white sm:text-base">
                    {startLocation || "Start"}
                    <span className="mx-3 text-[#C9A46A]">→</span>
                    {endLocation || "End"}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="grid min-h-[360px] md:grid-cols-[1fr_0.65fr]">
              {/* Intentional map placeholder */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#EDE9E1] px-8 py-16">
                {/* Decorative route lines */}
                <div
                  aria-hidden="true"
                  className="absolute left-[15%] top-[25%] h-3 w-3 rounded-full bg-[#C9A46A]"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-[24%] right-[18%] h-3 w-3 rounded-full bg-[#081827]"
                />

                <div
                  aria-hidden="true"
                  className="absolute left-[16%] top-[27%] h-px w-[68%] origin-left rotate-[18deg] bg-[#081827]/20"
                />

                <div className="relative z-10 max-w-sm text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#081827]/15 bg-white text-xl text-[#C9A46A]">
                    ◇
                  </span>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#081827]/45">
                    Route Map
                  </p>

                  <p className="mt-3 text-base leading-7 text-[#081827]/60">
                    A detailed journey map will be available here.
                  </p>
                </div>
              </div>

              {/* Route information */}
              <div className="flex flex-col justify-center border-t border-[#081827]/10 bg-white px-7 py-10 sm:px-10 md:border-l md:border-t-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A46A]">
                  Journey Direction
                </p>

                <div className="mt-8">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-[#C9A46A]" />
                      <span className="my-2 h-16 w-px bg-[#081827]/15" />
                      <span className="h-3 w-3 rounded-full bg-[#081827]" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#081827]/40">
                          Start
                        </p>

                        <p className="mt-1 font-bold text-[#081827]">
                          {startLocation || "To be confirmed"}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#081827]/40">
                          End
                        </p>

                        <p className="mt-1 font-bold text-[#081827]">
                          {endLocation || "To be confirmed"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {routeSummary && (
                  <p className="mt-8 border-t border-[#081827]/10 pt-6 text-sm leading-7 text-[#081827]/60">
                    {routeSummary}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}