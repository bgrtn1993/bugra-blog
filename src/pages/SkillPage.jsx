import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { AppWindow, Code, Hammer, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SkillsPage = () => {
    const { t } = useLanguage();
    const skillsCategories = t('skillsPage.skillCategories');

    const iconMap = {
        Hammer: Hammer,
        AppWindow: AppWindow,
        Code: Code,
        Info: Info,
    };

    return (
        <AnimatedPage id="skills" direction="right" className="bg-gray-800 rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{t('skillsPage.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {skillsCategories.map((category, catIndex) => {
                    const IconComponent = iconMap[category.icon] || Info;
                    return(
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: catIndex * 0.15 }}
                            className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <IconComponent size={28} className="text-teal-400" />
                                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="bg-blue-600 bg-opacity-30 text-blue-200 text-sm px-4 py-2 rounded-full">
                      {skill}
                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )})}
            </div>
        </AnimatedPage>
    );
};

export default SkillsPage;
