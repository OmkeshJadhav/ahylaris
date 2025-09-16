
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const dummyBlogs = [
  {
    title: "The Future of ERP: AI and Automation",
    date: "September 1, 2025",
    author: "Ahylaris Team",
    excerpt: "Explore how artificial intelligence and automation are reshaping the landscape of Enterprise Resource Planning, driving efficiency and innovation.",
    image: "https://via.placeholder.com/400x250/0169ce/FFFFFF?text=Blog+1",
  },
  {
    title: "Unlocking Business Potential with Frappe Framework",
    date: "August 20, 2025",
    author: "Ahylaris Team",
    excerpt: "Discover the power of the Frappe framework in building scalable and robust business applications, and how it can benefit your organization.",
    image: "https://via.placeholder.com/400x250/002f5b/FFFFFF?text=Blog+2",
  },
  {
    title: "Cybersecurity Best Practices for SMEs",
    date: "August 5, 2025",
    author: "Ahylaris Team",
    excerpt: "A comprehensive guide to essential cybersecurity measures that small and medium-sized enterprises can implement to protect their digital assets.",
    image: "https://via.placeholder.com/400x250/0169ce/FFFFFF?text=Blog+3",
  },
  {
    title: "Cloud Migration Strategies: A Step-by-Step Guide",
    date: "July 15, 2025",
    author: "Ahylaris Team",
    excerpt: "Learn about effective strategies and considerations for migrating your business operations to the cloud, ensuring a smooth and successful transition.",
    image: "https://via.placeholder.com/400x250/002f5b/FFFFFF?text=Blog+4",
  },
];

const Blogs = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Our Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl italic"
          >
            Stay updated with our articles on technology, business, and innovation.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyBlogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-primary">{blog.title}</CardTitle>
                    <p className="text-sm text-gray-500">{blog.date} by {blog.author}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700">{blog.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

