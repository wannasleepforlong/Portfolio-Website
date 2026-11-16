import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { FlagshipCard, CatalogueCard } from "./ProjectCards";
import {
  flagship,
  catalogue,
  categories,
  headlineStats,
} from "../../data/projects";

function Projects({ theme }) {
  const [filter, setFilter] = useState("All");

  const countFor = (cat) =>
    cat === "All"
      ? catalogue.length
      : catalogue.filter((p) => p.category === cat).length;

  const visible =
    filter === "All" ? catalogue : catalogue.filter((p) => p.category === filter);

  return (
    <Container fluid className="project-section">
      <Particle theme={theme} />
      <Container>
        <header className="pc-hero">
          <p className="pc-eyebrow">Selected work</p>
          <h1 className="project-heading">
            Projects that <strong className="purple">ship and measure</strong>
          </h1>
          <p className="pc-lede">
            Production AI agents, speech systems for Indian languages, and research
            reimplementations, each with the numbers to back it up.
          </p>
          <dl className="pc-stats">
            {headlineStats.map((s) => (
              <div key={s.label} className="pc-stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section aria-labelledby="flagship-heading">
          <h2 id="flagship-heading" className="pc-section-title">
            Flagship projects
          </h2>
          <div className="pc-flagship-list">
            {flagship.map((p, i) => (
              <FlagshipCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>

        <section aria-labelledby="catalogue-heading" className="pc-catalogue">
          <div className="pc-catalogue-head">
            <h2 id="catalogue-heading" className="pc-section-title">
              More work
            </h2>
            <div className="pc-filters" role="tablist" aria-label="Filter projects">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={filter === c}
                  className={"pc-filter" + (filter === c ? " is-active" : "")}
                  onClick={() => setFilter(c)}
                >
                  {c} <span>{countFor(c)}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="pc-grid">
            {visible.map((p) => (
              <CatalogueCard key={p.title} project={p} />
            ))}
          </div>
          <p className="pc-more">
            Everything else lives on{" "}
            <a
              href="https://github.com/wannasleepforlong?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </Container>
    </Container>
  );
}

export default Projects;
