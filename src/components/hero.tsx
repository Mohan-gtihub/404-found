import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import AnimatedBackground from '@/components/animated-background';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center bg-background overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Welcome to the Future of Technology</span>
          </div>

          {/* Main heading with 3D effect */}
          <h1 className="font-sans text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 animate-fade-in-up">
            <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-cyan-400 drop-shadow-2xl">
              FUTURONTECH
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
              Building Tomorrow's Digital Solutions
            </span>
          </h1>

          {/* Subtitle with icons */}
          <div className="mx-auto mt-8 max-w-3xl space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Cutting-edge <span className="text-primary font-semibold">Web Development</span>,
              E-commerce Solutions, and <span className="text-blue-500 font-semibold">Smart IoT Systems</span>
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105">
                <Rocket className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Future-Ready</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-blue-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-base px-8 py-6"
            >
              <Link href="#contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-base px-8 py-6"
            >
              <Link href="#portfolio">
                View Our Work
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group cursor-default">
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 group-hover:scale-110 transition-transform inline-block">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center group cursor-default">
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform inline-block">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center group cursor-default">
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:scale-110 transition-transform inline-block">5★</p>
              <p className="text-sm text-muted-foreground mt-1">Client Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
