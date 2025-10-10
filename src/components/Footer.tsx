import { motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    "Software Development Services",
    "IT Outsourcing Services",
    "Software Consulting Services",
    "Creative & Branding Solutions",
    "ERP/CRM Solutions",
    "RPO Services",
    "Other"
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '', label: 'Facebook' },
    { icon: FaXTwitter, href: '', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '', label: 'LinkedIn' },
    { icon: FaInstagram, href: '', label: 'Instagram' },
    { icon: FaYoutube, href: '', label: 'YouTube' }, // Fixed whitespace
  ];

  // 🔥 Organization Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AnPrax Technologies",
    "url": "https://official.anprax.com", // Update with your actual domain
    "logo": "https://official.anprax.com/favicon96.png", // Update with full URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-870-945-5238",
      "contactType": "customer service",
      "email": "sales@anprax.com",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "802-803, 8th Floor, Pearl Best Heights-I, Netaji Subhash Place",
      "addressLocality": "New Delhi",
      "postalCode": "110034",
      "addressCountry": "IN"
    },
    "sameAs": [
      "",
      "",
      "",
      "",
      ""
    ]
  };

  return (
    <footer
      className="bg-gradient-hero text-white relative overflow-hidden"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom pt-20 pb-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info - Enhanced for SEO */}
            <div className="lg:col-span-1" itemScope itemType="https://schema.org/Organization">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <img
                      src="/favicon96.png"
                      alt="AnPrax Logo - Professional IT Services Company"
                      className="w-8 h-8 rounded-sm object-contain"
                      itemProp="logo"
                    />
                  </div>
                  <span className="text-2xl font-bold">
                    An<span className="text-primary">Prax</span>
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed" itemProp="description">
                  Your trusted partner for digital transformation. We help businesses
                  thrive in the digital world with innovative solutions and cutting-edge technology.
                </p>

                <div
                  className="space-y-4 text-gray-300"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <FaPhone className="h-5 w-5 text-primary mt-0.5" />
                    <p className="leading-snug" itemProp="telephone">
                      +91-870-945-5238
                    </p>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="h-5 w-5 text-primary mt-0.5" />
                    <p className="leading-snug" itemProp="email">
                      sales@anprax.com
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="leading-snug" itemProp="streetAddress">
                      802-803, 8th Floor, Pearl Best Heights-I,<br />
                      Netaji Subhash Place, New Delhi - 110034
                    </p>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <nav aria-label="Quick navigation links">
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={link.href}>
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className="text-gray-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform block"
                          aria-label={`Navigate to ${link.name}`}
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Our Services</h3>
                <ul className="space-y-3" role="list" aria-label="Our services">
                  {services.map((service, index) => (
                    <li key={service} className="text-gray-300">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter for the latest updates and tech insights.
                </p>

                {/* Enhanced Newsletter Form */}
                <form className="flex mb-8" role="form" aria-label="Newsletter subscription">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter subscription
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-primary rounded-r-lg hover:opacity-90 transition-opacity"
                    aria-label="Subscribe to newsletter"
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </button>
                </form>

                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 🔥 Schema Markup - Add to main layout head */}
        <script type="application/ld+json" className="sr-only">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* 🔥 SEO Content - Hidden but crawlable */}
        <div className="sr-only" aria-hidden="true">
          <h3>AnPrax Technologies - Professional IT Services in New Delhi</h3>
          <p>
            AnPrax Technologies is a leading IT services company based in New Delhi, India,
            specializing in software development, IT outsourcing, digital marketing,
            ERP/CRM solutions, and RPO services. Our team of expert developers,
            designers, and consultants deliver innovative digital solutions that help
            businesses transform and grow in the digital era.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-center md:text-left"
              >
                <p>&copy; 2025 AnPrax Technologies. All rights reserved.</p>
                <p className="text-sm mt-1">
                  Crafted with ❤️ by the AnPrax team |
                  <a
                    href="/privacy-policy"
                    className="hover:text-primary ml-1"
                    aria-label="Privacy Policy"
                  >
                    Privacy Policy
                  </a> |
                  <a
                    href="/terms-of-service"
                    className="hover:text-primary ml-1"
                    aria-label="Terms of Service"
                  >
                    Terms of Service
                  </a>
                </p>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;