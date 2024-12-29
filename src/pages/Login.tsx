import React from 'react';
import { useNavigate } from 'react-router-dom';
import MetaMaskButton from '../components/auth/MetaMaskButton';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connect Your Wallet
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Use MetaMask to access your trading account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <MetaMaskButton onSuccess={handleLoginSuccess} />
          
          <div className="mt-6">
            <p className="text-center text-sm text-gray-500">
              Make sure you have MetaMask installed and configured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;