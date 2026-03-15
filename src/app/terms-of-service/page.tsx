import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ABA Quality Index terms of service. Conditions for using the ABA Quality Index website and rating platform.",
};

export default function TermsOfServicePage() {
  return (
    <PolicyPage title="Terms of Service">
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing and using ABA Quality Index, you agree to these Terms of Service. ABA Quality Index reserves the right to update these terms at any time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.
      </p>

      <h2>What ABA Quality Index Provides</h2>
      <p>
        ABA Quality Index is an independent rating platform that evaluates ABA therapy providers using publicly available data, verified credentials, and parent feedback. ABA Quality Index provides informational content only. ABA Quality Index does not provide medical advice, treatment recommendations, or professional referrals. See the <a href="/medical-disclaimer" className="text-primary hover:underline">Medical Disclaimer</a> for additional details.
      </p>

      <h2>Accuracy of Information</h2>
      <p>
        ABA Quality Index makes reasonable efforts to ensure the accuracy of listed information. However, ABA Quality Index does not guarantee that all information is complete, current, or error-free. Provider data sourced from Google Business Profiles and public directories may contain inaccuracies from the original source. Providers are encouraged to claim their profiles and verify their information.
      </p>

      <h2>Provider Listings and Scores</h2>
      <p>
        ABA Quality Index lists providers using publicly available data. Listing on ABA Quality Index does not constitute an endorsement or recommendation. The ABA Quality Score is based on the methodology described on the <a href="/methodology" className="text-primary hover:underline">Methodology</a> page and reflects available data at the time of scoring. Scores are subject to change as new data becomes available.
      </p>

      <h2>Paid Services</h2>
      <p>
        ABA Quality Index offers optional paid services for providers, including enhanced profiles, verified badges, and featured placement. Paid services affect visibility and profile features. Paid services do not affect the ABA Quality Score. All paid placements are clearly disclosed. Payment terms, cancellation policies, and refund policies are provided at the time of purchase.
      </p>

      <h2>User Conduct</h2>
      <p>
        Users agree not to submit false, misleading, or defamatory content through ABA Quality Index. Users agree not to attempt to manipulate ratings, scores, or reviews through fraudulent means. ABA Quality Index reserves the right to remove content and suspend accounts that violate these terms.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        ABA Quality Index is provided &ldquo;as is&rdquo; without warranties of any kind. ABA Quality Index is not liable for decisions made based on information found on this platform. ABA Quality Index is not responsible for the quality of services provided by listed providers. Users acknowledge that ABA Quality Index is an informational resource, not a healthcare provider or referral service.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, design, and methodology on ABA Quality Index are the intellectual property of ABA Quality Index unless otherwise noted. The ABA Quality Score methodology, scoring framework, and editorial content may not be reproduced without written permission.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service are governed by the laws of the United States. Any disputes arising from the use of ABA Quality Index will be resolved in accordance with applicable federal and state law.
      </p>
    </PolicyPage>
  );
}
