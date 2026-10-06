import ListingsPage from "../components/ListingsPage";
import { isForRent, properties } from "../data/properties";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "Homes for Rent in St. George, Utah",
  description: "New-construction townhomes for rent in St. George, Utah, managed by Rocklin Real Estate.",
  path: "/rentals",
});

const rentals = properties.filter(isForRent);

export default function RentalsPage() {
  return (
    <ListingsPage
      active="/rentals"
      crumb="Rentals"
      title="Homes for"
      highlight="Rent"
      description={`${rentals.length} new-construction ${rentals.length === 1 ? "home" : "homes"} for rent in St. George, Utah.`}
      items={rentals}
    />
  );
}
