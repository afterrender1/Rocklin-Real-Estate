import Link from "next/link";
import { notFound } from "next/navigation";
import PropertyCard from "../../components/PropertyCard";
import PropertyGallery from "../../components/property/PropertyGallery";
import AgentContact from "../../components/property/AgentContact";
import { formatListingPrice, formatNumber, getPropertyBySlug, isForRent, properties } from "../../data/properties";
import { getAgentById } from "../../data/agents";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property not found | Rocklin Real Estate" };
  return {
    title: `${property.name}, ${property.location} | Rocklin Real Estate`,
    description: property.summary,
  };
}

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
};

const Section = ({ title, children, id }) => (
  <section id={id} className="scroll-mt-28 py-8 first:pt-0">
    <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">{title}</h2>
    <div className="mt-4">{children}</div>
  </section>
);

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const {
    name, code, address, type, status, beds, baths, area, lotSize,
    garage, yearBuilt, gallery, description, features, nearby, agentId, summary,
  } = property;
  const agent = await getAgentById(agentId);

  const facts = [
    { label: "Beds", value: beds, icon: icons.bed },
    { label: "Baths", value: baths, icon: icons.bath },
    { label: "Sqft", value: formatNumber(area), icon: icons.area },
    { label: "Lot sqft", value: formatNumber(lotSize), icon: icons.lot },
    { label: "Garage", value: garage, icon: icons.garage },
    { label: "Built", value: yearBuilt, icon: icons.year },
  ];

  const details = [
    ["Property type", type],
    ["Status", status],
    [isForRent(property) ? "Monthly rent" : "Price", formatListingPrice(property)],
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
    <main className="bg-white">
      {/* Solid strip behind the transparent navbar */}
      <div className="h-20 bg-stone-950 sm:h-24" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pt-6 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900 hover:underline">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/properties" className="hover:text-stone-900 hover:underline">Properties</Link>
          <span aria-hidden="true">›</span>
          <span className="truncate text-stone-900">{name}</span>
        </nav>

        <header className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-2.5 py-1 text-stone-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                {status}
              </span>
              <span className="rounded-full border border-stone-300 px-2.5 py-1 text-stone-700">{type}</span>
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{name}</h1>
            <p className="mt-1.5 flex items-start gap-1.5 text-sm text-stone-600 sm:text-base">
              <span className="mt-0.5 shrink-0 text-stone-400 [&_svg]:h-4 [&_svg]:w-4">{icons.pin}</span>
              {address}
            </p>
          </div>
          <div className="shrink-0 md:text-right">
            <p className="text-2xl font-semibold text-stone-900 sm:text-3xl">{formatListingPrice(property)}</p>
            <p className="text-sm text-stone-500">{isForRent(property) ? "Monthly rent" : "Asking price"}</p>
          </div>
        </header>

        <div className="mt-6">
          <PropertyGallery images={gallery} name={name} />
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-y-5 border-y border-stone-200 py-5 sm:grid-cols-6">
          {facts.map((f) => (
            <li key={f.label} className="flex items-center gap-2.5 sm:justify-center">
              <span className="shrink-0 text-stone-400">{f.icon}</span>
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-semibold text-stone-900 sm:text-base">{f.value}</span>
                <span className="block text-xs text-stone-500">{f.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 lg:px-8">
        <div className="min-w-0 divide-y divide-stone-200">
          <Section title="Overview" id="overview">
            <p className="font-medium text-stone-900">{summary}</p>
            <div className="mt-3 space-y-3 text-[15px] leading-7 text-stone-600">
              {description.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Section>

          <Section title="Property details" id="details">
            <dl className="grid gap-x-12 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-stone-100 py-3 text-sm">
                  <dt className="text-stone-500">{label}</dt>
                  <dd className="text-right font-medium text-stone-900">{value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Features" id="features">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-stone-700">
                  <span className="shrink-0 text-orange-600">{icons.check}</span>
                  {f}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Location" id="location">
            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
              <iframe
                title={`Map of ${name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
            <ul className="mt-4 divide-y divide-stone-100">
              {nearby.map((n) => (
                <li key={n.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-stone-800">{n.name}</span>
                  <span className="shrink-0 text-stone-500">{n.distance}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {agent && (
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <AgentContact agent={agent} propertyName={name} />
          </aside>
        )}
      </div>

      {similar.length > 0 && (
        <section className="border-t border-stone-200 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">Similar properties</h2>
              <Link href="/properties" className="shrink-0 text-sm font-medium text-orange-700 hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
