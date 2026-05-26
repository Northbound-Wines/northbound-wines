import { Discovery } from "@/components/Discovery";
import { EntityCard } from "@/components/EntityCard";
import { getCompanionData } from "@/lib/content";

export default async function Home() {
  const data = await getCompanionData();

  return (
    <main>
      <section className="hero">
        <div>
          <div className="section-label">Private Workbench</div>
          <h1>A reusable editorial layer for places, producers, grapes, and bottles.</h1>
        </div>
        <p>
          Northbound’s companion starts as a private app for shaping public-safe knowledge into
          useful recommendations, importer context, and future guide material.
        </p>
      </section>

      <section className="entry-points" aria-labelledby="entry-title">
        <div className="section-heading">
          <div>
            <div className="section-label">Entry Points</div>
            <h2 id="entry-title">Four ways into the same editorial graph.</h2>
          </div>
          <p>
            No single hierarchy owns the experience. A traveler may start with a region, while an
            importer conversation usually begins with a producer.
          </p>
        </div>

        <div className="card-grid four">
          <EntityCard
            eyebrow={`${data.regions.length} region${data.regions.length === 1 ? "" : "s"}`}
            href="/regions"
            title="Regions"
            description="Primers for place, style, travel context, and the producers worth understanding there."
          />
          <EntityCard
            eyebrow={`${data.producers.length} producer${data.producers.length === 1 ? "" : "s"}`}
            href="/producers"
            title="Producers"
            description="The importer-centered view: people, philosophy, style, visit context, and wines that matter."
          />
          <EntityCard
            eyebrow={`${data.grapes.length} grape${data.grapes.length === 1 ? "" : "s"}`}
            href="/grapes"
            title="Grapes"
            description="Educational context that connects variety, regional expression, and buying decisions."
          />
          <EntityCard
            eyebrow={`${data.wines.length} wine${data.wines.length === 1 ? "" : "s"}`}
            href="/wines"
            title="Wines"
            description="Reusable bottle-level notes for sheets, guides, tastings, and confident recommendations."
          />
        </div>
      </section>

      <Discovery data={data} />
    </main>
  );
}
