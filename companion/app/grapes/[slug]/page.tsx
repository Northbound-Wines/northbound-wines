import { notFound } from "next/navigation";
import { ContentSection } from "@/components/ContentSection";
import { LinkedPills } from "@/components/LinkedPills";
import { findBySlug, getCompanionData } from "@/lib/content";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function GrapePage({ params }: PageProps) {
  const data = await getCompanionData();
  const grape = findBySlug(data.grapes, params.slug);

  if (!grape) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <div className="section-label">Grape</div>
        <h1>{grape.title}</h1>
        <p>{grape.overview}</p>
      </section>

      <div className="detail-grid">
        <div>
          <ContentSection title="Regional Expression">{grape.regionalExpression}</ContentSection>
          <ContentSection title="Drinking Context">{grape.drinkingContext}</ContentSection>
        </div>
        <aside className="related-panel">
          <LinkedPills label="Regions" items={grape.regions} basePath="regions" />
          <LinkedPills label="Wines" items={grape.wines} basePath="wines" />
        </aside>
      </div>
    </main>
  );
}
