import React from 'react';
import { BarChart2 } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { FooterSocials } from './FooterSocials';
import { FooterLegal } from './FooterLegal';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-8 w-8" />
              <span className="font-bold text-white text-xl">TradePro</span>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Quadrio offices</p>
              <p>Purkynova 2121/3, 110 00, Prague</p>
              <p>Czech Republic</p>
            </div>
            <div className="space-y-1">
              <p>support@tradepro.com</p>
              <p>+420 910 920 310</p>
              <p>WhatsApp</p>
            </div>
          </div>

          {/* Links Section */}
          <FooterLinks />

          {/* Social Media */}
          <FooterSocials />
        </div>

        {/* Legal Links & Copyright */}
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;