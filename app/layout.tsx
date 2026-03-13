import type React from "react";
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Sankofa_Display as SF_Pro_Display,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const sfProDisplay = SF_Pro_Display({ style: "normal", weight: "400" });

export const metadata: Metadata = {
  title: "Zyphr - Gamified Habit Tracker",
  description:
    "Transform your life through gamified habit tracking inspired by Solo Leveling. Create a character, complete daily quests, and level up in real life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <link rel="icon" href="/zyphr_logo.ico" />
      <body
        className={`font-sans antialiased bg-[#050406] text-white selection:bg-[#701dff] selection:text-white`}
      >
        {children}
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
