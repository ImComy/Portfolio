import { Briefcase, Code2, Users, Rocket, Terminal, GitBranch } from 'lucide-react';

export const experiences = [
  {
    id: 'iti-bootcamp',
    role: 'Full-Stack Software Engineering Trainee',
    organization: 'Information Technology Institute (ITI)',
    location: 'Ismailia, Egypt',
    period: 'Jul 2024 — Aug 2024',
    type: 'Intensive Fellowship & Bootcamp',
    icon: Code2,
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    summary:
      'Selected for an elite, scholarship-based software engineering bootcamp. Worked in agile engineering pods to build production-ready full-stack applications.',
    whoIWorkedWith:
      'Cross-functional engineering team of 5 developers, senior ITI technical mentors, and code reviewers.',
    howIWorked: [
      'Agile Sprints & Ceremonies: Operated in fast-paced 2-week sprints with daily standups, backlog refinement, sprint planning, and retrospective sessions.',
      'Full-Stack Architecture: Built responsive frontends with React 18, Next.js, and TypeScript, backed by modular Node.js/Express REST APIs and MongoDB.',
      'Code Reviews & Git Hygiene: Enforced PR peer reviews, branch protection rules, semantic commit messages, and automated linting before merging.',
      'State & Latency Discipline: Engineered complex state lifecycles with Redux Toolkit and optimized API payloads for fast network responses.'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Agile/Scrum', 'Git'],
    impact: 'Graduated with high distinction, delivered 2 complete team projects ahead of deadline, and mastered collaborative full-stack delivery.'
  },
  {
    id: 'freelance-developer',
    role: 'Freelance Full-Stack Developer & Builder',
    organization: 'Independent Client Contracts',
    location: 'Remote',
    period: '2023 — Present',
    type: 'Contract & Client Projects',
    icon: Briefcase,
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    summary:
      'Designing and developing custom web systems, client landing pages, and interactive web apps with a focus on speed, uptime, and maintainability.',
    whoIWorkedWith:
      'Directly collaborated with non-technical founders, small business owners, and creative agencies.',
    howIWorked: [
      'Requirements into Specs: Translated ambiguous client briefs into concrete system architectures, interactive wireframes, and schema definitions.',
      'Tailored Solutions: Developed bespoke web platforms with React, Vite/Next.js, and Tailwind CSS tailored to client performance and SEO goals.',
      'API & Tool Integrations: Integrated secure email dispatchers, database layers, and third-party webhooks with zero downtime.',
      'Transparent Delivery: Provided asynchronous weekly video walkthroughs, staging environment previews, and comprehensive documentation for client handoff.'
    ],
    skills: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs', 'UI/UX Design', 'Client Management', 'Vercel Deployment'],
    impact: 'Delivered multiple end-to-end client applications with 100% on-time milestone completion and 95+ Lighthouse performance scores.'
  },
  {
    id: 'university-lead',
    role: 'Computer Science Student & Academic Project Lead',
    organization: 'Suez Canal University (Faculty of Computers & Informatics)',
    location: 'Ismailia, Egypt',
    period: 'Sep 2023 — 2027 (Expected)',
    type: 'B.Sc. Degree Program',
    icon: Terminal,
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    summary:
      'Studying core computer science foundations while serving as team lead on collegiate software engineering assignments and lab systems.',
    whoIWorkedWith:
      'CS professors, lab teaching assistants, and student project cohorts of 3-6 engineers.',
    howIWorked: [
      'Algorithmic Foundations: Implemented low-level data structures (balanced trees, graphs, heaps) and dynamic programming algorithms in C++ and Python.',
      'Team Leadership: Delegated modules, resolved architectural debates, and coordinated system integration during academic group submissions.',
      'Database & Systems Design: Modeled relational database schemas, query optimizations, and multi-threaded system simulations.',
      'Peer Mentorship: Ran informal study sessions explaining JavaScript closures, event loops, and Git workflows to classmates.'
    ],
    skills: ['C++', 'Data Structures', 'Algorithms', 'Database Design', 'System Architecture', 'OOP', 'Team Leadership'],
    impact: 'Consistently achieved top marks in algorithmic coursework and led multiple high-scoring academic group capstones.'
  },
  {
    id: 'open-source-builder',
    role: 'Open-Source & Interactive Systems Creator',
    organization: 'Personal Engineering Workshop (@ImComy)',
    location: 'Open Source',
    period: '2023 — Present',
    type: 'Self-Directed R&D',
    icon: Rocket,
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    summary:
      'Experimenting with game loop mechanics, state machine purity, and tactile user interfaces to master complex software state handling.',
    whoIWorkedWith:
      'Open-source developers on GitHub, indie builders, and tech community peers.',
    howIWorked: [
      'Unforgiving State Machines: Built reactive mini-games (e.g. 3-piece FIFO Tic-Tac-Toe) to push state management and event isolation to its limits.',
      'Tactile Frontend Mechanics: Implemented custom sound effects, keyboard navigation, frame-rate locked canvas visuals, and haptic animations.',
      'Documentation & Open Source: Published source code with architectural case studies explaining trade-offs, edge cases, and post-mortems.'
    ],
    skills: ['State Machines', 'Framer Motion', 'Canvas API', 'Sound Synthesis', 'Case Study Writing', 'Open Source'],
    impact: '100+ public commits, dozens of interactive workshop experiments, and high praise for tactile UX design.'
  }
];

export const impactMetrics = [
  {
    metric: '< 100ms',
    label: 'Real-Time Sync Latency',
    description: 'Sub-second WebSocket event reconciliation and zero-desync state handling under simulated packet latency.',
    tag: 'WebSockets & Real-Time'
  },
  {
    metric: '99.9%',
    label: 'State Machine Reliability',
    description: 'Strict FIFO memory management and deterministic turn validation with zero ghost turns or memory leaks.',
    tag: 'Architecture & State'
  },
  {
    metric: '10+ API',
    label: 'Endpoints & Schemas Modeled',
    description: 'Production-ready REST endpoints with JWT validation, rate limiting, and compound MongoDB indexing.',
    tag: 'Backend & Data'
  },
  {
    metric: '98+',
    label: 'Core Web Vitals & Perf',
    description: 'Sub-1.2s Largest Contentful Paint, zero cumulative layout shifts (CLS < 0.01), and tight bundle sizes.',
    tag: 'Performance & UX'
  }
];

export const engineeredSolutions = [
  {
    id: 'solution-1',
    title: 'Distributed State Reconciliation in Multi-Client Sessions',
    category: 'Real-Time Systems',
    challenge:
      'In real-time web applications and interactive games, asynchronous network drops and out-of-order packet arrivals frequently cause ghost states, desynchronization, and illegal client moves.',
    solution:
      'Engineered an authoritative server state machine combined with client-side optimistic rendering. Implemented a deterministic FIFO action queue and rollback mechanism that instantly repairs discrepancies without requiring full page refreshes.',
    impact: 'Sub-100ms perceived response times and zero state collisions across simulated multi-user connections.',
    tech: ['WebSockets', 'React', 'Optimistic UI', 'FIFO Queues']
  },
  {
    id: 'solution-2',
    title: 'Compound Indexing & Normalized Schemas for Scale',
    category: 'Database & Backend',
    challenge:
      'Unindexed database lookups and deeply nested MongoDB queries degraded API response times and caused server bottlenecks during batch reads.',
    solution:
      'Restructured data models with lean relational references, compound query indexing on user access patterns, and targeted projection pipelines that strip unnecessary payload bytes.',
    impact: 'Reduced database query response times by over 60% and minimized memory footprint under high request volumes.',
    tech: ['MongoDB', 'Mongoose', 'Express.js', 'Compound Indexes']
  },
  {
    id: 'solution-3',
    title: 'Decoupled State Slices & Anti-Bloat Architecture',
    category: 'Frontend Engineering',
    challenge:
      'Growing dashboard interfaces suffered from cascading component re-renders, tightly coupled prop drilling, and fragile UI bugs.',
    solution:
      'Architected modular Redux Toolkit slices with memoized Reselect selectors. Enforced strict colocation of transient component state while keeping global state minimal, predictable, and fully serializable.',
    impact: 'Eliminated unnecessary re-renders across the component tree and reduced onboarding friction for collaborative team sprints.',
    tech: ['Redux Toolkit', 'TypeScript', 'Memoized Selectors', 'Modular Slices']
  }
];
