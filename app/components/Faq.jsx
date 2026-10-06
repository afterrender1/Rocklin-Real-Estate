"use client";

import { useState } from "react";
import Link from "next/link";
import { faqCategories } from "../data/faqs";

// Hand-drawn style doodles, purely decorative
const ChatDoodle = ({ className = "" }) => (
  <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M6 8c0-3 2-5 5-5h18c3 0 5 2 5 5v9c0 3-2 5-5 5H17l-7 6 1-6c-3 0-5-2-5-5V8Z" />
    <path d="M30 22h16c3 0 5 2 5 5v8c0 3-2 5-5 5h-2l1 5-6-5H30c-3 0-5-2-5-5v-8" />
    <circle cx="33" cy="31" r="0.8" fill="currentColor" />
    <circle cx="38" cy="31" r="0.8" fill="currentColor" />
    <circle cx="43" cy="31" r="0.8" fill="currentColor" />
  </svg>
);

const QuestionDoodle = ({ className = "" }) => (
  <svg viewBox="0 0 80 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 26c-9 0-15 6-15 14 0 9 7 15 15 15 9 0 15-6 15-15 0-8-7-14-15-14Z" />
    <path d="M18 36c0-3 2-5 5-5s4 2 4 4c0 3-4 3-4 7" />
    <circle cx="23" cy="47" r="0.9" fill="currentColor" />
    <path d="M52 4c-8 1-14 8-13 17 1 10 9 16 18 15 9-1 16-9 14-18-1-9-10-15-19-14Z" />
    <path d="M52 15l6 1M55 16l-2 11M51 27h5" />
    <circle cx="59" cy="11" r="0.9" fill="currentColor" />
  </svg>
);

const SparkleDoodle = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 3c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9Z" />
    <path d="M7 20c.5 3 1.5 4 4 4.5-2.5.5-3.5 1.5-4 4.5-.5-3-1.5-4-4-4.5 2.5-.5 3.5-1.5 4-4.5Z" />
  </svg>
);

const Faq = ({ hideHeading = false }) => {
  const [activeCat, setActiveCat] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState(0);

  const category = faqCategories.find((c) => c.id === activeCat);

  const selectCategory = (id) => {
    setActiveCat(id);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Doodles */}
      <ChatDoodle className="absolute left-[8%] top-40 hidden h-12 w-16 -rotate-6 text-stone-800 lg:block" />
      <QuestionDoodle className="absolute right-[10%] top-12 hidden h-16 w-20 text-stone-800 md:block" />
      <SparkleDoodle className="absolute bottom-10 right-6 hidden h-8 w-8 text-orange-600 sm:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        {!hideHeading && (
          <div data-animate="fade-up" className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm tracking-wide text-orange-700">
              Got Questions?
            </span>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="mt-4 text-base text-stone-500 sm:text-lg">
              Everything you need to know about buying, selling and investing with Rocklin.
            </p>
          </div>
        )}

        <div className={`grid grid-cols-[minmax(0,1fr)] gap-6 sm:gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 ${hideHeading ? "" : "mt-12 sm:mt-16"}`}>
          {/* Categories */}
          <nav data-animate="left" aria-label="FAQ categories" className="relative min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 hidden text-sm font-semibold uppercase tracking-wider text-orange-700 lg:block">Categories</p>
            <ul className="-mx-4 flex snap-x gap-2 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {faqCategories.map((c) => {
                const active = c.id === activeCat;
                return (
                  <li key={c.id} className="shrink-0 snap-start lg:shrink">
                    <button
                      type="button"
                      onClick={(e) => {
                        selectCategory(c.id);
                        // On phones, slide the tapped pill fully into view
                        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                      }}
                      aria-current={active ? "true" : undefined}
                      className={`w-full whitespace-nowrap rounded-full border px-4 py-2 text-left text-sm transition-colors lg:rounded-none lg:border-0 lg:border-l-2 lg:py-2.5 ${
                        active
                          ? "border-orange-500 bg-orange-50 font-semibold text-orange-800 lg:bg-transparent lg:text-stone-900"
                          : "border-stone-200 text-stone-500 hover:text-orange-700 lg:border-transparent"
                      }`}
                    >
                      {c.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* Hint that the pill row scrolls sideways */}
            <span aria-hidden="true" className="pointer-events-none absolute -right-4 top-0 h-[calc(100%-0.5rem)] w-10 bg-gradient-to-l from-white to-transparent sm:-right-6 lg:hidden" />
          </nav>

          {/* Questions */}
          <div data-animate="fade-up" className="min-w-0">
            <ul key={activeCat} className="animate-fade-in space-y-3">
              {category.faqs.map((item, i) => {
                const open = openIndex === i;
                const panelId = `faq-${activeCat}-${i}`;
                return (
                  <li
                    key={item.q}
                    className={`rounded-2xl border transition-colors duration-300 ${
                      open ? "border-orange-400 bg-white shadow-lg shadow-orange-900/5 ring-4 ring-orange-500/10" : "border-transparent bg-stone-100 hover:bg-stone-200/60"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? -1 : i)}
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:items-center sm:gap-4 sm:px-6 sm:py-5"
                      >
                        <span className={`min-w-0 text-[15px] leading-snug sm:text-lg ${open ? "font-semibold text-stone-900" : "text-stone-700"}`}>{item.q}</span>
                        <span
                          className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                            open ? "bg-orange-500 text-white" : "bg-white text-stone-700"
                          }`}
                        >
                          <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                          <span className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ${open ? "rotate-90 scale-0" : ""}`} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 text-sm leading-relaxed text-stone-600 sm:px-6 sm:pb-6 sm:text-base">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Still have a question */}
            <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-stone-900 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6" />
                    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <p className="text-lg font-semibold text-white">Still have a question?</p>
                  <p className="mt-1 text-sm text-white/60">Can&apos;t find your answer? Our agents are happy to help.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition sm:w-auto hover:bg-orange-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
