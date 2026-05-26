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

export default async function RegionPage({ params }: PageProps) {
  const data = await getCompanionData();
  const region = findBySlug(data.regions, params.slug);

  if (!region) {
    notFound();
  }

  const wineStyle = region.wineStyle || region.styleSummary;
  const travelExperience = region.travelExperience || region.travelContext;
  const heroImageUrl = imageUrlFor(region.heroImage, 920, 680);

  return (
    <main>
      <section className="detail-hero">
        <div className="region-hero-grid">
          <div className="section-label hero-label">{region.country || "Region"}</div>
          <h1 className="hero-title">{region.title}</h1>
          <p className="hero-overview">{region.overview}</p>
          {heroImageUrl ? (
            <figure className="region-hero-media">
              <Image
                src={heroImageUrl}
                alt={region.heroImage?.alt || `${region.title} landscape`}
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
              { label: "Best known for", value: region.bestKnownFor },
              { label: "Strongest styles", value: region.strongestWineStyles },
              { label: "Best for", value: region.bestFor },
              { label: "Ideal trip length", value: region.idealTripLength },
              { label: "Best season", value: region.bestSeason },
              { label: "Travel difficulty", value: region.travelDifficulty },
              { label: "Price level", value: region.priceLevel },
            ]}
          />

          <section className="accordion-group" aria-label={`${region.title} editorial sections`}>
            <AccordionSection title="Northbound Perspective" defaultOpen>
              {region.northboundPerspective}
            </AccordionSection>
            <AccordionSection title="About the Region">{region.aboutRegion}</AccordionSection>
            <AccordionSection title="Geography & Climate">{region.geographyClimate}</AccordionSection>
            <AccordionSection title="What the Wines Feel Like">{wineStyle}</AccordionSection>
            <AccordionSection title="Producer Landscape">{region.producerLandscape}</AccordionSection>
            <AccordionSection title="Travel Experience">{travelExperience}</AccordionSection>
          </section>
        </div>
        <aside className="related-panel">
          <LinkedPills label="Producers" items={region.producers} basePath="producers" />
          <LinkedPills label="Grapes" items={region.grapes} basePath="grapes" />
          <LinkedPills label="Wines" items={region.wines} basePath="wines" />
        </aside>
      </div>
    </main>
  );
}
