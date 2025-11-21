"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[25rem] relative w-full bg-neutral-50 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-neutral-900 relative z-20">
        Stop Filling the Same Form Again and Again
      </h1>
      <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl text-center relative z-20">
        Save hours every week during placement season. The ultimate tool for students applying to 100s of internships and jobs.
      </p>
    </div>
  );
}
