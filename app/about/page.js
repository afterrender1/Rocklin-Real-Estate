import Image from "next/image";
import PageHeader from "../components/PageHeader";
import AgentCard, { mailIcon, phoneIcon, telHref } from "../components/AgentCard";
import { founder, intro, team, values, valuesIntro, visionMission } from "../data/about";
import { getAgents } from "../data/agents";

export const metadata = {
  title: "About Us | Rocklin Real Estate",
  description: intro.text,
};

const svg = (d) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const valueIcons = {
  integrity: svg(<><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>),
  service: svg(<path d="M12 3l2.7 5.5 6 .9-4.4 4.2 1 6L12 16.8 6.7 19.6l1-6L3.3 9.4l6-.9L12 3Z" />),
  innovation: svg(<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" /></>),
  community: svg(<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 0 1 5 5" /></>),
  vision: svg(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>),
  owners: svg(<><path d="M3 10.5 12 4l9 6.5V20H3z" /><path d="M9 20v-6h6v6" /></>),
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
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-animate="fade-up" className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight min-[400px]:text-3xl text-stone-900 sm:text-4xl">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">values</span>
            </h2>
            <p className="mt-4 text-stone-500 sm:text-lg">{valuesIntro}</p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li
                key={v.id}
                data-animate="fade-up"
                className="group rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-900/5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-orange-700 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  {valueIcons[v.id]}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-stone-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{v.text}</p>
              </li>
            ))}
          </ul>
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
