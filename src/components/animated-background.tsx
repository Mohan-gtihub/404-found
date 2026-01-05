'use client';

import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Fixed positions to avoid hydration mismatch
    const particles = [
        { left: 15, top: 25, delay: 0.5, duration: 8 },
        { left: 85, top: 15, delay: 1.2, duration: 10 },
        { left: 45, top: 75, delay: 2.1, duration: 7 },
        { left: 70, top: 40, delay: 0.8, duration: 9 },
        { left: 25, top: 60, delay: 1.5, duration: 11 },
        { left: 90, top: 80, delay: 2.5, duration: 6 },
        { left: 10, top: 50, delay: 1.8, duration: 12 },
        { left: 55, top: 20, delay: 0.3, duration: 8 },
        { left: 35, top: 85, delay: 2.8, duration: 10 },
        { left: 75, top: 10, delay: 1.1, duration: 9 },
        { left: 20, top: 35, delay: 0.6, duration: 7 },
        { left: 95, top: 55, delay: 2.2, duration: 11 },
        { left: 40, top: 45, delay: 1.4, duration: 8 },
        { left: 65, top: 70, delay: 0.9, duration: 10 },
        { left: 30, top: 15, delay: 2.6, duration: 9 },
        { left: 80, top: 90, delay: 1.7, duration: 7 },
        { left: 50, top: 30, delay: 0.4, duration: 12 },
        { left: 12, top: 65, delay: 2.3, duration: 8 },
        { left: 88, top: 25, delay: 1.3, duration: 10 },
        { left: 42, top: 80, delay: 0.7, duration: 9 },
        { left: 68, top: 50, delay: 2.4, duration: 11 },
        { left: 22, top: 40, delay: 1.6, duration: 7 },
        { left: 92, top: 60, delay: 0.2, duration: 8 },
        { left: 38, top: 20, delay: 2.7, duration: 10 },
        { left: 72, top: 75, delay: 1.9, duration: 9 },
        { left: 28, top: 55, delay: 0.5, duration: 12 },
        { left: 82, top: 35, delay: 2.1, duration: 8 },
        { left: 48, top: 70, delay: 1.2, duration: 10 },
        { left: 18, top: 45, delay: 0.8, duration: 7 },
        { left: 78, top: 85, delay: 2.9, duration: 11 },
    ];

    const dots = [
        { left: 10, top: 20, delay: 0, opacity: 0.4 },
        { left: 16, top: 45, delay: 0.3, opacity: 0.5 },
        { left: 22, top: 47, delay: 0.6, opacity: 0.45 },
        { left: 28, top: 24, delay: 0.9, opacity: 0.35 },
        { left: 34, top: -3, delay: 1.2, opacity: 0.4 },
        { left: 40, top: -9, delay: 1.5, opacity: 0.5 },
        { left: 46, top: 12, delay: 1.8, opacity: 0.45 },
        { left: 52, top: 40, delay: 2.1, opacity: 0.55 },
        { left: 58, top: 50, delay: 2.4, opacity: 0.4 },
        { left: 64, top: 32, delay: 2.7, opacity: 0.5 },
        { left: 70, top: 4, delay: 3, opacity: 0.45 },
        { left: 76, top: -10, delay: 3.3, opacity: 0.35 },
        { left: 82, top: 4, delay: 3.6, opacity: 0.5 },
        { left: 88, top: 33, delay: 3.9, opacity: 0.4 },
        { left: 94, top: 50, delay: 4.2, opacity: 0.45 },
    ];

    if (!mounted) {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Static background for SSR */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large gradient orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Floating particles */}
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                    }}
                ></div>
            ))}

            {/* Animated geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/10 rounded-lg animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-cyan-500/10 rounded-full animate-spin-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/3 left-1/3 w-20 h-20 border-2 border-purple-500/10 rotate-45 animate-spin-slow" style={{ animationDelay: '2s' }}></div>

            {/* Moving gradient lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-right"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-slide-left"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-slide-down"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-slide-up"></div>

            {/* Glowing dots */}
            {dots.map((dot, i) => (
                <div
                    key={`dot-${i}`}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                    style={{
                        left: `${dot.left}%`,
                        top: `${dot.top}%`,
                        animationDelay: `${dot.delay}s`,
                        opacity: dot.opacity,
                    }}
                ></div>
            ))}

            {/* Rotating rings */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/5 rounded-full animate-spin-very-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-cyan-500/5 rounded-full animate-spin-very-slow" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
        </div>
    );
}
