'use client';

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

const HeroVideo = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-full max-w-4xl mx-auto my-8 px-4"
  >
    <VideoPlayer className="overflow-hidden rounded-lg border shadow-2xl">
      <VideoPlayerContent
        crossOrigin=""
        muted
        autoPlay
        loop
        preload="auto"
        slot="media"
        src="/demo-video.mp4"
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

export default HeroVideo;
