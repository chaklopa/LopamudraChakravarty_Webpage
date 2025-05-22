
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      university: "UNIVERSITY OF WASHINGTON",
      school: "Foster School of Business",
      location: "Seattle, WA",
      degree: "Master of Science in Information System",
      graduationDate: "June 2024"
    },
    {
      university: "UNIVERSITY OF CALCUTTA",
      location: "Kolkata, India",
      degree: "Master and Bachelor of Arts in Sociology",
      graduationDate: "August 2014"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="fade-up bg-secondary/50 border border-border p-6 rounded-lg"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium">
                      {item.university}
                      {item.school && <span className="text-accent"> - {item.school}</span>}
                    </h3>
                    <p className="text-foreground/70">{item.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-accent mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{item.graduationDate}</span>
                </div>
              </div>
              <p className="text-foreground/90 pl-9 md:pl-8">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
