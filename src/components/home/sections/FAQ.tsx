import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FAQ = () => {
  const [openItem, setOpenItem] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is TradePro Challenge?',
      answer: 'TradePro Challenge is a trading evaluation program that allows skilled traders to prove their abilities and receive funding of up to $200,000 to trade with.'
    },
    {
      question: 'How long does the evaluation process take?',
      answer: 'The evaluation process consists of two phases: the Challenge and Verification. Each phase has no time limit, allowing you to trade comfortably at your own pace.'
    },
    {
      question: 'What are the profit targets?',
      answer: "The profit targets vary by account size. For the Challenge phase, it's 10% of the initial balance, and for the Verification phase, it's 5%."
    },
    {
      question: 'What instruments can I trade?',
      answer: 'You can trade a wide range of instruments including Forex pairs, Cryptocurrencies, Indices, Commodities, and Stocks.'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4">Everything you need to know about TradePro</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenItem(openItem === i ? null : i)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-gray-500 transition-transform",
                  openItem === i && "rotate-180"
                )} />
              </button>
              {openItem === i && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};