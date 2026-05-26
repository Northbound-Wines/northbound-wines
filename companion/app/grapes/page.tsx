import { EntityCard } from "@/components/EntityCard";
import { getCompanionData } from "@/lib/content";
import { excerpt } from "@/lib/format";

export default async function GrapesPage() {
  const { grapes } = await getCompanionData();

  return (
    <main>
      <section className="page-hero">
        <div className="section-label">Grapes</div>
        <h1>Variety as a doorway into style.</h1>
        <p>Grape primers explain what matters in the glass, then connect that context back to regions and wines.</p>
      </section>
      <section className="card-grid">
        {grapes.map((grape) => (
          <EntityCard
            key={grape.slug}
            eyebrow="Grape"
            href={`/grapes/${grape.slug}`}
            title={grape.title}
            description={excerpt(grape.overview)}
            meta={`${grape.regions?.length || 0} regions · ${grape.wines?.length || 0} wines`}
          />
        ))}
      </section>
    </main>
  );
}
