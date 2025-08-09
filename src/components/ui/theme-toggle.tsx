"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../providers/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (!mounted) {
      // Return a neutral icon during SSR to prevent hydration mismatch
      return <div className="h-5 w-5 rounded-full bg-muted animate-pulse" />;
    }

    if (theme === "light") return <Sun className="h-5 w-5" />;
    if (theme === "dark") return <Moon className="h-5 w-5" />;
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-muted-foreground relative flex h-10 w-10 items-center justify-center rounded-full 
                 bg-background/80 backdrop-blur-sm border border-border/50
                 hover:bg-accent hover:text-accent-foreground transition-colors
                 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: theme === "dark" ? 180 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
}
