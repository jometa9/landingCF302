import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLinks = () => {
  const links = {
    COMPANY: [
      { label: 'About us', href: '/about' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
      { label: 'How TradePro works', href: '/how-it-works' },
    ]
  };

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">COMPANY</h3>
      <ul className="space-y-2">
        {links.COMPANY.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};