import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const FooterNewsletter = () => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">STAY UPDATED WITH OUR NEWSLETTER!</h3>
      <form className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Email"
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
};