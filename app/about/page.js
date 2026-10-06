import Image from "next/image";
import PageHeader from "../components/PageHeader";
import AgentCard, { mailIcon, phoneIcon, telHref } from "../components/AgentCard";
import { founder, intro, team, values, valuesIntro, visionMission } from "../data/about";
import { getAgents } from "../data/agents";

export const metadata = {
  title: "About Us | Rocklin Real Estate",
  description: intro.text,
};

const initials = founder.name.split(" ").map((p) => p[0]).join("");

const contactClass =
  "inline-flex items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-orange-500 hover:text-orange-700";

export default async function AboutPage() {
  const agents = await getAgents();
  // Damon is featured above, so the team grid shows everyone else
  const teamAgents = agents.filter((a) => a.email !== founder.email);

  return (
    <main className="bg-white">
      <PageHeader crumb={intro.eyebrow} title={intro.title} highlight={intro.highlight} description={intro.text} />

      {/* Vision & mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {visionMission.map((item) => (
            <div key={item.title} data-animate="fade-up" className="rounded-3xl border border-stone-200 p-7 sm:p-9">
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-stone-600">{valuesIntro}</p>
          </div>

          <ol className="grid border-t border-stone-300 sm:grid-cols-2 sm:gap-x-12">
            {values.map((v, i) => (
              <li key={v.id} className="flex gap-5 border-b border-stone-300 py-6">
                <span className="w-6 shrink-0 pt-0.5 text-sm font-medium tabular-nums text-orange-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder */}
      <section id="damon-stewart" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
          <div data-animate="left" className="relative aspect-square overflow-hidden rounded-3xl lg:sticky lg:top-28">
            {founder.image ? (
              <Image src={founder.image} alt={founder.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain object-bottom" />
            ) : (
              // Initials until founder.image is set in app/data/about.js
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stone-200 via-stone-100 to-orange-100">
                <span className="text-7xl font-bold tracking-tight text-stone-400/80">{initials}</span>
              </div>
            )}
          </div>

          <div data-animate="fade-up">
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl">
              Meet <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">{founder.name}</span>
            </h2>
            <p className="mt-3 font-medium text-orange-700">{founder.role}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-stone-600">
              {founder.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref(founder.phone)} className={contactClass}>
                {phoneIcon}
                {founder.phone}
              </a>
              <a href={`mailto:${founder.email}`} className={contactClass}>
                {mailIcon}
                {founder.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-animate="fade-up" className="max-w-2xl">
            <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm tracking-wide text-orange-700">
              Our agents
            </span>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl">
              {team.title}
            </h2>
            <p className="mt-4 text-stone-500 sm:text-lg">{team.text}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} as="h3" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
