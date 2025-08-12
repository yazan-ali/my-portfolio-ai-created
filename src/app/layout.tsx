import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yazan - Portfolio & Blog",
    template: "%s | Yazan - Portfolio & Blog",
  },
  description:
    "Professional portfolio showcasing my development experience, projects, and blog posts. Modern, fast, and interactive.",
  keywords: [
    "portfolio",
    "developer",
    "frontend",
    "backend",
    "fullstack",
    "react",
    "nextjs",
    "javascript",
    "typescript",
  ],
  authors: [{ name: "Yazan" }],
  creator: "Yazan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Yazan - Portfolio & Blog",
    description:
      "Professional portfolio showcasing my development experience, projects, and blog posts.",
    siteName: "Yazan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yazan - Portfolio & Blog",
    description:
      "Professional portfolio showcasing my development experience, projects, and blog posts.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://yourportfolio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
