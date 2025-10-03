import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Cloud, BarChart3, Palette, CheckCircle, User } from "lucide-react";

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
      const hash = window.location.hash.replace('#', '');
      if (hash && mainServices.some(s => s.id === hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <section id="services" className="section-padding bg-background">
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our professional services designed to elevate your business. Click a main service to view detailed offerings.
          </p>
        </motion.div>

        {/* Main Services */}
        {!selectedService && (
          <div className="flex flex-wrap justify-center gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                className="w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] p-8 bg-gradient-card rounded-2xl shadow-card cursor-pointer text-center transition-all duration-500 ease-in-out"
                onClick={() => setSelectedService(service.id)}
              >
                <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        )}

        {/* Sub Services */}
        {selectedService && (
          <div>
            <button
              className="mb-8 flex items-center gap-2 text-primary font-bold hover:underline"
              onClick={() => setSelectedService(null)}
            >
              ← Back to Main Services
            </button>

            <div className="flex flex-wrap justify-center gap-8">
              {mainServices
                .find((s) => s.id === selectedService)!
                .subServices.map((subService, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="flex flex-col justify-between bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] min-h-[480px]"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{subService.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{subService.description}</p>

                      <ul className="space-y-2 mb-6">
                        {subService.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const section = document.getElementById("contact");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-primary py-2 px-6 text-sm mt-auto"
                    >
                      Book Now
                    </button>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-hero p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;