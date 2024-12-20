import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  barLength?: number;
  delay?: number;
}

interface Skill {
  name: string;
  level: number;
}

const AlignedSkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  level, 
  barLength = 50, 
  delay = 0 
}) => {
  const [displayed, setDisplayed] = useState<number>(0);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ref の現在の値をローカル変数に保存
    const currentRef = skillRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            let currentCount = 0;
            const interval = setInterval(() => {
              if (currentCount >= level) {
                clearInterval(interval);
              } else {
                currentCount += 2;
                setDisplayed(Math.min(currentCount, level));
              }
            }, 20);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [level, delay]);

  const paddedSkill = skill.padEnd(12, ' ');
  const progress = '#'.repeat(Math.floor(displayed * barLength / 100));
  const empty = ' '.repeat(barLength - Math.floor(displayed * barLength / 100));

  return (
    <div className="mb-8" ref={skillRef}>
      <pre className="font-mono text-2xl">
        <span className="text-white">{paddedSkill}</span>
        <span className="text-white">[</span>
        <span className="text-red-500">{progress}</span>
        <span className="text-gray-800">{empty}</span>
        <span className="text-white">] </span>
        <span className="text-white text-xl ml-4">{displayed}%</span>
      </pre>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 60 },
    { name: 'TypeScript', level: 60 },
    { name: 'C/C++', level: 40 },
    { name: 'Java', level: 50 },
  ];

  const barLength = 40;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl w-full p-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        <div>
          {skills.map((skill, index) => (
            <AlignedSkillBar
              key={skill.name}
              skill={skill.name}
              level={skill.level}
              barLength={barLength}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;