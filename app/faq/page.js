import PageHeader from "../components/PageHeader";
import Faq from "../components/Faq";

export const metadata = {
  title: "FAQ | Skyline Real Estate",
  description: "Answers to common questions about buying, selling and investing with Skyline.",
};

export default function FaqPage() {
  return (
    <main className="bg-white">
      <PageHeader
        crumb="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about buying, selling and investing with Skyline."
      />
      <Faq hideHeading />
    </main>
  );
}
