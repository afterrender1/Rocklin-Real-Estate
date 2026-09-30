const SearchVisual = () => (
  <div className="w-full max-w-[220px] rounded-2xl bg-white p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
    <div className="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-2">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-stone-400">
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.3-4.3" />
      </svg>
      <span className="h-2 w-24 rounded-full bg-stone-200" />
    </div>
    <div className="mt-3 space-y-2">
      {[["w-3/4", "w-1/2"], ["w-2/3", "w-1/3"]].map(([a, b], i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-8 w-8 shrink-0 rounded-lg bg-stone-200" />
          <div className="flex-1 space-y-1.5">
            <span className={`block h-2 rounded-full bg-stone-200 ${a}`} />
            <span className={`block h-2 rounded-full bg-stone-100 ${b}`} />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 h-7 rounded-full bg-emerald-600" />
  </div>
);

const VisitVisual = () => (
  <div className="relative w-full max-w-[220px]">
    <div className="rounded-2xl bg-white p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between">
        <span className="h-2 w-16 rounded-full bg-stone-200" />
        <span className="h-2 w-6 rounded-full bg-stone-100" />
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }).map((_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-md ${i === 10 ? "bg-emerald-600" : "bg-stone-100"}`}
          />
        ))}
      </div>
    </div>
    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/40 transition-transform duration-500 group-hover:scale-110">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="m5 12 5 5 9-10" />
      </svg>
    </span>
  </div>
);

const GuidanceVisual = () => (
  <div className="flex w-full max-w-[230px] flex-col items-center gap-2 text-xs sm:text-[13px]">
    <span className="-rotate-3 self-start rounded-lg bg-white px-3 py-1.5 text-stone-700 shadow-sm transition-transform duration-500 group-hover:-rotate-6">
      Documents verified
    </span>
    <span className="z-10 rounded-lg bg-emerald-600 px-3 py-1.5 font-medium text-white shadow-lg shadow-emerald-600/30 transition-transform duration-500 group-hover:scale-105">
      Best Price Negotiated
    </span>
    <span className="rotate-3 self-end rounded-lg bg-white px-3 py-1.5 text-stone-700 shadow-sm transition-transform duration-500 group-hover:rotate-6">
      Legal support
    </span>
  </div>
);

const KeysVisual = () => (
  <div className="relative flex items-center">
    <div className="relative z-10 grid h-20 w-20 -rotate-6 place-items-center rounded-2xl bg-white shadow-md transition-transform duration-500 group-hover:-rotate-12">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 text-emerald-600">
        <circle cx="8" cy="15" r="4" />
        <path d="m10.8 12.2 8.2-8.2M16 7l2 2M14 9l1.5 1.5" />
      </svg>
    </div>
    <div className="-ml-4 grid h-20 w-20 rotate-6 place-items-center rounded-2xl bg-white/70 shadow-sm transition-transform duration-500 group-hover:rotate-12">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-stone-300">
        <path d="M3 10.5 12 4l9 6.5V20H3z" />
        <path d="M9 20v-6h6v6" />
      </svg>
    </div>
  </div>
);

const steps = [
  { label: "Step One", title: "Search Your Property", tag: "Easy Search!", Visual: SearchVisual },
  { label: "Step Two", title: "Book a Site Visit", tag: "Quick Booking!", Visual: VisitVisual },
  { label: "Step Three", title: "Get Expert Guidance", tag: "Trusted Advice!", Visual: GuidanceVisual },
  { label: "Step Four", title: "Move Into Your Home", tag: "Keys in Hand!", Visual: KeysVisual },
];

const Connector = ({ className = "" }) => (
  <span className={`absolute z-10 grid h-6 w-6 place-items-center rounded-full border-4 border-white bg-emerald-100 ring-1 ring-emerald-200 ${className}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
  </span>
);

const WorkProcess = () => {
  return (
    <section id="next" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-animate="fade-up" className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm tracking-wide text-emerald-700">
            How It Works
          </span>
          <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
            Your Path to Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-base text-stone-500 sm:text-lg">
            <p>
              A simpler, smarter way to buy, rent, or invest in property.
            </p>
            <p className="leading-relaxed text-stone-500">
              At <strong className="font-semibold text-stone-800">Skyline Real Estate</strong>, we believe finding your perfect property should be as seamless as living in it. Our dedicated experts bring years of local market knowledge to ensure your real estate journey is effortless, transparent, and rewarding from the first search to the final signature.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps.map(({ label, title, tag, Visual }, i) => (
            <li
              key={label}
              data-animate="fade-up"
              className="group relative flex min-h-[340px] flex-col rounded-3xl border border-stone-200/70 bg-stone-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50/40 hover:shadow-xl hover:shadow-emerald-900/5 hover:ring-4 hover:ring-emerald-500/10 sm:p-6"
            >
              <p className="text-sm uppercase tracking-wider text-stone-400 transition-colors group-hover:text-emerald-600">{label}</p>
              <h3 className="mt-2 text-lg font-medium leading-snug text-stone-900 sm:text-xl">{title}</h3>

              <div className="flex flex-1 items-center justify-center py-6">
                <Visual />
              </div>

              <span className="inline-flex items-center gap-1.5 self-start rounded-lg border border-transparent bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {tag}
              </span>

              {i < steps.length - 1 && (
                <>
                  {/* Vertical connector on mobile */}
                  <Connector className="-bottom-[22px] left-1/2 -translate-x-1/2 sm:hidden" />
                  {/* Horizontal connector on desktop */}
                  <Connector className="-right-[20px] top-1/2 hidden -translate-y-1/2 lg:grid" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkProcess;
