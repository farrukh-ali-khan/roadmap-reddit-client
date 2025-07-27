"use client";

import React from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-dark-bg/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-accent-blue to-accent-purple w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white">R</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Reddit<span className="text-white">Lanes</span>
          </h1>
        </div>

        <button className="p-2 rounded-lg hover:bg-card-dark transition-colors">
          <HiMenu className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
