
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSolve from '../components/ProblemSolve';
import OurServices from '../components/OurServices';
import ProjectExecutionApproach from '../components/ProjectExecutionApproach';
import CaseStudies from '../components/CaseStudies';
import CustomersWhoTrustUs from '../components/CustomersWhoTrustUs';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <ProblemSolve />
      <OurServices />
      <ProjectExecutionApproach />
      <CaseStudies />
      <WhyChooseUs />
      <CustomersWhoTrustUs />
      {/* Other Home page sections will go here */}

    </div>
  );
};

export default Home;

