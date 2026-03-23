import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Find the Highest-Rated ABA Therapy Providers in Your Area
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              ABA Quality Index evaluates Applied Behavior Analysis therapy providers across the United States using publicly verified data. Every provider is scored on credentials, parent reviews, accessibility, and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                How We Score Providers
              </Link>
              <Link
                href="/for-providers"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                Are You a Provider?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              How Does ABA Quality Index Rate Providers?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ABA Quality Index uses a 100-point scoring system built on publicly available data and verified credentials. No provider can pay to change their score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Parent Reviews</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ABA Quality Index aggregates verified Google reviews from real families. Review volume and average rating account for 25 of the 100 possible points in a provider&#39;s score.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Verified Credentials</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every listed provider is checked for BCBA supervision, RBT-certified technicians, and BHCOE accreditation status. Credentials account for 30 points in the ABA Quality Score.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Accessibility & Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ABA Quality Index scores providers on insurance acceptance, years of operation, and responsiveness to inquiries. These practical factors account for the remaining 45 points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 text-center">
              What Factors Make Up the ABA Quality Score?
            </h2>
            <p className="text-gray-600 text-center mb-12">
              The ABA Quality Score is a composite rating out of 100 points. Each factor is weighted based on its importance to families seeking ABA therapy services.
            </p>

            <div className="space-y-4">
              {[
                { label: "Google Reviews", points: 25, desc: "Average rating and total review volume from verified Google reviews" },
                { label: "Staff Credentials", points: 20, desc: "BCBA oversight, RBT-certified staff, and supervision ratios" },
                { label: "Insurance Acceptance", points: 15, desc: "Number of insurance plans accepted, including Medicaid" },
                { label: "BHCOE Accreditation", points: 10, desc: "Accreditation from the Behavioral Health Center of Excellence" },
                { label: "Years in Operation", points: 10, desc: "Track record and stability of the organization" },
                { label: "Parent Satisfaction", points: 10, desc: "Direct feedback collected from families through ABA Quality Index" },
                { label: "Responsiveness", points: 10, desc: "Average response time to new family inquiries" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-5 flex items-center gap-5 border border-gray-200">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg">{item.points}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/methodology" className="text-primary font-medium hover:underline">
                Read the full methodology &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
            Who Uses ABA Quality Index?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E86AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Parents & Families</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Families looking for ABA therapy use ABA Quality Index to compare providers, check credentials, and read parent reviews before choosing a clinic for their child.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E86AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">Referral Providers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pediatricians, schools, and insurance case managers reference ABA Quality Index when recommending ABA therapy providers to families in their network.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E86AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-3">ABA Providers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ABA therapy clinics use ABA Quality Index to showcase their credentials, collect verified parent feedback, and differentiate themselves in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 text-center">
            Find ABA Therapy Providers by State
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            ABA Quality Index is expanding state by state. Select a state below to see ranked ABA therapy providers in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="/best-aba-therapy-colorado"
              className="bg-white border border-gray-200 rounded-lg p-5 hover:border-primary hover:shadow-sm transition-all text-center"
            >
              <span className="font-heading font-semibold text-gray-900 block">Colorado</span>
              <span className="text-xs text-gray-500 mt-1 block">12 providers</span>
            </Link>
            {/* More states added as data is collected */}
            {["Texas", "California", "Florida", "New York", "Pennsylvania", "Ohio"].map((state) => (
              <div
                key={state}
                className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-5 text-center opacity-60"
              >
                <span className="font-heading font-medium text-gray-400 block">{state}</span>
                <span className="text-xs text-gray-400 mt-1 block">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Are You an ABA Therapy Provider?
          </h2>
          <p className="text-primary-light text-base mb-8 opacity-90">
            Claim your free profile on ABA Quality Index. Update your information, respond to parent reviews, and showcase your credentials to families searching for quality ABA care.
          </p>
          <Link
            href="/for-providers"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Claim Your Profile
          </Link>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ABA Quality Index",
            description:
              "Independent, data-driven ratings for ABA therapy providers across the United States.",
            url: "https://abaqualityindex.com",
          }),
        }}
      />
    </>
  );
}
