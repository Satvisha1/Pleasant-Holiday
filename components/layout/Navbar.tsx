"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Destinations",
    href: "/#destinations",
  },
  {
    label: "Trekking",
    href: "/treks",
  },
  {
    label: "Tours",
    href: "/tours",
  },
  {
    label: "Experiences",
    href: "/#trekking-regions",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-16 w-full transition duration-300 ${
        isScrolled
          ? "bg-[#081827] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-base font-extrabold tracking-tight text-white transition hover:text-[#C9A46A]"
        >
          Pleasant Holiday
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-white/85 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-[#C9A46A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-[#C9A46A] px-6 py-2.5 text-sm font-bold text-[#081827] transition hover:bg-white"
          >
            Plan Your Trip
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-t border-white/10 bg-[#081827] px-6 py-5 text-white shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-white/75 transition hover:text-[#C9A46A]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#C9A46A] px-6 py-3 text-sm font-bold text-[#081827]"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}