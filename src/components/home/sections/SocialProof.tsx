import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof = () => {
  const stats = [
    { value: '50K+', label: 'Active Traders' },
    { value: '$2M+', label: 'Profit Paid' },
    { value: '95%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};