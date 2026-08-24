"use client";

import Link from "next/link";
import { useEffect } from "react";

import { companyInfo } from "@/data/company";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="bg-[#F8F6F2] text-[#081827]">
      <section className="flex min-h-[80vh] items-center px-6 py-32 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Something Went Wrong
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              We could not load this page properly.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#081827]/65 md:text-lg">
              A temporary issue occurred while loading this page. You can try
              again, return to the homepage, or contact {companyInfo.name} for
              help with your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-[#081827] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#10243D]"
              >
                Try Again
              </button>

              <Link
                href="/"
                className="rounded-full border border-[#081827]/20 px-7 py-3.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
              >
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#081827]/20 px-7 py-3.5 text-sm font-bold transition hover:bg-[#081827] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A46A]">
              Need Assistance?
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#081827]/65">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-bold text-[#9C773E] transition hover:text-[#081827]"
                >
                  {companyInfo.email}
                </a>
              </p>

              <p>Phone: {companyInfo.phone}</p>

              <p>WhatsApp: {companyInfo.whatsapp}</p>

              <p>{companyInfo.emergencyContact}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}