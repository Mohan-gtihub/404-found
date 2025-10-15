'use client';
import React, { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPoints(prevPoints => [...prevPoints, { x: e.clientX, y: e.clientY }].slice(-20));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const animationFrame = requestAnimationFrame(function animate() {
      setPoints(prevPoints => {
        if (prevPoints.length === 0) return [];
        const newPoints = [...prevPoints];
        newPoints.shift();
        return newPoints;
      });
      requestAnimationFrame(animate);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {points.map((point, index) => {
        const scale = isHovering ? 1.5 : 1;
        const size = (index / points.length) * (isHovering ? 24 : 12);
        return (
          <div
            key={index}
            className="absolute rounded-full bg-primary/50"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: index / points.length,
              transition: 'transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
