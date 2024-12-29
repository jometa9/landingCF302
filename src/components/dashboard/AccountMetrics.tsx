import React from 'react';
import { StatisticsGrid } from './metrics/StatisticsGrid';
import { DailySummaryTable } from './metrics/DailySummaryTable';

interface AccountMetricsProps {
  accountId: string;
  metrics: {
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
  };
  dailySummary: Array<{
    date: string;
    trades: number;
    lots: number;
    result: number;
  }>;
}

const AccountMetrics: React.FC<AccountMetricsProps> = ({ metrics, dailySummary }) => {
  return (
    <div className="space-y-6">
      <StatisticsGrid metrics={metrics} />
      <DailySummaryTable data={dailySummary} />
    </div>
  );
};

export default AccountMetrics;