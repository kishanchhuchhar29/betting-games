'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Disc, ArrowRight } from 'lucide-react';
import Header from './Header'; // Adjust the import path as necessary

const popularLeagues = [
  { name: 'England. Premier League', matches: 9 },
  { name: 'Spain. La Liga', matches: 9 },
  { name: 'Germany. Bundesliga', matches: 10 },
  { name: 'Italy. Serie A', matches: 10 },
  { name: 'France. Ligue 1', matches: 7 },
  { name: 'Turkey. Superliga', matches: 9 },
];

const upcomingMatches = [
  { league: 'UEFA Champions League', teamA: 'Manchester City', teamB: 'Real Madrid', time: '20:00', odds: [2.10, 3.40, 3.60] },
  { league: 'Premier League', teamA: 'Arsenal', teamB: 'Liverpool', time: '17:30', odds: [2.45, 3.20, 2.90] },
  { league: 'La Liga', teamA: 'Barcelona', teamB: 'Atletico Madrid', time: '21:00', odds: [1.95, 3.50, 4.20] },
];

export default function FootballPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 text-white text-white">
      {/* ?<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Popular Leagues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularLeagues.map((league) => (
                <LeagueCard key={league.name} name={league.name} matches={league.matches} />
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Upcoming Matches</h2>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <MatchCard key={index} match={match} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <BetSlip />
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          &copy; 2024 Quickbet. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
function LeagueCard({ name, matches }) {
    return (
      <motion.div 
        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="font-semibold">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">{matches} matches</span>
          <ArrowRight size={18} className="text-blue-400" />
        </div>
      </motion.div>
    )
  }
  
  function MatchCard({ match }) {
    return (
      <motion.div 
        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{match.league}</span>
          <span className="text-xs text-gray-400">{match.time}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>{match.teamA}</span>
          <span className="text-sm font-bold">VS</span>
          <span>{match.teamB}</span>
        </div>
        <div className="flex justify-between">
          {match.odds.map((odd, index) => (
            <button key={index} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
              {odd}
            </button>
          ))}
        </div>
      </motion.div>
    )
  }
  
  function BetSlip() {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Bet Slip</h3>
        <div className="space-y-4">
          <div className="bg-white/10 rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Manchester City vs Real Madrid</span>
              <button className="text-red-500 text-xs">Remove</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Match Result: Manchester City</span>
              <span className="text-sm font-bold">2.10</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <input 
            type="number" 
            placeholder="Enter stake" 
            className="w-full bg-white/20 rounded py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm">Potential Win:</span>
          <span className="text-lg font-bold">$0.00</span>
        </div>
        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition-colors">
          Place Bet
        </button>
      </div>
    )
  } 

// LeagueCard, MatchCard, and BetSlip components remain unchanged
