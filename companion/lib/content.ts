import { unstable_noStore as noStore } from "next/cache";
import { allContentQuery } from "./queries";
import { hasSanityConfig, sanityClient } from "./sanity";
import { sampleData } from "./sample-data";
import type { CompanionData } from "./types";

export async function getCompanionData(): Promise<CompanionData> {
  noStore();

  if (!hasSanityConfig) {
    return sampleData;
  }

  try {
    const data = await sanityClient.fetch<CompanionData>(allContentQuery);
    return {
      regions: data.regions || [],
      producers: data.producers || [],
      grapes: data.grapes || [],
      wines: data.wines || [],
    };
  } catch {
    return sampleData;
  }
}

export function findBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}
