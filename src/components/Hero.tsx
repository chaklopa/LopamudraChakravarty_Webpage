
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
          className="w-full h-full object-cover opacity-30"
          style={{ display: 'block' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70 backdrop-blur-[1px]"></div>
        
        {/* Botanical accent elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-sage-500/10 blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-forest-500/10 blur-md animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="fade-up text-5xl md:text-6xl font-serif font-bold leading-tight md:leading-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-emerald-400">Lopamudra</span>
              <span className="text-foreground">.</span>
            </h1>
            
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl md:text-2xl font-light text-foreground/80 mb-6">
                Product & Program Strategist | AI Solutions | Tech Innovation | Business Growth
              </p>
            </div>
            
            <div className="fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
                Driving business transformation through AI-powered strategy, data-driven decision making, and scalable tech solutions. I specialize in bridging business goals with emerging technologies—leveraging analytics, automation, and operational insight to optimize systems, elevate user experiences, and accelerate growth. With a background spanning edtech, government innovation, and AI research at the University of Washington, I bring a unique blend of product thinking, cross-functional leadership, and a passion for using technology to solve complex, real-world problems.
              </p>
            </div>
            
            <div className="fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500/30 to-sage-500/30 blur-md"></div>
            <div className="relative z-10 fade-up flex justify-center" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full border-4 border-emerald-500/50 overflow-hidden w-[350px] h-[350px] shadow-2xl shadow-emerald-500/20">
                <img 
                  src="/lovable-uploads/fb267380-8395-4f49-9e22-b2c1704bcd93.png" 
                  alt="Lopamudra Chakravarty" 
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
            
            {/* Additional botanical accents around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-emerald-400/20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-sage-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
