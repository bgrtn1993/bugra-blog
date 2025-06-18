import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();
    return (
        <AnimatedPage id="about" direction="left" className="bg-gray-800 rounded-lg shadow-xl mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{t('aboutPage.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed space-y-4"
                >
                    <p>{t('aboutPage.paragraph1')}</p>
                    <p>{t('aboutPage.paragraph2')}</p>
                    <p>{t('aboutPage.paragraph3')}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex justify-center items-center"
                >
                    <img
                        src="about.png"
                        alt={t('aboutPage.imageAlt')}
                        className="rounded-lg shadow-xl max-w-full h-auto"
                    />
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default AboutPage;
