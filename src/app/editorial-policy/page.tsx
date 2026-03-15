import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "ABA Quality Index editorial policy. How rankings are determined, editorial independence, and disclosure of paid partnerships.",
};

export default function EditorialPolicyPage() {
  return (
    <PolicyPage title="Editorial Policy">
      <h2>How Does ABA Quality Index Maintain Editorial Independence?</h2>
      <p>
        ABA Quality Index operates with a strict separation between its rating methodology and its revenue operations. The ABA Quality Score is determined entirely by publicly available data, verified credentials, and parent feedback. No provider can pay to change their score. Editorial decisions about scoring criteria, weighting, and data sources are made independently of commercial relationships.
      </p>

      <h2>How Are Rankings Determined?</h2>
      <p>
        ABA Quality Index ranks providers within each city and state page based on their ABA Quality Score. The scoring methodology is described in full on the <a href="/methodology" className="text-primary hover:underline">Methodology</a> page. Providers are scored across seven categories: Google reviews, staff credentials, insurance acceptance, BHCOE accreditation, years in operation, parent satisfaction, and responsiveness. Each category has a defined point allocation totaling 100 points.
      </p>

      <h2>How Are Paid Partnerships Disclosed?</h2>
      <p>
        ABA Quality Index offers optional paid services for providers, including enhanced profiles, verified badges, and featured placement. All paid placements are clearly labeled on every page where they appear. The labels used include &ldquo;Sponsored,&rdquo; &ldquo;Featured Partner,&rdquo; and &ldquo;Verified.&rdquo; These labels indicate a commercial relationship between the provider and ABA Quality Index. Paid partnerships do not influence the ABA Quality Score.
      </p>

      <h2>What Content Standards Does ABA Quality Index Follow?</h2>
      <p>
        ABA Quality Index follows these editorial standards for all published content:
      </p>
      <ul>
        <li>All claims are supported by verifiable data or clearly labeled as editorial perspective</li>
        <li>Provider information is sourced from public records, verified submissions, or both</li>
        <li>ABA Quality Index does not publish negative editorial commentary about individual providers</li>
        <li>Content is reviewed for accuracy before publication and updated when new data becomes available</li>
        <li>ABA Quality Index does not accept paid content, sponsored articles, or advertorials without clear disclosure</li>
      </ul>

      <h2>How Does ABA Quality Index Handle Conflicts of Interest?</h2>
      <p>
        ABA Quality Index discloses any material relationships that could create a conflict of interest. If a member of the ABA Quality Index team has a financial or professional relationship with a listed provider, that relationship is disclosed and the individual is recused from scoring decisions related to that provider.
      </p>

      <h2>How Can Users Report Editorial Concerns?</h2>
      <p>
        Users who believe ABA Quality Index has published inaccurate, misleading, or biased content can submit a report to info@abaqualityindex.com with the subject line &ldquo;Editorial Concern.&rdquo; ABA Quality Index reviews all editorial concerns within 5 business days.
      </p>
    </PolicyPage>
  );
}
