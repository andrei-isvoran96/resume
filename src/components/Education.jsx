import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Link as LinkIcon } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="h-full">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="h-[1px] flex-1 bg-slate-800" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 rounded-3xl h-full hover:border-primary-500/30 transition-all duration-300 group will-change-transform"
            >
                <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <GraduationCap size={32} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">Politehnica University of Timisoara</h3>
                        <h4 className="text-lg text-primary-400 mb-4">BS in Computer Science</h4>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50">
                                <Calendar size={14} />
                                <span>2015 - 2019</span>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                Bachelor of Science
                            </div>
                        </div>

                        <a
                            href="https://www.upt.ro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
                        >
                            <LinkIcon size={14} className="group-hover/link:rotate-45 transition-transform" />
                            <span>upt.ro</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
