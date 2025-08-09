"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import { Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { animations } from "@/lib/utils";

// 3D Animated Coding Scene Component
function AnimatedCodingScene() {
  const groupRef = React.useRef<Group>(null);

  // Animate the entire group using useFrame
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Laptop/Monitor */}
      <group position={[0, 0, 0]}>
        {/* Screen */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[2.5, 1.8, 0.05]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        {/* Screen bezel */}
        <mesh position={[0, 0.2, -0.03]}>
          <boxGeometry args={[2.6, 1.9, 0.02]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.9, 0.2]}>
          <boxGeometry args={[2.8, 0.1, 1.2]} />
          <meshStandardMaterial color="#475569" />
        </mesh>

        {/* Code lines on screen */}
        <mesh position={[-0.8, 0.5, 0.026]}>
          <boxGeometry args={[0.8, 0.08, 0.001]} />
          <meshStandardMaterial
            color="#0ea5a4"
            emissive="#0ea5a4"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.6, 0.3, 0.026]}>
          <boxGeometry args={[1.2, 0.08, 0.001]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.4, 0.1, 0.026]}>
          <boxGeometry args={[0.6, 0.08, 0.001]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.7, -0.1, 0.026]}>
          <boxGeometry args={[1.0, 0.08, 0.001]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.5, -0.3, 0.026]}>
          <boxGeometry args={[1.4, 0.08, 0.001]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#ef4444"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Floating Code Symbols */}

      {/* Opening HTML Tag < > */}
      <group position={[-2.5, 1.5, 1]} rotation={[0, Math.PI / 6, 0]}>
        <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Closing HTML Tag </ > */}
      <group position={[2.5, 1.5, 1]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Forward slash for closing tag */}
        <mesh position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.06, 0.5, 0.06]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Floating Semicolon ; */}
      <group position={[0, -2.5, 1.5]}>
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#0ea5a4"
            emissive="#0ea5a4"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0, -0.15, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.06, 0.3, 0.06]} />
          <meshStandardMaterial
            color="#0ea5a4"
            emissive="#0ea5a4"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </group>
  );
}

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

  const particlesCount = 50;

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
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
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
              <TypingText text="Full Stack Developer & UI/UX Enthusiast" />
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              variants={animations.fadeIn}
            >
              I craft exceptional digital experiences with modern technologies.
              Passionate about clean code, beautiful design, and innovative
              solutions that make a difference.
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
                href="/cv.pdf"
                download
                className="px-8 py-4 border border-border hover:bg-muted text-foreground
                         rounded-full font-medium text-lg transition-all duration-200
                         flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download CV
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
                  href: "https://github.com/yourusername",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground 
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

          {/* Right side - 3D Scene */}
          <motion.div
            className="relative h-96 lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border border-border/50">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[5, 5, 5]} intensity={1.2} />
                <pointLight
                  position={[-5, -5, 3]}
                  intensity={0.8}
                  color="#7c3aed"
                />
                <pointLight
                  position={[0, 5, -5]}
                  intensity={0.6}
                  color="#f59e0b"
                />
                <AnimatedCodingScene />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </div>

            {/* Floating elements around 3D scene */}
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
