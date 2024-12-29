import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLegal = () => {
  const legalLinks = [
    { label: 'Cookies', href: '/cookies' },
    { label: 'Imprint', href: '/imprint' },
    { label: 'Cookie settings', href: '/cookie-settings' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <>
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed mb-8">
          All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. TradePro only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. TradePro companies do not act as a broker and do not accept any deposits. The offered technical solution for the TradePro platforms and data feed is powered by liquidity providers.
        </p>

        <p className="text-sm">
          2024 © Copyright - TradePro.com Made with ❤️ for trading
        </p>
      </div>
    </>
  );
};