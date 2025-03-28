import React, { useEffect, useState } from 'react';
import { ChevronRight, Gauge, Zap, Shield, ArrowRight, Settings, Wrench, Flame } from 'lucide-react';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#EDEDED] overflow-hidden relative min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#232931] skew-x-12 transform translate-x-1/4 z-0 opacity-90"></div>
      <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-[#F73859] filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-[#F1D18A] filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#232931] opacity-5" style={{ backgroundImage: 'linear-gradient(#F73859 1px, transparent 1px), linear-gradient(to right, #F73859 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Enhanced Navigation */}
      <nav className="bg-[#232931] py-4 px-6 relative z-20 border-b border-[#F73859]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Gauge size={28} className="text-[#F73859]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F1D18A] rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold text-white">TURBOPARTS</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-[#F1D18A] transition duration-300 relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#F73859] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#F1D18A] transition duration-300 relative group">
              Shop
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#F73859] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#F1D18A] transition duration-300 relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#F73859] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#F1D18A] transition duration-300 relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#F73859] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div>
            <button className="bg-[#F73859] text-white px-5 py-2.5 rounded-md hover:bg-opacity-90 transition duration-300 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <ChevronRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute top-0 left-0 w-0 h-full bg-[#F1D18A] transition-all duration-300 group-hover:w-full z-0"></span>
              <span className="absolute top-0 left-0 w-0 h-full bg-[#232931] transition-all duration-500 delay-75 group-hover:w-full z-0"></span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Enhanced Hero Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Hero Element */}
          <div className="relative min-h-[650px] flex items-center">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 relative z-20">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F73859] to-[#F73859]/80 text-white px-4 py-1.5 rounded-full shadow-lg">
                  <Flame size={16} className="animate-pulse" />
                  <span className="text-sm font-medium tracking-wider">PREMIUM PERFORMANCE PARTS</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#232931] leading-none tracking-tight">
                  UNLEASH 
                  <div className="relative inline-block mx-3">
                    <span className="relative z-10 text-[#F73859]">YOUR</span>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#F1D18A] -rotate-1 z-0"></div>
                  </div>
                  <span className="block mt-2 text-[#F73859] drop-shadow-sm">ENGINE'S POTENTIAL</span>
                </h1>
                
                <p className="text-xl text-gray-700 max-w-lg font-medium">
                  Premium parts for performance enthusiasts. 
                  <span className="relative inline-block px-1">
                    <span className="relative z-10">Built for speed</span>
                    <span className="absolute bottom-0 left-0 right-0 h-3 bg-[#F1D18A]/30 -rotate-1"></span>
                  </span>, 
                  designed for endurance.
                </p>
                
                <div className="flex flex-wrap gap-6 pt-6">
                  <button className="bg-[#232931] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition duration-300 flex items-center gap-3 shadow-lg group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Collection
                      <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-2" />
                    </span>
                    <span className="absolute top-0 left-0 w-0 h-full bg-[#F73859] transition-all duration-300 group-hover:w-full z-0"></span>
                  </button>
                  <button className="border-2 border-[#232931] text-[#232931] px-8 py-4 rounded-md hover:bg-[#232931] hover:text-white transition duration-300 font-medium relative overflow-hidden group">
                    <span className="relative z-10">Find My Parts</span>
                    <span className="absolute top-0 right-0 w-0 h-full bg-[#232931] transition-all duration-300 group-hover:w-full z-0"></span>
                  </button>
                </div>
                
                {/* Enhanced Brands */}
                <div className="pt-8">
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <span className="h-px w-8 bg-[#F73859] mr-3"></span>
                    TRUSTED BY LEADING BRANDS
                  </p>
                  <div className="flex flex-wrap gap-8 items-center">
                    {['TOYOTA', 'HONDA', 'BMW', 'FORD', 'AUDI'].map((brand, index) => (
                      <span key={index} className="text-[#232931] font-bold text-lg opacity-60 hover:opacity-100 hover:text-[#F73859] transition-all duration-300 cursor-pointer transform hover:-translate-y-1">{brand}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative element */}
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#F1D18A] rounded-full opacity-20 z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
            </div>
            
            {/* Right Side - Enhanced Car Visual */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full overflow-hidden">
              {/* Engine/Parts Showcase */}
              <div className="relative h-full w-full">
                {/* Parallax effect based on scroll */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-[#232931]/80 to-transparent mix-blend-multiply z-10"
                  style={{
                    transform: `translateY(${scrollPosition * 0.1}px)`
                  }}
                ></div>
                
                <img 
                  src="https://pngimg.com/d/engine_PNG28.png" 
                  alt="High Performance Engine"
                  className="h-full w-full object-cover object-center"
                  style={{
                    transform: `translateY(${scrollPosition * 0.15}px) scale(${1 + scrollPosition * 0.0005})`
                  }}
                />
                
                {/* 3D Floating elements */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-br from-[#F73859] to-[#F73859]/80 w-28 h-28 rounded-full flex items-center justify-center shadow-lg animate-pulse relative group">
                    <div className="absolute inset-0 rounded-full bg-[#F73859] blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                    <div className="text-white text-center relative">
                      <div className="text-xs font-medium">UP TO</div>
                      <div className="text-3xl font-black">40%</div>
                      <div className="text-xs uppercase tracking-wider">OFF</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="absolute bottom-1/4 right-1/4 z-20"
                  style={{
                    transform: `translateY(${-scrollPosition * 0.2}px)`
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 shadow-2xl hover:shadow-[#F73859]/20 transition duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings size={22} className="text-[#F1D18A]" />
                      <span className="text-white font-bold">High-Performance Upgrades</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#232931]/80 p-3 rounded-lg hover:bg-[#232931] transition duration-300 group cursor-pointer">
                        <div className="text-[#F1D18A] text-xs font-medium">Turbochargers</div>
                        <div className="text-white font-bold flex justify-between items-center">
                          $1,299
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div className="bg-[#232931]/80 p-3 rounded-lg hover:bg-[#232931] transition duration-300 group cursor-pointer">
                        <div className="text-[#F1D18A] text-xs font-medium">Exhaust Systems</div>
                        <div className="text-white font-bold flex justify-between items-center">
                          $899
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Specs overlay */}
                <div className="absolute left-0 bottom-0 right-0 bg-gradient-to-t from-[#232931] to-transparent py-8 z-20">
                  <div className="flex justify-center gap-12">
                    <div className="text-center group">
                      <div className="text-[#F1D18A] text-2xl font-bold relative">
                        <span className="relative z-10">400+</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F73859]/30 z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                      </div>
                      <div className="text-white text-sm font-medium tracking-wider">HORSEPOWER</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-[#F1D18A] text-2xl font-bold relative">
                        <span className="relative z-10">500+</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F73859]/30 z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                      </div>
                      <div className="text-white text-sm font-medium tracking-wider">TORQUE (lb-ft)</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-[#F1D18A] text-2xl font-bold relative">
                        <span className="relative z-10">3.7s</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F73859]/30 z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                      </div>
                      <div className="text-white text-sm font-medium tracking-wider">0-60 MPH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Features Section */}
          <div className="mt-24 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#F73859] hover:shadow-2xl transition duration-300 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F1D18A]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#232931] to-[#232931]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F73859] transition-colors duration-500 shadow-lg">
                  <Zap size={30} className="text-[#F1D18A] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#232931] mb-3 group-hover:text-[#F73859] transition-colors">Performance Boosting</h3>
                <p className="text-gray-600 leading-relaxed">Engineered to maximize your vehicle's power and responsiveness for an exhilarating driving experience.</p>
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#232931]/5 group-hover:bg-[#232931] transition-colors">
                    <ArrowRight size={16} className="text-[#232931] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#F73859] hover:shadow-2xl transition duration-300 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F1D18A]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#232931] to-[#232931]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F73859] transition-colors duration-500 shadow-lg">
                  <Wrench size={30} className="text-[#F1D18A] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#232931] mb-3 group-hover:text-[#F73859] transition-colors">Precision Engineering</h3>
                <p className="text-gray-600 leading-relaxed">Every part crafted with exacting standards for perfect fitment and uncompromising performance.</p>
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#232931]/5 group-hover:bg-[#232931] transition-colors">
                    <ArrowRight size={16} className="text-[#232931] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#F73859] hover:shadow-2xl transition duration-300 group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F1D18A]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#232931] to-[#232931]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F73859] transition-colors duration-500 shadow-lg">
                  <Shield size={30} className="text-[#F1D18A] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#232931] mb-3 group-hover:text-[#F73859] transition-colors">Lifetime Warranty</h3>
                <p className="text-gray-600 leading-relaxed">Backed by our commitment to quality and customer satisfaction with industry-leading guarantees.</p>
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#232931]/5 group-hover:bg-[#232931] transition-colors">
                    <ArrowRight size={16} className="text-[#232931] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Speed Lines Decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F73859]/30 to-transparent top-1/4 animate-pulse"></div>
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F73859]/30 to-transparent top-2/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F73859]/30 to-transparent top-3/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Vertical lines */}
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#F73859]/10 to-transparent left-1/4 animate-pulse"></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#F73859]/10 to-transparent left-2/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#F73859]/10 to-transparent left-3/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Particle Effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-1">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-[#F73859]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;