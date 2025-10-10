import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// ✅ Lazy-load non-critical sections
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const About = lazy(() => import("@/components/About"));
const CurrentOpenings = lazy(() => import("@/components/CurrentOpenings"));
const Services = lazy(() => import("@/components/Services"));
const Team = lazy(() => import("@/components/Teams"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Careers = lazy(() => import("@/components/Careers"));
const Contact = lazy(() => import("@/components/Contact"));

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
        <link rel="icon" href="/favicon96.webp" type="webp" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="AnPrax – Custom Software Development & IT Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with AnPrax's expert software development and IT solutions."
        />
        <meta property="og:url" content="https://official.anprax.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://official.anprax.com/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AnPrax – Custom Software Development & IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Transform your business with AnPrax's expert IT and software solutions."
        />
        <meta name="twitter:image" content="https://official.anprax.com/preview.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AnPrax Technologies",
            "url": "https://official.anprax.com",
            "logo": "https://official.anprax.com/favicon96.webp",
            "sameAs": [
              "https://www.linkedin.com/company/anprax",
              "https://www.instagram.com/anprax",
              "https://www.facebook.com/anprax"
            ],
            "description":
              "AnPrax offers software development, IT outsourcing, ERP/CRM, and branding solutions for businesses worldwide.",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />

          {/* Lazy-loaded sections with fallback */}
          <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
            <ClientLogos />
            <About />
            <CurrentOpenings />
            <Services />
            <Team />
            <Portfolio />
            <Testimonials />
            <Careers />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
