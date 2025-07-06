
import React from 'react';
import { Award, Globe, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Full Stack Developer & Data Scientist
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Prasad Chodagiri, a full-stack developer and data scientist with a passion for building 
                intuitive, data-driven applications that solve real-world problems.
              </p>
              
              <p>
                With expertise in both front-end and back-end technologies, I create seamless user experiences 
                while implementing robust server-side solutions. My background in data science allows me to 
                extract meaningful insights from complex datasets and build intelligent systems.
              </p>
              
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of the 
                rapidly evolving tech landscape. I believe in writing clean, maintainable code and 
                following best practices in software development.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Details</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">Name:</span> Prasad Chodagiri</li>
                      <li><span className="font-medium">Email:</span> chodagiriprasad5@gmail.com</li>
                      <li><span className="font-medium">Location:</span> Visakhapatnam, India</li>
                      <li><span className="font-medium">Available:</span> For freelance & full-time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">English:</span> Fluent</li>
                      <li><span className="font-medium">Telugu:</span> Native</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>1st Prize in DSA Drive by Coding Club IT</li>
                      <li>NPTEL Certification in Programming, Data Structures and Algorithms using Python</li>
                      <li>NPTEL Certification in Programming in Java</li>
                      <li>NPTEL Certification in Introduction to Machine Learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
