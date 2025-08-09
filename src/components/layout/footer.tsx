"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
]

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#hero"
                className="text-2xl font-bold font-plus-jakarta bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                onClick={() => scrollToTop()}
              >
                Yazan
              </Link>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate developer crafting digital experiences with modern technologies.
              Always learning, always building, always improving.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-plus-jakarta mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-plus-jakarta mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <Mail className="inline w-4 h-4 mr-2" />
                your.email@example.com
              </p>
              <p className="text-muted-foreground">
                Open for opportunities
              </p>
              <p className="text-muted-foreground">
                Remote & On-site
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-muted-foreground mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Yazan. All rights reserved.
            </p>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
