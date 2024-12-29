import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { AccountCard } from '@/components/dashboard/AccountCard';

interface TradingAccount {
  id: string;
  login: string;
  balance: number;
  status: 'funded' | '1step' | '2step' | 'not_passed';
}

const accounts: TradingAccount[] = [
  {
    id: '1',
    login: '1520246170',
    balance: 50601.46,
    status: 'funded'
  },
  {
    id: '2',
    login: '1520246170',
    balance: 50601.46,
    status: '1step'
  },
  {
    id: '3',
    login: '1520246170',
    balance: 50601.46,
    status: '2step'
  },
  {
    id: '4',
    login: '1520246170',
    balance: 50601.46,
    status: 'not_passed'
  }
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Trading Accounts</h1>
          <p className="text-sm text-gray-600">Connected: {user?.address}</p>
        </div>
        <Link to="/challenge/register">
          <Button>New Challenge</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            id={account.id}
            login={account.login}
            balance={account.balance}
            status={account.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;