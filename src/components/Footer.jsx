import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative mt-32 border-t border-slate-800 bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="flex gap-8 mb-8">
                        <SocialLink href="https://www.linkedin.com/in/andrei-isvoran-58152a177/" icon={Linkedin} />
                        <SocialLink href="https://github.com/andrei-isvoran96" icon={Github} />
                        <SocialLink href="mailto:isvoranandrei96@gmail.com" icon={Mail} />
                    </div>

                    <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
                        © {new Date().getFullYear()} Andrei Isvoran. Crafted with <Heart size={12} className="text-red-500 fill-red-500" /> in React.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-primary-400 hover:scale-110 transition-all duration-300"
    >
        <Icon size={24} />
    </a>
);

export default Footer;
