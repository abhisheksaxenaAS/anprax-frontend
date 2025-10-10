import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    googleFormUrl: string; // Add Google Form URL
    isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    id,
    title,
    description,
    icon,
    googleFormUrl,
    isActive = false
}) => {
    const handleApply = () => {
        // Open Google Form in new tab
        window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            id={id}
            className="rounded-2xl p-8 bg-gradient-to-br from-background to-muted/30 border border-border shadow-lg transition-all duration-500 min-h-[320px] relative overflow-hidden"
            aria-labelledby={`job-title-${id}`}
        >
            {/* Subtle animated background pattern for active state */}
            {isActive && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 opacity-10">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>

            {/* Icon with enhanced animation */}
            <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 relative"
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{
                    scale: isActive ? 1.1 : 1,
                    rotate: 0,
                    backgroundColor: isActive ? 'rgba(255, 138, 0, 0.15)' : 'rgba(255, 138, 0, 0.1)'
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4
                }}
                whileHover={{ scale: 1.15, rotate: 2 }}
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                >
                    {icon}
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="space-y-4">
                <motion.h3
                    id={`job-title-${id}`}
                    className="text-2xl md:text-3xl font-bold text-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: isActive ? 0.3 : 0 }}
                >
                    {title}
                </motion.h3>

                <motion.p
                    className="text-base md:text-lg leading-relaxed text-muted-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: isActive ? 0.4 : 0 }}
                >
                    {description}
                </motion.p>

                {isActive && (
                    <motion.div
                        className="mt-4 pt-4 border-t border-border/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-primary font-medium">
                            <FiZap className="w-4 h-4" />
                            <span>Currently Hiring • Apply Today</span>
                        </div>
                    </motion.div>
                )}

                {/* Apply Button - Opens Google Form */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.7 : 0.3 }}
                >
                    <motion.button
                        onClick={handleApply}
                        className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                        whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(255, 138, 0, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`Apply for ${title} position via Google Form`}
                    >
                        Apply Now
                        <FiExternalLink className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

const CurrentOpenings: React.FC = () => {
    // Your Google Form URL (replace with your actual form URL)
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

    const services = [
        {
            id: "frontend-developer",
            title: "Frontend Developer",
            description:
                "Build responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks with a focus on performance and user experience.",
            icon: <FiCode className="w-8 h-8 text-primary" />,
            googleFormUrl: GOOGLE_FORM_URL,
        },
        {
            id: "backend-developer",
            title: "Backend Developer",
            description:
                "Develop scalable server-side applications and RESTful APIs using Node.js, Python, or Java with emphasis on security, efficiency, and maintainability.",
            icon: <FiServer className="w-8 h-8 text-primary" />,
            googleFormUrl: GOOGLE_FORM_URL,
        },
        {
            id: "java-developer",
            title: "Java Developer",
            description:
                "Create enterprise-grade applications using Java, Spring Boot, and microservices architecture focusing on performance, scalability, and clean code practices.",
            icon: <FiCoffee className="w-8 h-8 text-primary" />,
            googleFormUrl: GOOGLE_FORM_URL,
        },
        {
            id: "full-stack-developer",
            title: "Full Stack Developer",
            description:
                "Deliver end-to-end web applications by working across frontend and backend technologies with seamless integration and comprehensive testing strategies.",
            icon: <FiZap className="w-8 h-8 text-primary" />,
            googleFormUrl: GOOGLE_FORM_URL,
        },
    ];

    const [current, setCurrent] = useState(0);

    // Auto-swipe every 6s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [services.length]);

    // Manual navigation
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % services.length);
    };

    return (
        <section
            id=""
            className="section-padding bg-background relative"
            aria-labelledby="careers-heading"
        >
            <div className="container-custom">
                {/* Header with enhanced styling */}
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FiZap className="w-4 h-4" />
                        <span className="text-sm font-medium">We're Hiring</span>
                    </motion.div>

                    <motion.h2
                        id="careers-heading"
                        className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Current <span className="text-gradient">Openings</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Join our innovative team and help shape the future of digital solutions.
                        Click "Apply Now" to submit your application through our secure Google Form.
                    </motion.p>
                </div>

                {/* Slider */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={services[current].id}
                            initial={{ opacity: 0, x: 200, scale: 0.95, rotateY: 10 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                rotateY: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15,
                                    duration: 0.8
                                }
                            }}
                            exit={{
                                opacity: 0,
                                x: -200,
                                scale: 0.95,
                                rotateY: -10,
                                transition: { duration: 0.4 }
                            }}
                            className="w-full"
                        >
                            <ServiceCard
                                {...services[current]}
                                isActive={true}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Enhanced Navigation Arrows */}
                    <motion.button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-background/80 text-foreground p-3 rounded-full shadow-lg hover:bg-background hover:shadow-xl transition-all backdrop-blur-sm border border-border/30"
                        whileHover={{ scale: 1.1, x: -10 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous job opening"
                    >
                        <FiChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-background/80 text-foreground p-3 rounded-full shadow-lg hover:bg-background hover:shadow-xl transition-all backdrop-blur-sm border border-border/30"
                        whileHover={{ scale: 1.1, x: 10 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next job opening"
                    >
                        <FiChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Enhanced Dots */}
                <div className="flex justify-center mt-10 space-x-3">
                    {services.map((service, idx) => (
                        <motion.button
                            key={service.id}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current
                                ? "bg-primary w-8 rounded-full shadow-lg shadow-primary/30"
                                : "bg-muted hover:bg-primary/30"
                                }`}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.8 }}
                            aria-label={`Go to ${service.title} slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* SEO-Friendly Hidden Content */}
                <div className="sr-only">
                    <h3>All Current Job Openings at TechCorp:</h3>
                    <ul>
                        {services.map((service) => (
                            <li key={service.id}>
                                <strong>{service.title}:</strong> {service.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CurrentOpenings;