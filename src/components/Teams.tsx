import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Star, Phone, Mail } from 'lucide-react';

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.1, delay: index * 0.05 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 text-center"
        >
            <div className="flex justify-center mb-6">
                <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover border-4 border-gradient-primary shadow-md"
                />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
            <p className="text-primary font-semibold mb-2">{member.role}</p>

            <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>


            <div className="flex justify-center gap-4 mt-4">
                {member.contact.email && (
                    <a href={`mailto:${member.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                    </a>
                )}
                {member.contact.phone && (
                    <a href={`tel:${member.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-5 w-5" />
                    </a>
                )}
                {member.contact.linkedin && (
                    <a href={member.contact.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Star className="h-5 w-5" />
                    </a>
                )}
            </div>
        </motion.div>
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
            image: "",
            contact: {
                email: "",
                phone: "",
                linkedin: ""
            }
        },
        {
            name: "Ravi Prakash Pandey",
            role: "CEO",
            experience: "12+ years in web technologies, ERP & CRM solutions",
            bio: "Expert in modern web technologies, ERP & CRM customization and Mobile App Development.",
            image: "",
            contact: {
                email: "",
                phone: "",
                linkedin: ""
            }
        },
        {
            name: "Ansh Malhotra",
            role: "COO",
            experience: "10+ years in operations & process optimization",
            bio: "Operations expert dedicated to optimizing processes and enhancing team performance to achieve business goals efficiently.",
            image: "",
            contact: {
                email: "",
                phone: "",
                linkedin: ""
            }
        }

    ];

    return (
        <section id="team" className="section-padding bg-background">
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
                        Meet Our <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A group of passionate professionals committed to delivering top-notch digital solutions.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.2, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-hero p-12 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-6">We bring expertise, collaboration, and commitment to every project.</h3>
                        {/* <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            We bring expertise, collaboration, and commitment to every project.
                        </p> */}
                        <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;