import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${companyInfo.name}`,
  description:
    "Read how Pleasant Holiday handles inquiry, contact, and travel-planning information submitted through the website.",
};

const sections = [
  {
    title: "Information We May Collect",
    content:
      "When you send an inquiry, we may collect your name, email address, phone or WhatsApp number, country, preferred trip, travel dates, number of travelers, travel style, and message details.",
  },
  {
    title: "How We Use Your Information",
    content:
      "The information submitted through the website is used to respond to trip inquiries, prepare travel suggestions, discuss custom journeys, manage communication, and support booking-related discussions.",
  },
  {
    title: "Inquiry Form Data",
    content:
      "The inquiry form currently submits information through the website API route. Email delivery, database storage, or CRM integration may be added later when the final business process is confirmed.",
  },
  {
    title: "Data Sharing",
    content:
      "Personal inquiry details are not intended to be sold or shared for unrelated marketing. Some travel-related information may need to be shared with hotels, guides, transport providers, permit offices, or local service partners when required for confirmed trip arrangements.",
  },
  {
    title: "Data Security",
    content:
      "Reasonable technical and organizational measures should be used to protect inquiry and booking-related data. Final hosting, email, storage, access control, and backup arrangements should be reviewed before production launch.",
  },
  {
    title: "Traveler Communication",
    content:
      "Travelers may be contacted by email, phone, or WhatsApp using the details submitted through the website or provided during trip planning.",
  },
  {
    title: "Updates to This Policy",
    content:
      "This privacy policy may be updated when the website, inquiry process, booking process, data storage method, email handling, analytics, or legal requirements change.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Privacy Policy
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            How inquiry and travel-planning information is handled.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            This policy explains how {companyInfo.name} may collect, use, and
            handle information submitted through the website.
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <aside>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Policy Notice
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Privacy and inquiry data
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#081827]/65">
              <p>
                This page should be reviewed before public launch to ensure it
                matches the final booking process, email setup, hosting
                platform, analytics tools, and legal requirements.
              </p>

              <p>
                For privacy-related questions, contact {companyInfo.name} at{" "}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-bold text-[#9C773E] transition hover:text-[#081827]"
                >
                  {companyInfo.email}
                </a>
                .
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
            {sections.map((section) => (
              <article
                key={section.title}
                className="bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-xl font-extrabold">{section.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#081827]/65">
                  {section.content}
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
              Questions?
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Contact {companyInfo.name} about privacy or inquiry data.
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