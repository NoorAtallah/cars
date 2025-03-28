import React from 'react';
import { Star, Shield, Truck, Clock, Award, ArrowRight, Gauge, Wrench } from 'lucide-react';

const TestimonialsSection = () => {
  // Car parts color palette
  const colors = {
    primary: '#232931',    // Dark navy
    secondary: '#F73859',  // Vibrant red
    accent: '#F1D18A',     // Golden yellow
    background: '#EDEDED'  // Light gray
  };

  // Car-themed testimonial data
  const testimonials = [
    {
      name: "Mike Torello",
      avatar: "/api/placeholder/64/64",
      role: "Performance Enthusiast",
      text: "The performance parts I've ordered have transformed my ride. The turbocharger kit improved my 0-60 time dramatically, and the support team was incredibly helpful.",
      rating: 5
    },
    {
      name: "Jessica Chen",
      avatar: "/api/placeholder/64/64", 
      role: "Weekend Racer",
      text: "TurboParts has been my go-to for all my track day needs. The brake kits and suspension components have given me the edge I needed on race day.",
      rating: 5
    },
    {
      name: "Robert Cruz",
      avatar: "/api/placeholder/64/64",
      role: "Classic Car Restorer",
      text: "Finding parts for my vintage restoration projects used to be a nightmare. This site has everything I need, and the quality has never disappointed me.",
      rating: 4
    }
  ];

  // Car-themed trust badges
  const trustElements = [
    {
      icon: <Shield size={24} />,
      title: "OEM Quality",
      text: "Direct-fit parts meeting manufacturer specifications"
    },
    {
      icon: <Truck size={24} />,
      title: "Fast Shipping",
      text: "Most orders shipped within 24 hours nationwide"
    },
    {
      icon: <Clock size={24} />,
      title: "Easy Returns",
      text: "30-day hassle-free return policy on most parts"
    },
    {
      icon: <Award size={24} />,
      title: "Performance Guarantee",
      text: "All parts tested for reliability and performance"
    }
  ];

  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: colors.background, borderColor: '#ddd' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>What Our Drivers Say</h2>
          <div className="flex justify-between items-end">
            <p className="text-gray-600 mt-2">
              Join thousands of performance enthusiasts who trust us for their automotive needs
            </p>
          </div>
          <div className="w-20 h-1 mt-4" style={{ backgroundColor: colors.secondary }}></div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: index === 1 ? colors.primary : 'white', 
                borderWidth: index !== 1 ? '1px' : '0', 
                borderColor: '#eee', 
                color: index === 1 ? 'white' : 'inherit' 
              }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? (index === 1 ? colors.accent : colors.accent) : 'none'} 
                    stroke={index === 1 ? colors.accent : colors.accent}
                  />
                ))}
              </div>
              <p className="mb-4" style={{ color: index === 1 ? 'white' : 'gray' }}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium" style={{ color: index === 1 ? 'white' : colors.primary }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: index === 1 ? 'rgba(255,255,255,0.8)' : 'gray' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center z-10" 
                style={{ backgroundColor: index === 1 ? colors.secondary : colors.primary }}>
                <span className="text-white text-xs">"</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Elements */}
        <div className="rounded-lg p-8 mb-10" style={{ backgroundColor: 'white' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.primary }}>
            Why Choose TurboParts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustElements.map((element, index) => (
              <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 shadow-md group-hover:bg-[#232931]"
                  style={{ backgroundColor: index % 2 === 0 ? colors.accent : colors.secondary, color: 'white' }}
                >
                  {element.icon}
                </div>
                <h4 className="font-medium mb-1" style={{ color: colors.primary }}>
                  {element.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {element.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Performance Parts", value: "25,000+" },
            { label: "Satisfied Drivers", value: "150,000+" },
            { label: "Horsepower Added", value: "1,000,000+" },
            { label: "Same-Day Shipping", value: "97%" }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-lg border text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ borderColor: '#eee', backgroundColor: 'white' }}>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-[#F73859] transition-colors duration-300" style={{ color: colors.primary }}>
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#232931] to-[#353f4b] rounded-lg p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ 
              backgroundImage: 'linear-gradient(to right, #F73859 1px, transparent 1px), linear-gradient(to bottom, #F73859 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 text-white">Ready to Upgrade Your Ride?</h3>
            <p className="text-white opacity-80 mb-6 max-w-xl mx-auto">
              Join thousands of performance enthusiasts who trust TurboParts for premium automotive upgrades and accessories.
            </p>
            <button 
              className="px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-[#F1D18A] hover:text-[#232931] transition-colors duration-300"
              style={{ backgroundColor: colors.secondary, color: 'white' }}
            >
              Shop Now <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Gauge size={150} />
          </div>
          <div className="absolute -top-10 -left-10 opacity-10">
            <Wrench size={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;