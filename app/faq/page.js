import PageHeader from "../components/PageHeader";
import Faq from "../components/Faq";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "FAQ",
  description: "Answers to common questions about buying, selling, renting and property management with Rocklin Real Estate.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className="bg-white">
      <PageHeader
        crumb="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about buying, selling and investing with Rocklin."
      />
      <Faq hideHeading />
    </main>
  );
}
