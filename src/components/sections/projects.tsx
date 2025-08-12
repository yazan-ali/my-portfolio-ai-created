"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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

// Stacked Project Card Component
function StackedProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Transform scroll progress to y position for stacking effect
  // Cards start lower and slide up to cover previous cards
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={cardRef} className="h-screen">
      <motion.div
        className="sticky top-20 h-fit w-full max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        style={{
          y,
          scale,
          opacity,
          zIndex: index + 1,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Full Width Content */}
        <div className="w-full min-h-[400px] flex flex-col justify-center">
          {/* Project Content */}
          <div className="w-full p-8 lg:p-16 text-center max-w-4xl mx-auto">
            <motion.h3
              className="text-4xl lg:text-5xl font-bold font-plus-jakarta mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-muted-foreground text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + tagIndex * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-primary transition-colors font-medium text-lg"
                  whileHover={{ x: 5 }}
                >
                  <Github size={20} />
                  View Code
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
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
    </div>
  );
}

export function Projects() {
  // Display all projects for stacked animation
  const filteredProjects = projects;

  return (
    <section id="projects" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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

        {/* Stacked Projects */}
        <div className="relative mt-20">
          {filteredProjects.map((project, index) => (
            <StackedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria. Try adjusting your
              filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
