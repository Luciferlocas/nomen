import { ReactNode } from "react";

export interface ResumeData {
  name: string;
  location: string;
  phone: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    leetcode: string;
    codeforces: string;
  };
  education: Array<{
    institution: string;
    location: string;
    degree: string;
    period: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    name: string;
    technologies: string;
    period?: string;
    link?: string;
    details: string[];
  }>;
  skills: {
    languages: string[];
    technologies: string[];
    tools: string[];
  };
  achievements: string[];
}

export interface Info {
  name: string;
  slug: string;
  domain: string;
  description: string;
  quote: string;
  about: string;
  avatar?: string;
  background?: string;
}

export interface Button{
  icon?: ReactNode;
  title?: string;
}