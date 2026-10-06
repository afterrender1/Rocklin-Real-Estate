import Image from "next/image";
import Link from "next/link";
import ShaderBackground from "./ShaderBackground";

const exploreLinks = [
  { label: "Listings", href: "/properties" },
  { label: "Property Management", href: "/contact" },
  { label: "Rentals", href: "/properties" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms and conditions", href: "/terms-and-conditions" },
];

const hours = [
  ["Monday – Friday", "9 AM – 5 PM"],
  ["Saturday – Sunday", "By appointment"],
];

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const contacts = [
  { label: "(801) 425-3478", href: "tel:+18014253478", icon: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />) },
  { label: "arham@afterrender.com", href: "mailto:arham@afterrender.com", icon: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>) },
  {
    label: "720 S River Rd, Suite B110, St. George, UT 84790",
    href: "https://maps.google.com/?q=720+S+River+Rd+Suite+B110+St.+George+UT+84790",
    icon: icon(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", d: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M15 8h-2a2 2 0 0 0-2 2v11M9 13h6" /></> },
];

const Footer = () => (
  <footer className="mt-auto bg-white px-3 pb-3 pt-16 sm:px-4 sm:pb-4 sm:pt-24">
    {/* CTA with animated shader */}
    <section
      data-animate="scale"
      className="relative isolate mx-auto max-w-[96rem] overflow-hidden rounded-3xl bg-gradient-to-br from-[#061a5c] via-[#1F51FF] to-[#0b2a9e] px-6 py-16 text-center sm:py-20 lg:py-24"
    >
      <ShaderBackground className="-z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.1)_70%)]" />

      <h2 className="mx-auto max-w-2xl text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-white sm:text-4xl lg:text-5xl">
        Ready to find your dream home?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
        Book a free consultation and discover how Rocklin can help you buy, sell or invest with confidence.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
        >
          Book a Free Consultation
        </Link>
        <Link
          href="/properties"
          className="w-full rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
        >
          Browse Properties
        </Link>
      </div>
    </section>

    {/* Footer card */}
    <div className="mx-auto mt-3 max-w-[96rem] rounded-3xl border border-stone-200 bg-stone-50 sm:mt-4">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-4 border-b border-stone-200 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Rocklin Real Estate home" className="inline-flex">
            <Image
              src="/logo/rocklin-logo-dark.webp"
              alt="Rocklin Real Estate"
              width={1981}
              height={794}
              className="h-11 w-auto sm:h-12"
            />
          </Link>
          <p className="max-w-md text-sm leading-6 text-stone-600 sm:text-right">
            New-construction homes for buyers and full-service property management for owners, across Southern and Northern Utah.
          </p>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
          <div>
            <p className="text-sm font-semibold text-stone-900">Contact</p>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-3 text-sm text-stone-500 transition-colors hover:text-orange-600"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-stone-200 bg-white text-orange-600 transition-colors group-hover:border-orange-400">
                      {c.icon}
                    </span>
                    <span className="min-w-0">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">Office hours</p>
            <dl className="mt-4 space-y-3 text-sm">
              {hours.map(([days, time]) => (
                <div key={days}>
                  <dt className="text-stone-900">{days}</dt>
                  <dd className="text-stone-500">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">Explore</p>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-stone-500 transition-colors hover:text-orange-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900 lg:text-right">Follow us</p>
            <ul className="mt-4 flex gap-2 lg:justify-end">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white text-stone-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {s.d}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-stone-200 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Devskarnel. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-orange-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#top" className="inline-flex items-center gap-2 font-medium text-stone-700 transition-colors hover:text-orange-600">
            Back to top
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 16V4M5 9l5-5 5 5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
