import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Phone, Calendar, Briefcase, GraduationCap, Code, Server, Database, Smartphone as MobileIcon, Brain, Users, Palette, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

import CatFollower from '@/components/CatFollower';
import StarryBackground from '@/components/StarryBackground';
import ScrollProgress from '@/components/ScrollProgress';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import TechSkillsCarousel from '@/components/TechSkillsCarousel';
import EducationTimeline from '@/components/EducationTimeline';
import Section from '@/components/Section';
import Navigation from '@/components/Navigation';
import AboutJSON from '@/components/JSON';
import HOME from '@/components/header';

import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiGnubash,
  SiLinux,
  SiVim
} from "react-icons/si";


const skillCategories = {
  frontend: [
    { name: "JavaScript", percentage: 92, icon: SiJavascript },
    { name: "TypeScript", percentage: 85, icon: SiTypescript },
    { name: "jQuery", percentage: 70, icon: SiJquery },
    { name: "Sass", percentage: 75, icon: SiSass },
    { name: "Bootstrap", percentage: 80, icon: SiBootstrap },
    { name: "Tailwind CSS", percentage: 90, icon: SiTailwindcss },
    { name: "React", percentage: 88, icon: SiReact },
    { name: "React Native", percentage: 65, icon: SiReact },
    { name: "Next.js", percentage: 80, icon: SiNextdotjs },
    { name: "Redux", percentage: 78, icon: SiRedux },
  ],
  backend: [
    { name: "Node.js", percentage: 85, icon: SiNodedotjs },
    { name: "Express.js", percentage: 80, icon: SiExpress },
    { name: "MongoDB", percentage: 75, icon: SiMongodb },
  ],
  languages: [
    { name: "JavaScript", percentage: 92, icon: SiJavascript },
    { name: "TypeScript", percentage: 85, icon: SiTypescript },
    { name: "C/C++", percentage: 70, icon: SiCplusplus },
    { name: "Python", percentage: 80, icon: SiPython },
  ],
  tools: [
    { name: "Git", percentage: 90, icon: SiGit },
    { name: "GitHub", percentage: 88, icon: SiGithub },
    { name: "Bash", percentage: 85, icon: SiGnubash },
    { name: "Linux", percentage: 80, icon: SiLinux },
  ],
};

const allSkills = [
  ...skillCategories?.frontend || [],
  ...skillCategories?.backend || [],
  ...skillCategories?.database || [],
  ...skillCategories?.devops || [],
  ...skillCategories?.other || [],
];

// Add "all" to skillCategories
const skillCategoriesWithAll = {
  all: allSkills,
  ...skillCategories
};


const projectsData = [
  {
    title: "Online Special TTT",
    description: "Online Special Tic-Tac-Toe is a full-stack web application that enhances the classic Tic-Tac-Toe game by introducing a twist: each player can only place 3 X's or O's, making the game more dynamic and reducing the likelihood of a draw.",
    image: "/ttt.png",
    technologies: ["React", "Node.js", "StreamChat", "Express.JS"],
    sourceCode: "https://github.com/ImComy/online-special-ttt",
    liveDemo: "https://ttt-secert-tjbp.vercel.app/",
    date: "2024-08-01 to 2024-09-01",
  },
  {
    title: "GymRat",
    description: "A fitness tracking app built with Next.js for managing workouts, meals, and user goals with interactive UI.",
    image: "/gymrat.png",
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "NextJS", "TypeScript"],
    sourceCode: "https://github.com/ImComy/GymRat",
    liveDemo: "https://gym-rat-nine.vercel.app",
    date: "2024-06-01 to 2024-08-01",
  },
  {
    title: "Modaresy",
    description: "An educational web platform that supports tutor-student communication and offers booking & messaging features.",
    image: "/Modaresy.png",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
    sourceCode: "https://github.com/ImComy/Modaresy",
    liveDemo:"https://modaresy.vercel.app",
    date: "2024-04-01  Ongoing",
  }
];


