import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ABA Quality Index privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <h2>What Information Does ABA Quality Index Collect?</h2>
      <p>
        ABA Quality Index collects two categories of information: publicly available business data and voluntarily submitted personal information. Business data includes clinic names, addresses, phone numbers, Google review ratings, and other details available through Google Business Profiles and public directories. Personal information is collected only when individuals voluntarily submit it, such as when a provider claims a profile or a parent submits a satisfaction survey.
      </p>

      <h2>How Does ABA Quality Index Use Personal Information?</h2>
      <p>
        ABA Quality Index uses personal information solely to operate the rating platform. Provider contact information is used to verify profile claims and communicate account updates. Parent survey responses are anonymized and aggregated into satisfaction scores. ABA Quality Index does not sell personal information to third parties. ABA Quality Index does not share individual survey responses with providers.
      </p>

      <h2>What Information Is Displayed Publicly?</h2>
      <p>
        Business information that is already publicly available (clinic name, address, phone number, Google reviews) is displayed on provider profile pages. Provider-submitted enhancements (photos, team bios, insurance lists) are displayed on claimed profiles at the provider&apos;s discretion. Individual parent survey responses are never displayed publicly. Only aggregated satisfaction scores appear on provider profiles.
      </p>

      <h2>How Does ABA Quality Index Protect Data?</h2>
      <p>
        ABA Quality Index uses industry-standard security measures to protect stored data, including encrypted connections (HTTPS), secure data storage, and access controls limiting data access to authorized personnel. ABA Quality Index does not store sensitive health information about patients or families. No protected health information (PHI) as defined by HIPAA is collected or stored by ABA Quality Index.
      </p>

      <h2>Does ABA Quality Index Use Cookies?</h2>
      <p>
        ABA Quality Index uses cookies for basic site functionality and analytics. See the <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a> for details on what cookies are used and how to manage them.
      </p>

      <h2>How Can Users Request Data Deletion?</h2>
      <p>
        Individuals may request deletion of their personal information by contacting ABA Quality Index at info@abaqualityindex.com. Requests are processed within 30 days. Publicly available business data sourced from Google Business Profiles and public directories is not subject to individual deletion requests, as this information is independently available from its original source.
      </p>

      <h2>How Will Changes to This Policy Be Communicated?</h2>
      <p>
        ABA Quality Index will post any material changes to this Privacy Policy on this page with an updated revision date. Continued use of the site after changes are posted constitutes acceptance of the updated policy.
      </p>
    </PolicyPage>
  );
}
