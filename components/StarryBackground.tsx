import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  flickerSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  trailLength: number;
  active: boolean;
}

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Configuration
  const STAR_COUNT = 300; // Number of static twinkling stars
  const SHOOTING_STAR_FREQUENCY = 0.005; // Chance per frame to spawn a shooting star
  
  useEffect(() => {
    // Handle resize
    const handleResize = () => {
      if (window.innerWidth && window.innerHeight) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    // Initialize Static Stars
    const initStars = (width: number, height: number) => {
      const newStars: Star[] = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5, // Random size between 0.5 and 2
          alpha: Math.random(), // Initial opacity
          targetAlpha: Math.random(), // Target opacity for twinkling
          flickerSpeed: Math.random() * 0.02 + 0.005, // Speed of twinkle
        });
      }
      return newStars;
    };

    // Create a new shooting star
    const createShootingStar = (width: number, height: number): ShootingStar => {
      // Start from top or left side
      const startSide = Math.random() < 0.5 ? 'top' : 'left';
      let x, y;
      
      if (startSide === 'top') {
        x = Math.random() * width;
        y = -10;
      } else {
        x = -10;
        y = Math.random() * (height / 2); // Mostly top half
      }

      // Angle usually goes down-right
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 degrees with variance
      
      return {
        x,
        y,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 15, // Fast speed
        angle,
        opacity: 1,
        trailLength: 20,
        active: true,
      };
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      stars = initStars(dimensions.width, dimensions.height);
    }

    const render = () => {
      if (!ctx || dimensions.width === 0) return;

      // Clear Canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // --- Draw Static Stars ---
      ctx.fillStyle = '#FFFFFF';
      stars.forEach((star) => {
        // Twinkle logic
        if (Math.abs(star.alpha - star.targetAlpha) < 0.01) {
            star.targetAlpha = Math.random(); // Pick new target
        } else {
            const diff = star.targetAlpha - star.alpha;
            star.alpha += diff * star.flickerSpeed;
        }

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Handle Shooting Stars ---
      
      // Randomly spawn shooting star
      if (Math.random() < SHOOTING_STAR_FREQUENCY) {
        shootingStars.push(createShootingStar(dimensions.width, dimensions.height));
      }

      // Update and Draw Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];

        // Move
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Check bounds (remove if off screen)
        if (s.x > dimensions.width + s.length || s.y > dimensions.height + s.length) {
            s.active = false;
        }

        // Fade out slightly as it travels
        s.opacity -= 0.01;
        if (s.opacity <= 0) s.active = false;

        if (s.active) {
            const endX = s.x - Math.cos(s.angle) * s.length;
            const endY = s.y - Math.sin(s.angle) * s.length;

            // Draw Trail
            const gradient = ctx.createLinearGradient(s.x, s.y, endX, endY);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`); // Head is bright
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Tail fades out

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // Optional: Draw a glowing head
            ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            shootingStars.splice(i, 1);
        }
      }

      // Reset global alpha for next frame
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-slate-900 via-[#0B0F19] to-black">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
};

export default StarryBackground;