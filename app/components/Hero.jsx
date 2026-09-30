import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[80vh] items-start overflow-hidden">
      <Image
        src="/images/sky-hero-bg.webp"
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
    

        <h1 data-animate="hero" className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Trusted Guide Finding Your Dream Home
        </h1>

        <p data-animate="hero" className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
          Finding the perfect home is more than just a transaction — it&apos;s a
          journey filled with possibilities and dreams.
        </p>

        <div data-animate="hero" className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="/properties"
            className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
          >
            Explore Properties
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
          >
            Contact an Agent
          </Link>
        </div>
      </div>

  
    </section>
  );
};

export default Hero;
