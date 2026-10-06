import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { getAgentListings } from "../data/properties";
import { getAgents } from "../data/agents";

export const metadata = {
  title: "Our Agents | Rocklin Real Estate",
  description: "Meet the Rocklin agents who will guide you through buying, selling and investing.",
};

const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-label="Verified agent" role="img">
    <path
      className="fill-orange-500"
      d="M12 1.5l2.4 1.8 3-.2.9 2.9 2.5 1.7-.9 2.9.9 2.9-2.5 1.7-.9 2.9-3-.2L12 22.5l-2.4-1.8-3 .2-.9-2.9-2.5-1.7.9-2.9-.9-2.9 2.5-1.7.9-2.9 3 .2L12 1.5Z"
    />
    <path d="m8 12.2 2.7 2.7L16.2 9.4" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const icon = (d) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const phoneIcon = icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />);
const mailIcon = icon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);

export default async function AgentsPage() {
  const agents = await getAgents();

  return (
    <main className="bg-stone-50">
      <PageHeader
        crumb="Our Agents"
        title="Meet Our"
        highlight="Expert Agents"
        description="Local specialists with global reach, ready to guide you from first viewing to final signature."
      />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-20">
        {agents.map((agent) => {
          const listings = getAgentListings(agent.id);
          return (
            <article
              key={agent.id}
              data-animate="fade-up"
              className="group flex flex-col rounded-3xl border border-stone-200/80 bg-white p-6 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-900/10"
            >
              <div className="flex flex-1 flex-col">
                <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-stone-900">
                  <span className="truncate">{agent.name}</span>
                  <VerifiedBadge />
                </h2>
                <p className="mt-1 text-sm font-medium text-orange-700">{agent.role}</p>
                {agent.location && <p className="mt-0.5 text-sm text-stone-500">{agent.location}</p>}

                {listings.length > 0 && (
                  <p className="mt-3 text-xs text-stone-500">
                    {listings.length} active {listings.length === 1 ? "listing" : "listings"} ·{" "}
                    <Link href="/properties" className="font-medium text-stone-700 underline-offset-2 hover:text-orange-700 hover:underline">
                      View listings
                    </Link>
                  </p>
                )}

                <div className="mt-auto grid gap-2 pt-5 text-sm">
                  <a
                    href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2.5 rounded-xl border border-stone-200 px-3.5 py-2.5 font-medium text-stone-700 transition-colors hover:border-orange-500 hover:text-orange-700"
                  >
                    {phoneIcon}
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2.5 rounded-xl border border-stone-200 px-3.5 py-2.5 font-medium text-stone-700 transition-colors hover:border-orange-500 hover:text-orange-700"
                  >
                    {mailIcon}
                    <span className="truncate">{agent.email}</span>
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
