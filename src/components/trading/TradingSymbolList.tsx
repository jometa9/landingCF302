import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TradingSymbol {
  symbol: string;
  bid: number;
  ask: number;
  change: number;
}

const symbols: TradingSymbol[] = [
  { symbol: 'EURUSD', bid: 1.0426, ask: 1.0428, change: 0.05 },
  { symbol: 'GBPUSD', bid: 1.2566, ask: 1.2568, change: -0.12 },
  { symbol: 'USDJPY', bid: 157.802, ask: 157.804, change: 0.23 },
  { symbol: 'XAUUSD', bid: 2622.035, ask: 2622.050, change: 1.15 },
  { symbol: 'DXY', bid: 108.006, ask: 108.008, change: -0.08 },
];

interface TradingSymbolListProps {
  selectedSymbol: string;
  onSymbolSelect: (symbol: string) => void;
}

export const TradingSymbolList: React.FC<TradingSymbolListProps> = ({
  selectedSymbol,
  onSymbolSelect,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Pairs</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {symbols.map((pair) => (
          <button
            key={pair.symbol}
            onClick={() => onSymbolSelect(pair.symbol)}
            className={cn(
              "w-full p-4 text-left hover:bg-gray-50 border-b last:border-b-0",
              selectedSymbol === pair.symbol && "bg-blue-50"
            )}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{pair.symbol}</span>
              <span className={pair.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                {pair.change >= 0 ? '+' : ''}{pair.change}%
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Bid: {pair.bid}</span>
              <span>Ask: {pair.ask}</span>
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );
};