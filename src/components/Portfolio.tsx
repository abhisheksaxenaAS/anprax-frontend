import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, Layers, Award, TrendingUp } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) => {
      if (!isOpen) return null;

      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={onClose}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`modal-title-${project.title.replace(/\s+/g, '-')}`}
            >
                  <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                  >
                        <div className="relative">
                              <img
                                    src={project.image.trim()} // Fixed whitespace
                                    alt={`${project.title} - ${project.description}`}
                                    className="w-full h-64 object-cover rounded-t-2xl"
                                    loading="lazy"
                                    decoding="async"
                              />
                              <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                                    aria-label="Close project details"
                              >
                                    <X className="h-6 w-6" />
                              </button>
                        </div>

                        <div className="p-8">
                              <h3
                                    id={`modal-title-${project.title.replace(/\s+/g, '-')}`}
                                    className="text-3xl font-bold text-foreground mb-4"
                              >
                                    {project.title}
                              </h3>
                              <p className="text-lg text-muted-foreground mb-6">{project.fullDescription}</p>

                              <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                          {project.technologies.map((tech: string, index: number) => (
                                                <span
                                                      key={index}
                                                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                                >
                                                      {tech}
                                                </span>
                                          ))}
                                    </div>
                              </div>

                              <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-foreground">Key Features</h4>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                          {project.features.map((feature: string, index: number) => (
                                                <li key={index}>{feature}</li>
                                          ))}
                                    </ul>
                              </div>
                        </div>
                  </motion.div>
            </motion.div>
      );
};

const ProjectCard = ({ project, index, onOpenModal }: { project: any, index: number, onOpenModal: (project: any) => void }) => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-50px" });

      return (
            <motion.article
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
                  onClick={() => onOpenModal(project)}
                  aria-labelledby={`project-title-${project.title.replace(/\s+/g, '-')}`}
            >
                  <div className="relative overflow-hidden">
                        <img
                              src={project.image.trim()} // Fixed whitespace
                              alt={`${project.title} - ${project.category} project by TechCorp`}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-white text-center">
                                    <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                                    <span className="font-semibold">View Project</span>
                              </div>
                        </div>
                  </div>

                  <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {project.category}
                              </span>
                              <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>

                        <h3
                              id={`project-title-${project.title.replace(/\s+/g, '-')}`}
                              className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                        >
                              {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                    <span
                                          key={techIndex}
                                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                                    >
                                          {tech}
                                    </span>
                              ))}
                              {project.technologies.length > 3 && (
                                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                                          +{project.technologies.length - 3} more
                                    </span>
                              )}
                        </div>
                  </div>
            </motion.article>
      );
};

