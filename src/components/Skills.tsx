
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Python", "SQL", "Tableau", "Advanced Excel (VLOOKUP, Pivot)", "AI ecosystem understanding", "Prompt Engineering"]
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
      ]
    },
    {
      title: "Certifications",
      skills: [
        "AWS Certified Cloud Practitioner Foundational", 
        "LinkedIn Learning - Project Management Foundation", 
        "GenAI", 
        "Cybersecurity", 
        "Data Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-medium text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="text-accent">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
