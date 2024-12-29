import React from 'react';
import { cn } from '@/lib/utils';

interface ChallengeHeaderProps {
  selectedBalance: number;
  onBalanceChange: (balance: number) => void;
}

const balanceOptions = [10000, 25000, 50000, 100000, 200000];

export const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  selectedBalance,
  onBalanceChange,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
      {balanceOptions.map((balance) => (
        <button
          key={balance}
          onClick={() => onBalanceChange(balance)}
          className={cn(
            "px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base",
            selectedBalance === balance
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-50"
          )}
        >
          ${balance.toLocaleString()}
        </button>
      ))}
    </div>
  );
};