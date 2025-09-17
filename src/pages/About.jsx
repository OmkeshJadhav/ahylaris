
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Eye, Lightbulb, Users, ShieldCheck } from 'lucide-react';

const About = () => {

  const coreValues = [
    { text: "Quality", color: "from-blue-500 to-blue-700", icon: "🎯" },
    { text: "Innovation", color: "from-purple-500 to-purple-700", icon: "💡" },
    { text: "Trust", color: "from-green-500 to-green-700", icon: "🤝" }
  ]
    

  const industries = [
    {
      name: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      name: "Healthcare & Pharma",
      image: "/images/about/pharma-industries.jpg",
      gradient: "from-green-500 to-green-700"
    },
    {
      name: "Retail & E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      name: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      name: "Logistics & Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center",
      gradient: "from-red-500 to-red-700"
    },
    {
      name: "EPC Businesses",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      name: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
      gradient: "from-teal-500 to-teal-700"
    },
    {
      name: "Non-Profit",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center",
      gradient: "from-pink-500 to-pink-700"
    }
  ];

  const expertiseAreas = [
    { 
      icon: <Eye className="h-8 w-8 text-white" />, 
      title: "ERPNext and Frappe Solutions",
      description: "Comprehensive ERP implementation and customization services tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      bgPattern: "bg-blue-50"
    },
    { 
      icon: <Lightbulb className="h-8 w-8 text-white" />, 
      title: "Innovation-driven Solutions",
      description: "Cutting-edge technology solutions that drive digital transformation and business growth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      bgPattern: "bg-purple-50"
    },
    { 
      icon: <Users className="h-8 w-8 text-white" />, 
      title: "Client-Centric Approach",
      description: "Personalized service delivery focused on understanding and exceeding client expectations.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center",
      gradient: "from-green-500 via-green-600 to-green-700",
      bgPattern: "bg-green-50"
    },
    { 
      icon: <ShieldCheck className="h-8 w-8 text-white" />, 
      title: "Robust Security Practices",
      description: "Enterprise-grade security measures to protect your data and ensure compliance.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      gradient: "from-red-500 via-red-600 to-red-700",
      bgPattern: "bg-red-50"
    },
    { 
      icon: <Eye className="h-8 w-8 text-white" />, 
      title: "Future-Proof Technologies",
      description: "Advanced technology stack that evolves with your business and industry trends.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
      bgPattern: "bg-indigo-50"
    },
    { 
      icon: <Eye className="h-8 w-8 text-white" />, 
      title: "Business Process Automation",
      description: "Streamlined workflows and automated processes to enhance operational efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      gradient: "from-orange-500 via-orange-600 to-orange-700",
      bgPattern: "bg-orange-50"
    },
  ];

  return (
    <div className="">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            About Ahylaris
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl italic"
          >
            "Pure Ideas. Excellent Solutions."
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-purple-600"
          >
            Our Vision
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Main Image */}
                <div className="relative h-122">
                  <img
                    src="/images/about/our-vision.jpg"
                    alt="Team collaboration and innovation"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
                
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Vision Text */}
              <div className="relative">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl leading-relaxed text-gray-700 relative z-10 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                >
                  At <span className="font-bold text-primary">Ahylaris</span>, our vision is to be the leading IT service provider, empowering businesses globally with innovative and reliable <span className="font-semibold text-secondary">ERPNext and Frappe solutions</span>. We strive to foster digital transformation, drive efficiency, and create sustainable growth for our clients through our unwavering commitment to quality, innovation, and trust.
                </motion.p>
              </div>

              {/* Enhanced Quality + Innovation + Trust Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-purple-500/5 rounded-2xl p-8 border border-gradient-to-r from-primary/20 to-secondary/20">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Our Core Values</h3>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    {coreValues.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        className="group flex flex-col items-center"
                      >
                        <div className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-2`}>
                          <span className="text-lg font-bold">{item.text}</span>
                        </div>
                        <div className="text-2xl group-hover:animate-bounce">{item.icon}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to action */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <span className="font-semibold">Transforming Businesses Globally</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-pulse" />
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-secondary"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Empowering diverse sectors with innovative ERPNext solutions tailored to your industry needs
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-10 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Animated Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Content */}
                <div className="relative p-8 h-64 flex flex-col justify-center items-center text-center">
                  {/* <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3 group-hover:bg-white/30 transition-colors duration-300">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-current rounded-full animate-pulse" />
                    </div>
                  </div> */}
                  
                  <h3 className="text-white font-extrabold text-xl mb-2 group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-lg">
                    {industry.name}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-white/60 group-hover:w-16 group-hover:bg-yellow-200 transition-all duration-300 rounded-full" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          
          {/* Additional decorative elements */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex space-x-2"
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300"
            >
              Our Expertise
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full"
            ></motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our mastery across cutting-edge technologies through interactive expertise showcases
            </p>
          </motion.div>

          {/* Hexagonal Grid Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {expertiseAreas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateY: -180 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className={`relative ${index === 1 || index === 4 ? 'lg:mt-16' : ''}`}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      z: 50
                    }}
                    transition={{ duration: 0.4 }}
                    className="group relative"
                  >
                    {/* Hexagonal Container */}
                    <div className="relative w-80 h-80 mx-auto">
                      {/* Hexagon Shape using CSS */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                        }}
                      >
                        {/* Animated Border */}
                        <div className="absolute inset-2 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300"
                        >
                          {item.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -20, 0],
                              x: [0, Math.sin(i) * 10, 0],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                            style={{
                              top: `${20 + i * 10}%`,
                              left: `${10 + i * 15}%`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10`}
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}
                    ></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

