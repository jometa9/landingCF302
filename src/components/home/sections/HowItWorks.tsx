import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Pass the Challenge',
      description: 'Complete our trading challenge by following our clear trading objectives'
    },
    {
      title: 'Verification',
      description: 'Prove your consistency by repeating your success in the verification phase'
    },
    {
      title: 'Get Funded',
      description: 'Receive up to $200,000 in trading capital and keep up to 90% of the profits'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How it works?</h2>
          <p className="text-gray-600 mt-4">Three simple steps to become a funded trader</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};