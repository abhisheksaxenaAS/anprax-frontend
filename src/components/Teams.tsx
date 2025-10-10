import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiTrendingUp } from 'react-icons/fi';

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Fallback image for missing images
    const getProfileImage = (image: string) => {
        if (image && image.trim()) {
            return image.trim();
        }
        return "https://via.placeholder.com/200x200?text=Profile+Image";
    };

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 text-center border border-border/20 hover:border-primary/30"
            aria-labelledby={`team-member-${member.name.replace(/\s+/g, '-')}`}
        >
            <div className="flex justify-center mb-6">
                <img
                    src={getProfileImage(member.image)}
                    alt={`${member.name}, ${member.role} at AnPrax`}
                    className="h-24 w-24 rounded-full object-cover border-4 border-gradient-primary shadow-md"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <h3
                id={`team-member-${member.name.replace(/\s+/g, '-')}`}
                className="text-2xl font-bold text-foreground mb-2"
            >
                {member.name}
            </h3>
            <p className="text-primary font-semibold mb-2">{member.role}</p>

            <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

            {/* Contact Information - Only show if available */}
            {(member.contact.email || member.contact.phone || member.contact.linkedin) && (
                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-border/20">
                    {member.contact.email && (
                        <a
                            href={`mailto:${member.contact.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                            aria-label={`Email ${member.name}`}
                        >
                            <FiMail className="h-5 w-5" />
                        </a>
                    )}
                    {member.contact.phone && (
                        <a
                            href={`tel:${member.contact.phone}`}
                            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                            aria-label={`Call ${member.name}`}
                        >
                            <FiPhone className="h-5 w-5" />
                        </a>
                    )}
                    {member.contact.linkedin && (
                        <a
                            href={member.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                            aria-label={`${member.name} on LinkedIn`}
                        >
                            <FiLinkedin className="h-5 w-5" />
                        </a>
                    )}
                </div>
            )}
        </motion.article>
    );
};

const Team = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const teamMembers = [
        {
            name: "Rajesh Malhotra",
            role: "Founder",
            experience: "15+ years of experience in IT & business leadership",
            bio: "Visionary entrepreneur with a passion for technology and innovation, driving the company's mission to deliver cutting-edge digital solutions.",
            image: "", // Add actual image URL when available
            contact: {
                email: "", // Add actual email
                phone: "", // Add actual phone
                linkedin: "" // Add actual LinkedIn
            }
        },
        {
            name: "Ravi Prakash Pandey",
            role: "CEO",
            experience: "12+ years in web technologies, ERP & CRM solutions",
            bio: "Expert in modern web technologies, ERP & CRM customization and Mobile App Development.",
            image: "",
            contact: {
                email: "", // Add actual email
                phone: "", // Add actual phone
                linkedin: "" // Add actual LinkedIn
            }
        },
        {
            name: "Ansh Malhotra",
            role: "COO",
            experience: "10+ years in operations & process optimization",
            bio: "Operations expert dedicated to optimizing processes and enhancing team performance to achieve business goals efficiently.",
            image: "",
            contact: {
                email: "", // Add actual email
                phone: "", // Add actual phone
                linkedin: "" // Add actual LinkedIn
            }
        }
    ];

    return (
        <section
            id="team"
            className="section-padding bg-background relative overflow-hidden"
            aria-labelledby="team-heading"
        >
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.02, 0.04, 0.02]
                    }}
                    transition={{
                        duration: 12,
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
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Header with enhanced styling */}
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
                        <FiUsers className="w-4 h-4" />
                        <span className="text-sm font-medium">Leadership Team</span>
                    </motion.div>

                    <h2
                        id="team-heading"
                        className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        Meet Our <span className="text-gradient">Expert Team</span>
                    </h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Our leadership team brings decades of combined experience in technology,
                        business strategy, and digital innovation to deliver exceptional results for our clients.
                    </motion.p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.name} member={member} index={index} />
                    ))}
                </div>

                {/* SEO-Friendly Hidden Content */}
                <div className="sr-only">
                    <h3>Our Leadership Team at AnPrax:</h3>
                    <ul>
                        {teamMembers.map((member) => (
                            <li key={member.name}>
                                <strong>{member.name}</strong> - {member.role}.
                                {member.experience} {member.bio}
                                {member.contact.email && ` Contact: ${member.contact.email}`}
                                {member.contact.phone && ` Phone: ${member.contact.phone}`}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
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
                                <FiAward className="h-12 w-12 text-primary" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Ready to Work With Our Experts?
                            </h3>

                            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                                Leverage our team's expertise to transform your business and achieve your digital goals.
                            </p>

                            <motion.a
                                href="#contact"
                                className="btn-primary px-8 py-4 text-lg font-medium inline-flex items-center gap-3"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 138, 0, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Contact our team"
                            >
                                Get in Touch
                                <FiTrendingUp className="h-5 w-5" />
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;