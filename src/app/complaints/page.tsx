import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Complaints & Corrections",
  description: "Submit a complaint or correction request to ABA Quality Index. Dispute your score, report inaccurate data, or raise concerns about a listed provider.",
};

export default function ComplaintsPage() {
  return (
    <PolicyPage title="Complaints & Corrections">
      <h2>How Can Providers Dispute Their Score or Listing?</h2>
      <p>
        ABA Quality Index maintains a formal process for providers who believe their listing contains inaccurate information or that their ABA Quality Score does not reflect current data. Providers can submit a correction request by emailing info@abaqualityindex.com with the subject line &ldquo;Score Dispute&rdquo; and including:
      </p>
      <ul>
        <li>The provider name and profile URL on ABA Quality Index</li>
        <li>The specific data point(s) believed to be inaccurate</li>
        <li>Supporting documentation (e.g., updated BHCOE certificate, insurance panel confirmation, corrected business information)</li>
      </ul>
      <p>
        ABA Quality Index reviews all dispute submissions within 10 business days. If the correction is verified, the listing and score are updated promptly. Providers are notified of the outcome by email.
      </p>

      <h2>How Can Families Report Concerns About a Listed Provider?</h2>
      <p>
        Families who have concerns about a provider listed on ABA Quality Index can submit a report by emailing info@abaqualityindex.com with the subject line &ldquo;Provider Concern.&rdquo; Include the provider name and a description of the concern. ABA Quality Index will review the report and, if warranted, investigate using publicly available information. ABA Quality Index does not mediate disputes between families and providers but may update a listing if publicly verifiable information supports a change.
      </p>

      <h2>How Can Users Report Errors on the Site?</h2>
      <p>
        If you notice incorrect information on any ABA Quality Index page, including outdated business details, broken links, or formatting issues, email info@abaqualityindex.com with the page URL and a description of the issue. ABA Quality Index addresses reported errors within 5 business days.
      </p>

      <h2>How Are Complaints Handled?</h2>
      <p>
        ABA Quality Index logs all complaints and correction requests. Each submission receives a confirmation email within 1 business day. Investigations are completed within 10 business days for data disputes and 15 business days for provider concern reports. ABA Quality Index communicates the outcome to the submitter by email upon resolution.
      </p>
    </PolicyPage>
  );
}
