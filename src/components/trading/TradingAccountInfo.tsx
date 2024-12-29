import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TradingAccountInfoProps {
  accountId: string;
}

export const TradingAccountInfo: React.FC<TradingAccountInfoProps> = ({ accountId }) => {
  const accountInfo = {
    balance: 1000.90,
    equity: 1000.90,
    unrealizedPL: 0.00,
    margin: 0.00,
    availableFunds: 1000.90,
    ordersMargin: 0.00,
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="space-y-1">
            <p className="text-gray-500">Account Balance</p>
            <p className="font-medium">${accountInfo.balance.toFixed(2)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Equity</p>
            <p className="font-medium">${accountInfo.equity.toFixed(2)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Unrealized P&L</p>
            <p className="font-medium">${accountInfo.unrealizedPL.toFixed(2)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Account margin</p>
            <p className="font-medium">${accountInfo.margin.toFixed(2)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Available funds</p>
            <p className="font-medium">${accountInfo.availableFunds.toFixed(2)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Orders margin</p>
            <p className="font-medium">${accountInfo.ordersMargin.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};