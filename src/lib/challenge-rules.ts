export interface Rule {
  id: string;
  name: string;
  challenge: string;
  verification: string;
  trader: string;
  description: string;
  video?: string;
}

export function getChallengeRules(balance: number): Rule[] {
  const maxLoss = balance * 0.1;
  const dailyLoss = maxLoss * 0.5;
  const profitTarget = {
    challenge: balance * 0.1,
    verification: balance * 0.05
  };

  // Calculate fee based on balance
  const getFee = (balance: number) => {
    const fees = {
      10000: { normal: 155, discounted: 89 },
      25000: { normal: 250, discounted: 155 },
      50000: { normal: 500, discounted: 250 },
      100000: { normal: 1000, discounted: 500 },
      200000: { normal: 2000, discounted: 1000 }
    };
    return fees[balance as keyof typeof fees] || fees[10000];
  };

  const fee = getFee(balance);

  return [
    {
      id: 'trading-period',
      name: 'Trading Period',
      challenge: 'Unlimited',
      verification: 'Unlimited',
      trader: 'Unlimited',
      description: 'Peace of mind is absolutely crucial in order to be able to fully focus on your trading performance. We don\'t want to put our traders under unnecessary pressure and therefore, the Trading Period is completely unlimited.'
    },
    {
      id: 'minimum-trading-days',
      name: 'Minimum Trading Days',
      challenge: '4 Days',
      verification: '4 Days',
      trader: 'X',
      description: 'To meet this objective, you must trade for at least 4 days during the current duration cycle. At least one position must be opened on each of these days. A trading day is defined as a day when at least one trade is executed.'
    },
    {
      id: 'maximum-daily-loss',
      name: 'Maximum Daily Loss',
      challenge: `$${dailyLoss.toLocaleString()}`,
      verification: `$${dailyLoss.toLocaleString()}`,
      trader: `$${dailyLoss.toLocaleString()}`,
      description: 'This rule can also be called "trader\'s daily stop-loss". According to our rules, this is set at 5% from the initial account balance. The rule says that at any moment of the day (21:01 - Central European (Summer) Time), the result of all closed positions in sum with the currently open floating P/Ls (profit/loss) must not determine daily loss limit.'
    },
    {
      id: 'maximum-loss',
      name: 'Maximum Loss',
      challenge: `$${maxLoss.toLocaleString()}`,
      verification: `$${maxLoss.toLocaleString()}`,
      trader: `$${maxLoss.toLocaleString()}`,
      description: 'This rule can also be called "account stop-loss". The equity of the trading account must not, at any moment during the account duration, decline below 90% of the initial account balance.'
    },
    {
      id: 'profit-target',
      name: 'Profit Target',
      challenge: `$${profitTarget.challenge.toLocaleString()}`,
      verification: `$${profitTarget.verification.toLocaleString()}`,
      trader: 'X',
      description: 'The Profit Target in an FTMO Challenge is set to 10% of the initial balance and 5% in the Verification. A profit target means that a trader reaches a profit in the sum of closed positions on the assigned trading account anytime within the unlimited Trading Period.'
    },
    {
      id: 'refundable-fee',
      name: 'Refundable Fee',
      challenge: `€${fee.discounted} (€${fee.normal})`,
      verification: 'Free',
      trader: 'Refund',
      description: 'The fee is reimbursed to you with the first reward when you become an FTMO Trader. This one-time fee covers both the FTMO Challenge and Verification phases of the program.'
    }
  ];
}