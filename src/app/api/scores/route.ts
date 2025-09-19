import { NextResponse } from 'next/server';

// This is a mock API response. In a real-world app, you would
// fetch this data from an external sports data provider.
const mockScores = [
  {
    league: 'NFL',
    homeTeam: 'Kansas City Chiefs',
    awayTeam: 'Buffalo Bills',
    homeScore: 24,
    awayScore: 20,
    status: 'Final',
    time: '12:00 PM',
  },
  {
    league: 'NCAAF',
    homeTeam: 'Alabama',
    awayTeam: 'Auburn',
    homeScore: 14,
    awayScore: 7,
    status: 'Live',
    time: 'Q2 5:30',
  },
  {
    league: 'MLB',
    homeTeam: 'Boston Red Sox',
    awayTeam: 'New York Yankees',
    homeScore: 5,
    awayScore: 5,
    status: 'Live',
    time: 'Top 7th',
  },
  {
    league: 'EPL',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    homeScore: 1,
    awayScore: 2,
    status: 'Live',
    time: '85:00',
  },
  {
    league: 'NBA',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Golden State Warriors',
    homeScore: 110,
    awayScore: 108,
    status: 'Final',
    time: '10:00 PM',
  },
  {
    league: 'NCAAF',
    homeTeam: 'Michigan',
    awayTeam: 'Ohio State',
    homeScore: 28,
    awayScore: 21,
    status: 'Final',
    time: '3:30 PM',
  },
];

export async function GET() {
  // Revalidate data every 60 seconds to get the latest scores.
  // This is a powerful Next.js feature for performance and fresh data.
  const response = NextResponse.json(mockScores);
  response.headers.set('Cache-Control', 's-maxage=60');
  return response;
}

