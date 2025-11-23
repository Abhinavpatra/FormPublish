'use client';

import { useState } from 'react';
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
import { motion } from "motion/react";
import { LoaderFour } from "@/components/ui/loader";

const HeroVideo = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoCanPlay = () => {
    setIsVideoReady(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto my-8 px-4 relative"
    >
      {!isVideoReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 z-10 rounded-lg">
          <LoaderFour text="Video demonstration" />
        </div>
      )}
      <VideoPlayer className="overflow-hidden rounded-lg border shadow-2xl">
        <VideoPlayerContent
          crossOrigin=""
          muted
          autoPlay
          loop
          preload="auto"
          slot="media"
          src="/demo-video.mp4"
          onCanPlay={handleVideoCanPlay}
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
  );
};

export default HeroVideo;
