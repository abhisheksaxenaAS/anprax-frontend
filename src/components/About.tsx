import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiUsers } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import { FiTarget } from 'react-icons/fi';
import { FiLayers } from 'react-icons/fi';
import { FaInfinity } from 'react-icons/fa';

const CounterCard = ({ icon: Icon, number, label }: {
  icon: any;
  number: number | string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof number === 'number') {
      const end = number;
      const duration = 2000;
      const startTime = Date.now();

      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = progress * (2 - progress);
        const currentCount = Math.floor(end * easeOutQuad);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };

      animateCount();
    } else if (typeof number === 'number') {
      setCount(number);
    }
  }, [isInView, number]);

  const displayNumber = typeof number === 'number' ? number : '∞';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border/20 hover:border-primary/30"
      aria-labelledby={`counter-label-${label.replace(/\s+/g, '-')}`}
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
      <div className="text-4xl font-bold text-foreground mb-2">
        {typeof number === 'number' ? (
          <>
            <span aria-hidden="true">
              {isInView ? count : 0}
              {number >= 100 ? '+' : ''}
            </span>
            <span className="sr-only">{displayNumber}{number >= 100 ? '+' : ''}</span>
          </>
        ) : (
          <>
            <span aria-hidden="true">∞</span>
            <span className="sr-only">Infinite</span>
          </>
        )}
      </div>
      <div id={`counter-label-${label.replace(/\s+/g, '-')}`} className="text-muted-foreground font-medium">
        {label}
      </div>
    </motion.article>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: FiUsers, number: 90, label: "Happy Clients" },
    { icon: FiAward, number: 100, label: "Projects Completed" },
    { icon: FaInfinity, number: "∞", label: "Happy Moments" },
    { icon: FiTarget, number: 99, label: "Success Rate" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background elements - matches Team.tsx */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header - matches Team.tsx style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiLayers className="w-4 h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </motion.div>

          <h2
            id="about-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Expanding The Boundaries Of{' '}
            <span className="text-gradient">Digital Excellence</span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At AnPrax, we're not just another digital agency. We're your strategic partner
            in navigating the complex world of digital transformation. With cutting-edge
            technology solutions and innovative marketing strategies, we help businesses
            thrive in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experts combines years of industry experience with the latest
              technologies to deliver solutions that don't just meet your expectations—they
              exceed them. From web development to digital marketing, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a
                href="#abouts"
                className="btn-primary"
                aria-label="Learn more about our company and services"
              >
                Learn More About Us
              </a> */}
              <a
                href="#portfolio"
                className="btn-secondary"
                aria-label="View our client success stories and case studies"
              >
                Our Success Stories
              </a>
            </div>
          </div>

          {/* Stats Grid - now uses <article> like TeamCard */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <CounterCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        {/* Mission Statement - styled like Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center relative"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-3xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>

            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-6">
                <FiAward className="h-12 w-12 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Mission
              </h3>

              <blockquote className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                "To empower businesses with innovative digital solutions that drive growth,
                enhance efficiency, and create lasting impact in their respective industries.
                We believe in building partnerships, not just delivering projects."
              </blockquote>

              {/* <motion.a
                href="#contact"
                className="btn-primary px-8 py-4 text-lg font-medium inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 138, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us to start your project"
              >
                Start Your Project
                <TrendingUp className="h-5 w-5" />
              </motion.a> */}
            </motion.div>
          </div>
        </motion.div>

        {/* SEO-Friendly Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <h3>About AnPrax Technologies</h3>
          <p>
            AnPrax is a leading digital agency based in New Delhi, India, specializing in software development,
            IT outsourcing, digital marketing, and ERP/CRM solutions. We have served 90+ happy clients,
            completed 100+ projects, and maintain a 99% success rate. Our mission is to build lasting partnerships
            through innovative digital solutions.
          </p>
          <ul>
            {stats.map((stat) => (
              <li key={stat.label}>
                {stat.label}: {typeof stat.number === 'number' ? stat.number : 'Infinite'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;