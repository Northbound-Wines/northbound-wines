import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AccordionSection } from "@/components/AccordionSection";
import { LinkedPills } from "@/components/LinkedPills";
import { MetadataGrid } from "@/components/MetadataGrid";
import { findBySlug, getCompanionData } from "@/lib/content";
import { imageUrlFor } from "@/lib/image";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProducerPage({ params }: PageProps) {
  const data = await getCompanionData();
  const producer = findBySlug(data.producers, params.slug);

  if (!producer) {
    notFound();
  }

  const wineStyle = producer.wineStyle || producer.styleAndPhilosophy;
  const travelExperience = producer.travelExperience || producer.atmosphere;
  const bestKnownFor = producer.bestKnownFor || (producer.knownFor ? [producer.knownFor] : undefined);
  const location = [producer.villageOrTown, producer.subregionOrArea, producer.region?.title, producer.country]
    .filter(Boolean)
    .join(" · ");
  const heroImageUrl = imageUrlFor(producer.heroImage, 920, 680);

  return (
    <main>
      <section className="detail-hero">
        <div className="region-hero-grid">
          <div className="section-label hero-label">{location || "Producer"}</div>
          <h1 className="hero-title">{producer.displayName || producer.title}</h1>
          <p className="hero-overview">{producer.overview}</p>
          {producer.region ? (
            <div className="hero-context">
              <Link className="context-link" href={`/regions/${producer.region.slug}`}>
                {producer.region.title}
              </Link>
            </div>
          ) : null}
          {heroImageUrl ? (
            <figure className="region-hero-media">
              <Image
                src={heroImageUrl}
                alt={producer.heroImage?.alt || `${producer.title} producer photo`}
                width={920}
                height={680}
                sizes="(max-width: 980px) 100vw, 40vw"
              />
            </figure>
          ) : null}
        </div>
      </section>

      <div className="detail-grid">
        <div>
          <MetadataGrid
            items={[
              { label: "Producer type", value: producer.producerType },
              { label: "Northbound relationship", value: producer.northboundRelationship },
              { label: "Best known for", value: bestKnownFor },
              { label: "Strongest styles", value: producer.strongestWineStyles },
              { label: "Best for", value: producer.bestFor },
              { label: "Price level", value: producer.priceLevel },
              { label: "Visit difficulty", value: producer.visitDifficulty },
              { label: "Tasting experience", value: producer.tastingExperienceTypes },
              { label: "Family friendly", value: producer.familyFriendly },
              { label: "Languages", value: producer.languages },
              { label: "Appointment", value: producer.appointmentRequired },
            ]}
          />

          <section className="accordion-group" aria-label={`${producer.title} editorial sections`}>
            <AccordionSection title="Northbound Perspective" defaultOpen>
              {producer.northboundPerspective}
            </AccordionSection>
            <AccordionSection title="Why Visit" defaultOpen>
              {producer.whyVisit}
            </AccordionSection>
            <AccordionSection title="About the Producer">{producer.aboutProducer}</AccordionSection>
            <AccordionSection title="Place & Vineyards">{producer.placeAndVineyards}</AccordionSection>
            <AccordionSection title="Winemaking & Philosophy">{producer.winemakingPhilosophy}</AccordionSection>
            <AccordionSection title="What the Wines Feel Like">{wineStyle}</AccordionSection>
            <AccordionSection title="Key Wines">{producer.keyWinesOverview}</AccordionSection>
            <AccordionSection title="Best Value">{producer.bestValue}</AccordionSection>
            <AccordionSection title="What We Would Buy">{producer.whatWeWouldBuy}</AccordionSection>
            <AccordionSection title="Travel Experience">{travelExperience}</AccordionSection>
            <AccordionSection title="Less Ideal For">{producer.lessIdealFor}</AccordionSection>
          </section>
        </div>
        <aside className="related-panel">
          <LinkedPills label="Grapes" items={producer.grapes} basePath="grapes" />
          <LinkedPills label="Wines" items={producer.wines} basePath="wines" />
          <LinkedPills label="Nearby Producers" items={producer.nearbyProducers} basePath="producers" />
        </aside>
      </div>
    </main>
  );
}
