
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section relative">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img 
          src="/lovable-uploads/6df0884a-7262-4874-870b-82a9133a832c.png" 
          alt="Seattle skyline" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto">
          <p className="text-2xl font-medium text-amber-500 mb-4">
            Let's Work Together
          </p>
          
          <p className="text-lg mb-8">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
          
          <Button 
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white mb-8"
            asChild
          >
            <a href="mailto:chakravartylopamudra@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              chakravartylopamudra@gmail.com
            </a>
          </Button>
          
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-amber-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-amber-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
