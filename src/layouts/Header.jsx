import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Home as HomeIcon, Info, Briefcase, Code, Sparkles, Mail, Menu, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [navBackground, setNavBackground] = useState(false);
    const { language, t, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBackground(true);
            } else {
                setNavBackground(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: t('header.home'), id: 'home', icon: HomeIcon },
        { name: t('header.about'), id: 'about', icon: Info },
        { name: t('header.experience'), id: 'experience', icon: Briefcase },
        { name: t('header.projects'), id: 'projects', icon: Code },
        { name: t('header.skills'), id: 'skills', icon: Sparkles },
        { name: t('header.contact'), id: 'contact', icon: Mail },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between transition-colors duration-300 ${navBackground && !isMobileMenuOpen ? 'bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="text-xs lg:text-lg xl:text-2xl font-bold text-teal-400">
                <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setActiveLink('home')}>
                    BUĞRA TUNA
                </ScrollLink>
            </div>

            <nav className="hidden md:flex items-center space-x-8 relative">
                {navItems.map((item) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onSetActive={(to) => {
                            setActiveLink(to);
                        }}
                        spy={true}
                        className={`relative text-xs lg:text-lg xl:text-2xl font-medium text-gray-200 hover:text-teal-400 transition-colors duration-300 cursor-pointer group`}
                    >
                        {item.name}
                        {activeLink === item.id && (
                            <motion.span
                                layoutId="underline"
                                className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-400 rounded-full"
                            />
                        )}
                    </ScrollLink>
                ))}
                <a
                    href="https://medium.com/@bugratuna.ts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-xs lg:text-lg xl:text-2xl font-medium text-gray-200 hover:text-teal-400 transition-colors duration-300 cursor-pointer flex items-center gap-1"
                >
                    Blog <ExternalLink size={16} />
                </a>
                <div className="ml-4 flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-200 hover:text-teal-400 text-sm font-semibold py-1 px-3 rounded-md border border-gray-600 hover:border-teal-400 transition-colors duration-300"
                       style={{
                            backgroundColor: language === 'tr' ? '#1a1a1a' : '#2d3748',
                            borderColor: language === 'tr' ? '#646cff' : '#4a5568',
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            padding: '0.6em 1.2em',
                            fontSize: '1em',
                            fontWeight: '500',
                            fontFamily: 'inherit',
                            transition: 'border-color 0.25s',
                        }}
                    >
                        {language === 'tr' ? 'TR' : 'EN'}
                    </button>
                </div>
            </nav>

            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-200 hover:text-teal-400 transition-colors duration-300 p-2 rounded-md"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray-900 bg-opacity-95 z-[100] flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-gray-200 hover:text-teal-400 p-2 rounded-md"
                        >
                            <X size={32} />
                        </button>
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.id}
                                to={item.id}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => {
                                    setActiveLink(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-3xl font-semibold text-gray-200 hover:text-teal-400 transition-colors duration-300 cursor-pointer flex items-center gap-3"
                            >
                                <item.icon size={28} /> {item.name}
                            </ScrollLink>
                        ))}
                        <a
                            href="https://medium.com/@bugratuna.ts"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-3xl font-semibold text-gray-200 hover:text-teal-400 transition-colors duration-300 cursor-pointer flex items-center gap-3"
                        >
                            <ExternalLink size={28} /> Blog
                        </a>
                        <div className="ml-4 flex items-center">
                            <button
                                onClick={toggleLanguage}
                                className="text-gray-200 hover:text-teal-400 text-sm font-semibold py-1 px-3 rounded-md border border-gray-600 hover:border-teal-400 transition-colors duration-300"
                                style={{
                                    backgroundColor: language === 'tr' ? '#1a1a1a' : '#2d3748',
                                    borderColor: language === 'tr' ? '#646cff' : '#4a5568',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    padding: '0.6em 1.2em',
                                    fontSize: '1em',
                                    fontWeight: '500',
                                    fontFamily: 'inherit',
                                    transition: 'border-color 0.25s',
                                }}
                            >
                                {language === 'tr' ? 'TR' : 'EN'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;