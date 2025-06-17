import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const ProjectsPage = () => {
    const { t } = useLanguage();
    const projects = t('projectsPage.projectCards');

    return (
        <AnimatedPage id="projects" direction="left" className="bg-gray-800 rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{t('projectsPage.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                        <ProjectCard
                            {...proj}
                             githubText={t('projectsPage.githubText')}
                             demoLinkText={t('projectsPage.liveDemoText')}
                        />
                    </motion.div>
                ))}
            </div>
        </AnimatedPage>
    );
};

export default ProjectsPage;
