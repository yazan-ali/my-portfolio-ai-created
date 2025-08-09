"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react";
import { animations } from "@/lib/utils";

// Skills data organized by categories
const skillsData = {
  frontend: {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  backend: {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express/Fastify", level: 90 },
      { name: "PostgreSQL", level: 87 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 82 },
    ],
  },
  mobile: {
    title: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "Swift", level: 70 },
      { name: "Kotlin", level: 68 },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 75 },
    ],
  },
};

// Tools and technologies
const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Slack",
  "Jira",
  "Notion",
  "Linear",
  "Vercel",
  "Netlify",
  "Railway",
];

// Animated Progress Bar Component
function ProgressBar({
  skill,
  delay,
}: {
  skill: { name: string; level: number };
  delay: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Circular Progress Component
function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
  delay = 0,
  color = "from-primary to-accent",
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  delay?: number;
  color?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted"
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          animate={
            isInView
              ? { strokeDashoffset }
              : { strokeDashoffset: circumference }
          }
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              className={`text-primary`}
              stopColor="currentColor"
            />
            <stop
              offset="100%"
              className={`text-accent`}
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-2xl font-bold font-plus-jakarta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
}

// Skills Category Component
function SkillsCategory({
  category,
  data,
  index,
}: {
  category: string;
  data: typeof skillsData.frontend;
  index: number;
}) {
  const Icon = data.icon;

  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white`}
        >
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold font-plus-jakarta">{data.title}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-1">
        {data.skills.map((skill, skillIndex) => (
          <ProgressBar
            key={skill.name}
            skill={skill}
            delay={index * 0.1 + skillIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const averageSkillLevel = React.useMemo(() => {
    const allSkills = Object.values(skillsData).flatMap(
      (category) => category.skills
    );
    return Math.round(
      allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length
    );
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
            <Zap className="w-4 h-4 inline mr-2" />
            Technical Skills
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6"
            variants={animations.slideInLeft}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={animations.fadeIn}
          >
            A comprehensive overview of my technical skills and proficiency
            levels. I'm constantly learning and improving these skills to stay
            current with industry trends.
          </motion.p>
        </motion.div>

        {/* Overall Skill Level */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold font-plus-jakarta mb-6">
            Overall Proficiency
          </h3>
          <CircularProgress
            percentage={averageSkillLevel}
            size={150}
            strokeWidth={10}
            delay={0.2}
          />
          <p className="text-muted-foreground mt-4 text-center max-w-md">
            Average skill level across all technologies I work with
            professionally.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, data], index) => (
            <SkillsCategory
              key={category}
              category={category}
              data={data}
              index={index}
            />
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-plus-jakarta mb-8">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Philosophy */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold font-plus-jakarta mb-4">
              My Development Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code that not only solves
              problems but also scales with business needs. My approach combines
              technical excellence with user-centered design, ensuring that
              every solution I build delivers both performance and great user
              experience. I'm always eager to learn new technologies and adapt
              to evolving industry standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
