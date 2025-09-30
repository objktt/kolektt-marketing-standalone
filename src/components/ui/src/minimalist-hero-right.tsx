"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from './utils/cn';

// Define the props interface for type safety and reusability
interface MinimalistHeroRightProps {
  mainText?: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  rightImage?: string;
  className?: string;
}

// The main reusable Hero Section component with image on the right
export const MinimalistHeroRight = ({
  mainText,
  overlayText,
  rightImage,
  className,
}: MinimalistHeroRightProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Right Image - Only show if rightImage prop is provided */}
      {rightImage && (
        <motion.div
          style={{
            y: imageY,
            rotate: imageRotate,
            scale: imageScale,
          }}
          initial={{ opacity: 0, x: 100 }} // 오른쪽에서 시작
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-4 top-4 z-10 w-[403px] h-[403px] md:w-[484px] md:h-[484px] lg:w-[605px] lg:h-[605px] xl:w-[806px] xl:h-[806px]"
        >
          <Image
            src={rightImage}
            alt="Person silhouette illustration"
            fill
            className="object-contain filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 768px) 403px, (max-width: 1024px) 484px, (max-width: 1280px) 605px, 806px"
          />
        </motion.div>
      )}

      {/* Main Content Area */}
      <div className="relative flex w-full max-w-7xl flex-grow items-center justify-center">
        {/* Centered Content */}
        <div className="z-20 text-center">
          {/* Main Title */}
          {overlayText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-tight">
                {overlayText.part1}
                <br />
                {overlayText.part2}
              </h1>
            </motion.div>
          )}
          
          {/* Description Text */}
          {mainText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">{mainText}</p>
            </motion.div>
          )}
        </div>
      </div>

    </div>
  );
};