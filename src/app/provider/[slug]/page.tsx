import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScoreBadge } from "@/components/ScoreBadge";
import { getAllClinics, getClinicBySlug, formatService } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClinics().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);
  if (!clinic) return {};

  return {
    title: `${clinic.name} - ABA Therapy in ${clinic.city}, ${clinic.state}`,
    description: `${clinic.name} ABA Quality Score: ${clinic.qualityScore}/45. ${clinic.googleRating} stars from ${clinic.reviewCount} Google reviews. ${clinic.bhcoeAccredited ? "BHCOE accredited. " : ""}Located in ${clinic.city}, ${clinic.state}.`,
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);
  if (!clinic) notFound();

  const yearsOpen = new Date().getFullYear() - clinic.yearEstablished;

  const scoreItems = [
    { label: "Google Rating", value: clinic.scoreBreakdown.reviewRating, max: 15, desc: `${clinic.googleRating} out of 5 stars` },
    { label: "Review Volume", value: clinic.scoreBreakdown.reviewVolume, max: 10, desc: `${clinic.reviewCount} verified Google reviews` },
    { label: "Years Operating", value: clinic.scoreBreakdown.yearsOperating, max: 10, desc: `Established ${clinic.yearEstablished} (${yearsOpen} years)` },
    { label: "BHCOE Accreditation", value: clinic.scoreBreakdown.bhcoe, max: 10, desc: clinic.bhcoeAccredited ? "Accredited by BHCOE" : "Not accredited" },
  ];

  const pendingItems = [
    { label: "Staff Credentials", max: 15 },
    { label: "Insurance Acceptance", max: 10 },
    { label: "Parent Satisfaction", max: 10 },
    { label: "Responsiveness", max: 10 },
    { label: "Website Quality", max: 10 },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href={`/best-aba-therapy-${clinic.citySlug}`} className="hover:text-primary">
              {clinic.city}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{clinic.name}</span>
          </nav>
        </div>
      </div>

      {/* Provider Header */}
      <section className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <ScoreBadge score={clinic.qualityScore} size="lg" />
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">
                  {clinic.name}
                </h1>
                {clinic.claimed ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                    Unclaimed
                  </span>
                )}
                {clinic.bhcoeAccredited && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold-light text-gold text-xs font-semibold rounded-full border border-gold/20">
                    BHCOE Accredited
                  </span>
                )}
              </div>

              <p className="text-gray-600 mt-2">{clinic.address}</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={star <= Math.round(clinic.googleRating) ? "#D4A843" : "none"}
                      stroke="#D4A843"
                      strokeWidth="2"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-700 font-medium ml-1">{clinic.googleRating}</span>
                  <span className="text-sm text-gray-500">({clinic.reviewCount} reviews)</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-600">{yearsOpen} years in operation</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-600">Ages {clinic.ageRange}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Score Breakdown */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-5">
                  ABA Quality Score Breakdown
                </h2>

                {/* Verified scores */}
                <div className="space-y-3">
                  {scoreItems.map((item) => (
                    <div key={item.label} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{item.label}</span>
                        <span className="font-heading font-bold text-primary">
                          {item.value}/{item.max}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${(item.value / item.max) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Pending scores */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Pending Verification (55 additional points available)
                  </h3>
                  <div className="space-y-2">
                    {pendingItems.map((item) => (
                      <div key={item.label} className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-sm text-gray-400">Up to {item.max} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {clinic.services.map((service) => (
                    <span
                      key={service}
                      className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-medium rounded-lg"
                    >
                      {formatService(service)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm text-gray-600">{clinic.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" className="flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-sm text-gray-600">{clinic.phone}</span>
                  </div>
                  {clinic.website && (
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Claim CTA */}
              {!clinic.claimed && (
                <div className="bg-gold-light border border-gold/20 rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    Is This Your Practice?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Claim this profile to update your information, add photos, list insurance plans,
                    and unlock up to 55 additional Quality Score points.
                  </p>
                  <Link
                    href="/for-providers"
                    className="inline-block w-full text-center px-5 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Claim This Profile
                  </Link>
                </div>
              )}

              {/* Back to city */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Link
                  href={`/best-aba-therapy-${clinic.citySlug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  &larr; All ABA Providers in {clinic.city}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: clinic.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: clinic.address,
              addressLocality: clinic.city,
              addressRegion: clinic.state,
            },
            telephone: clinic.phone,
            url: clinic.website,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: clinic.googleRating,
              reviewCount: clinic.reviewCount,
              bestRating: 5,
            },
          }),
        }}
      />
    </>
  );
}
