const reasons = [
  {
    title: "Local Himalayan Experts",
    description:
      "Trips are planned and operated by people who understand the region, trails, culture, and logistics.",
  },
  {
    title: "Tailor-Made Journeys",
    description:
      "Itineraries can be adjusted based on travel dates, comfort level, duration, and personal interests.",
  },
  {
    title: "Guided With Care",
    description:
      "From arrival to departure, travelers are supported with guides, transfers, permits, and trip coordination.",
  },
  {
    title: "Authentic Experiences",
    description:
      "The focus is not only on destinations, but also on local culture, people, landscapes, and meaningful travel.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F8F8F5] px-6 py-24 text-[#0A1628]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A46A]">
            Why Pleasant Holiday
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Designed for travelers who want more than a package.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <p className="mb-8 text-sm font-bold text-[#C9A46A]">
                0{index + 1}
              </p>

              <h3 className="mb-4 text-xl font-bold">{reason.title}</h3>

              <p className="text-sm leading-6 text-[#0A1628]/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}