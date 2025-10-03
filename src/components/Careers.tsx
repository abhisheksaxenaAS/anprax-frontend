import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Job {
    title: string;
    location: string;
    type: string;
    posted: string;
}

const JobCard = ({ job, index }: { job: Job; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="flex flex-col justify-between bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] min-h-[280px]"
        >
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {job.posted}
                    </span>
                </div>
            </div>

            <button
                onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary py-2 px-6 text-sm mt-auto"
            >
                Apply Now
            </button>
        </motion.div>
    );
};

const Careers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const jobOpenings: Job[] = [
        { title: "Frontend Developer", location: "Remote", type: "Full-time", posted: "2 days ago" },
        { title: "Backend Developer", location: "Gurgaon, India", type: "Full-time", posted: "5 days ago" },
        { title: "UI/UX Designer", location: "Remote", type: "Contract", posted: "1 week ago" },
        { title: "Project Manager", location: "Delhi, India", type: "Full-time", posted: "3 days ago" },
    ];

    return (
        <section id="careers" className="section-padding bg-background">
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
                        Join Our <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explore our current job openings and be a part of our dynamic team.
                    </p>
                </motion.div>

                {/* Job Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {jobOpenings.map((job, index) => (
                        <JobCard key={index} job={job} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-hero p-12 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-6">Ready to Join Us?</h3>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            If you’re passionate about technology and innovation, reach out to us and start your journey today.
                        </p>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                const element = document.getElementById("contact");
                                if (element) element.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Apply Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Careers;
