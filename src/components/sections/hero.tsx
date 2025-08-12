"use client";

import React from "react";
import { motion } from "framer-motion";

import { ChevronDown, Github, Linkedin, Mail, File, Phone } from "lucide-react";
import { animations } from "@/lib/utils";

// Typing Animation Component
function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="border-r-2 border-primary ml-1"
      />
    </span>
  );
}

// Animated Code Terminal Component
function AnimatedCodeTerminal() {
  const [currentSnippet, setCurrentSnippet] = React.useState(0);
  const [displayedCode, setDisplayedCode] = React.useState("");
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  // Code snippets with realistic, properly formatted code
  const codeSnippets = React.useMemo(
    () => [
      {
        filename: "portfolio.tsx",
        language: "TypeScript React",
        code: `import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  const skills = ['React', 'TypeScript', 'Next.js'];
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero-section"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-primary">Yazan</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Software Engineer & Full Stack Developer
        </p>
        
        <div className="flex gap-4 mt-6">
          {skills.map(skill => (
            <span key={skill} className="tech-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};`,
      },
      {
        filename: "api/auth.ts",
        language: "Next.js API",
        code: `import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/database';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { email, password } = await request.json();
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
    
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`,
      },
      {
        filename: "terminal",
        language: "Terminal",
        code: `yazan@portfolio:~$ npm create next-app@latest my-portfolio
✓ Would you like to use TypeScript? Yes
✓ Would you like to use ESLint? Yes  
✓ Would you like to use Tailwind CSS? Yes
✓ Would you like to use App Router? Yes
✓ Would you like to customize the import alias? No

Creating a new Next.js app in /Users/yazan/my-portfolio...

Installing dependencies:
- react
- react-dom  
- next
- typescript
- tailwindcss
- framer-motion

yazan@portfolio:~$ cd my-portfolio

yazan@portfolio:~/my-portfolio$ npm run dev
▲ Next.js 15.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.1.100:3000

✓ Ready in 2.1s
✓ Compiled successfully

yazan@portfolio:~/my-portfolio$ git init
Initialized empty Git repository

yazan@portfolio:~/my-portfolio$ git add .
yazan@portfolio:~/my-portfolio$ git commit -m "feat: initial portfolio setup"

[main f8e9a1c] feat: initial portfolio setup
 42 files changed, 1,247 insertions(+)
 create mode 100644 README.md
 create mode 100644 package.json

yazan@portfolio:~/my-portfolio$ npm run build
▲ Next.js 15.0.0

✓ Checking validity of types
✓ Creating an optimized production build
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)               Size     First Load JS
┌ ○ /                     142 B    87.2 kB
└ ○ /_not-found           871 B    87.9 kB

○ (Static) prerendered as static content

🚀 Portfolio deployed successfully!`,
      },
    ],
    []
  );

  // Reset and start typing next snippet
  const startNextSnippet = React.useCallback(() => {
    setCurrentCharIndex(0);
    setDisplayedCode("");
    setIsTyping(true);
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
  }, [codeSnippets.length]);

  // Typing animation effect
  React.useEffect(() => {
    if (!isTyping) return;

    const fullCode = codeSnippets[currentSnippet].code;

    if (currentCharIndex < fullCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      }, 25); // Faster typing speed
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, pause before next snippet
      setIsTyping(false);
      const timeout = setTimeout(startNextSnippet, 2500); // Shorter pause
      return () => clearTimeout(timeout);
    }
  }, [
    currentCharIndex,
    currentSnippet,
    isTyping,
    startNextSnippet,
    codeSnippets,
  ]);

  const currentSnippetData = codeSnippets[currentSnippet];

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-[#1e1e1e] border border-border/50 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-[#2d2d30] border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-300 text-sm font-medium ml-4">
            {currentSnippetData.filename}
          </div>
        </div>
        <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
          {currentSnippetData.language}
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 h-[calc(100%-60px)] overflow-hidden relative">
        <div className="font-mono text-sm leading-relaxed">
          <pre className="text-gray-300 whitespace-pre-wrap">
            {displayedCode}
            {/* Blinking Cursor */}
            {isTyping && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-primary ml-1"
              />
            )}
          </pre>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}

// Floating Particles Background
function ParticlesBackground() {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Update on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const particlesCount = 15; // Reduced from 50 for better performance

  // Don't render particles until we have dimensions
  if (dimensions.width === 0 || dimensions.height === 0) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />
    );
  }

  const particles = Array.from({ length: particlesCount }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary/20 rounded-full"
      initial={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
      }}
      animate={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
      }}
      transition={{
        duration: Math.random() * 30 + 20, // Slower, less CPU intensive
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear", // More efficient than default easing
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      <ParticlesBackground />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={animations.stagger}
          >
            {/* Greeting */}
            <motion.div className="mb-4" variants={animations.fadeIn}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name with typing effect */}
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-plus-jakarta mb-6"
              variants={animations.slideInLeft}
            >
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Yazan
              </span>
            </motion.h1>

            {/* Job title with typing animation */}
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 min-h-[2em]"
              variants={animations.slideInLeft}
            >
              <TypingText text="Software Engineer & Full Stack Developer" />
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              variants={animations.fadeIn}
            >
              I build scalable web applications and elegant user interfaces that
              solve real-world problems. Driven by curiosity and a commitment to
              excellence, I transform ideas into impactful digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={animations.fadeIn}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground 
                         rounded-full font-medium text-lg transition-all duration-200
                         shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1ZiVImK3DOrYSG538vvHcQYPYM4oD1JZU/view?usp=sharing"
                className="px-8 py-4 border border-border hover:bg-muted text-foreground
                         rounded-full font-medium text-lg transition-all duration-200
                         flex items-center justify-center gap-2"
                target="_blank"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <File size={20} />
                View CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              variants={animations.fadeIn}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/yazan-ali",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/yazan-abuali-564a76177",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:yazanabuali2000@gmail.com",
                  label: "Email",
                },
                {
                  icon: Phone,
                  href: "tel:+962781976253",
                  label: "Phone",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground 
                             transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right side - Code Terminal */}
          <motion.div
            className="relative h-96 lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <AnimatedCodeTerminal />

            {/* Floating elements around terminal */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
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
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to projects"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
