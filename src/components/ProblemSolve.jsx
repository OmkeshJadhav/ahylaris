
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolve = () => {
  const problems = [
    {
      icon: "🔧",
      title: "Operation Inefficiencies",
      description: "Outdated processes and disconnected systems?",
      gradient: "from-red-500 via-pink-500 to-purple-600",
      hoverGradient: "from-red-600 via-pink-600 to-purple-700",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: "📈",
      title: "Missed Growth Opportunities",
      description: "Lack the tools to harness real-time data for better decision-making?",
      gradient: "from-blue-500 via-cyan-500 to-teal-600",
      hoverGradient: "from-blue-600 via-cyan-600 to-teal-700",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: "🧩",
      title: "Fragmented Digital Solutions",
      description: "Existing solutions are disintegrated and don't meet unique business needs?",
      gradient: "from-green-500 via-emerald-500 to-cyan-600",
      hoverGradient: "from-green-600 via-emerald-600 to-cyan-700",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: "🧠",
      title: "Pressure To Transform",
      description: "Adopt scalable technologies but face implementation and ROI challenges?",
      gradient: "from-orange-500 via-amber-500 to-yellow-600",
      hoverGradient: "from-orange-600 via-amber-600 to-yellow-700",
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced title section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center justify-center lg:justify-end gap-6">
              <div className="relative">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight"
                >
                  The<br />
                  Problems<br />
                  We Solve
                </motion.h2>
                {/* Decorative accent */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80"
                ></motion.div>
              </div>
              
              {/* Enhanced image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="relative"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/50">
                  <img 
                    src="/images/home/problems-we-solve.png" 
                    alt="problems-we-solve" 
                    className="w-24 lg:w-32 drop-shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Enhanced problem cards */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${problem.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-500`}></div>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.hoverGradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-white/50">
                        <span className="text-3xl filter drop-shadow-sm">{problem.icon}</span>
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl lg:text-2xl font-bold text-white mb-3 drop-shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      >
                        {problem.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/90 text-base leading-relaxed drop-shadow-sm font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        {problem.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                
                {/* Border accent */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolve;

