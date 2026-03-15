import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "ABA Quality Index medical disclaimer. This site provides informational content only, not medical advice or treatment recommendations.",
};

export default function MedicalDisclaimerPage() {
  return (
    <PolicyPage title="Medical Disclaimer">
      <h2>ABA Quality Index Does Not Provide Medical Advice</h2>
      <p>
        ABA Quality Index is an informational rating platform. The content on this website, including provider profiles, scores, rankings, and educational articles, is intended for informational purposes only. ABA Quality Index does not provide medical advice, diagnosis, or treatment recommendations. ABA Quality Index is not a healthcare provider, medical practice, or clinical referral service.
      </p>

      <h2>How Should Families Use ABA Quality Index?</h2>
      <p>
        Families should use ABA Quality Index as one resource among many when evaluating ABA therapy providers. The ABA Quality Score reflects publicly available data and parent feedback at the time of scoring. It does not replace a clinical assessment, a professional referral from a physician or psychologist, or a direct consultation with a qualified ABA provider.
      </p>
      <p>
        Before starting ABA therapy, families should consult with their child&apos;s pediatrician, a licensed psychologist, or another qualified healthcare professional who can evaluate the child&apos;s specific needs and recommend appropriate services.
      </p>

      <h2>No Guarantee of Treatment Outcomes</h2>
      <p>
        A high ABA Quality Score does not guarantee positive treatment outcomes. Treatment outcomes depend on many factors, including the individual child&apos;s needs, the treatment plan, family involvement, treatment intensity, and other variables that are beyond the scope of ABA Quality Index&apos;s evaluation methodology.
      </p>

      <h2>No Protected Health Information</h2>
      <p>
        ABA Quality Index does not collect, store, or process protected health information (PHI) as defined by the Health Insurance Portability and Accountability Act (HIPAA). Families should not submit medical records, diagnostic reports, or other health-related documents through ABA Quality Index. If you need to share medical information with a provider, contact the provider directly using the contact information on their profile.
      </p>

      <h2>Emergency Situations</h2>
      <p>
        ABA Quality Index is not equipped to handle medical emergencies. If you or someone you know is experiencing a medical emergency, call 911 or your local emergency services immediately.
      </p>
    </PolicyPage>
  );
}
