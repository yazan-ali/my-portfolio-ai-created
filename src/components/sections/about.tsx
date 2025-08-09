"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Award,
} from "lucide-react";
import { animations } from "@/lib/utils";

// Timeline data
const timelineData = [
  {
    id: 1,
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented DevOps practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "Docker"],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Built responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "JavaScript"],
    icon: Code,
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Technology",
    location: "Boston, MA",
    period: "2016 - 2020",
    description:
      "Graduated Magna Cum Laude. Focused on software engineering, algorithms, and database systems.",
    technologies: ["Java", "Python", "C++", "SQL"],
    icon: GraduationCap,
  },
  {
    id: 4,
    type: "achievement",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    location: "Online",
    period: "2021",
    description:
      "Earned professional certification demonstrating expertise in designing distributed systems on AWS.",
    technologies: ["AWS", "Cloud Architecture", "DevOps"],
    icon: Award,
  },
];

// Timeline Item Component
function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? "flex-row" : "flex-row-reverse"
      } mb-8`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Content Card */}
      <motion.div
        className={`w-5/12 ${isEven ? "mr-8" : "ml-8"}`}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-muted-foreground bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-3 rounded-xl ${
                item.type === "work"
                  ? "bg-primary/10 text-primary"
                  : item.type === "education"
                  ? "bg-accent/10 text-accent"
                  : "bg-green-500/10 text-green-500"
              }`}
            >
              <Icon size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold font-plus-jakarta mb-1">
                {item.title}
              </h3>
              <p className="text-primary font-medium mb-1">{item.company}</p>
              <div className="flex items-center gap-4 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 leading-relaxed">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Line and Icon */}
      <div className="w-2/12 flex justify-center">
        <div className="relative flex flex-col items-center">
          {/* Connecting line */}
          {index !== timelineData.length - 1 && (
            <motion.div
              className="absolute top-12 w-0.5 h-24 bg-border"
              initial={{ height: 0 }}
              whileInView={{ height: 96 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
            />
          )}

          {/* Timeline point */}
          <motion.div
            className={`w-12 h-12 rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10 ${
              item.type === "work"
                ? "bg-primary text-primary-foreground"
                : item.type === "education"
                ? "bg-accent text-accent-foreground"
                : "bg-green-500 text-white"
            }`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <Icon size={18} />
          </motion.div>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="w-5/12" />
    </motion.div>
  );
}

// Stats Component
function StatItem({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-3xl sm:text-4xl font-bold font-plus-jakarta mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
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
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4"
            variants={animations.fadeIn}
          >
            👨‍💻 About Me
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground font-bold font-plus-jakarta mb-6"
            variants={animations.slideInLeft}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={animations.fadeIn}
          >
            I'm a passionate full-stack developer with over 4 years of
            experience building digital solutions that matter. My journey in
            tech has been driven by curiosity, continuous learning, and a desire
            to create meaningful user experiences.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 bg-muted/30 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <StatItem label="Years Experience" value="4+" delay={0.1} />
          <StatItem label="Projects Completed" value="50+" delay={0.2} />
          <StatItem label="Technologies" value="20+" delay={0.3} />
          <StatItem label="Happy Clients" value="30+" delay={0.4} />
        </motion.div> */}

        {/* Personal Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-muted-foreground space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-plus-jakarta mb-4">
                  Crafting Digital Experiences
                </h3>
                <p className="leading-relaxed mb-4">
                  From concept to deployment, I bring ideas to life through
                  clean, efficient code and thoughtful design. My expertise
                  spans the full development stack, allowing me to build
                  comprehensive solutions from database to user interface.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge through technical writing and mentoring.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  <Code className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold">Clean Code</div>
                    <div className="text-sm text-muted-foreground">
                      Advocate
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-semibold">Continuous</div>
                    <div className="text-sm text-muted-foreground">Learner</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden border border-border/50">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full opacity-20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-12 h-12 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-muted-foreground text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-plus-jakarta mb-4">
              Professional Timeline
            </h3>
            <p>Key milestones in my professional journey</p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical line for mobile */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline items */}
            <div className="hidden lg:block">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Mobile timeline */}
            <div className="lg:hidden space-y-8">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline point */}
                    <div
                      className={`w-12 h-12 rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10 ${
                        item.type === "work"
                          ? "bg-primary text-primary-foreground"
                          : item.type === "education"
                          ? "bg-accent text-accent-foreground"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-muted-foreground bg-card border border-border rounded-2xl p-6">
                      <h3 className="text-lg font-bold font-plus-jakarta mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {item.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
