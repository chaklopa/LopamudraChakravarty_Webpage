
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HobbyCard = ({ 
  emoji, 
  title, 
  description, 
  color = "amber",
  delay = 0 
}: {
  emoji: string;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}) => {
  return (
    <Card 
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-${color}-500/20 hover:border-${color}-500/40 bg-gradient-to-br from-background to-secondary/30`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6 text-center space-y-4">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className={`text-lg font-medium text-${color}-500`}>
          {title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {description}
        </p>
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
      color: "purple"
    },
    {
      emoji: "👩‍🍳",
      title: "Cooking",
      description: "Exploring new recipes and flavors as a creative outlet.",
      color: "orange"
    },
    {
      emoji: "🤖",
      title: "Playing with AI",
      description: "Tinkering with AI tools to build and learn.",
      color: "blue"
    },
    {
      emoji: "✍️",
      title: "Blogging",
      description: "Writing insights and reflections on tech, growth, and life.",
      color: "green"
    },
    {
      emoji: "💃",
      title: "Dancing",
      description: "Enjoying movement as a form of expression and joy.",
      color: "pink"
    },
    {
      emoji: "🏔️",
      title: "Outdoor Activities",
      description: "Recharging through hikes, games, and fresh air.",
      color: "cyan"
    }
  ];

  return (
    <section id="hobbies" className="section bg-gradient-to-br from-secondary/20 to-background">
      <div className="container-custom">
        <h2 className="section-title">Personal Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              emoji={hobby.emoji}
              title={hobby.title}
              description={hobby.description}
              color={hobby.color}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
