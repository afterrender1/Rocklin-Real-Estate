"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "../data/contact";

const navLinks = [
  { label: "Listings", href: "/properties" },
  { label: "Property Management", href: "/contact?interest=property-management" },
  { label: "Rentals", href: "/rentals" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
];

// Links with a query (e.g. Property Management -> /contact?interest=...) never show as the current page
const isActive = (pathname, href) =>
  href.includes("?") ? false : href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
const isLinkActive = (pathname, link) =>
  link.children ? link.children.some((c) => isActive(pathname, c.href)) : isActive(pathname, link.href);

const Logo = ({ onClick }) => (
  <Link href="/" onClick={onClick} aria-label="Rocklin Real Estate home" className="flex shrink-0 items-center">
    <Image
      src="/logo/rocklin-logo-light.webp"
      alt="Rocklin Real Estate"
      width={1981}
      height={794}
      priority
      className="h-10 w-auto sm:h-12"
    />
  </Link>
);

const Chevron = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${className}`} aria-hidden="true">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const desktopLinkClass = (active) =>
  `relative flex items-center gap-1 whitespace-nowrap py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-orange-400 after:transition-transform after:duration-300 hover:text-orange-300 hover:after:scale-x-100 ${
    active ? "text-orange-300 after:scale-x-100" : "text-white/90 after:scale-x-0"
  }`;

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The drawer is tied to the page it was opened on, so any navigation closes it
  const [openPath, setOpenPath] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const closeBtnRef = useRef(null);
  const open = openPath === pathname;

  const openMenu = () => {
    setOpenSub(null);
    setOpenPath(pathname);
  };
  const closeMenu = () => setOpenPath(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll, focus the close button and allow Esc while the drawer is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
          scrolled ? "bg-slate-900/80 py-3 shadow-lg backdrop-blur-md" : "py-4 sm:py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo preload />

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link);
              return (
                <li key={link.label} className="group relative">
                  {link.children ? (
                    <button type="button" aria-haspopup="true" className={desktopLinkClass(active)}>
                      {link.label}
                      <Chevron className="group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                  ) : (
                    <Link href={link.href} aria-current={active ? "page" : undefined} className={desktopLinkClass(active)}>
                      {link.label}
                    </Link>
                  )}
                  {link.children && (
                    <ul className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {link.children.map((child) => {
                        const childActive = isActive(pathname, child.href);
                        return (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              className={`block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-orange-50 hover:text-orange-700 ${
                                childActive ? "bg-orange-50 font-semibold text-orange-700" : "text-slate-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30"
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={openMenu}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M10 17h10" />
            </svg>
          </button>
        </nav>
      </header>

      {/*
        Mobile drawer lives OUTSIDE the header: the header's backdrop-blur creates a new
        containing block, which would trap a `fixed` child inside the header's small box.
      */}
      <div className={`lg:hidden ${open ? "" : "pointer-events-none"}`}>
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={closeMenu}
          className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Panel */}
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          aria-hidden={!open}
          inert={!open}
          data-lenis-prevent
          className={`fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-stone-950 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Logo onClick={closeMenu} />
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <ul className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link);
                return (
                  <li key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenSub(openSub === link.label ? null : link.label)}
                          aria-expanded={openSub === link.label}
                          className={`flex w-full items-center justify-between py-4 text-base font-medium transition-colors hover:text-orange-300 ${
                            active ? "text-orange-300" : "text-white"
                          }`}
                        >
                          {link.label}
                          <Chevron className={openSub === link.label ? "rotate-180" : ""} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ${openSub === link.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <ul className="min-h-0 overflow-hidden">
                            {link.children.map((child) => {
                              const childActive = isActive(pathname, child.href);
                              return (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    aria-current={childActive ? "page" : undefined}
                                    className={`mb-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-orange-300 ${
                                      childActive ? "bg-white/5 text-orange-300" : "text-white/70"
                                    }`}
                                  >
                                    <span className={`h-1.5 w-1.5 rounded-full ${childActive ? "bg-orange-400" : "bg-white/30"}`} />
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between py-4 text-base font-medium transition-colors hover:text-orange-300 ${
                          active ? "text-orange-300" : "text-white"
                        }`}
                      >
                        {link.label}
                        {active && <span className="h-2 w-2 rounded-full bg-orange-400" />}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-white/10 px-5 py-5">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block rounded-full bg-orange-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-1 text-sm text-white/60">
              <a href={contact.phoneHref} className="transition-colors hover:text-orange-300">{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-orange-300">{contact.email}</a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
