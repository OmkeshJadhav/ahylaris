
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

const HeroSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);
  const intervalRef = useRef(null);

  const carouselItems = [
    {
      title: "Transforming Businesses, Empowering Futures.",
      description: "Cutting-edge digital transformation services and ERP solutions designed to elevate businesses, streamline operations, and ensure sustainable growth.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "One system, for all your business needs.",
      description: "Supercharge your business with ERPNext ⚡️, the all-in-one platform that automates everything from sales to inventory.",
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Pure Ideas, Excellent Solutions.",
      description: "Transforming businesses with cutting-edge ERPNext and Frappe solutions.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Function to start/restart the auto-play timer
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      if (api) {
        const nextIndex = (currentIndex + 1) % carouselItems.length;
        api.scrollTo(nextIndex);
        setCurrentIndex(nextIndex);
      }
    }, 5000);
  }, [api, currentIndex, carouselItems.length]);

  // Function to handle manual navigation
  const handleManualNavigation = useCallback((direction) => {
    if (api) {
      let nextIndex;
      if (direction === 'next') {
        nextIndex = (currentIndex + 1) % carouselItems.length;
      } else {
        nextIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
      }
      
      api.scrollTo(nextIndex);
      setCurrentIndex(nextIndex);
      startAutoPlay(); // Reset the timer
    }
  }, [api, currentIndex, carouselItems.length, startAutoPlay]);

  // Initialize carousel API and auto-play
  useEffect(() => {
    if (api) {
      startAutoPlay();
      
      // Listen for slide changes to update current index
      api.on('select', () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, startAutoPlay]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Carousel 
        ref={carouselRef} 
        className="w-full h-[100vh]"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[100vh]">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="h-[100vh]">
              <div
                className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 p-8"
                >
                  <h2 className="text-5xl font-bold mb-4">{item.title}</h2>
                  <p className="text-xl">{item.description}</p>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20" 
          onClick={() => handleManualNavigation('prev')}
        />
        <CarouselNext 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20" 
          onClick={() => handleManualNavigation('next')}
        />
      </Carousel>
    </section>
  );
};

export default HeroSection;

