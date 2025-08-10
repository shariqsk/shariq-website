"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  targetX: number;
  targetY: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with smoother movement
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          life: Math.random() * 200 + 100,
          maxLife: 200,
          targetX: x + (Math.random() - 0.5) * 100,
          targetY: y + (Math.random() - 0.5) * 100
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Smooth movement towards target with easing
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        
        particle.vx += dx * 0.001;
        particle.vy += dy * 0.001;
        
        // Apply friction for smoother movement
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Update target when close or when life is low
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10 || particle.life < 50) {
          particle.targetX = Math.random() * canvas.width;
          particle.targetY = Math.random() * canvas.height;
        }

        // Reset particle if it's off screen or dead
        if (particle.life <= 0 || 
            particle.x < -50 || particle.x > canvas.width + 50 || 
            particle.y < -50 || particle.y > canvas.height + 50) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.width,
            y: canvas.height + 50,
            vx: (Math.random() - 0.5) * 0.2,
            vy: -Math.random() * 0.5 - 0.2,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
            life: Math.random() * 200 + 150,
            maxLife: 200,
            targetX: Math.random() * canvas.width,
            targetY: Math.random() * canvas.height
          };
        }

        // Draw particle with smooth opacity
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(220, 38, 38, ${alpha})`);
        gradient.addColorStop(1, `rgba(220, 38, 38, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
