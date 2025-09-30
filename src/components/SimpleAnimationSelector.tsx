"use client";

import { useState } from "react";
// Using simple SVG icons instead of external library

interface SimpleAnimationSelectorProps {
  isActive: boolean;
  bpm: number;
}

const animations = [
  { id: "clap", name: "박수", emoji: "👏" },
  { id: "dance", name: "댄스", emoji: "💃" },
  { id: "sax", name: "색소폰", emoji: "🎷" },
  { id: "maracas", name: "마라카스", emoji: "🪇" },
];

export default function SimpleAnimationSelector({
  isActive,
  bpm,
}: SimpleAnimationSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAnimation = () => {
    setCurrentIndex((prev) => (prev + 1) % animations.length);
  };

  const prevAnimation = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + animations.length) % animations.length,
    );
  };

  const current = animations[currentIndex];

  return (
    <div className="relative flex flex-col items-center">
      {/* Main Animation Display */}
      <div className="relative">
        <div className="w-[460px] h-[460px] flex items-center justify-center">
          <div
            className={`text-[24rem] transition-transform duration-300 ${
              isActive && bpm > 0 ? "animate-pulse" : ""
            }`}
          >
            {current.emoji}
          </div>
        </div>

        {/* Navigation Chevrons */}
        <button
          onClick={prevAnimation}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 group"
          aria-label="이전 애니메이션"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white group-hover:scale-110 transition-transform duration-200"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextAnimation}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 group"
          aria-label="다음 애니메이션"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white group-hover:scale-110 transition-transform duration-200"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Animation Name */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          {current.emoji} {current.name}
        </h3>
        {isActive && bpm > 0 && (
          <p className="text-lg text-white/80">BPM: {bpm}</p>
        )}
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
            aria-label={`${animations[index].name} 애니메이션 선택`}
          />
        ))}
      </div>

      {/* Preview Icons */}
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
            aria-label={`${animation.name} 애니메이션으로 변경`}
          >
            <span className="text-2xl">{animation.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
