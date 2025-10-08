"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

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
    <section
      id="clients"
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Subtle themed background elements (like in Careers.tsx) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header — consistent with your design system */}
        <motion.div
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
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Partners</span>
          </motion.div>

          <h2
            id="clients-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text"
          >
            Trusted by <span className="text-gradient">Leading Companies</span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join 500+ satisfied clients who have transformed their businesses with our solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced scrolling logos — larger & elevated */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={isInView ? { x: ["0%", "-50%"] } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ y: -8, scale: 1.03 }}
                className="flex-shrink-0 w-64 h-32 bg-gradient-card rounded-2xl shadow-card border border-border/20 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-out"
                aria-label={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[85%] max-h-[75%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SEO-friendly hidden content */}
        <div className="sr-only" aria-hidden="true">
          <h3>Our Valued Clients</h3>
          <p>
            AnPrax proudly serves over 500 clients across technology, healthcare, finance, retail, and sustainability sectors.
          </p>
          <ul>
            {clients.map((client, i) => (
              <li key={i}>{client.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;