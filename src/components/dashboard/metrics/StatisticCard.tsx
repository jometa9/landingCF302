import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatisticCardProps {
  label: string;
  value: string | number;
  valueClassName?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ 
  label, 
  value, 
  valueClassName = "text-lg font-semibold"
}) => {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={valueClassName}>{value}</p>
    </div>
  );
};