"use client";

import { useState, useEffect } from "react";
import { Zap, BarChart3, Users, Sparkles, Target, Flame } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Character Creation",
    description:
      "Design your avatar. Your character grows as you do. This isn't just visual—it's psychological.",
  },
  {
    icon: Flame,
    title: "Daily & Weekly Quests",
    description:
      "Set custom habits as quests. Morning meditation, gym sessions, coding practice—they're all missions.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Track everything down to the habit level. Completion rates, streak patterns, habit correlations.",
  },
  {
    icon: Target,
    title: "Habit Customization",
    description:
      "Create unlimited custom habits tailored to your goals. Weekly challenges, daily disciplines.",
  },
  {
    icon: Zap,
    title: "Level Up System",
    description:
      "Every completed quest gains XP. Level thresholds unlock achievements. Real progression mechanics.",
  },
  {
    icon: Users,
    title: "Community Leaderboards",
    description:
      "See how others are leveling up. Competitive or collaborative—choose your path.",
  },
];

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id='features'
      className='relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050406]'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-16 text-center'>
          <div className='inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5'>
            <span className='text-sm font-medium text-white/80'>Benefits</span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-display font-bold mb-6 text-white tracking-tight'>
            The Key Benefits of <br />
            <span className='text-[#701dff]'>Gamifying Your Growth</span>
          </h2>
          <p className='text-lg text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Designed to make habit tracking engaging, rewarding, and sustainable
            <br />
            through proven game mechanics.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-[#2c2334] bg-[#2c2334]/25 hover:border-[#701dff]/50 hover:bg-[#2c2334]/40 transition-all duration-300 relative overflow-hidden ${
                  mounted ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover Gradient Effect */}
                <div className='absolute inset-0 bg-linear-to-b from-[#701dff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                <div className='relative z-10'>
                  <div className='mb-6'>
                    <Icon className='w-8 h-8 text-[#701dff]' />
                  </div>
                  <h3 className='text-xl font-display font-bold mb-3 text-white'>
                    {feature.title}
                  </h3>
                  <p className='text-white/50 leading-relaxed text-sm'>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
