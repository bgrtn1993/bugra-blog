import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ExperienceCard from '../components/ExperienceCard';
import { useLanguage } from '../context/LanguageContext';

const ExperiencePage = () => {
    const { t } = useLanguage();
    const experiences = t('experiencePage.experiences');

    return (
        <AnimatedPage id="experience" direction="right" className="bg-gray-800 rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{t('experiencePage.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="flex items-stretch "
                    >
                        <ExperienceCard {...exp} />
                    </motion.div>
                ))}
            </div>
        </AnimatedPage>
    );
};

export default ExperiencePage;
