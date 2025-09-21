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
      {
        title: "Implementation & Rollout",
        description: "Step-by-step ERPNext deployment aligned with your industry standards and compliance needs. From blueprinting to go-live, we handle it all."
      },
      {
        title: "Customization & App Development",
        description: "Custom workflows, dashboards, and industry-specific apps built on the Frappe framework to make ERPNext fit your exact needs."
      },
      {
        title: "Data Migration Services",
        description: "Secure & accurate migration of data from legacy systems like SAP ECC, S/4HANA, Tally, or spreadsheets into ERPNext."
      },
      {
        title: "Third-Party System Integration",
        description: "Seamless integration of third-party systems like payment gateways, e-commerce platforms, CRM tools, government portals with ERPNext."
      },
      {
        title: "Support & Maintenance",
        description: "Dedicated helpdesk, ticketing portal, and expert team to resolve issues, provide training, and keep your ERPNext running smoothly."
      },
      {
        title: "Training & Adoption",
        description: "Structured training programs to empower your team with ERPNext know-how, ensuring faster adoption and ROI."
      },
      {
        title: "Custom Reports & Dashboards",
        description: "We help you unlock insights with custom reports and dashboards - so your team can make smarter, data-driven decisions every day."
      }
    ],
    features: [
      {
        title: "Open-Source Scalability",
        description: "Scale your business without per-user license costs, making growth affordable and sustainable."
      },
      {
        title: "Granular User Roles & Access",
        description: "Total control at every level with customizable user permissions and role-based access controls."
      },
      {
        title: "Multi-Level Approvals",
        description: "Implement smooth workflows and smarter governance with configurable approval hierarchies."
      },
      {
        title: "API-First Architecture",
        description: "Easy integrations and endless possibilities with robust APIs for seamless connectivity."
      },
      {
        title: "Custom Reports & Insights",
        description: "Generate insights exactly the way you need them with flexible reporting capabilities."
      },
      {
        title: "Multi-Currency & Multi-Language",
        description: "Go global with confidence using built-in support for multiple currencies and languages."
      },
      {
        title: "Multi-Subsidiary Handling",
        description: "Manage multiple businesses under one ERP system with consolidated reporting and control."
      },
      {
        title: "Document Management",
        description: "Store, share, and secure your files effortlessly with integrated document management."
      },
      {
        title: "Workflow Automation",
        description: "Automate day-to-day tasks and streamline business processes for improved efficiency."
      }
    ],
    benefits: [
      {
        title: "Sales Management",
        description: "ERPNext’s Sales module automates the entire order-to-cash process while providing real-time insights to boost sales efficiency and growth."
      },
      {
        title: "Procurement & Buying",
        description: "Streamlines purchasing by automating supplier management, purchase orders, and material requests, ensuring efficient and cost-effective procurement."
      },
      {
        title: "Customer Relationship Management",
        description: "Handles lead management, opportunity tracking, and customer interactions, enhancing sales efficiency and fostering stronger client relationships."
      },
      {
        title: "Accounting & Finance",
        description: "Streamlines financial management by integrating transactions across sales, purchases, and inventory, ensuring accurate bookkeeping and real-time financial insights."
      },
      {
        title: "Inventory Management",
        description: "Offers stock control with real-time tracking, automated replenishment, and comprehensive reporting, ensuring optimal inventory levels and operational efficiency."
      },
      {
        title: "Manufacturing Operations",
        description: "Integrates processes like material planning, work orders, and quality control, enhancing efficiency and reducing costs."
      },
      {
        title: "HR Management",
        description: "Simplifies recruitment, payroll, attendance, and appraisals - bringing all your workforce management into one seamless system."
      },
      {
        title: "Asset Management",
        description: "Handles entire asset lifecycle - from acquisition to disposal - enhancing tracking, maintenance, and financial oversight."
      },
      {
        title: "Project Management",
        description: "Offers project planning and execution by integrating tasks, timelines, resources, and budgets into a unified system."
      }
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
      {
        title: "Custom Software Development",
        description: "Tailored software solutions and applications designed specifically for your business requirements and workflows."
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS, Android, and hybrid platforms with seamless user experiences."
      },
      {
        title: "Web Application Development",
        description: "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance."
      },
      {
        title: "Legacy System Modernization",
        description: "Transform outdated systems into modern, efficient solutions while preserving critical business data and processes."
      }
    ],
    features: [
      {
        title: "Cross-Platform Compatibility",
        description: "Develop once, deploy everywhere with solutions that work seamlessly across different platforms and devices."
      },
      {
        title: "Scalable Architecture Design",
        description: "Future-ready architecture that grows with your business needs and handles increasing user loads efficiently."
      },
      {
        title: "Modern UI/UX Design",
        description: "Intuitive, user-centered design principles that enhance user engagement and satisfaction."
      },
      {
        title: "API-First Development",
        description: "Robust API architecture enabling easy integrations and seamless data exchange between systems."
      },
      {
        title: "Cloud-Native Solutions",
        description: "Built for the cloud with microservices architecture, containerization, and auto-scaling capabilities."
      },
      {
        title: "Agile Development Methodology",
        description: "Iterative development process with continuous feedback, faster delivery, and adaptive planning."
      }
    ],
    benefits: [
      {
        title: "Faster Time-to-Market",
        description: "Accelerated development cycles and streamlined processes to launch your products ahead of competitors."
      },
      {
        title: "Reduced Development Costs",
        description: "Efficient development practices and reusable components that minimize overall project costs."
      },
      {
        title: "Enhanced User Experience",
        description: "Intuitive interfaces and smooth performance that delight users and increase engagement."
      },
      {
        title: "Improved System Performance",
        description: "Optimized code and architecture delivering faster response times and better resource utilization."
      },
      {
        title: "Future-Proof Technology Stack",
        description: "Modern technologies and frameworks that ensure long-term maintainability and scalability."
      }
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
      {
        title: "Hardware & Software Management",
        description: "Complete installation, configuration, and maintenance of hardware and software systems for optimal performance."
      },
      {
        title: "Network Infrastructure",
        description: "Professional network setup, continuous monitoring, and rapid troubleshooting to ensure seamless connectivity."
      },
      {
        title: "Cloud Infrastructure Management",
        description: "Expert management of cloud platforms including AWS, Azure, and GCP for scalable and reliable operations."
      },
      {
        title: "Data Center Operations",
        description: "Comprehensive data center management including server maintenance, storage optimization, and facility monitoring."
      }
    ],
    features: [
      {
        title: "24/7 Monitoring & Support",
        description: "Round-the-clock system monitoring and immediate response to ensure maximum uptime and performance."
      },
      {
        title: "Proactive Maintenance",
        description: "Scheduled maintenance and preventive measures to avoid system failures and optimize performance."
      },
      {
        title: "Disaster Recovery Planning",
        description: "Comprehensive backup strategies and recovery procedures to protect against data loss and system failures."
      },
      {
        title: "Performance Optimization",
        description: "Continuous system tuning and optimization to ensure peak performance and resource efficiency."
      },
      {
        title: "Security Compliance",
        description: "Implementation of security best practices and compliance standards to protect your infrastructure."
      },
      {
        title: "Scalable Infrastructure Design",
        description: "Future-ready infrastructure that can easily scale up or down based on your business requirements."
      }
    ],
    benefits: [
      {
        title: "99.9% Uptime Guarantee",
        description: "Reliable infrastructure management ensuring maximum availability and minimal business disruption."
      },
      {
        title: "Reduced IT Operational Costs",
        description: "Cost-effective solutions and efficient resource management that reduce overall IT expenses."
      },
      {
        title: "Enhanced System Security",
        description: "Robust security measures and compliance protocols protecting your critical business data."
      },
      {
        title: "Improved Disaster Recovery",
        description: "Comprehensive backup and recovery solutions ensuring business continuity during emergencies."
      },
      {
        title: "Scalable Growth Support",
        description: "Infrastructure that grows with your business, supporting expansion without performance degradation."
      }
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
      {
        title: "Database Design & Management",
        description: "Professional database architecture, optimization, and management ensuring efficient data storage and retrieval."
      },
      {
        title: "Business Intelligence Solutions",
        description: "Comprehensive BI platforms that transform raw data into meaningful business insights and strategic information."
      },
      {
        title: "Data Visualization & Reporting",
        description: "Interactive dashboards and custom reports that make complex data easily understandable and actionable."
      },
      {
        title: "Predictive Analytics & AI",
        description: "Advanced analytics and AI-driven insights that help predict trends and optimize business outcomes."
      }
    ],
    features: [
      {
        title: "Real-Time Data Processing",
        description: "Process and analyze data streams in real-time for immediate insights and rapid decision-making."
      },
      {
        title: "Interactive Dashboards",
        description: "User-friendly, customizable dashboards that provide instant access to key metrics and KPIs."
      },
      {
        title: "Predictive Modeling",
        description: "Advanced statistical models and machine learning algorithms to forecast future trends and outcomes."
      },
      {
        title: "Data Warehouse Solutions",
        description: "Centralized data storage systems that integrate data from multiple sources for comprehensive analysis."
      },
      {
        title: "Machine Learning Integration",
        description: "Seamless integration of ML algorithms to automate insights and improve decision-making processes."
      },
      {
        title: "Custom Reporting Tools",
        description: "Tailored reporting solutions that deliver exactly the information you need in your preferred format."
      }
    ],
    benefits: [
      {
        title: "Data-Driven Decision Making",
        description: "Make informed decisions based on accurate data analysis rather than intuition or guesswork."
      },
      {
        title: "Improved Operational Efficiency",
        description: "Identify bottlenecks and optimization opportunities to streamline operations and reduce costs."
      },
      {
        title: "Better Customer Insights",
        description: "Understand customer behavior, preferences, and needs to improve products and services."
      },
      {
        title: "Competitive Advantage",
        description: "Gain market insights and identify opportunities before competitors through advanced analytics."
      },
      {
        title: "ROI Optimization",
        description: "Maximize return on investment by identifying the most profitable strategies and initiatives."
      }
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
      {
        title: "Security Assessment & Testing",
        description: "Comprehensive vulnerability assessments, penetration testing, and continuous security monitoring to identify and address threats."
      },
      {
        title: "Endpoint & Network Security",
        description: "Advanced security solutions protecting endpoints, networks, and infrastructure from cyber threats and unauthorized access."
      },
      {
        title: "Identity & Access Management",
        description: "Robust authentication and authorization systems ensuring only authorized users access sensitive resources."
      },
      {
        title: "Incident Response & Recovery",
        description: "Rapid disaster recovery and incident response protocols to minimize impact and restore operations quickly."
      }
    ],
    features: [
      {
        title: "Advanced Threat Detection",
        description: "AI-powered threat detection systems that identify and respond to sophisticated cyber attacks in real-time."
      },
      {
        title: "Real-Time Security Monitoring",
        description: "24/7 security operations center monitoring all systems for suspicious activities and potential breaches."
      },
      {
        title: "Compliance Management",
        description: "Ensure adherence to industry standards and regulations including GDPR, HIPAA, SOX, and other frameworks."
      },
      {
        title: "Security Awareness Training",
        description: "Comprehensive training programs to educate employees about cybersecurity best practices and threat recognition."
      },
      {
        title: "Incident Response Planning",
        description: "Detailed response procedures and protocols to handle security incidents effectively and minimize damage."
      },
      {
        title: "Regular Security Audits",
        description: "Periodic security assessments and audits to identify vulnerabilities and ensure ongoing protection."
      }
    ],
    benefits: [
      {
        title: "Enhanced Data Protection",
        description: "Multi-layered security measures protecting sensitive business and customer data from breaches and theft."
      },
      {
        title: "Regulatory Compliance",
        description: "Meet industry standards and regulatory requirements while avoiding costly fines and penalties."
      },
      {
        title: "Reduced Security Risks",
        description: "Proactive threat prevention and risk mitigation strategies that significantly reduce cyber attack success rates."
      },
      {
        title: "Business Continuity",
        description: "Ensure uninterrupted operations with robust security measures and rapid incident response capabilities."
      },
      {
        title: "Customer Trust & Reputation",
        description: "Build customer confidence and protect brand reputation through demonstrated commitment to security."
      }
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
      {
        title: "Artificial Intelligence & Machine Learning",
        description: "Advanced AI and ML solutions that automate processes, predict outcomes, and provide intelligent insights for business optimization."
      },
      {
        title: "Internet of Things (IoT) Solutions",
        description: "Connected device ecosystems that collect, analyze, and act on real-time data to improve operations and customer experiences."
      },
      {
        title: "Blockchain Development & Consulting",
        description: "Secure, transparent blockchain solutions for supply chain, finance, and data integrity applications."
      },
      {
        title: "AR/VR Enterprise Solutions",
        description: "Immersive augmented and virtual reality applications for training, visualization, and customer engagement."
      },
      {
        title: "Industrial Automation 4.0",
        description: "Smart manufacturing and industrial automation solutions leveraging IoT, AI, and robotics for enhanced productivity."
      }
    ],
    features: [
      {
        title: "AI-Powered Automation",
        description: "Intelligent automation systems that learn and adapt to optimize business processes and reduce manual intervention."
      },
      {
        title: "Smart IoT Ecosystems",
        description: "Interconnected device networks that provide real-time monitoring, control, and analytics capabilities."
      },
      {
        title: "Blockchain Security",
        description: "Immutable, decentralized security solutions ensuring data integrity and transparent transactions."
      },
      {
        title: "Immersive AR/VR Experiences",
        description: "Cutting-edge augmented and virtual reality applications that transform how users interact with digital content."
      },
      {
        title: "Industry 4.0 Integration",
        description: "Seamless integration of smart technologies into existing industrial processes for enhanced efficiency."
      },
      {
        title: "Edge Computing Solutions",
        description: "Distributed computing architecture that processes data closer to its source for faster response times."
      }
    ],
    benefits: [
      {
        title: "Innovation Leadership",
        description: "Stay ahead of competitors by adopting cutting-edge technologies that differentiate your business in the market."
      },
      {
        title: "Operational Automation",
        description: "Automate complex processes and reduce human error while increasing efficiency and productivity."
      },
      {
        title: "Enhanced Customer Experiences",
        description: "Deliver personalized, immersive experiences that exceed customer expectations and drive loyalty."
      },
      {
        title: "New Revenue Streams",
        description: "Unlock new business opportunities and revenue models through innovative technology implementations."
      },
      {
        title: "Future-Proof Solutions",
        description: "Invest in technologies that will continue to evolve and provide value as your business grows."
      }
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
    { icon: Users, value: "15+", label: "Projects Completed", gradient: "from-blue-500 to-purple-500" },
    { icon: Star, value: "4.9/5", label: "Client Rating", gradient: "from-yellow-500 to-orange-500" },
    { icon: Clock, value: "24/7", label: "Support Available", gradient: "from-green-500 to-emerald-500" },
    { icon: Award, value: "1+", label: "Years Experience", gradient: "from-purple-500 to-pink-500" },
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
                { id: 'benefits', label: service.id === 'erpnext-services' ? 'ERPNext Modules' : 'Benefits', icon: Award },
                { id: 'features', label: 'Key Features', icon: Star },
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
                        className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 border border-green-400/20"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{detail.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{detail.description}</p>
                          </div>
                        </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-150 transition-all duration-300 border border-gray-200 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${service.gradient} group-hover:scale-125 transition-transform duration-300`}></div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
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
                        className="p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 border border-yellow-400/20"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
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
