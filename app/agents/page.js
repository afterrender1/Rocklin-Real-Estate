import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { agents, getAgentListings } from "../data/properties";

export const metadata = {
  title: "Our Agents | Skyline Real Estate",
  description: "Meet the Skyline agents who will guide you through buying, selling and investing.",
};

export default function AgentsPage() {
  return (
    <main className="bg-stone-50">
      <PageHeader
        crumb="Our Agents"
        title="Meet Our"
        highlight="Expert Agents"
        description="Local specialists with global reach, ready to guide you from first viewing to final signature."
      />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:px-8 lg:py-20 xl:grid-cols-4">
        {Object.values(agents).map((agent) => {
          const listings = getAgentListings(agent.id);
          return (
            <article
              key={agent.id}
              data-animate="fade-up"
              className="group flex flex-col rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-xl font-bold text-white">
                  {agent.initials}
                </div>
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-semibold text-stone-900">{agent.name}</h2>
                  <p className="truncate text-sm text-stone-500">{agent.role}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">{agent.bio}</p>

              <dl className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-stone-50 p-3 text-center">
                <div>
                  <dt className="text-xs text-stone-500">Rating</dt>
                  <dd className="mt-0.5 flex items-center justify-center gap-1 font-semibold text-stone-900">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400" aria-hidden="true">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                    {agent.rating.toFixed(1)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-stone-500">Sold</dt>
                  <dd className="mt-0.5 font-semibold text-stone-900">{agent.listings}</dd>
                </div>
                <div>
                  <dt className="text-xs text-stone-500">Years</dt>
                  <dd className="mt-0.5 font-semibold text-stone-900">{agent.experience}</dd>
                </div>
              </dl>

              <ul className="mt-5 space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {agent.office}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {agent.languages.join(", ")}
                </li>
              </ul>

              {listings.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Current listings</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {listings.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/properties/${p.slug}`}
                          className="inline-block rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-700 transition-colors hover:border-emerald-400 hover:text-emerald-700"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                <a
                  href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                  className="rounded-xl border border-stone-200 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:border-emerald-500 hover:text-emerald-700"
                >
                  Call
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="rounded-xl bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Email
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
