import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  imageSrc,
  color = "amber",
  delay = 0
}: {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageSrc?: string;
  color?: string;
  delay?: number;
}) => {
  const navigate = useNavigate();
  
  const handleViewProject = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    // If it's an external link (starts with http), open in new tab
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      // Otherwise navigate within the app
      navigate(link);
    }
  };
  
  return (
    <Card 
      className={`project-card border-${color}-500/20 hover:border-${color}-500/40 bg-gradient-to-br from-background to-secondary/50`}
      style={{ animationDelay: `${delay}s` }}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <CardContent className="p-6 md:p-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-medium flex items-center justify-between">
          <span>{title}</span>
          <span className={`text-${color}-500`}>•</span>
        </h3>
        <p className="text-foreground/70 line-clamp-3">
          {description}
        </p>
        <div className="pt-2">
          <p className={`text-sm text-${color}-500 mb-2 font-medium`}>Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`text-xs px-2 py-1 rounded-full bg-${color}-500/10 text-foreground/80 border border-${color}-500/20`}
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
              onClick={(e) => handleViewProject(e, link)}
              className={`text-${color}-500 hover:underline inline-flex items-center group`}
            >
              View Project
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Momentoon – AI-Powered Visual Storytelling",
      description: "Momentoon is a creative AI-driven storytelling platform that transforms personal photographs into cartoon-style visuals, enabling users to share emotionally resonant stories through comics, short videos, and social media posts.",
      technologies: [
        "DALLE-3", 
        "GPT-4", 
        "JavaScript", 
        "GitHub Pages", 
        "Image Processing"
      ],
      link: "https://example.com/momentoon",
      imageSrc: "/lovable-uploads/b988040e-c18e-436b-babf-ff6ed02a5e17.png",
      color: "amber"
    },
    {
      title: "Airbnb Market Analysis for Strategic Hosting",
      description: "This project provides an end-to-end data-driven analysis for a hypothetical host to make informed pricing and listing decisions for her Airbnb property in the Seattle region.",
      technologies: [
        "Tableau", 
        "Excel", 
        "Statistical Analysis", 
        "Data Visualization"
      ],
      link: "https://example.com/airbnb-analysis",
      imageSrc: "/lovable-uploads/9fe2207c-3601-4652-bb69-acbb15a7001c.png",
      color: "cyan"
    },
    {
      title: "Predicting Lung Cancer Risk Using Machine Learning",
      description: "This project explores how machine learning can be used to predict the risk and stage of lung cancer by analyzing patient data using classification models.",
      technologies: [
        "Python", 
        "Pandas", 
        "NumPy", 
        "Scikit-learn", 
        "Matplotlib"
      ],
      link: "https://example.com/lung-cancer-prediction",
      imageSrc: "/lovable-uploads/852c2213-d519-4d55-bd3a-28a484024145.png",
      color: "purple"
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
              color={project.color}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
