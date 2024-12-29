import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MetaMaskButton from '../components/auth/MetaMaskButton';

const ChallengeRegister = () => {
  const [searchParams] = useSearchParams();
  const balance = searchParams.get('balance');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [step, setStep] = useState(1);

  const handleSuccess = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {step === 1 ? 'Connect Your Wallet' : 'Complete Registration'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {step === 1 
            ? 'Connect with MetaMask to start your trading challenge' 
            : `Selected Challenge: $${balance} Account`}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {step === 1 ? (
            <MetaMaskButton onSuccess={handleSuccess} />
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Selected Account Size
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    disabled
                    value={`$${balance}`}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                  />
                </div>
              </div>
              
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Complete Purchase
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeRegister;