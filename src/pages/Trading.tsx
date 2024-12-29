import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TradingSymbolList } from '@/components/trading/TradingSymbolList';
import { TradingAccountInfo } from '@/components/trading/TradingAccountInfo';
import { TradingPositions } from '@/components/trading/TradingPositions';

const Trading = () => {
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('account');
  const [selectedSymbol, setSelectedSymbol] = useState('XAUUSD');
  const [orderType, setOrderType] = useState('market');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Symbol List */}
        <div className="col-span-3">
          <TradingSymbolList 
            selectedSymbol={selectedSymbol}
            onSymbolSelect={setSelectedSymbol}
          />
        </div>

        {/* Right Column - Trading Interface */}
        <div className="col-span-9">
          <div className="grid gap-6">
            {/* Account Info */}
            <TradingAccountInfo accountId={accountId || ''} />

            {/* Trading Interface */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{selectedSymbol} Trading</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline">Sell</Button>
                  <Button>Buy</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="market" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="market" className="flex-1">Market</TabsTrigger>
                    <TabsTrigger value="limit" className="flex-1">Limit</TabsTrigger>
                    <TabsTrigger value="stop" className="flex-1">Stop</TabsTrigger>
                  </TabsList>
                  <TabsContent value="market" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Units</Label>
                        <Input type="number" placeholder="1.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Price</Label>
                        <Input type="number" value="2623.050" disabled />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Take Profit</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label>Stop Loss</Label>
                        <Input type="number" placeholder="0.00" />
                      </div>
                    </div>
                    <Button className="w-full">
                      Place Market Order
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Positions Table */}
            <TradingPositions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;