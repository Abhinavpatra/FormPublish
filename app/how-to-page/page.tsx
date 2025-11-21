"use client";

import { NavbarDemo } from "@/components/navbar-demo";
import { motion } from "motion/react";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';
import { Download, FolderOpen, Puzzle, CheckCircle } from "lucide-react";

export default function HowToPage() {
  const steps = [
    {
      number: 1,
      text: "Download the extension zip file from the website",
      icon: <Download className="w-5 h-5" />,
    },
    {
      number: 2,
      text: "Extract the zip file to a folder on your computer",
      icon: <FolderOpen className="w-5 h-5" />,
    },
    {
      number: 3,
      text: "Open Chrome and navigate to chrome://extensions/",
      icon: <Puzzle className="w-5 h-5" />,
    },
    {
      number: 4,
      text: "Enable Developer mode and click 'Load unpacked'",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      number: 5,
      text: "Select the extracted folder to install the extension",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <NavbarDemo />
      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            How to Install Form Filler
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Follow these simple steps to get started in under 2 minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <VideoPlayer className="overflow-hidden rounded-lg border shadow-2xl">
            <VideoPlayerContent
              crossOrigin=""
              muted
              autoPlay
              loop
              preload="auto"
              slot="media"
              src="/how-to-use.mp4"
            />
            <VideoPlayerControlBar>
              <VideoPlayerPlayButton />
              <VideoPlayerSeekBackwardButton />
              <VideoPlayerSeekForwardButton />
              <VideoPlayerTimeRange />
              <VideoPlayerTimeDisplay showDuration />
              <VideoPlayerMuteButton />
              <VideoPlayerVolumeRange />
            </VideoPlayerControlBar>
          </VideoPlayer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Installation Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-neutral-600">
                    {step.icon}
                  </div>
                  <p className="text-neutral-900 text-lg font-medium">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

