import Link from "next/link";
import { ScoreBadge } from "./ScoreBadge";
import { formatService, type Clinic } from "@/lib/data";

interface ClinicCardProps {
  clinic: Clinic;
  rank: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#D4A843" : "none"}
          stroke="#D4A843"
          strokeWidth="2"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">
        {rating} ({" "}
      </span>
    </div>
  );
}

export function ClinicCard({ clinic, rank }: ClinicCardProps) {
  const yearsOpen = new Date().getFullYear() - clinic.yearEstablished;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
      <div className="flex gap-5">
        {/* Rank + Score */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">#{rank}</span>
          <ScoreBadge score={clinic.qualityScore} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link
                href={`/provider/${clinic.slug}`}
                className="font-heading font-bold text-lg text-gray-900 hover:text-primary transition-colors"
              >
                {clinic.name}
              </Link>
              <p className="text-sm text-gray-500 mt-0.5">{clinic.address}</p>
            </div>
            {clinic.bhcoeAccredited && (
              <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 bg-gold-light text-gold text-xs font-semibold rounded-full border border-gold/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                BHCOE
              </span>
            )}
          </div>

          {/* Ratings + Meta */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={star <= Math.round(clinic.googleRating) ? "#D4A843" : "none"}
                  stroke="#D4A843"
                  strokeWidth="2"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {clinic.googleRating} ({clinic.reviewCount} reviews)
              </span>
            </div>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-600">{yearsOpen} years in operation</span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-600">Ages {clinic.ageRange}</span>
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {clinic.services.slice(0, 4).map((service) => (
              <span
                key={service}
                className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                {formatService(service)}
              </span>
            ))}
            {clinic.services.length > 4 && (
              <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{clinic.services.length - 4} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-4">
            <Link
              href={`/provider/${clinic.slug}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              View Full Profile
            </Link>
            {!clinic.claimed && (
              <>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-gray-400 italic">Unclaimed profile</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
