import Link from "next/link";
import type { SlugRef } from "@/lib/types";

type LinkedPillsProps = {
  label: string;
  items?: SlugRef[];
  basePath: "regions" | "producers" | "grapes" | "wines";
};

export function LinkedPills({ label, items, basePath }: LinkedPillsProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="linked-section">
      <div className="section-label">{label}</div>
      <div className="pill-list">
        {items.map((item) => (
          <Link key={`${basePath}-${item.slug}`} href={`/${basePath}/${item.slug}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
