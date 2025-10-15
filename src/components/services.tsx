import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AppWindow, Cpu, Puzzle, Server, Smartphone } from 'lucide-react';

const webServices = [
  { icon: AppWindow, title: 'Business Websites' },
  { icon: Server, title: 'E-commerce Stores' },
  { icon: AppWindow, title: 'Portfolio Websites' },
  { icon: Puzzle, title: 'Custom Web Applications' },
];

const iotServices = [
  { icon: Cpu, title: 'Home Automation' },
  { icon: Smartphone, title: 'Mobile-Controlled Systems' },
  { icon: Server, title: 'IoT Projects' },
  { icon: Puzzle, title: 'Custom Automation Solutions' },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-secondary py-16 sm:py-24">
      <div className="container space-y-16 px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Web Development Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build modern, responsive, and interactive websites tailored for your brand
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {webServices.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-border bg-background transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="items-center text-center p-8">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-sans text-xl">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto max-w-2xl text-center pt-12">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            IoT & Home Automation Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bring smart technology to your fingertips
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {iotServices.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-border bg-background transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="items-center text-center p-8">
                 <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-sans text-xl">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
