import LegalPage from "../components/LegalPage";
import { privacyPolicy } from "../data/legal";
import { pageMetadata } from "../data/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Rocklin Real Estate collects, uses and protects your personal information, including text message consent.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage {...privacyPolicy} />;
}
