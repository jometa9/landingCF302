import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DailySummaryEntry {
  date: string;
  trades: number;
  lots: number;
  result: number;
}

interface DailySummaryTableProps {
  data: DailySummaryEntry[];
}

export const DailySummaryTable: React.FC<DailySummaryTableProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-3">Date</th>
                <th className="pb-3">Trades</th>
                <th className="pb-3">Lots</th>
                <th className="pb-3 text-right">Result</th>
              </tr>
            </thead>
            <tbody>
              {data.map((day) => (
                <tr key={day.date} className="border-t">
                  <td className="py-3">{day.date}</td>
                  <td className="py-3">{day.trades}</td>
                  <td className="py-3">{day.lots.toFixed(2)}</td>
                  <td className={`py-3 text-right ${day.result >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ${day.result.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};