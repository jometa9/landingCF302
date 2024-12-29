import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect } from 'react';

export const useMetaMask = () => {
  const { address, isConnected } = useAccount();
  const { connect, error: connectError, isError, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Restore session on page load
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress && !isConnected) {
      connect({ connector: injected() });
    }
  }, [connect, isConnected]);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed');
      }
      await connect({ connector: injected() });
    } catch (error) {
      console.error('Failed to connect:', error);
      throw error;
    }
  };

  const disconnectWallet = () => {
    disconnect();
    localStorage.removeItem('walletAddress');
  };

  return {
    address,
    isConnected,
    connectWallet,
    disconnect: disconnectWallet,
    isLoading: isPending,
    error: connectError,
    isError
  };
};