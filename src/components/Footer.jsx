
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="/images/logo.png"
                alt="Ahylaris"
                className="relative bg-white w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
            </div>
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Ahylaris
            </span> */}
          </Link>
          <p className="text-sm">Delivering future-ready ERP solutions built on ERPNext/Frappe that streamline operations, adapt to change, and scale seamlessly with your business growth.</p>
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
            <li><Link to="/services/erpnext-services" className="hover:text-primary-foreground">ERPNext Services</Link></li>
            <li><Link to="/services/software-development" className="hover:text-primary-foreground">Software Development</Link></li>
            <li><Link to="/services/it-infrastructure-support" className="hover:text-primary-foreground">IT Infrastructure</Link></li>
            <li><Link to="/services/data-analytics" className="hover:text-primary-foreground">Data & Analytics</Link></li>
            <li><Link to="/services/cybersecurity-services" className="hover:text-primary-foreground">Cybersecurity</Link></li>
            <li><Link to="/services/emerging-technologies" className="hover:text-primary-foreground">Emerging Technologies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Services</Link></li>
            <li><Link to="/leadership" className="hover:text-primary-foreground">Leadership</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            {/* <li><Link to="/blogs" className="hover:text-primary-foreground">Blogs</Link></li> */}
            {/* <li><Link to="/case-studies" className="hover:text-primary-foreground">Case Studies</Link></li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"><MapPin size={16} /><span>Nanded City, Pune, Maharashtra, India</span></li>
            <li className="flex items-center space-x-2"><Phone size={16} /><span>(+91) 9370372899</span></li>
            <li className="flex items-center space-x-2"><Mail size={16} /><span>ahylarisinfotech@gmail.com</span></li>
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

