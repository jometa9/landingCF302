import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart2 } from 'lucide-react';

const DiscoverSection = () => {
  return (
    <div className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-10 w-10 text-white" />
            <span className="font-bold text-white text-2xl">TradePro</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight mb-12">
          DISCOVER YOUR POTENTIAL AND BECOME AN FTMO TRADER
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/challenge/register">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px] bg-white text-black hover:bg-gray-100">
              FTMO Challenge
            </Button>
          </Link>
          <Link to="/free-trial">
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px] text-white border-white hover:bg-white/10">
              Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;