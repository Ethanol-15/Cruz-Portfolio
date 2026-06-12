/* ============================================================
   data/projects.js — Project data array

   Keeping content in a separate data file means you never
   have to touch component logic just to update a description
   or add a new project. Just edit this array and the UI
   updates automatically via .map() in Projects.js.
   ============================================================ */

   import coachEScreenshot from '../assets/project-images/coach-e-app-scrsht.png';
   import coachEVideo from '../assets/project-images/coach-e-app-video.mp4';
   
   import emotoxScreenshot1 from '../assets/project-images/emotox-scrsht.png';
   import emotoxScreenshot2 from '../assets/project-images/emotox-scrsht-2.png';
   
   import nlpGuardrailScreenshot from '../assets/project-images/nlp-guardrail-scrsht.png';
   import nlpGuardrailVideo from '../assets/project-images/nlp-guardrail-video.mp4';
   
   import visionTransformerScreenshot from '../assets/project-images/vision-transformer-scrsht.png';
   
   import simpleScriptScreenshot from '../assets/project-images/simplescript-scrsht.png';
   import simpleScriptVideo from '../assets/project-images/simplescript-video.mp4';
   
   import syntaxCheckerScreenshot from '../assets/project-images/syntax-checker-scrsht.png';
   import syntaxCheckerVideo from '../assets/project-images/syntax-checker-video.mp4';
   
   import lra1 from '../assets/project-images/lra-1.png';
   import lra2 from '../assets/project-images/lra-2.png';
   import lra3 from '../assets/project-images/lra-3.png';
   import lra4 from '../assets/project-images/lra-4.png';
   import lra5 from '../assets/project-images/lra-5.png';
   
   const projects = [
     {
       id: 1,
       slug: 'coach-e',
       title: 'Coach E — AI Fitness Coach',
       badge: 'personal',
       description:
         'Full-stack AI coaching web app with LLaMA-powered chat, RAG over a gym Q&A dataset using FAISS and SentenceTransformer, and a Body Fat Analyzer using Groq\'s vision model with the U.S. Navy formula. Tracks weight, strength, and calories with Plotly charts backed by Supabase.',
       longDesc:
         'Coach E is an AI-powered fitness coaching web application designed to help users with hypertrophy training, nutrition guidance, body composition analysis, and progress tracking. The app combines a LLaMA-powered chatbot through Groq API with retrieval-augmented generation over a custom gym knowledge base using FAISS and SentenceTransformer embeddings. It also includes a body fat analyzer powered by Groq\'s vision model and the U.S. Navy formula, plus analytics for weight, strength, calorie intake, and macro tracking using Supabase and Plotly.',
       tags: ['Streamlit', 'Groq API', 'LLaMA', 'FAISS', 'Supabase', 'RAG', 'Plotly'],
       highlights: [
         'Built an AI fitness chatbot using LLaMA through Groq API.',
         'Implemented RAG using FAISS and SentenceTransformer embeddings over a gym Q&A dataset.',
         'Added body fat analysis using Groq vision and the U.S. Navy formula.',
         'Created calorie, macro, weight, and strength tracking with analytics.',
         'Used Supabase for backend storage and user data persistence.',
       ],
       images: [coachEScreenshot],
       videoUrl: coachEVideo,
       liveUrl: 'https://coach-e-gym.streamlit.app',
       repoUrl: 'https://github.com/Ethanol-15/gym-ai-trainer-coach-e-v2',
     },
     {
       id: 2,
       slug: 'emotox',
       title: 'EmoTox — Emotion-Aware Toxicity Detection',
       badge: 'thesis',
       description:
         'Led thesis project building a hybrid CNN-LSTM and BiLSTM ensemble for toxicity detection through emotion and sarcasm analysis. Focused on NLP classification, emotion-aware detection, model comparison, and evaluation against baseline approaches.',
       longDesc:
         'EmoTox is a thesis project focused on emotion-aware toxicity detection using natural language processing and deep learning. As thesis leader, I guided the development of a hybrid CNN-LSTM and BiLSTM ensemble approach designed to detect toxic language while considering emotional cues and sarcasm patterns. The project involved dataset preparation, model experimentation, performance comparison, and evaluation against baseline toxicity detection methods.',
       tags: ['PyTorch', 'CNN-LSTM', 'BiLSTM', 'NLP', 'Ensemble'],
       highlights: [
         'Served as thesis leader for the EmoTox project.',
         'Built a toxicity detection pipeline using NLP and deep learning.',
         'Explored emotion and sarcasm analysis to improve toxicity classification.',
         'Implemented and compared CNN-LSTM and BiLSTM-based model approaches.',
         'Focused on model evaluation, experimentation, and baseline comparison.',
       ],
       images: [emotoxScreenshot1, emotoxScreenshot2],
       videoUrl: '',
       liveUrl: '',
       repoUrl: 'https://github.com/Ethanol-15/EmoTox',
     },
     {
       id: 3,
       slug: 'nlp-guardrail',
       title: 'NLP-Guardrail — Content Safety System',
       badge: 'school',
       description:
         'Streamlit-based NLP safety system with toxicity classification, retrieval-augmented generation using ChromaDB, and Groq API integration. Built as a configurable content safety guardrail for identifying harmful or unsafe text inputs.',
       longDesc:
         'NLP-Guardrail is a content safety system designed to detect harmful, toxic, or unsafe text inputs within an LLM workflow. The project uses NLP-based classification, retrieval-augmented generation through ChromaDB, and Groq API integration. It was built with a Streamlit interface to make the system easy to test, demonstrate, and deploy as a configurable guardrail for language model applications.',
       tags: ['Streamlit', 'ChromaDB', 'Groq API', 'RAG', 'NLP'],
       highlights: [
         'Built a Streamlit interface for testing toxicity and unsafe text detection.',
         'Integrated Groq API for LLM-powered processing.',
         'Used ChromaDB for retrieval-augmented generation support.',
         'Designed the system as a configurable safety guardrail for LLM applications.',
         'Focused on practical deployment and dependency cleanup for Streamlit Cloud.',
       ],
       images: [nlpGuardrailScreenshot],
       videoUrl: nlpGuardrailVideo,
       liveUrl: '',
       repoUrl: 'https://github.com/Ethanol-15/NLP-GuardRail',
     },
     {
       id: 4,
       slug: 'vision-transformer',
       title: 'Vision Transformer — From Scratch',
       badge: 'research',
       description:
         'Self-directed learning project building Vision Transformer notebooks from scratch and with pretrained weights in Jupyter. Explores image patching, embeddings, attention mechanisms, CLS tokens, and how vision-language models process visual inputs.',
       longDesc:
         'This Vision Transformer project is a self-directed research and learning project focused on understanding how transformer architecture can be applied to images. The notebooks explore how images are divided into patches, converted into embeddings, passed through attention layers, and summarized using CLS tokens. The project connects prior knowledge of NLP transformers with computer vision and vision-language model concepts.',
       tags: ['PyTorch', 'ViT', 'Attention', 'Jupyter', 'LLaMA 4'],
       highlights: [
         'Built Vision Transformer concepts from scratch in Jupyter notebooks.',
         'Explored image patching, patch embeddings, and positional embeddings.',
         'Studied attention mechanisms in the context of computer vision.',
         'Connected NLP transformer knowledge to vision-language model architecture.',
         'Used the project to better understand how models process visual inputs.',
       ],
       images: [visionTransformerScreenshot],
       videoUrl: '',
       liveUrl: '',
       repoUrl: '',
     },
     {
       id: 5,
       slug: 'simplescript2',
       title: 'SimpleScript2 — Public Compiler Project',
       badge: 'school',
       description:
         'Java-based mini-compiler for a simplified language called SimpleScript. Implements lexical analysis, LL(1) table-driven parsing, CSV-based grammar tables, First and Follow set validation, and parser error reporting for invalid productions and unexpected tokens.',
       longDesc:
         'SimpleScript2 is a Java-based mini-compiler created for a Programming Languages course. It implements the front-end stages of compiler construction for a simplified language called SimpleScript, including lexical analysis, LL(1) syntax parsing, grammar validation, and CSV-driven parsing tables. The project demonstrates how source code can be tokenized, parsed, validated, and checked for syntax errors using compiler design principles.',
       tags: ['Java', 'Compiler Design', 'Scanner', 'LL(1) Parser', 'CSV'],
       highlights: [
         'Implemented lexical analysis for tokenizing SimpleScript source files.',
         'Built an LL(1) table-driven parser for syntax analysis.',
         'Used CSV files for grammar rules, First/Follow sets, and parsing tables.',
         'Added error detection for unexpected tokens and invalid productions.',
         'Published a cleaned public version for portfolio and academic reference.',
       ],
       images: [simpleScriptScreenshot],
       videoUrl: simpleScriptVideo,
       liveUrl: '',
       repoUrl: 'https://github.com/Ethanol-15/SimpleScript2',
     },
     {
       id: 6,
       slug: 'syntax-checker-saas',
       title: 'Syntax Checker SaaS',
       badge: 'school',
       description:
         'Spring Boot SaaS-style syntax checker that validates Java assignment statements through a REST API. Includes backend validation, rate limiting, exception handling, Java Reflection demonstration, Postman API testing, and a simple responsive frontend UI.',
       longDesc:
         'Syntax Checker SaaS is a Spring Boot project that provides a REST API for validating Java assignment statements. The system includes backend syntax validation, exception handling, API rate limiting, cooldown tracking, and a simple frontend interface for testing. It also demonstrates Java Reflection by accessing private fields and follows interface-driven design principles for abstraction and maintainability.',
       tags: ['Java', 'Spring Boot', 'REST API', 'Maven', 'HTML', 'CSS', 'JavaScript'],
       highlights: [
         'Built a Spring Boot REST API for Java assignment syntax validation.',
         'Implemented rate limiting with cooldown tracking.',
         'Added exception handling for invalid syntax and unexpected errors.',
         'Created a simple frontend using HTML, CSS, and JavaScript.',
         'Tested backend endpoints using Postman.',
       ],
       images: [syntaxCheckerScreenshot],
       videoUrl: syntaxCheckerVideo,
       liveUrl: '',
       repoUrl: 'https://github.com/Ethanol-15/SAAS_SyntaxChecker_Project/tree/main',
     },
     {
       id: 7,
       slug: 'lra-student-grading-system',
       title: 'LRA Student Grading System',
       badge: 'school',
       description:
         'Software Engineering 2 project for a student grading system. Worked as Web Designer and QA, designing dashboard layouts with HTML, CSS, and Figma while testing grade reports, attendance input, and export features.',
       longDesc:
         'The LRA Student Grading System is a Software Engineering 2 project focused on managing student grades, attendance, reports, and export features. I worked as a Web Designer and QA contributor, designing dashboard layouts using HTML, CSS, and Figma while testing core system features such as grade reports, attendance input, and export functionality.',
       tags: ['HTML', 'CSS', 'Figma', 'UI/UX', 'QA Testing'],
       highlights: [
         'Worked as Web Designer and QA for the project.',
         'Designed dashboard layouts using HTML, CSS, and Figma.',
         'Improved usability and visual structure of the grading system interface.',
         'Tested grade report, attendance input, and export features.',
         'Helped validate user flows and core system functionality.',
       ],
       images: [lra1, lra2, lra3, lra4, lra5],
       videoUrl: '',
       liveUrl: '',
       repoUrl: '',
     },
   ];
   
   export default projects;