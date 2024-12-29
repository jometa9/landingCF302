import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AccountCardProps {
  id: string;
  login: string;
  balance: number;
  status: 'funded' | '1step' | '2step' | 'not_passed';
}

export const AccountCard: React.FC<AccountCardProps> = ({
  id,
  login,
  balance,
  status
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'funded':
        return <Badge className="bg-green-500">Funded</Badge>;
      case '1step':
        return <Badge variant="outline">1 step</Badge>;
      case '2step':
        return <Badge variant="outline">2 step</Badge>;
      case 'not_passed':
        return <Badge variant="destructive">Not passed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">ID{login}</h3>
            <p className="text-gray-600 mt-1">Balance: ${balance.toLocaleString()}</p>
          </div>
          <div>{getStatusBadge()}</div>
        </div>
        
        <div className="flex gap-2">
          {status !== 'not_passed' && (
            <Link to={`/trading?account=${login}`} className="flex-1">
              <Button variant="outline" className="w-full">
                Trade
              </Button>
            </Link>
          )}
          <Link to={`/account/${login}/stats`} className="flex-1">
            <Button variant="outline" className="w-full">
              Stats
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}