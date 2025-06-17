import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 py-8 px-6 md:px-12 text-center text-gray-400 border-t border-gray-700 mt-16">
            <p className="mb-4">
                &copy; 2025 {t('footer.copyright')}
            </p>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://github.com/bgrtn1993" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/bugratuna/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                    <Linkedin size={24} />
                </a>
            </div>
            <p className="text-sm">
                {t('footer.designBy')}
            </p>
        </footer>
    );
};

export default Footer;
