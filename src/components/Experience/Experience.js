import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperienceCard
              title="Full-Stack AI Intern"
              company="NiyamR AI"
              date="Dec 2025 – Present"
              location="Remote"
              description={[
                "Developed an document intelligence web application to process and analyze 1000+ financial documents.",
                "Designed a scalable end-to-end AI pipeline for document ingestion, indexing, and retrieval.",
                "Integrated hybrid RAG-based verification and semantic search to improve transaction matching accuracy and compliance validation.",
                "Developed THIRD Prism, a multi-agent AI prediction engine leveraging OASIS architecture for large-scale simulation and decision modeling using Knowledge Graphs.",
                "Designed and implemented an autonomous agent swarm system with dynamic identities, goals, and interaction strategies.",
                "Deployed and managed multiple AI-driven applications on AWS, ensuring scalability, reliability, and efficient resource utilization.",
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
                "Developed SpeechQCAgent, a multi-agent framework for automated verification of large-scale multilingual speech-text datasets with 22 quality checks"
              ]}
            />
          </Col>

          <Col md={12} className="project-card">
            <ExperienceCard
              title="Machine Learning Intern"
              company="Zerzura Studios"
              date="Aug 2024 – May 2025"
              location="Remote"
              description={[
                "Developed features for an AI-based Digital Asset Management system with advanced capabilities for tagging, summarization and search.",
                "Integrated voice-based interaction and text-based chat capabilities for users to talk and message the model",
                "Built a RAG-based QA system for internal knowledge base, enabling users to quickly find relevant information."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
