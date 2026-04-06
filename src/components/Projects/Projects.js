import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/semantic.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import wapp from "../../Assets/Projects/Whatsapp agent.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Semantic Search for NIC Codes"
              description="Multilingual web application enabling semantic search for National Industrial Classification (NIC)"
              ghLink="https://github.com/wannasleepforlong/Semantic-Search-for-NIC-Codes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AarogyaAI: AI-Powered Telemedicine Platform"
              description="AI-powered telemedicine platform with symptom analysis, doctor matching, video consultations and automated medical notes"
              ghLink="https://github.com/wannasleepforlong/AarogyaAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SemRAG for Improved Question Answering"
              description="A semantic knowledge-augmented RAG system with hybrid retrieval using vector search and BM25"
              ghLink="https://github.com/wannasleepforlong/SemRAG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Detection Attendance System"
              description="Face attendance system with the functions of taking, reading and compiling attendance deployed using streamlit"
              ghLink="https://github.com/wannasleepforlong/Deployed-Face-Detection-Attendance-System"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wapp}
              isBlog={false}
              title="Automated WhatsApp Agent LifeLift Coach"
              description="Built a smart Life Coach chatbot assistant with n8n, GPT-4.1 mini and Gemini 2.0 Flash-Lite."
              ghLink="https://github.com/wannasleepforlong/Automated-WhatsApp-Agent-LifeLift-Coach/"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
