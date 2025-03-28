import React from 'react';
import { Bell, Gauge, Tag, Zap, Wrench, Check, Truck, Settings } from 'lucide-react';

const MobileAppSection = () => {
  // Car parts theme color palette
  const colors = {
    primary: '#232931',    // Dark navy
    secondary: '#F73859',  // Vibrant red
    accent: '#F1D18A',     // Golden yellow
    background: '#EDEDED'  // Light gray
  };

  // Car-themed app features
  const appFeatures = [
    {
      icon: <Bell size={20} />,
      title: "Parts Availability Alerts",
      description: "Get instant notifications when rare or limited stock parts become available for your vehicle."
    },
    {
      icon: <Gauge size={20} />,
      title: "Performance Calculator",
      description: "Estimate horsepower gains and track performance improvements with our built-in calculator."
    },
    {
      icon: <Truck size={20} />,
      title: "Order Tracking",
      description: "Track your parts shipments in real-time and receive delivery updates directly to your phone."
    },
    {
      icon: <Zap size={20} />,
      title: "Flash Deal Alerts",
      description: "Be first to know when limited-time performance deals drop on parts for your specific vehicle."
    }
  ];

  return (
    <section className="w-full py-16" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* App Preview Image */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[580px] bg-gray-900 rounded-[40px] p-3 shadow-xl relative z-10">
                {/* Screen */}
                <div 
                  className="w-full h-full rounded-[32px] overflow-hidden relative"
                  style={{ backgroundColor: colors.accent }}
                >
                  {/* App interface mockup */}
                  <div className="w-full h-[60px] flex items-center justify-between px-4" style={{ backgroundColor: colors.primary }}>
                    <div className="text-white font-bold">TurboParts</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-white opacity-50"></div>
                      <div className="w-6 h-6 rounded-full bg-white opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* Search bar */}
                  <div className="px-3 py-4">
                    <div 
                      className="w-full h-10 rounded-full flex items-center px-4 text-sm text-gray-500"
                      style={{ backgroundColor: 'white' }}
                    >
                      Search for parts...
                    </div>
                  </div>
                  
                  {/* Featured part */}
                  <div className="px-3">
                    <div className="rounded-xl overflow-hidden bg-white shadow-sm">
                      <div className="h-32 bg-gray-200 flex items-center justify-center">
                        <Wrench size={40} color="#ccc" />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium" style={{ color: colors.primary }}>Performance Exhaust System</div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex items-end">
                            <span className="text-sm font-bold" style={{ color: colors.secondary }}>$549.99</span>
                            <span className="text-xs text-gray-500 ml-1 line-through">$699.99</span>
                          </div>
                          <div className="text-xs px-2 py-1 rounded" style={{ backgroundColor: colors.secondary, color: 'white' }}>
                            IN STOCK
                          </div>
                        </div>
                        <button className="w-full mt-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: colors.secondary }}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category pills */}
                  <div className="px-3 py-4 flex overflow-x-auto space-x-2">
                    {['All', 'Engine', 'Exhaust', 'Brakes', 'Suspension'].map((cat, i) => (
                      <div 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                        style={{ 
                          backgroundColor: i === 0 ? colors.primary : 'white',
                          color: i === 0 ? 'white' : colors.primary
                        }}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional products */}
                  <div className="px-3">
                    {[
                      { name: "Turbocharger Kit", price: "$849.99" },
                      { name: "Performance Brake Kit", price: "$329.99" },
                      { name: "Cold Air Intake", price: "$179.99" }
                    ].map((item, index) => (
                      <div key={index} className="flex bg-white rounded-lg mb-3 overflow-hidden shadow-sm">
                        <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                        </div>
                        <div className="flex-1 p-2">
                          <div className="text-xs font-medium" style={{ color: colors.primary }}>{item.name}</div>
                          <div className="flex justify-between items-center mt-1">
                            <div className="text-xs font-bold" style={{ color: colors.secondary }}>{item.price}</div>
                            <div className="text-xs" style={{ color: colors.primary }}>5.0 ★</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-14 flex justify-around items-center"
                    style={{ backgroundColor: 'white' }}
                  >
                    {[1, 2, 3, 4].map((item) => (
                      <div 
                        key={item} 
                        className="w-8 h-8 rounded-full"
                        style={{ 
                          backgroundColor: item === 1 ? colors.accent : 'transparent',
                          color: item === 1 ? colors.primary : '#ccc'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div 
                className="absolute w-64 h-64 rounded-full -z-10 -bottom-10 -right-10 opacity-15"
                style={{ backgroundColor: colors.secondary }}
              ></div>
              <div 
                className="absolute w-40 h-40 rounded-full -z-10 -top-5 -left-5 opacity-15"
                style={{ backgroundColor: colors.primary }}
              ></div>
            </div>
          </div>
          
          {/* App Info Content */}
          <div className="w-full lg:w-7/12 lg:pl-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>
                Take Your Garage On The Go
              </h2>
              <div className="w-20 h-1 mt-4 mb-6" style={{ backgroundColor: colors.secondary }}></div>
              <p className="text-lg text-gray-600">
                Download the TurboParts mobile app to browse and shop for performance parts anytime, anywhere. Get real-time inventory alerts, track orders, and access exclusive mobile-only deals on parts specifically for your vehicle.
              </p>
            </div>
            
            {/* App Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex group">
                  <div 
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-[#232931]"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? colors.accent : colors.secondary, 
                      color: index % 2 === 0 ? colors.primary : 'white' 
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" style={{ color: colors.primary }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Download badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* App Store badge */}
              <div className="h-14 px-4 bg-black rounded-lg flex items-center hover:opacity-90 transition-opacity cursor-pointer">
                <div className="mr-3 text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5229 12.4479C17.5016 9.59899 19.9249 8.12337 20 8.07964C18.6063 6.0632 16.5048 5.81007 15.7428 5.79215C13.9608 5.60663 12.2334 6.85319 11.3287 6.85319C10.4062 6.85319 9.01519 5.80793 7.5006 5.83799C5.55308 5.86775 3.76334 6.93111 2.78063 8.61223C0.776423 12.0323 2.32152 17.0567 4.26747 19.8512C5.23542 21.2208 6.36514 22.7642 7.85894 22.7141C9.32025 22.6587 9.87393 21.7753 11.6312 21.7753C13.3734 21.7753 13.8975 22.7141 15.4114 22.6837C16.9739 22.6587 17.9468 21.285 18.8767 19.9043C20.0105 18.3107 20.4711 16.7543 20.4906 16.6892C20.4498 16.6765 17.5469 15.5314 17.5229 12.4479Z" fill="white" />
                    <path d="M14.5033 3.73442C15.2876 2.79395 15.8192 1.52054 15.6586 0.228516C14.5524 0.276219 13.1988 0.993448 12.3837 1.91183C11.6646 2.71746 11.0153 4.02893 11.1961 5.28499C12.4254 5.37129 13.6952 4.6556 14.5033 3.73442Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white opacity-80">Download on the</div>
                  <div className="text-lg font-semibold text-white leading-tight">App Store</div>
                </div>
              </div>
              
              {/* Google Play badge */}
              <div className="h-14 px-4 bg-black rounded-lg flex items-center hover:opacity-90 transition-opacity cursor-pointer">
                <div className="mr-3 text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0722 10.784L4.89166 0.603516L17.6355 8.21975L15.0722 10.784Z" fill="#EA4335" />
                    <path d="M4.1748 0L4.89225 0.602658L15.8064 11.5186L17.6378 8.22019L4.1748 0Z" fill="#FBBC04" />
                    <path d="M15.8077 12.4824L4.89355 23.3965L17.639 15.7803L15.8077 12.4824Z" fill="#34A853" />
                    <path d="M4.1748 24L15.8064 12.3687L17.6378 15.6671L4.1748 24Z" fill="#0D652D" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white opacity-80">GET IT ON</div>
                  <div className="text-lg font-semibold text-white leading-tight">Google Play</div>
                </div>
              </div>
            </div>
            
            {/* User stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 group-hover:bg-[#232931] group-hover:text-white"
                  style={{ backgroundColor: colors.accent, color: colors.primary }}
                >
                  <Settings size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: colors.primary }}>50,000+</div>
                  <div className="text-sm text-gray-600">Performance Parts</div>
                </div>
              </div>
              
              <div className="flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3 transition-colors duration-300 group-hover:bg-[#232931] group-hover:text-white"
                  style={{ backgroundColor: colors.accent, color: colors.secondary }}
                >
                  <Gauge size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: colors.secondary }}>4.9/5.0</div>
                  <div className="text-sm text-gray-600">App Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;