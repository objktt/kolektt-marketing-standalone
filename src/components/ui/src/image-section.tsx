"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from './utils/cn';

// Define the props interface for type safety and reusability
interface ImageSectionProps {
  imagePath: string;
  altText: string;
  className?: string;
}

// The main reusable Image Section component
export const ImageSection = ({
  imagePath,
  altText,
  className,
}: ImageSectionProps) => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const imageRotate = useTransform(scrollY, [0, 500], [0, -10]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section
      className={cn(
        'relative flex h-96 md:h-[500px] w-full items-center justify-center overflow-hidden bg-black p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Main Image - Right side */}
      <motion.div
        style={{
          y: imageY,
          rotate: imageRotate,
          scale: imageScale,
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
      >
        <Image
          src={imagePath}
          alt={altText}
          fill
          className="object-contain filter grayscale opacity-70 hover:opacity-90 transition-opacity duration-300"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
        />
      </motion.div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-1/4 top-1/4 w-2 h-2 bg-white rounded-full opacity-30"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        className="absolute right-1/3 bottom-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-20"
      />
    </section>
  );
};