const educationData = [
    {
    date: "Ongoing / 2023-2027",
    title: "B.Sc. in Computer Science",
    institution: "Suez Canal University",
    description: "Pursuing a Bachelor's degree with a focus on software engineering, data structures, and algorithms.",
    icon: GraduationCap
  },
  {
    date: "Aug 2024",
    title: "ITI FrontEnd Summer Bootcamp",
    institution: "Information Technology Institute (ITI)",
    description: "Intensive bootcamp focusing on modern web development technologies including React, Next.js, and TypeScript.",
    icon: Code
  },

];


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 300], [0, -20]);
  const [currentSkillCategory, setCurrentSkillCategory] = useState('frontend');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techSkillsForCarousel = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: SiJquery, name: "jQuery", color: "text-blue-400" },
    { icon: SiSass, name: "Sass", color: "text-pink-400" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-700 dark:text-white" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiCplusplus, name: "C/C++", color: "text-blue-700" },
    { icon: SiPython, name: "Python", color: "text-yellow-500" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-900 dark:text-white" },
    { icon: SiGnubash, name: "Bash", color: "text-green-700" },
    { icon: SiLinux, name: "Linux", color: "text-yellow-600" },
    { icon: SiVim, name: "Vim", color: "text-green-600" },
  ];

  return (
    <div className="min-h-screen relative bg-background text-foreground">
      <CatFollower />
      <StarryBackground />
      <ScrollProgress />
      
      <Navigation activeSection={activeSection} sections={['Home', 'About', 'Skills', 'Education', 'Projects']} />
      <div className='relative z-10 flex flex-col items-center justify-center '>
        {/* Floating Background Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[100px] rounded-full top-10 left-10 animate-float" />
          <div className="absolute w-[400px] h-[400px] bg-fuchsia-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-float animation-delay-2000" />
        </motion.div>

        <HOME />
      </div>

      <Section id="about" className="pb-24">
         <motion.div style={{ y: y2 }} className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </motion.div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </div>
        <div className="flex flex-col gap-8 md:gap-12 items-start max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-xl p-8 flex-1 min-w-0"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">Dedicated Software Engineer</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I’m passionate about building things that actually work and make people’s lives easier. I enjoy working with others, learning from different perspectives, and tackling problems head-on. When I hit a challenge, I like to dig in, figure out what’s really going on, and find the best solution — not just a quick fix.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I’m organized and like to keep my work on track, making sure I meet deadlines while keeping quality high. I’m always curious about new tools and ways to improve, and I’m excited to join a team where I can grow and contribute in a meaningful way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div className="flex items-center"><MapPin className="w-5 h-5 text-primary mr-3" /> <span className="text-foreground">Egypt / Remote</span></div>
                <div className="flex items-center"><Phone className="w-5 h-5 text-primary mr-3" /> <span className="text-foreground">+20 1030137541</span></div>
                <div className="flex items-center"><Mail className="w-5 h-5 text-primary mr-3" /> <span className="text-foreground">ahmedcomy74@gmail.com</span></div>
                <div className="flex items-center"><Calendar className="w-5 h-5 text-primary mr-3" /> <span className="text-foreground">Available anytime</span></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1 min-w-0"
            >
              <AboutJSON />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 mt-8 md:mt-0 w-full"
          >
            <TechSkillsCarousel skills={techSkillsForCarousel} />
          </motion.div>
        </div>
      </Section>

      <Section id="skills" className="py-24 bg-secondary/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </div>
        <div className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-4">
          {Object.keys(skillCategoriesWithAll).map(category => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setCurrentSkillCategory(category)}
              className={`skill-tab-button capitalize text-xs sm:text-sm ${currentSkillCategory === category ? 'active' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-0">
          {skillCategoriesWithAll[currentSkillCategory].map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
              delay={index * 0.05}
            />
          ))}
        </div>
      </Section>

      <Section id="education" className="py-24">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto" />
        </div>
        <EducationTimeline items={educationData} />
      </Section>

      <Section id="projects" className="py-24 bg-secondary/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            A selection of projects demonstrating my capabilities in building diverse and complex applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto px-4 sm:px-0">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index}  {...project}/>
          ))}
        </div>
      </Section>

      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ahmed El-Shazly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Designed & Developed with Passion.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;