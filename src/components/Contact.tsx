import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Users, Award } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);

      if (res.data.success) {
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
        }, 3000);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["802-803, 8th Floor", "Pearl Best Heights-I", "Netaji Subhash Place", "New Delhi - 110034"],
      schemaType: "address"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-870-945-5238"],
      schemaType: "telephone"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sales@anprax.com"],
      schemaType: "email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: Closed", "Sunday: Closed"],
      schemaType: "openingHours"
    }
  ];

  const services = [
    "Software Development Services",
    "IT Outsourcing Services",
    "Software Consulting Services",
    "Creative & Branding Solutions",
    "ERP/CRM Solutions",
    "RPO Services",
    "Other"
  ];

  // 🔥 SEO Schema Markup (to be added in your main layout or head)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Anprax Technologies",
    "url": "https://anprax.com", // Update with your actual URL
    "telephone": "+91-870-945-5238",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "802-803, 8th Floor, Pearl Best Heights-I, Netaji Subhash Place",
      "addressLocality": "New Delhi",
      "postalCode": "110034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.69285,
      "longitude": 77.15162
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-870-945-5238",
      "contactType": "customer service",
      "email": "sales@anprax.com"
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-muted/30 relative overflow-hidden"
      aria-labelledby="contact-heading"
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
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>

          <h2
            id="contact-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to start your next project? Let's discuss your ideas and create
            something amazing together. We're here to help bring your vision to life
            with innovative digital solutions and exceptional service.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information - Enhanced for SEO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            role="region"
            aria-label="Contact information"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you need a new website, mobile app, or digital marketing strategy,
                our team is ready to help. We offer free consultations to discuss your
                project requirements and provide expert recommendations tailored to your business goals.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.schemaType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl shadow-card border border-border/20"
                  itemProp={info.schemaType}
                >
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20"
            >
              <h4 className="text-xl font-bold mb-4 text-foreground">Need Immediate Assistance?</h4>
              <p className="text-muted-foreground mb-6">
                Our support team is available during business hours to help with urgent requirements
                or provide technical support for your ongoing projects.
              </p>
              <a
                href="tel:+918709455238"
                className="btn-primary bg-white text-secondary hover:bg-gray-100 inline-flex items-center gap-2"
                aria-label="Call us now at +91-870-945-5238"
              >
                <Phone className="h-4 w-4" />
                Call Now: +91-870-945-5238
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form - Enhanced for Accessibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/20"
            role="form"
            aria-label="Contact form"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Your Name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Your Email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 bg-background border ${errors.phone ? 'border-red-500' : 'border-border'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Phone Number"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* 🔥 SEO Schema Markup - Add this to your main layout's <head> */}
        <script type="application/ld+json" className="sr-only">
          {JSON.stringify(businessSchema)}
        </script>

        {/* Local SEO Content (Hidden but crawlable) */}
        <div className="sr-only" aria-hidden="true">
          <h3>Anprax Technologies - Professional IT Services in New Delhi</h3>
          <p>
            Anprax Technologies is a leading IT services company based in New Delhi, India.
            We specialize in software development, IT outsourcing, digital marketing,
            and ERP/CRM solutions. Our office is located at 802-803, 8th Floor, Pearl Best Heights-I,
            Netaji Subhash Place, New Delhi - 110034. Contact us at +91-870-945-5238 or
            sales@anprax.com for professional IT services and digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;