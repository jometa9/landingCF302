import React from 'react';
import { useParams } from 'react-router-dom';
import { AccountChart } from '@/components/dashboard/AccountChart';
import { ConsistencyScore } from '@/components/dashboard/ConsistencyScore';
import AccountMetrics from '@/components/dashboard/AccountMetrics';

// Mock data - In a real app, this would come from an API
const accountData = {
  balance: 50000,
  maxLoss: 2500,
  trades: 8,
  currentBalance: 50601.46,
  ticket: "1520246170",
  timestamp: "2024-03-15 14:30:00",
  consistencyScore: 37,
  metrics: {
    equity: 50601.46,
    balance: 50601.46,
    trades: 8,
    lots: 63.03,
    winRate: 0.375,
    avgProfit: 482.32,
    avgLoss: -169.10,
    avgRRR: 2.85,
    expectancy: 75.18,
    profitFactor: 1.71,
    sharpeRatio: 0.18
  },
  dailySummary: [
    { date: '7 Jun', trades: 2, lots: 40.00, result: 1446.40 },
    { date: '5 Jun', trades: 1, lots: 0.01, result: 0.57 },
    { date: '4 Jun', trades: 2, lots: 0.02, result: -0.51 },
    { date: '3 Jun', trades: 3, lots: 23.00, result: -845.00 }
  ]
};

const AccountStats = () => {
  const { accountId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Account Statistics - {accountId}
      </h1>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccountChart 
            balance={accountData.balance}
            maxLoss={accountData.maxLoss}
            trades={accountData.trades}
            currentBalance={accountData.currentBalance}
            ticket={accountData.ticket}
            timestamp={accountData.timestamp}
          />
          <ConsistencyScore score={accountData.consistencyScore} />
        </div>

        <AccountMetrics 
          accountId={accountId || ''}
          metrics={accountData.metrics}
          dailySummary={accountData.dailySummary}
        />
      </div>
    </div>
  );
};

export default AccountStats;