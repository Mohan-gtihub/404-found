import { CheckCircle } from 'lucide-react';

const features = [
  'Professional design & modern UI/UX',
  'End-to-end solutions: Web + IoT + Automation',
  'Interactive, futuristic website experiences',
  'Custom tailored solutions for brands and businesses',
  'Reliable support & maintenance',
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-background py-16 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine technology and expertise to build solutions that drive results.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-secondary/50">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
