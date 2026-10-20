import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiGnubash,
  SiLinux,
  SiPostgresql
} from "react-icons/si";

export const profile = {
  name: "Ahmed El-Shazly",
  handle: "ImComy",
  role: "Software Engineer & Builder",
  location: "Ismailia, Egypt",
  status: "Available for internships & junior roles",
  bioShort: "Computer Science student at Suez Canal University with a focus on building resilient, responsive web applications and interactive systems that solve actual human problems.",
  
  aboutStory: {
    intro:
      "I'm an engineer who cares deeply about the craft of software. I don't just want to write code that meets a spec—I want to build software that feels intuitive to use, solid under load, and maintainable six months down the line.",
    background:
      "Currently pursuing my B.Sc. in Computer Science at Suez Canal University (expected 2027) alongside intensive training at the Information Technology Institute (ITI). When I build, I prefer understanding the underlying mechanisms—whether it's race conditions in real-time sockets or state reconciliation under tricky network conditions—over just copying libraries.",
    perspective:
      "Software should be an extension of human intent. The best applications aren't the ones stuffed with every new trendy framework; they're the ones where every click feels responsive, every error message tells you how to fix it, and the architecture stays simple enough to reason about."
  },

  hobbies: [
    {
      title: "Weightlifting & Gym",
      icon: "🏋️‍♂️",
      description: "Consistent training teaches the exact same discipline required in engineering: progressive overload, patience, form before weight, and respecting the compounding process."
    },
    {
      title: "Gaming & Mechanics",
      icon: "🎮",
      description: "Huge appreciation for games with deep, punchy mechanics and emergent gameplay. It's also why I love building interactive games like my 3-piece Tic-Tac-Toe."
    },
    {
      title: "Coffee & Focus",
      icon: "☕",
      description: "Dialing in coffee is my morning ritual before tackling complex bug backlogs or architecting database models."
    },
    {
      title: "Tinkering & Open Source",
      icon: "🛠️",
      description: "Experimenting with Linux configs, terminal tools, and building tiny micro-utilities just to see how things tick under the hood."
    }
  ],

  hotTakes: [
    {
      question: "Clean code or fast delivery?",
      answer: "False dichotomy. Spaghetti code slows down delivery within two weeks. Writing modular, well-named functions is the fastest way to ship continuously without breaking everything."
    },
    {
      question: "Framework obsession?",
      answer: "Tools come and go. If you understand JavaScript closures, event loops, DOM rendering cycles, and network latency, you can pick up any new framework over a weekend."
    },
    {
      question: "Why build mini interactive games?",
      answer: "Because state management in games is unforgiving. If your state isn't pristine, the game instantly glitches. It's the best crucible for mastering event handling."
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Suez Canal University",
      period: "2023 — 2027",
      details: "Focusing on algorithms, data structures, computer networks, database systems, and software engineering principles."
    },
    {
      degree: "Front-End Development Bootcamp",
      institution: "Information Technology Institute (ITI)",
      period: "Aug 2024",
      details: "Intensive program covering modern JavaScript, React ecosystem, Next.js architecture, TypeScript, and collaborative agile sprints."
    }
  ],

  skillsCategorized: [
    {
      category: "Frontend & UI",
      skills: [
        { name: "React", icon: SiReact, level: "Core" },
        { name: "Next.js", icon: SiNextdotjs, level: "Core" },
        { name: "TypeScript", icon: SiTypescript, level: "Strong" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Core" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: "Core" },
        { name: "Redux Toolkit", icon: SiRedux, level: "Proficient" }
      ]
    },
    {
      category: "Backend & Data",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: "Core" },
        { name: "Express.js", icon: SiExpress, level: "Core" },
        { name: "MongoDB", icon: SiMongodb, level: "Proficient" },
        { name: "REST APIs & WebSockets", icon: SiJavascript, level: "Strong" }
      ]
    },
    {
      category: "Languages & Foundations",
      skills: [
        { name: "C / C++", icon: SiCplusplus, level: "Academic & Systems" },
        { name: "Python", icon: SiPython, level: "Scripting & Basics" },
        { name: "Data Structures & Algos", icon: SiJavascript, level: "Foundation" }
      ]
    },
    {
      category: "Workflow & Environment",
      skills: [
        { name: "Git", icon: SiGit, level: "Core" },
        { name: "GitHub", icon: SiGithub, level: "Core" },
        { name: "Linux / Bash", icon: SiLinux, level: "Comfortable" },
        { name: "Vite & Tooling", icon: SiJavascript, level: "Core" }
      ]
    }
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/ImComy", username: "@ImComy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedelshazly74/", username: "ahmedelshazly74" },
    { label: "Email", href: "mailto:ahmedcomy74@gmail.com", username: "ahmedcomy74@gmail.com" },
    { label: "Discord", href: "https://discord.com/users/713394083179135026", username: "Discord Profile" }
  ]
};
