import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const portfolioItems = [
  {
    website: 'KapdaTailor.com',
    category: 'Fashion Ecommerce',
    description: 'Tailor fashion ecommerce platform',
    url: 'https://kapdatailor.com',
  },
  {
    website: 'IndySutra.com',
    category: 'Ethnic Fashion Store',
    description: 'Interactive ethnic fashion store',
    url: 'https://indysutra.com',
  },
  {
    website: 'PowerSutra.com',
    category: 'Women Fashion Brand',
    description: 'Trendy women fashion ecommerce',
    url: 'https://powersutra.com',
  },
  {
    website: 'LitlMeU.com',
    category: 'Baby Fashion Ecommerce',
    description: 'Cute, responsive ecommerce site',
    url: 'https://litlmeu.com',
  },
  {
    website: 'UDDStudio.com',
    category: 'Fashion Studio Portfolio',
    description: 'Portfolio website for fashion studio',
    url: 'https://uddstudio.com',
  },
  {
    website: 'Intoobox.com',
    category: 'Ecommerce + Attribute Logic',
    description: 'Advanced product selection logic',
    url: 'https://intoobox.com',
  },
  {
    website: 'ReyaRosette.in',
    category: 'Fashion / Shoe Ecommerce',
    description: 'High-end ecommerce experience',
    url: 'https://reyarosette.in',
  },
  {
    website: 'Glokal by Zingo',
    category: 'Hospitality Corporate',
    description: 'Hospitality corporate website',
    url: 'https://glokalbyzingo.com', 
  },
  {
    website: 'Hydroprenuers',
    category: 'Custom Website',
    description: 'Tailored website with unique design',
    url: 'https://hydroprenuers.com',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-background py-16 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Our Work – Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projects we’ve delivered for startups, brands, and corporate
            clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.website} className="group flex flex-col justify-between overflow-hidden transition-all duration-300 bg-secondary border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
              <Link href="#">
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <CardTitle className="font-sans text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.website}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground pt-2">{item.description}</CardDescription>
                </CardHeader>
              </Link>
              <CardFooter className='flex justify-between items-center'>
                  <Badge variant="outline" className="border-primary/50 text-primary">{item.category}</Badge>
                  <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
