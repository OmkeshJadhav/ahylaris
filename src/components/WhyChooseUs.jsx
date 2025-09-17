
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { CheckCircle, Star, Zap, Shield, Users } from 'lucide-react';

const reasons = [
  {
    value: "item-1",
    question: "Expertise in ERPNext & Frappe",
    answer: "Our team comprises certified experts with extensive experience in ERPNext and Frappe frameworks, ensuring top-notch solutions and seamless implementations.",
    icon: Star,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    value: "item-2",
    question: "Domain Expertise",
    answer: "We have domain expertise in various industries, including manufacturing, construction, food, chemical and pharma, allowing us to deliver tailored solutions that align with your specific needs.",
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
    bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
  },
  {
    value: "item-3",
    question: "Tailored Solutions",
    answer: "We believe in understanding your unique business needs to deliver customized solutions that perfectly align with your objectives and drive growth.",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    hoverGradient: "from-orange-600 to-red-600",
    bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
  },
  {
    value: "item-4",
    question: "Commitment to Innovation",
    answer: "We continuously adopt the latest technologies and methodologies to provide innovative solutions that keep your business ahead of the curve.",
    icon: CheckCircle,
    gradient: "from-green-500 to-teal-500",
    hoverGradient: "from-green-600 to-teal-600",
    bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  },
  {
    value: "item-5",
    question: "Reliable Support & Partnership",
    answer: "Our relationship doesn't end at deployment. We offer continuous support and act as your trusted technology partner for long-term success.",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
    hoverGradient: "from-indigo-600 to-purple-600",
    bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
      

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the perfect partner for your business transformation journey
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative">
              {/* Main image container with glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src="/images/home/why-choose-us.jpg" 
                  alt="Why Choose Us - Team collaboration" 
                  className="w-full h-96 lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-purple-900/20"></div>
                
                {/* Floating stats cards */}
                {/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div> */}
                
                {/* <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div> */}
              </div>
              
            </div>
          </motion.div>

          {/* Right side - Enhanced Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {reasons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group"
                  >
                    <AccordionItem 
                      value={item.value} 
                      className="relative border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <img 
                          src={item.bgImage} 
                          alt="" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Glassmorphism background */}
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm group-hover:bg-white/70 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative">
                        <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 px-6 group-hover:text-white transition-all duration-500">
                          <div className="flex items-center space-x-4 w-full">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <span className="text-left group-hover:text-gray-800 transition-colors duration-500">
                              {item.question}
                            </span>
                          </div>
                          
                          {/* Hover shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.hoverGradient} opacity-10`}></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                          <div className="pl-16">
                            <p className="text-base leading-relaxed">{item.answer}</p>
                            
                            {/* Decorative accent */}
                            <div className={`mt-4 w-16 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                          </div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

