import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-foreground">
              Professional Web Development
            </span>
            <span className="block">& Smart IoT Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Cutting-edge websites, E-commerce stores, portfolios, and home
            automation systems
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#contact">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="#portfolio">Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
