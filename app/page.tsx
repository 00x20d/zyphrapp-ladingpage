"use client";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import TransformationSection from "@/components/transformation-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className='min-h-screen bg-[#050406] text-white overflow-hidden'>
      {/* Navigation */}
      <Navbar />

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
