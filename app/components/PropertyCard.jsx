"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatListingPrice, formatNumber } from "../data/properties";

export const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`}>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const PropertyCard = ({ property, className = "" }) => {
  const [liked, setLiked] = useState(false);
  const { slug, name, location, code, beds, baths, area, image, status } = property;

  return (
    <article data-animate="fade-up" className={`group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${className}`}>
      <Image
        src={image}
        alt={`${name} in ${location}`}
        fill
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Neutral shade behind the text for readability */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Top badges */}
      <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
          {status}
        </span>
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          aria-pressed={liked}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/35"
        >
          <svg viewBox="0 0 24 24" className={`h-4.5 w-4.5 transition ${liked ? "fill-rose-500 stroke-rose-500" : "fill-none stroke-current"}`} strokeWidth="2">
            <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-xs font-semibold text-orange-300 sm:text-sm">{formatListingPrice(property)}</p>
        <h3 className="mt-0.5 line-clamp-2 text-base font-bold leading-snug text-white min-[400px]:text-lg sm:text-xl">{name}</h3>

        <div className="mt-2 flex items-end justify-between gap-3">
          <div className="min-w-0 text-xs text-white/80 sm:text-sm">
            <p className="flex items-center gap-1.5 truncate">
              {location}
              <span className="text-[10px] font-bold text-white sm:text-xs">{code}</span>
            </p>
            <p className="mt-0.5 truncate text-white/75">
              {beds} Beds • {baths} Baths • {formatNumber(area)} sqft
            </p>
          </div>

          <Link
            href={`/properties/${slug}`}
            aria-label={`View ${name}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-orange-500 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            View
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
