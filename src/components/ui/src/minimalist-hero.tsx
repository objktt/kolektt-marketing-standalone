"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from './utils/cn';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  mainText: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  leftImage?: string;
  className?: string;
}



// The main reusable Hero Section component
export const MinimalistHero = ({
  mainText,
  overlayText,
  leftImage,
  className,
}: MinimalistHeroProps) => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const imageRotate = useTransform(scrollY, [0, 500], [0, -10]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Left Image - Only show if leftImage prop is provided */}
      {leftImage && (
        <motion.div
          style={{
            y: imageY,
            rotate: imageRotate,
            scale: imageScale,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-4 top-4 z-10 w-[403px] h-[403px] md:w-[484px] md:h-[484px] lg:w-[605px] lg:h-[605px] xl:w-[806px] xl:h-[806px]"
        >
          <Image
            src={leftImage}
            alt="Drawing hand illustration"
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
          
          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">{mainText}</p>
          </motion.div>
        </div>
      </div>

    </div>
  );
};
