import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatisticCard } from './StatisticCard';

interface MetricsData {
  equity: number;
  balance: number;
  trades: number;
  lots: number;
  winRate: number;
  avgProfit: number;
  avgLoss: number;
  avgRRR: number;
  expectancy: number;
  profitFactor: number;
  sharpeRatio: number;
}

interface StatisticsGridProps {
  metrics: MetricsData;
}

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({ metrics }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <StatisticCard 
              label="Equity" 
              value={`$${metrics.equity.toLocaleString()}`} 
            />
            <StatisticCard 
              label="Balance" 
              value={`$${metrics.balance.toLocaleString()}`} 
            />
            <StatisticCard 
              label="No. of trades" 
              value={metrics.trades} 
            />
            <StatisticCard 
              label="Lots" 
              value={metrics.lots.toFixed(2)} 
            />
          </div>
          <div className="space-y-4">
            <StatisticCard 
              label="Average profit" 
              value={`$${metrics.avgProfit.toFixed(2)}`}
              valueClassName="text-lg font-semibold text-green-500"
            />
            <StatisticCard 
              label="Average loss" 
              value={`-$${Math.abs(metrics.avgLoss).toFixed(2)}`}
              valueClassName="text-lg font-semibold text-red-500"
            />
            <StatisticCard 
              label="Average RRR" 
              value={metrics.avgRRR.toFixed(2)} 
            />
            <StatisticCard 
              label="Win rate" 
              value={`${(metrics.winRate * 100).toFixed(1)}%`} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};