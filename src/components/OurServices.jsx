
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Lightbulb, Code, Cloud, Shield, Database, Server, Rocket } from 'lucide-react';

const servicesData = [
  {
    icon: <Lightbulb className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "ERPNext Services",
    description: "Consulting, implementation, customization, and ongoing support for ERPNext.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    gradient: "from-amber-500 to-orange-600",
    hoverGradient: "from-amber-400 to-orange-500"
  },
  {
    icon: <Code className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "Software Development",
    description: "Custom software, mobile, and web application development with seamless integration.",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
    gradient: "from-blue-500 to-purple-600",
    hoverGradient: "from-blue-400 to-purple-500"
  },
  {
    icon: <Server className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "IT Infrastructure & Support",
    description: "Hardware/software installation, network setup, and cloud infrastructure management.",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
    gradient: "from-green-500 to-teal-600",
    hoverGradient: "from-green-400 to-teal-500"
  },
  {
    icon: <Database className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "Data & Analytics",
    description: "Database design, BI solutions, data visualization, and AI-driven insights.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    gradient: "from-indigo-500 to-blue-600",
    hoverGradient: "from-indigo-400 to-blue-500"
  },
  {
    icon: <Shield className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "Cybersecurity Services",
    description: "Vulnerability assessments, penetration testing, and endpoint security solutions.",
    bgImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop&crop=center",
    gradient: "from-red-500 to-pink-600",
    hoverGradient: "from-red-400 to-pink-500"
  },
  {
    icon: <Rocket className="h-10 w-10 text-white drop-shadow-lg" />,
    title: "Emerging Technologies",
    description: "AI/ML, IoT, Blockchain, and AR/VR solutions for future-ready enterprises.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center",
    gradient: "from-purple-500 to-pink-600",
    hoverGradient: "from-purple-400 to-pink-500"
  },
];

const OurServices = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-secondary font-bold mb-4 bg-clip-text">
            Our Services
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions and innovative digital transformation services
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                {/* Background Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-0 transition-opacity duration-300`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-0 transition-opacity duration-300`} />
                  
                  {/* Icon positioned on the image */}
                  <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Animated bottom border */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with our innovative solutions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
          >
            Get Started Today
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OurServices;

