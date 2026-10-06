// Agents come from the backend when AGENTS_API_URL is set, otherwise from the static list below.
// The API should return an array in the same shape as `staticAgents`:
// [{ id, name, role, location, phone, email, image? }]

const staticAgents = [
  {
    id: "damon-stewart",
    name: "Damon Stewart",
    role: "Sales Manager / Broker",
    location: "St. George, Utah",
    phone: "(801) 425-3478",
    email: "damon@rocklinutah.com",
  },
  {
    id: "mandy-greenwood",
    name: "Mandy Greenwood",
    role: "Associate Broker",
    location: "Park City, Utah",
    phone: "(801) 473-7023",
    email: "gcd.mandy@gmail.com",
  },
  {
    id: "karen-march",
    name: "Karen March",
    role: "Agent",
    location: "Park City, Utah",
    phone: "(435) 800-5185",
    email: "kepm11@yahoo.com",
  },
  {
    id: "kristen-brooksby",
    name: "Kristen Brooksby",
    role: "Agent",
    location: "St. George, Utah",
    phone: "(435) 229-4468",
    email: "brooksby@mac.com",
  },
  {
    id: "kaylynn-gorder",
    name: "Kaylynn Gorder",
    role: "Agent",
    location: "St. George, Utah",
    phone: "(208) 705-5214",
    email: "kaylynngorder@outlook.com",
  },
  {
    id: "michael-nelson",
    name: "Michael Nelson",
    role: "Agent",
    location: "Park City, Utah",
    phone: "(801) 891-8329",
    email: "m.g.nelson@me.com",
  },
];

const initialsOf = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// Fills in fields the UI relies on, whatever the source
const normalize = (agent) => ({
  ...agent,
  image: agent.image || null,
  initials: initialsOf(agent.name),
});

export async function getAgents() {
  const url = process.env.AGENTS_API_URL;
  if (url) {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) return (await res.json()).map(normalize);
    } catch {
      // Fall back to the static list if the API is unreachable
    }
  }
  return staticAgents.map(normalize);
}

export async function getAgentById(id) {
  const agents = await getAgents();
  return agents.find((a) => a.id === id) ?? null;
}
