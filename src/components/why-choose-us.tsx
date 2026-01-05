'use client';

import { CheckCircle, Award, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Award,
    title: 'Professional Design & Modern UI/UX',
    description: 'Cutting-edge designs that captivate and convert',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'End-to-End Solutions',
    description: 'Web + IoT + Automation - Complete digital transformation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Interactive, Futuristic Experiences',
    description: 'Websites that wow and engage your audience',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Custom Tailored Solutions',
    description: 'Perfectly crafted for your brand and business needs',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Reliable Support & Maintenance',
    description: '24/7 support to keep your systems running smoothly',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: '100+ successful projects delivered with excellence',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative w-full bg-gradient-to-b from-background via-secondary/20 to-background py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 animate-pulse">
            <Award className="inline-block mr-2 h-3 w-3" />
            Why Choose Us
          </Badge>
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-blue-500">
              Why Partner with FUTURONTECH?
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine cutting-edge technology with creative expertise to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* 3D border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative p-6 space-y-4">
                  {/* Icon with 3D effect */}
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                      <div className="relative rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 p-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="h-6 w-6 text-primary group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Checkmark indicator */}
                  <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
            { value: '100+', label: 'Projects Done', color: 'from-purple-500 to-pink-500' },
            { value: '5★', label: 'Client Rating', color: 'from-yellow-500 to-orange-500' },
            { value: '24/7', label: 'Support', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative inline-block">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                <p className={`relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
