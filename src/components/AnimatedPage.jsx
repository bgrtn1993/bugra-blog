import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children, direction = 'right', className = '', id }) => {
    const variants = {
        hidden: { opacity: 0, x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0, y: direction === 'up' ? 50 : 0 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedPage;
