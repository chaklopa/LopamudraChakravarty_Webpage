
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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

  const projectImages = [
    "/lovable-uploads/852c2213-d519-4d55-bd3a-28a484024145.png",
    "/lovable-uploads/9fe2207c-3601-4652-bb69-acbb15a7001c.png",
    "/lovable-uploads/b988040e-c18e-436b-babf-ff6ed02a5e17.png"
  ];

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6 mb-12">
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
        
        {/* School Projects Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-medium mb-6">School Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <Card key={index} className="fade-up overflow-hidden bg-secondary/30 border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={image} 
                    alt={`School project ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium">Project {index + 1}</h4>
                  <p className="text-sm text-foreground/70 mt-1">University of Washington</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
