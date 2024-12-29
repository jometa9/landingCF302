import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMetaMask } from '../lib/web3/hooks';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthContextType {
  user: { address: string } | null;
  isAuthenticated: boolean;
  login: (address: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { address, isConnected, disconnect } = useMetaMask();
  const [user, setUser] = useState<{ address: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (address: string) => {
    setUser({ address });
    localStorage.setItem('walletAddress', address);
    
    // Navigate to the attempted page or dashboard
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const logout = () => {
    setUser(null);
    disconnect();
    localStorage.removeItem('walletAddress');
    navigate('/login');
  };

  // Check for existing session
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setUser({ address: savedAddress });
    }
  }, []);

  // Update user when MetaMask connection changes
  useEffect(() => {
    if (isConnected && address) {
      setUser({ address });
    } else if (!isConnected && user) {
      setUser(null);
    }
  }, [isConnected, address]);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};