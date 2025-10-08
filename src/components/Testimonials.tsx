import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, Target, Clock } from 'lucide-react';

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
      className={`bg-gradient-card p-8 rounded-2xl shadow-card transition-all duration-500 ${isActive ? 'shadow-elevated border border-primary/30' : 'border border-border/20'
        }`}
      aria-labelledby={`testimonial-name-${testimonial.id}`}
    >
      <div className="flex items-center mb-6">
        <Quote className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-lg text-foreground mb-8 leading-relaxed italic">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <div>
          <h4
            id={`testimonial-name-${testimonial.id}`}
            className="font-bold text-foreground text-lg"
          >
            {testimonial.name}
          </h4>
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
    <section
      id="testimonials"
      className="section-padding bg-background relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 13,
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
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
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
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </motion.div>

          <h2
            id="testimonials-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with TechCorp and the exceptional results we've delivered together.
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="region"
              aria-label="Client testimonials carousel"
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
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-primary w-8 rounded-full shadow-lg shadow-primary/30'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* 🔥 CRITICAL SEO SECTION - All Testimonials Always Visible to Crawlers 🔥 */}
        <div className="sr-only" aria-hidden="true">
          <h3>Client Testimonials and Reviews:</h3>
          <div role="list" aria-label="Client testimonials">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                role="listitem"
                id={`seo-testimonial-${testimonial.id}`}
              >
                <h4>{testimonial.name} - {testimonial.position}</h4>
                <p>Rating: {testimonial.rating} out of 5 stars</p>
                <blockquote>{testimonial.content}</blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border/30"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="text-center group"
          >
            <div className="flex justify-center mb-3">
              <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">90</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="text-center group"
          >
            <div className="flex justify-center mb-3">
              <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="text-center group"
          >
            <div className="flex justify-center mb-3">
              <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            className="text-center group"
          >
            <div className="flex justify-center mb-3">
              <Clock className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;