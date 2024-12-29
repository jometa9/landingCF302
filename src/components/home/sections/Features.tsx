import React from 'react';
import { LineChart, Shield, Clock, Award } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: LineChart,
      title: 'Advanced Trading Tools',
      description: 'Access professional-grade charting and analysis tools'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Trade with confidence on our secure and reliable platform'
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Trade major forex pairs and cryptocurrencies around the clock'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Get help from our team of experienced trading professionals'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-gray-600 mt-4">Everything you need to succeed in trading</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="text-center">
                <div className="inline-flex p-3 rounded-lg bg-blue-50 mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};