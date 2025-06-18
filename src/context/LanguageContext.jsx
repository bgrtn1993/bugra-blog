import React, { createContext, useState, useContext } from 'react';
import localization from '../data/localization';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr');

    const t = (keyPath) => {
        const keys = keyPath.split('.');
        let text = localization[language];
        for (const key of keys) {
            if (text && text[key] !== undefined) {
                text = text[key];
            } else {
                console.warn(`Translation not found for: ${keyPath} in ${language}`);
                return keyPath;
            }
        }
        return text;
    };

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
