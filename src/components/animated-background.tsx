'use client';

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large gradient orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Floating particles */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`,
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
            {[...Array(15)].map((_, i) => (
                <div
                    key={`dot-${i}`}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                    style={{
                        left: `${10 + (i * 6)}%`,
                        top: `${20 + Math.sin(i) * 30}%`,
                        animationDelay: `${i * 0.3}s`,
                        opacity: 0.3 + Math.random() * 0.3,
                    }}
                ></div>
            ))}

            {/* Rotating rings */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/5 rounded-full animate-spin-very-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-cyan-500/5 rounded-full animate-spin-very-slow" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
        </div>
    );
}
