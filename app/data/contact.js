// Single source for company contact details (footer, contact page)
export const contact = {
  phone: "(801) 425-3478",
  phoneHref: "tel:+18014253478",
  email: "info@rocklinutah.com",
  address: "720 S River Rd, Suite B110, St. George, UT 84790",
  mapsUrl: "https://maps.google.com/?q=720+S+River+Rd+Suite+B110+St.+George+UT+84790",
  hours: [
    ["Monday – Friday", "9 AM – 5 PM"],
    ["Saturday – Sunday", "By appointment"],
  ],
};

// Options for "I'm interested in" on the contact form
export const interests = ["Buying", "Selling", "Renting", "Property management"];

// "property-management" -> "Property management", for links like /contact?interest=property-management
export const interestFromSlug = (slug) => interests.find((i) => i.toLowerCase().replace(/\s+/g, "-") === slug);
