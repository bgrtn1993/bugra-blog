import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const { t } = useLanguage();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const FORM_ENDPOINT = "https://formspree.io/f/mgvyynwd";

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitMessage('success');
                setFormData({name: '', email: '', subject: '', message: ''});
                console.log("Mail başarıyla gönderildi!");
            } else {
                const errorData = await response.json();
                setSubmitMessage('error');
                console.error("Formspree hatası:", errorData);
            }
        } catch (error) {
            setSubmitMessage('error');
            console.error("Form gönderimi sırasında bir ağ hatası oluştu:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatedPage id="contact" direction="left" className="bg-gray-800 rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{t('contactPage.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="bg-gray-700 p-8 rounded-lg shadow-md border border-gray-600"
                >
                    <h3 className="text-2xl font-semibold text-teal-300 mb-6">{t('contactPage.contactFormTitle')}</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">{t('contactPage.nameLabel')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">{t('contactPage.emailLabel')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">{t('contactPage.subjectLabel')}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">{t('contactPage.messageLabel')}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="shadow appearance-none border border-gray-600 rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 focus:border-teal-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? t('contactPage.sendingButton') : t('contactPage.sendButton')}
                        </button>
                        {submitMessage && (
                            <p className={`mt-4 text-center ${submitMessage.includes('hata') || submitMessage.includes('error')  ? 'text-red-400' : 'text-green-400'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col items-center justify-center text-center p-8 bg-gray-700 rounded-lg shadow-md border border-gray-600"
                >
                    <h3 className="text-2xl font-semibold text-teal-300 mb-6">{t('contactPage.socialMediaTitle')}</h3>
                    <div className="flex space-x-6 mb-8">
                        <a href="https://github.com/bugratuna" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
                            <Github size={48} />
                        </a>
                        <a href="https://www.linkedin.com/in/bugratuna/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
                            <Linkedin size={48} />
                        </a>
                    </div>
                    <p className="text-lg text-gray-300 mb-2">
                        Email: <a href="mailto:bugratuna.ts@gmail.com" className="text-teal-400 hover:underline">bugratuna.ts@gmail.com</a>
                    </p>
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default ContactPage;
