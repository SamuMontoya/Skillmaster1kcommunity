export interface Skill {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  objectives: string[];
  careerPaths: string[];
}

export interface Challenge {
  skillId: string;
  hoursCompleted: number;
  startedAt: Date;
}
