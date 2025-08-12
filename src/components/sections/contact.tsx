"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { animations } from "@/lib/utils";

// Social links and contact methods
const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:yazanabuali2000@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+962781976253",
    color: "hover:text-green-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yazan-ali",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yazan-abuali-564a76177",
    color: "hover:text-blue-600",
  },
];

// Form validation
const validateForm = (data: FormData) => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  return errors;
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_45he3qp", // Replace with your EmailJS service ID
        "template_9qwhpjr", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "user_auNJsV3PDr7FaeOTFIm72" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
            <Mail className="w-4 h-4 inline mr-2" />
            Get In Touch
          </motion.div>

          <motion.h2
            className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta mb-6"
            variants={animations.slideInLeft}
          >
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={animations.fadeIn}
          >
            Have a project in mind or just want to chat about technology?
            I&apos;d love to hear from you. Let&apos;s build something amazing
            together!
          </motion.p>

          {/* Social Links */}
          <div className="my-6">
            <h4 className="font-semibold mb-6 text-muted-foreground">
              Connect with me
            </h4>
            <div className="flex text-muted-foreground justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`p-3 border border-border rounded-xl transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <h3 className="text-2xl font-bold font-plus-jakarta mb-6 text-foreground">
            Let&apos;s talk about your project
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I&apos;m always interested in hearing about new opportunities,
            whether that&apos;s working with you on a project, joining your
            team, or discussing potential collaborations. Don&apos;t hesitate to
            reach out!
          </p> */}
        </motion.div>

        {/* Full-width Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-muted-foreground"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.name
                      ? "border-red-500"
                      : "border-border placeholder:text-muted-foreground"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email
                      ? "border-red-500"
                      : "border-border placeholder:text-muted-foreground"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                  errors.subject
                    ? "border-red-500"
                    : "border-border placeholder:text-muted-foreground"
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-border placeholder:text-muted-foreground"
                }`}
                placeholder="Tell me about your project or just say hello..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground rounded-xl font-medium text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-700 dark:text-green-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    Message sent successfully!
                  </span>
                </div>
                <p className="text-sm mt-1">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-700 dark:text-red-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span className="font-medium">Failed to send message</span>
                </div>
                <p className="text-sm mt-1">
                  Please try again or contact me directly.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
