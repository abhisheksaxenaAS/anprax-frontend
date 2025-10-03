import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Available";

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-gradient-hero text-white transition-transform duration-300 hover:scale-[1.02] min-h-[380px]">
            {/* Image Side with aspect ratio */}
            <div className="w-full md:w-1/2 p-4 md:p-6 flex-shrink-0">
                <div className="w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md bg-gray-200">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = fallbackImage;
                        }}
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-200 line-clamp-4">
                    {description}
                </p>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Frontend Developer",
            description:
                "Build responsive and interactive user interfaces using React, Angular, or Vue with attention to performance and UX.",
            imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Backend Developer",
            description:
                "Develop scalable server-side applications and APIs using Node.js, Python, or Django with security and efficiency in mind.",
            imageUrl:
                "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Java Developer",
            description:
                "Write enterprise-grade applications using Java and Spring Boot focusing on performance, scalability, and clean code.",
            imageUrl:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Full Stack Developer",
            description:
                "Work across frontend and backend technologies to deliver end-to-end web applications with seamless integration.",
            imageUrl:
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const [current, setCurrent] = useState(0);

    // Auto-swipe every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 5000);
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
        <section className="section-padding bg-background relative">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Current <span className="text-gradient">Openings!</span>
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Explore our latest career opportunities and join us in shaping the future with innovation and passion.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -200 }}
                            transition={{ duration: 0.6 }}
                            className="w-full"
                        >
                            <ServiceCard {...services[current]} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary/80 text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary/80 text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-3">
                    {services.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === current
                                ? "bg-primary animate-glow"
                                : "bg-muted hover:bg-primary/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
