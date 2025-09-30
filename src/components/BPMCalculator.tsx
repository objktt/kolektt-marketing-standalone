"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "phosphor-react";

export default function BPMCalculator({
  onTap,
  onBpmChange,
}: {
  onTap?: () => void;
  onBpmChange?: (bpm: number) => void;
}) {
  const [bpm, setBpm] = useState(0);
  const [taps, setTaps] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculateBPM = useCallback((tapTimes: number[]) => {
    if (tapTimes.length < 2) return 0;

    const intervals = [];
    for (let i = 1; i < tapTimes.length; i++) {
      intervals.push(tapTimes[i] - tapTimes[i - 1]);
    }

    const averageInterval =
      intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    const bpm = Math.round(60000 / averageInterval);

    return bpm;
  }, []);

  const handleTap = useCallback(() => {
    const now = Date.now();
    setIsActive(true);

    // Call the onTap callback to trigger animation
    onTap?.();

    setTaps((prevTaps) => {
      const newTaps = [...prevTaps, now];

      // Keep only the last 10 taps for better accuracy
      if (newTaps.length > 10) {
        newTaps.shift();
      }

      const newBpm = calculateBPM(newTaps);
      setBpm(newBpm);

      return newTaps;
    });

    // Clear timeout if exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // No auto-reset - BPM stays until manual reset
  }, [calculateBPM, onTap]);

  // Notify parent of BPM changes via useEffect
  useEffect(() => {
    onBpmChange?.(bpm);
  }, [bpm, onBpmChange]);

  const handleReset = useCallback(() => {
    setTaps([]);
    setBpm(0);
    setIsActive(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <div className="text-center">
      {/* BPM Display */}
      <div className="mb-8">
        <motion.div
          className="text-5xl lg:text-6xl xl:text-9xl font-bold text-white mb-6"
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                  color: ["#ffffff", "#10b981", "#ffffff"],
                }
              : { scale: 1, color: "#ffffff" }
          }
          transition={{ duration: 0.3 }}
        >
          {bpm || "--"}
        </motion.div>
      </div>

      {/* Text Buttons */}
      <div className="flex justify-center gap-8">
        <button
          className="text-white text-2xl font-bold hover:text-green-400 transition-colors px-6 py-3 border border-white/30 rounded-lg hover:border-green-400"
          onClick={handleTap}
        >
          TAP
        </button>
        <button
          className="text-white/60 text-2xl font-medium hover:text-white transition-colors px-6 py-3 border border-white/20 rounded-lg hover:border-white/40"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
