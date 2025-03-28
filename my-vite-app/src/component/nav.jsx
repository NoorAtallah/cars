import React, { useState } from 'react';
import { ShoppingBag, Search, Bell, User, Menu, X, Heart, Clock } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Custom color palette
  const colors = {
    primary: '#4335A7',    // Deep purple
    secondary: '#80C4E9',  // Light blue
    accent: '#FFF6E9',     // Cream
    highlight: '#FF7F3E',  // Orange
    background: '#FFFFFF'  // White
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b" style={{ borderColor: colors.secondary }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Bar with announcements */}
        <div 
          className="w-full py-2 text-center text-sm font-medium hidden md:block"
          style={{ backgroundColor: colors.accent, color: colors.primary }}
        >
          New auctions starting every hour! Free shipping on orders over $50
        </div>
        
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg mr-2 flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
              <ShoppingBag size={20} color="white" />
            </div>
            <span className="text-xl font-bold" style={{ color: colors.primary }}>DailyBid</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium" style={{ color: colors.primary }}>Home</a>
            <div className="relative group">
              <a href="#" className="font-medium flex items-center" style={{ color: colors.primary }}>
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 px-4">
                  <a href="#" className="block py-2 text-sm" style={{ color: colors.primary }}>Kitchen & Dining</a>
                  <a href="#" className="block py-2 text-sm" style={{ color: colors.primary }}>Home Organization</a>
                  <a href="#" className="block py-2 text-sm" style={{ color: colors.primary }}>Personal Care</a>
                  <a href="#" className="block py-2 text-sm" style={{ color: colors.primary }}>Electronics</a>
                  <a href="#" className="block py-2 text-sm" style={{ color: colors.primary }}>Fitness & Wellness</a>
                </div>
              </div>
            </div>
            <a href="#" className="font-medium" style={{ color: colors.primary }}>Live Auctions</a>
            <a href="#" className="font-medium" style={{ color: colors.primary }}>How It Works</a>
            <a href="#" className="font-medium" style={{ color: colors.primary }}>Contact</a>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <Heart size={20} style={{ color: colors.primary }} />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: colors.highlight }}>3</span>
              </button>
              <button className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <Bell size={20} style={{ color: colors.primary }} />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: colors.highlight }}>2</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                <User size={20} style={{ color: colors.primary }} />
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium text-white cursor-pointer"
                style={{ backgroundColor: colors.highlight }}
              >
                Sign In
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg"
              onClick={toggleMobileMenu}
              style={{ color: colors.primary }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: colors.secondary }}>
            <div className="flex flex-col space-y-3">
              <a href="#" className="py-2 px-4 font-medium" style={{ color: colors.primary }}>Home</a>
              <a href="#" className="py-2 px-4 font-medium" style={{ color: colors.primary }}>Categories</a>
              <a href="#" className="py-2 px-4 font-medium" style={{ color: colors.primary }}>Live Auctions</a>
              <a href="#" className="py-2 px-4 font-medium" style={{ color: colors.primary }}>How It Works</a>
              <a href="#" className="py-2 px-4 font-medium" style={{ color: colors.primary }}>Contact</a>
              
              <div className="flex space-x-3 py-2 px-4">
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <Heart size={20} style={{ color: colors.primary }} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: colors.highlight }}>3</span>
                </button>
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <Bell size={20} style={{ color: colors.primary }} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: colors.highlight }}>2</span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <User size={20} style={{ color: colors.primary }} />
                </button>
              </div>
              
              <button 
                className="mx-4 py-2 rounded-lg font-medium text-white text-center"
                style={{ backgroundColor: colors.highlight }}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        
        {/* Bottom Navigation - Categories */}
        <div className="hidden md:flex py-3 overflow-x-auto">
          <div className="flex space-x-6">
            <a href="#" className="flex items-center text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: colors.primary, color: 'white' }}>
              All Categories
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Kitchen Essentials
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Home Organization
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Personal Care
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Electronics
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Fitness & Wellness
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              Home Decor
            </a>
            <a href="#" className="flex items-center text-sm whitespace-nowrap" style={{ color: colors.primary }}>
              <Clock size={14} className="mr-1" />
              Ending Soon
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;