"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface UltraSimpleSelectorProps {
  isActive: boolean;
  bpm: number;
}

export default function UltraSimpleSelector({
  isActive,
  bpm,
}: UltraSimpleSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationData, setAnimationData] = useState<any>(null);
  const lottieRef = useRef<any>(null);

  const animations = [
    {
      name: "박수",
      emoji: "👏",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/lottie.json",
    },
    {
      name: "댄스",
      emoji: "💃",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f483/lottie.json",
    },
    {
      name: "색소폰",
      emoji: "🎷",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b7/lottie.json",
    },
    {
      name: "마라카스",
      emoji: "🪇",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/lottie.json",
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % animations.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + animations.length) % animations.length,
    );

  const current = animations[currentIndex];

  // Load Lottie animation when currentIndex changes
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(current.url);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error(`Failed to load ${current.name} animation:`, error);
        setAnimationData(null);
      }
    };

    loadAnimation();
  }, [currentIndex, current.url, current.name]);

  // Control animation based on BPM
  useEffect(() => {
    if (isActive && bpm > 0 && lottieRef.current && animationData) {
      // Convert BPM to beats per second
      const beatsPerSecond = bpm / 60;

      // Get base animation duration in seconds
      const baseDurationSeconds = animationData.op / animationData.fr;

      // Calculate speed multiplier
      const targetDurationSeconds = 1 / beatsPerSecond;
      const speed = baseDurationSeconds / targetDurationSeconds / 2;

      console.log(`${current.name} - BPM: ${bpm}, Speed: ${speed.toFixed(3)}x`);

      lottieRef.current.setSpeed(speed);
      lottieRef.current.play();
    } else if (lottieRef.current) {
      lottieRef.current.stop();
    }
  }, [isActive, bpm, animationData, current.name]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Main Display */}
      <div
        style={{
          position: "relative",
          width: "460px",
          height: "460px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {animationData ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={false}
            style={{ width: "460px", height: "460px" }}
          />
        ) : (
          <div
            style={{
              fontSize: "24rem",
              lineHeight: 1,
              animation: isActive && bpm > 0 ? "pulse 1s infinite" : "none",
            }}
          >
            {current.emoji}
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "4rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1.2)";
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.opacity = "1";
          }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "4rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1.2)";
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.opacity = "1";
          }}
        >
          ›
        </button>
      </div>

      {/* Dot Indicators */}
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        {animations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transform: index === currentIndex ? "scale(1.25)" : "scale(1)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
