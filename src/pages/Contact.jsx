
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, MessageCircle, Users, Clock } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      info: "123 Tech Avenue, Innovation City, 56789",
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&h=300&fit=crop",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@ahylaris.com",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", gradient: "from-blue-600 to-blue-700" },
    { icon: Twitter, href: "#", gradient: "from-sky-500 to-sky-600" },
    { icon: Linkedin, href: "#", gradient: "from-blue-700 to-blue-800" },
    { icon: Instagram, href: "#", gradient: "from-pink-500 to-purple-600" },
  ];

  const stats = [
    { icon: MessageCircle, value: "24/7", label: "Support", gradient: "from-orange-500 to-red-500" },
    { icon: Users, value: "500+", label: "Happy Clients", gradient: "from-green-500 to-emerald-500" },
    { icon: Clock, value: "< 1hr", label: "Response Time", gradient: "from-blue-500 to-purple-500" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="relative pt-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="inline-block"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to transform your business? Let's start a conversation that could change everything.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${method.bgImage})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}></div>
                
                {/* Glassmorphism Layer */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20"></div>
                
                {/* Content */}
                <div className="relative p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30"
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-white/90 leading-relaxed">{method.info}</p>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-gradient-to-r ${social.gradient} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20"></div>
              <div className="relative p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">We'd love to hear about your project and how we can help</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name" 
                        className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 backdrop-blur-sm rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        id="email" 
                        placeholder="Your Email" 
                        className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 backdrop-blur-sm rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                    <Input 
                      type="text" 
                      id="subject" 
                      placeholder="What's this about?" 
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 backdrop-blur-sm rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows="6" 
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 backdrop-blur-sm rounded-xl resize-none"
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20"></div>
              <div className="relative p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-2">Find Us Here</h2>
                <p className="text-gray-400 mb-8">Visit our office for a face-to-face consultation</p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.298906086749!2d-122.4194158846819!3d37.7749294797592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f2a7d3a1%3A0x4d5b9d2a0f1e2e1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

