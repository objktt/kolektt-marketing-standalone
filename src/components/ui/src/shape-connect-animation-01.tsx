"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const ShapeConnectAnimation01 = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  
  // 스크롤 진행도에 따라 도형들의 위치를 변환
  const circleX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const squareX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  
  const [circleAnimationData, setCircleAnimationData] = React.useState(null);
  const [squareAnimationData, setSquareAnimationData] = React.useState(null);

  React.useEffect(() => {
    // 원형 - 지구본 (Americas)
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1f30e/lottie.json')
      .then(response => response.json())
      .then(data => setCircleAnimationData(data))
      .catch(error => console.error('Error loading circle Lottie animation:', error));
    
    // 사각형 - 혜성
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/lottie.json')
      .then(response => response.json())
      .then(data => setSquareAnimationData(data))
      .catch(error => console.error('Error loading square Lottie animation:', error));
  }, []);
  
  return (
    <section ref={ref} className="relative bg-black py-20 lg:py-32 overflow-hidden -mt-[150px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-64 relative">
          
          {/* 원형 - 로티 애니메이션으로 변경 */}
          <motion.div
            style={{ 
              x: circleX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 overflow-hidden rounded-full">
              {circleAnimationData && (
                <Lottie 
                  animationData={circleAnimationData}
                  loop={true}
                  style={{ width: '102%', height: '102%', marginLeft: '-1%', marginTop: '-1%' }}
                />
              )}
            </div>
          </motion.div>

          {/* 사각형 - 로티 애니메이션으로 변경 */}
          <motion.div
            style={{ 
              x: squareX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              {squareAnimationData && (
                <Lottie 
                  animationData={squareAnimationData}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </motion.div>

        </div>

        {/* 하단 텍스트 */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">We approach the world</p>
        </div>

      </div>
    </section>
  );
};
