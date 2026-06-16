import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shantanu | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Shantanu, a Full Stack Developer building futuristic digital experiences powered by AI, creativity, and engineering.",
  keywords: ["Shantanu", "Developer", "Portfolio", "AI", "Full Stack", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-teal-500/30 custom-cursor">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
