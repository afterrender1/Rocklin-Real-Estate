import LegalPage from "../components/LegalPage";
import { termsAndConditions } from "../data/legal";

export const metadata = {
  title: "Terms and Conditions | Rocklin Real Estate",
  description: "The terms that apply when you use the Rocklin Real Estate website and SMS program.",
};

export default function TermsPage() {
  return <LegalPage {...termsAndConditions} />;
}
