import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { useMetaMask } from '../../lib/web3/hooks';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../contexts/AuthContext';

interface MetaMaskButtonProps {
  onSuccess: () => void;
}

const MetaMaskButton: React.FC<MetaMaskButtonProps> = ({ onSuccess }) => {
  const { connectWallet, isConnected } = useMetaMask();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConnect = async () => {
    if (isConnected) {
      onSuccess();
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const result = await connectWallet();
      if (result.address) {
        login(result.address);
        onSuccess();
      }
    } catch (error) {
      console.error('Connection failed:', error);
      setError('Failed to connect to MetaMask. Please make sure it is installed and unlocked.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleConnect}
        disabled={isLoading}
        className="w-full"
        size="lg"
      >
        <Wallet className="w-5 h-5 mr-2" />
        {isLoading ? 'Connecting...' : isConnected ? 'Connected' : 'Connect with MetaMask'}
      </Button>
      
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
};

export default MetaMaskButton;