"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface MaracasAnimationProps {
  isActive: boolean;
  bpm: number;
}

export default function MaracasAnimation({
  isActive,
  bpm,
}: MaracasAnimationProps) {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load Lottie animation data
  useEffect(() => {
    fetch("https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/lottie.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Failed to load Maracas animation:", error);
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
      // We want one maracas shake cycle to take exactly (1 / beatsPerSecond) seconds
      // speed = baseDurationSeconds / targetDurationSeconds
      const targetDurationSeconds = 1 / beatsPerSecond;
      const speed = baseDurationSeconds / targetDurationSeconds / 2; // Reduced by half like other animations

      console.log(`Maracas - BPM: ${bpm}`);
      console.log(`Maracas - Beats per second: ${beatsPerSecond.toFixed(3)}`);
      console.log(
        `Maracas - Base animation duration: ${baseDurationSeconds.toFixed(3)}s`,
      );
      console.log(
        `Maracas - Target duration per shake: ${targetDurationSeconds.toFixed(3)}s`,
      );
      console.log(`Maracas - Required speed: ${speed.toFixed(3)}x`);

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
      <div className="w-[460px] h-[460px] flex items-center justify-center">
        <div className="text-[24rem]">🪇</div>
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
