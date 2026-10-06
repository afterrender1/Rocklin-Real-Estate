import { properties } from "./data/properties";
import { absoluteUrl } from "./data/site";

const pages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/properties", changeFrequency: "daily", priority: 0.9 },
  { path: "/rentals", changeFrequency: "daily", priority: 0.8 },
  { path: "/agents", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap() {
  const lastModified = new Date();
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...properties.map((p) => ({
      url: absoluteUrl(`/properties/${p.slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [absoluteUrl(p.image)],
    })),
  ];
}
