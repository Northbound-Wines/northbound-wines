import { EntityCard } from "@/components/EntityCard";
import { getCompanionData } from "@/lib/content";
import { excerpt } from "@/lib/format";

export default async function ProducersPage() {
  const { producers } = await getCompanionData();

  return (
    <main>
      <section className="page-hero">
        <div className="section-label">Producers</div>
        <h1>The importer-centered view.</h1>
        <p>Producer profiles connect philosophy, place, visit usefulness, and the wines that carry the story.</p>
      </section>
      <section className="card-grid">
        {producers.map((producer) => (
          <EntityCard
            key={producer.slug}
            eyebrow={producer.region?.title || "Producer"}
            href={`/producers/${producer.slug}`}
            title={producer.title}
            description={excerpt(producer.overview)}
            meta={producer.knownFor}
          />
        ))}
      </section>
    </main>
  );
}
