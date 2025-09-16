
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ahylaris</h3>
          <p className="text-sm">Pure Ideas. Excellent Solutions.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-primary-foreground"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary-foreground"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary-foreground"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary-foreground"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary-foreground">ERPNext Services</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Software Development</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">IT Infrastructure</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Data & Analytics</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Cybersecurity</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/our-team" className="hover:text-primary-foreground">Our Team</Link></li>
            <li><Link to="/blogs" className="hover:text-primary-foreground">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary-foreground">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"><MapPin size={16} /><span>123 Tech Avenue, Innovation City, 56789</span></li>
            <li className="flex items-center space-x-2"><Phone size={16} /><span>+1 (555) 123-4567</span></li>
            <li className="flex items-center space-x-2"><Mail size={16} /><span>info@ahylaris.com</span></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8 pt-8 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Ahylaris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

