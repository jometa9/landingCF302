import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getChallengeRules } from '@/lib/challenge-rules';

interface ChallengeDetailsProps {
  selectedBalance: number;
}

export const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({ selectedBalance }) => {
  const [expandedRule, setExpandedRule] = useState<string | null>(null);
  const rules = getChallengeRules(selectedBalance);

  return (
    <div className="divide-y">
      {rules.map((rule) => (
        <div key={rule.id} className="bg-white">
          {/* Mobile view */}
          <div className="sm:hidden">
            <div className="px-4 py-4">
              <button
                onClick={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
                className="w-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-md border p-1">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-gray-400 transition-transform",
                        expandedRule === rule.id && "rotate-180"
                      )}
                    />
                  </div>
                  <span className="text-blue-600 font-medium text-left">{rule.name}</span>
                </div>
              </button>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <div className="font-medium">FTMO CHALLENGE</div>
                  <div>{rule.challenge}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">VERIFICATION</div>
                  <div>{rule.verification}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">FTMO TRADER</div>
                  <div>{rule.trader}</div>
                </div>
              </div>

              {expandedRule === rule.id && rule.description && (
                <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {rule.description}
                </div>
              )}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden sm:block">
            <button
              onClick={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
              className="w-full px-6 py-4 hover:bg-gray-50"
            >
              <div className="grid grid-cols-4 items-center">
                <div className="flex items-center gap-2">
                  <div className="rounded-md border p-1">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-gray-400 transition-transform",
                        expandedRule === rule.id && "rotate-180"
                      )}
                    />
                  </div>
                  <span className="text-blue-600 font-medium">{rule.name}</span>
                </div>
                <div className="text-center">{rule.challenge}</div>
                <div className="text-center">{rule.verification}</div>
                <div className="text-center">{rule.trader}</div>
              </div>
            </button>
            
            {expandedRule === rule.id && rule.description && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  {rule.description}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};