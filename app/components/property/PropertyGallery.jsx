"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const PropertyGallery = ({ images, name }) => {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, move]);

  return (
    <div className="relative">
      <div className="grid h-[320px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-3xl sm:h-[420px] sm:gap-3 lg:h-[520px]">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden ${
              i === 0 ? "col-span-4 row-span-2 md:col-span-2" : "hidden md:block"
            }`}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${name} photo ${i + 1}`}
              fill
              preload={i === 0}
              sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "25vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
            {i === images.length - 1 && (
              <span className="absolute inset-0 hidden place-items-center bg-black/45 text-sm font-semibold text-white md:grid">
                View all {images.length} photos
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Mobile: photo count pill */}
      <button
        type="button"
        onClick={() => setActive(0)}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-stone-900 shadow backdrop-blur md:hidden"
      >
        1 / {images.length} Photos
      </button>

      {active !== null && (
        <div
          role="dialog"
          data-lenis-prevent
          aria-modal="true"
          aria-label={`${name} photos`}
          className="fixed inset-0 z-[60] flex flex-col bg-black/95"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm text-white/70">
              {active + 1} / {images.length}
            </span>
            <button type="button" onClick={close} aria-label="Close gallery" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={images[active]} alt={`${name} photo ${active + 1}`} fill sizes="100vw" className="object-contain" />
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => move(dir)}
                aria-label={dir < 0 ? "Previous photo" : "Next photo"}
                className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-emerald-500 ${
                  dir < 0 ? "left-3 sm:left-6" : "right-3 sm:right-6"
                }`}
              >
                <svg viewBox="0 0 20 20" className={`h-5 w-5 ${dir < 0 ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 overflow-x-auto p-4" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                  i === active ? "ring-emerald-400" : "opacity-60 ring-transparent hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
