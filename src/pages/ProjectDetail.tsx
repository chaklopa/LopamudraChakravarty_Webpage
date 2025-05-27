import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  const projects = {
    "momentoon": {
      title: "Momentoon – Reimagining Memories Through AI-Powered Visual Storytelling",
      description: "Momentoon is a creative AI-driven storytelling platform that transforms personal photographs into cartoon-style visuals, enabling users to share emotionally resonant stories through comics, short videos, and social media posts. Designed for Gen Z and Millennials, the product bridges the gap between personal expression and digital creativity in a safe, engaging way.",
      role: "As a core contributor, I was involved in the product strategy, market research, growth planning, and project management, helping define user personas, MVP priorities, and monetization pathways. Our vision was to make memory-sharing more immersive and expressive, going beyond flat photos.",
      technologies: [
        "AI Models: DALLE-3, GPT-4 (photo-to-text and text-to-photo generation)",
        "Frontend & Hosting: GitHub Pages, JavaScript",
        "Media Tools: Image processing and base64 encoding",
        "Analytics: User behavior tracking, market segmentation (planned)",
        "Design: Canva/Figma for mockups"
      ],
      liveLink: "https://example.com/momentoon",
      imageSrc: "/lovable-uploads/b988040e-c18e-436b-babf-ff6ed02a5e17.png",
      contributions: [
        "Defined and validated target user segments (Gen Z & Millennials) using social behavior data",
        "Led go-to-market roadmap with a 36-month scale plan (user targets, monetization, cost strategy)",
        "Designed the business model: Freemium with subscription and ad monetization layers",
        "Developed competitive benchmarking against ToonApp and ToonMe, identifying Momentoon's niche edge in travel and celebration visuals",
        "Shaped partnership ideas with travel platforms for viral growth loops and customer acquisition"
      ],
      impact: [
        "Achieved MVP readiness with a lean tech stack and zero-cost deployment",
        "Structured revenue projections aiming for $1.84M in year 3, with a target user base of 5.4M",
        "Crafted a scalable vision to transform Momentoon from a cartoon tool into a visual storytelling platform"
      ],
      color: "amber"
    },
    "airbnb-analysis": {
      title: "Airbnb Market Analysis for Strategic Hosting Decisions",
      description: "This project provides an end-to-end data-driven analysis for a hypothetical host named Jessica to make informed pricing and listing decisions for her Airbnb property in the Seattle region. The dashboard explores patterns in review scores, pricing, super host trends, and competitor listings — offering a strategic recommendation based on historical and geographic data.",
      role: "I led the entire pipeline: from cleaning and exploring raw datasets to building a fully interactive Tableau dashboard, designed to support user-friendly decision-making for aspiring Airbnb hosts.",
      technologies: [
        "Data Visualization: Tableau",
        "Data Analysis: Excel (pre-processing and cleaning)",
        "Statistical Methods: Trendline analysis, percentile filtering, confidence intervals",
        "Dashboard Features: Filters by zipcode, scatter plots, bar charts, heatmaps, tooltips"
      ],
      imageSrc: "/lovable-uploads/9fe2207c-3601-4652-bb69-acbb15a7001c.png",
      features: [
        "Competitor Analysis: Visualized total listings and average price by zipcode to benchmark Jessica's location.",
        "Review Score Trend: Identified that zip code 98126 consistently maintains a high review score, suggesting it as a favorable area.",
        "Super Host Trend: Mapped the emergence of super hosts over time; noted a peak in 2015 and 2016 indicating growing trust in the platform during those years.",
        "Price vs Review Score Analysis: Revealed a negative correlation between price and review score. Suggested optimal pricing around the 90th percentile of review scores (~96) while keeping price under ~$100–$120 for maximum success."
      ],
      impact: [
        "Helps prospective Airbnb hosts like Jessica make informed location, pricing, and listing decisions.",
        "Can be scaled for broader real estate investment or hospitality market use cases.",
        "Demonstrates practical application of data storytelling and UX design for analytics."
      ],
      color: "cyan"
    },
    "lung-cancer-prediction": {
      title: "Predicting Lung Cancer Risk Using Machine Learning",
      description: "This project explores how machine learning can be used to predict the risk and stage of lung cancer by analyzing patient data. Using a dataset with 26 attributes, we trained classification models to identify early-, mid-, and late-stage lung cancer based on symptoms, demographics, and lifestyle-related factors.",
      role: "My role involved data preprocessing, feature engineering, model building, performance evaluation, and visualization of insights. The goal was not only to classify the disease stage but also to uncover the strongest lifestyle and symptom-based predictors contributing to lung cancer risk.",
      technologies: [
        "Language: Python (Pandas, NumPy)",
        "ML Libraries: Scikit-learn (Logistic Regression, Random Forest, Decision Tree)",
        "Visualization: Matplotlib, Seaborn",
        "Development Environment: Google Colab",
        "Dataset Source: Kaggle Lung Cancer Dataset"
      ],
      imageSrc: "/lovable-uploads/852c2213-d519-4d55-bd3a-28a484024145.png",
      contributions: [
        "Preprocessed & encoded variables like smoking habits, air pollution exposure, and dietary factors.",
        "Built and compared three classifiers (Logistic Regression, Random Forest, Decision Tree) to predict cancer stage.",
        "Visualized correlations between symptoms/lifestyle factors and risk levels using boxplots and violin plots.",
        "Segmented lifestyle-based features into two domains: smoking-related and other health habits (alcohol, obesity, diet).",
        "Isolated the top predictive variables, showing strongest correlation with smoking, air pollution, and obesity."
      ],
      workflow: [
        "Data Preprocessing: Encoded categorical levels (Low, Medium, High) numerically; removed irrelevant fields.",
        "Train-Test Split: 90/10 split for unbiased evaluation.",
        "Model Training & Evaluation: Logistic Regression (baseline), Random Forest (highest accuracy), Decision Tree (interpretability).",
        "Segmentation Analysis: Lifestyle-specific models for smoking-related and dietary habits.",
        "Visual Insights: Generated box plots across cancer levels to observe feature variance and severity patterns."
      ],
      results: [
        "Random Forest achieved the highest prediction accuracy.",
        "Top risk factors: Smoking, passive smoking, and air pollution.",
        "Symptoms like chest pain, coughing blood, and fatigue were strong indicators of later-stage cancer.",
        "Other lifestyle habits (alcohol, occupational hazards, obesity) showed moderate influence.",
        "Factors like dust allergies and family history had lower predictive accuracy (<76%)."
      ],
      impact: "This project demonstrates the potential of machine learning for clinical risk evaluation, especially when combined with symptom clustering and lifestyle data. It highlights how AI tools can support early intervention strategies in healthcare and public health planning.",
      color: "purple"
    }
  };
  
  const project = projects[projectId as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <Link to="/" className="text-amber-500 hover:underline mb-8 inline-flex items-center">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="bg-secondary/50 p-8 rounded-lg text-center">
              <h1 className="text-3xl md:text-4xl font-medium mb-6">Project Not Found</h1>
              <p>The project you're looking for doesn't exist or has been moved.</p>
              <Button asChild className="mt-6 bg-amber-500 hover:bg-amber-600">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Link to="/" className="text-amber-500 hover:underline mb-8 inline-flex items-center">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-lg overflow-hidden border border-border/50 shadow-lg">
            {/* Project Header */}
            <div className="p-6 md:p-10">
              <div className={`inline-block px-3 py-1 text-sm rounded-full bg-${project.color}-500/20 text-${project.color}-500 mb-4`}>
                Project Overview
              </div>
              <h1 className="text-2xl md:text-4xl font-medium mb-4">{project.title}</h1>
              
              {project.imageSrc && (
                <div className="w-full h-64 md:h-80 my-6 rounded-lg overflow-hidden">
                  <img 
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="md:flex md:justify-between md:items-center mt-6">
                {project.liveLink && (
                  <Button asChild variant="outline" className={`border-${project.color}-500 text-${project.color}-500 hover:bg-${project.color}-500 hover:text-white`}>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      View Live Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                <div className="flex mt-4 md:mt-0 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/lopamudra1990/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/chaklopa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="border-t border-border/50 bg-secondary/20">
              <div className="grid md:grid-cols-3 gap-6 p-6 md:p-10">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Description</h2>
                    <p className="text-foreground/80">{project.description}</p>
                  </div>
                  
                  <div>
                    <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>My Role</h2>
                    <p className="text-foreground/80">{project.role}</p>
                  </div>
                  
                  {project.contributions && (
                    <div>
                      <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Key Contributions</h2>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {project.contributions.map((contribution, index) => (
                          <li key={index}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.features && (
                    <div>
                      <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Key Features & Insights</h2>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.workflow && (
                    <div>
                      <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Step-by-Step Workflow</h2>
                      <ol className="list-decimal pl-5 space-y-1 text-foreground/80">
                        {project.workflow.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  {project.results && (
                    <div>
                      <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Results & Insights</h2>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {project.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.impact && (
                    <div>
                      <h2 className={`text-xl font-medium mb-3 text-${project.color}-500`}>Impact & Outcomes</h2>
                      {Array.isArray(project.impact) ? (
                        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                          {project.impact.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-foreground/80">{project.impact}</p>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <Card className="bg-secondary/30 border-secondary/50">
                    <CardContent className="p-6">
                      <h3 className={`text-xl font-medium mb-4 text-${project.color}-500`}>Technologies Used</h3>
                      <ul className="space-y-3">
                        {project.technologies.map((tech, index) => (
                          <li key={index} className="text-sm text-foreground/80 flex items-start">
                            <span className={`text-${project.color}-500 mr-2`}>•</span>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
