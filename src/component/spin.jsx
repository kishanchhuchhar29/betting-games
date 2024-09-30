"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SpinWheelGame = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [range, setRange] = useState({ min: 1, max: 25 });
  const [guess, setGuess] = useState("");
  const [prize, setPrize] = useState(null);
  const [message, setMessage] = useState("");
  const [rotation, setRotation] = useState(0);

  const options = Array.from(
    { length: range.max - range.min + 1 },
    (_, i) => i + range.min
  );
  const numOptions = options.length;

  const spinWheel = () => {
    setIsSpinning(true);
    setMessage("");

    // Calculate random rotation and ensure it does multiple full spins (e.g., 360*5)
    const randomRotation =
      Math.floor(Math.random() * numOptions) * (360 / numOptions) + 360 * 5;

    // Corrected calculation of the selected index after the wheel stops
    const selectedIndex = numOptions - 1 - Math.floor(((randomRotation % 360) / (360 / numOptions))) % numOptions;
    const selectedPrize = options[selectedIndex];

    setRotation(randomRotation);

    setTimeout(() => {
      setPrize(selectedPrize);
      setIsSpinning(false);

      // Display the appropriate message based on the user's guess
      if (selectedPrize === parseInt(guess)) {
        setMessage(
          `Congratulations! You guessed ${guess}, and the wheel landed on ${selectedPrize}!`
        );
      } else {
        setMessage(
          `Sorry! You guessed ${guess}, but the wheel landed on ${selectedPrize}.`
        );
      }
    }, 5000);
  };

  const handleSpin = () => {
    if (parseInt(guess) < range.min || parseInt(guess) > range.max) {
      setMessage(`Please guess a number between ${range.min} and ${range.max}`);
      return;
    }
    spinWheel();
  };

  const getColor = (index) => {
    const colors = [
      "#FF6384",
      "#36A2EB",
      "#FFCD56",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
    ];
    return colors[index % colors.length];
  };

  const createWheel = () => {
    let paths = [];
    let cumulativeAngle = 0;
    for (let i = 0; i < numOptions; i++) {
      const startAngle = cumulativeAngle;
      const angle = (1 / numOptions) * 360;
      cumulativeAngle += angle;
      const endAngle = cumulativeAngle;
      const largeArcFlag = angle <= 180 ? 0 : 1;
      const color = getColor(i);

      const startRadians = (startAngle * Math.PI) / 180;
      const endRadians = (endAngle * Math.PI) / 180;

      const x1 = 50 + 50 * Math.cos(startRadians);
      const y1 = 50 + 50 * Math.sin(startRadians);
      const x2 = 50 + 50 * Math.cos(endRadians);
      const y2 = 50 + 50 * Math.sin(endRadians);

      const path = `
        M 50 50
        L ${x1} ${y1}
        A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}
        Z
      `;

      paths.push(<path key={i} d={path} fill={color} stroke="white" strokeWidth="0.5" />);

      const midAngle = (startAngle + endAngle) / 2;
      const midRadians = (midAngle * Math.PI) / 180;
      const radius = 40;
      const x = 50 + radius * Math.cos(midRadians);
      const y = 50 + radius * Math.sin(midRadians);
      paths.push(
        <text
          key={`text-${i}`}
          x={x}
          y={y}
          fontSize="6"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(${midAngle}, ${x}, ${y})`}
        >
          {options[i]}
        </text>
      );
    }
    return paths;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Spin the Wheel Game
        </h1>

        <div className="space-y-4 mb-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-1">
                Min
              </label>
              <input
                id="min"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={range.min}
                onChange={(e) =>
                  setRange({ ...range, min: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="flex-1">
              <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">
                Max
              </label>
              <input
                id="max"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={range.max}
                onChange={(e) =>
                  setRange({ ...range, max: parseInt(e.target.value) })
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="guess" className="block text-sm font-medium text-gray-700 mb-1">
              Guess a Number
            </label>
            <input
              id="guess"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
          </div>
        </div>

        <div className="relative w-64 h-64 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="1" floodOpacity="0.5" />
              </filter>
            </defs>
            <circle cx="50" cy="50" r="49" fill="white" filter="url(#shadow)" />
            <motion.g
              animate={{ rotate: rotation }}
              transition={{ duration: 5, ease: "easeInOut" }}
              style={{ transformOrigin: "center" }}
            >
              {createWheel()}
            </motion.g>
          </svg>
          <div className="absolute top-0 left-1/2 -ml-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[24px] border-t-red-500" />
        </div>

        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
            isSpinning
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          }`}
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </button>

        {message && (
          <p className="mt-4 text-center text-lg font-medium text-gray-800">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SpinWheelGame;
