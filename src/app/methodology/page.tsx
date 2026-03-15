import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "ABA Quality Index uses a 100-point scoring system to rate ABA therapy providers. Learn how Google reviews, staff credentials, BHCOE accreditation, and insurance acceptance factor into every score.",
};

export default function MethodologyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            How Does ABA Quality Index Score Providers?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            ABA Quality Index assigns every listed provider a score out of 100 points. The ABA Quality Score is based on publicly available data, verified credentials, and direct family feedback. No provider can pay to change their score.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          <h2>What Data Sources Does ABA Quality Index Use?</h2>
          <p>
            ABA Quality Index pulls data from three categories: public records, provider-submitted information, and direct family feedback. Public data includes Google Business Profile reviews, BHCOE accreditation status, and state licensing records. Provider-submitted data includes insurance acceptance lists, staff credentials, and service descriptions. Family feedback is collected directly through ABA Quality Index from parents and caregivers who have used the provider.
          </p>
          <p>
            All public data is refreshed quarterly. Providers can update their own information at any time by claiming their profile.
          </p>

          <h2>How Are the 100 Points Distributed?</h2>
          <p>
            The ABA Quality Score allocates points across seven categories. Each category is weighted based on research into what matters most to families choosing an ABA therapy provider.
          </p>

          <div className="not-prose my-10 space-y-6">
            {[
              {
                title: "Google Reviews (25 points)",
                content: "ABA Quality Index aggregates Google Business Profile reviews for every listed provider. The score factors in both the average star rating and the total number of reviews. A provider with a 4.9-star average and 120 reviews will score higher than a provider with a 5.0-star average and 3 reviews. Volume matters because it reflects a larger sample of family experiences. ABA Quality Index does not accept or host its own star-rating system to avoid conflicts of interest."
              },
              {
                title: "Staff Credentials (20 points)",
                content: "ABA Quality Index checks whether each provider employs Board Certified Behavior Analysts (BCBAs) for treatment oversight and Registered Behavior Technicians (RBTs) for direct therapy. Providers earn points for listing their clinical team, verifiable BACB certification numbers, and maintaining appropriate supervisor-to-technician ratios. The Behavior Analyst Certification Board recommends specific supervision standards that ABA Quality Index uses as a benchmark."
              },
              {
                title: "Insurance Acceptance (15 points)",
                content: "ABA Quality Index scores providers based on how many insurance plans they accept. Providers who accept Medicaid receive additional weight because Medicaid is the most common funding source for ABA therapy in the United States. Roughly 62% of children receiving ABA services use Medicaid or state-funded insurance. Providers who accept 5 or more insurance plans, including Medicaid, receive the maximum 15 points."
              },
              {
                title: "BHCOE Accreditation (10 points)",
                content: "The Behavioral Health Center of Excellence (BHCOE) is the only organization offering accreditation specific to ABA therapy providers. BHCOE evaluates clinical outcomes, staff training, and administrative practices. Providers with active BHCOE accreditation receive the full 10 points. This is a binary score: accredited or not."
              },
              {
                title: "Years in Operation (10 points)",
                content: "ABA Quality Index uses the provider's Google Business Profile \"established\" date and domain registration records to determine years of continuous operation. Providers operating for 10 or more years receive the maximum 10 points. Newer providers are not penalized heavily, as a clinic with 2 years of operation still earns 4 points. This category rewards stability without excluding newer practices."
              },
              {
                title: "Parent Satisfaction (10 points)",
                content: "ABA Quality Index collects direct feedback from parents and caregivers through structured surveys. These surveys ask about communication quality, treatment progress visibility, scheduling flexibility, and staff consistency. This category starts at 0 for new listings and grows as families submit feedback. Providers cannot influence or remove individual parent responses."
              },
              {
                title: "Responsiveness (10 points)",
                content: "ABA Quality Index measures how quickly a provider responds to new family inquiries. A response within 24 business hours earns the full 10 points. A response within 48 hours earns 7 points. Responses taking longer than 72 hours earn 3 points. Providers who do not respond to inquiries within one week receive 0 points in this category. Responsiveness is tested quarterly."
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <h2>What Happens When Data Is Missing?</h2>
          <p>
            ABA Quality Index only scores categories where verified data exists. If a provider has not claimed their profile and has not submitted staff credential information, the Staff Credentials category displays &ldquo;Pending Verification&rdquo; and does not count toward the total score. The displayed score reflects the percentage of available points earned, not a raw total. This ensures that unclaimed profiles are not unfairly penalized for missing self-reported data.
          </p>

          <h2>Does Paying for a Premium Profile Change the Score?</h2>
          <p>
            No. ABA Quality Index offers premium profile features, such as enhanced listings, a &ldquo;Verified&rdquo; badge, and the ability to respond to parent reviews. These features improve visibility and presentation. They do not affect the ABA Quality Score. Paid and unpaid providers are scored using identical criteria. Sponsored listings are clearly labeled on every page where they appear.
          </p>

          <h2>How Can a Provider Improve Their Score?</h2>
          <p>
            Providers improve their ABA Quality Score by improving the underlying data. Earning more positive Google reviews, achieving BHCOE accreditation, accepting additional insurance plans, and responding promptly to family inquiries are the most direct paths. Claiming a profile and submitting verified staff credentials also unlocks the Staff Credentials category, which accounts for 20 of the 100 possible points.
          </p>

          <h2>How Can a Provider Dispute Their Score?</h2>
          <p>
            ABA Quality Index maintains a formal dispute process. Providers who believe their data is inaccurate can submit a correction request through the <Link href="/complaints" className="text-primary hover:underline">Complaints &amp; Corrections</Link> page. ABA Quality Index reviews all disputes within 10 business days and updates scores when errors are confirmed.
          </p>

          <h2>How Often Are Scores Updated?</h2>
          <p>
            ABA Quality Index refreshes public data (Google reviews, BHCOE status, years of operation) on a quarterly cycle. Provider-submitted data (insurance lists, staff credentials) updates in real-time when providers modify their claimed profiles. Parent satisfaction scores update as new survey responses are received.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does ABA Quality Index score providers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ABA Quality Index uses a 100-point scoring system based on Google reviews (25 pts), staff credentials (20 pts), insurance acceptance (15 pts), BHCOE accreditation (10 pts), years in operation (10 pts), parent satisfaction (10 pts), and responsiveness (10 pts).",
                },
              },
              {
                "@type": "Question",
                name: "Does paying for a premium profile change the score?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Premium features improve visibility and presentation but do not affect the ABA Quality Score. Paid and unpaid providers are scored using identical criteria.",
                },
              },
              {
                "@type": "Question",
                name: "How often are scores updated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Public data is refreshed quarterly. Provider-submitted data updates in real-time. Parent satisfaction scores update as new survey responses are received.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
