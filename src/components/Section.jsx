import React from 'react';
import { motion, useInView } from 'framer-motion';

const Section = ({ id, children, sectionRef, fromDirection }) => {
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const variants = {
        hidden: { opacity: 0, x: fromDirection === 'left' ? -100 : fromDirection === 'right' ? 100 : 0 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            id={id}
            ref={sectionRef}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="min-h-screen py-20 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16"
        >
            <div className="max-w-4xl w-full text-center">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;