
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const QuickFactCard = ({ 
  icon: Icon, 
  label, 
  value, 
  color = "amber" 
}: {
  icon: any;
  label: string;
  value: string;
  color?: string;
}) => {
  return (
    <Card className="bg-secondary/30 border-secondary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4 flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-${color}-500/20`}>
          <Icon className={`h-5 w-5 text-${color}-500`} />
        </div>
        <div>
          <p className="text-xs text-foreground/60 uppercase tracking-wide">{label}</p>
          <p className="text-sm font-medium">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  const quickFacts = [
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle, WA",
      color: "red"
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Master of Science in Information Systems",
      color: "blue"
    },
    {
      icon: Briefcase,
      label: "Experience",
      value: "6+ Years in Analytics",
      color: "green"
    },
    {
      icon: Calendar,
      label: "Available",
      value: "Open to Opportunities",
      color: "purple"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quick Facts */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-medium mb-6">Quick Facts</h3>
            <div className="grid gap-3">
              {quickFacts.map((fact, index) => (
                <QuickFactCard
                  key={index}
                  icon={fact.icon}
                  label={fact.label}
                  value={fact.value}
                  color={fact.color}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-lg leading-relaxed text-foreground/80">
              <p className="mb-6">
                Welcome! I'm a dedicated data analyst and project manager with over 6 years of experience 
                transforming complex datasets into actionable business insights. Currently pursuing my 
                Master of Science in Information Systems at the University of Washington, I specialize in 
                data visualization, statistical analysis, and strategic project management.
              </p>
              
              <p className="mb-6">
                My journey spans diverse industries—from healthcare analytics at UW Medicine to retail 
                insights at Lifestyle International—where I've consistently delivered data-driven solutions 
                that drive growth and operational efficiency. I'm passionate about leveraging technology 
                to solve real-world problems and create meaningful impact.
              </p>

              <p>
                When I'm not diving deep into data or managing complex projects, you'll find me exploring 
                the latest AI tools, practicing yoga, experimenting with new recipes, or sharing insights 
                through my blog. I believe in continuous learning and bringing creativity to analytical thinking.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3 text-amber-500">What I'm Looking For</h4>
              <p className="text-foreground/70">
                I'm actively seeking opportunities in data analysis, business intelligence, and project 
                management roles where I can apply my analytical skills and leadership experience to 
                drive business outcomes and mentor growing teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
