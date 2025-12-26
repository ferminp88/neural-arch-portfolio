
export type Language = 'es' | 'en';

export interface MultilingualText {
  es: string;
  en: string;
}

export interface Project {
  id: string;
  title: string;
  category: MultilingualText;
  year: string;
  description: MultilingualText;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Core' | 'Vision' | 'Tech';
}

export enum Section {
  Hero = 'hero',
  Manifesto = 'manifesto',
  Projects = 'projects',
  Skills = 'skills',
  AI = 'ai',
  Contact = 'contact'
}
