
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Lightbulb, Code, Server, Database, Shield, Cloud, Rocket } from 'lucide-react';

const serviceCategories = [
  {
    id: "erpnext-services",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    title: "ERPNext Services",
    description: "Comprehensive solutions for ERPNext, from consulting and implementation to customization and ongoing support.",
    details: [
      "ERPNext consulting, implementation & module-wise deployment",
      "Customization, workflow automation & third-party integrations",
      "Data migration, user training & adoption support",
      "Ongoing support, upgrades & cloud/on-premise hosting solutions",
    ],
    gradient: "from-orange-400 via-red-500 to-pink-500",
    bgImage: "/images/services/erp-services.jpg",
    hoverGradient: "from-orange-500 via-red-600 to-pink-600"
  },
  {
    id: "software-development",
    icon: <Code className="h-10 w-10 text-white" />,
    title: "Software Development",
    description: "Building custom software, mobile, and web applications, and integrating them seamlessly with existing systems.",
    details: [
      "Custom software & application development",
      "Mobile app development (iOS, Android, cross-platform)",
      "Web application development",
      "Legacy system modernization",
    ],
    gradient: "from-blue-400 via-purple-500 to-indigo-600",
    bgImage: "/images/services/software-development.jpg",
    hoverGradient: "from-blue-500 via-purple-600 to-indigo-700"
  },
  {
    id: "it-infrastructure-support",
    icon: <Server className="h-10 w-10 text-white" />,
    title: "IT Infrastructure & Support",
    description: "Managing your IT backbone with installation, maintenance, network setup, and cloud infrastructure management.",
    details: [
      "Hardware & software installation and maintenance",
      "Network setup, monitoring, and troubleshooting",
      "Cloud infrastructure management (AWS, Azure, GCP)",
      "Data center management",
    ],
    gradient: "from-green-400 via-teal-500 to-blue-500",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-green-500 via-teal-600 to-blue-600"
  },
  {
    id: "data-analytics",
    icon: <Database className="h-10 w-10 text-white" />,
    title: "Data & Analytics",
    description: "Transforming raw data into actionable insights with database management, BI solutions, and AI-driven analytics.",
    details: [
      "Database design, management & optimization",
      "Business intelligence (BI) solutions",
      "Data visualization & reporting",
      "Predictive analytics & AI-driven insights",
    ],
    gradient: "from-purple-400 via-pink-500 to-red-500",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-purple-500 via-pink-600 to-red-600"
  },
  {
    id: "cybersecurity-services",
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "Cybersecurity Services",
    description: "Protecting your digital assets with vulnerability assessments, penetration testing, and robust security solutions.",
    details: [
      "Vulnerability assessments, penetration testing & Security monitoring",
      "Endpoint and network security solutions",
      "Identity and access management",
      "Disaster recovery & incident response",
    ],
    gradient: "from-red-400 via-orange-500 to-yellow-500",
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-red-500 via-orange-600 to-yellow-600"
  },
  // {
  //   icon: <Cloud className="h-10 w-10 text-white" />,
  //   title: "Cloud Services",
  //   description: "Facilitating your journey to the cloud with migration, hosting, storage, and virtualization solutions.",
  //   details: [
  //     "Cloud migration and adoption",
  //     "Cloud hosting & storage solutions",
  //     "SaaS (Software as a Service), PaaS, IaaS solutions",
  //     "Virtualization & containerization (VMware, Docker, Kubernetes)",
  //   ],
  //   gradient: "from-cyan-400 via-blue-500 to-indigo-600",
  //   bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=entropy&auto=format",
  //   hoverGradient: "from-cyan-500 via-blue-600 to-indigo-700"
  // },
  {
    id: "emerging-technologies",
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: "Emerging Technologies",
    description: "Leveraging the power of AI/ML, IoT, Blockchain, and AR/VR to build future-ready solutions for your enterprise.",
    details: [
      "Artificial Intelligence (AI) & Machine Learning (ML)",
      "Internet of Things (IoT) solutions",
      "Blockchain development & consulting",
      "AR/VR solutions for enterprises",
      "Industrial Automation 4.0",
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-emerald-500 via-teal-600 to-cyan-700"
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

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
            Our Comprehensive Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl italic"
          >
            Empowering your business with cutting-edge IT solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex bg-white`}>
                  
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div 
                      className="h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${category.bgImage})` }}
                    />
                    
                    {/* Gradient Overlay on Image */}
                    {/* <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 group-hover:opacity-15 transition-opacity duration-300`} /> */}
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-lg group-hover:bg-white/15 transition-colors duration-300" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className={`text-3xl lg:text-4xl font-bold p-1 mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {category.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Details List */}
                    <div className="mb-8">
                      <ul className="space-y-4">
                        {category.details.map((detail, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                            className="flex items-start space-x-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                          >
                            <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${category.gradient} group-hover:scale-125 transition-transform duration-300`} />
                            <span className="text-base leading-relaxed">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handleLearnMore(category.id)}
                        className={`px-6 py-3 bg-gradient-to-r ${category.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      <div className="text-sm text-gray-500 font-medium">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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

export default Services;

