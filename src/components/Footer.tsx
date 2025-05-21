
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} Lopamudra Chakravarty. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#home"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
