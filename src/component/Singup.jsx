'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Mail, Wallet } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sign up to Quickbet</h1>
        
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white/20 rounded-lg py-3 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
            Continue
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/60 mb-4">or sign up with</p>
          <div className="flex justify-center space-x-4">
            {['Metamask', 'Coinbase', 'WalletConnect', 'Phantom', 'Keplr'].map((wallet) => (
              <motion.button
                key={wallet}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <Wallet className="text-white" size={24} />
              </motion.button>
            ))}
          </div>
        </div>
        
        <button className="mt-6 text-white/80 hover:text-white transition-colors text-sm w-full">
          I don't have a wallet
        </button>
        
        <p className="mt-8 text-white/60 text-sm text-center">
          By creating an account you agree to our{' '}
          <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  )
}