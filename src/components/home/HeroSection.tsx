import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 py-32 sm:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            MONETIZE<br />YOUR DEMO TRADING
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
            Master your trading skills on our simulated trading platform, improve your trading on a demo account with up to $200,000 and get a reward of up to 90% of your simulated profits
          </p>
          <div className="mt-10">
            <Link to="/challenge/select">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Start FTMO Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;