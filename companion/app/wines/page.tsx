import { EntityCard } from "@/components/EntityCard";
import { getCompanionData } from "@/lib/content";
import { excerpt } from "@/lib/format";

export default async function WinesPage() {
  const { wines } = await getCompanionData();

  return (
    <main>
      <section className="page-hero">
        <div className="section-label">Wines</div>
        <h1>Bottle notes built for reuse.</h1>
        <p>Wine pages keep tasting context, food pairing, and positioning ready for sheets, guides, and recommendations.</p>
      </section>
      <section className="card-grid">
        {wines.map((wine) => (
          <EntityCard
            key={wine.slug}
            eyebrow={wine.producer?.title || "Wine"}
            href={`/wines/${wine.slug}`}
            title={wine.title}
            description={excerpt(wine.overview)}
            meta={[wine.region?.title, ...(wine.grapes || []).map((item) => item.title)].filter(Boolean).join(" · ")}
          />
        ))}
      </section>
    </main>
  );
}
