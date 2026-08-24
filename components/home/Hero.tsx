export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081827] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero/everest-sunrise.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[#081827]/15" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#081827]/95 via-[#081827]/65 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/80 via-transparent to-[#081827]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-8">
        {/* Navbar clearance */}
        <div className="h-24 shrink-0 md:h-28" />

        {/* Main content */}
        <div className="flex flex-1 items-center pb-36 pt-8 md:pb-40">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.38em] text-[#C9A46A]">
              <span className="h-px w-8 bg-[#C9A46A]" />
              Pleasant Holiday
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              <span className="block">Explore the</span>
              <span className="block">Himalayas</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:mt-7 md:text-lg md:leading-8">
              Experience handcrafted trekking, tours, and cultural journeys
              across Nepal, Bhutan, Tibet, and India.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-treks"
                className="inline-flex items-center justify-center rounded-full bg-[#C9A46A] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-[#081827] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D8B779]"
              >
                Explore Treks
              </a>

              <a
                href="#plan-trip"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition duration-300 hover:border-white/70 hover:bg-white/10"
              >
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="absolute bottom-16 left-6 right-6 sm:left-8 sm:right-8 md:bottom-20">
          <div className="mx-auto max-w-7xl border-t border-white/20 pt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-[0.12em] text-[#C9A46A]">
                    ★★★★★
                  </span>

                  <span className="text-sm font-bold">
                    4.9
                  </span>
                </div>

                <div className="hidden h-7 w-px bg-white/20 sm:block" />

                <p className="hidden text-sm text-white/65 sm:block">
                  Trusted by travelers from{" "}
                  <span className="font-semibold text-white">
                    60+ countries
                  </span>
                </p>
              </div>

              <a
                href="#destinations"
                className="group hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 transition hover:text-white md:flex"
              >
                Scroll to explore

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#C9A46A] group-hover:bg-[#C9A46A] group-hover:text-[#081827]">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}