
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // This is a placeholder. In a real app, you would fetch project details based on the projectId
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Link to="/" className="text-accent hover:underline mb-8 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-medium mt-6 mb-8">Project Details</h1>
          
          <div className="bg-secondary/50 p-8 rounded-lg">
            <p className="text-xl mb-4">
              This is a placeholder for project details. In a real application, you would fetch and display detailed information about project ID: {projectId}
            </p>
            <p>
              Since these are school projects with external links, clicking "View Project" will open the link in a new tab.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
