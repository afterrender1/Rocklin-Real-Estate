import LegalPage from "../components/LegalPage";
import { privacyPolicy } from "../data/legal";

export const metadata = {
  title: "Privacy Policy | Rocklin Real Estate",
  description: "How Rocklin Real Estate collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
