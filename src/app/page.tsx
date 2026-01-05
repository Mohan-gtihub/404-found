import Contact from '@/components/contact';
import ContactDetails from '@/components/contact-details';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <WhyChooseUs />
        <ContactDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
