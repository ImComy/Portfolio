export const projects = [
  {
    id: "ttt",
    slug: "ttt",
    title: "Online Special Tic-Tac-Toe",
    tagline: "Dynamic multiplayer game with a 3-piece FIFO constraint",
    category: "Full-Stack & Realtime",
    year: "2024",
    status: "Completed",
    featured: true,
    image: "/ttt.png",
    demoUrl: "https://ttt-secert-tjbp.vercel.app/",
    githubUrl: "https://github.com/ImComy/online-special-ttt",
    technologies: ["React", "Node.js", "Express", "StreamChat", "WebSockets", "Tailwind CSS"],
    interactiveDemo: "ttt", // indicates we provide a playable 3-piece minigame right on this case study page!
    summary:
      "A strategic twist on standard Tic-Tac-Toe: each player is limited to a maximum of 3 pieces on the board at any time. Placing your 4th piece automatically clears your 1st piece, turning a solved game into a dynamic, looping tactical battle.",
    whyBuilt:
      "Classic Tic-Tac-Toe is mathematically broken—two players with basic competence will draw 100% of the time. I wanted to eliminate draws completely while testing real-time multiplayer synchronization and event handling over sockets.",
    architecture: [
      {
        layer: "Client (React)",
        description: "Maintains optimistic local board state, renders placement history animations, and handles real-time lobby pairing."
      },
      {
        layer: "Game Engine (FIFO Logic)",
        description: "Tracks turn order and an array queue of player move coordinates. When playerMoves.length === 3, the oldest tile is flagged with an expiration indicator before disappearing."
      },
      {
        layer: "Realtime Layer (StreamChat & WebSockets)",
        description: "Synchronizes moves between remote players with sub-100ms latency, handling disconnection reconnections and room matchmaking."
      }
    ],
    challenges: [
      {
        title: "Preventing State Desynchronization",
        challenge: "When players clicked simultaneously or experienced packet jitter, local boards could disagree on which piece was the oldest to expire.",
        solution: "Established strict server-authoritative move sequence ordering: move intents are validated against the server sequence ID before triggering the local FIFO eviction."
      },
      {
        title: "Visualizing Piece Expiry",
        challenge: "Players were caught off guard when their oldest piece suddenly vanished.",
        solution: "Implemented an opacity pulse and warning ring around the oldest piece when a player has 3 pieces, giving clear visual cues of which piece will disappear next."
      }
    ],
    highlights: [
      "Zero draws: Every match reaches an aggressive tactical resolution.",
      "Instant matchmaking with room codes or open lobby joins.",
      "In-game live chat and match history playback."
    ]
  },
  {
    id: "gymrat",
    slug: "gymrat",
    title: "GymRat Tracker",
    tagline: "High-performance workout logging & progression dashboard",
    category: "Web Application",
    year: "2024",
    status: "Completed",
    featured: true,
    image: "/gymrat.png",
    demoUrl: "https://gym-rat-nine.vercel.app",
    githubUrl: "https://github.com/ImComy/GymRat",
    technologies: ["Next.js", "React", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    summary:
      "An intuitive workout companion designed for lifters who want fast, zero-friction set logging between exercises, progression charts, and customized routine templates.",
    whyBuilt:
      "Most mobile workout apps are bloated with paywalls, social feeds, and clunky 6-step dialogs just to log one bench press set. I built GymRat to prioritize speed: 1-click set duplication, automatic rest timers, and clear volume progression curves.",
    architecture: [
      {
        layer: "State Management (Redux Toolkit)",
        description: "Handles active workout sessions in memory with persistent local fallback, allowing users to log sets seamlessly even with spotty gym connectivity."
      },
      {
        layer: "Next.js SSR & Client Hydration",
        description: "Delivers instant page navigation with pre-rendered analytics views and client-side charts."
      },
      {
        layer: "TypeScript Domain Models",
        description: "Type-safe schemas for exercises, sets (RPE, weight, reps, warmups), and routine templates."
      }
    ],
    challenges: [
      {
        title: "Session Persistence on Page Refresh / Backgrounding",
        challenge: "Lifters switch between their music app, timer, and browser constantly; page reloads could wipe active sets.",
        solution: "Built a Redux middleware synchronizer that snapshots the active session state to localStorage on every set change, recovering seamlessly upon reopening."
      },
      {
        title: "Rapid Ergonomics for Sweaty Hands",
        challenge: "Small tap targets and nested modals are terrible when you're resting between heavy deadlifts.",
        solution: "Redesigned logging with large numeric steppers, quick +2.5kg / +5kg bump buttons, and keyboard auto-advance."
      }
    ],
    highlights: [
      "Lightning-fast set logging designed specifically for in-gym ergonomics.",
      "Automatic volume and 1-Rep-Max estimation calculations.",
      "Custom routine builders and historical progression analytics."
    ]
  },
  {
    id: "modaresy",
    slug: "modaresy",
    title: "Modaresy Educational Platform",
    tagline: "Connecting tutors and students with scheduling & direct messaging",
    category: "Full-Stack Platform",
    year: "2024",
    status: "Completed",
    featured: true,
    image: "/Modaresy.png",
    demoUrl: "https://modaresy.vercel.app",
    githubUrl: "https://github.com/ImComy/Modaresy",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    summary:
      "A dual-sided educational platform built for private tutors and students in Egypt, featuring tutor discovery by subject/region, session booking, and student-teacher direct messaging.",
    whyBuilt:
      "Independent tutoring in the region is often scattered across messy WhatsApp groups and paper calendars. Modaresy was built to provide independent educators with a professional storefront and automated scheduling.",
    architecture: [
      {
        layer: "Frontend (React & Tailwind)",
        description: "Role-based views (Student portal vs. Tutor management dashboard) with responsive calendar views and search filters."
      },
      {
        layer: "Backend API (Express & Node.js)",
        description: "RESTful architecture with JWT authentication, appointment state machine (Requested -> Confirmed -> Completed), and data validation."
      },
      {
        layer: "Database (MongoDB & Mongoose)",
        description: "Normalized schemas for users, tutor availability slots, bookings, and review ratings."
      }
    ],
    challenges: [
      {
        title: "Calendar Slot Collision Detection",
        challenge: "Tutors managing multiple grade levels could easily have conflicting booking requests submitted simultaneously.",
        solution: "Engineered transactional reservation locks: when a student initiates a booking, the slot is locked with a 10-minute expiry window until confirmed by the tutor."
      },
      {
        title: "Search & Filtering by Subject, Grade & Location",
        challenge: "Complex multi-parameter queries could slow down tutor directory lookups.",
        solution: "Added compound indexes on subject and location in MongoDB, cutting query response times by over 60%."
      }
    ],
    highlights: [
      "Role-based authentication & tailored dashboards for tutors and students.",
      "Dynamic availability calendar with automated booking confirmation workflows.",
      "Direct communication channel to discuss lesson prerequisites."
    ]
  }
];

export const projectCategories = ["All", "Full-Stack & Realtime", "Web Application", "Full-Stack Platform"];
