import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Non-Discrimination Policy",
  description: "ABA Quality Index non-discrimination policy. Equal representation for all ABA therapy providers regardless of size, location, or demographics.",
};

export default function NonDiscriminationPage() {
  return (
    <PolicyPage title="Non-Discrimination Policy">
      <h2>Equal Representation for All Providers</h2>
      <p>
        ABA Quality Index evaluates and lists ABA therapy providers without discrimination based on the provider&apos;s race, ethnicity, religion, gender, sexual orientation, national origin, disability status, or any other protected characteristic. The ABA Quality Score is determined solely by the data-driven methodology described on the <a href="/methodology" className="text-primary hover:underline">Methodology</a> page.
      </p>

      <h2>Fair Scoring Practices</h2>
      <p>
        ABA Quality Index applies the same scoring criteria to every listed provider. No provider is excluded from eligibility based on organizational size, geographic location, ownership structure, or client demographics. Both large multi-site organizations and single-location practices are evaluated using identical standards.
      </p>

      <h2>Inclusive Platform Access</h2>
      <p>
        ABA Quality Index is available to all users regardless of background or identity. Families, referral providers, and ABA therapy organizations can access ABA Quality Index resources equally. The paid features available to providers are offered at the same rates and terms to all eligible organizations.
      </p>

      <h2>Reporting Discrimination</h2>
      <p>
        If you believe ABA Quality Index has applied its methodology or policies in a discriminatory manner, submit a report to info@abaqualityindex.com. ABA Quality Index will investigate all reports of potential discrimination and take corrective action where warranted.
      </p>
    </PolicyPage>
  );
}
