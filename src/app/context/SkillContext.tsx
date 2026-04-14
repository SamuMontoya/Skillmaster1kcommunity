import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Skill, Challenge } from '../types/skill';
import { initialSkills } from '../data/skills';

interface SkillContextType {
  skills: Skill[];
  challenges: Challenge[];
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Omit<Skill, 'id'>) => void;
  deleteSkill: (id: string) => void;
  activateSkill: (skillId: string) => void;
  deactivateSkill: (skillId: string) => void;
  updateProgress: (skillId: string, hours: number) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export function SkillProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>(() => {
    const stored = localStorage.getItem('skillmaster-skills');
    return stored ? JSON.parse(stored) : initialSkills;
  });

  const [challenges, setChallenges] = useState<Challenge[]>(() => {
    const stored = localStorage.getItem('skillmaster-challenges');
    return stored ? JSON.parse(stored).map((c: Challenge) => ({
      ...c,
      startedAt: new Date(c.startedAt)
    })) : [];
  });

  useEffect(() => {
    localStorage.setItem('skillmaster-skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('skillmaster-challenges', JSON.stringify(challenges));
  }, [challenges]);

  const addSkill = (skillData: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skillData,
      id: Date.now().toString()
    };
    setSkills(prev => [...prev, newSkill]);
  };

  const updateSkill = (id: string, skillData: Omit<Skill, 'id'>) => {
    setSkills(prev => prev.map(skill => 
      skill.id === id ? { ...skillData, id } : skill
    ));
  };

  const deleteSkill = (id: string) => {
    setSkills(prev => prev.filter(skill => skill.id !== id));
    deactivateSkill(id);
  };

  const activateSkill = (skillId: string) => {
    if (challenges.find(c => c.skillId === skillId)) return;
    
    const newChallenge: Challenge = {
      skillId,
      hoursCompleted: 0,
      startedAt: new Date()
    };
    setChallenges(prev => [...prev, newChallenge]);
  };

  const deactivateSkill = (skillId: string) => {
    setChallenges(prev => prev.filter(c => c.skillId !== skillId));
  };

  const updateProgress = (skillId: string, hours: number) => {
    setChallenges(prev => prev.map(challenge =>
      challenge.skillId === skillId
        ? { ...challenge, hoursCompleted: hours }
        : challenge
    ));
  };

  return (
    <SkillContext.Provider value={{
      skills,
      challenges,
      addSkill,
      updateSkill,
      deleteSkill,
      activateSkill,
      deactivateSkill,
      updateProgress
    }}>
      {children}
    </SkillContext.Provider>
  );
}

export function useSkills() {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error('useSkills must be used within SkillProvider');
  }
  return context;
}
