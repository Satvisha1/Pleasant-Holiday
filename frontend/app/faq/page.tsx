import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `FAQ | ${companyInfo.name}`,
  description:
    "Find answers to common questions about Himalayan trek planning, tours, private journeys, customization, bookings, and travel preparation.",
};
const faqGroups = [
  {
    title: "Trip Planning",
    faqs: [
      {
        question: "How do I choose the right trek or tour?",
        answer:
          "The right journey depends on your available time, fitness level, preferred comfort, travel season, and whether you want trekking, culture, scenery, or a private custom route. Use the contact form if you are unsure.",
      },
      {
        question: "Can Pleasant Holiday customize a trip?",
        answer:
          "Yes. The website is structured for private and tailor-made journey requests. Travelers can send their preferred destination, date, group size, travel style, and special requirements through the inquiry form.",
      },
      {
        question: "How early should I plan a Himalayan trip?",
        answer:
          "For popular trekking seasons, planning several months in advance is better. This gives more time to arrange permits, flights, accommodation, guides, and contingency days.",
      },
    ],
  },
  {
    title: "Trekking",
    faqs: [
      {
        question: "Do I need previous trekking experience?",
        answer:
          "Some short and moderate treks can be suitable for beginners with reasonable fitness. Higher-altitude or remote treks need better preparation, endurance, and awareness of altitude conditions.",
      },
      {
        question: "What is altitude sickness?",
        answer:
          "Altitude sickness can happen when the body does not adjust well to higher elevations. Good pacing, acclimatisation days, hydration, and careful monitoring are important on high-altitude routes.",
      },
      {
        question: "Which seasons are best for trekking in Nepal?",
        answer:
          "The main trekking seasons are usually spring and autumn. Weather, visibility, trail conditions, and route accessibility can vary by region and year.",
      },
    ],
  },
  {
    title: "Bookings & Inquiries",
    faqs: [
      {
        question: "Is the inquiry form connected to email?",
        answer:
          "The inquiry form currently submits to the project API route. Email delivery or lead storage should be connected in the next development step.",
      },
      {
        question: "Can I request a private trip?",
        answer:
          "Yes. Use the contact page and select Private Journey Request or Customize This Trip. Add your preferred destination, dates, number of travelers, and travel style.",
      },
      {
        question: "Are prices shown on the website?",
        answer:
          "Prices are not shown yet because package inclusions, hotel category, guide/porter arrangements, group size, season, and service level need to be confirmed before publishing final rates.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Frequently Asked Questions
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Useful answers before planning your journey.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Find basic guidance about trip planning, trekking preparation,
            customization, inquiries, and Himalayan travel.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <section key={group.title}>
                <div className="mb-8 border-b border-[#081827]/10 pb-5">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
                    {group.title}
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    {group.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {group.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-white p-6 shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                        <span className="text-lg font-extrabold">
                          {faq.question}
                        </span>

                        <span className="shrink-0 text-2xl font-light text-[#C9A46A] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#081827]/65">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C9A46A] px-6 py-16 text-[#081827] sm:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#081827]/55">
              Need Specific Advice?
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Send your trip question directly.
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