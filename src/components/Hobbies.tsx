
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface HobbyCardProps {
  emoji: string;
  title: string;
  description: string;
  colorClass: string;
  links?: { text: string; url: string }[];
}

const HobbyCard = ({ emoji, title, description, colorClass, links }: HobbyCardProps) => {
  return (
    <Card className={`border-${colorClass}/20 hover:border-${colorClass}/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-background to-secondary/50`}>
      <CardContent className="p-6 text-center space-y-4">
        <div className={`mx-auto w-16 h-16 rounded-full bg-${colorClass}/20 flex items-center justify-center`}>
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className={`text-xl font-medium text-${colorClass}`}>{title}</h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
        {links && links.length > 0 && (
          <div className="pt-2 space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-sm text-${colorClass} hover:underline group`}
              >
                {link.text}
                <ExternalLink className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Hobbies = () => {
  const hobbies = [
    {
      emoji: "🧘‍♀️",
      title: "Yoga & Meditation",
      description: "Finding calm and clarity through daily practice.",
      colorClass: "amber-500"
    },
    {
      emoji: "👩‍🍳",
      title: "Cooking",
      description: "Exploring new recipes and flavors as a creative outlet.",
      colorClass: "cyan-500"
    },
    {
      emoji: "🤖",
      title: "Playing with AI",
      description: "Tinkering with AI tools to build and learn.",
      colorClass: "purple-500"
    },
    {
      emoji: "✍️",
      title: "Blogging",
      description: "Writing insights and reflections on tech, growth, and life.",
      colorClass: "amber-500",
      links: [
        {
          text: "AI-Driven Productivity Highlights",
          url: "https://i.postimg.cc/HkvTrJDG/AI-Driven-Productivity-Highlights-from-Our-Transformative-Luncheon.png"
        },
        {
          text: "AI in Supply Chain Management",
          url: "https://i.postimg.cc/K8brVzRM/AI-in-Supply-Chain-Management.png"
        }
      ]
    },
    {
      emoji: "💃",
      title: "Dancing",
      description: "Enjoying movement as a form of expression and joy.",
      colorClass: "cyan-500"
    },
    {
      emoji: "🏔️",
      title: "Outdoor Activities",
      description: "Recharging through hikes, games, and fresh air.",
      colorClass: "purple-500"
    }
  ];

  return (
    <section id="hobbies" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              emoji={hobby.emoji}
              title={hobby.title}
              description={hobby.description}
              colorClass={hobby.colorClass}
              links={hobby.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
