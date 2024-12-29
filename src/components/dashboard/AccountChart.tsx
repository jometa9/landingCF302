import React from 'react';
import { LineChart as LucideLineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AccountChartProps {
  balance: number;
  maxLoss: number;
  trades: number;
  currentBalance: number;
  ticket: string;
  timestamp: string;
}

export const AccountChart: React.FC<AccountChartProps> = ({
  balance,
  maxLoss,
  trades,
  currentBalance,
  ticket,
  timestamp
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <LucideLineChart className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <div className="space-y-1 text-sm text-gray-600">
              <p>Number of trades: {trades}</p>
              <p>Ticket: {ticket}</p>
              <p>Time: {timestamp}</p>
              <p>Balance: ${currentBalance.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};