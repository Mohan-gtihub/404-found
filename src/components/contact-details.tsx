'use client';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 81219 88257',
        href: 'tel:+918121988257',
        description: 'Mon-Sat, 9AM-7PM IST',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'kilarimohansai@gmail.com',
        href: 'mailto:kilarimohansai@gmail.com',
        description: 'We reply within 24 hours',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'India',
        href: '#',
        description: 'Serving clients worldwide',
        color: 'from-purple-500 to-pink-500',
    },
];

export default function ContactDetails() {
    return (
        <section className="relative w-full bg-gradient-to-b from-background to-secondary/30 py-16 sm:py-20 overflow-hidden">
            {/* Animated 3D background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 animate-pulse">
                        <Send className="inline-block mr-2 h-3 w-3" />
                        Get In Touch
                    </Badge>
                    <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-blue-500">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Ready to bring your ideas to life? Reach out to us through any of these channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border-border bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* 3D border effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <CardContent className="relative p-6 text-center space-y-4">
                                    {/* Icon with 3D effect */}
                                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 blur-xl transition-opacity`}></div>
                                        <Icon className="h-8 w-8 text-primary group-hover:text-blue-500 transition-colors relative z-10" />
                                    </div>

                                    {/* Label */}
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-2">
                                            {item.label}
                                        </p>
                                        <Link
                                            href={item.href}
                                            className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors break-all"
                                        >
                                            {item.value}
                                        </Link>
                                        <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-primary to-blue-500"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Call to action */}
                <div className="mt-12 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-primary/20">
                        <p className="text-lg font-medium text-foreground mb-2">
                            Prefer to chat directly?
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                            We're available for a quick call or video meeting to discuss your project
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="tel:+918121988257"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                <Phone className="h-4 w-4" />
                                Call Now
                            </Link>
                            <Link
                                href="mailto:kilarimohansai@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                <Mail className="h-4 w-4" />
                                Send Email
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
