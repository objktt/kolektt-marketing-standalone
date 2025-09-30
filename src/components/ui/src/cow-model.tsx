"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer, LoopRepeat } from 'three';
import * as THREE from 'three';

export const CowModel = () => {
  const meshRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const [gltf, setGltf] = useState<any>(null);
  
  // GLB 파일 로드
  useEffect(() => {
    const loader = new GLTFLoader();
    
    loader.load(
      '/3d/cow_idle.glb',
      (loadedGltf) => {
        console.log('GLB loaded successfully:', loadedGltf);
        setGltf(loadedGltf);
      },
      (progress) => {
        console.log('Loading progress:', progress);
      },
      (error) => {
        console.error('Error loading GLB:', error);
        // 에러 시 대체 박스 표시
        setGltf('error');
      }
    );
  }, []);
  
  useEffect(() => {
    if (gltf && gltf !== 'error' && gltf.animations && gltf.animations.length > 0) {
      mixerRef.current = new AnimationMixer(gltf.scene);
      const action = mixerRef.current.clipAction(gltf.animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    }
    
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    
    // 회전 제거 - 이제 객체가 회전하지 않음
  });

  // 로딩 중이거나 에러 시 대체 박스 표시
  if (!gltf || gltf === 'error') {
    return (
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" wireframe={true} />
      </mesh>
    );
  }

  return (
    <group ref={meshRef}>
      <primitive 
        object={gltf.scene} 
        scale={[1.5, 1.5, 1.5]} 
        position={[0, 4, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
    </group>
  );
};
