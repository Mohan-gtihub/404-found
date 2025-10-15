import Link from 'next/link';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '../ui/button';

const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Github, label: 'Github' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 px-4 md:h-24 md:flex-row md:py-0 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {year} 404 Found. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button variant="ghost" size="icon" asChild key={label}>
              <Link href={href} target="_blank">
                <Icon className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                <span className="sr-only">{label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
