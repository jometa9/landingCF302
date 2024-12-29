import React from 'react';

export const FooterPayments = () => {
  return (
    <div className="border-t border-gray-800 py-8">
      <h3 className="text-white font-semibold mb-6">PAYMENT OPTIONS</h3>
      <div className="flex flex-wrap gap-6 items-center opacity-75">
        <div className="text-white font-medium">BANK TRANSFER</div>
        <div>SKRILL</div>
        <div>MASTERCARD</div>
        <div>VISA</div>
      </div>
    </div>
  );
};