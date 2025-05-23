
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: string;
  colorClass: string;
}

const SkillCategory = ({ title, skills, icon, colorClass }: SkillCategoryProps) => {
  return (
    <Card className={`border-${colorClass}/20 hover:border-${colorClass}/30 transition-all duration-300 hover:shadow-md`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${colorClass}/20 text-${colorClass}`}>
            <span className="text-xl">{icon}</span>
          </div>
          <h3 className={`text-xl font-medium text-${colorClass}`}>{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className={`text-sm py-1 px-3 rounded-full bg-${colorClass}/10 text-foreground/90 border border-${colorClass}/20`}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Python", "SQL", "Tableau", "Advanced Excel (VLOOKUP, Pivot)", "AI ecosystem understanding", "Prompt Engineering"],
      icon: "💻",
      colorClass: "amber-500"
    },
    {
      title: "Program Management/Operations",
      skills: [
        "Cross functional team leadership", 
        "Strategic planning", 
        "Vendor operations", 
        "Project Finance", 
        "Process improvement", 
        "Stakeholder engagement",
        "Forecasting",
        "Resource allocation"
      ],
      icon: "📊",
      colorClass: "cyan-500"
    },
    {
      title: "Certifications",
      skills: [
        "AWS Certified Cloud Practitioner", 
        "Project Management Foundation", 
        "GenAI", 
        "Cybersecurity", 
        "Data Analysis"
      ],
      icon: "🏆",
      colorClass: "purple-500"
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              colorClass={category.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
