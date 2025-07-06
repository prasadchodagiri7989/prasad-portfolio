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
  githubUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Crop Predictor",
      description: "A machine learning application that predicts the most suitable crop based on soil parameters and weather conditions.",
      technologies: ["Python", "Machine Learning", "Flask", "Data Analysis"],
      icon: <Database className="h-8 w-8 text-portfolio-primary" />,
      githubUrl: "https://github.com/prasadchodagiri7989/crop-predictor.git"
    },
    {
      id: 2,
      title: "Job Search Platform",
      description: "A full-featured job portal that connects job seekers with employers. Users can create profiles, search and filter job listings, and apply directly through the platform.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      icon: <Code className="h-8 w-8 text-portfolio-primary" />,
      githubUrl: "https://github.com/prasadchodagiri7989/job-search-platform.git"
    },
    {
      id: 3,
      title: "IPL Match Winner Predictor",
      description: "A data-driven machine learning model that predicts the winning team of IPL matches based on historical data, team stats, and match conditions.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
      icon: <Database className="h-8 w-8 text-portfolio-primary" />,
      githubUrl: "https://github.com/prasadchodagiri7989/ipl-prediction.git"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-primary text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View on GitHub <ArrowRight size={16} />
                  </a>
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
