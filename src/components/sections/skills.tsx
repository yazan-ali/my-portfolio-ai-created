"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Zap } from "lucide-react";
import { animations } from "@/lib/utils";

// All skills in one array
const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "Material UI",
  "Shadcn UI",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "NestJS",
  "Java",
  "Spring Boot",
  "MongoDB",
  "SQL",
  "GraphQL",
  "Blockchain",
  "Web3",
  "Smart Contracts",
  "Solidity",
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Design Patterns",
];

// Tools and technologies
const tools = [
  "Git",
  "GitHub",
  "DevTools",
  "Docker",
  "Cursor AI",
  "VS Code",
  "Jira",
  "Postman",
  "npm",
];

// Simple Uniform Tags
function UniformTags() {
  const allSkills = skillsData;

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
      {allSkills.map((skill, index) => (
        <motion.div
          key={skill}
          className="text-base px-4 py-2 font-medium bg-primary/20 text-primary border-primary/50 border rounded-full cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}

// DESIGN OPTION 2: Category Cards (Clean & Organized) - Currently unused
/* 
function CategoryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(skillCategories).map(([key, category], index) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={key}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold font-plus-jakarta text-lg">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
*/

// DESIGN OPTION 3: Masonry Grid (Pinterest-style) - Currently unused
/*
function MasonryGrid() {
  const allSkillsFlat = Object.values(skillCategories).flatMap(cat => 
    cat.skills.map(skill => ({ name: skill, category: cat.title }))
  );

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {allSkillsFlat.map((skill, index) => (
        <motion.div
          key={`${skill.category}-${skill.name}`}
          className="break-inside-avoid bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.03 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="text-xs text-primary font-medium mb-1">{skill.category}</div>
          <div className="font-semibold text-foreground">{skill.name}</div>
        </motion.div>
      ))}
    </div>
  );
}
*/

// Circular Progress Component
// function CircularProgress({
//   percentage,
//   size = 120,
//   strokeWidth = 8,
//   delay = 0,
//   color = "from-primary to-accent",
// }: {
//   percentage: number;
//   size?: number;
//   strokeWidth?: number;
//   delay?: number;
//   color?: string;
// }) {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const radius = (size - strokeWidth) / 2;
//   const circumference = radius * 2 * Math.PI;
//   const strokeDasharray = `${circumference} ${circumference}`;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div ref={ref} className="relative inline-flex items-center justify-center">
//       <svg className="transform -rotate-90" width={size} height={size}>
//         {/* Background circle */}
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="currentColor"
//           strokeWidth={strokeWidth}
//           fill="transparent"
//           className="text-muted"
//         />

//         {/* Progress circle */}
//         <motion.circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="url(#gradient)"
//           strokeWidth={strokeWidth}
//           fill="transparent"
//           strokeDasharray={strokeDasharray}
//           strokeDashoffset={circumference}
//           strokeLinecap="round"
//           animate={
//             isInView
//               ? { strokeDashoffset }
//               : { strokeDashoffset: circumference }
//           }
//           transition={{ duration: 1, delay, ease: "easeOut" }}
//         />

//         {/* Gradient definition */}
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop
//               offset="0%"
//               className={`text-primary`}
//               stopColor="currentColor"
//             />
//             <stop
//               offset="100%"
//               className={`text-accent`}
//               stopColor="currentColor"
//             />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Percentage text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.span
//           className="text-2xl font-bold font-plus-jakarta"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.5, delay: delay + 0.5 }}
//         >
//           {percentage}%
//         </motion.span>
//       </div>
//     </div>
//   );
// }

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
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
            className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6"
            variants={animations.slideInLeft}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={animations.fadeIn}
          >
            Technologies and frameworks I work with to build modern web
            applications and deliver exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <UniformTags />
        </motion.div>

        {/* ALTERNATIVE DESIGNS (commented out - uncomment to switch designs): */}

        {/* Option 2: Category Cards 
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CategoryCards />
        </motion.div>
        */}

        {/* Option 3: Masonry Grid 
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MasonryGrid />
        </motion.div>
        */}

        {/* Tools & Technologies */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-muted-foreground text-2xl font-bold font-plus-jakarta mb-8">
            Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 text-muted-foreground bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
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
          className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-muted-foreground text-center max-w-4xl mx-auto">
            <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold font-plus-jakarta mb-4">
              My Development Philosophy
            </h3>
            <p className="leading-relaxed">
              I believe in writing clean, maintainable code that not only solves
              problems but also scales with business needs. My approach combines
              technical excellence with user-centered design, ensuring that
              every solution I build delivers both performance and great user
              experience. I&apos;m always eager to learn new technologies and
              adapt to evolving industry standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
