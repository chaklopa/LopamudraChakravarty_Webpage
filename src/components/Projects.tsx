
import React from 'react';

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  imageSrc,
  delay = 0
}: {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageSrc?: string;
  delay?: number;
}) => {
  return (
    <div 
      className="project-card fade-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <p className="text-foreground/70 line-clamp-4">
          {description}
        </p>
        <div className="pt-2">
          <p className="text-sm text-accent mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-md bg-muted text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {link && (
          <div className="pt-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-flex items-center"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Momentoon – AI-Powered Visual Storytelling",
      description: "Momentoon is a creative AI-driven storytelling platform that transforms personal photographs into cartoon-style visuals, enabling users to share emotionally resonant stories through comics, short videos, and social media posts. Designed for Gen Z and Millennials, the product bridges the gap between personal expression and digital creativity in a safe, engaging way.",
      technologies: [
        "DALLE-3", 
        "GPT-4", 
        "JavaScript", 
        "GitHub Pages", 
        "Image Processing"
      ],
      link: "#",
      imageSrc: "/lovable-uploads/b988040e-c18e-436b-babf-ff6ed02a5e17.png"
    },
    {
      title: "Airbnb Market Analysis for Strategic Hosting",
      description: "This project provides an end-to-end data-driven analysis for a hypothetical host to make informed pricing and listing decisions for her Airbnb property in the Seattle region. The dashboard explores patterns in review scores, pricing, super host trends, and competitor listings — offering strategic recommendations based on historical and geographic data.",
      technologies: [
        "Tableau", 
        "Excel", 
        "Statistical Analysis", 
        "Data Visualization"
      ],
      link: "#",
      imageSrc: "/lovable-uploads/9fe2207c-3601-4652-bb69-acbb15a7001c.png"
    },
    {
      title: "Predicting Lung Cancer Risk Using Machine Learning",
      description: "This project explores how machine learning can be used to predict the risk and stage of lung cancer by analyzing patient data. Using a dataset with 26 attributes, we trained classification models to identify early-, mid-, and late-stage lung cancer based on symptoms, demographics, and lifestyle-related factors.",
      technologies: [
        "Python", 
        "Pandas", 
        "NumPy", 
        "Scikit-learn", 
        "Matplotlib"
      ],
      link: "#",
      imageSrc: "/lovable-uploads/852c2213-d519-4d55-bd3a-28a484024145.png"
    }
  ];

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">School Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              imageSrc={project.imageSrc}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
