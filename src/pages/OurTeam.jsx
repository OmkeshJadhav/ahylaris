
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Linkedin, Twitter, Mail, MapPin, Star, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Mr",
    role: "Entrepreneur & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    details: "Mr. XXX is young entrepreneur having 10+ years of rich experience in the field of IT & Other Industry. Having core domain experience in Manufacturing & Construction, Food, Pharma industry. With over a decade of hands-on experience in ERPNext implementations & development, he brings deep expertise in transforming complex business processes into simple, scalable digital solutions. He is believing to solve business challenges with emerging technologies. His focus on building client relationships with core values- Quality, Innovation & Trust.",
    linkedin: "#",
    twitter: "#",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Hiten A",
    role: "Mentor & Technical Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    details: "Mr. Hiten is a Mentor & Technical Advisor of Ahylaris. With over 15+ years of experience he is a master planner, architecting scalable IT infrastructures that seamlessly adapt to the company’s dynamic expansion. He is passionate & experts about new emerging technologies like- AI/ML, IoT, Industry 4.0, Automations. Has rich experience in technology consulting with client in India, USA, Middle East, Germany & Other countries. He is guide us robust safeguards, including advanced firewalls and intrusion detection systems, to ensure data integrity and client trust.",
    linkedin: "#",
    twitter: "#",
    gradient: "from-orange-500 to-red-500",
    hoverGradient: "from-orange-600 to-red-600",
  },
];

const OurTeam = () => {
  const stats = [
    { label: "Team Members", value: "50+", icon: Star },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Delivered", value: "200+", icon: Star },
    { label: "Happy Clients", value: "150+", icon: Award }
  ];
  
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Enhanced Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Team Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/team/our-team-hero.jpg" 
            alt="Team collaboration background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Meet Our Expert Team
            </h1>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Dedicated professionals driving innovation and excellence in every project
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                  <div className="text-white drop-shadow-sm">{stat.label}</div>
                </div>
              );
            })}
          </motion.div> */}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Background image with overlay */}
                  {/* <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      src={member.bgImage} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  
                  {/* Gradient overlay */}
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div> */}
                  
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm group-hover:bg-white/80 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Profile Image */}
                    <div className="relative mx-auto mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                        {member.role}
                      </p>
                      <div className={`w-16 h-1 bg-gradient-to-r ${member.gradient} rounded-full mx-auto`}></div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 mb-6 flex-grow">
                      <div className="flex items-center justify-center space-x-3 text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-base text-justify">{member.details}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <motion.a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a 
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${member.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.hoverGradient} opacity-5`}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

