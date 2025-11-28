import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Database, CheckCircle2, Brain, Globe, Languages } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3 }}
        className="glass-card p-6 rounded-2xl hover:border-primary-500/30 transition-all duration-300 group will-change-transform"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-slate-800 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-lg shadow-primary-500/10">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-primary-500/30 hover:bg-primary-500/10 hover:text-primary-300 transition-all duration-200 cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Backend Development",
            icon: Server,
            skills: ["Java", "Spring Boot", "Hibernate", "JPA", "REST", "GraphQL", "Kafka", "RabbitMQ", "JMS"]
        },
        {
            title: "Frontend",
            icon: Globe,
            skills: ["React", "Tailwind CSS", "JavaScript/TypeScript"]
        },
        {
            title: "DevOps & Cloud",
            icon: Cloud,
            skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitLab CI/CD", "Helm", "Keycloak"]
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "Redis"]
        },
        {
            title: "Testing & QA",
            icon: CheckCircle2,
            skills: ["JUnit", "Mockito", "Testcontainers", "Karate"]
        },
        {
            title: "AI & Innovation",
            icon: Brain,
            skills: ["MCP", "Cursor", "Prompt Engineering"]
        },
        {
            title: "Other",
            icon: Languages,
            skills: ["OCR", "PDFBox", "PHP", "Groovy", "Python"]
        }
    ];

    return (
        <section id="skills" className="relative">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Technical <span className="text-gradient">Arsenal</span>
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <SkillCard
                        key={index}
                        {...category}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
