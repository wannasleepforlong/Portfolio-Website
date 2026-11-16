// Project catalogue. Every number here comes from the project's own README / eval results.
// Keep it that way: recruiters check.

const GH = "https://github.com/wannasleepforlong/";

export const categories = [
  "All",
  "Agents & LLMs",
  "Speech & Audio",
  "Computer Vision",
  "ML & Data",
  "Full-Stack",
];

export const flagship = [
  {
    title: "Handwritten Diagram → Editable Graph",
    tagline: "Reimplemented an IEEE Access 2026 paper; beat it on handwriting recognition",
    category: "Computer Vision",
    badge: "IEEE paper reimplementation",
    description:
      "Turns a photo of a hand-drawn flowchart or finite automaton into a structured graph and exports Mermaid, draw.io, SVG and an HTML report. Four-stage pipeline: YOLOv7 detects symbols and arrows, DeepLabv3 segments arrow strokes, TrOCR reads handwritten labels, and a linker joins arrow heads and tails to shapes. Trained on 2× T4 in about 6 hours with a third of the paper's epochs.",
    metrics: [
      { value: "98.9%", label: "symbol mAP (IoU 0.8)" },
      { value: "99%", label: "arrows linked correctly" },
      { value: "0.21", label: "text CER (paper: 0.26)" },
      { value: "46%", label: "WER (paper: 84%)" },
    ],
    tech: ["PyTorch", "YOLOv7", "DeepLabv3", "TrOCR", "Kaggle 2×T4"],
    ghLink: GH + "Hybrid-Object-Detection-and-Semantic-Segmentation-for-Offline-Handwritten-Diagram-Understanding",
  },
  {
    title: "Sewa Setu: Government Pension AI Channel",
    tagline: "Production MCP servers that let any AI assistant file and review pension applications",
    category: "Agents & LLMs",
    badge: "Deployed on AWS",
    description:
      "An official assistant channel for an old-age pension scheme. Two MCP servers over streamable HTTP, one for citizens (apply, upload proof, track) and one for block officers (urgency-sorted queue, automatic checks, decisions with reason codes). Both go through the portal's own OAuth 2.1 server and the same server-side validation as the website, so an assistant can never get anyone a pension the counter wouldn't. Evaluated with simulated personas driving a real MCP client against live endpoints.",
    metrics: [
      { value: "16", label: "MCP tools across 2 servers" },
      { value: "33", label: "persona eval scenarios" },
      { value: "OAuth 2.1", label: "PKCE, RFC 8414 / 7591 / 8707" },
      { value: "5", label: "end-to-end test suites" },
    ],
    tech: ["Python", "MCP", "OAuth 2.1", "Docker", "LLM evals"],
    ghLink: GH + "sewasetu-assistant",
  },
  {
    title: "PhirSe: Hindi Voice Coach for Stroke Survivors",
    tagline: "Voice-first word-finding practice for people with aphasia, no app or literacy needed",
    category: "Speech & Audio",
    badge: "Bolna Buildathon 2026 · Live",
    description:
      "India has about 2 million people living with post-stroke aphasia and about 6,000 speech therapists. PhirSe gives a family a private link; the patient presses one button and a slow, warm Hindi voice runs a guided naming session with a hint ladder. It waits through long pauses, never says \"wrong\", double-checks answers with two speech-to-text passes, and stops at once on warning words such as chest pain or dizziness. All spoken lines are cached and shared across profiles to keep TTS costs down.",
    metrics: [
      { value: "~2M", label: "patients in target population" },
      { value: "2×", label: "STT passes per answer" },
      { value: "10–15 min", label: "guided daily sessions" },
      { value: "24", label: "starter everyday Hindi words" },
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Sarvam STT/TTS", "Silero VAD"],
    ghLink: GH + "PhirSe",
    demoLink: "https://phirse-flax.vercel.app",
  },
  {
    title: "SemRAG: Knowledge-Augmented RAG",
    tagline: "Published on arXiv: a lighter GraphRAG alternative with no LLM graph extraction",
    category: "Agents & LLMs",
    badge: "arXiv 2507.21110",
    description:
      "A RAG system that splits documents where meaning changes (embedding-distance chunking) instead of at fixed token counts, then retrieves with three signals: dense vectors, BM25 keywords and a knowledge graph. The graph is built from spaCy entities and subject-verb-object relations, clustered with Louvain, so it needs no LLM calls to construct. The LLM only writes the final answer from the retrieved evidence, which keeps it grounded.",
    metrics: [
      { value: "3", label: "fused retrieval signals" },
      { value: "0", label: "LLM calls to build the graph" },
      { value: "Louvain", label: "community-aware expansion" },
      { value: "arXiv", label: "peer-shared preprint" },
    ],
    tech: ["LangChain", "ChromaDB", "BM25", "spaCy", "NetworkX"],
    ghLink: GH + "SemRAG",
    demoLink: "https://arxiv.org/abs/2507.21110",
    demoLabel: "Paper",
  },
  {
    title: "Conflict Prediction with Temporal GNNs",
    tagline: "Forecasting which country pairs escalate, from 30M+ global news events",
    category: "ML & Data",
    badge: "Graph ML",
    description:
      "Builds monthly interaction graphs between nations from the GDELT event database (conflict vs cooperation counts, tone, network statistics) and trains temporal graph networks to predict escalation on each directed country pair. Two architectures, an LSTM-GCN and a Temporal-GAT whose attention weights explain which relationships drove a prediction. Includes a cached data pipeline with API retry/backoff, early stopping and risk-report visualisations.",
    metrics: [
      { value: "30M+", label: "GDELT events processed" },
      { value: "2", label: "temporal GNN architectures" },
      { value: "12-mo", label: "rolling graph windows" },
      { value: "42", label: "directed country-pair edges" },
    ],
    tech: ["PyTorch Geometric", "GAT", "LSTM-GCN", "GDELT", "Pandas"],
    ghLink: GH + "Geopolitical-Network-Analysis-Conflict-Prediction-with-GNNs",
  },
  {
    title: "HK Flood Swarm: Multi-Agent Flood Forecasting",
    tagline: "A swarm of LLM agents reading live observatory feeds to flag compound flood risk",
    category: "Agents & LLMs",
    badge: "Explainable AI",
    description:
      "Specialist agents for rainfall, tide, warnings, forecast and lightning each read real-time Hong Kong Observatory data, and an orchestrator combines their signals. A dedicated agent catches dangerous co-occurrences such as heavy rain at peak high tide, which single-variable models miss. Every prediction comes with a reasoning narrative in English and Traditional Chinese, served through a FastAPI backend and a live dashboard.",
    metrics: [
      { value: "5", label: "specialist agents + orchestrator" },
      { value: "2", label: "output languages (EN / 繁中)" },
      { value: "Live", label: "HKO real-time data feeds" },
      { value: "Every", label: "prediction ships its reasoning" },
    ],
    tech: ["Python", "FastAPI", "OpenAI", "Pydantic", "pytest"],
    ghLink: GH + "FloodHKAgent",
  },
];

export const catalogue = [
  {
    title: "SpeechQM+ Agent Planner",
    category: "Agents & LLMs",
    description:
      "A central LLM reads a catalogue of speech agents (ASR, translation, audio-LLM, general LLM) and generates every valid chain that answers a query about speech data, then picks the best plans. Built on LangGraph over IndicVoices.",
    highlight: "4 agents · auto-generated plans",
    tech: ["LangGraph", "Gemini", "IndicVoices"],
    ghLink: GH + "Speech-QM-Plus",
  },
  {
    title: "Vocoid: Procedural NPC Voices",
    category: "Speech & Audio",
    description:
      "Game-dialogue babble synthesised live from maths (glottal source and formant filters, no recordings). Uses CMU-dictionary pronunciation, natural pitch glides and inline mood tags.",
    highlight: "7 voices · 7 emotions · 0 recordings",
    tech: ["Python", "DSP", "Formant synthesis"],
    ghLink: GH + "Vocoid",
  },
  {
    title: "KrishiVaani: Hindi Agri-Speech ASR",
    category: "Speech & Audio",
    description:
      "A conversational Hindi agriculture speech dataset with LLM post-ASR correction experiments: zero-, one-, three- and seven-shot prompts chosen at random or by SONAR / SBERT similarity, across known, unknown and out-of-domain splits.",
    highlight: "3 test splits · 8 prompting setups",
    tech: ["Wav2Vec2", "GPT", "SBERT", "SONAR"],
    ghLink: GH + "Epilepsy-Seizure-Prediction-2nd-Sem",
  },
  {
    title: "TableTalk: Narrative Audio Intelligence",
    category: "Speech & Audio",
    description:
      "Organises and searches storytelling recordings: acoustic feature extraction, weakly supervised tone labels from zero-shot NLI, a neural tone classifier, and AI transcription scored with WER / CER.",
    highlight: "4 tone classes · weak supervision",
    tech: ["Librosa", "Keras", "Whisper", "Gemini"],
    ghLink: GH + "TableTalk-Human-AI",
  },
  {
    title: "Wav2Vec2 Speech Emotion Recognition",
    category: "Speech & Audio",
    description:
      "Partial-freeze fine-tuning of wav2vec2-base (CNN and bottom 6 transformer layers frozen) with a custom MLP head to classify emotion from raw audio on a small dataset.",
    highlight: "7 emotion classes",
    tech: ["PyTorch", "HuggingFace", "Wav2Vec2"],
    ghLink: GH + "Voice-Based-Emotion-Recognition-Module",
  },
  {
    title: "Hindi Whisper ASR Benchmark",
    category: "Speech & Audio",
    description:
      "Compared vanilla Whisper with a Hindi fine-tuned Whisper-medium on the Kathbath dataset, with WER plus a breakdown of substitutions, deletions and insertions.",
    tech: ["Whisper", "jiwer", "Kathbath"],
    ghLink: GH + "Hindi-Whisper-Automatic-Speech-Recognition",
  },
  {
    title: "AarogyaAI Telemedicine Platform",
    category: "Full-Stack",
    description:
      "Team-built telemedicine platform for underserved areas: symptom analysis, doctor matching, video consultations with live transcription and auto-generated consultation notes.",
    highlight: "Team project",
    tech: ["React", "Node", "LLMs", "Google Meet"],
    ghLink: GH + "AarogyaAI",
  },
  {
    title: "Intelligent Care Assistant",
    category: "Agents & LLMs",
    description:
      "IoT care-activity pipeline that learns per-resident baselines, scores deviations with z-scores, raises alerts with cooldowns, and writes role-aware Gemini summaries checked against a schema, with an audit log.",
    highlight: "3 audience-specific summaries",
    tech: ["Python", "Gemini 2.5", "Anomaly detection"],
    ghLink: GH + "Gemini-API-Powered-Intelligent-Care-Assistant",
  },
  {
    title: "LifeLift WhatsApp Coach",
    category: "Agents & LLMs",
    description:
      "No-code WhatsApp agent: accepts voice or text, transcribes audio with Gemini, answers with GPT-4.1 mini, keeps memory of recent turns and looks up subscriptions in Google Sheets.",
    highlight: "Voice + text · 5-turn memory",
    tech: ["n8n", "GPT-4.1 mini", "Gemini"],
    ghLink: GH + "Automated-WhatsApp-Agent-LifeLift-Coach",
  },
  {
    title: "AmbedkarGPT: Local RAG Q&A",
    category: "Agents & LLMs",
    description:
      "Fully offline retrieval-augmented Q&A over Dr. B.R. Ambedkar's speech using local embeddings, a persistent ChromaDB store and Mistral 7B through Ollama.",
    highlight: "100% local, no API keys",
    tech: ["LangChain", "ChromaDB", "Ollama"],
    ghLink: GH + "AmbedkarGPT-Intern-Task",
  },
  {
    title: "Conversational Document Assistant",
    category: "Agents & LLMs",
    description:
      "Chat with your PDFs: cleaned text, sentence-transformer embeddings in Chroma and a quantised Zephyr-7B conversational retrieval chain with memory, behind a Gradio UI.",
    tech: ["Zephyr-7B", "LangChain", "Gradio"],
    ghLink: GH + "Conversational-Document-Assistant-using-RAG",
  },
  {
    title: "ForkedTales",
    category: "Full-Stack",
    description:
      "Platform for publishing and reading branching, visual-novel-style stories, with an author editor, a reader runtime and a condition engine for story choices.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Zustand"],
    ghLink: GH + "ForkedTales",
  },
  {
    title: "Post-Stroke Lesion Segmentation",
    category: "Computer Vision",
    description:
      "Comparative study of medical segmentation networks for stroke lesions in brain MRI on the ATLAS dataset, with shared preprocessing, training and evaluation pipelines.",
    highlight: "4 architectures: U-Net, V-Net, SegNet, X-Net",
    tech: ["TensorFlow", "Medical imaging", "ATLAS"],
    ghLink: GH + "Analysis-of-Anatomical-Tracings-of-Lesions-After-Stroke",
  },
  {
    title: "End-to-End Self-Driving Car",
    category: "Computer Vision",
    description:
      "CNN that predicts steering from camera frames, trained with augmentation and angle-balanced data, then drives the Udacity simulator in real time over a Socket.IO server.",
    highlight: "Real-time closed-loop control",
    tech: ["Keras", "OpenCV", "Flask", "Socket.IO"],
    ghLink: GH + "Self-Driving-Car",
  },
  {
    title: "Generative Vision Lab",
    category: "Computer Vision",
    description:
      "A series of GANs built from scratch: DCGAN anime and CelebA faces, LSGAN cats, CycleGAN unpaired image translation and StyleGAN3 on a custom face dataset.",
    highlight: "5 GAN variants",
    tech: ["PyTorch", "GANs", "StyleGAN3"],
    ghLink: GH + "Custom-Face-Dataset-StyleGan3",
  },
  {
    title: "YOLOv8 Vehicle Detection",
    category: "Computer Vision",
    description:
      "Fine-tuned a pretrained YOLOv8 model to detect vehicle classes on a custom-labelled dataset.",
    tech: ["YOLOv8", "Ultralytics"],
    ghLink: GH + "YOLO-Vehicle-Detection",
  },
  {
    title: "Face Recognition Attendance",
    category: "Computer Vision",
    description:
      "Deployed attendance system with login that recognises faces, records attendance and compiles reports through a Streamlit interface.",
    tech: ["face_recognition", "OpenCV", "Streamlit"],
    ghLink: GH + "Deployed-Face-Detection-Attendance-System",
  },
  {
    title: "Book Recommender",
    category: "ML & Data",
    description:
      "Collaborative-filtering and popularity-based book recommender served as a Streamlit web app and packaged with Docker.",
    tech: ["Scikit-learn", "Streamlit", "Docker"],
    ghLink: GH + "Book-Recommender-Website-using-Streamlit-and-Docker",
  },
  {
    title: "Breast Cancer Classification",
    category: "ML & Data",
    description:
      "Classification models for breast cancer diagnosis with feature analysis and model comparison.",
    tech: ["Scikit-learn", "Pandas"],
    ghLink: GH + "Advanced-Breast-Cancer-Classification",
  },
  {
    title: "Customer Segmentation",
    category: "ML & Data",
    description:
      "Unsupervised clustering of customers into actionable segments with exploratory analysis and cluster profiling.",
    tech: ["K-Means", "Pandas", "Seaborn"],
    ghLink: GH + "Customer-Analysis-by-Segmentation-Clustering",
  },
];

export const headlineStats = [
  { value: "60", label: "public repositories" },
  { value: String(flagship.length + catalogue.length), label: "projects showcased" },
  { value: "3", label: "papers, incl. EACL 2026" },
  { value: "5", label: "domains, research to production" },
];
