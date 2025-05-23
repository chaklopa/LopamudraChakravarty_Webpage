
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const QuickFactCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <Card className="bg-secondary/70 hover:bg-secondary/90 border-amber-500/20 transition-all duration-300 hover:shadow-md hover:shadow-amber-500/10">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-2xl text-amber-500">{icon}</div>
          <div className="space-y-2">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-foreground/70">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  const quickFacts = [
    {
      icon: "🎓",
      title: "Education",
      description: "MBA from Foster School of Business, University of Washington"
    },
    {
      icon: "🌏",
      title: "Experience",
      description: "7+ years across India and the U.S., public and private sectors"
    },
    {
      icon: "🚀",
      title: "Industries",
      description: "EdTech, Government, Academia, and Startups"
    },
    {
      icon: "💻",
      title: "Tech Skills",
      description: "Python, SQL, AI/ML, Prompt Engineering, Data Analysis"
    },
    {
      icon: "📊",
      title: "Leadership",
      description: "Led growth strategies impacting 200+ partner centers"
    },
    {
      icon: "💰",
      title: "Impact",
      description: "Helped save $5M+ in project costs through improved strategies"
    }
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Lopamudra Chakravarty — a full-stack product and program leader with 7+ years of experience transforming education and operational ecosystems across India and the U.S. I bring a unique cross-sector perspective, having worked with government ministries, high-growth edtech startups, and leading academic institutions like the University of Washington.
            </p>
            
            <p className="text-lg leading-relaxed">
              At Cuemath, I led growth and GTM strategies across 200+ partner centers, optimizing pricing, retention, and customer engagement. As a technical consultant with the Ministry of Education, I helped digitize operations across 7 states, saving $5M+ in project costs through improved procurement, forecasting, and logistics strategies.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently, I'm supporting AI-driven community and research initiatives at the Foster School of Business, where I'm part of the AI taskforce team which leads student capacity-building efforts through hackathons, workshops, and AI-focused events.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-6 text-amber-500">Quick Facts</h3>
            <div className="grid grid-cols-1 gap-4">
              {quickFacts.map((fact, index) => (
                <QuickFactCard 
                  key={index}
                  icon={fact.icon}
                  title={fact.title}
                  description={fact.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
