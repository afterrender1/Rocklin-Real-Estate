import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import WorkProcess from "../components/WorkProcess";
import { ArrowIcon } from "../components/PropertyCard";

export const metadata = {
  title: "About Us | Skyline Real Estate",
  description: "Learn about Skyline Real Estate, our story, values and the team behind your next home.",
};

const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "2,500+", label: "Homes sold" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5", label: "Countries covered" },
];

const svg = (d) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const values = [
  {
    title: "Integrity First",
    text: "Honest pricing, verified listings and clear advice, even when it means walking away from a deal.",
    icon: svg(<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>),
  },
  {
    title: "Local Expertise",
    text: "Agents who live in the markets they sell, with deep knowledge of every street and school.",
    icon: svg(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  },
  {
    title: "Sustainable Living",
    text: "We champion energy-efficient homes and green design that are better for you and the planet.",
    icon: svg(<><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" /><path d="M5 19 12 12" /></>),
  },
  {
    title: "Client for Life",
    text: "Our support continues after closing, from moving in to renting out or selling again.",
    icon: svg(<><path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" /></>),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHeader
        crumb="About Us"
        title="Building Trust,"
        highlight="One Home at a Time"
        description="For over a decade, Skyline has helped families and investors find homes they love in the world's most desirable places."
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div data-animate="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/sky-hero-bg.webp"
              alt="Modern home sold by Skyline"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div data-animate="fade-up">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm tracking-wide text-emerald-700">
              Our Story
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              From a small office to a{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">global network</span>
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-stone-600">
              <p>
                Skyline started in 2013 with three agents and one belief: buying a home should feel exciting, not
                stressful. We focused on honest advice, beautiful homes and treating every client like family.
              </p>
              <p>
                Today our team spans Spain, the United States, Switzerland and the UAE, but that belief hasn&apos;t
                changed. Every listing is verified, every client has a dedicated agent, and every deal is handled with care.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-stone-200 p-5 transition-colors hover:border-emerald-400">
                  <dt className="text-sm text-stone-500">{s.label}</dt>
                  <dd className="mt-1 text-3xl font-bold text-stone-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-animate="fade-up" className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              What We{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Stand For</span>
            </h2>
            <p className="mt-4 text-stone-500 sm:text-lg">The principles that guide every conversation, viewing and deal.</p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li
                key={v.title}
                data-animate="fade-up"
                className="group rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  {v.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-stone-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WorkProcess />

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div
          data-animate="scale"
          className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-3xl bg-stone-900 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to find your dream home?</h2>
            <p className="mt-2 text-white/60">Browse our listings or talk to an agent today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Explore Properties <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
