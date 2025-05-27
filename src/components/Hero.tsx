
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img 
          src="/lovable-uploads/5357826a-39f0-49c3-9e58-e8c081d7f6d8.png" 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-60"
          style={{ display: 'block' }} 
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="fade-up text-5xl md:text-6xl font-bold leading-tight md:leading-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-amber-500">Lopamudra</span>
              <span className="text-foreground">.</span>
            </h1>
            
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl md:text-2xl font-light text-foreground/80 mb-6">
                Product & Program Strategist | AI Solutions | Tech Innovation | Business Growth
              </p>
            </div>
            
            <div className="fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
                Transforming business operations through AI-driven solutions and strategic technology implementations. Specialized in building scalable systems that leverage machine learning, data analytics, and automation to drive measurable business impact across enterprise and startup environments.
              </p>
            </div>
            
            <div className="fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 rounded-full bg-amber-500/30 blur-md"></div>
            <div className="relative z-10 fade-up flex justify-center" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full border-4 border-amber-500 overflow-hidden w-[350px] h-[350px]">
                <img 
                  src="/lovable-uploads/fb267380-8395-4f49-9e22-b2c1704bcd93.png" 
                  alt="Lopamudra Chakravarty" 
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
