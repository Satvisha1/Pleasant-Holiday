import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      <section className="flex min-h-[80vh] items-center px-6 py-32 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            404 — Page Not Found
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            This journey page could not be found.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#081827]/65 md:text-lg">
            The page may have been moved, renamed, or removed. You can return
            to the main catalogue or contact Pleasant Holiday for help planning
            your journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
            >
              Back to Home
            </Link>

            <Link
              href="/treks"
              className="rounded-full border border-[#081827]/20 px-7 py-3.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
            >
              Explore Treks
            </Link>

            <Link
              href="/tours"
              className="rounded-full border border-[#081827]/20 px-7 py-3.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#081827]/20 px-7 py-3.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}