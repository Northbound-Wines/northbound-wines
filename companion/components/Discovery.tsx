"use client";

import { useMemo, useState } from "react";
import { EntityCard } from "./EntityCard";
import { excerpt } from "@/lib/format";
import type { CompanionData } from "@/lib/types";

type DiscoveryProps = {
  data: CompanionData;
};

export function Discovery({ data }: DiscoveryProps) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [grape, setGrape] = useState("all");
  const [producer, setProducer] = useState("all");

  const normalizedQuery = query.trim().toLowerCase();

  const wines = useMemo(() => {
    return data.wines.filter((wine) => {
      const matchesText =
        !normalizedQuery ||
        [wine.title, wine.overview, wine.producer?.title, wine.region?.title, ...(wine.grapes || []).map((item) => item.title)]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesRegion = region === "all" || wine.region?.slug === region;
      const matchesGrape = grape === "all" || wine.grapes?.some((item) => item.slug === grape);
      const matchesProducer = producer === "all" || wine.producer?.slug === producer;

      return matchesText && matchesRegion && matchesGrape && matchesProducer;
    });
  }, [data.wines, grape, normalizedQuery, producer, region]);

  return (
    <section className="discovery-panel" aria-labelledby="discovery-title">
      <div className="section-heading">
        <div>
          <div className="section-label">Discovery</div>
          <h2 id="discovery-title">Find the useful intersection.</h2>
        </div>
        <p>
          Combine region, grape, and producer signals to test the content graph before building
          public pages or PDF guide assembly.
        </p>
      </div>

      <div className="filters">
        <label>
          Search
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pinot Noir, Alto Adige, alpine..."
          />
        </label>
        <label>
          Region
          <select value={region} onChange={(event) => setRegion(event.target.value)}>
            <option value="all">All regions</option>
            {data.regions.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Grape
          <select value={grape} onChange={(event) => setGrape(event.target.value)}>
            <option value="all">All grapes</option>
            {data.grapes.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Producer
          <select value={producer} onChange={(event) => setProducer(event.target.value)}>
            <option value="all">All producers</option>
            {data.producers.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="result-count">{wines.length} matching wine{wines.length === 1 ? "" : "s"}</div>

      <div className="card-grid">
        {wines.map((wine) => (
          <EntityCard
            key={wine.slug}
            eyebrow="Wine"
            href={`/wines/${wine.slug}`}
            title={wine.title}
            description={excerpt(wine.overview)}
            meta={[wine.producer?.title, wine.region?.title].filter(Boolean).join(" · ")}
          />
        ))}
      </div>
    </section>
  );
}
