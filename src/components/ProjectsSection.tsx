
import React from 'react';
import { ArrowRight, Database, Code, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Crop Predictor",
      description: "A machine learning application that predicts the most suitable crop based on soil parameters and weather conditions.",
      technologies: ["Python", "Machine Learning", "Flask", "Data Analysis"],
      icon: <Database className="h-8 w-8 text-portfolio-primary" />
    },
    {
      id: 2,
      title: "Student Portal",
      description: "A comprehensive platform for students to access course materials, submit assignments, and track their academic progress.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      icon: <Code className="h-8 w-8 text-portfolio-primary" />
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce website with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Payment API"],
      icon: <ShoppingBag className="h-8 w-8 text-portfolio-primary" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="project-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="p-6 border-b border-gray-100">
                  <div className="rounded-full bg-portfolio-primary/10 p-3 w-fit mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-portfolio-primary flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
