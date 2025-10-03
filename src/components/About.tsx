import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Award, Target, Infinity as InfinityIcon } from 'lucide-react';

const CounterCard = ({ icon: Icon, number, label }: {
  icon: any;
  number: number | string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animate number counting
  useEffect(() => {
    if (isInView && typeof number === 'number') {
      const increment = number / 100;
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev < number) {
            return Math.min(prev + increment, number);
          }
          clearInterval(counter);
          return number;
        });
      }, 20);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 40 },
        show: { opacity: 1, scale: 1, y: 0 }
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6
      }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <div className="text-4xl font-bold text-foreground mb-2">
        {typeof number === 'number' ? (
          <>
            {Math.floor(count)}
            {number >= 100 ? '+' : ''}
          </>
        ) : (
          "∞"
        )}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, number: 90, label: "Happy Clients" },
    { icon: Award, number: 100, label: "Projects Completed" },
    { icon: InfinityIcon, number: "∞", label: "Happy Moments" },
    { icon: Target, number: 99, label: "Success Rate" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Expanding The Boundaries Of{' '}
                <span className="text-gradient">Digital Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At TechCorp, we're not just another digital agency. We're your strategic partner
                in navigating the complex world of digital transformation. With cutting-edge
                technology solutions and innovative marketing strategies, we help businesses
                thrive in the digital landscape.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of experts combines years of industry experience with the latest
                technologies to deliver solutions that don't just meet your expectations—they
                exceed them. From web development to digital marketing, we've got you covered.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-primary">Learn More About Us</button>
                <button className="btn-secondary">Our Success Stories</button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Grid with staggered animation */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <CounterCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-hero p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed text-gray-200">
              "To empower businesses with innovative digital solutions that drive growth,
              enhance efficiency, and create lasting impact in their respective industries.
              We believe in building partnerships, not just delivering projects."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
