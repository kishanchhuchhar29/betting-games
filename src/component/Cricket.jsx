"use client";

import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live', count: 3 },
  { id: 'prematch', label: 'Prematch' },
  { id: 'outrights', label: 'Outrights' },
];

const liveEvents = [
  {
    id: 1,
    tournament: 'Irani Cup',
    team1: { name: 'Mumbai', score: 237 },
    team2: { name: 'Rest of India', score: 0 },
    odds: { team1: 1.18, team2: 4.19 },
    handicap: '+1',
  },
  {
    id: 2,
    tournament: 'Twenty20 Tri-Series',
    team1: { name: 'Canada', score: 0 },
    team2: { name: 'Nepal', score: 59 },
    odds: { team1: 2.41, team2: 1.49 },
    handicap: '+8',
  },
];

const prematchEvents = [
  {
    id: 3,
    tournament: 'Twenty20 Caribbean Premier League',
    team1: { name: 'Trinbago Knight Riders', logo: '🏏' },
    team2: { name: 'Barbados Tridents', logo: '🏏' },
    date: 'Oct 2 • 04:30',
    odds: { team1: 1.52, team2: 2.33 },
    handicap: '+6',
  },
  {
    id: 4,
    tournament: 'T10 Grand Rumble',
    team1: { name: 'Ntrack Sports', logo: '🏏' },
    team2: { name: 'FRCC', logo: '🏏' },
    date: 'Oct 2 • 06:00',
    odds: { team1: 2.16, team2: 1.60 },
    handicap: '+1',
  },
];

export default function CricketBetting() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('time');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const displayEvents = activeTab === 'prematch' ? prematchEvents : liveEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <div className=" min-h-screen bg-purple-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-3 py-1 rounded-md ${activeTab === tab.id ? 'bg-green-500' : 'bg-purple-800'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {tab.count && <span className="ml-1 text-xs bg-red-500 rounded-full px-1">{tab.count}</span>}
              </button>
            ))}
          </div>
          {/* <button className="flex items-center bg-purple-800 px-3 py-1 rounded-md">
            Sort by {sortBy}
            <ChevronDown className="ml-1 w-4 h-4" />
          </button> */}
        </div>

        {/* Events Display */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{activeTab === 'prematch' ? 'Upcoming matches' : 'Live events'}</h2>
          {displayEvents.map((event) => (
            <div key={event.id} className="bg-purple-800 rounded-lg p-4 max-w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-purple-300">{event.tournament}</span>
                {event.date && (
                  <span className="text-sm text-purple-300 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.date}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-center space-x-2">
                  <span>{event.team1.logo || '🏏'}</span>
                  <span>{event.team1.name}</span>
                  {event.team1.score !== undefined && <span className="text-green-400">{event.team1.score}</span>}
                </div>
                <div className="flex items-center space-x-2">
                  <span>{event.team2.logo || '🏏'}</span>
                  <span>{event.team2.name}</span>
                  {event.team2.score !== undefined && <span className="text-green-400">{event.team2.score}</span>}
                </div>
              </div>
              <div className="mt-4 flex justify-between flex-wrap">
                <div className="flex space-x-2">
                  <button className="bg-purple-700 px-3 py-1 rounded">{event.odds.team1}</button>
                  <button className="bg-purple-700 px-3 py-1 rounded">{event.odds.team2}</button>
                </div>
                <span className="text-purple-300">{event.handicap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
