import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: `Contact ${companyInfo.name}`,
  description:
    "Contact Pleasant Holiday to plan treks, tours, private trips, and tailor-made Himalayan journeys across Nepal, Bhutan, Tibet, and India.",
};

type ContactPageProps = {
  searchParams: Promise<{
    trip?: string;
    customize?: string;
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  const selectedTrip = params.trip ?? "";
  const isCustomizeRequest = params.customize === "true";

  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      {/* Page Hero */}
      <section className="bg-[#081827] px-6 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
            Plan Your Trip
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Start planning your Himalayan journey
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Tell us where you want to go, when you want to travel, and what kind
            of journey you prefer. Our team can help shape the right trekking or
            cultural experience.
          </p>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section className="px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Contact information */}
          <aside>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Contact {companyInfo.name}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Let&apos;s design the right journey.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#081827]/65">
              Use this form for trek enquiries, tour requests, private journeys,
              custom itineraries, group travel, and general questions.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#081827]/10 pt-8">
              {/* Email */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Email
                </p>

                <p className="mt-2 text-sm leading-7 text-[#081827]/65">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="transition hover:text-[#9C773E]"
                  >
                    {companyInfo.email}
                  </a>
                </p>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Phone / WhatsApp
                </p>

                <div className="mt-2 space-y-1 text-sm leading-7 text-[#081827]/65">
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:${companyInfo.phone.replaceAll(" ", "")}`}
                      className="transition hover:text-[#9C773E]"
                    >
                      {companyInfo.phone}
                    </a>
                  </p>

                  <p>
                    WhatsApp:{" "}
                    <a
                      href={`tel:${companyInfo.whatsapp.replaceAll(" ", "")}`}
                      className="transition hover:text-[#9C773E]"
                    >
                      {companyInfo.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Address
                </p>

                <p className="mt-2 text-sm leading-7 text-[#081827]/65">
                  {companyInfo.address}
                </p>

                <p className="mt-1 text-sm leading-7 text-[#081827]/55">
                  {companyInfo.mapLandmark}
                </p>

                {companyInfo.googleMapUrl && (
                  <a
                    href={companyInfo.googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-bold text-[#9C773E] transition hover:text-[#081827]"
                  >
                    View on Google Maps →
                  </a>
                )}
              </div>

              {/* Guide policy */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Guide Details
                </p>

                <p className="mt-2 text-sm leading-7 text-[#081827]/65">
                  {companyInfo.guidePolicy}
                </p>
              </div>

              {/* Emergency */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Emergency Contact
                </p>

                <p className="mt-2 text-sm leading-7 text-[#081827]/65">
                  {companyInfo.emergencyContact}
                </p>
              </div>

              {/* Response */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A46A]">
                  Inquiry Status
                </p>

                <p className="mt-2 text-sm leading-7 text-[#081827]/65">
                  The form currently submits to the project API route. Email
                  delivery will be connected later when the final email/domain
                  setup is ready.
                </p>
              </div>
            </div>
          </aside>

          {/* Inquiry form */}
          <div className="bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <ContactForm
              selectedTrip={selectedTrip}
              isCustomizeRequest={isCustomizeRequest}
            />
          </div>
        </div>
      </section>
    </main>
  );
}