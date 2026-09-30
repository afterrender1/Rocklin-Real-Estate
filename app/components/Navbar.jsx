"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home Classic", href: "/" },
      { label: "Home Modern", href: "/" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Agents", href: "/agents" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-white">
    <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    </span>
    <span className="text-xl font-bold tracking-[0.18em] sm:text-2xl">SKYLINE</span>
  </Link>
);

const Chevron = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${className}`}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 py-3 shadow-lg backdrop-blur-md" : "py-5"
      }`}
    >
      <nav data-animate="hero" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              <Link
                href={link.href}
                className="relative flex items-center gap-1 py-2 text-sm font-medium text-white/90 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-emerald-400 after:transition-transform after:duration-300 hover:text-emerald-300 hover:after:scale-x-100"
              >
                {link.label}
                {link.children && <Chevron className="group-hover:rotate-180" />}
              </Link>
              {link.children && (
                <ul className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/signin" className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-emerald-300">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6.2 18.2a7 7 0 0111.6 0" />
            </svg>
            Sign In
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        data-lenis-prevent
        className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
          <ul className="flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenSub(openSub === link.label ? null : link.label)}
                      className="flex w-full items-center justify-between py-4 text-lg font-medium text-white transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                      <Chevron className={openSub === link.label ? "rotate-180" : ""} />
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-300 ${openSub === link.label ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
                      <ul className="min-h-0">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 pl-4 text-base text-white/70 transition-colors hover:text-emerald-300"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-medium text-white transition-colors hover:text-emerald-300"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/30 py-3 text-center font-medium text-white"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white py-3 text-center font-semibold text-slate-900"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
