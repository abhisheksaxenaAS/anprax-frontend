import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.9,
        x: isActive ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-card p-8 rounded-2xl shadow-card transition-all duration-500 ${isActive ? 'shadow-elevated' : ''
        }`}
    >
      <div className="flex items-center mb-6">
        <Quote className="h-8 w-8 text-primary mr-4" />
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
      </div>
      <p className="text-lg text-foreground mb-8 leading-relaxed italic">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <div>
          <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
          <p className="text-primary font-medium">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      rating: 5,
      content: "TechCorp transformed our entire digital presence. Their team's expertise in web development and digital marketing helped us increase our online sales by 300% within just 6 months. Absolutely phenomenal results!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      rating: 5,
      content: "Working with TechCorp was a game-changer for our startup. They built our mobile app from scratch and delivered it ahead of schedule. The quality of work and attention to detail is outstanding."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      rating: 5,
      content: "The digital marketing strategies implemented by TechCorp have significantly improved our brand visibility and customer engagement. Their data-driven approach delivers real, measurable results."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      rating: 5,
      content: "TechCorp's team is incredibly professional and responsive. They took our complex requirements and turned them into a beautiful, functional platform that our users love. Highly recommended!"
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Operations Manager",
      rating: 5,
      content: "The healthcare management system they developed for us has streamlined our operations completely. Patient satisfaction has increased and our staff can now focus more on patient care rather than paperwork."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with TechCorp.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">90</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;