import React from 'react';
import { Experiences } from '@/Data/Experience';

const Experience = () => {
  return (
    <div className="p-4 min-h-fit bg-[#e5e5cb] border border-[#b1b1b1] flex flex-col gap-5 ">
      {Experiences.map((experience, index) => (
        <div key={index} className="relative mt-6 p-4 bg-[#f9f9df] rounded-sm border-2 border-[#8b8b71] shadow-md">
          <div className="absolute -top-5 text-xl font-bold bg-[#d1edc1] rounded-sm border-2 border-[#8b8b71] px-2 py-1 inline-block">
            {experience.title}
          </div>
          <ul className="list-disc ml-6 mt-3 text-[#4a4a38]">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
