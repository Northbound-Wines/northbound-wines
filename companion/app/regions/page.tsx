import { EntityCard } from "@/components/EntityCard";
import { getCompanionData } from "@/lib/content";
import { excerpt } from "@/lib/format";

export default async function RegionsPage() {
  const { regions } = await getCompanionData();

  return (
    <main>
      <section className="page-hero">
        <div className="section-label">Regions</div>
        <h1>Places as context, not decoration.</h1>
        <p>Region pages explain why an area matters and how to use it for travel, buying, and producer discovery.</p>
      </section>
      <section className="card-grid">
        {regions.map((region) => (
          <EntityCard
            key={region.slug}
            eyebrow={region.country || "Region"}
            href={`/regions/${region.slug}`}
            title={region.title}
            description={excerpt(region.overview)}
            meta={`${region.producers?.length || 0} producers · ${region.grapes?.length || 0} grapes`}
          />
        ))}
      </section>
    </main>
  );
}
