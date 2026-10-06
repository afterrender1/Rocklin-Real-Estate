import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { isForRent, properties } from "../data/properties";

const tabs = [
  { href: "/properties", label: "All listings", count: properties.length },
  { href: "/rentals", label: "Rentals", count: properties.filter(isForRent).length },
];

// Shared layout for /properties and /rentals
const ListingsPage = ({ active, crumb, title, highlight, description, items }) => (
  <main className="bg-stone-50">
    <section className="bg-stone-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav data-animate="hero" aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-orange-300">Home</Link>
          <span>/</span>
          <span className="text-white">{crumb}</span>
        </nav>
        <h1 data-animate="hero" className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
          {title}{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">{highlight}</span>
        </h1>
        <p data-animate="hero" className="mt-4 max-w-xl text-white/70 sm:text-lg">{description}</p>
      </div>
    </section>

    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <nav aria-label="Filter listings" className="flex gap-2">
        {tabs.map((t) => {
          const current = t.href === active;
          return (
            <Link
              key={t.href}
              href={t.href}
              aria-current={current ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                current ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {t.label} <span className={current ? "text-white/60" : "text-stone-400"}>({t.count})</span>
            </Link>
          );
        })}
      </nav>
    </div>

    {items.length > 0 ? (
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 pt-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 lg:pb-20">
        {items.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    ) : (
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <p className="rounded-xl border border-stone-200 bg-white p-8 text-stone-600">
          No homes available right now.{" "}
          <Link href="/contact" className="font-medium text-orange-700 hover:underline">Contact us</Link> and we&apos;ll let you know when one comes up.
        </p>
      </div>
    )}
  </main>
);

export default ListingsPage;
