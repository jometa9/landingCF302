import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type Rule } from '@/lib/challenge-rules';

interface ChallengeRuleProps {
  rule: Rule;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ChallengeRule: React.FC<ChallengeRuleProps> = ({
  rule,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="border-t first:border-t-0">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center hover:bg-gray-50"
      >
        <div className="flex-1 grid grid-cols-4 items-center gap-4">
          <div className="text-blue-600 font-medium text-left">{rule.name}</div>
          <div className="text-center">{rule.challenge}</div>
          <div className="text-center">{rule.verification}</div>
          <div className="text-center">{rule.trader}</div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-400 transition-transform ml-4",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      
      {isExpanded && (
        <div className="px-6 py-4 bg-gray-50">
          <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: rule.description }} />
          {rule.video && (
            <div className="mt-4">
              <iframe
                width="100%"
                height="315"
                src={rule.video}
                title={`${rule.name} explanation`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};