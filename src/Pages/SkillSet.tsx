import React from 'react';
import { allSkills } from '@/Data/All-Skills';
import "./SkillSet.css"

const SkillSet = () => {
  const DELAY_To_RENDER = 600;

  return (
    <div className="relative overflow-hidden h-full bg-gradient-to-r from-blue-300 to-blue-100">
      {/* SVG for lines */}
      <svg className="absolute inset-0 w-full h-full">
        {allSkills.map((skill, index) => {
          if (index === 0) return null;

          const previousSkill = allSkills[index - 1];
          const currentSkill = skill;

          return (
            <line
              key={index}
              x1={`${previousSkill.position.x + 3}%`}
              y1={`${100 - previousSkill.position.y - 3}%`}
              x2={`${currentSkill.position.x + 3}%`}
              y2={`${100 - currentSkill.position.y - 4}%`}
              stroke={skill.color}
              strokeWidth="2"
              style={{
                opacity: 0,
                animation: `drawLine 700ms ease-in-out forwards ${index * DELAY_To_RENDER - DELAY_To_RENDER}ms`,
              }}
            />
          );
        })}

        {/* Line connecting the first skill to the last skill */}
        {allSkills.length > 1 && (
          <line
            x1={`${allSkills[0].position.x + 3}%`}
            y1={`${100 - allSkills[0].position.y - 3}%`}
            x2={`${allSkills[allSkills.length - 1].position.x + 3}%`}
            y2={`${100 - allSkills[allSkills.length - 1].position.y - 4}%`}
            stroke={allSkills[0].color}
            strokeWidth="2"
            style={{
              opacity: 0,
              animation: `drawLine 700ms ease-in-out forwards ${allSkills.length * DELAY_To_RENDER}ms`,
            }}
          />
        )}
      </svg>

      {/* Render the skill icons */}
      {allSkills.map((skill, index) => {
        const Logo = skill.logo;
        return (
          <div
            key={index}
            className="absolute Skill p-3 bg-blue-100 rounded-full"
            style={{
              border: '2px solid #a0a0a0',
              boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.5), inset 1px 1px 3px rgba(255, 255, 255, 0.8)',
              bottom: `${skill.position.y - 1}%`,
              left: `${skill.position.x}%`,
              transform: 'translate(100%, 50%)',
              opacity: 0,
              animation: `fadeIn 400ms ease-in-out forwards ${index * DELAY_To_RENDER}ms`,
            }}
          >
            <Logo
              size={skill.size}
              fill={skill.color}
              className="rounded stroke-black transition-transform duration-300"
              style={{
                transform: `scale(1)`,
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${(skill.size + 10) / skill.size})`}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkillSet;
