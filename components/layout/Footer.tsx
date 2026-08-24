import Link from "next/link";
import { companyInfo } from "@/data/company";

const destinationLinks = [
  { label: "Nepal", href: "/destinations/nepal" },
  { label: "Bhutan", href: "/destinations/bhutan" },
  { label: "Tibet", href: "/destinations/tibet" },
  { label: "India", href: "/destinations/india" },
];

const trekkingLinks = [
  { label: "Everest Region", href: "/trekking-regions/everest" },
  { label: "Annapurna Region", href: "/trekking-regions/annapurna" },
  { label: "Langtang Region", href: "/trekking-regions/langtang" },
  { label: "Manaslu Region", href: "/trekking-regions/manaslu" },
  { label: "Mustang Region", href: "/trekking-regions/mustang" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact", href: "/contact" },
  { label: "Plan Your Trip", href: "/contact" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Booking Conditions", href: "/booking-conditions" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: companyInfo.socialLinks.facebook,
  },
  {
    label: "Instagram",
    href: companyInfo.socialLinks.instagram,
  },
  {
    label: "TikTok",
    href: companyInfo.socialLinks.tiktok,
  },
  {
    label: "YouTube",
    href: companyInfo.socialLinks.youtube,
  },
  {
    label: "LinkedIn",
    href: companyInfo.socialLinks.linkedin,
  },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer className="bg-[#06111F] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              {companyInfo.name}
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Thoughtfully designed trekking, cultural journeys, and Himalayan
              experiences across Nepal, Bhutan, Tibet, and India.
            </p>

            <div className="mt-7 space-y-3 text-sm leading-7 text-white/60">
              <p>{companyInfo.address}</p>

              <p>{companyInfo.mapLandmark}</p>

              <p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition hover:text-white"
                >
                  {companyInfo.email}
                </a>
              </p>

              <p>
                <a
                  href={`tel:${companyInfo.phone.replaceAll(" ", "")}`}
                  className="transition hover:text-white"
                >
                  Phone: {companyInfo.phone}
                </a>
              </p>

              <p>
                <a
                  href={`tel:${companyInfo.whatsapp.replaceAll(" ", "")}`}
                  className="transition hover:text-white"
                >
                  WhatsApp: {companyInfo.whatsapp}
                </a>
              </p>

              {companyInfo.googleMapUrl && (
                <p>
                  <a
                    href={companyInfo.googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#C9A46A] transition hover:text-white"
                  >
                    View on Google Maps →
                  </a>
                </p>
              )}
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/60 transition hover:border-[#C9A46A] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#C9A46A] px-6 py-3 text-sm font-bold text-[#081827] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D8B779]"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
              Destinations
            </h3>

            <ul className="mt-5 space-y-3">
              {destinationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trekking */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
              Trekking
            </h3>

            <ul className="mt-5 space-y-3">
              {trekkingLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A46A]">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>

          <p>Himalayan journeys across Nepal, Bhutan, Tibet, and India.</p>
        </div>
      </div>
    </footer>
  );
}