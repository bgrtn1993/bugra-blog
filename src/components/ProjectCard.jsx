import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, image, githubText, demoLinkText }) => {
    return (
        <div className="bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-600 overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-300">{title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-600 bg-opacity-30 text-purple-200 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
                    ))}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white bg-gray-600 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300 flex items-center gap-1">
                            <Github size={20} />  {githubText}
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition-colors duration-300 flex items-center gap-1">
                            <ExternalLink size={20} /> {demoLinkText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
