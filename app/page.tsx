"use client";

import { SparklesPreview } from "@/components/sparkles-preview";
import { GlowingEffectDemoSecond } from "@/components/glowing-effect-demo";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter-demo";
import HeroVideo from "@/components/hero-video";
import { DownloadSection } from "@/components/download-section";

import { NavbarDemo } from "@/components/navbar-demo";

import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 overflow-x-hidden">
      <NavbarDemo />
      <div className="pt-20">
        <SparklesPreview />
      </div>
      <div id="video">
        <HeroVideo />
      </div>
      <div id="features" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-neutral-900">
          Why Choose Form Filler?
        </h2>
        <GlowingEffectDemoSecond />
      </div>
      <TypewriterEffectSmoothDemo />
      <DownloadSection />
      <Footer />
    </main>
  );
}
