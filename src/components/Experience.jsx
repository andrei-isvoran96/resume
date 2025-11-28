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
            company: "EPAM / Team.Blue",
            role: "Senior Fullstack Software Engineer",
            period: "Sept 2024 - Present",
            location: "Timisoara, Romania",
            link: "https://team.blue/",
            description: [
                "Contributed to the company-wide migration of a 20+ year monolithic PHP platform into a modular Java microservices architecture, improving maintainability and deployment reliability.",
                "Led the design and implementation of a Drools-based validation engine supporting multi-brand account creation flows, reducing onboarding inconsistencies.",
                "Integrated with eCollect to automate debt recovery processes, reducing manual intervention and speeding up unpaid invoice handling."
            ],
            techStack: ["Java", "Spring Boot", "React", "Kubernetes", "PostgreSQL", "RabbitMQ"]
        },
        {
            company: "EPAM / Knecon AG",
            role: "Senior Software Engineer",
            period: "Jul 2023 - Sept 2024",
            location: "Timisoara, Romania",
            link: "https://www.linkedin.com/company/knecon-ag/",
            description: [
                "Built a redaction management platform (RedactManager) used for secure PDF operations.",
                "Architected a Drools system enabling dynamic, user-defined rule execution.",
                "Implemented ML/algorithmic improvements achieving 98% accuracy in header/footer detection on thousands of PDFs.",
                "Mentored junior developers through code reviews and pair programming."
            ],
            techStack: ["Java", "AWS", "OCR", "PDFBox", "Keycloak", "Angular"]
        },
        {
            company: "EPAM / Wayfair",
            role: "Software Engineer",
            period: "Aug 2021 - Jul 2023",
            location: "Timisoara, Romania",
            link: "https://www.wayfair.com/",
            description: [
                "Designed and delivered an internal visibility platform processing data from 1000+ microservices, improving fault detection speed across teams.",
                "Unified observability data from Kibana, Datadog, Sonarqube, and GitHub, reducing time-to-diagnose incidents by enabling a single-pane-of-glass view.",
                "Built a graph-based system mapping interservice dependencies, accelerating root-cause analysis during outages."
            ],
            techStack: ["Java", "GraphQL", "Kafka", "Docker", "Datadog", "PostgreSQL"]
        },
        {
            company: "Canon",
            role: "Software Engineer",
            period: "Aug 2019 - Jun 2021",
            location: "Timisoara, Romania",
            link: "https://cpp.canon/",
            description: [
                "Enhanced PRISMASync, Canon's professional printing workflow solution, improving reliability and user productivity.",
                "Developed workflow orchestration features including job scheduling, task creation, and automation flows used across enterprise printing environments."
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
                "Built a Java-based automated testing platform that reduced manual QA efforts and improved regression reliability.",
                "Implemented core test execution and reporting components used across multiple internal projects."
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
