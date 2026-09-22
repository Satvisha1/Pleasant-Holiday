import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Booking Conditions | ${companyInfo.name}`,
  description:
    "Read the booking conditions for inquiries, confirmations, payments, changes, insurance, and travel responsibilities with Pleasant Holiday.",
};

const bookingConditions = [
  {
    title: "Booking Inquiry",
    content:
      "Submitting an inquiry through the website does not automatically confirm a booking. Trip details, availability, service level, price, and operational feasibility must be reviewed and confirmed.",
  },
  {
    title: "Confirmation",
    content:
      "A booking should only be considered confirmed after the traveler receives written confirmation and completes the required payment process defined by the company.",
  },
  {
    title: "Payments",
    content:
      "Deposit, balance payment, payment method, currency, bank charges, and due dates should be clearly confirmed before the traveler makes a booking payment.",
  },
  {
    title: "Changes by Traveler",
    content:
      "Requested changes to travel dates, itinerary, accommodation, group size, or services may affect price and availability. Any change should be requested and confirmed in writing.",
  },
  {
    title: "Changes Due to Local Conditions",
    content:
      "Mountain weather, flight delays, road conditions, safety concerns, permit rules, local events, health issues, or other operational factors may require itinerary adjustments.",
  },
  {
    title: "Insurance",
    content:
      "Travelers should arrange suitable travel insurance for trekking, medical treatment, emergency evacuation, cancellation, delays, baggage, and personal risk where applicable.",
  },
  {
    title: "Guide and Support Staff",
    content:
      "Guide and support staff details depend on the destination, route, season, and type of journey. Final guide details are provided after booking confirmation.",
  },
  {
    title: "Emergency Contact",
    content:
      "For emergency support, travelers should contact the company through the provided WhatsApp number or direct phone call during confirmed travel arrangements.",
  },
  {
    title: "Cancellation and Refunds",
    content:
      "Cancellation charges and refund rules should be clearly defined before final launch and before payment confirmation. Final cancellation terms must match the actual company booking policy.",
  },
];

export default function BookingConditionsPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Booking Conditions
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Important booking points for trekking and tour planning.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            These booking conditions explain how inquiries, confirmations,
            changes, and travel responsibilities should be understood when
            planning a journey with {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Booking content */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <aside>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Booking Notice
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Do not treat inquiry as confirmation.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[#081827]/65">
              <p>
                The website separates general inquiries from actual bookings.
                Final confirmation should happen only after written agreement,
                availability check, and payment process.
              </p>

              <p>{companyInfo.guidePolicy}</p>

              <p>{companyInfo.emergencyContact}</p>

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
                Phone:{" "}
                <a
                  href={`tel:${companyInfo.phone.replaceAll(" ", "")}`}
                  className="font-bold text-[#9C773E] transition hover:text-[#081827]"
                >
                  {companyInfo.phone}
                </a>
              </p>

              <p>
                WhatsApp:{" "}
                <a
                  href={`tel:${companyInfo.whatsapp.replaceAll(" ", "")}`}
                  className="font-bold text-[#9C773E] transition hover:text-[#081827]"
                >
                  {companyInfo.whatsapp}
                </a>
              </p>
            </div>
          </aside>

          <div className="space-y-5">
            {bookingConditions.map((condition) => (
              <article
                key={condition.title}
                className="bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-xl font-extrabold">
                  {condition.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#081827]/65">
                  {condition.content}
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
              Before Booking
            </p>

            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Confirm the details directly with the team.
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
          >
            Send Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}