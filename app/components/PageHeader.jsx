import Link from "next/link";

// Dark header band used at the top of inner pages
const PageHeader = ({ title, highlight, description, crumb }) => (
  <section className="relative overflow-hidden bg-stone-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav data-animate="hero" aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/60">
        <Link href="/" className="transition-colors hover:text-emerald-300">Home</Link>
        <span>/</span>
        <span className="text-white">{crumb}</span>
      </nav>
      <h1 data-animate="hero" className="mt-5 max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">{highlight}</span>
        )}
      </h1>
      {description && (
        <p data-animate="hero" className="mt-4 max-w-xl text-white/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
