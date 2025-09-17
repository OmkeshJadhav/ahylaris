
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'images/home/clients-logo/zerodha-logo.svg',
  '/images/home/clients-logo/blinkit-logo.png',
  '/images/home/clients-logo/cloudExtel-logo.png',
  '/images/home/clients-logo/dfm_foods-logo.jfif',
  '/images/home/clients-logo/elasticrun-logo.svg',
  '/images/home/clients-logo/iftas-logo.png',
  '/images/home/clients-logo/jiva-logo.png',
  '/images/home/clients-logo/lifelong-logo.png',
  '/images/home/clients-logo/MagicBus-Logo.png',
  '/images/home/clients-logo/strategic-gears-logo.png',
  '/images/home/clients-logo/vikram-tea-logo.png',
  '/images/home/clients-logo/mrn-logo.jpeg',
  '/images/home/clients-logo/AEL-logo.png',
];

const CustomersWhoTrustUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-secondary"
        >
          Industries Powered by ERPNext
        </motion.h2>
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client ${index + 1}`} className="mx-8 max-h-8" />
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo} alt={`Client ${index + 1}`} className="mx-8 max-h-20" />
            ))}
          </div>
          <img src="../../public/images/home/clients-logo/erp-customers.webp" alt="ERPNext" className="mx-auto max-h-72" />
        </div>
      </div>
    </section>
  );
};

export default CustomersWhoTrustUs;

