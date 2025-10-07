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
import { Helmet } from "react-helmet-async"



const Index = () => {


  return (
    <>
      <Helmet>
        <title>AnPrax – Custom Software Development & IT Solutions</title>
        <meta
          name="description"
          content="Transform your business with AnPrax's expert software development, IT outsourcing, ERP/CRM, and creative branding solutions."
        />
        <meta
          name="keywords"
          content="AnPrax, software development, IT outsourcing, ERP, CRM, web design, branding, digital solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://official.anprax.com/" />
        <link rel="icon" href="/favicon96.png" type="image/png" />

        {/* Open Graph */}
        <meta property="og:title" content="AnPrax – Custom Software Development & IT Solutions" />
        <meta property="og:description" content="Transform your business with AnPrax's expert software development and IT solutions." />
        <meta property="og:url" content="https://official.anprax.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://official.anprax.com/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AnPrax – Custom Software Development & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with AnPrax's expert IT and software solutions." />
        <meta name="twitter:image" content="https://official.anprax.com/preview.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AnPrax Technologies",
            "url": "https://official.anprax.com",
            "logo": "https://official.anprax.com/favicon96.png",
            "sameAs": [
              "https://www.linkedin.com/company/anprax",
              "https://www.instagram.com/anprax",
              "https://www.facebook.com/anprax"
            ],
            "description": "AnPrax offers software development, IT outsourcing, ERP/CRM, and branding solutions for businesses worldwide."
          })}
        </script>
      </Helmet>


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
    </>

  );
};

export default Index;
