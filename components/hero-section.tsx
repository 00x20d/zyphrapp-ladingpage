"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
  startScroll: number;
  endScroll: number;
}

const featureCards: FeatureCard[] = [
  {
    id: "1",
    title: "Level Up Notifications",
    description: "Get instant alerts when you level up",
    side: "left",
    startScroll: 0,
    endScroll: 300,
  },
  {
    id: "2",
    title: "Character Customization",
    description: "Make your avatar truly yours",
    side: "right",
    startScroll: 0,
    endScroll: 300,
  },
  {
    id: "3",
    title: "Daily Quests",
    description: "New challenges every single day",
    side: "left",
    startScroll: 0,
    endScroll: 300,
  },
  {
    id: "4",
    title: "Deep Analytics",
    description: "Track every aspect of your growth",
    side: "right",
    startScroll: 0,
    endScroll: 300,
  },
];

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const lerp = (start: number, end: number, progress: number) => {
  return start + (end - start) * progress;
};

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const headlineRef = useRef<HTMLDivElement>(null);
  //const phoneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY || document.documentElement.scrollTop || 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 640);
      // Landscape mode: width > height and width < 1024 (tablet breakpoint)
      setIsLandscape(width > height && width < 1024);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const headlineProgress = clamp(scrollProgress / 300, 0, 1);
  const headlineOpacity = 1 - headlineProgress;
  const headlineScale = lerp(1, 0.8, headlineProgress);
  const headlineY = scrollProgress * 0.2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      id='hero'
      className='relative bg-[#050406] overflow-hidden min-h-screen sm:py-16 lg:py-24'
    >
      {/* Background Gradient Blob */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[800px] sm:h-[500px] bg-[#701dff]/20 blur-[120px] rounded-full pointer-events-none z-0' />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>
        <div
          ref={headlineRef}
          className='pt-36 pb-8 sm:pb-12 text-center relative sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:w-full sm:z-0 pointer-events-none'
          style={
            isMobile && !isLandscape
              ? undefined
              : {
                opacity: headlineOpacity,
                transform: `translateY(${headlineY}px) scale(${headlineScale})`,
                transition: "none",
                transformOrigin: "top center",
              }
          }
        >
          <div className='inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm'>
            <Sparkles className='w-4 h-4 text-[#701dff]' />
            <span className='text-sm font-medium text-white/80'>
              The Ultimate Life RPG
            </span>
          </div>

          <h1 className='text-4xl sm:text-7xl font-display font-bold mb-8 leading-tight text-balance tracking-tight'>
            <span className='block text-white'>Turn Your Life</span>
            <span className='block text-white/40'>Into an RPG.</span>
          </h1>
          <p className='text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-sans leading-relaxed'>
            Create your character, complete daily quests, <br /> and watch
            yourself level up in real life.
          </p>
        </div>

        {/* Phone section with cards */}
        <div
          className='relative mt-0 sm:mt-[42vh]'
          style={{ height: isMobile && !isLandscape ? "auto" : "750px" }}
        >
          <div className='sm:sticky sm:top-48 flex items-center justify-center'>
            {/* Phone */}
            <div className='relative mt-16 w-64 sm:w-80 aspect-1/2 rounded-[3rem] overflow-hidden z-50 '>
              <img
                src='/hero-mockup.png'
                alt='App interface preview'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Cards */}
            {(!isMobile || isLandscape) &&
              featureCards.map((card) => {
                const verticalOffset =
                  featureCards.indexOf(card) * 160 -
                  (featureCards.length - 1) * 65;
                const cardProgress = clamp(
                  (scrollProgress - card.startScroll) /
                  (card.endScroll - card.startScroll),
                  0,
                  1
                );
                const easedProgress =
                  cardProgress * cardProgress * (3 - 2 * cardProgress);
                const maxDistance = 145;
                const currentDistance = lerp(0, maxDistance, easedProgress);

                return (
                  <div
                    key={card.id}
                    className='absolute w-72 z-20'
                    style={{
                      top: `calc(50% + ${verticalOffset}px)`,
                      left: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div
                      className='p-8 rounded-2xl border border-[#2c2334] bg-[#2c2334]/25 backdrop-blur-xl shadow-2xl'
                      style={{
                        opacity: easedProgress,
                        transform:
                          card.side === "left"
                            ? `translateX(calc(-100% - ${currentDistance}px))`
                            : `translateX(${currentDistance}px)`,
                      }}
                    >
                      <h3 className='font-display font-semibold mb-2 text-lg text-white'>
                        {card.title}
                      </h3>
                      <p className='text-sm text-white/60 font-sans leading-relaxed'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        <div className='max-w-2xl mx-auto text-center sm:pb-20 lg:pb-8 pt-0 relative z-20 mt-16'>
          <h2 className='text-4xl sm:text-5xl font-display font-bold mb-6 text-white'>
            See Your Transformation Unfold
          </h2>
          <p className='text-white/60 text-lg mb-12 font-sans max-w-xl mx-auto lg:max-w-lg'>
            Track every milestone, celebrate every win, and become the best
            version of yourself through gamified habits.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-row gap-6 lg:w-9/12 mx-auto justify-center sm:w-full'
          >
            {/* The email input block (commented out in your original code) remains commented out */}

            {/* --- 🛠️ REPLACEMENT: Google Play Store Link (Android) --- */}
            {/* <a
              href='YOUR_GOOGLE_PLAY_BETA_LINK' // <-- ADD YOUR ANDROID BETA LINK HERE
              target='_blank' // Opens link in a new tab
              rel='noopener noreferrer' // Security best practice for target='_blank'
              // All Tailwind classes from the original Button component are moved here:
              className='bg-[#701dff] hover:bg-[#6015e0] text-white font-semibold h-14 rounded-xl transition-all duration-200 w-full text-lg shadow-[0_0_20px_-5px_#701dff] flex items-center justify-center'
            >
              {submitted ? "Confirmed!" : "Join Android Beta"}
            </a> */}

            {/* --- 🛠️ REPLACEMENT: TestFlight Link (iOS) --- */}
            <a
              href='https://testflight.apple.com/join/r1beJJ1Y' // <-- The TestFlight link you provided
              target='_blank' // Opens link in a new tab
              rel='noopener noreferrer' // Security best practice for target='_blank'
              // All Tailwind classes from the original Button component are moved here:
              className='bg-[#701dff] hover:bg-[#6015e0] text-white font-semibold h-14 rounded-xl transition-all duration-200 w-full text-lg shadow-[0_0_20px_-5px_#701dff] flex items-center justify-center'
            >
              {submitted ? "Confirmed!" : "Join iOS Beta"}
            </a>

            {/* Note: The <link> tag inside the previous button was incorrect and has been removed. 
      Links for navigation/anchors are always added via the 'href' attribute on an <a> tag. */}
          </form>
          {submitted && (
            <p className='text-sm mt-4 font-sans text-[#701dff] animate-fade-in'>
              Check your email for early access updates.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
