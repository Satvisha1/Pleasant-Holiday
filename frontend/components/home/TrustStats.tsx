const stats = [
  {
    value: "20+",
    label: "Years of Experience",
  },
  {
    value: "100+",
    label: "Trekking & Tour Programs",
  },
  {
    value: "4",
    label: "Himalayan Destinations",
  },
  {
    value: "24/7",
    label: "Trip Support",
  },
];

export default function TrustStats() {
  return (
    <section className="bg-[#081827] px-8 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-extrabold text-[#C9A46A]">
              {stat.value}
            </h3>

            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}