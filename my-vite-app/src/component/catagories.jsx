import React from 'react';
import { ArrowRight, Gauge, Settings, Zap, Wrench, Truck, Disc, LifeBuoy, Fuel, Sparkles } from 'lucide-react';

const FeaturedCategoriesSection = () => {
  // Car parts theme with original color palette
  const colors = {
    primary: '#232931',    // Dark navy
    secondary: '#F73859',  // Red
    accent: '#F1D18A',     // Gold/yellow
    background: '#EDEDED'  // Light gray
  };

  // Car parts categories
  const categories = [
    { 
      name: "Engine Parts", 
      icon: <Zap size={28} />, 
      itemCount: 248,
    },
    { 
      name: "Brake Systems", 
      icon: <Disc size={28} />, 
      itemCount: 186,
    },
    { 
      name: "Performance Tuning", 
      icon: <Gauge size={28} />, 
      itemCount: 124,
    },
    { 
      name: "Suspension", 
      icon: <LifeBuoy size={28} />, 
      itemCount: 93,
    },
    { 
      name: "Electrical Systems", 
      icon: <Sparkles size={28} />, 
      itemCount: 175,
    },
    { 
      name: "Maintenance Tools", 
      icon: <Wrench size={28} />, 
      itemCount: 142,
    }
  ];

  return (
    <section className="w-full py-16" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>Part Categories</h2>
          <div className="flex justify-between items-end">
            <p className="text-gray-600 mt-2">
              Explore our performance parts by category
            </p>
            <a href="#" className="text-sm font-medium flex items-center" style={{ color: colors.secondary }}>
              View All Categories <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          <div className="w-20 h-1 mt-4" style={{ backgroundColor: colors.secondary }}></div>
        </div>

        {/* Car Parts Category Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className="flex flex-col items-center p-4 rounded-lg transition-all hover:shadow-md hover:-translate-y-1 duration-300 bg-white"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: colors.primary }}
              >
                <div style={{ color: colors.accent }}>
                  {category.icon}
                </div>
              </div>
              <h3 className="font-medium text-center" style={{ color: colors.primary }}>
                {category.name}
              </h3>
              <span className="text-xs text-gray-500 mt-1">
                {category.itemCount} parts
              </span>
            </a>
          ))}
        </div>
        
        {/* Featured Products - Car Parts */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>Today's Performance Deals</h2>
            <a href="#" className="text-sm font-medium flex items-center" style={{ color: colors.secondary }}>
              View All Deals <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "High-Flow Air Intake System",
                price: 169.99,
                oldPrice: 219.99,
                timeLeft: "4h",
                discount: 22
              },
              {
                name: "Performance Brake Kit",
                price: 349.99,
                oldPrice: 499.99,
                timeLeft: "2h",
                discount: 30,
                badge: "Trending"
              },
              {
                name: "Turbocharger Upgrade Kit",
                price: 589.99,
                oldPrice: 799.99,
                timeLeft: "6h",
                discount: 26
              },
              {
                name: "Sport Exhaust System",
                price: 429.99,
                oldPrice: 599.99,
                timeLeft: "3h",
                discount: 28,
                badge: "Hot Deal"
              }
            ].map((product, index) => (
              <div key={index} className="rounded-lg overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white" style={{ borderColor: '#eee' }}>
                <div className="bg-gray-100 h-48 relative">
                  <img src="https://pierce-images.imgix.net/images/e/c/6/5/ec659466cee6b94afd496f3e32be2801bd1f2afe_2_PIA_59894_0_20.jpg?bg=F0F1F2&q=60&auto=format&h=414&w=414" alt={`${product.name}`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: colors.secondary }}>
                    {product.discount}% OFF
                  </div>
                  {product.badge && (
                    <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: colors.primary }}>
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 line-clamp-1" style={{ color: colors.primary }}>
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold" style={{ color: colors.secondary }}>
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500 ml-2 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {product.timeLeft} left
                    </span>
                  </div>
                  <button 
                    className="w-full mt-3 py-2 text-sm font-medium rounded text-white transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action Banner - Car Related */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300" style={{ backgroundColor: colors.primary }}>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Premium Member Discounts</h3>
              <p className="text-white opacity-80 mb-4">
                Save 15% on all performance parts when you join our TurboParts Club!
              </p>
              <button 
                className="px-4 py-2 rounded font-medium group-hover:bg-[#F1D18A] group-hover:text-[#232931] transition-all duration-300"
                style={{ backgroundColor: 'white', color: colors.primary }}
              >
                Join Now
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-all duration-300">
              <Gauge size={150} />
            </div>
          </div>
          
          <div className="rounded-lg p-6 relative overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300" style={{ backgroundColor: colors.secondary }}>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white">Fast Track Shipping</h3>
              <p className="text-white opacity-80 mb-4">
                Get your parts delivered within 24 hours with our express shipping option!
              </p>
              <button 
                className="px-4 py-2 rounded font-medium group-hover:bg-[#F1D18A] group-hover:text-[#232931] transition-all duration-300"
                style={{ backgroundColor: 'white', color: colors.secondary }}
              >
                Learn More
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-all duration-300">
              <Truck size={150} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategoriesSection;