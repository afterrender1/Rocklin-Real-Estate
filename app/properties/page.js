import ListingsPage from "../components/ListingsPage";
import { properties } from "../data/properties";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "Homes for Sale & Rent in St. George, Utah",
  description:
    "Browse new-construction townhomes for sale and rent in St. George, Utah, including Rockland Townhomes, from Rocklin Real Estate.",
  path: "/properties",
});

export default function PropertiesPage() {
  return (
    <ListingsPage
      active="/properties"
      crumb="Properties"
      title="All"
      highlight="Properties"
      description={`${properties.length} new-construction homes for sale and rent in St. George, Utah.`}
      items={properties}
    />
  );
}
