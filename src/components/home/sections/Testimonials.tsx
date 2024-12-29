import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Trader',
      content: 'The platform has completely transformed my trading career. The funding opportunity and support are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Forex Trader',
      content: "Best prop firm I've worked with. Their rules are clear and the platform is incredibly reliable.",
      rating: 5
    },
    {
      name: 'David Smith',
      role: 'Crypto Trader',
      content: 'The evaluation process is fair and the profit splits are excellent. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Trader Testimonials</h2>
          <p className="text-gray-600 mt-4">What our successful traders say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};