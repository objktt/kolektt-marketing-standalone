"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface ClapAnimationProps {
  isActive: boolean;
  bpm: number;
}

export default function ClapAnimation({ isActive, bpm }: ClapAnimationProps) {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load Lottie animation data
  useEffect(() => {
    fetch(
      "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f_1f3fb/lottie.json",
    )
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Failed to load Lottie animation:", error);
      });
  }, []);

  // Control animation based on BPM
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isActive && bpm > 0 && lottieRef.current && animationData) {
      // Convert BPM to beats per second
      const beatsPerSecond = bpm / 60;

      // Get base animation duration in seconds
      const baseDurationSeconds = animationData.op / animationData.fr;

      // Calculate speed multiplier
      // We want one clap cycle to take exactly (1 / beatsPerSecond) seconds
      // speed = baseDurationSeconds / targetDurationSeconds
      const targetDurationSeconds = 1 / beatsPerSecond;
      const speed = baseDurationSeconds / targetDurationSeconds / 2;

      console.log(`BPM: ${bpm}`);
      console.log(`Beats per second: ${beatsPerSecond.toFixed(3)}`);
      console.log(
        `Base animation duration: ${baseDurationSeconds.toFixed(3)}s`,
      );
      console.log(
        `Target duration per clap: ${targetDurationSeconds.toFixed(3)}s`,
      );
      console.log(`Required speed: ${speed.toFixed(3)}x`);

      lottieRef.current.setSpeed(speed);
      lottieRef.current.play(); // Start continuous loop
    } else if (lottieRef.current) {
      // Stop animation when not active
      lottieRef.current.stop();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, bpm, animationData]);

  if (!animationData) {
    return (
      <div className="w-[576px] h-[576px] flex items-center justify-center">
        <div className="text-[24rem]">👏</div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
        className="w-[460px] h-[460px]"
      />
    </div>
  );
}
