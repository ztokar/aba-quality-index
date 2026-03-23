import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClinicCard } from "@/components/ClinicCard";
import { getAllStates, getStateData, getTopClinicsForState } from "@/lib/data";

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return getAllStates().map((s) => ({ state: s.stateSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateData(stateSlug);
  if (!state) return {};

  return {
    title: `Best ABA Therapy in ${state.state} - ${new Date().getFullYear()} Rankings`,
    description: `ABA Quality Index ranks the top ABA therapy providers across ${state.state}. ${state.clinics.length} providers scored on Google reviews, credentials, and BHCOE accreditation.`,
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = getStateData(stateSlug);
  if (!state) notFound();

  const topClinics = getTopClinicsForState(stateSlug, 10);
  const currentYear = new Date().getFullYear();
  const bhcoeCount = state.clinics.filter((c) => c.bhcoeAccredited).length;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{state.state}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Best ABA Therapy in {state.state} - {currentYear} Rankings
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ABA Quality Index tracks {state.clinics.length} ABA therapy providers across {state.cities.length} cities
              in {state.state}. {bhcoeCount > 0 && `${bhcoeCount} providers hold BHCOE accreditation. `}
              Each provider is scored using publicly available data including Google reviews, years in operation,
              and accreditation status. Rankings are updated quarterly and no provider can pay to influence their score.
            </p>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Find ABA Therapy by City in {state.state}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {state.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/best-aba-therapy-${city.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-primary hover:bg-primary-light transition-colors text-center"
              >
                <span className="font-heading font-semibold text-gray-900 block">{city.name}</span>
                <span className="text-xs text-gray-500 mt-1 block">{city.clinicCount} providers</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Clinics */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Top-Rated ABA Providers in {state.state}
          </h2>
          <div className="space-y-5">
            {topClinics.map((clinic, i) => (
              <ClinicCard key={clinic.slug} clinic={clinic} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* State-specific content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom">
          <h2>Does {state.state} Require Insurance to Cover ABA Therapy?</h2>
          <p>
            Yes. {state.state} mandates that private health insurance plans cover Applied Behavior Analysis
            therapy for individuals diagnosed with autism spectrum disorder. This coverage requirement applies
            to most fully-insured plans in the state. Self-insured employer plans (ERISA plans) are exempt
            from state mandates but may still cover ABA voluntarily. {state.state} Medicaid also covers ABA
            therapy through the EPSDT benefit for eligible children under 21.
          </p>

          <h2>How Does ABA Quality Index Rank Providers in {state.state}?</h2>
          <p>
            ABA Quality Index evaluates every listed provider in {state.state} using four publicly verifiable
            data points: Google review rating (up to 15 points), Google review volume (up to 10 points),
            years in operation (up to 10 points), and BHCOE accreditation status (10 points). The maximum
            v1 score is 45 out of 100. The remaining 55 points become available when providers claim their
            profile and submit verified credentials including staff qualifications, insurance acceptance,
            and parent satisfaction data. This structure ensures that higher-scoring providers have actively
            demonstrated their commitment to transparency.
          </p>

          <h2>What Should Parents Look for When Choosing ABA Therapy in {state.state}?</h2>
          <p>
            ABA Quality Index recommends evaluating providers on five factors: BCBA supervision ratio
            (ask how many clients each BCBA oversees), insurance acceptance (confirm your plan is accepted
            before starting), waitlist length (contact 3-5 providers simultaneously), parent references
            (ask for families you can speak with), and session flexibility (in-home, clinic-based, or
            telehealth options). The ABA Quality Score provides a starting point, but direct conversations
            with providers remain essential for finding the right fit for your child and family.
          </p>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-3">
            Are You an ABA Provider in {state.state}?
          </h2>
          <p className="text-primary-light opacity-90 mb-6">
            Claim your profile to update your information, showcase credentials, and reach families
            searching for ABA therapy in {state.state}.
          </p>
          <Link
            href="/for-providers"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Claim Your Profile
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Best ABA Therapy Providers in ${state.state}`,
            description: `Top-rated ABA therapy providers in ${state.state} ranked by ABA Quality Index.`,
            numberOfItems: topClinics.length,
            itemListElement: topClinics.map((clinic, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "LocalBusiness",
                name: clinic.name,
                address: clinic.address,
                url: clinic.website,
              },
            })),
          }),
        }}
      />
    </>
  );
}
