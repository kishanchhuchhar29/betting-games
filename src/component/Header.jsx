// Header.js
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Disc, ChevronDown, DollarSign, Menu, X, User, Globe } from 'lucide-react'

function DropdownMenu({ setCurrentSport }) {
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

export default function Header({ isMenuOpen, setIsMenuOpen, setCurrentSport }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold tracking-tighter">StackX</h1>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded-full animate-pulse">WEB3 BETTING</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavItem icon={<Home size={18} />} label="Home" />
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
