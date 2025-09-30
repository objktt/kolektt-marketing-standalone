'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  initialY: number;
  speed: number;
  id: number;
  shape: 'circle' | 'square';
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const scrollRef = useRef(0);

  // 블루 톤 색상 배열
  const blueColors = [
    'rgba(59, 130, 246, 0.4)',   // blue-500
    'rgba(37, 99, 235, 0.4)',    // blue-600
    'rgba(29, 78, 216, 0.4)',    // blue-700
    'rgba(30, 64, 175, 0.4)',    // blue-800
    'rgba(30, 58, 138, 0.4)',    // blue-900
  ];

  // 파티클 초기화
  const initializeParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // 화면 크기에 따른 파티클 수 조절

    for (let i = 0; i < particleCount; i++) {
      const particle: Particle = {
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 12 + 3, // 3-15px로 더 큰 크기 차이
        initialY: Math.random() * canvas.height,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        color: blueColors[Math.floor(Math.random() * blueColors.length)],
        shape: Math.random() < 0.5 ? 'circle' : 'square',
      };
      particles.push(particle);
    }

    particlesRef.current = particles;
  };

  // 파티클 그리기 및 애니메이션
  const drawParticles = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      // 기본 애니메이션 (부드러운 움직임)
      particle.x += particle.vx * 0.1;
      particle.y += particle.vy * 0.1;
      
      // 미묘한 흔들림 효과
      particle.x += Math.sin(Date.now() * 0.001 + particle.id) * 0.2;
      particle.y += Math.cos(Date.now() * 0.001 + particle.id) * 0.1;

      // 화면 경계 처리
      if (particle.x > canvas.width + particle.size) {
        particle.x = -particle.size;
      } else if (particle.x < -particle.size) {
        particle.x = canvas.width + particle.size;
      }
      if (particle.y > canvas.height + particle.size) {
        particle.y = -particle.size;
      } else if (particle.y < -particle.size) {
        particle.y = canvas.height + particle.size;
      }

      // 스크롤에 따른 시차 효과 (더 부드럽게)
      const scrollEffect = scrollRef.current * particle.speed * 0.1;
      const adjustedY = particle.y + scrollEffect;
      
      // 투명도는 고정값 사용 (스크롤에 따른 변화 제거)
      const dynamicOpacity = particle.opacity;

      // 파티클 그리기 (블러 효과 제거)
      ctx.save();
      ctx.globalAlpha = dynamicOpacity;
      ctx.fillStyle = particle.color;
      
      if (particle.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(particle.x, adjustedY, particle.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // 사각형
        ctx.fillRect(
          particle.x - particle.size, 
          adjustedY - particle.size, 
          particle.size * 2, 
          particle.size * 2
        );
      }
      ctx.restore();
    });
  };

  // 애니메이션 루프
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawParticles(canvas, ctx);
    animationRef.current = requestAnimationFrame(animate);
  };

  // 캔버스 리사이즈
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeParticles(canvas);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    scrollRef.current = window.scrollY;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 초기 설정
    resizeCanvas();
    animate();

    // 이벤트 리스너 등록
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // 클리너 함수
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleBackground;