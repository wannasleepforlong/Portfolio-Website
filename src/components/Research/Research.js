import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCard";
import Particle from "../Particle";

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my publications and research papers.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ResearchCard
              title="Rolling Out Data Quality Overnight, without losing the plot: A Multi-Agent System for Speech Data Quality Management"
              role="Second Author"
              conference="Findings of ACL 2026"
              description="SpeechQM-Agent is a natural language-driven multi-agent system that automates speech dataset quality verification, achieving 80-90% agreement with experts at <20% cost and time."
              link="https://yet-to-be-published.com"
            />
          </Col>

          <Col md={5} className="project-card">
            <ResearchCard
              title="Post-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low-Resource Scenarios"
              role="Research Contributor"
              conference="EACL 2026"
              description="This paper showcases how fine-tuned smaller models (mT5, ByT5) outperform large LLMs for Hindi ASR post-correction, revealing an inverse scaling trend in zero-shot ICL and strong cross-lingual generalization."
              link="https://aclanthology.org/2026.eacl-short.45"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Research;
