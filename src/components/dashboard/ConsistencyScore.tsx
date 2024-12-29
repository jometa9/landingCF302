import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ConsistencyScoreProps {
  score: number;
}

export const ConsistencyScore: React.FC<ConsistencyScoreProps> = ({ score }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Consistency Score</CardTitle>
        <span className="text-blue-600 font-semibold">{score}%</span>
      </CardHeader>
      <CardContent>
        <Progress value={score} className="h-2" />
      </CardContent>
    </Card>
  );
};