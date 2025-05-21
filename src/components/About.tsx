
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="rounded-xl overflow-hidden bg-muted h-72 md:h-full flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="text-center p-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl md:text-5xl font-medium text-accent">LC</span>
                </div>
                <p className="text-sm text-foreground/60">
                  Add a professional headshot here
                </p>
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
              Currently, I'm supporting AI-driven community and research initiatives at the Foster School of Business, where I co-lead student capacity-building efforts through hackathons, workshops, and AI-focused events.
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
