'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const portfolioItems = [
  {
    website: 'AarunyaHealthcare.com',
    category: 'Healthcare Website',
    description: 'Professional healthcare services platform',
    url: 'https://aarunyahealthcare.com',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    website: 'KapdaTailor.com',
    category: 'Fashion Ecommerce',
    description: 'Tailor fashion ecommerce platform',
    url: 'https://kapdatailor.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    website: 'IndySutra.com',
    category: 'Ethnic Fashion Store',
    description: 'Interactive ethnic fashion store',
    url: 'https://indysutra.com',
    color: 'from-orange-500 to-red-500',
  },
  {
    website: 'PowerSutra.com',
    category: 'Women Fashion Brand',
    description: 'Trendy women fashion ecommerce',
    url: 'https://powersutra.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    website: 'LitlMeU.com',
    category: 'Baby Fashion Ecommerce',
    description: 'Cute, responsive ecommerce site',
    url: 'https://litlmeu.com',
    color: 'from-pink-500 to-rose-500',
  },
  {
    website: 'UDDStudio.com',
    category: 'Fashion Studio Portfolio',
    description: 'Portfolio website for fashion studio',
    url: 'https://uddstudio.com',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    website: 'Intoobox.com',
    category: 'Ecommerce + Attribute Logic',
    description: 'Advanced product selection logic',
    url: 'https://intoobox.com',
    color: 'from-green-500 to-emerald-500',
  },
  {
    website: 'Glokal by Zingo',
    category: 'Hospitality Corporate',
    description: 'Hospitality corporate website',
    url: 'https://glokalbyzingo.com',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    website: 'Hydroprenuers',
    category: 'Custom Website',
    description: 'Tailored website with unique design',
    url: 'https://hydroprenuers.com',
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-gradient-to-b from-secondary/30 via-background to-background py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 animate-pulse">
            <Globe className="inline-block mr-2 h-3 w-3" />
            Our Portfolio
          </Badge>
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-cyan-500">
              Projects We've Delivered
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Successful projects for startups, brands, and corporate clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.website}
              className="group relative flex flex-col justify-between overflow-hidden transition-all duration-500 bg-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* 3D border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>

              <Link href={item.url} target="_blank" rel="noopener noreferrer" className="relative flex-grow p-6">
                <CardHeader className="p-0 space-y-4">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="h-5 w-5 text-primary group-hover:text-blue-500 transition-colors" />
                    </div>
                    <Badge variant="outline" className={`border-primary/50 text-xs bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}>
                      {item.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="font-sans text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.website}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Link>

              <CardFooter className="relative flex justify-between items-center p-6 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <Globe className="h-4 w-4" />
                  <span>Live Site</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary hover:bg-primary/10"
                >
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    View <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20">
            <p className="text-xl font-semibold text-foreground mb-2">
              Ready to start your project?
            </p>
            <p className="text-muted-foreground mb-6">
              Let's build something amazing together
            </p>
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-primary via-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
