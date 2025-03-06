"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const dummyData = {
  name: "Mustafa Yılmaz",
  position: "Full Stack Developer",
  about:
    "Creative and detail-oriented Full Stack Developer with a passion for building innovative web solutions. Experienced in modern web technologies and committed to delivering high-quality, user-centric applications.",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "RESTful APIs",
    "Git",
    "Docker",
  ],
  experience: [
    {
      company: "Tech Innovators Ltd",
      position: "Full Stack Developer",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and MongoDB. Implemented microservices architecture and improved application performance by 40%.",
    },
    {
      company: "Digital Solutions Co",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications using React and Next.js. Collaborated with UX team to implement modern design patterns and improve user engagement.",
    },
  ],
  projects: [
    {
      name: "E-Learning Platform",
      description:
        "Built a comprehensive e-learning platform with video streaming, interactive quizzes, and real-time progress tracking. Implemented WebRTC for live tutoring sessions.",
      technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
      liveUrl: "https://elearning-platform.com",
      githubUrl: "https://github.com/username/elearning-platform",
    },
    {
      name: "Smart Inventory System",
      description:
        "Developed a real-time inventory management system with barcode scanning and automated reordering capabilities. Reduced manual data entry by 75%.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
      liveUrl: "https://smart-inventory.com",
      githubUrl: "https://github.com/username/smart-inventory",
    },
  ],
  social: [
    { platform: "GitHub", url: "https://github.com/yourusername" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { platform: "Portfolio", url: "https://yourportfolio.com" },
  ],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
          : "bg-gradient-to-br from-white to-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-sm ${
          darkMode ? "bg-[#0f172a]/80" : "bg-white/80"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              {dummyData.name}
            </h2>
            <div className="flex items-center space-x-6">
              <a
                href="#about"
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
              <a
                href="#skills"
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#skills")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Skills
              </a>
              <a
                href="#experience"
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  darkMode
                    ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                    : "bg-black/5 text-gray-800 hover:bg-black/10"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  darkMode ? "focus:ring-blue-500" : "focus:ring-indigo-500"
                }`}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-24">
        {/* Profile Section */}
        <div
          id="about"
          className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 transform transition-all duration-500"
        >
          <div className="w-full md:w-1/2 text-left space-y-6">
            <div className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur"></span>
              <span className="relative text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              {dummyData.name}
            </h1>
            <p
              className={`text-2xl font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {dummyData.position}
            </p>
            <p
              className={`max-w-2xl mx-auto text-lg transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {dummyData.about}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center transform transition-all duration-500 hover:scale-105">
            <span
              className={`border-b-4 ${
                darkMode ? "border-blue-500" : "border-indigo-500"
              } pb-2`}
            >
              Skills
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {dummyData.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:rotate-1 ${
                  darkMode
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-black/5 hover:bg-black/10"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span
              className={`border-b-4 ${
                darkMode ? "border-blue-500" : "border-indigo-500"
              } pb-2`}
            >
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            {dummyData.experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 ${
                  darkMode
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-black/5 hover:bg-black/10"
                } backdrop-blur-sm shadow-xl transform hover:scale-[1.02] hover:rotate-1`}
              >
                <h3 className="font-bold text-xl mb-2">{exp.company}</h3>
                <p
                  className={`text-lg font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {exp.position}
                </p>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {exp.period}
                </p>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span
              className={`border-b-4 ${
                darkMode ? "border-blue-500" : "border-indigo-500"
              } pb-2`}
            >
              Projects
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {dummyData.projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#334155]"
                    : "bg-gray-50 hover:bg-gray-100"
                } shadow-lg transform hover:-translate-y-1`}
              >
                <h3 className="font-bold text-xl mb-3">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-[#334155] text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <footer className="text-center mt-16">
          <div className="flex justify-center space-x-8">
            {dummyData.social.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:rotate-2 ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-indigo-600 hover:text-indigo-500"
                }`}
              >
                {link.platform}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
