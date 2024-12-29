import React from 'react';

export const ChallengeSteps = () => {
  return (
    <div className="hidden sm:grid sm:grid-cols-4 border-b text-sm">
      <div className="p-4 text-left pl-6">
        <div className="text-gray-500">RULES</div>
      </div>
      {['FTMO CHALLENGE', 'VERIFICATION', 'FTMO TRADER'].map((step, index) => (
        <div
          key={step}
          className="p-4 text-center"
        >
          <div className="text-gray-500">STEP {index + 1}</div>
          <div className="font-medium mt-1">{step}</div>
        </div>
      ))}
    </div>
  );
};