import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "TechStart Inc.", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Global Retail Co.", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop" },
    { name: "EcoSolutions", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop" },
    { name: "HealthCare Plus", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop" },
    { name: "Finance Pro", logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 bg-background border-y border-border"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h3>
          <p className="text-muted-foreground">
            Join 500+ satisfied clients who have transformed their businesses with our solutions
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            animate={{
              x: [-50 * clients.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-gradient-card rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientLogos;