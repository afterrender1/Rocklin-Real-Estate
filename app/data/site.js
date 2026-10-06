import { contact } from "./contact";

// Override with NEXT_PUBLIC_SITE_URL for staging/preview deployments
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.rocklinutah.com").replace(/\/$/, "");

export const site = {
  name: "Rocklin Real Estate",
  description:
    "New-construction homes for buyers and full-service property management for owners, across Southern and Northern Utah.",
  // Set to the real page, e.g. "https://www.facebook.com/rocklinrealestate"
  facebook: "",
  keywords: [
    "St. George real estate",
    "St. George homes for sale",
    "St. George townhomes",
    "Utah new construction homes",
    "Southern Utah real estate",
    "Park City real estate",
    "Utah property management",
    "St. George rentals",
    "Rocklin Real Estate",
  ],
};

export const absoluteUrl = (path = "/") => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

// Per-page metadata: title, description, canonical URL and matching social tags
// A page's own openGraph replaces the root one, so the default share image is set here too
const defaultImages = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }];

export const pageMetadata = ({ title, description, path, images = defaultImages }) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: path,
    title: `${title} | ${site.name}`,
    description,
    images,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${site.name}`,
    description,
    images,
  },
});

// Safe JSON-LD string: escapes "<" so content can't close the script tag
export const jsonLd = (data) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

const [street, locality, regionPostal] = contact.address.split(", ");
const [region, postalCode] = regionPostal.split(" ");

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  description: site.description,
  url: siteUrl,
  logo: absoluteUrl("/logo/rocklin-logo-dark.webp"),
  image: absoluteUrl("/opengraph-image.png"),
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: street,
    addressLocality: locality,
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "St. George, Utah" },
    { "@type": "City", name: "Park City, Utah" },
    { "@type": "State", name: "Utah" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  ...(site.facebook && { sameAs: [site.facebook] }),
};
