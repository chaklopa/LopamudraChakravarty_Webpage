
import React from 'react';

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
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    {item.university}
                    {item.school && <span className="text-accent"> - {item.school}</span>}
                  </h3>
                  <p className="text-foreground/70">{item.location}</p>
                </div>
                <p className="text-sm text-accent mt-1 md:mt-0">{item.graduationDate}</p>
              </div>
              <p className="text-foreground/90">{item.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
