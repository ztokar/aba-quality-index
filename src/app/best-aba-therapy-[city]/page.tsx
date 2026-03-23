import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClinicCard } from "@/components/ClinicCard";
import { getAllCityPages, getClinicsForCity, getStateData } from "@/lib/data";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCityPages().map((p) => ({ city: p.citySlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityPage = getAllCityPages().find((p) => p.citySlug === citySlug);
  if (!cityPage) return {};

  return {
    title: `Best ABA Therapy in ${cityPage.cityName} - 2026 Rankings`,
    description: `ABA Quality Index ranks the top ABA therapy providers in ${cityPage.cityName}, ${cityPage.stateName} using Google reviews, credentials, and BHCOE accreditation. Updated for 2026.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const cityPage = getAllCityPages().find((p) => p.citySlug === citySlug);
  if (!cityPage) notFound();

  const clinics = getClinicsForCity(cityPage.stateSlug, citySlug);
  const state = getStateData(cityPage.stateSlug);
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href={`/best-aba-therapy-${cityPage.stateSlug}`} className="hover:text-primary">
              {cityPage.stateName}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{cityPage.cityName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Best ABA Therapy in {cityPage.cityName} - {currentYear} Rankings
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ABA Quality Index evaluated {clinics.length} Applied Behavior Analysis therapy providers
              in {cityPage.cityName}, {cityPage.stateName} using publicly available data. Each provider
              is scored on Google reviews, years in operation, and BHCOE accreditation status. Rankings
              are updated quarterly. No provider can pay to change their score.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main: Clinic List */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-heading text-xl font-bold text-gray-900">
                  Top-Rated ABA Providers in {cityPage.cityName}
                </h2>
                <span className="text-sm text-gray-500">{clinics.length} providers</span>
              </div>

              {clinics.map((clinic, i) => (
                <ClinicCard key={clinic.slug} clinic={clinic} rank={i + 1} />
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Methodology box */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-semibold text-gray-900 mb-3">
                  How Does ABA Quality Index Score Providers?
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  ABA Quality Index uses a data-driven scoring system. The v1 score evaluates four
                  publicly verifiable factors worth up to 45 points. Providers can unlock the
                  remaining 55 points by claiming their profile and submitting verified credentials.
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Google Rating", pts: 15 },
                    { label: "Review Volume", pts: 10 },
                    { label: "Years Operating", pts: 10 },
                    { label: "BHCOE Accredited", pts: 10 },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold text-gray-900">{item.pts} pts</span>
                    </div>
                  ))}
                </div>
                <Link href="/methodology" className="text-sm font-medium text-primary hover:underline">
                  Read full methodology
                </Link>
              </div>

              {/* Other cities */}
              {state && state.cities.length > 1 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-heading font-semibold text-gray-900 mb-3">
                    Other Cities in {cityPage.stateName}
                  </h3>
                  <ul className="space-y-2">
                    {state.cities
                      .filter((c) => c.slug !== citySlug)
                      .map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/best-aba-therapy-${c.slug}`}
                            className="text-sm text-primary hover:underline"
                          >
                            Best ABA Therapy in {c.name}
                          </Link>
                          <span className="text-xs text-gray-400 ml-2">({c.clinicCount} providers)</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Provider CTA */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-heading font-semibold text-lg mb-2">Are You a Provider?</h3>
                <p className="text-sm text-primary-light opacity-90 mb-4">
                  Claim your free profile to update your information, add credentials, and increase
                  your Quality Score.
                </p>
                <Link
                  href="/for-providers"
                  className="inline-block px-5 py-2.5 bg-white text-primary font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Claim Your Profile
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Content (TJ Robertson style - question H2s with direct answers) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          <h2>How Many ABA Therapy Providers Are in {cityPage.cityName}?</h2>
          <p>
            ABA Quality Index currently tracks {clinics.length} ABA therapy providers in {cityPage.cityName}, {cityPage.stateName}.
            {clinics.filter((c) => c.bhcoeAccredited).length > 0 &&
              ` ${clinics.filter((c) => c.bhcoeAccredited).length} of these providers hold BHCOE accreditation, which indicates compliance with best-practice standards in ABA service delivery.`}
            {" "}The highest-scoring provider in {cityPage.cityName} has an ABA Quality Score of {clinics[0]?.qualityScore || 0} out of
            a possible 45 points (v1 scoring).
          </p>

          <h2>What Insurance Covers ABA Therapy in {cityPage.stateName}?</h2>
          <p>
            {cityPage.stateName} requires most private health insurance plans to cover ABA therapy for
            individuals with an autism spectrum disorder diagnosis. Medicaid also covers ABA therapy in
            {" "}{cityPage.stateName} through the Early and Periodic Screening, Diagnostic and Treatment (EPSDT)
            benefit for children under 21. Coverage specifics, including session limits and prior authorization
            requirements, vary by plan. Contact your insurance provider directly to confirm your benefits before
            starting services.
          </p>

          <h2>How Long Is the Waitlist for ABA Therapy in {cityPage.cityName}?</h2>
          <p>
            Wait times for ABA therapy in {cityPage.cityName} typically range from 2 to 6 months depending
            on the provider, the type of service (in-home vs. clinic-based), and the child&apos;s age. Providers
            with higher staff-to-client ratios and multiple BCBAs tend to have shorter wait times. ABA Quality
            Index recommends contacting 3 to 5 providers simultaneously to find the earliest available start date.
          </p>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Best ABA Therapy Providers in ${cityPage.cityName}, ${cityPage.stateName}`,
            description: `Ranked list of top ABA therapy providers in ${cityPage.cityName} based on the ABA Quality Index scoring methodology.`,
            numberOfItems: clinics.length,
            itemListElement: clinics.map((clinic, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "LocalBusiness",
                name: clinic.name,
                address: clinic.address,
                telephone: clinic.phone,
                url: clinic.website,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: clinic.googleRating,
                  reviewCount: clinic.reviewCount,
                },
              },
            })),
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://abaqualityindex.com" },
              { "@type": "ListItem", position: 2, name: cityPage.stateName, item: `https://abaqualityindex.com/best-aba-therapy-${cityPage.stateSlug}` },
              { "@type": "ListItem", position: 3, name: cityPage.cityName },
            ],
          }),
        }}
      />
    </>
  );
}
