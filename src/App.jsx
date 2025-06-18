import React from 'react';
import Header from './layouts/Header';
import PageScrollIndicator from './components/PageScrollIndicator';
import Footer from './layouts/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';
import {LanguageProvider} from "./context/LanguageContext.jsx";

const App = () => {
    return (
        <LanguageProvider>
            <div className="App  text-gray-100 min-h-screen flex flex-col font-inter">
                <PageScrollIndicator />
                <Header />
                <main className="flex-grow pt-20">
                    <video autoPlay loop muted className="video-background">
                        <source src="/background.mp4" type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                    <HomePage />
                    <AboutPage />
                    <ExperiencePage />
                    <ProjectsPage />
                    <SkillsPage />
                    <ContactPage />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;
