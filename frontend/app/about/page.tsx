import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `About ${companyInfo.name}`,
  description:
    "Learn about Pleasant Holiday, a Himalayan travel company planning treks, tours, private trips, and tailor-made journeys across Nepal, Bhutan, Tibet, and India.",
};

const values = [
  {
    title: "Careful Journey Design",
    description:
      "Journeys should be planned with attention to pacing, acclimatisation, comfort, local conditions, and the experience travelers actually want.",
  },
  {
    title: "Local Knowledge",
    description:
      "Himalayan travel depends on practical regional knowledge, route awareness, seasonal judgement, and clear communication before and during the trip.",
  },
  {
    title: "Responsible Travel",
    description:
      "Travel should respect local communities, natural environments, cultural heritage, and the people who make each journey possible.",
  },
];

const journeyTypes = [
  "Trekking journeys",
  "Cultural tours",
  "Private trips",
  "Family journeys",
  "Tailor-made itineraries",
  "Himalayan travel planning",
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            About {companyInfo.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Thoughtful Himalayan journeys for travelers who want more than a
            package.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            {companyInfo.name} focuses on trekking, cultural travel, and
            tailor-made journeys across Nepal, Bhutan, Tibet, and India.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Built around better planning, clearer guidance, and meaningful
              travel.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#081827]/65 md:text-lg md:leading-9">
            <p>
              A strong Himalayan travel experience is not only about reaching a
              destination. It depends on the route, timing, guide support,
              acclimatisation, logistics, communication, and the level of care
              given to each traveler.
            </p>

            <p>
              {companyInfo.name} plans curated treks, cultural tours, private
              journeys, and custom travel experiences. The website is designed
              to help travelers explore destinations, compare journeys,
              understand practical details, and send focused trip enquiries.
            </p>

            <p>
              Guide and support arrangements vary depending on the destination,
              route, season, and type of journey. Final guide details are
              provided after booking confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              What Matters
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Travel should feel considered, not mass-produced.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="border-t border-[#081827]/15 pt-6"
              >
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-2xl font-extrabold">{value.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#081827]/60">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey types */}
      <section className="bg-[#081827] px-6 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              What We Plan
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Journeys across the Himalayas and beyond.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
              The travel catalogue will continue to grow as more trek and tour
              data is added to the central system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {journeyTypes.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Company Information
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Clear contact and travel support details.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#081827]/65 md:text-lg">
              Travelers can contact {companyInfo.name} directly for trip
              planning, custom itineraries, booking discussions, and emergency
              support during confirmed travel arrangements.
            </p>
          </div>

          <div className="bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A46A]">
              Contact Details
            </p>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#081827]/65">
              <div>
                <p className="font-bold text-[#081827]">Company Name</p>
                <p>{companyInfo.legalName || companyInfo.name}</p>
              </div>

              {companyInfo.registrationNumber && (
                <div>
                  <p className="font-bold text-[#081827]">
                    Registration Number
                  </p>
                  <p>{companyInfo.registrationNumber}</p>
                </div>
              )}

              <div>
                <p className="font-bold text-[#081827]">Email</p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition hover:text-[#9C773E]"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div>
                <p className="font-bold text-[#081827]">Phone</p>
                <a
                  href={`tel:${companyInfo.phone.replaceAll(" ", "")}`}
                  className="transition hover:text-[#9C773E]"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div>
                <p className="font-bold text-[#081827]">WhatsApp</p>
                <a
                  href={`tel:${companyInfo.whatsapp.replaceAll(" ", "")}`}
                  className="transition hover:text-[#9C773E]"
                >
                  {companyInfo.whatsapp}
                </a>
              </div>

              <div>
                <p className="font-bold text-[#081827]">Address</p>
                <p>{companyInfo.address}</p>
                <p className="text-[#081827]/55">{companyInfo.mapLandmark}</p>

                {companyInfo.googleMapUrl && (
                  <a
                    href={companyInfo.googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex font-bold text-[#9C773E] transition hover:text-[#081827]"
                  >
                    View on Google Maps →
                  </a>
                )}
              </div>

              <div>
                <p className="font-bold text-[#081827]">Guide Details</p>
                <p>{companyInfo.guidePolicy}</p>
              </div>

              <div>
                <p className="font-bold text-[#081827]">Emergency Contact</p>
                <p>{companyInfo.emergencyContact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible note */}
      <section className="bg-white px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Transparency
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Real information builds trust.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#081827]/65 md:text-lg md:leading-9">
            <p>
              Travel information should be accurate, practical, and updated when
              routes, seasons, services, permits, or operational conditions
              change.
            </p>

            <p>
              Additional verified trust content can be added later, including
              guide profiles, team information, real traveler reviews,
              responsible travel commitments, and safety procedures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#081827]/55">
              Start Planning
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to discuss a journey?
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>
    </main>
  );
}