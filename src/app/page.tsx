"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const dummyData = {
  name: "John Doe",
  position: "Senior Frontend Developer",
  about:
    "Passionate frontend developer with 5+ years of experience in building modern web applications. Specialized in React and Next.js ecosystem.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "REST APIs",
    "Redux",
  ],
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description:
        "Leading frontend development team, implementing modern web solutions using React and Next.js.",
    },
    {
      company: "Web Solutions Inc",
      position: "Frontend Developer",
      period: "2019 - 2021",
      description:
        "Developed responsive web applications using React and TypeScript.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description:
        "Built a modern e-commerce platform using Next.js and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Task Management App",
      description:
        "Developed a responsive task management application with React.",
      technologies: ["React", "Redux", "Material-UI"],
    },
  ],
  social: [
    { platform: "GitHub", url: "https://github.com/johndoe" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    { platform: "Twitter", url: "https://twitter.com/johndoe" },
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
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-[#1e293b] text-yellow-400 hover:bg-[#334155]"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            darkMode ? "focus:ring-blue-500" : "focus:ring-indigo-500"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Profile Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {dummyData.name}
          </h1>
          <p
            className={`text-2xl font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {dummyData.position}
          </p>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {dummyData.about}
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span
              className={`border-b-4 ${
                darkMode ? "border-blue-500" : "border-indigo-500"
              } pb-2`}
            >
              Skills
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {dummyData.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#334155]"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
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
                className={`p-6 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-[#1e293b] hover:bg-[#334155]"
                    : "bg-gray-50 hover:bg-gray-100"
                } shadow-lg transform hover:-translate-y-1`}
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
        <section className="mb-16">
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
        <footer className="text-center">
          <div className="flex justify-center space-x-6">
            {dummyData.social.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-medium transition-colors duration-300 hover:underline ${
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
