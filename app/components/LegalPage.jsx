import Link from "next/link";

// Plain, readable layout shared by the privacy policy and terms pages
const LegalPage = ({ title, effectiveDate, sections }) => (
  <main className="bg-white">
    {/* Solid strip behind the transparent navbar */}
    <div className="h-20 bg-stone-950 sm:h-24" />

    <article className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-900 hover:underline">Home</Link>
        <span aria-hidden="true">›</span>
        <span className="text-stone-900">{title}</span>
      </nav>

      <p className="mt-8 text-sm font-medium uppercase tracking-wider text-orange-700">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-stone-500">Effective date: {effectiveDate}</p>

      <div className="mt-10 divide-y divide-stone-200 border-t border-stone-200">
        {sections.map((s, i) => (
          <section key={s.heading} className="py-8">
            <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
              {i + 1}. {s.heading}
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-7 text-stone-600">
              {s.body.map((block, j) =>
                Array.isArray(block) ? (
                  <ul key={j} className="list-disc space-y-1.5 pl-5 marker:text-stone-400">
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={j}>{block}</p>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  </main>
);

export default LegalPage;
