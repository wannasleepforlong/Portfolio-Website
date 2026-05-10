import emotion from "../Assets/Projects/emotion.png";
import editor from "../Assets/Projects/codeEditor.png";
import chatify from "../Assets/Projects/semantic.webp";
import bitsOfCode from "../Assets/Projects/blog.png";
import wapp from "../Assets/Projects/Whatsapp agent.webp";

export const projects = [
  {
    imgPath: chatify,
    isBlog: false,
    title: "Semantic Search for NIC Codes",
    description:
      "Multilingual web application enabling semantic search for National Industrial Classification (NIC)",
    ghLink: "https://github.com/wannasleepforlong/Semantic-Search-for-NIC-Codes",
  },
  {
    imgPath: editor,
    isBlog: false,
    title: "AarogyaAI: AI-Powered Telemedicine Platform",
    description:
      "AI-powered telemedicine platform with symptom analysis, doctor matching, video consultations and automated medical notes",
    ghLink: "https://github.com/wannasleepforlong/AarogyaAI",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "SemRAG for Improved Question Answering",
    description:
      "A semantic knowledge-augmented RAG system with hybrid retrieval using vector search and BM25",
    ghLink: "https://github.com/wannasleepforlong/SemRAG",
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: "Face Detection Attendance System",
    description:
      "Face attendance system with the functions of taking, reading and compiling attendance deployed using streamlit",
    ghLink:
      "https://github.com/wannasleepforlong/Deployed-Face-Detection-Attendance-System",
  },
  {
    imgPath: wapp,
    isBlog: false,
    title: "Automated WhatsApp Agent LifeLift Coach",
    description:
      "Built a smart Life Coach chatbot assistant with n8n, GPT-4.1 mini and Gemini 2.0 Flash-Lite.",
    ghLink:
      "https://github.com/wannasleepforlong/Automated-WhatsApp-Agent-LifeLift-Coach/",
  },
];

export const projectImagePaths = projects.map((project) => project.imgPath);
