"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { CowModel } from './cow-model';

interface Page3DBackgroundProps {
  objects?: Array<{
    id: string;
    component: React.ComponentType;
    position: [number, number, number];
    scale?: [number, number, number];
    rotation?: [number, number, number];
    opacity?: number;
  }>;
}

export const Page3DBackground = ({ objects = [] }: Page3DBackgroundProps) => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ 
        background: 'transparent',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Canvas
        camera={{ position: [0, 5, 25], fov: 50 }}
        style={{ 
          background: 'transparent',
        }}
      >
        {/* 조명 설정 */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {/* 환경광 */}
        <Environment preset="studio" />
        
        {/* 동적 3D 객체들 */}
        {objects.map((obj, index) => {
          const Component = obj.component;
          return (
            <group
              key={obj.id}
              position={obj.position}
              scale={obj.scale || [1, 1, 1]}
              rotation={obj.rotation || [0, 0, 0]}
            >
              <Component />
            </group>
          );
        })}
      </Canvas>
    </div>
  );
};