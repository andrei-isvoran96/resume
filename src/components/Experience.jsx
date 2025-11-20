import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

const ExperienceCard = ({ company, role, period, location, link, description, techStack, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative will-change-transform"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass-card p-8 rounded-3xl h-full border border-slate-800 hover:border-primary-500/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-bold text-white">{company}</h3>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                        <h4 className="text-xl font-medium text-primary-400">{role}</h4>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 text-sm text-slate-400 font-mono">
                        <div className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
                            {period}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {location}
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    {description.map((item, i) => (
                        <p key={i} className="text-slate-300 leading-relaxed flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                            {item}
                        </p>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-md bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-primary-500/20 group-hover:text-primary-400 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const jobs = [
        {
            company: "EPAM Systems",
            role: "Senior Fullstack Engineer",
            period: "Sep 2024 - Present",
            location: "Timisoara, Romania",
            link: "https://team.blue/",
            description: [
                "Modernizing a 20+ year old legacy PHP monolith into a scalable Java microservices architecture with React frontend.",
                "Architected a Drools-based validation engine for complex multi-brand account management flows.",
                "Led the integration with eCollect debt collection system, improving revenue recovery."
            ],
            techStack: ["Java 21", "Spring Boot", "React", "K8s", "PostgreSQL", "RabbitMQ"]
        },
        {
            company: "EPAM Systems",
            role: "Senior Software Engineer",
            period: "Jul 2023 - Sep 2024",
            location: "Timisoara, Romania",
            link: "https://www.linkedin.com/company/knecon-ag/",
            description: [
                "Built 'RedactManager', a robust secure document redaction platform.",
                "Designed a custom Drools system enabling user-defined logic for PDF management.",
                "Implemented ML research papers for header/footer detection, achieving 98% accuracy."
            ],
            techStack: ["Java 17", "AWS S3", "OCR", "PDFBox", "Keycloak", "Angular"]
        },
        {
            company: "EPAM Systems",
            role: "Software Engineer",
            period: "Aug 2021 - Jul 2023",
            location: "Timisoara, Romania",
            link: "https://www.wayfair.com/",
            description: [
                "Developed an internal observability platform for Wayfair providing visibility into 1000+ microservices.",
                "Aggregated data from Kibana, Datadog, and SonarQube to rank service health and detect faults.",
                "Created a graph visualization system to map inter-service dependencies."
            ],
            techStack: ["Java 17", "GraphQL", "Kafka", "Docker", "Datadog", "PostgreSQL"]
        },
        {
            company: "Canon",
            role: "Software Engineer",
            period: "Aug 2019 - Jun 2021",
            location: "Timisoara, Romania",
            link: "https://cpp.canon/",
            description: [
                "Contributed to PRISMASync controller, a high-performance printing workflow management software.",
                "Optimized job scheduling and task management algorithms."
            ],
            techStack: ["C++", "C#", "Python", "Embedded Systems"]
        },
        {
            company: "Lasting Software",
            role: "Software Engineer",
            period: "Jun 2018 - Aug 2019",
            location: "Timisoara, Romania",
            link: "https://www.lasting.space/",
            description: [
                "Developed a comprehensive test automation tool in Java to streamline QA processes."
            ],
            techStack: ["Java", "Selenium", "Test Automation"]
        }
    ];

    return (
        <section id="experience" className="relative">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] flex-1 bg-gradient-to-l from-slate-800 to-transparent" />
                <h2 className="text-4xl md:text-5xl font-bold text-white text-right">
                    Professional <span className="text-gradient">Journey</span>
                </h2>
            </div>

            <div className="space-y-8">
                {jobs.map((job, index) => (
                    <ExperienceCard
                        key={index}
                        {...job}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
