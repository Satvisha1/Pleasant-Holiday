import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[#081827]/10 bg-white px-6 py-4 text-[#081827] sm:px-8"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-semibold text-[#081827]/55 transition hover:text-[#9C773E]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#081827]">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="text-[#081827]/30">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}