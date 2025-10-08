"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Cloud,
  BarChart3,
  Palette,
  CheckCircle,
  User,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

export const mainServices = [
  {
    id: "software-development",
    title: "Software Development Services",
    icon: Code,
    subServices: [
      {
        title: "Web Development Services",
        description:
          "Responsive, scalable, and high-performing web development tailored to your business.",
        features: [
          "Responsive Design",
          "Performance Optimization",
          "SEO & Accessibility Ready",
          "Custom Web Application Development",
          "E-commerce & PWA Solutions",
          "Secure & Scalable Architecture",
        ],
      },
      {
        title: "Custom Software Development",
        description: "Tailored software solutions to meet unique business requirements.",
        features: [
          "Requirement Analysis & Planning",
          "Custom Architecture & Design",
          "System Integration & Automation",
          "Scalable & Secure Solutions",
          "Maintenance & Ongoing Support",
          "Performance Optimization & Testing",
        ],
      },
      {
        title: "Software Development for Startups",
        description: "End-to-end software development for startups quickly and cost-effectively.",
        features: [
          "MVP Development for Quick Launch",
          "Scalable Architecture for Growth",
          "Agile Development & Iterative Releases",
          "Product Design & UX/UI Optimization",
          "Integration with Third-Party Services",
          "Post-Launch Support & Maintenance",
        ],
      },
      {
        title: "Cross-Platform App Development",
        description: "Develop apps that run seamlessly on both iOS and Android using a single codebase.",
        features: [
          "Single Codebase for iOS & Android",
          "Rapid Development & Deployment",
          "Consistent UI/UX Across Platforms",
          "Performance Optimization & Testing",
          "Integration with APIs & Services",
          "Ongoing Support & Updates",
        ],
      },
      {
        title: "CRM Software Development",
        description: "Custom CRM solutions for managing customer relationships efficiently.",
        features: [
          "Contact & Lead Management",
          "Sales Pipeline Tracking",
          "Automated Workflow & Task Management",
          "Analytics & Reporting Dashboards",
          "Integration with Third-Party Tools",
          "Customizable Modules & User Roles",
        ],
      },
    ],
  },
  {
    id: "it-outsourcing",
    title: "IT Outsourcing Services",
    icon: Cloud,
    subServices: [
      {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services.",
        features: [
          "Cloud Migration & Deployment",
          "Infrastructure as a Service (IaaS) Setup",
          "Security Implementation & Compliance",
          "DevOps & Continuous Integration",
          "24/7 Monitoring & Support",
          "Cost Optimization & Scalability",
        ],
      },
      {
        title: "AI/ML Services",
        description: "Intelligent AI/ML solutions to automate tasks and gain insights.",
        features: [
          "Predictive Analytics & Forecasting",
          "Natural Language Processing (NLP)",
          "Computer Vision & Image Recognition",
          "Recommendation Systems",
          "Model Training & Deployment",
          "Data Cleaning, Processing & Optimization",
        ],
      },
    ],
  },
  {
    id: "software-consulting",
    title: "Software Consulting Services",
    icon: BarChart3,
    subServices: [
      {
        title: "Software Consulting",
        description: "Professional consulting to optimize your software strategy.",
        features: [
          "Technology & Architecture Assessment",
          "Business Process Analysis",
          "Software Strategy & Roadmap Planning",
          "System Integration Consulting",
          "Performance & Security Audits",
          "Post-Implementation Support",
        ],
      },
      {
        title: "SEO & SEM",
        description: "Boost online visibility with search engine optimization and marketing.",
        features: [
          "Keyword Research & Analysis",
          "On-Page SEO Optimization",
          "Off-Page SEO & Link Building",
          "Technical SEO Audits",
          "Google Ads & PPC Campaigns",
          "Performance Tracking & Analytics",
        ],
      },
      {
        title: "Digital Marketing",
        description: "Full-service strategies to grow your brand and conversions.",
        features: [
          "Social Media Marketing & Management",
          "Content Marketing & Strategy",
          "Email Marketing Campaigns",
          "Search Engine Marketing (SEM)",
          "Analytics & Performance Reporting",
          "Paid Advertising & Retargeting",
        ],
      },
    ],
  },
  {
    id: "creative-branding",
    title: "Creative & Branding Solutions",
    icon: Palette,
    subServices: [
      {
        title: "Logo Designing Services",
        description: "Unique, professional, and memorable logos that capture your brand's essence.",
        features: [
          "Custom Logo Concepts",
          "Multiple Design Variations",
          "Scalable Vector Designs",
          "Brand Identity Alignment",
          "High-Resolution Exports",
          "Revisions & Final Deliverables",
        ],
      },
      {
        title: "Pamphlet Designing Services",
        description: "Creative and impactful pamphlet designs to communicate your message effectively.",
        features: [
          "Custom Layouts & Templates",
          "Eye-Catching Visuals",
          "Print & Digital Ready Designs",
          "Target Audience Focused",
          "Brand Color & Typography Integration",
          "Revisions & Final Files",
        ],
      },
      {
        title: "Content Writing",
        description: "Engaging and SEO-friendly content to boost your online presence.",
        features: [
          "Website Content",
          "Blog & Article Writing",
          "Product Descriptions",
          "Social Media Content",
          "SEO Optimization",
          "Proofreading & Editing",
        ],
      },
    ],
  },
  {
    id: "erp-crm",
    title: "ERP/CRM Solutions",
    icon: BarChart3, // you can choose another icon if you want
    subServices: [
      {
        title: "Salesforce",
        description: "Cloud-based CRM platform to manage sales, service, and marketing automation efficiently.",
        features: [
          "Sales Cloud for Sales Automation",
          "Service Cloud for Customer Support",
          "Marketing Cloud & Campaign Management",
          "Analytics & Reporting Dashboards",
          "Custom App Development on Salesforce Platform",
          "Integration with Third-Party Tools",
        ],
      },
      {
        title: "Microsoft Dynamics 365",
        description: "Comprehensive ERP & CRM platform to streamline business processes and improve customer engagement.",
        features: [
          "Sales & Customer Relationship Management",
          "Finance & Operations Automation",
          "Marketing & Customer Insights",
          "Customizable Workflows & Dashboards",
          "Integration with Microsoft Office Suite",
          "Cloud & On-Premise Deployment Options",
        ],
      },
      {
        title: "Odoo",
        description: "Open-source ERP & CRM platform providing modular solutions for all business functions.",
        features: [
          "Sales, CRM, and Marketing Automation",
          "Inventory & Warehouse Management",
          "Accounting & Financial Management",
          "Human Resources & Payroll",
          "Customizable Modules & Apps",
          "Integration with E-commerce & Third-Party Apps",
        ],
      },
    ],
  },
  {
    id: "rpo-services",
    title: "RPO Services",
    icon: User,
    subServices: [
      {
        title: "Full Recruitment Outsourcing",
        description: "End-to-end recruitment solutions to manage your hiring efficiently.",
        features: [
          "Candidate Sourcing & Screening",
          "Interview Scheduling & Coordination",
          "Offer Management & Onboarding",
          "Talent Pool Development",
          "Recruitment Metrics & Reporting",
          "Custom Hiring Strategies",
        ],
      },
      {
        title: "Staff Augmentation",
        description: "Provide skilled resources to augment your internal teams as per your project requirements.",
        features: [
          "Short-term & Long-term Staffing",
          "Domain-specific Experts",
          "Flexible Engagement Models",
          "Rapid Candidate Deployment",
          "Performance Tracking",
          "Seamless Integration with Existing Teams",
        ],
      },
      {
        title: "Recruitment Process Consulting",
        description: "Optimizing your internal recruitment process and improving hiring efficiency.",
        features: [
          "Process Audit & Gap Analysis",
          "Workflow Optimization",
          "ATS & HR Tech Integration",
          "Employer Branding Support",
          "Talent Market Insights & Benchmarking",
          "Training & Support for Internal HR Teams",
        ],
      },
    ],
  }


];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && mainServices.some((s) => s.id === hash)) {
        setSelectedService(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const toggleService = (serviceId: string) => {
    setSelectedService((prev) => (prev === serviceId ? null : serviceId));
  };

  const getIconComponent = (IconComponent: any, className: string) => {
    return <IconComponent className={className} />;
  };

  return (
    <section
      id="services"
      className="section-padding bg-background relative overflow-visible"
      aria-labelledby="services-heading"
    >
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
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Services</span>
          </motion.div>

          <h2
            id="services-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text"
          >
            Our <span className="text-gradient">Comprehensive</span> Services
          </h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our end-to-end solutions designed to transform your business,
            drive growth, and deliver exceptional results across every digital touchpoint.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        {!selectedService && (
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {mainServices.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
                className="group bg-gradient-card rounded-3xl p-8 shadow-card cursor-pointer transition-all duration-500 ease-out border border-border/20 hover:border-primary/30 relative overflow-visible w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[260px] max-w-[320px]"
                onClick={() => toggleService(service.id)}
                aria-expanded={selectedService === service.id}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto relative group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {getIconComponent(
                    service.icon,
                    "h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  )}
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronDown className="h-5 w-5 text-primary" />
                </div>

                {/* <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                  {service.subServices.length} services
                </div> */}
              </motion.article>
            ))}
          </div>
        )}


        {/* Sub Services Section */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.button
              className="mb-8 flex items-center gap-3 text-primary font-bold hover:text-primary/80 transition-colors duration-200 group"
              onClick={() => setSelectedService(null)}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="h-5 w-5 group-hover:-rotate-90 transition-transform duration-200" />
              Back to All Services
            </motion.button>

            <div
              className="
        grid 
        justify-center
        gap-8
        sm:grid-cols-2 
        md:grid-cols-3
        auto-rows-fr
        [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
        place-items-center
      "
            >
              {mainServices
                .find((s) => s.id === selectedService)!
                .subServices.map((subService, index) => (
                  <motion.article
                    key={`${selectedService}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
                    }}
                    className="
              flex flex-col bg-gradient-card p-8 rounded-3xl 
              shadow-card hover:shadow-elevated transition-all duration-300 
              border border-border/20 hover:border-primary/30 
              min-h-[420px] max-w-[380px] w-full
            "
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                            {subService.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {subService.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {subService.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-foreground/90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        const section = document.getElementById("contact");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-primary py-3 px-6 text-sm font-medium flex items-center justify-center gap-2 group mt-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </motion.article>
                ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Services;
