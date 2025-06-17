import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext.jsx';

const HomePage = () => {
    const { t } = useLanguage();
    return (
        <section id="home" className="min-h-screen flex items-center justify-center  rounded-lg py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-gray-800 mb-16 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 max-w-7xl mx-auto ">
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                    >
                        {t('homePage.greeting')} <span className="text-teal-400">Buğra Tuna</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0"
                    >
                        {t('homePage.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            {t('homePage.contactButton')}
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="inline-block bg-transparent border-2 border-teal-500 text-teal-300 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white cursor-pointer">
                            {t('homePage.projectsButton')}
                        </ScrollLink>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-teal-500"
                >
                    <img
                        src="bugra-profile-photo.jfif"
                        alt="Buğra Tuna Profil Fotoğrafı"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-teal-400 animate-pulse-slow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;
