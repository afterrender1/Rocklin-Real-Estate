// Main image first, then the rest of the pool as gallery shots
const allImages = [
  "/images/property/house-5.jpg",
  "/images/property/island-retreat.jpg",
  "/images/property/house-4.jpg",
  "/images/property/serenity-tower.jpg",
  "/images/property/mountain-lodge.jpg",
  "/images/property/house-6.jpg",
];

const galleryFor = (image) => [image, ...allImages.filter((img) => img !== image)].slice(0, 5);

export const agents = {
  sarah: {
    id: "sarah",
    name: "Sarah Mitchell",
    role: "Senior Property Consultant",
    office: "Los Angeles, US",
    phone: "+1 (310) 555-0142",
    email: "sarah@rocklinutah.com",
    initials: "SM",
    image: "/images/agents/sarah.png",
    listings: 48,
    rating: 4.9,
    experience: 12,
    languages: ["English", "French"],
    bio: "Sarah has spent over a decade matching buyers with coastal and desert homes across Southern California.",
  },
  daniel: {
    id: "daniel",
    name: "Daniel Ortega",
    role: "Luxury Homes Specialist",
    office: "Marbella, ES",
    phone: "+34 612 555 019",
    email: "daniel@rocklinutah.com",
    initials: "DO",
    image: "/images/agents/daniel.png",
    listings: 36,
    rating: 4.8,
    experience: 9,
    languages: ["Spanish", "English", "German"],
    bio: "Daniel specialises in Mediterranean villas and helps international buyers navigate the Spanish market.",
  },
  lena: {
    id: "lena",
    name: "Lena Fischer",
    role: "International Sales Director",
    office: "Zurich, CH",
    phone: "+41 44 555 0187",
    email: "lena@rocklinutah.com",
    initials: "LF",
    image: "/images/agents/lena.png",
    listings: 52,
    rating: 5.0,
    experience: 15,
    languages: ["German", "English", "Italian"],
    bio: "Lena leads our international team and advises investors on premium residential property in Switzerland.",
  },
  omar: {
    id: "omar",
    name: "Omar Haddad",
    role: "Investment Advisor",
    office: "Dubai, AE",
    phone: "+971 4 555 0193",
    email: "omar@rocklinutah.com",
    initials: "OH",
    image: "/images/agents/omar.png",
    listings: 29,
    rating: 4.9,
    experience: 8,
    languages: ["Arabic", "English", "Urdu"],
    bio: "Omar helps clients build rental and resale portfolios with a focus on long-term returns.",
  },
};

export const properties = [
  {
    id: 1,
    slug: "the-poppy-1107",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1107 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 419000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/house-5.jpg",
    summary: "The Poppy floor plan featuring modern open-plan living in Rockland Townhomes.",
    description: [
      "The Poppy at Rockland Townhomes offers a thoughtful design with 1,809 square feet of comfortable living space. Designed with clean architectural lines and high-end finishes, it maximizes natural light throughout.",
      "The ground floor features an open-concept living and dining area alongside a contemporary kitchen with modern appliances. Upstairs includes three spacious bedrooms, including a private principal suite."
    ],
    features: ["Community park", "Walk-in closets", "Energy-efficient", "2-car garage", "Smart thermostat", "Quartz countertops"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
  {
    id: 2,
    slug: "the-poppy-1109",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1109 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 425000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/island-retreat.jpg",
    summary: "A premium move-in ready Poppy plan with upgraded interior selections.",
    description: [
      "Positioned beautifully within Rockland Townhomes, this Poppy home showcases custom color selections and upgraded flooring throughout the main living areas.",
      "The spacious kitchen flows seamlessly into the private patio space, making it ideal for relaxed evenings and effortless entertaining."
    ],
    features: ["Upgraded flooring", "Private patio", "Energy-efficient", "2-car garage", "Pantry storage", "High ceilings"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
  {
    id: 3,
    slug: "the-poppy-1111",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1111 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 415000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/house-4.jpg",
    summary: "Bright and airy Poppy floor plan with exceptional natural lighting.",
    description: [
      "Experience low-maintenance luxury living with this Poppy layout. Large windows frame the surrounding neighborhood views while flooding the open living spaces with light.",
      "Features a well-appointed master suite with a generous walk-in closet and dual vanity bathroom."
    ],
    features: ["Dual vanity", "Walk-in closets", "Energy-efficient", "2-car garage", "Modern lighting", "Open layout"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
  {
    id: 4,
    slug: "the-poppy-1113",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1113 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 430000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/serenity-tower.jpg",
    summary: "The Poppy plan featuring premium finishes and an expanded backyard space.",
    description: [
      "Offering one of the preferred settings in Rockland Townhomes, this property combines convenience, style, and comfort in a tight-knit community.",
      "The kitchen comes complete with modern cabinetry, an island breakfast bar, and stainless steel appliances."
    ],
    features: ["Island kitchen", "Stainless steel appliances", "Energy-efficient", "2-car garage", "Smart locks", "Landscaped front"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
  {
    id: 5,
    slug: "the-poppy-1115",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1115 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 422000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/mountain-lodge.jpg",
    summary: "Modern townhome living with elegant touches throughout the Poppy floor plan.",
    description: [
      "A harmonious blend of form and function, this home provides a flexible layout suitable for both everyday living and hosting guests.",
      "Enjoy private upstairs bedroom quarters separate from the main level entertaining areas."
    ],
    features: ["Private quarters", "Walk-in closets", "Energy-efficient", "2-car garage", "Built-in storage", "Modern fixtures"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
  {
    id: 6,
    slug: "the-poppy-1117",
    name: "Rockland Townhomes - The Poppy",
    location: "St. George",
    address: "1117 W Albertine Ln, St. George, UT 84790",
    code: "US",
    price: 435000,
    type: "Townhome",
    status: "For Sale",
    beds: 3,
    baths: 2.5,
    area: 1809,
    lotSize: 3200,
    garage: 2,
    yearBuilt: 2026,
    image: "/images/property/house-6.jpg",
    summary: "The flagship Poppy design offering luxury finishes in St. George.",
    description: [
      "The final gem of our current Poppy release, this townhome features premium trim work, custom lighting packages, and a spacious open-concept main level.",
      "Ready for move-in this coming November 2026, it represents an exceptional opportunity in Rockland Townhomes."
    ],
    features: ["Custom lighting", "Premium trim work", "Energy-efficient", "2-car garage", "Open-concept layout", "Spacious yard"],
    nearby: [
      { name: "Local Shopping Center", distance: "5 min drive" },
      { name: "Community Park", distance: "2 min walk" },
      { name: "St. George Regional Airport", distance: "15 min drive" },
      { name: "Downtown St. George", distance: "10 min drive" }
    ],
    agent: agents.sarah,
  },
].map((p) => ({ ...p, gallery: galleryFor(p.image) }));

export const getPropertyBySlug = (slug) => properties.find((p) => p.slug === slug);

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value);

export const getAgentListings = (agentId) => properties.filter((p) => p.agent.id === agentId);
