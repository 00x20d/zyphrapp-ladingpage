"use client";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import TransformationSection from "@/components/transformation-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className='min-h-screen bg-[#050406] text-white overflow-hidden'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full z-50 border-b border-white/10 bg-[#050406]/80 backdrop-blur-md'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2.5'>
            <div className='w-10 h-10 bg-transparent rounded-lg flex items-center justify-center '>
              <Image
                src='/zyphr_app_logo.png'
                alt='Zyphr Logo'
                width={48}
                height={48}
              />
            </div>
            <span className='text-lg font-display font-bold tracking-tight'>
              Zyphr
            </span>
          </div>
          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#features'
              className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
            >
              Features
            </a>
            <a
              href='#transform'
              className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
            >
              Journey
            </a>
            <a
              href='#hero'
              className='text-sm font-medium text-white/60 hover:text-white transition-colors duration-200'
            >
              Waitlist
            </a>
          </div>
          <Button
            size='sm'
            className='bg-[#701dff] hover:bg-[#701dff]/90 text-white font-medium rounded-full px-6 shadow-[0_0_20px_-5px_#701dff]'
            onClick={() => document.getElementById("email-input")?.focus()}
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
