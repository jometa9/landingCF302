import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { QueryClientProvider } from '@tanstack/react-query';
import { config, queryClient } from './lib/web3/config';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trading from './pages/Trading';
import AccountStats from './pages/AccountStats';
import ChallengeRegister from './pages/ChallengeRegister';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <Router>
          <AuthProvider>
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/challenge/register" element={<ChallengeRegister />} />
                  <Route 
                    path="/dashboard" 
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    } 
                  />
                  <Route 
                    path="/trading" 
                    element={
                      <PrivateRoute>
                        <Trading />
                      </PrivateRoute>
                    } 
                  />
                  <Route 
                    path="/account/:accountId/stats" 
                    element={
                      <PrivateRoute>
                        <AccountStats />
                      </PrivateRoute>
                    } 
                  />
                </Routes>
              </main>
            </div>
          </AuthProvider>
        </Router>
      </WagmiConfig>
    </QueryClientProvider>
  );
}

export default App;