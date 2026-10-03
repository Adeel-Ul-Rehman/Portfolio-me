'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Code, ShoppingCart, Bot, Smartphone, Mail, Cpu, Database, FileText, GitBranch, GraduationCap, Terminal, Network } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'hadi-bookstore',
    title: 'Hadi Book Store',
    category: 'Web & E-Commerce',
    categorySlug: 'web',
    tagline: 'Full-Stack E-Commerce Platform & Admin Portal (Production Live)',
    image: '/projects/hadi-bookstore.jpg',
    icon: ShoppingCart,
    badge: 'Live Platform',
    liveUrl: 'https://hadibookstore.vercel.app/',
    adminUrl: 'https://hadibookstore-admin.vercel.app/admin',
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/hadibooksstore',
    description: 'Complete production e-commerce ecosystem for online book retail, featuring a customer storefront and a dedicated administrative dashboard for inventory, order processing, and sales analytics.',
    adminOverview: 'Includes a dedicated administrative portal empowering store managers to monitor live incoming orders, manage book catalogs and stock levels, organize categories, and track business revenue analytics via interactive charts.',
    highlights: [
      'Customer Storefront: High-performance Next.js store with search indexing, dynamic categories, cart, and checkout',
      'Dedicated Admin Panel: Full management suite for order tracking, catalog updates, inventory controls, and sales metrics',
      'Dual-System Synchronization: Instant catalog and inventory sync across both customer storefront and administrative portal',
      'Production Deployment: Live full-stack architecture running securely on Vercel with responsive Tailwind CSS design'
    ],
    tech: ['React.js', 'Next.js', 'JavaScript', 'Node.js', 'Chart.js', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'the-hungry-hub',
    title: 'The Hungry Hub',
    category: 'Web & E-Commerce',
    categorySlug: 'web',
    tagline: 'Restaurant Management & Geofenced Ordering System',
    image: '/projects/the-hungry-hub.jpg',
    icon: Code,
    badge: 'Live System',
    liveUrl: 'https://thehungryhub.shop',
    adminUrl: 'https://hungry-hub-web-admin.vercel.app/login',
    adminTitle: 'Dedicated Restaurant Management & Order Monitoring Admin Portal',
    adminOverview: 'Includes a live administrative web dashboard for restaurant management, real-time incoming order monitoring, menu catalog pricing controls, and kitchen dispatch tracking.',
    adminCredentials: {
      email: 'admin@thehungryhub.shop',
      password: 'admin123'
    },
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/theHungryHub',
    description: 'Enterprise web & desktop restaurant operating system powering a live establishment in Rawalpindi with integrated customer ordering and live administrative portal.',
    highlights: [
      'Dedicated Admin Web Portal: Live web dashboard for restaurant managers to monitor incoming orders, update menus, and track business operations (https://hungry-hub-web-admin.vercel.app/login)',
      'C# admin desktop application real-time synced with web portal for instant menu & pricing updates',
      'Geofenced delivery ordering: automatically calculates customer distance and blocks orders beyond 4km',
      'Automatic order punching system with kitchen prep-time tracking and queue management',
      'Offline-capable operation with auto-printed receipts and kitchen slips containing dynamic QR codes'
    ],
    tech: ['React.js', 'Next.js', 'C#', 'ASP.NET / Web API', 'SignalR', 'Geolocation API', 'SQL', 'QR Generation', 'Vercel']
  },
  {
    id: 'repo-code-bridge',
    title: 'RepoCodeBridge — GitHub to AI Context Synthesizer',
    category: 'Web & E-Commerce',
    categorySlug: 'web',
    tagline: 'Full-Stack Developer Platform Converting Git Repositories into LLM-Ready Context',
    image: '/projects/repo-code-bridge.jpg',
    icon: GitBranch,
    badge: 'Production Live',
    liveUrl: 'https://repo-code-bridge.vercel.app/',
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/repoCodeBridge.git',
    description: 'Production full-stack platform that transforms entire GitHub codebases into structured, token-optimized Markdown context for Large Language Models (ChatGPT, Claude, Gemini).',
    highlights: [
      'Octokit GitHub Integration: Deep-traverses multi-branch repositories, filtering binary assets while extracting complete file hierarchies and codebases',
      'Intelligent Directory Tree & Markdown Synthesis: Auto-detects programming languages, generates syntax-highlighted code blocks, and maps full project trees',
      'Live AI Shareable URLs: Generates unique, persistent shareable links allowing AI agents and web LLMs to ingest complete repositories via a single URL',
      'OAuth2 & Full-Stack Security: Integrated GitHub & Google OAuth2, JWT authentication, rate limiting, and Supabase / PostgreSQL database persistence',
      'ZIP Packaging & Real-Time Sync: In-browser code bundle downloads via JSZip and background repository synchronization for updated commits'
    ],
    tech: ['Next.js 14', 'React.js', 'Node.js', 'Express', 'Octokit API', 'Supabase / PostgreSQL', 'OAuth2 / JWT', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'ead-university-attendance',
    title: 'University Attendance & Academic Management System',
    category: 'Web & E-Commerce',
    categorySlug: 'web',
    tagline: 'Multi-Tier ASP.NET Core 8 & EF Core Enterprise Academic Platform',
    image: '/projects/ead-attendance-portal.jpg',
    icon: GraduationCap,
    badge: 'Enterprise Architecture',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/Ead-project.git',
    description: 'Enterprise-grade multi-tier academic management platform built with ASP.NET Core 8, Entity Framework Core, and Clean Architecture, powering real-time lecture attendance tracking, course scheduling, and student analytics.',
    highlights: [
      'Multi-Tier N-Layered Architecture: Clean separation across Web MVC/API, Business Services, Entity Framework Data Layer, and Domain Entities for enterprise maintainability',
      'Multi-Role RBAC & JWT Security: Dedicated role-based portals for Students, Faculty, and Administrators with secure JWT authentication and custom middleware',
      'Real-Time Attendance Roster: High-speed batch attendance marking with responsive AJAX pagination, instant validation, and automated shortage threshold alerts',
      'Timetable & Academic Requests: Timetable scheduling rules, makeup lecture tracking, special sessions, and a unified approval pipeline for student leave requests',
      'Containerized Cloud Deployment: Production Dockerfile with multi-cloud support (Azure, Koyeb, Railway) and automated PostgreSQL / SQL Server database migrations'
    ],
    tech: ['ASP.NET Core 8', 'C#', 'Entity Framework Core', 'PostgreSQL / SQL Server', 'Clean Architecture', 'Docker', 'MVC / AJAX', 'JWT']
  },
  {
    id: 'mobilefirst-3d',
    title: 'MobileFirst3D — AI 3D Website Generator',
    category: 'AI / ML & 3D',
    categorySlug: 'ai',
    tagline: 'Autonomous AI Platform for Generating Mobile-First 3D Web Experiences',
    image: '/projects/mobilefirst-3d.jpg',
    icon: Bot,
    badge: 'AI & WebGL Platform',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/3d-web',
    description: 'Full-stack AI platform that transforms natural language prompts into responsive, touch-optimized 3D websites using Three.js, WebGL, and an iterative multi-agent generation pipeline.',
    highlights: [
      'Multi-Stage AI Pipeline: Features automated prompt expansion, dynamic clarifying Q&A loops, and self-evaluating refinement loops',
      'WebGL & Three.js Generation: Synthesizes interactive 3D geometry, lighting, particle fields, and smooth camera orbit controls',
      'Mobile-First Responsive Engine: Engineered for touch gestures, 60fps mobile interaction, and responsive cross-device fidelity',
      'Interactive Multi-Device Sandbox: Real-time iframe preview with mobile/tablet/desktop frame toggles and hot-reload',
      'Production ZIP Export: One-click package exporter bundling self-contained HTML5, CSS, and JS ready to deploy on Vercel or Netlify'
    ],
    tech: ['React 19', 'Three.js / WebGL', 'Node.js', 'Express', 'Tailwind CSS', 'Hugging Face API', 'Zustand', 'Vite']
  },
  {
    id: '3d-room-reconstruction',
    title: '3D Room Reconstruction & Spatial Mapping',
    category: 'AI / ML & 3D',
    categorySlug: 'ai',
    tagline: 'Photogrammetry & Gaussian Splatting 3D Engine',
    image: '/projects/3d-room-reconstruction.jpg',
    icon: Layers,
    badge: 'Photogrammetry & 3D',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/3d-mapping',
    description: 'Full-stack photogrammetry system converting 2D multi-view photo sequences into navigable, high-fidelity 3D room models and textured meshes.',
    highlights: [
      'COLMAP Structure-from-Motion (SfM): Automated feature extraction, image matching, sparse point cloud generation, and dense stereo fusion',
      'OpenCV Quality Inspection: Preprocessing pipeline evaluating image blur (Laplacian variance), sharpness, and multi-angle coverage',
      '3D Mesh & GLB Synthesis: Automated Open3D mesh generation and conversion from point clouds to compact binary GLB/GLTF assets',
      'Interactive WebGL Viewer: Three.js frontend with orbit camera controls, spatial measuring, and real-time reconstruction status tracking',
      'FastAPI Backend: Asynchronous processing queue managing multi-image batch uploads and output delivery'
    ],
    tech: ['Python', 'FastAPI', 'Three.js / WebGL', 'COLMAP', 'OpenCV', 'Open3D', 'NumPy', 'Docker']
  },
  {
    id: 'prep-mind',
    title: 'Prep Mind — AI Study Assistant',
    category: 'Automation & Mobile',
    categorySlug: 'mobile',
    tagline: 'Collaborative Cross-Platform AI-Powered Learning App',
    image: '/projects/prep-mind.jpg',
    icon: Smartphone,
    badge: 'Collaborative Project',
    liveUrl: null,
    githubUrl: 'https://github.com/ubaidsc/PrepMind_AI',
    description: 'Cross-platform Flutter application developed collaboratively as a group project with my classmate Ubaid, integrating generative AI to streamline student preparation and study routines.',
    highlights: [
      'Collaborative Development: Co-engineered with classmate Ubaid as a group project, managing modular Flutter widgets, state management, and Git collaboration (Repo: github.com/ubaidsc/PrepMind_AI)',
      'Automated note summarization, instant concept breakdown, and personalized study flashcards',
      'AI MCQ generator producing practice questions and automated grading with explanatory answers',
      'Interactive AI study chat assistant for instant academic problem solving',
      'Cross-platform Flutter build supporting iOS and Android with real-time cloud storage'
    ],
    tech: ['Flutter', 'Dart', 'LLM API', 'Firebase', 'Git / GitHub', 'Python']
  },
  {
    id: 'urdu-alphabet-recognition',
    title: 'Handwritten Urdu Alphabet Recognition',
    category: 'AI / ML & 3D',
    categorySlug: 'ai',
    tagline: 'Computer Vision & Deep Learning ML Pipeline',
    image: '/projects/urdu-alphabet-recognition.jpg',
    icon: Cpu,
    badge: 'Machine Learning',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/ML-project',
    description: 'End-to-end machine learning classification system for complex handwritten Urdu characters.',
    highlights: [
      'Custom image preprocessing pipeline: noise reduction, normalization, and image binarization',
      'Trained deep learning convolutional network for high accuracy across 38 distinct Urdu alphabets',
      'Extensive evaluation metrics: confusion matrices, precision/recall analysis, and validation loss tracking'
    ],
    tech: ['Python', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Matplotlib']
  },
  {
    id: 'c-mini-compiler',
    title: 'C-Mini-Compiler & Web IDE with AI Diagnostics',
    category: 'AI / ML & 3D',
    categorySlug: 'ai',
    tagline: 'Flex & Bison Compiler Pipeline with Virtual Machine & Interactive Web IDE',
    image: '/projects/c-mini-compiler.jpg',
    icon: Terminal,
    badge: 'Compiler Systems & AI',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/cc-mini-compiler.git',
    description: 'Lightweight C compiler engineered with Flex, Bison, and C++, featuring custom AST synthesis, Three-Address Code (TAC) generation, constant folding optimization, a virtual machine interpreter, and an interactive Flask Web IDE with AI syntax repair.',
    highlights: [
      'Complete Compiler Pipeline: Lexical tokenization via Flex (lexer.l), LALR(1) parsing via Bison (parser.y), and hierarchical Abstract Syntax Tree (AST) construction',
      'Symbol Table & Semantic Analysis: Scope resolution, identifier tracking, and type verification across primitives, functions, and dynamic arrays with bounds checking',
      'Intermediate Representation & Optimization: Quadruple Three-Address Code (TAC) generator with constant folding, dead code elimination, and algebraic simplification',
      'Virtual Machine / Interpreter: Direct TAC runtime execution environment with simulated memory registers and robust error recovery mechanisms',
      'Interactive Web IDE with AI Diagnostics: Flask-powered web interface offering live code editing, multi-tab compiler inspection (AST, TAC, Symbol Table), and AI-driven syntax repair'
    ],
    tech: ['C++', 'Flex (Lexer)', 'Bison (Parser)', 'Compiler Design', 'Python', 'Flask', 'TAC Intermediate Code', 'AST Visualizer', 'Web IDE']
  },
  {
    id: 'distributed-matrix-multiplication',
    title: 'Distributed Matrix Multiplication & HPC Cluster',
    category: 'AI / ML & 3D',
    categorySlug: 'ai',
    tagline: 'Master-Worker TCP Socket Cluster for Large-Scale Parallel Linear Algebra',
    image: '/projects/distributed-matrix-multiplication.jpg',
    icon: Network,
    badge: 'Distributed Systems',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/distributed-matrix-multiplication.git',
    description: 'High-performance distributed computing engine implemented with raw TCP sockets and Python, coordinating parallel multi-node matrix multiplications with custom binary framing and multi-threaded gathering.',
    highlights: [
      'Master-Worker Distributed Architecture: Coordinates horizontal matrix partitioning (A_i chunks), socket dispatch, and concurrent partial-result gathering via ThreadPoolExecutor',
      'Custom Binary Framing Protocol: Overcomes TCP stream fragmentation using a 4-byte big-endian length-prefixed framing protocol and robust recvall byte accumulation',
      'Optimized Parallel BLAS Compute: Dispatches workloads to worker nodes executing local dot-products using NumPy\'s high-speed C-optimized BLAS libraries',
      'Comprehensive Performance Profiling: Real-time benchmarking comparing pure parallel compute time, network serialization I/O overhead, and single-system baseline',
      'LAN / Multi-Node Scalability: Zero third-party heavyweight broker dependencies; connects directly across heterogeneous machines over standard LAN IP sockets'
    ],
    tech: ['Python', 'TCP Sockets', 'Distributed Systems', 'NumPy / BLAS', 'Multi-Threading', 'Network Protocols', 'HPC Benchmarking']
  },
  {
    id: 'email-automation-engine',
    title: 'Automated Email Marketing & Deliverability Engine',
    category: 'Automation & Mobile',
    categorySlug: 'mobile',
    tagline: 'High-Volume Lead Scraping & Mailbox Warmup System',
    image: '/projects/email-automation-engine.jpg',
    icon: Mail,
    badge: 'Automation',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/Automated-Web-Scraping-Email-Dispatch-Pipeline',
    description: 'Python automated scraping and cold email delivery infrastructure with strict inbox placement protection.',
    highlights: [
      'Scraped 1,000+ business emails daily, automatically filtering into verified public-facing target lists',
      'Dispatched 200–250 personalized cold outreach emails daily with custom queue management',
      'Configured and managed DNS authentication records (SPF, DKIM, DMARC) and mailbox warmup sequences to prevent domain flagging'
    ],
    tech: ['Python', 'Web Scraping', 'BeautifulSoup', 'SMTP', 'DNS / Deliverability', 'Data Analysis']
  },
  {
    id: 'ubereats-data-scraper',
    title: 'UberEats Lead Harvester & Scraper Engine',
    category: 'Automation & Mobile',
    categorySlug: 'mobile',
    tagline: 'Playwright Automation & Intelligent Chain Exclusion Engine',
    image: '/projects/ubereats-scraper.jpg',
    icon: Database,
    badge: 'Lead Automation',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/Ubereats-Data-Scraper.git',
    description: 'Production-ready Playwright Python extraction engine designed to harvest and verify high-value independent restaurant leads while automatically filtering out 150+ corporate fast-food chains.',
    highlights: [
      'Intelligent Chain Exclusion: Automated fuzzy string matching filtering 150+ major national franchises (McDonald\'s, Starbucks, Domino\'s, etc.) to isolate independent SMBs',
      'Deep Address & Schema Parsing: Navigates restaurant listings to extract full business names, phone numbers, and physical street addresses via schema.org JSON-LD',
      'Strict Quality Filtering: Enforces configurable review thresholds (>=100 reviews) and star ratings (>=4.0 stars) to curate high-converting B2B target lists',
      'Session Resume & Deduplication: State persistence tracking scraped URLs to seamlessly resume multi-location sessions without duplicate entries',
      'Multi-Location Batch Processing: CLI execution workflow generating structured per-market CSV exports for direct CRM integration'
    ],
    tech: ['Python', 'Playwright', 'Chromium', 'JSON-LD / Schema', 'Data Extraction', 'CSV Pipelines', 'B2B Leads']
  },
  {
    id: 'fluxconvert-pdf-apk',
    title: 'FluxConvert — Advanced PDF Converter & Scanner APK',
    category: 'Automation & Mobile',
    categorySlug: 'mobile',
    tagline: '100% Offline-First Flutter Document Scanner & PDF Utility Suite',
    image: '/projects/pdf-converter-apk.jpg',
    icon: FileText,
    badge: 'Android APK',
    liveUrl: null,
    githubUrl: 'https://github.com/Adeel-Ul-Rehman/PDF-converter-apk.git',
    description: 'Modern, high-performance, 100% offline-first Android document converter, smart camera scanner, and comprehensive PDF utility suite built with Flutter, Riverpod, and Clean Architecture.',
    highlights: [
      'Smart Camera Scanner: Live edge detection & quadrilateral perspective correction with multi-page batch scanning and enhancement filters (Magic Color, Grayscale)',
      'Universal Conversion Engine: Fast on-device conversion of camera/gallery images, Excel spreadsheets (.xlsx, .xls), and text (.txt) into paginated, styled PDFs',
      'Advanced PDF Utilities: Multi-tier compression engine (Low/Medium/Extreme), merge, split, page reordering, and hardware-accelerated PDF viewer with search & thumbnails',
      'Security & Signatures: AES password protection with permission controls, electronic signature pad overlay, freehand doodles, and custom watermarking',
      'Production Architecture: Built with Flutter 3.11+, Riverpod 2.x, GoRouter, Material 3 (adaptive Light/Dark), and memory-pressure-aware image caching preventing OOM crashes'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod 2.x', 'GoRouter', 'Clean Architecture', 'Material 3', 'PDF Engine', 'Android APK']
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { name: 'All Projects', slug: 'all' },
    { name: 'Web & E-Commerce', slug: 'web' },
    { name: 'AI / ML & 3D', slug: 'ai' },
    { name: 'Automation & Mobile', slug: 'mobile' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categorySlug === activeTab);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/70 border-t border-b border-slate-200/70 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300/50">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" /> Featured Engineering Work
            </div>
            <h2 className="text-xl min-[360px]:text-[1.38rem] sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight whitespace-nowrap">
              Featured Projects & Systems
            </h2>
          </div>
          <p className="text-slate-600 max-w-md font-medium text-sm sm:text-base leading-relaxed">
            From live production e-commerce and real-time restaurant operating engines to dual-model AI vision pipelines and automated deliverability systems.
          </p>
        </div>

        {/* Category Filter Tabs (Single line with right-scroll on mobile) */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 pb-3 overflow-x-auto no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-slate-200">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md shadow-slate-950/10'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60 bg-white sm:bg-transparent border border-slate-200 sm:border-0'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Uniform Clean Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Image Section Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 text-slate-800 shadow-xs border border-white/60 whitespace-nowrap">
                        <IconComp className="w-3.5 h-3.5 text-slate-900" />
                        {project.badge}
                      </span>

                      {project.liveUrl ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md bg-emerald-500/90 text-white shadow-xs whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md bg-slate-900/80 text-white shadow-xs whitespace-nowrap">
                          {project.categorySlug === 'ai' ? 'Research & ML' : 'Engine'}
                        </span>
                      )}
                    </div>

                    {/* Hover Backdrop Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        Click to view architecture
                      </span>
                      <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content Section */}
                  <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category Label */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 line-clamp-1 mb-3">
                        {project.tagline}
                      </p>

                      {/* Clean Description */}
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-5">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.slice(0, 4).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/50 whitespace-nowrap"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-medium border border-slate-200/50 whitespace-nowrap">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Card Bottom Bar */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-950">
                        <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        <div className="flex items-center gap-1.5">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-slate-950 transition-colors px-2 py-1 rounded-md hover:bg-slate-100 border border-slate-200/60 whitespace-nowrap"
                              title={project.id === 'hadi-bookstore' ? "Visit Live Storefront" : "Visit Live Application"}
                            >
                              <span>{project.id === 'hadi-bookstore' ? 'Store' : 'Live'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {project.adminUrl && (
                            <a
                              href={project.adminUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:text-blue-900 transition-colors px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100/80 border border-blue-200 whitespace-nowrap"
                              title="Visit Admin Panel"
                            >
                              <span>Admin</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
