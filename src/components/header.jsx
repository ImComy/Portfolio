import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Briefcase,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  ArrowDown,
} from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import Section from "@/components/Section";
import { FaDiscord } from "react-icons/fa";

const socialLinks = [
  { Icon: Github, href: "https://github.com/ImComy", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/ahmedelshazly74/", label: "LinkedIn" },
  { Icon: Mail, href: "ahmedcomy74@gmail.com", label: "Email" },
  { Icon: Facebook, href: "https://www.facebook.com/ImComy", label: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/im_comy", label: "Instagram" },
  { Icon: FaDiscord, href: "https://discord.com/users/713394083179135026", label: "Discord" },
];

const Home = () => {
  return (
    <Section
      id="home"
      className="mt-20 md:mt-0 relative flex items-center justify-center min-h-screen text-[#c9d1d9] px-4 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full justify-center text-center md:text-left">
        {/* Avatar & Social */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-xl shadow-xl border-4 border-primary/60 overflow-hidden">
            <img
              src="/pfp.png"
              alt="dev portrait"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0  border border-white/10 animate-pulse bg-gradient-to-tr from-purple-400/30 via-blue-500/20 to-transparent" />
          </motion.div>

          <div className="gap-3 max-w-xs flex justify-center items-center">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="p-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 text-white transition-all shadow-lg flex items-center justify-center"
                aria-label={label}
                title={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-xl space-y-6"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ahmed Shazly
            </span>{" "}
            👋
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-xl sm:text-2xl text-white font-medium"
          >
            <TypewriterText text="MERN Stack Developer" delay={700} />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
           I'm a driven MERN Stack Developer and a Computer Science student, passionate about building cutting
edge web applications that deliver great user experiences. With over a year of dedicated learning in web 
development, I've honed my skills in crafting innovative solutions that exceed user expectations.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <a href="/Ahmed-CV.pdf" download>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group transition-all"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </a>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <a href="#projects">
                <Briefcase className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-16">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <a href="#about" aria-label="Scroll to About Me">
            <ArrowDown className="w-6 h-6 text-white opacity-70 hover:opacity-100 transition" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Home;
