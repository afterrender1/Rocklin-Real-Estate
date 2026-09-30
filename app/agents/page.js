import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { agents, getAgentListings } from "../data/properties";

export const metadata = {
  title: "Our Agents | Skyline Real Estate",
  description: "Meet the Skyline agents who will guide you through buying, selling and investing.",
};

const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-label="Verified agent" role="img">
    <path
      className="fill-emerald-500"
      d="M12 1.5l2.4 1.8 3-.2.9 2.9 2.5 1.7-.9 2.9.9 2.9-2.5 1.7-.9 2.9-3-.2L12 22.5l-2.4-1.8-3 .2-.9-2.9-2.5-1.7.9-2.9-.9-2.9 2.5-1.7.9-2.9 3 .2L12 1.5Z"
    />
    <path d="m8 12.2 2.7 2.7L16.2 9.4" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Stat = ({ label, value, children }) => (
  <span className="flex items-center gap-1.5" title={label}>
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
    <span className="font-semibold text-stone-900">{value}</span>
    <span className="sr-only">{label}</span>
  </span>
);

const AgentPhoto = ({ agent }) =>
  agent.image ? (
    <Image
      src={agent.image}
      alt={agent.name}
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    // Placeholder until a photo is added in app/data/properties.js
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stone-200 via-stone-100 to-emerald-100">
      <span className="text-6xl font-bold tracking-tight text-stone-400/80">{agent.initials}</span>
    </div>
  );

export default function AgentsPage() {
  return (
    <main className="bg-stone-50">
      <PageHeader
        crumb="Our Agents"
        title="Meet Our"
        highlight="Expert Agents"
        description="Local specialists with global reach, ready to guide you from first viewing to final signature."
      />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-20">
        {Object.values(agents).map((agent) => {
          const listings = getAgentListings(agent.id);
          return (
            <article
              key={agent.id}
              data-animate="fade-up"
              className="group flex flex-col rounded-[2rem] border border-stone-200/80 bg-white p-2.5 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-900/10"
            >
              {/* Photo */}
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-3xl bg-stone-100 ring-1 ring-stone-900/5">
                <AgentPhoto agent={agent} />
                <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur">
                  {agent.office}
                </span>
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-xs font-semibold text-stone-800 backdrop-blur">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                  {agent.rating.toFixed(1)}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-3.5 pb-3 pt-5">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-stone-900">
                  <span className="truncate">{agent.name}</span>
                  <VerifiedBadge />
                </h2>
                <p className="mt-1 text-sm font-medium text-emerald-700">{agent.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{agent.bio}</p>

                {listings.length > 0 && (
                  <p className="mt-3 text-xs text-stone-500">
                    Listing:{" "}
                    {listings.map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && ", "}
                        <Link href={`/properties/${p.slug}`} className="font-medium text-stone-700 underline-offset-2 hover:text-emerald-700 hover:underline">
                          {p.name}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <div className="flex items-center gap-4 text-sm">
                    <Stat label="homes sold" value={agent.listings}>
                      <path d="M3 10.5 12 4l9 6.5V20H3z" />
                      <path d="M9 20v-6h6v6" />
                    </Stat>
                    <Stat label="years of experience" value={`${agent.experience}y`}>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </Stat>
                  </div>
                  <a
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-semibold text-stone-900 shadow-inner shadow-white transition-colors hover:bg-emerald-500 hover:text-white"
                  >
                    Contact
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 14 14 6M7 6h7v7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
