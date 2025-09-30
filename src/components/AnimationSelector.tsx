"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "phosphor-react";

// Test if import works
console.log("Importing ClapAnimation...");
try {
  const ClapAnimation = require("./ClapAnimation").default;
  console.log("ClapAnimation imported successfully:", ClapAnimation);
} catch (e) {
  console.error("Failed to import ClapAnimation:", e);
}

import ClapAnimation from "./ClapAnimation";

interface AnimationSelectorProps {
  isActive: boolean;
  bpm: number;
}

const animations = [
  {
    id: "clap",
    name: "박수",
    emoji: "👏",
  },
];

export default function AnimationSelector({
  isActive,
  bpm,
}: AnimationSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextAnimation = () => {
    setCurrentIndex((prev) => (prev + 1) % animations.length);
  };

  const prevAnimation = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + animations.length) % animations.length,
    );
  };

  const renderCurrentAnimation = () => {
    try {
      return <ClapAnimation isActive={isActive} bpm={bpm} />;
    } catch (error) {
      console.error("ClapAnimation error:", error);
      return (
        <div className="w-[460px] h-[460px] flex items-center justify-center">
          <div className="text-[24rem]">👏</div>
        </div>
      );
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {/* Main Animation Display */}
      <div className="relative">
        {renderCurrentAnimation()}

        {/* Navigation Chevrons - Positioned on the sides */}
        <button
          onClick={prevAnimation}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 group"
          aria-label="이전 애니메이션"
        >
          <ChevronLeft
            size={24}
            weight="bold"
            className="text-white group-hover:scale-110 transition-transform duration-200"
          />
        </button>

        <button
          onClick={nextAnimation}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 group"
          aria-label="다음 애니메이션"
        >
          <ChevronRight
            size={24}
            weight="bold"
            className="text-white group-hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Animation Name */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          {animations[currentIndex]?.emoji} {animations[currentIndex]?.name}
        </h3>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-4">
        {animations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`${animations[index]?.name || "애니메이션"} 선택`}
          />
        ))}
      </div>

      {/* Small Preview Icons */}
      <div className="flex gap-3 mt-4">
        {animations.map((animation, index) => (
          <button
            key={animation.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              index === currentIndex
                ? "bg-white/30 scale-110 border-2 border-white/50"
                : "bg-white/10 hover:bg-white/20 border border-white/20"
            }`}
            aria-label={`${animation?.name || "애니메이션"}으로 변경`}
          >
            <span className="text-2xl">{animation?.emoji || "🎵"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
