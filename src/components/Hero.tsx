import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleScrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SEO-friendly content that's always available (not dependent on JS)
  const heroContent = {
    title: "Building Brands and Boosting Businesses",
    subtitle: "Your 360° Digital Marketing Services and IT Outsourcing Partner",
    description: "Ready to conquer the market? Let's do it with our best digital marketing services and cutting-edge technology solutions!"
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Overlay - Optimized for SEO */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional tech team working on digital marketing and IT solutions"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 mt-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
      </div>

      {/* Content - Structured for SEO */}
      <div className="relative z-10 container-custom text-center text-white">
        {/* Main semantic structure - H1 should be the first heading */}
        <header className="mb-8">
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
          >
            Building Brands and{' '}
            <span className="text-gradient">Boosting Businesses</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-4xl mx-auto">
            Your 360° Digital Marketing Services and IT Outsourcing Partner
          </p>

          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
            Ready to conquer the market? Let's do it with our best digital marketing services and cutting-edge technology solutions!
          </p>
        </header>

        {/* Animated wrapper for buttons - keeps SEO content accessible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 138, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToServices}
            className="btn-primary flex items-center gap-2 text-lg animate-glow"
            aria-label="View our digital marketing and IT services"
          >
            View Our Services
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToContact}
            className="btn-secondary flex items-center gap-2 text-lg"
            aria-label="Book a consultation call with our team"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Book A Call With Us
          </motion.button>
        </motion.div>

        {/* Keep your scroll indicator commented out or add proper aria labels if enabled */}
      </div>
    </section>
  );
};

export default Hero;