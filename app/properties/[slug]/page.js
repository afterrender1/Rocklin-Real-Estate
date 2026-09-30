import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import PropertyCard, { ArrowIcon } from "../../components/PropertyCard";
import PropertyGallery from "../../components/property/PropertyGallery";
import MortgageCalculator from "../../components/property/MortgageCalculator";
import AgentContact from "../../components/property/AgentContact";
import { formatNumber, formatPrice, getPropertyBySlug, properties } from "../../data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property not found | Skyline Real Estate" };
  return {
    title: `${property.name}, ${property.location} | Skyline Real Estate`,
    description: property.summary,
  };
}

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const icons = {
  bed: icon(<><path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3H10v5" /><path d="M3 15h18" /><circle cx="6.5" cy="11.5" r="1.5" /></>),
  bath: icon(<><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" /><path d="M6 12V6a2 2 0 0 1 4 0" /><path d="M7 19l-1 2M17 19l1 2" /></>),
  area: icon(<><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></>),
  lot: icon(<><path d="M3 20h18" /><path d="M7 20v-6l-3-3 3-5 3 5-3 3" /><path d="M14 20v-9h6v9" /></>),
  garage: icon(<><path d="M3 10 12 4l9 6v10H3z" /><path d="M7 20v-6h10v6M7 17h10" /></>),
  year: icon(<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  pin: icon(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  check: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
};

const Section = ({ title, children, id }) => (
  <section id={id} data-animate="fade-up" className="scroll-mt-28 rounded-3xl border border-stone-200 bg-white p-6 sm:p-8">
    <h2 className="flex items-center gap-3 text-xl font-semibold text-stone-900 sm:text-2xl">
      <span className="h-6 w-1 rounded-full bg-emerald-500" />
      {title}
    </h2>
    <div className="mt-6">{children}</div>
  </section>
);

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const {
    id, name, location, code, address, price, type, status, beds, baths, area, lotSize,
    garage, yearBuilt, gallery, description, features, nearby, agent, summary,
  } = property;

  const facts = [
    { label: "Bedrooms", value: beds, icon: icons.bed },
    { label: "Bathrooms", value: baths, icon: icons.bath },
    { label: "Living area", value: `${formatNumber(area)} sqft`, icon: icons.area },
    { label: "Lot size", value: `${formatNumber(lotSize)} sqft`, icon: icons.lot },
    { label: "Garage", value: `${garage} cars`, icon: icons.garage },
    { label: "Year built", value: yearBuilt, icon: icons.year },
  ];

  const details = [
    ["Property ID", `SKY-${String(id).padStart(4, "0")}`],
    ["Property type", type],
    ["Status", status],
    ["Price", formatPrice(price)],
    ["Price per sqft", formatPrice(price / area)],
    ["Living area", `${formatNumber(area)} sqft`],
    ["Lot size", `${formatNumber(lotSize)} sqft`],
    ["Bedrooms", beds],
    ["Bathrooms", baths],
    ["Garage", `${garage} spaces`],
    ["Year built", yearBuilt],
    ["Country", code],
  ];

  const similar = properties.filter((p) => p.slug !== slug).slice(0, 3);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=14&output=embed`;

  return (
    <>
      <Navbar />
      <main className="bg-stone-50">
        {/* Header + gallery */}
        <section className="bg-linear-to-b from-stone-950 from-65% to-stone-50 to-65% pt-28 sm:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav data-animate="hero" aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-emerald-300">Home</Link>
              <span>/</span>
              <Link href="/properties" className="transition-colors hover:text-emerald-300">Properties</Link>
              <span>/</span>
              <span className="text-white">{name}</span>
            </nav>

            <div data-animate="hero" className="mt-6 flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">{status}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80">{type}</span>
                </div>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{name}</h1>
                <p className="mt-3 flex items-start gap-2 text-sm text-white/70 sm:text-base">
                  <span className="mt-0.5 text-emerald-400">{icons.pin}</span>
                  {address}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-sm text-white/60">Asking price</p>
                <p className="text-3xl font-bold text-white sm:text-4xl">{formatPrice(price)}</p>
                <p className="mt-1 text-sm text-emerald-300">{formatPrice(price / area)} / sqft</p>
              </div>
            </div>

            <div data-animate="hero">
              <PropertyGallery images={gallery} name={name} />
            </div>
          </div>
        </section>

        {/* Key facts */}
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {facts.map((f) => (
              <li key={f.label} data-animate="fade-up" className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-emerald-400">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">{f.icon}</span>
                <span className="min-w-0">
                  <span className="block truncate text-base font-semibold text-stone-900">{f.value}</span>
                  <span className="block text-xs text-stone-500">{f.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-14">
          <div className="space-y-6 lg:col-span-2">
            <Section title="Overview" id="overview">
              <p className="text-lg font-medium text-stone-900">{summary}</p>
              <div className="mt-4 space-y-4 leading-relaxed text-stone-600">
                {description.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </Section>

            <Section title="Property Details" id="details">
              <dl className="grid gap-x-10 sm:grid-cols-2">
                {details.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-stone-100 py-3 text-sm">
                    <dt className="text-stone-500">{label}</dt>
                    <dd className="font-semibold text-stone-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section title="Features & Amenities" id="features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-xl bg-stone-50 px-4 py-3 text-sm font-medium text-stone-700">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">{icons.check}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Mortgage Calculator" id="mortgage">
              <MortgageCalculator price={price} />
            </Section>

            <Section title="Location & Nearby" id="location">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100">
                <iframe
                  title={`Map of ${name}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[30%]"
                />
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {nearby.map((n) => (
                  <li key={n.name} className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 px-4 py-3 text-sm">
                    <span className="flex items-center gap-2 font-medium text-stone-800">
                      <span className="text-emerald-600">{icons.pin}</span>
                      {n.name}
                    </span>
                    <span className="shrink-0 text-stone-500">{n.distance}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <aside data-animate="right" className="lg:sticky lg:top-24 lg:self-start">
            <AgentContact agent={agent} propertyName={name} />
          </aside>
        </div>

        {/* Similar properties */}
        <section className="border-t border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-animate="fade-up" className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                Similar{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Properties</span>
              </h2>
              <Link href="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-emerald-600">
                View all <ArrowIcon />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