const Portfolio = () => {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-100px" });
      const [selectedProject, setSelectedProject] = useState(null);
      const [filter, setFilter] = useState('All');

      const projects = [
            // ... your existing projects array (I'll keep it as is for brevity)
            {
                  title: "E-commerce Platform",
                  description: "Modern e-commerce solution with advanced features and seamless user experience.",
                  fullDescription: "A comprehensive e-commerce platform built for a fashion retailer, featuring advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of transactions daily and has increased client sales by 150%.",
                  category: "Web Development",
                  year: "2024",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
                  features: [
                        "Real-time inventory management",
                        "Advanced product filtering and search",
                        "Secure payment processing with Stripe",
                        "Responsive design for all devices",
                        "Admin dashboard with analytics"
                  ]
            },
            {
                  title: "Mobile Banking App",
                  description: "Secure and user-friendly mobile banking application with biometric authentication.",
                  fullDescription: "A cutting-edge mobile banking application that provides users with secure access to their accounts, real-time transaction monitoring, bill payment capabilities, and investment tracking. Features advanced security measures including biometric authentication and end-to-end encryption.",
                  category: "Mobile App",
                  year: "2024",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
                  technologies: ["React Native", "TypeScript", "Firebase", "Biometrics"],
                  features: [
                        "Biometric authentication (Face ID/Touch ID)",
                        "Real-time transaction monitoring",
                        "Bill payment and money transfer",
                        "Investment portfolio tracking",
                        "Push notifications for account activity"
                  ]
            },
            {
                  title: "AI-Powered Analytics Dashboard",
                  description: "Intelligent business analytics platform with real-time insights and predictive forecasting.",
                  fullDescription: "A next-generation analytics dashboard that leverages machine learning to deliver real-time business insights, predictive trend forecasting, and automated reporting. Built for enterprise clients in the retail and logistics sectors, it processes millions of data points daily and has reduced decision-making time by 65% while improving forecast accuracy by 40%.",
                  category: "Web Development With Gen-AI",
                  year: "2024",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                  technologies: ["React", "TypeScript", "Python", "TensorFlow.js", "PostgreSQL", "Redis"],
                  features: [
                        "Real-time data visualization with interactive charts",
                        "AI-driven predictive analytics and trend forecasting",
                        "Custom alert system for key performance indicators",
                        "Role-based access control and audit logging",
                        "Automated report generation and export (PDF/Excel)"
                  ]
            },
            {
                  title: "Brand Identity Design",
                  description: "Complete brand identity and marketing materials for a tech startup.",
                  fullDescription: "A comprehensive brand identity project for an AI startup, including logo design, brand guidelines, website design, marketing materials, and social media assets. The project helped establish a strong brand presence and contributed to successful Series A funding.",
                  category: "Design",
                  year: "2024",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
                  technologies: ["Adobe Creative Suite", "Figma", "Sketch"],
                  features: [
                        "Logo and brand identity design",
                        "Comprehensive brand guidelines",
                        "Marketing collateral design",
                        "Social media asset creation",
                        "Website design mockups"
                  ]
            },
            {
                  title: "Real Estate Platform",
                  description: "Full-featured real estate platform with property listings and virtual tours.",
                  fullDescription: "A sophisticated real estate platform that connects buyers, sellers, and agents. Features include advanced property search, virtual property tours, mortgage calculators, market analytics, and a comprehensive CRM system for real estate professionals.",
                  category: "Web Development",
                  year: "2023",
                  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
                  technologies: ["Angular", "Node.js", "MySQL", "Google Maps API"],
                  features: [
                        "Advanced property search and filtering",
                        "Virtual property tours (360°)",
                        "Mortgage calculator and financing tools",
                        "Market analytics and trends",
                        "CRM system for agents"
                  ]
            },
            {
                  title: "Learning Management System",
                  description: "Interactive online learning platform with video courses and assessments.",
                  fullDescription: "A comprehensive learning management system designed for educational institutions and corporate training. Features include course creation tools, video streaming, interactive assessments, progress tracking, and certification management.",
                  category: "Web Development",
                  year: "2023",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
                  technologies: ["React", "Express.js", "MongoDB", "WebRTC"],
                  features: [
                        "Course creation and management tools",
                        "HD video streaming and playback",
                        "Interactive quizzes and assessments",
                        "Progress tracking and analytics",
                        "Certificate generation and management"
                  ]
            }
      ];

      const categories = ['All', 'Web Development', 'Mobile App', 'Design', 'Web Development With Gen-AI'];
      const filteredProjects = filter === 'All'
            ? projects
            : projects.filter(project => project.category === filter);

      return (
            <section
                  id="portfolio"
                  className="section-padding bg-muted/30 relative overflow-hidden"
                  aria-labelledby="portfolio-heading"
            >
                  {/* Subtle background elements */}
                  <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                              animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.02, 0.04, 0.02]
                              }}
                              transition={{
                                    duration: 14,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                              }}
                              className="absolute top-20 left-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl"
                        />
                        <motion.div
                              animate={{
                                    scale: [1.3, 1, 1.3],
                                    opacity: [0.03, 0.05, 0.03]
                              }}
                              transition={{
                                    duration: 11,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                              }}
                              className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
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
                                    <Layers className="w-4 h-4" />
                                    <span className="text-sm font-medium">Our Work</span>
                              </motion.div>

                              <h2
                                    id="portfolio-heading"
                                    className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                              >
                                    Our <span className="text-gradient">Portfolio</span>
                              </h2>

                              <motion.p
                                    className="text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                              >
                                    Explore our recent projects and see how we've helped businesses achieve their
                                    digital transformation goals with innovative solutions and measurable results.
                              </motion.p>

                              {/* Filter Buttons */}
                              <div className="flex flex-wrap justify-center gap-4">
                                    {categories.map((category) => (
                                          <motion.button
                                                key={category}
                                                onClick={() => setFilter(category)}
                                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${filter === category
                                                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                                                      : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border/20'
                                                      }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-pressed={filter === category}
                                          >
                                                {category}
                                          </motion.button>
                                    ))}
                              </div>
                        </motion.div>

                        {/* Projects Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                              {filteredProjects.map((project, index) => (
                                    <ProjectCard
                                          key={project.title}
                                          project={project}
                                          index={index}
                                          onOpenModal={setSelectedProject}
                                    />
                              ))}
                        </div>

                        {/* 🔥 CRITICAL SEO SECTION - All Project Details Always Visible to Crawlers 🔥 */}
                        <div className="sr-only" aria-hidden="true">
                              <h3>Our Complete Portfolio Projects:</h3>
                              {projects.map((project) => (
                                    <article
                                          key={project.title}
                                          id={`seo-project-${project.title.replace(/\s+/g, '-')}`}
                                    >
                                          <h4>{project.title}</h4>
                                          <p><strong>Category:</strong> {project.category}</p>
                                          <p><strong>Year:</strong> {project.year}</p>
                                          <p><strong>Description:</strong> {project.description}</p>
                                          <p><strong>Full Description:</strong> {project.fullDescription}</p>
                                          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                                          <p><strong>Key Features:</strong></p>
                                          <ul>
                                                {project.features.map((feature, idx) => (
                                                      <li key={idx}>{feature}</li>
                                                ))}
                                          </ul>
                                    </article>
                              ))}
                        </div>

                        {/* Enhanced CTA */}
                        <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.8, delay: 0.8 }}
                              className="mt-24 text-center relative"
                        >
                              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-3xl border border-primary/20 relative overflow-hidden">
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                                    <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>

                                    <motion.div
                                          className="relative z-10"
                                          whileHover={{ scale: 1.02 }}
                                          transition={{ type: "spring", stiffness: 300 }}
                                    >
                                          <div className="flex justify-center mb-6">
                                                <Award className="h-12 w-12 text-primary" />
                                          </div>

                                          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                                Ready to Start Your Project?
                                          </h3>

                                          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                                                Let's discuss your ideas and create something amazing together.
                                                Our team is ready to bring your vision to life with innovative solutions.
                                          </p>

                                          <motion.a
                                                href="#contact"
                                                className="btn-primary px-8 py-4 text-lg font-medium inline-flex items-center gap-3"
                                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 138, 0, 0.4)" }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label="Contact our team"
                                          >
                                                Start Your Project Today
                                                <TrendingUp className="h-5 w-5" />
                                          </motion.a>
                                    </motion.div>
                              </div>
                        </motion.div>
                  </div>

                  {/* Project Modal */}
                  <ProjectModal
                        project={selectedProject}
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                  />
            </section>
      );
};

export default Portfolio;