import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChallengeHeader } from './ChallengeHeader';
import { ChallengeSteps } from './ChallengeSteps';
import { ChallengeDetails } from './ChallengeDetails';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const ChallengeComparison = () => {
  const [selectedBalance, setSelectedBalance] = useState(10000);
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate(`/challenge/register?balance=${selectedBalance}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Challenges</h2>
          <p className="mt-4 text-gray-600">Choose your account size and trading challenge</p>
        </div>

        <ChallengeHeader 
          selectedBalance={selectedBalance} 
          onBalanceChange={setSelectedBalance} 
        />
        
        <div className="mt-8 border rounded-lg bg-white overflow-hidden">
          <ChallengeSteps />
          <ChallengeDetails selectedBalance={selectedBalance} />
          
          <div className="p-6 bg-gray-50 border-t">
            <Button 
              onClick={handleStartChallenge}
              className="w-full"
              size="lg"
            >
              Start FTMO Challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};