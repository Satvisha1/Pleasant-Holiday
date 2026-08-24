type PackageFAQItem = {
  question: string;
  answer: string;
};

type PackageFAQProps = {
  faqs: PackageFAQItem[];
  heading?: string;
  description?: string;
};

export default function PackageFAQ({
  faqs,
  heading = "Frequently asked questions",
  description = "Clear answers to common questions about this journey.",
}: PackageFAQProps) {
  return (
    <section
      id="faq"
      className="scroll-mt-40 bg-[#F8F6F2] px-6 py-20 text-[#081827] sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-[180px] lg:self-start">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A46A]">
              Good to Know
            </p>

            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight md:text-5xl">
              {heading}
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#081827]/60">
              {description}
            </p>
          </div>

          {/* FAQ accordion */}
          <div>
            {faqs.length > 0 ? (
              <div className="border-t border-[#081827]/15">
                {faqs.map((faq, index) => (
                  <details
                    key={`${faq.question}-${index}`}
                    className="group border-b border-[#081827]/15"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition hover:text-[#9C773E] sm:py-7 [&::-webkit-details-marker]:hidden">
                      <div className="flex min-w-0 gap-4 sm:gap-6">
                        <span className="mt-1 shrink-0 text-xs font-bold tracking-[0.18em] text-[#C9A46A]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-base font-bold leading-7 sm:text-lg">
                          {faq.question}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#081827]/15 text-lg font-light text-[#081827]/55 transition duration-300 group-open:rotate-45 group-open:border-[#C9A46A] group-open:text-[#9C773E]"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-7 pl-10 pr-12 sm:pb-8 sm:pl-[3.75rem] sm:pr-16">
                      <p className="max-w-3xl text-sm leading-7 text-[#081827]/65 sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className="border-t border-[#081827]/15 pt-8">
                <p className="max-w-2xl text-base leading-8 text-[#081827]/50">
                  Frequently asked questions for this journey will be added
                  here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}