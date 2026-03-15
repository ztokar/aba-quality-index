import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "ABA Quality Index is an independent rating organization that evaluates ABA therapy providers across the United States using publicly available data, verified credentials, and parent feedback.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            About ABA Quality Index
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            ABA Quality Index is an independent rating organization that helps families, pediatricians, and referral providers identify high-quality Applied Behavior Analysis therapy providers across the United States.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          <h2>Why Does ABA Quality Index Exist?</h2>
          <p>
            Finding a quality ABA therapy provider is one of the most important and stressful decisions a family can make. There are over 1,600 ABA therapy organizations operating in the United States, and the quality varies significantly between providers. Parents often rely on word-of-mouth recommendations, Google searches, or referrals from pediatricians who may not have current information on provider quality.
          </p>
          <p>
            ABA Quality Index was created to fill that gap. By collecting publicly available data, verifying provider credentials, and gathering direct parent feedback, ABA Quality Index gives families an objective starting point for evaluating ABA therapy options in their area.
          </p>

          <h2>What Makes ABA Quality Index Different from Other Directories?</h2>
          <p>
            Most ABA therapy directories list providers without evaluating them. ABA Quality Index scores every listed provider using a transparent, <Link href="/methodology" className="text-primary hover:underline">100-point methodology</Link> that weighs factors families actually care about: Google reviews, staff credentials, insurance acceptance, BHCOE accreditation, responsiveness, and direct parent feedback.
          </p>
          <p>
            ABA Quality Index does not accept payment in exchange for higher scores. Providers can pay for enhanced profile features and visibility, but the ABA Quality Score itself is determined entirely by data. Paid placements are clearly disclosed on every page.
          </p>

          <h2>Who Is Behind ABA Quality Index?</h2>
          <p>
            ABA Quality Index is operated by a team with direct experience in the ABA therapy industry. The founding team has worked with ABA therapy providers on operations, compliance, and family engagement. This firsthand knowledge of how ABA clinics operate informs every aspect of the scoring methodology.
          </p>

          <h2>How Does ABA Quality Index Serve Referral Providers?</h2>
          <p>
            Pediatricians, school counselors, and insurance case managers frequently need to recommend ABA therapy providers to families. ABA Quality Index gives these professionals a data-backed resource they can reference with confidence. Every provider profile includes credential verification, insurance acceptance details, and aggregated family feedback, all in one place.
          </p>

          <h2>What Is the Long-Term Vision for ABA Quality Index?</h2>
          <p>
            ABA Quality Index is building the most comprehensive quality database for ABA therapy providers in the United States. The initial focus is on establishing thorough coverage in key states, with plans to expand nationwide. Over time, ABA Quality Index will add related service categories, including speech therapy, occupational therapy, and developmental pediatrics, to give families a complete picture of available support services.
          </p>

          <div className="not-prose mt-12 p-8 bg-primary-light rounded-xl text-center">
            <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Questions or Feedback?</h3>
            <p className="text-sm text-gray-600 mb-5">
              ABA Quality Index welcomes input from families, providers, and referral professionals. Reach out with questions, corrections, or partnership inquiries.
            </p>
            <a
              href="mailto:info@abaqualityindex.com"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
