"use client"

import { useState } from 'react'
import { ChevronDown, Clock } from 'lucide-react'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live', count: 3 },
  { id: 'prematch', label: 'Prematch' },
  { id: 'outrights', label: 'Outrights' },
]

const events = [
  {
    id: 1,
    type: 'live',
    tournament: 'Irani Cup',
    team1: { name: 'Mumbai', score: 237 },
    team2: { name: 'Rest of India', score: 0 },
    odds: { team1: 1.18, team2: 4.19 },
    handicap: '+1',
  },
  {
    id: 2,
    type: 'live',
    tournament: 'Twenty20 Tri-Series',
    team1: { name: 'Canada', score: 0 },
    team2: { name: 'Nepal', score: 59 },
    odds: { team1: 2.41, team2: 1.49 },
    handicap: '+8',
  },
  {
    id: 3,
    type: 'prematch',
    tournament: 'Twenty20 Caribbean Premier League',
    team1: { name: 'Trinbago Knight Riders' },
    team2: { name: 'Barbados Tridents' },
    date: 'Oct 2 • 04:30',
    odds: { team1: 1.52, team2: 2.33 },
    handicap: '+6',
  },
  {
    id: 4,
    type: 'prematch',
    tournament: 'T10 Grand Rumble',
    team1: { name: 'Ntrack Sports' },
    team2: { name: 'FRCC' },
    date: 'Oct 2 • 06:00',
    odds: { team1: 2.16, team2: 1.60 },
    handicap: '+1',
  },
]

export default function CricketBetting() {
  const [activeTab, setActiveTab] = useState('all')
  const [sortBy, setSortBy] = useState('time')

  const filteredEvents = events.filter(event => 
    activeTab === 'all' || event.type === activeTab
  )

  return (
    <div className="min-h-screen bg-purple-900 text-white p-4">
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-green-500 text-white' 
                    : 'bg-purple-800 text-purple-200 hover:bg-purple-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-500 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-purple-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-purple-200">{event.tournament}</span>
                {event.date && (
                  <span className="text-sm text-purple-300 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.date}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🏏</span>
                  <div>
                    <span className="font-medium">{event.team1.name}</span>
                    {event.team1.score !== undefined && (
                      <span className="ml-2 text-green-400 font-bold">{event.team1.score}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="font-medium">{event.team2.name}</span>
                    {event.team2.score !== undefined && (
                      <span className="ml-2 text-green-400 font-bold">{event.team2.score}</span>
                    )}
                  </div>
                  <span className="text-2xl">🏏</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="bg-purple-700 px-6 py-2 rounded-md font-medium hover:bg-purple-600 transition-colors">
                    {event.odds.team1}
                  </button>
                  <button className="bg-purple-700 px-6 py-2 rounded-md font-medium hover:bg-purple-600 transition-colors">
                    {event.odds.team2}
                  </button>
                </div>
                <span className="text-purple-300 font-medium">{event.handicap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}