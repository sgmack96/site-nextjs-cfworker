'use client';

import useSWR from 'swr';
import { Fragment } from 'react';

// Define the shape of our data
interface Score {
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'Live' | 'Final' | 'Scheduled';
  time: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function LiveScoreBoard() {
  const { data, error, isLoading } = useSWR('/api/scores', fetcher, {
    // Re-fetch data every 60 seconds to get the latest scores.
    // This is useful for live data that updates frequently.
    refreshInterval: 60000,
  });

  if (isLoading) return <div className="text-center py-8">Loading scores...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Failed to load scores.</div>;
  if (!data || data.length === 0) return <div className="text-center py-8">No games currently active.</div>;

  const groupedScores: Record<string, Score[]> = data.reduce((acc: Record<string, Score[]>, score: Score) => {
    (acc[score.league] = acc[score.league] || []).push(score);
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {Object.entries(groupedScores).map(([league, scores]) => (
        <div key={league} className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center border-b-2 border-blue-600 pb-2">
            {league.toUpperCase()}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scores.map((score, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-center mb-2 text-gray-400">
                  <span className="text-sm font-medium">{score.time}</span>
                  <span className={`text-sm font-bold ${score.status === 'Live' ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
                    {score.status}
                  </span>
                </div>
                <div className="flex items-center justify-between font-bold text-xl md:text-2xl mb-1">
                  <span>{score.homeTeam}</span>
                  <span className="text-2xl md:text-3xl font-extrabold">{score.homeScore}</span>
                </div>
                <div className="flex items-center justify-between font-bold text-xl md:text-2xl">
                  <span>{score.awayTeam}</span>
                  <span className="text-2xl md:text-3xl font-extrabold">{score.awayScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

