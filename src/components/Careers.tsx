import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Users, Award, TrendingUp } from "lucide-react";

interface Job {
    id: string; // Added unique ID
    title: string;
    location: string;
    type: string;
    posted: string;
    description?: string; // Added optional description for SEO
}

const JobCard = ({ job, index }: { job: Job; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="flex flex-col justify-between bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] min-h-[280px] border border-border/20 hover:border-primary/30"
            aria-labelledby={`job-title-${job.id}`}
        >
            <div>
                <h3
                    id={`job-title-${job.id}`}
                    className="text-2xl font-bold text-foreground mb-3"
                >
                    {job.title}
                </h3>
                {job.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4 flex-shrink-0" />
                        {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        {job.posted}
                    </span>
                </div>
            </div>

            <motion.button
                onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary py-2 px-6 text-sm mt-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Apply for ${job.title} position`}
            >
                Apply Now
            </motion.button>
        </motion.article>
    );
};

const Careers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const jobOpenings: Job[] = [
        {
            id: "frontend-developer",
            title: "Frontend Developer",
            location: "Remote",
            type: "Full-time",
            posted: "2 days ago",
            description: "Build responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks."
        },
        {
            id: "backend-developer",
            title: "Backend Developer",
            location: "Gurgaon, India",
            type: "Full-time",
            posted: "5 days ago",
            description: "Develop scalable server-side applications and APIs using Node.js, Python, or Java."
        },
        {
            id: "ui-ux-designer",
            title: "UI/UX Designer",
            location: "Remote",
            type: "Contract",
            posted: "1 week ago",
            description: "Create intuitive and visually appealing user interfaces and user experiences for web and mobile applications."
        },
        {
            id: "project-manager",
            title: "Project Manager",
            location: "Delhi, India",
            type: "Full-time",
            posted: "3 days ago",
            description: "Lead and coordinate software development projects from conception to delivery, ensuring quality and timely completion."
        },
    ];

    // 🔥 Job Posting Schema Markup (for each job)
    const jobSchemas = jobOpenings.map(job => ({
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description || `Join our team as a ${job.title} at TechCorp. We're looking for talented professionals to help us build innovative solutions.`,
        "datePosted": new Date(Date.now() - parseInt(job.posted) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        "employmentType": job.type,
        "hiringOrganization": {
            "@type": "Organization",
            "name": "AnPrax", // Update with your actual company name
            "sameAs": "https://official.anprax.com" // Update with your actual URL
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location.includes("India") ? job.location.split(',')[0] : job.location,
                "addressCountry": job.location.includes("India") || job.location === "Remote" ? "IN" : "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": 500000,
                "maxValue": 1500000,
                "unitText": "YEAR"
            }
        }
    }));

    return (
        <section
            id="careers"
            className="section-padding bg-background relative overflow-hidden"
            aria-labelledby="careers-heading"
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
                        <span className="text-sm font-medium">Join Our Team</span>
                    </motion.div>

                    <h2
                        id="careers-heading"
                        className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        Join Our <span className="text-gradient">Team</span>
                    </h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Explore our current job openings and be a part of our dynamic team of
                        passionate professionals building innovative digital solutions.
                    </motion.p>
                </motion.div>

                {/* Job Cards */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {jobOpenings.map((job, index) => (
                        <JobCard key={job.id} job={job} index={index} />
                    ))}
                </div>

                {/* 🔥 SEO Schema Markup - Add to your main layout's <head> */}
                {jobSchemas.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        className="sr-only"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}

                {/* 🔥 SEO-Friendly Hidden Content */}
                <div className="sr-only" aria-hidden="true">
                    <h3>Current Job Openings at TechCorp:</h3>
                    <ul>
                        {jobOpenings.map((job) => (
                            <li key={job.id}>
                                <strong>{job.title}</strong> - {job.type} position in {job.location}.
                                {job.description && ` ${job.description}`}
                                Posted: {job.posted}.
                            </li>
                        ))}
                    </ul>
                    <p>
                        TechCorp is hiring talented professionals for various roles including
                        frontend developers, backend developers, UI/UX designers, and project managers.
                        We offer competitive salaries, flexible work arrangements, and opportunities
                        for professional growth in a dynamic and innovative environment.
                    </p>
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
                                <Award className="h-12 w-12 text-primary" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Ready to Join Our Team?
                            </h3>

                            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                                If you're passionate about technology and innovation, we'd love to hear from you.
                                Reach out to us and start your journey with a team that values creativity,
                                collaboration, and excellence.
                            </p>

                            <motion.a
                                href="#contact"
                                className="btn-primary px-8 py-4 text-lg font-medium inline-flex items-center gap-3"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 138, 0, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Contact our team"
                            >
                                Get in Touch
                                <TrendingUp className="h-5 w-5" />
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Careers;