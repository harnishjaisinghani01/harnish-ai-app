import React from 'react';

export interface Project {
    title: string;
    description: string;
    icon: React.ReactNode;
    techStack: string[];
    link?: string;
}

export interface ExperienceItem {
    date: string;
    title: string;
    company: string;
    description: string;
    points: string[];
    techStack: string[];
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface EducationItem {
    degree: string;
    school: string;
    description: string;
    gpa: string;
}

export interface NavItem {
    label: string;
    href: string;
}