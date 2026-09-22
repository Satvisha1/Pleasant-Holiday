import Link from "next/link";
import { companyInfo } from "@/data/company";

function getWhatsappUrl(number: string) {
  const digits = number.replace(/\D/g, "");

  if (!digits) {
    return "/contact";
  }

  // Nepal mobile number without country code, e.g. 9841XXXXXX
  if (digits.length === 10 && digits.startsWith("9")) {
    return `https://wa.me/977${digits}`;
  }

  // Already includes country code
  return `https://wa.me/${digits}`;
}

export default function FloatingContactButton() {
  const whatsappUrl = getWhatsappUrl(companyInfo.whatsapp);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
      >
        WhatsApp
      </a>

      <Link
        href="/contact"
        className="rounded-full bg-[#081827] px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#10243D] hover:shadow-2xl"
      >
        Send Inquiry
      </Link>
    </div>
  );
}