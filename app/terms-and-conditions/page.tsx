import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${companyInfo.name}`,
  description:
    "Read the general terms and conditions for using the Pleasant Holiday website and reviewing travel information.",
};

const terms = [
  {
    title: "Website Use",
    content:
      "The website is provided to help travelers explore trekking, tour, and custom journey options. Website content may be updated as routes, services, seasons, operational details, and company information change.",
  },
  {
    title: "Trip Information",
    content:
      "Itinerary, duration, altitude, season, difficulty, route, accommodation, and service information are provided for planning guidance. Final details should be confirmed directly with the company before booking.",
  },
  {
    title: "Prices and Availability",
    content:
      "Published prices, when added, may depend on group size, travel season, accommodation category, permits, transport, guide arrangements, and service level. Availability must be confirmed before booking.",
  },
  {
    title: "Traveler Responsibility",
    content:
      "Travelers are responsible for providing accurate personal details, understanding physical requirements, carrying suitable travel documents, arranging appropriate insurance, and following safety guidance during the journey.",
  },
  {
    title: "Third-Party Services",
    content:
      "Some travel arrangements may involve airlines, hotels, transport providers, guides, permit offices, and local service partners. Their own terms, conditions, delays, and operational rules may also apply.",
  },
  {
    title: "Changes to Website Content",
    content:
      "The company may update website content, itineraries, descriptions, images, policies, and service information when required.",
  },
  {
    title: "Guide and Support Staff",
    content:
      "Guide and support staff details depend on the destination, route, season, and type of journey. Final guide details are provided after booking confirmation.",
  },
  {
    title: "Emergency Support",
    content:
      "Emergency support should be requested through the contact details provided by the company. Travelers may contact the company by WhatsApp or direct phone call during confirmed travel arrangements.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Terms & Conditions
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Basic terms for using the {companyInfo.name} website.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            These terms explain the general conditions for using this website
            and reviewing travel information provided by {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Terms content */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <aside>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Terms Notice
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Confirm before booking
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#081827]/65">
              <p>
                These terms should be reviewed before public launch to ensure
                they match the final company registration, payment process,
                cancellation policy, refund policy, and legal requirements.
              </p>

              <p>
                Company: {companyInfo.legalName || companyInfo.name}
              </p>

              {companyInfo.registrationNumber && (
                <p>Registration Number: {companyInfo.registrationNumber}</p>
              )}

              <p>
                Contact:{" "}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-bold text-[#9C773E] transition hover:text-[#081827]"
                >
                  {companyInfo.email}
                </a>
              </p>

              <p>
                Address: {companyInfo.address}
                {companyInfo.mapLandmark
                  ? `, ${companyInfo.mapLandmark}`
                  : ""}
              </p>
            </div>
          </aside>

          <div className="space-y-5">
            {terms.map((term) => (
              <article
                key={term.title}
                className="bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-xl font-extrabold">{term.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#081827]/65">
                  {term.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#081827]/55">
              Need Clarification?
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Ask before booking or confirming a journey.
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}