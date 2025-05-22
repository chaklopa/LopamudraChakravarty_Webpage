
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="rounded-xl overflow-hidden bg-muted h-auto flex items-center justify-center p-4">
              <div className="text-center">
                <Avatar className="w-48 h-48 mx-auto border-2 border-accent/30">
                  <AvatarImage src="/lovable-uploads/fb267380-8395-4f49-9e22-b2c1704bcd93.png" alt="Lopamudra Chakravarty" className="object-cover" />
                  <AvatarFallback className="text-4xl font-medium">LC</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-medium text-accent">Lopamudra Chakravarty</h3>
                <p className="text-sm text-foreground/60">Product & Program Strategist</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Lopamudra Chakravarty — a full-stack product and program leader with 7+ years of experience transforming education and operational ecosystems across India and the U.S. I bring a unique cross-sector perspective, having worked with government ministries, high-growth edtech startups, and leading academic institutions like the University of Washington.
            </p>
            
            <p className="text-lg leading-relaxed">
              At Cuemath, I led growth and GTM strategies across 200+ partner centers, optimizing pricing, retention, and customer engagement. As a technical consultant with the Ministry of Education, I helped digitize operations across 7 states, saving $5M+ in project costs through improved procurement, forecasting, and logistics strategies.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently, I'm supporting AI-driven community and research initiatives at the Foster School of Business, where I'm part of the AI taskforce team which leads student capacity-building efforts through hackathons, workshops, and AI-focused events.
            </p>
            
            <p className="text-lg leading-relaxed">
              My work sits at the intersection of technology, data, and human-centered design — with one mission: to build solutions that unlock growth, scale impact, and empower people to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
