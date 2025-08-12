"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Decentralized Crowdfunding Platform",
    description:
      "A Web3-based crowdfunding platform built with blockchain technology to prevent fraud and ensure transparent fund usage. Contributors act as campaign approvers, reviewing and voting on spending requests before funds are released, promoting community-driven trust and accountability.",
    image: "/api/placeholder/600/400",
    tags: [
      "Next.js",
      "Shadcn UI",
      "Blockchain",
      "Solidity",
      "Smart Contracts",
      "Web3",
      "Remix IDE",
    ],
    github: "https://github.com/yazan-ali/web3-kickstarter",
    live: "https://web3-kickstarter-one.vercel.app",
  },
  {
    id: 2,
    title: "ASCO Publications",
    description:
      "A medical publishing platform by the American Society of Clinical Oncology (ASCO), published by Wolters Kluwer. It provides access to peer-reviewed oncology journals, clinical research, and educational resources for cancer professionals.",
    image: "/api/placeholder/600/400",
    tags: ["HTML", "SCSS", "JavaScript", "TypeScript", "Webpack", "Jest"],
    live: "https://ascopubs.org",
  },
  {
    id: 3,
    title: "Neurology Journals",
    description:
      "Neurology is the official weekly peer‐reviewed medical journal of the American Academy of Neurology (AAN), published by Wolters Kluwer. It delivers cutting‐edge research, clinical findings, and educational content for neurologists and neuroscience professionals",
    image: "/api/placeholder/600/400",
    tags: ["HTML", "SCSS", "JavaScript", "TypeScript", "Webpack", "Jest"],
    live: "https://www.neurology.org",
  },
  {
    id: 4,
    title: "Graduation Project",
    description:
      "A web application designed to digitize the academic promotion process at my university, which previously lacked an online system. The platform supports multi-step workflows where each step requires supervisor review and approval. Faculty members can submit and track promotion requests, while supervisors can manage approvals, upload required documents, and form review.",
    image: "/api/placeholder/600/400",
    tags: [
      "React.js",
      "Material UI",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github:
      "https://github.com/yazan-ali/promotion-system-my-graduation-project",
  },
];

// Project Carousel Component
function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Full Width Layout: Image + Content Side by Side */}
            <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
              {/* Project Image */}
              <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />

                {/* Action Buttons */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {currentProject.github && (
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {currentProject.live && (
                    <motion.a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold font-plus-jakarta mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentProject.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground text-lg mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentProject.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + tagIndex * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentProject.github && (
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg  hover:text-primary transition-colors font-medium text-lg"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                  )}
                  {currentProject.live && (
                    <motion.a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={20} />
                      Live Site
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My Work
          </motion.div>

          <motion.h2
            className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A collection of projects that showcase my skills in full-stack
            development, UI/UX design, and problem-solving. Each project tells a
            story of innovation and technical excellence.
          </motion.p>
        </motion.div>

        {/* Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectCarousel />
        </motion.div>
      </div>
    </section>
  );
}
