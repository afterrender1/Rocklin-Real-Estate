"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatNumber, formatPrice } from "../data/properties";

export const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`}>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const PropertyCard = ({ property, className = "" }) => {
  const [liked, setLiked] = useState(false);
  const { slug, name, location, code, price, beds, baths, area, image, tint, button, status } = property;

  return (
    <article className={`group relative h-[440px] overflow-hidden rounded-3xl shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:h-[480px] ${className}`}>
      <Image
        src={image}
        alt={`${name} in ${location}`}
        fill
        sizes="(min-width: 640px) 320px, 280px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Colour tint from bottom */}
      <div className={`absolute inset-0 bg-gradient-to-t ${tint} to-transparent`} />

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
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-sm font-medium text-emerald-300">{formatPrice(price)}</p>
        <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-[26px]">{name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
          {location}
          <span className="text-xs font-bold text-white">{code}</span>
        </p>
        <p className="mt-2 text-sm text-white/75">
          {beds} Beds • {baths} Baths • {formatNumber(area)} sqft
        </p>

        <Link
          href={`/properties/${slug}`}
          className={`mt-5 flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 ${button}`}
        >
          View Property
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default PropertyCard;
