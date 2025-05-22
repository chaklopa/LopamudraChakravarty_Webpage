
import React from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img 
          src="/lovable-uploads/f4c5f88c-5232-44dd-b3ac-a0ae420055c1.png" 
          alt="Neah Bay background with person sitting in teal chair" 
          className="w-full h-full object-cover opacity-40"
          style={{ display: 'block' }} // Ensure image is displayed
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="fade-up text-5xl md:text-6xl font-medium leading-tight md:leading-tight mb-4">
            Lopamudra Chakravarty<span className="text-accent">.</span>
          </h1>
          
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl font-light text-foreground/80 mb-6">
              Product & Program Strategist | EdTech | AI Ops | Growth
            </p>
          </div>
          
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 md:pr-12 leading-relaxed">
              Driving impact at the intersection of technology, education, and data with a track record across public, private, and academic sectors. Passionate about using systems thinking and AI to build smarter, scalable solutions for learning and innovation.
            </p>
          </div>
          
          <div className="fade-up space-x-4" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="button button-primary">View Projects</a>
            <a href="#contact" className="button button-outline">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
