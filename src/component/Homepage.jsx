'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home,  Tennis,  Disc, User, Globe, ChevronDown, Menu, X, DollarSign, Zap, Basketball, Football } from 'lucide-react'
import FootballPage from './Football'

const sports = [
  { icon: <Football className="w-6 h-6" />, name: 'Football' },
  { icon: <Tennis className="w-6 h-6" />, name: 'Tennis' },
  { icon: <Basketball className="w-6 h-6" />, name: 'Basketball' },
  { icon: <Disc className="w-6 h-6" />, name: 'Ice hockey' },
  { icon: <Zap className="w-6 h-6" />, name: 'CS2' },
  { icon: <Disc className="w-6 h-6" />, name: 'Dota 2' },
//   { icon: <Football className="w-6 h-6" />, name: 'American football' },
  { icon: <Disc className="w-6 h-6" />, name: 'Baseball' },
  { icon: <Disc className="w-6 h-6" />, name: 'MMA' },
  { icon: <Disc className="w-6 h-6" />, name: 'Boxing' },
  { icon: <Zap className="w-6 h-6" />, name: 'Valorant' },
]
function DropdownMenu({setCurrentSport}) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setCurrentSport('Football')}>Football</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cricket</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tennis</li>
      </ul>
    </div>
  );
}

export default function QuickbetHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Football')
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSport, setCurrentSport] = useState('Football');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-tighter">StackX</h1>
            <span className="bg-blue-500 text-xs px-2 py-1 rounded-full animate-pulse">WEB3 BETTING</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavItem icon={<Home size={18} />} label="Home" />
            {/* <NavItem icon={<Football size={18} />} label="Sports" /> */}
            <NavItem icon={<Disc size={18} />} label="Games" />
          
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-1">
                <NavItem icon={<ChevronDown size={18} />} label="More" />
              </button>
              {showDropdown && <DropdownMenu setCurrentSport={setCurrentSport} />}
            </div> 
             </div>
          <div className="flex items-center space-x-4">
            <motion.div
              className="bg-purple-600 text-white rounded-full px-3 py-1 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">0.00</span>
              <span className="text-purple-300 text-xs">+</span>
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-full text-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect
            </motion.button>
            <User className="h-6 w-6 cursor-pointer" />
            <Globe className="h-6 w-6 cursor-pointer" />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-sm absolute top-16 left-0 right-0 z-40"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavItem icon={<Home size={18} />} label="Home" />
              {/* <NavItem icon={<Football size={18} />} label="Sports" /> */}
              <NavItem icon={<Disc size={18} />} label="Games" />
              <NavItem icon={<ChevronDown size={18} />} label="More" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2 
              className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Dive into the best crypto betting experience
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bet on your favorite sports and games using cryptgnocurrency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start playing
              </button>
            </motion.div>
          </div>
          <div className="relative">
            <motion.img
              src="/football.webp"
              alt="Sports and gaming characters"
              className="rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-6">Popular Categories</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {sports.map((sport, index) => (
              <CategoryCard
                key={sport.name}
                name={sport.name}
                isActive={activeCategory === sport.name}
                onClick={() => setActiveCategory(sport.name)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Featured {activeCategory} Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          &copy; 2024 Quickbet. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function NavItem({ icon, label }) {
  return (
    <a href="#" className="flex items-center space-x-1 text-sm hover:text-purple-400 transition-colors">
      {icon}
      <span>{label}</span>
    </a>
  )
}

function CategoryCard({ icon, name, isActive, onClick, delay }) {
  return (
    <motion.div 
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer flex flex-col items-center justify-center space-y-2 ${isActive ? 'ring-2 ring-purple-500' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {icon}
      <span className="text-xs text-center">{name}</span>
    </motion.div>
  )
}

function EventCard() {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">UEFA Champions League</span>
        <span className="text-xs text-gray-400">Today, 20:00</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <span>Team A</span>
        </div>
        <span className="text-xl font-bold">VS</span>
        <div className="flex items-center space-x-2">
          <span>Team B</span>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
          1.95
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
          3.40
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
          4.20
        </button>
      </div>
    </motion.div>
  )
}