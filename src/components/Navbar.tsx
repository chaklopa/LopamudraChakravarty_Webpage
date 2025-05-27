
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'School Projects' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
      
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-emerald-500/5 border-b border-emerald-500/10" : "bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="font-serif font-bold text-2xl text-emerald-400 hover:text-emerald-300 transition-colors">
          LC<span className="text-sage-400">.</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2 hover:text-emerald-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "nav-link font-medium",
                activeSection === link.id && "nav-link-active"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div className={cn(
        "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden",
        menuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="h-full flex flex-col pt-20 px-8 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link text-2xl w-full text-left py-3 font-medium hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
