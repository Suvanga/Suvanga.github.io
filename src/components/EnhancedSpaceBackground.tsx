import { useEffect, useRef } from 'react';

export function EnhancedSpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      baseOpacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2.5;
        this.baseOpacity = Math.random() * 0.5 + 0.3;
        this.opacity = this.baseOpacity;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.opacity += this.twinkleSpeed;
        if (this.opacity >= this.baseOpacity + 0.5 || this.opacity <= this.baseOpacity - 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Add glow effect for brighter stars
        if (this.radius > 1.5) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
          gradient.addColorStop(0.2, `rgba(200, 220, 255, ${this.opacity * 0.7})`);
          gradient.addColorStop(0.5, `rgba(150, 180, 255, ${this.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        }
        ctx.fill();
      }
    }

    // Distant galaxy clusters (small dots)
    class DistantGalaxy {
      x: number;
      y: number;
      size: number;
      color: string;
      pulseSpeed: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `${this.color}${Math.floor(pulse * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create stars and distant galaxies
    const stars: Star[] = [];
    for (let i = 0; i < 400; i++) {
      stars.push(new Star());
    }

    const distantGalaxies: DistantGalaxy[] = [];
    for (let i = 0; i < 50; i++) {
      distantGalaxies.push(new DistantGalaxy());
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      // Dark space background with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0a0a1e');
      bgGradient.addColorStop(0.3, '#1a0a2e');
      bgGradient.addColorStop(0.6, '#16082b');
      bgGradient.addColorStop(1, '#0a0a1e');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw distant galaxies first (background layer)
      distantGalaxies.forEach(galaxy => {
        galaxy.update();
        galaxy.draw();
      });

      // Draw stars on top
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}
