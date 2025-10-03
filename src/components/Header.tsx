import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    {
      name: 'Services',
      href: '#services',
      subItems: [
        { name: 'Software Development Services', href: '#services' },
        { name: 'IT Outsourcing Services', href: '#services' },
        { name: 'Software Consulting Services', href: '#services' },
        { name: 'Creative & Branding Solutions', href: '#services' },
        { name: 'ERP/CRM Solutions', href: '#erp-crm' },
        { name: 'RPO Services', href: '#rpo-services' },
      ],
    },
    { name: 'Teams', href: '#team' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    // Calculate offset (height of your fixed header + top bar)
    const topBarHeight = 40; // height of your top contact bar
    const mainHeaderHeight = 64; // height of your main header (h-16 = 64px)
    const totalOffset = topBarHeight + mainHeaderHeight + 20; // +20 for extra breathing room

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - totalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-secondary text-secondary-foreground py-2 text-sm z-50">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-870-945-5238</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>sales@anprax.com</span>
            </div>
          </div>
          <div className="hidden md:block">
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
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img
                  src="/favicon96.png"
                  alt="AnPrax Logo"
                  className="w-8 h-8 rounded-sm object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-foreground">
                An<span className="text-gradient">Prax</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      item.subItems ? toggleDropdown(item.name) : handleNavClick(item.href)
                    }
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.subItems && openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-card p-3 z-50">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.href)}
                          className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors text-sm"
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
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? '0%' : '100%',
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t"
        >
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() =>
                      item.subItems ? toggleDropdown(item.name) : handleNavClick(item.href)
                    }
                    className="flex justify-between items-center text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  {item.subItems && openDropdown === item.name && (
                    <div className="ml-4 flex flex-col space-y-1">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.href)}
                          className="text-left text-sm text-foreground hover:text-primary py-1"
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