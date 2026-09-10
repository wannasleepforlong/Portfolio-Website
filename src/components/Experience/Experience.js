import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience({ theme }) {
  return (
    <Container fluid className="project-section">
      <Particle theme={theme} />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "var(--muted-text)" }}>
          Here are my professional experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperienceCard
              title="Founding AI/ML Engineer"
              company="WeSourceU"
              date="Mar 2026 – Present"
              location="Remote"
              description={[
                "Developed a multi-agent AI system that analyzes market and financial signals to generate predictions with live news context.",
                "Designed a scalable end-to-end AI pipeline for document ingestion, indexing, and retrieval, to process and analyze 1000+ financial documents.",
                "Contributed to AI governance and compliance platform, designing features across security, audit, and evidence tracking with 86% threat detection.",
                "Deployed the pipelines on AWS for high reliability and efficient performance at scale.",
              ]}
            />
          </Col>
          <Col md={12} className="project-card">
            <ExperienceCard
              title="Machine Learning Intern"
              company="IIT Bombay"
              date="Oct 2024 – May 2025"
              location="Remote"
              description={[
                "Fine-tuned multiple large language models (LLMs) from Hugging Face, adapting models for performance optimization on custom datasets.",
                "Developed Automatic Speech Recognition pipelines for multilingual audio transcription using Speech2Text models, integrating diarization, Voice Activity Detection (VAD) and XML Generation.",
                "Developed ASR Transcripts error detection pipelines and built pipeline integrating diarization and transcription.",
                "Developed SpeechQMAgent, a multi-agent framework for automated verification of large-scale multilingual speech-text datasets with 24 quality checks.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
