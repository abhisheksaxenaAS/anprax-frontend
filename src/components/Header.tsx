import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation for dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    {
      name: 'Services',
      href: '#services',
      subItems: [
        { name: 'Software Development Services', href: '#software-development' },
        { name: 'IT Outsourcing Services', href: '#it-outsourcing' },
        { name: 'Software Consulting Services', href: '#software-consulting' },
        { name: 'Creative & Branding Solutions', href: '#creative-branding' },
        { name: 'ERP/CRM Solutions', href: '#erp-crm' },
        { name: 'RPO Services', href: '#rpo-services' },
      ],
    },
    { name: 'Team', href: '#team' }, // Fixed typo: "Teams" → "Team"
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },

    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    // Calculate offset (height of top bar + main header)
    const topBarHeight = 40;
    const mainHeaderHeight = 64;
    const totalOffset = topBarHeight + mainHeaderHeight + 20;

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - totalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else if (href === '#home') {
        // If #home doesn't exist, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar - Enhanced for SEO */}
      <div
        className="fixed top-0 left-0 right-0 bg-secondary text-secondary-foreground py-2 text-sm z-50"
        role="banner"
        aria-label="Company contact information"
      >
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center space-x-2" itemProp="telephone">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>+91-870-945-5238</span>
            </div>
            <div className="flex items-center space-x-2" itemProp="email">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span>sales@anprax.com</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span>Ready to transform your business? Let's get started!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/70'
          }`}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Enhanced for SEO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleNavClick('#home')}
              aria-label="Go to homepage"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img
                  src="/favicon96.png"
                  alt="AnPrax Logo - Professional IT Services Company in New Delhi"
                  className="w-8 h-8 rounded-sm object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-foreground">
                An<span className="text-gradient">Prax</span>
              </span>
            </motion.div>

            {/* Desktop Navigation - Enhanced for Accessibility */}
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={el => {
                    if (item.subItems) {
                      dropdownRefs.current[item.name] = el;
                    }
                  }}
                >
                  {item.subItems ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium space-x-1"
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                      aria-controls={`dropdown-${item.name}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick(item.href)}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </motion.button>
                  )}

                  {/* Dropdown Menu - Enhanced for Accessibility */}
                  {item.subItems && openDropdown === item.name && (
                    <div
                      id={`dropdown-${item.name}`}
                      className="absolute left-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-card p-3 z-50"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                    >
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.href)}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors text-sm"
                          role="menuitem"
                          aria-label={sub.name}
                        >
                          <span>{sub.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
                aria-label="Get started with our services"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced for Accessibility */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? '0%' : '100%',
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t"
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.subItems ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </button>
                  )}

                  {item.subItems && openDropdown === item.name && (
                    <div className="ml-4 flex flex-col space-y-1" role="menu" aria-label={`${item.name} submenu`}>
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.href)}
                          className="text-left text-sm text-foreground hover:text-primary py-1"
                          role="menuitem"
                          aria-label={sub.name}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-4 text-left"
                aria-label="Get started with our services"
              >
                Get Started
              </button>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;