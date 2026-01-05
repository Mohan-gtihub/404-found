'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AppWindow, Cpu, Puzzle, Server, Smartphone, Code2, ShoppingCart, Lightbulb, Wifi } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const webServices = [
  {
    icon: AppWindow,
    title: 'Business Websites',
    description: 'Professional corporate websites that establish your brand',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description: 'Full-featured online stores with payment integration',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Portfolio Websites',
    description: 'Stunning portfolios that showcase your work',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Puzzle,
    title: 'Custom Web Apps',
    description: 'Tailored web applications for unique business needs',
    color: 'from-orange-500 to-red-500',
  },
];

const iotServices = [
  {
    icon: Cpu,
    title: 'Home Automation',
    description: 'Smart home systems for modern living',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Control',
    description: 'Control everything from your smartphone',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Wifi,
    title: 'IoT Projects',
    description: 'Connected devices and smart solutions',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Lightbulb,
    title: 'Custom Automation',
    description: 'Bespoke automation solutions for any need',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-secondary/30 via-background to-secondary/30 py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 space-y-20 px-4 md:px-6">
        {/* Web Development Section */}
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1">
              <Code2 className="inline-block mr-2 h-3 w-3" />
              Web Development
            </Badge>
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-blue-500">
                Web Development Services
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We build modern, responsive, and interactive websites tailored for your brand
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {webServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* 3D border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative items-center text-center p-6 space-y-4">
                    {/* Icon with 3D effect */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                      <div className="relative rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 p-4 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-8 w-8 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${service.color}`}></div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* IoT Section */}
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1">
              <Cpu className="inline-block mr-2 h-3 w-3" />
              IoT & Automation
            </Badge>
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-blue-500 to-cyan-500">
                IoT & Home Automation
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bring smart technology to your fingertips with cutting-edge IoT solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {iotServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* 3D border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative items-center text-center p-6 space-y-4">
                    {/* Icon with 3D effect */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                      <div className="relative rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 p-4 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-8 w-8 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${service.color}`}></div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
