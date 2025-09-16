
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const caseStudiesData = [
  {
    title: "SAP ECC to ERPNext Implementation for Manufacturing",
    description: "Successful migration of a manufacturing company from SAP ECC to ERPNext, streamlining operations, reducing costs, and enabling real-time visibility across production, inventory, and finance. The transformation showcases how ERPNext empowered the business with flexibility, scalability, and ease of use compared to legacy SAP systems",
    image: "/images/home/case-studies/discrete-manufacturing.webp",
  },
  {
    title: "Pharma Manufacturer & Distributor Supply Chain using ERPNext",
    description: "Pharmaceutical manufacturer and distributor streamlined its supply chain operations using ERPNext. The implementation improved inventory tracking, regulatory compliance, and real-time collaboration across manufacturing, warehousing, and distribution channels.",
    image: "/images/home/case-studies/pharma-manufacturing.jpg",
  },
  {
    title: "Agriculture and Food Industry Supply Chain using ERPNext",
    description: "Agriculture and food industry optimized its supply chain with ERPNext, enabling better farm-to-fork visibility, efficient inventory management, and compliance with food safety standards. The solution improved traceability, reduced waste, and enhanced coordination across production, storage, and distribution.",
    image: "/images/home/case-studies/food-processing.jpg",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-secondary"
        >
          Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-700">{study.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

