import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSection } from "@/components/ContentSection";
import { LinkedPills } from "@/components/LinkedPills";
import { findBySlug, getCompanionData } from "@/lib/content";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function WinePage({ params }: PageProps) {
  const data = await getCompanionData();
  const wine = findBySlug(data.wines, params.slug);

  if (!wine) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="section-label">{wine.vintage || "Wine"}</div>
        <h1>{wine.title}</h1>
        <p>{wine.overview}</p>
        <div className="context-row">
          {wine.producer ? (
            <Link className="context-link" href={`/producers/${wine.producer.slug}`}>
              {wine.producer.title}
            </Link>
          ) : null}
          {wine.region ? (
            <Link className="context-link" href={`/regions/${wine.region.slug}`}>
              {wine.region.title}
            </Link>
          ) : null}
        </div>
      </section>

      <div className="detail-grid">
        <div>
          <ContentSection title="Tasting Context">{wine.tastingContext}</ContentSection>
          <ContentSection title="Food Pairing">{wine.foodPairing}</ContentSection>
          <ContentSection title="Positioning">{wine.positioning}</ContentSection>
        </div>
        <aside className="related-panel">
          <LinkedPills label="Grapes" items={wine.grapes} basePath="grapes" />
        </aside>
      </div>
    </main>
  );
}
