
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, ChevronDown, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Header = () => {
    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-40 h-40 rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-800 overflow-hidden">
                            <img
                                src={profileImage}
                                alt="Andrei Isvoran"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                            ANDREI
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-800">
                            ISVORAN
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-[1px] w-12 bg-slate-700" />
                        <span className="text-xl md:text-2xl text-primary-400 font-light tracking-widest uppercase">
                            Senior Software Engineer
                        </span>
                        <div className="h-[1px] w-12 bg-slate-700" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 text-slate-400 mb-12"
                    >
                        <a href="mailto:isvoranandrei96@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors px-4 py-2 rounded-full border border-slate-800 hover:border-primary-500/50 hover:bg-primary-500/10">
                            <Mail size={18} />
                            <span>isvoranandrei96@gmail.com</span>
                        </a>
                        <a href="tel:+40745106316" className="flex items-center gap-2 hover:text-primary-400 transition-colors px-4 py-2 rounded-full border border-slate-800 hover:border-primary-500/50 hover:bg-primary-500/10">
                            <Phone size={18} />
                            <span>+40 745 106 316</span>
                        </a>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50">
                            <MapPin size={18} className="text-accent-400" />
                            <span>Timisoara, Romania</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="flex gap-6 relative z-20"
                    >
                        <SocialLink href="https://www.linkedin.com/in/andrei-isvoran-58152a177/" icon={Linkedin} />
                        <SocialLink href="https://github.com/andrei-isvoran96" icon={Github} />
                        <a
                            href="Andrei-Isvoran-CV.pdf"
                            download
                            className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group"
                            title="Download CV"
                        >
                            <FileDown size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 z-10"
            >
                <ChevronDown size={32} />
            </motion.div>
        </header>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 group"
    >
        <Icon size={24} className="group-hover:scale-110 transition-transform" />
    </a>
);

export default Header;
