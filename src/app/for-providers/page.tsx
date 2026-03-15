import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Providers",
  description:
    "Claim your ABA therapy provider profile on ABA Quality Index. Update your credentials, respond to parent reviews, and increase visibility to families searching for quality ABA care.",
};

export default function ForProvidersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Claim Your Provider Profile on ABA Quality Index
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            ABA Quality Index lists ABA therapy providers using publicly available data. Claiming your profile lets you verify your information, add credentials, and connect with families actively searching for ABA services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">
            What Do Providers Get with ABA Quality Index?
          </h2>

          {/* Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Free */}
            <div className="border border-gray-200 rounded-xl p-7">
              <div className="text-sm font-medium text-gray-500 mb-1">Free</div>
              <div className="font-heading text-3xl font-bold text-gray-900 mb-1">$0</div>
              <div className="text-sm text-gray-500 mb-6">Always free</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Basic listing with name, address, and Google rating
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  ABA Quality Score displayed
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Included in city and state ranking pages
                </li>
              </ul>
            </div>

            {/* Verified */}
            <div className="border-2 border-primary rounded-xl p-7 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-sm font-medium text-primary mb-1">Verified</div>
              <div className="font-heading text-3xl font-bold text-gray-900 mb-1">$149<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <div className="text-sm text-gray-500 mb-6">Billed monthly</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Free
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  &ldquo;Verified&rdquo; badge on your listing
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Direct website link for families
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Add photos, team bios, and insurance list
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Respond to parent reviews
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Priority placement in rankings
                </li>
              </ul>
            </div>

            {/* Featured */}
            <div className="border border-gray-200 rounded-xl p-7 bg-gold-light">
              <div className="text-sm font-medium text-gold mb-1">Featured</div>
              <div className="font-heading text-3xl font-bold text-gray-900 mb-1">$399<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <div className="text-sm text-gray-500 mb-6">Billed monthly</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Everything in Verified
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  &ldquo;Featured Provider&rdquo; highlight
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Top placement in city rankings
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  &ldquo;Award Winner&rdquo; badge for your marketing
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Monthly performance analytics
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">
              Common Questions from Providers
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How did my clinic get listed on ABA Quality Index?",
                  a: "ABA Quality Index lists ABA therapy providers using publicly available data from Google Business Profiles. If your clinic has a Google Business listing, it may already appear on ABA Quality Index. Claiming your profile allows you to verify and update your information."
                },
                {
                  q: "Does paying for a premium plan change my score?",
                  a: "No. The ABA Quality Score is determined entirely by data. Premium plans offer enhanced visibility, profile features, and the ability to respond to reviews. They do not affect scoring. All paid placements are clearly disclosed."
                },
                {
                  q: "How do I claim my profile?",
                  a: "Contact ABA Quality Index at info@abaqualityindex.com with your clinic name and Google Business Profile link. The team will verify your identity and grant profile access within 3 business days."
                },
                {
                  q: "Can I dispute my score or listing information?",
                  a: "Yes. ABA Quality Index maintains a formal correction process. Visit the Complaints & Corrections page to submit a dispute. All disputes are reviewed within 10 business days."
                },
              ].map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Ready to claim your profile?</p>
              <a
                href="mailto:info@abaqualityindex.com?subject=Profile%20Claim%20Request"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Contact Us to Get Started
              </a>
            </div>
          </div>
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
                name: "How did my clinic get listed on ABA Quality Index?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ABA Quality Index lists ABA therapy providers using publicly available data from Google Business Profiles.",
                },
              },
              {
                "@type": "Question",
                name: "Does paying for a premium plan change my score?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The ABA Quality Score is determined entirely by data. Premium plans offer enhanced visibility and profile features but do not affect scoring.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
