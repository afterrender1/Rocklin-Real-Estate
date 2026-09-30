import Link from "next/link";
import ShaderBackground from "./ShaderBackground";
import { properties } from "../data/properties";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Agents", href: "/agents" },
      { label: "Properties", href: "/properties" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Featured Homes", href: "/#properties" },
      { label: "How It Works", href: "/#next" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Top Locations",
    links: properties.map((p) => ({ label: p.location, href: `/properties/${p.slug}` })),
  },
];

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const contacts = [
  { label: "hello@skyline.estate", href: "mailto:hello@skyline.estate", icon: icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>) },
  { label: "+1 (310) 555-0100", href: "tel:+13105550100", icon: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />) },
  { label: "Beverly Hills, CA", href: "/contact", icon: icon(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>) },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", d: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></> },
  { label: "Instagram", href: "https://www.instagram.com", d: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></> },
  { label: "Facebook", href: "https://www.facebook.com", d: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M15 8h-2a2 2 0 0 0-2 2v11M9 13h6" /></> },
  { label: "YouTube", href: "https://www.youtube.com", d: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></> },
];

const Footer = () => (
  <footer className="mt-auto bg-white px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
    {/* CTA with animated shader */}
    <section
      data-animate="scale"
      className="relative isolate mx-auto max-w-[96rem] overflow-hidden rounded-3xl bg-gradient-to-br from-[#061a5c] via-[#1F51FF] to-[#0b2a9e] px-6 py-16 text-center sm:py-20 lg:py-24"
    >
      <ShaderBackground className="-z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.1)_70%)]" />

      <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Ready to find your dream home?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
        Book a free consultation and discover how Skyline can help you buy, sell or invest with confidence.
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
          <Link href="/" className="flex items-center gap-2 text-stone-900">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l9-7 9 7" />
                <path d="M5 10v10h14V10" />
                <path d="M10 20v-6h4v6" />
              </svg>
            </span>
            <span className="text-xl font-bold tracking-[0.18em]">SKYLINE</span>
          </Link>
          <p className="text-sm text-stone-600">Your trusted guide to finding your dream home.</p>
        </div>

        <div className="grid grid-cols-2 gap-10 py-10 md:grid-cols-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-stone-900">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-stone-500 transition-colors hover:text-emerald-600">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold text-stone-900">Contact</p>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="group flex items-center gap-3 text-sm text-stone-500 transition-colors hover:text-emerald-600">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-stone-200 bg-white text-emerald-600 transition-colors group-hover:border-emerald-400">
                      {c.icon}
                    </span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <p className="text-sm font-semibold text-stone-900 lg:text-right">Follow us</p>
            <ul className="mt-4 flex gap-2 lg:justify-end">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-stone-200 bg-white text-stone-700 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
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
          <p>© {new Date().getFullYear()} Skyline Real Estate. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 font-medium text-stone-700 transition-colors hover:text-emerald-600">
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
