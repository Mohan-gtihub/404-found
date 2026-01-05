import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Poppins as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'FUTURONTECH | Web & IoT Solutions',
  description: 'Innovative web development and smart IoT solutions for modern businesses and homes. FUTURONTECH builds the future, one line of code at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
