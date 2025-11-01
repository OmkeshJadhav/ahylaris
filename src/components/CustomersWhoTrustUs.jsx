
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
          className="text-4xl font-bold text-center mb-3 text-secondary"
        >
          Industries Powered by ERPNext
        </motion.h2>
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap mb-10">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client ${index + 1}`} className="mx-8 max-h-8" />
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo} alt={`Client ${index + 1}`} className="mx-8 max-h-20" />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-center mb-4 text-secondary">Connect Anything. Sync Everything.</h3>
            <div className="text-center text-gray-600">From e-commerce platforms to payment gateways, our ERP integrates effortlessly with 130+ tools - so your entire tech stack works in perfect harmony.</div>
            <img src="/images/home/clients-logo/erp-customers.webp" alt="ERPNext" className="mx-auto max-h-72" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomersWhoTrustUs;

