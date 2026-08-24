export default function AdventureFinder() {
  return (
    <section className="relative z-20 -mt-20 px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Find Your Perfect Adventure
          </p>

          <h2 className="text-3xl font-extrabold text-[#081827]">
            Start planning your Himalayan journey
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          <select className="rounded-2xl border border-[#E7E2D8] px-5 py-4 text-[#081827] outline-none">
            <option>Nepal</option>
            <option>Bhutan</option>
            <option>Tibet</option>
            <option>India</option>
          </select>

          <select className="rounded-2xl border border-[#E7E2D8] px-5 py-4 text-[#081827] outline-none">
            <option>Trekking</option>
            <option>Tours</option>
            <option>Peak Climbing</option>
            <option>Helicopter Tours</option>
          </select>

          <select className="rounded-2xl border border-[#E7E2D8] px-5 py-4 text-[#081827] outline-none">
            <option>1-5 Days</option>
            <option>6-10 Days</option>
            <option>11-15 Days</option>
            <option>16-20 Days</option>
            <option>20+ Days</option>
          </select>

          <select className="rounded-2xl border border-[#E7E2D8] px-5 py-4 text-[#081827] outline-none">
            <option>Easy</option>
            <option>Moderate</option>
            <option>Challenging</option>
          </select>

          <button className="rounded-2xl bg-[#C9A46A] px-5 py-4 font-bold text-[#081827]">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}