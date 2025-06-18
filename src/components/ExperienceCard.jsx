import React from 'react';

const ExperienceCard = ({ position, company, duration, description, technologies }) => {
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-600">
            <h3 className="text-xl font-semibold text-teal-300">{position}</h3>
            <p className="text-gray-200 mt-1">{company} <span className="text-gray-400 text-sm">({duration})</span></p>
            <ul className="list-disc ps-5 text-gray-300 mt-4 space-y-2">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-teal-600 bg-opacity-30 text-teal-200 text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
