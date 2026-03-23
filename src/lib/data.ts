import coloradoData from "../../data/clinics/colorado.json";

export interface ScoreBreakdown {
  reviewRating: number;
  reviewVolume: number;
  yearsOperating: number;
  bhcoe: number;
}

export interface Clinic {
  slug: string;
  name: string;
  city: string;
  citySlug: string;
  state: string;
  address: string;
  phone: string;
  website: string;
  googleRating: number;
  reviewCount: number;
  yearEstablished: number;
  bhcoeAccredited: boolean;
  qualityScore: number;
  scoreBreakdown: ScoreBreakdown;
  claimed: boolean;
  tier: string;
  services: string[];
  insuranceAccepted: string[];
  ageRange: string;
  description: string | null;
  photos: string[];
}

export interface CityInfo {
  name: string;
  slug: string;
  clinicCount: number;
}

export interface StateData {
  state: string;
  stateSlug: string;
  stateAbbrev: string;
  lastUpdated: string;
  cities: CityInfo[];
  clinics: Clinic[];
}

const stateDataMap: Record<string, StateData> = {
  colorado: coloradoData as StateData,
};

export function getAllStates(): StateData[] {
  return Object.values(stateDataMap);
}

export function getStateData(stateSlug: string): StateData | null {
  return stateDataMap[stateSlug] || null;
}

export function getClinicsForCity(stateSlug: string, citySlug: string): Clinic[] {
  const state = stateDataMap[stateSlug];
  if (!state) return [];
  return state.clinics
    .filter((c) => c.citySlug === citySlug)
    .sort((a, b) => b.qualityScore - a.qualityScore);
}

export function getClinicBySlug(slug: string): Clinic | null {
  for (const state of Object.values(stateDataMap)) {
    const clinic = state.clinics.find((c) => c.slug === slug);
    if (clinic) return clinic;
  }
  return null;
}

export function getAllClinics(): Clinic[] {
  return Object.values(stateDataMap).flatMap((s) => s.clinics);
}

export function getTopClinicsForState(stateSlug: string, limit = 10): Clinic[] {
  const state = stateDataMap[stateSlug];
  if (!state) return [];
  return [...state.clinics].sort((a, b) => b.qualityScore - a.qualityScore).slice(0, limit);
}

export function getAllCityPages(): { stateSlug: string; citySlug: string; stateName: string; cityName: string }[] {
  const pages: { stateSlug: string; citySlug: string; stateName: string; cityName: string }[] = [];
  for (const state of Object.values(stateDataMap)) {
    for (const city of state.cities) {
      pages.push({
        stateSlug: state.stateSlug,
        citySlug: city.slug,
        stateName: state.state,
        cityName: city.name,
      });
    }
  }
  return pages;
}

export function formatService(service: string): string {
  const map: Record<string, string> = {
    "in-home-aba": "In-Home ABA",
    "clinic-based-aba": "Clinic-Based ABA",
    "parent-training": "Parent Training",
    "school-collaboration": "School Collaboration",
    "social-skills-groups": "Social Skills Groups",
    "telehealth": "Telehealth",
    "diagnostic-assessment": "Diagnostic Assessment",
    "early-intervention": "Early Intervention",
  };
  return map[service] || service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
