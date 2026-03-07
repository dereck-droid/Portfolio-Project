import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dereck Johnson — AI Automation Consultant & Developer",
  description:
    "I build AI systems that actually work in production. Enterprise compliance systems, agentic pipelines, and custom web apps that replace hours of manual work.",
  openGraph: {
    title: "Dereck Johnson — AI Automation Consultant & Developer",
    description:
      "Enterprise AI systems, agentic pipelines, and custom automation. Based in Greenville, SC.",
    type: "website",
    url: "https://portfolio.advancedleadsolutions.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dereck Johnson — AI Automation Consultant & Developer",
    description:
      "I build AI systems that actually work in production. Enterprise compliance systems, agentic pipelines, and custom automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
