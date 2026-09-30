"use client";

import { useRef } from "react";
import Link from "next/link";
import PropertyCard, { ArrowIcon } from "./PropertyCard";
import { properties } from "../data/properties";

const LuxuryHomes = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="properties" className="overflow-hidden bg-stone-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-animate="fade-up" className="max-w-xl">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm tracking-wide text-emerald-700">
              Featured Listings
            </span>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              Luxury Homes{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                For Sale
              </span>
            </h2>
            <p className="mt-4 text-base text-stone-500 sm:text-lg">
              Handpicked premium properties in the world&apos;s most desirable locations.
            </p>
          </div>

          <div data-animate="fade" className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous properties"
              className="grid h-12 w-12 place-items-center rounded-full border border-stone-300 text-stone-700 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next properties"
              className="grid h-12 w-12 place-items-center rounded-full border border-stone-300 text-stone-700 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Slider track: aligned with container on the left, bleeds off the right edge */}
      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-px-4 px-4 pb-8 pt-4 [scrollbar-width:none] sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} className="w-[280px] shrink-0 snap-start sm:w-[320px]" />
        ))}
      </div>

      <div data-animate="fade-up" className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/30"
        >
          View All Properties
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default LuxuryHomes;
