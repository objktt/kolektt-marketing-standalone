"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { CowModel } from './cow-model';

export const Ecosystem3DBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{ 
          background: 'transparent',
          pointerEvents: 'none' // 마우스 상호작용 비활성화
        }}
      >
        <Suspense fallback={null}>
          {/* 조명 설정 */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          {/* 3D 모델 */}
          <CowModel />
          
          {/* 환경광 */}
          <Environment preset="studio" />
          
          {/* 자동 카메라 컨트롤 (비활성화) */}
          {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};