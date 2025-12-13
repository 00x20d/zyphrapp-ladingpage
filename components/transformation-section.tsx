"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const transformationSteps = [
  {
    phase: "PHASE 1",
    title: "Awakening",
    description:
      "Create your character and define your path. Set daily quests that matter to you—these aren't arbitrary tasks.",
    stats: "Day 1-30",
    image: "/character-creation-screen-rpg-style-purple-theme.jpg",
  },
  {
    phase: "PHASE 2",
    title: "Progression",
    description:
      "Every completed habit is XP gained. Watch your character level up. The streaks you build become your foundation.",
    stats: "Day 31-90",
    image: "/progress-dashboard-with-level-up-animations.jpg",
  },
  {
    phase: "PHASE 3",
    title: "Ascension",
    description:
      "You're not just tracking habits anymore. You're witnessing your metamorphosis. Your analytics show the person you've become.",
    stats: "Day 90+",
    image: "/achievement-unlocked-gaming-interface.jpg",
  },
];

export default function TransformationSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id='transform'
      className='relative py-8 px-4 sm:px-6 lg:px-8 bg-[#050406]'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-24 text-center'>
          <div className='inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5'>
            <span className='text-sm font-medium text-white/80'>
              Our Process
            </span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-display font-bold mb-6 text-white tracking-tight'>
            Simple, Smart, and <br />
            <span className='text-[#701dff]'>Scalable Progression</span>
          </h2>
          <p className='text-lg text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Your journey from ordinary to unstoppable follows a proven
            progression system designed for long-term growth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {transformationSteps.map((step, index) => {
            return (
              <div
                key={index}
                className={`
                    group flex flex-col rounded-3xl border border-[#2c2334] bg-[#2c2334]/25 overflow-hidden hover:border-[#701dff]/30 transition-all duration-500
                    ${mounted ? "animate-fade-up" : ""}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Side - Top 1/3 */}
                <div className='relative h-48 sm:h-56 overflow-hidden bg-black/50 border-b border-[#2c2334]'>
                  <div className='absolute inset-0 bg-linear-to-t from-[#2c2334]/50 to-transparent z-10' />
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100'
                  />
                </div>

                {/* Content Side - Bottom */}
                <div className='p-8 flex flex-col flex-1'>
                  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#701dff]/10 border border-[#701dff]/20 mb-6 w-fit'>
                    <span className='text-xs font-bold text-[#701dff] uppercase tracking-widest'>
                      {step.phase}
                    </span>
                  </div>

                  <h3 className='text-2xl font-display font-bold mb-3 text-white'>
                    {step.title}
                  </h3>

                  <p className='text-white/60 text-sm mb-6 leading-relaxed flex-1'>
                    {step.description}
                  </p>

                  <div className='flex items-center gap-4 text-sm font-medium text-white/40 border-t border-white/5 pt-6 mt-auto'>
                    <div className='flex items-center gap-2'>
                      <CheckCircle2 className='w-4 h-4 text-[#701dff]' />
                      <span>System Check</span>
                    </div>
                    <div className='w-1 h-1 rounded-full bg-white/20'></div>
                    <span className='text-white/80'>{step.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
