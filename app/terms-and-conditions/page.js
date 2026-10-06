import LegalPage from "../components/LegalPage";
import { termsAndConditions } from "../data/legal";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply when you use the Rocklin Real Estate website and SMS program.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <LegalPage {...termsAndConditions} />;
}
