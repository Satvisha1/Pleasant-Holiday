type PackageHeroProps = {
  name: string;
  image: string;
  country: string;
  category: string;
  shortDescription: string;
};

export default function PackageHero({
  name,
  image,
  country,
  category,
  shortDescription,
}: PackageHeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#081827] text-white">
      {/* Background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#081827]/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#081827]/90 via-[#081827]/55 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/95 via-transparent to-[#081827]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-14 pt-32 sm:px-8 md:pb-18">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C9A46A] sm:text-sm">
            <span className="h-px w-8 bg-[#C9A46A]" />

            {country} • {category}
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
            {name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
            {shortDescription}
          </p>
        </div>
      </div>
    </section>
  );
}