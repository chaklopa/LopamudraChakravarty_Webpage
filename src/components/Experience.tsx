
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "UNIVERSITY OF WASHINGTON",
      location: "Seattle, WA",
      title: "Research Assistant- Generative AI and Creative Problem-Solving",
      period: "October 2024 - Present",
      responsibilities: [
        "Assisting Prof. Léonard Boussioux in developing a Universal AI Community, creating learner-focused content, and contributing to research, strategic discussions, and innovative AI-driven operational solutions.",
        "Designed and deployed functional digital products—portfolios, landing pages, and business sites—using AI tools (ChatGPT, Claude, Lovable) and platforms like Replit and GitHub, showcasing full-cycle ownership, prompt engineering, and low-code execution."
      ]
    },
    {
      company: "CUEMATH",
      location: "Bangalore, India",
      title: "Product Manager",
      subtitle: "Among Top 50 global ed tech company, also recognized as India's best Math program.",
      period: "September 2020 – January 2022",
      responsibilities: [
        "Strategic planning: Revamped the pricing and sales strategy by performing statistical analysis for customer conversion, 200+ partner centers performance, customer demographic and product mix offerings, leading to 10% increase in revenue.",
        "Partnership Development and Go-to-market strategy: Performed competitive analysis and designed go-to-market strategy to develop and facilitate new product launch across 100+ partner franchise from inception to production and user acceptance across 4 product portfolios, increasing revenue to $50k.",
        "Product Customization: Analyzed customer feedback across 20+ engagement metrics to identify key opportunities, customized product offering and revamped teaching module, resulting in an increase of 5% customer retention",
        "Cross Functional Collaboration: Worked cross-functionally to design ticketing system for problem resolution, analyzed metric to lead programs for operational bottleneck, improving customer engagement by 7% and customer retention by 45%.",
        "Customer Resource Allocation: Developed heatmaps to track customer-resource allocation, led programs for resource allocation strategy, identified constraints and conduct trade-off business decisions, leading to 25% increase in customer satisfaction and engagement."
      ]
    },
    {
      company: "MINISTRY OF EDUCATION, Government of India",
      location: "New Delhi, India",
      title: "Technical Consultant – Project Management and Operations",
      period: "June 2018-June 2020",
      responsibilities: [
        "Operational Best Practices Implementation: Performed qualitative and quantitative analysis across 200+ past projects to identify key opportunities, developed roadmap to implement best operational practices across 7 states ministry, reduced project operating margin by 1%",
        "Efficiency improvement: Led digitization across 7 state universities project, streamlined operational efficiency by developing monitoring mechanism to resolve operational bottleneck proactively, leading to decrease in project completion time by 7%.",
        "Cross Functional Collaboration: Analyzed vendor pricing data, lead-time, and contractual obligations, identified key product lines to lead vendor development programs and redesigned procurement and logistics strategy, leading to $5M reduction in project costs.",
        "Forecasting and Inventory management: Re-designed spares forecasting and inventory target settings by analyzing inventory turns, failure rate and lead time across 25+ existing projects, increasing spares availability by 15% and cost saving of $12M"
      ]
    },
    {
      company: "TEACH FOR INDIA",
      location: "Hyderabad, India",
      title: "Fellow",
      period: "June 2016- April 2018",
      responsibilities: [
        "Program management: Analyzed student performance data across multidimensional parameters to customize and implemented varied class content, leading to a 50% percentage increase in average score over two years.",
        "Risk management: Developed and built partnerships for educational programs with corporates, analyzed and mitigated risk and reported progress metric for fund allocation and utilization, leading to on-time program completion rate of 100%.",
        "Data driven strategy: Defined student group by identifying and analyzing multidimensional performance data to implement literacy block, create block specific class curriculum for all round student's development."
      ]
    },
    {
      company: "VIKRAMSHILA RESOURCE EDUCATION SOCIETY",
      location: "Kolkata, India",
      title: "Project Executive",
      period: "June 2015-April 2016",
      responsibilities: [
        "Skill Development Programs: Conducted targeted skill development programs resulting in a 7% increase in upskilling, following thorough analysis of educational needs for girls' school"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative space-y-8">
          {/* Timeline connector */}
          <div className="absolute left-0 top-4 bottom-0 w-px bg-border hidden md:block ml-3.5"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="fade-up relative"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 -top-1 bg-accent rounded-full w-8 h-8 items-center justify-center">
                  <Briefcase className="w-4 h-4 text-background" />
                </div>
                
                {/* Content */}
                <div className="md:pl-16 bg-secondary/50 border border-border rounded-lg p-6 w-full">
                  <div className="flex flex-col md:flex-row justify-between mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-foreground">{exp.company}</h3>
                      <p className="text-accent font-medium">{exp.title}</p>
                      <p className="text-sm text-foreground/70">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2 md:mt-0 text-accent">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  {exp.subtitle && (
                    <p className="text-sm text-foreground/80 italic mb-3">{exp.subtitle}</p>
                  )}
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-foreground/90 text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
