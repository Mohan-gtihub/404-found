'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const testimonials = [
    {
        name: 'Dr. Vaishnav',
        role: 'Founder & Medical Director',
        company: 'Aarunya Healthcare',
        website: 'aarunyahealthcare.com',
        image: '/testimonials/aarunya.jpg',
        rating: 5,
        text: 'FUTURONTECH transformed our digital presence completely. Their team built a stunning, user-friendly website that perfectly represents our healthcare services. The attention to detail and professional approach exceeded our expectations. Highly recommended!',
        color: 'from-emerald-500 to-teal-500',
    },
    {
        name: 'Raghu',
        role: 'Founder & CEO',
        company: 'Intoobox',
        website: 'intoobox.com',
        image: '/testimonials/intoobox.jpg',
        rating: 5,
        text: 'Working with FUTURONTECH was an absolute pleasure. They delivered our e-commerce platform with advanced attribute logic ahead of schedule with exceptional quality. The custom product selection system works flawlessly and our customers love it!',
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'Rohan',
        role: 'Founder',
        company: 'Saanvishika',
        website: 'saanvishika.co',
        image: '/testimonials/saanvishika.jpg',
        rating: 5,
        text: 'FUTURONTECH created a beautiful and functional website for our brand. Their creative approach and technical expertise brought our vision to life. The website is fast, responsive, and exactly what we needed to grow our business online.',
        color: 'from-blue-500 to-indigo-500',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative w-full bg-gradient-to-b from-background via-background to-secondary/20 py-16 sm:py-24 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1">
                        Client Success Stories
                    </Badge>
                    <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what our clients have to say about working with FUTURONTECH.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-border bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            {/* 3D effect border */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <CardContent className="relative p-6 space-y-4">
                                {/* Quote icon */}
                                <div className="flex justify-between items-start">
                                    <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors" />
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                                                style={{ animationDelay: `${i * 100}ms` }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial text */}
                                <p className="text-sm text-foreground/80 leading-relaxed min-h-[120px]">
                                    "{testimonial.text}"
                                </p>

                                {/* Client info */}
                                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-primary to-blue-500 text-white font-semibold">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                        <a
                                            href={`https://${testimonial.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-primary hover:underline font-medium"
                                        >
                                            {testimonial.website}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">50+</p>
                            <p className="text-sm text-muted-foreground">Happy Clients</p>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">100+</p>
                            <p className="text-sm text-muted-foreground">Projects Delivered</p>
                        </div>
                        <div className="h-12 w-px bg-border"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">5★</p>
                            <p className="text-sm text-muted-foreground">Average Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
