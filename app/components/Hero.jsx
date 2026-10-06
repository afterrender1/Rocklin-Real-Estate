import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[80vh] items-start overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt="Modern luxury house"
        fill
        preload
        sizes="100vw"
        data-animate="hero-bg"
        className="-z-20 object-cover object-[60%_center]"
      />
      {/* Overlays for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/85 via-slate-900/25 to-slate-900/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
        <div
          data-animate="hero"
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Local knowledge. Real experience.
        </div>

        <h1 data-animate="hero" className="mx-auto max-w-4xl text-[2.2rem] font-semibold leading-[1.1] min-[400px]:text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Real Estate. Done Right.
        </h1>

        <p data-animate="hero" className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
          Buying, building, selling or managing a home shouldn&apos;t feel complicated. We handle the details, communicate clearly, and make sure the little things get done.
        </p>

        <div data-animate="hero" className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="/properties"
            className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
          >
            View listings
          </Link>
          <Link
            href="/contact?interest=property-management"
            className="w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
          >
            Property management
          </Link>
        </div>
      </div>

  
    </section>
  );
};

export default Hero;
