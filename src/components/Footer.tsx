import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Luxury Home Sales',
    'Property Investment',
    'Market Analysis',
    'Property Management',
    'Real Estate Consulting'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/79e15ab1-d568-41b4-9a8f-891a342a9be5.png" 
              alt="Eumentis Logo" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in luxury real estate. We deliver exceptional 
              results through personalized service and market expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Luxury Avenue<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@eumentis.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@eumentis.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Get the latest luxury property listings and market insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-gold hover:opacity-90 text-navy font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Eumentis Real Estate. All rights reserved. | 
            <a href="#" className="hover:text-white ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;