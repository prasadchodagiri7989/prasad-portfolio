
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello!
              I'll try my best to get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">chodagiriprasad5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 7989152819</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-portfolio-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Your email" 
                    className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary h-32"
                />
              </div>
              
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90 w-full">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
