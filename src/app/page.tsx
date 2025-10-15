import Contact from '@/components/contact';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
