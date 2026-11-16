import React from "react";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";

function Links({ ghLink, demoLink, demoLabel }) {
  return (
    <div className="pc-links">
      <a className="pc-btn pc-btn-ghost" href={ghLink} target="_blank" rel="noreferrer">
        <BsGithub /> Code
      </a>
      {demoLink && (
        <a className="pc-btn pc-btn-solid" href={demoLink} target="_blank" rel="noreferrer">
          {demoLabel || "Live demo"} <BsArrowUpRight />
        </a>
      )}
    </div>
  );
}

function TechChips({ tech }) {
  return (
    <ul className="pc-chips">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function FlagshipCard({ project, index }) {
  return (
    <article className="pc-flagship">
      <div className="pc-flagship-main">
        <div className="pc-flagship-top">
          <span className="pc-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="pc-category">{project.category}</span>
          {project.badge && <span className="pc-badge">{project.badge}</span>}
        </div>
        <h3 className="pc-flagship-title">{project.title}</h3>
        <p className="pc-tagline">{project.tagline}</p>
        <p className="pc-desc">{project.description}</p>
        <TechChips tech={project.tech} />
        <Links {...project} />
      </div>
      <dl className="pc-metrics">
        {project.metrics.map((m) => (
          <div className="pc-metric" key={m.label}>
            <dt>{m.value}</dt>
            <dd>{m.label}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function CatalogueCard({ project }) {
  return (
    <article className="pc-card">
      <span className="pc-category">{project.category}</span>
      <h4 className="pc-card-title">{project.title}</h4>
      {project.highlight && <p className="pc-highlight">{project.highlight}</p>}
      <p className="pc-desc pc-card-desc">{project.description}</p>
      <TechChips tech={project.tech} />
      <Links {...project} />
    </article>
  );
}
