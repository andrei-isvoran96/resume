import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="h-full">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Featured Project</h2>
                <div className="h-[1px] flex-1 bg-slate-800" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="glass-card p-8 rounded-3xl h-full hover:border-primary-500/30 transition-all duration-300 group relative overflow-hidden will-change-transform"
            >
                <div className="absolute top-0 right-0 p-32 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/10 transition-colors duration-500" />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                            <FolderGit2 size={32} />
                        </div>
                        <a
                            href="https://andrei-isvoran96.github.io/sleek-pdf-builder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-300"
                        >
                            <ExternalLink size={20} />
                        </a>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">SleekResume</h3>
                    <h4 className="text-lg text-slate-400 mb-4">Modern Resume Builder</h4>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                        A modern and intuitive resume builder application that allows users to create professional resumes with a clean, sleek design and export them as PDF or PNG files.
                    </p>

                    <a
                        href="https://andrei-isvoran96.github.io/sleek-pdf-builder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-400 font-medium group/link cursor-pointer w-fit"
                    >
                        <span>View Project Details</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
