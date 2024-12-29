import React from 'react';
import HeroSection from '../components/home/HeroSection';
import { SocialProof } from '../components/home/sections/SocialProof';
import { Features } from '../components/home/sections/Features';
import ChallengeOptions from '../components/home/ChallengeOptions';
import { HowItWorks } from '../components/home/sections/HowItWorks';
import { Testimonials } from '../components/home/sections/Testimonials';
import { FAQ } from '../components/home/sections/FAQ';
import DiscoverSection from '../components/home/DiscoverSection';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SocialProof />
      <Features />
      <ChallengeOptions />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <DiscoverSection />
      <Footer />
    </div>
  );
}

export default Home;