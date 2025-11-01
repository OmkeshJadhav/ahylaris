
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Linkedin, Twitter, Mail, MapPin, Star, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Ms. Bhagyashri",
    role: "Entrepreneur & Founder",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    details: [
      "Ms. Bhagyashri is a visionary entrepreneur and the Founder of Ahylaris, bringing over a decade of rich experience in Information Technology and diverse industries such as Manufacturing, Construction, Agriculture, FMCG, Food, and Pharmaceuticals.",
      "With extensive expertise in ERP system implementation - including SAP, Odoo, Custom Software Solutions, and open-source ERP platforms such as ERPNext and Frappe - she has successfully led numerous digital transformation initiatives, enabling organizations to streamline complex business processes into efficient, scalable, and technology-driven solutions.",
      "Under her leadership, Ahylaris stands on the core values of Quality, Innovation, and Trust, which define its commitment to delivering excellence. Ms. Bhagyashri is deeply passionate about leveraging emerging technologies to enhance operational efficiency, drive business agility, and deliver long-term value to clients. Her forward-thinking vision continues to guide Ahylaris in its mission to empower enterprises through digital transformation and sustainable growth."
    ],
    linkedin: "#",
    twitter: "#",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Hiten A",
    role: "Mentor & Technical Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    details: [
      "Mr. Hiten serves as the Mentor and Technical Advisor at Ahylaris, bringing over 15 years of distinguished experience in designing and implementing scalable IT infrastructures that support organizational growth and agility.",
      "He is a strategic technology architect with deep expertise in AI/ML, IoT, Industry 4.0, and Automation, driving innovation and operational excellence across diverse business environments.",
      "With extensive experience in technology consulting for clients across India, the USA, the Middle East, Germany, and other global regions, Mr. Hiten plays a key role in guiding Ahylaris' technology vision.",
      "His focus lies in integrating emerging technologies to solve complex business challenges while ensuring robust data protection. Through his leadership, Ahylaris upholds the highest standards of security, reliability, and client trust - fortified by advanced firewalls, intrusion detection systems, and strong data integrity frameworks."
    ],
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
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
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
              Our Expert Leadership Team
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
      <section className="relative py-10 overflow-hidden">
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
                      <div className="text-gray-600 space-y-3">
                        {Array.isArray(member.details) ? (
                          member.details.map((paragraph, idx) => (
                            <p key={idx} className="text-base text-justify leading-relaxed">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <div className="flex items-center justify-center space-x-3">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-base text-justify">{member.details}</span>
                          </div>
                        )}
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

