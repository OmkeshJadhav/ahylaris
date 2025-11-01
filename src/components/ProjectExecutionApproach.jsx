
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Settings, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Discovery, Planning & Preparation",
    description: "We start with discovery, pre-planning, and a structured kickoff to align goals and expectations.",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    bgPattern: "bg-blue-50"
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    title: "Design & Strategize",
    description: "Analyze business needs, conduct fit-gap analysis, and create a high-level system design.",
    gradient: "from-purple-500 via-purple-600 to-purple-700",
    bgPattern: "bg-purple-50"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Configure & Development",
    description: "Set up tailored workflows, configure the system with real data, Development.",
    gradient: "from-green-500 via-green-600 to-green-700",
    bgPattern: "bg-green-50"
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Training & UAT",
    description: "Provide hands-on training, test functionalities, and ensure a smooth transition for users.",
    gradient: "from-orange-500 via-orange-600 to-orange-700",
    bgPattern: "bg-orange-50"
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Go Live & Support",
    description: "Deploy the system, offer continuous support, and optimize for long-term success.",
    gradient: "from-teal-500 via-teal-600 to-teal-700",
    bgPattern: "bg-teal-50"
  }
];

const ProjectExecutionApproach = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 19,6 19,14 10,19 1,14 1,6" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" className="text-primary"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-secondary">
            Our Project Execution Approach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic methodology that ensures successful project delivery through proven processes and excellence
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-purple-600 h-full rounded-full hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-50 overflow-hidden border border-gray-100"
                >
                  {/* Progress Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`}
                    />
                  </div>

                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="text-sm font-semibold text-gray-500">Step {index + 1} of {steps.length}</span>
                          <div className="ml-2 flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                                viewport={{ once: true }}
                                className={`w-2 h-2 rounded-full ${
                                  i <= index ? `bg-gradient-to-r ${step.gradient}` : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full shadow-lg border-4 border-white flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="text-sm font-bold text-gray-700">{index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Connecting Lines */}
                  <div className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'left-full' : 'right-full'
                  } w-12 h-0.5 bg-gradient-to-r ${step.gradient} transform -translate-y-1/2`}>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Number Badge */}
              <div className="lg:hidden absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExecutionApproach;

