import React, { useState } from 'react';
import Image from 'next/image'; 
import { ProjectsData } from '@/Data/Projects';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-300 text-black shadow-[4px_4px_0px_0px] p-8 ">
      <h2 className="text-3xl font-bold mb-6 p-2 text-center bg-gray-200 rounded border border-gray-400 shadow-md">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-4 relative">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="relative w-[13rem] h-[13rem] bg-[#b1b1b1] hover:bg-[#9b9b9b] rounded-lg shadow-[3px_3px_0px_0px] border border-gray-400 flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={project.image}
                alt={`${project.name} image`}
                layout="fill"
                objectFit="cover"
                className={`transition-opacity duration-300 ${!(hoveredProject === index) ? 'brightness-105 grayscale-[100%]' : 'brightness-105'}`}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <h3
                className={`text-xl font-bold bg-gray-300 p-1 rounded text-center transition-transform duration-500 ${hoveredProject === index ? 'animate-nameUp' : ''}`}
                style={{ color: '#003366', fontFamily: 'Tahoma, sans-serif' }} 
              >
                {project.name}
              </h3>
              <div className='p-2'>
                {hoveredProject === index && (
                  <p className={`text-xs text-center font-semibold text-black p-1 w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-[3px] bg-opacity-10 border border-black transition-opacity duration-500 ${hoveredProject === index ? 'animate-descriptionFade' : ''}`}>
                    {project.description.length > 40
                      ? `${project.description.substring(0, 180)}...`
                      : project.description}
                    {project.description.length > 40 && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:text-blue-600 ml-2"
                      >
                        See more...
                      </a>
                    )}
                    <a href={project.link} target='_blank'>
                      <FaGithub size={20} className='hover:fill-blue-600' />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes nameUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes descriptionFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-nameUp {
          animation: nameUp 0.3s alternate;
        }

        .animate-descriptionFade {
          animation: descriptionFade 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;
