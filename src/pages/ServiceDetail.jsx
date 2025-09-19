import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Lightbulb, Code, Server, Database, Shield, Cloud, Rocket } from 'lucide-react';

const serviceCategories = [
  {
    id: "erpnext-services",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    title: "ERPNext Services",
    description: "Comprehensive solutions for ERPNext, from consulting and implementation to customization and ongoing support.",
    longDescription: "At Ahlyaris, we help organizations unlock the full potential of ERPNext with tailored solutions, industry expertise, and end-to-end support. Whether you are migrating from legacy systems or starting fresh, we ensure ERPNext becomes the backbone of your digital transformation. ",
    details: [
      "ERPNext consulting, implementation & Rollout",
      "Customization, workflow automation, third-party integrations & industry-specific apps built on the Frappe",
      "Secure & accurate migration of data from legacy systems like SAP ECC, S/4HANA, Tally, or spreadsheets into ERPNext",
      "Seamless integration of third-party systems like payment gateways, e-commerce platforms, CRM tools, government portals with ERPNext.",
      "Dedicated helpdesk, ticketing portal, and expert team to resolve issues, provide training, and keep your ERPNext running smoothly.",
      "Structured training programs to empower your team with ERPNext know-how, ensuring faster adoption and ROI.",
      "We help you unlock insights with custom reports and dashboards - so your team can make smarter, data-driven decisions every day."
    ],
    features: [
      "Open-source scalability with no per user license cost.",
      "Granular User Roles & Access: Total control at every level",
      "Multi-Level Approvals: Smooth workflows, smarter governance",
      "API-First Architecture: Easy integrations, endless possibilities",
      "Custom Reports: Insights the way you need them",
      "Multi-Currency and Multi-Language Support: Go global with confidence",
      "Multi-Subsidiary Handling: One ERP, many businesses",
      "Document Management: Store, share & secure your files effortlessly.",
      "Workflow Automation to automate day-to-day tasks"
    ],
    benefits: [
      "Sales: Automates the entire order-to-cash process while providing real-time insights to boost sales efficiency and growth.",
      "Procurement/Buying: Streamlines purchasing by automating supplier management, purchase orders, and material requests, ensuring efficient and cost-effective procurement.",
      "Customer Relationship Management : Handles lead management, opportunity tracking, and customer interactions, enhancing sales efficiency and fostering stronger client relationships.",
      "Accounting: Streamlines financial management by integrating transactions across sales, purchases, and inventory, ensuring accurate bookkeeping and real-time financial insights.",
      "Inventory Management: Offers stock control with real-time tracking, automated replenishment, and comprehensive reporting, ensuring optimal inventory levels and operational efficiency.",
      "Manufacturing: Integrates processes like material planning, work orders, and quality control, enhancing efficiency and reducing costs.",
      "HR Management: Simplifies recruitment, payroll, attendance, and appraisals -bringing all your workforce management into one seamless system.",
      "Asset Management: Handles entire asset lifecycle - from acquisition to disposal - enhancing tracking, maintenance, and financial oversight.",
      "Project Management: Offers project planning and execution by integrating tasks, timelines, resources, and budgets into a unified system."
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
    longDescription: "Create powerful, scalable software solutions tailored to your unique business needs. Our expert development team delivers high-quality applications across all platforms, ensuring seamless integration with your existing infrastructure.",
    details: [
      "Custom software & application development",
      "Mobile app development (iOS, Android, cross-platform)",
      "Web application development",
      "Legacy system modernization",
    ],
    features: [
      "Cross-platform compatibility",
      "Scalable architecture design",
      "Modern UI/UX design principles",
      "API-first development approach",
      "Cloud-native solutions",
      "Agile development methodology"
    ],
    benefits: [
      "Faster time-to-market",
      "Reduced development costs",
      "Enhanced user experience",
      "Improved system performance",
      "Future-proof technology stack"
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
    longDescription: "Ensure your IT infrastructure runs smoothly with our comprehensive support services. From hardware management to cloud infrastructure, we provide reliable, scalable solutions that keep your business running 24/7.",
    details: [
      "Hardware & software installation and maintenance",
      "Network setup, monitoring, and troubleshooting",
      "Cloud infrastructure management (AWS, Azure, GCP)",
      "Data center management",
    ],
    features: [
      "24/7 monitoring and support",
      "Proactive maintenance schedules",
      "Disaster recovery planning",
      "Performance optimization",
      "Security compliance",
      "Scalable infrastructure design"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Reduced IT operational costs",
      "Enhanced system security",
      "Improved disaster recovery",
      "Scalable growth support"
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
    longDescription: "Unlock the power of your data with our advanced analytics solutions. We help you transform raw data into meaningful insights that drive strategic decision-making and business growth.",
    details: [
      "Database design, management & optimization",
      "Business intelligence (BI) solutions",
      "Data visualization & reporting",
      "Predictive analytics & AI-driven insights",
    ],
    features: [
      "Real-time data processing",
      "Interactive dashboards",
      "Predictive modeling",
      "Data warehouse solutions",
      "Machine learning integration",
      "Custom reporting tools"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Better customer insights",
      "Competitive advantage",
      "ROI optimization"
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
    longDescription: "Safeguard your business with our comprehensive cybersecurity solutions. We provide multi-layered protection against evolving threats, ensuring your data and systems remain secure.",
    details: [
      "Vulnerability assessments, penetration testing & Security monitoring",
      "Endpoint and network security solutions",
      "Identity and access management",
      "Disaster recovery & incident response",
    ],
    features: [
      "Advanced threat detection",
      "Real-time security monitoring",
      "Compliance management",
      "Security awareness training",
      "Incident response planning",
      "Regular security audits"
    ],
    benefits: [
      "Enhanced data protection",
      "Regulatory compliance",
      "Reduced security risks",
      "Business continuity",
      "Customer trust"
    ],
    gradient: "from-red-400 via-orange-500 to-yellow-500",
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-red-500 via-orange-600 to-yellow-600"
  },
  {
    id: "emerging-technologies",
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: "Emerging Technologies",
    description: "Leveraging the power of AI/ML, IoT, Blockchain, and AR/VR to build future-ready solutions for your enterprise.",
    longDescription: "Stay ahead of the curve with cutting-edge technologies. We help you harness the power of AI, IoT, Blockchain, and AR/VR to create innovative solutions that drive your business into the future.",
    details: [
      "Artificial Intelligence (AI) & Machine Learning (ML)",
      "Internet of Things (IoT) solutions",
      "Blockchain development & consulting",
      "AR/VR solutions for enterprises",
      "Industrial Automation 4.0",
    ],
    features: [
      "AI-powered automation",
      "Smart IoT ecosystems",
      "Blockchain security",
      "Immersive AR/VR experiences",
      "Industry 4.0 integration",
      "Edge computing solutions"
    ],
    benefits: [
      "Innovation leadership",
      "Operational automation",
      "Enhanced customer experiences",
      "New revenue streams",
      "Future-proof solutions"
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format",
    hoverGradient: "from-emerald-500 via-teal-600 to-cyan-700"
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  
  const service = serviceCategories.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center text-gray-900">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/services')} className="bg-purple-600 hover:bg-purple-700">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Users, value: "100+", label: "Projects Completed", gradient: "from-blue-500 to-purple-500" },
    { icon: Star, value: "4.9/5", label: "Client Rating", gradient: "from-yellow-500 to-orange-500" },
    { icon: Clock, value: "24/7", label: "Support Available", gradient: "from-green-500 to-emerald-500" },
    { icon: Award, value: "5+", label: "Years Experience", gradient: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate('/services')}
              variant="ghost"
              className="text-gray-900 hover:bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}
                >
                  {service.icon}
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  {service.title}
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {service.longDescription}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-50/30 rounded-xl backdrop-blur-sm border border-gray-200"></div>
                    <div className="relative p-4 text-center">
                      <div className={`inline-flex p-2 rounded-full bg-gradient-to-r ${stat.gradient} mb-2`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600 text-xs">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          {/* Horizontal Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-gray-100/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200">
              {[
                { id: 'details', label: 'What We Offer', icon: CheckCircle },
                { id: 'features', label: 'Key Features', icon: Star },
                { id: 'benefits', label: service.id === 'erpnext-services' ? 'ERPNext Modules' : 'Benefits', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-50/30 rounded-3xl backdrop-blur-sm border border-gray-200"></div>
            <div className="relative p-8 md:p-12">
              {activeTab === 'details' && (
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
                    What We Offer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {service.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 border border-green-400/20"
                      >
                        <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full mr-4 bg-gradient-to-r ${service.gradient}`}></div>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-150 transition-all duration-300 border border-gray-200 group"
                      >
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${service.gradient} group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-400 mr-4" />
                    {service.id === 'erpnext-services' ? 'Key Modules of ERPNext' : 'Benefits'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 border border-yellow-400/20"
                      >
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-50/30 rounded-3xl backdrop-blur-sm border border-gray-200"></div>
              <div className="relative p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our {service.title} can transform your business and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate('/contact')}
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Get Started Today
                  </Button>
                  <Button
                    onClick={() => navigate('/contact')}
                    variant="outline"
                    className="border-purple-400 text-purple-700 hover:bg-purple-100 hover:border-purple-500 hover:text-purple-800 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
