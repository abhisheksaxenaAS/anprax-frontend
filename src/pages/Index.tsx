import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Team from '@/components/Teams';
import Careers from '@/components/Careers';
import ServicesSection from '@/components/ServicesSection';





const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "AnPrax - Professional Digital Marketing & IT Solutions";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with AnPrax\'s comprehensive digital marketing services and IT solutions. Expert web development, mobile apps, SEO, and cloud services.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <ServicesSection />
        <Services />
        <Team />
        <Careers />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
