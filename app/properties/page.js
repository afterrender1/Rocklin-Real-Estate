import Link from "next/link";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export const metadata = {
  title: "Properties | Skyline Real Estate",
  description: "Browse luxury homes for sale around the world.",
};

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-50">
        <section className="bg-stone-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav data-animate="hero" aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-emerald-300">Home</Link>
              <span>/</span>
              <span className="text-white">Properties</span>
            </nav>
            <h1 data-animate="hero" className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              All{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Properties</span>
            </h1>
            <p data-animate="hero" className="mt-4 max-w-xl text-white/70 sm:text-lg">
              {properties.length} handpicked luxury homes in the world&apos;s most desirable locations.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </main>
    </>
  );
}
