"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Filter } from "lucide-react";
import { animations } from "@/lib/utils";

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

// Project Card Component
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: 5,
        transformPerspective: 1000,
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay with actions */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
          <motion.button
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={20} />
          </motion.button>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xl font-bold font-plus-jakarta mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={animations.stagger}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            variants={animations.fadeIn}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            My Work
          </motion.div>

          <motion.h2
            className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6"
            variants={animations.slideInLeft}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={animations.fadeIn}
          >
            A collection of projects that showcase my skills in full-stack
            development, UI/UX design, and problem-solving. Each project tells a
            story of innovation and technical excellence.
          </motion.p>
        </motion.div>

        {/* Filters and Search */}
        {/* <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        > */}
        {/* Category Filters */}
        {/* <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background border border-border hover:bg-muted"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div> */}

        {/* Search */}
        {/* <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          </div>
        </motion.div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
