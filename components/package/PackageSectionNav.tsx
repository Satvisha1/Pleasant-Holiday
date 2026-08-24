type PackageSectionNavItem = {
  label: string;
  href: string;
};

type PackageSectionNavProps = {
  items?: PackageSectionNavItem[];
};

const defaultItems: PackageSectionNavItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "Itinerary",
    href: "#itinerary",
  },
  {
    label: "Included",
    href: "#included",
  },
  {
    label: "Map",
    href: "#map",
  },
  {
    label: "Essential Info",
    href: "#essential-info",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function PackageSectionNav({
  items = defaultItems,
}: PackageSectionNavProps) {
  return (
    <nav
      aria-label="Trip page sections"
      className="sticky top-16 z-40 border-b border-[#081827]/10 bg-white"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-8">
        <div className="flex min-w-max items-center gap-10">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#081827]/55 transition hover:text-[#081827]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}