import PageHeader from "../components/PageHeader";
import AgentCard from "../components/AgentCard";
import { getAgents } from "../data/agents";

export const metadata = {
  title: "Our Agents | Rocklin Real Estate",
  description: "Meet the Rocklin agents who will guide you through buying, selling and investing.",
};

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
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </main>
  );
}
