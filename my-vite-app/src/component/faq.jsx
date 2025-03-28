import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, ArrowRight, Gauge, Settings, Truck } from 'lucide-react';

const FAQNewsletterSection = () => {
  // Car parts color palette
  const colors = {
    primary: '#232931',    // Dark navy
    secondary: '#F73859',  // Vibrant red
    accent: '#F1D18A',     // Golden yellow
    background: '#EDEDED'  // Light gray
  };

  // Car-themed FAQ data
  const faqItems = [
    {
      question: "How do I know which parts are compatible with my vehicle?",
      answer: "Our website features an advanced vehicle compatibility system. Simply enter your vehicle's make, model, and year in our 'Vehicle Finder' tool, and we'll show you only the parts that fit your specific vehicle. All products in our catalog include detailed fitment information and compatibility notes."
    },
    {
      question: "What's your shipping policy for performance parts?",
      answer: "We offer expedited shipping on most performance parts. Standard shipping typically takes 2-4 business days, while our TurboShip option delivers within 24 hours to most locations. Large items like exhaust systems and body kits may require special shipping arrangements. You can track your order in real-time through your account dashboard."
    },
    {
      question: "Do you offer installation services for the parts you sell?",
      answer: "While we don't provide installation services directly, we've partnered with a nationwide network of certified performance shops. During checkout, you can select the 'Find an Installer' option to locate trusted professionals in your area. Many of our products come with detailed installation guides and access to tech support."
    },
    {
      question: "What is your warranty policy on performance parts?",
      answer: "Most of our performance parts come with a manufacturer's warranty ranging from 1-5 years, depending on the product and brand. We also offer an optional TurboGuard extended protection plan, which covers parts and labor for up to 3 additional years. Warranty details are clearly listed on each product page."
    },
    {
      question: "Can I return performance parts if they don't meet my expectations?",
      answer: "We offer a 30-day satisfaction guarantee on most unopened, unused parts. Custom-ordered and electrical components may have special return restrictions. If you've installed the part and it doesn't perform as expected, our technical support team will work with you to troubleshoot before processing any returns. Please note that return shipping for non-defective items is the customer's responsibility."
    }
  ];

  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: colors.background, borderColor: '#ddd' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>Frequently Asked Questions</h2>
              <div className="w-20 h-1 mt-4" style={{ backgroundColor: colors.secondary }}></div>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ borderColor: openFAQ === index ? colors.secondary : '#e5e5e5', backgroundColor: 'white' }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    style={{ backgroundColor: openFAQ === index ? colors.accent : 'white' }}
                  >
                    <span className="font-medium" style={{ color: colors.primary }}>
                      {item.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp size={18} style={{ color: colors.primary }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: colors.primary }} />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white border-t" style={{ borderColor: '#e5e5e5' }}>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 flex justify-between items-center">
              <p className="text-gray-600">Still have technical questions?</p>
              <button 
                className="px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300 hover:bg-[#232931] hover:text-white"
                style={{ backgroundColor: 'white', color: colors.primary, borderWidth: '1px', borderColor: colors.primary }}
              >
                Contact Tech Support <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Newsletter Header */}
              <div className="p-8 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <Gauge size={120} color="white" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: colors.secondary }}>
                    <Settings size={24} color="white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Stay in the Fast Lane</h2>
                  <p className="text-white opacity-80">
                    Join our performance newsletter and never miss:
                  </p>
                  
                  <ul className="mt-4 space-y-2">
                    {[
                      "New performance part arrivals",
                      "Exclusive subscriber discounts",
                      "Technical guides and installation tips",
                      "Seasonal promotions and track day events"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-white opacity-80">
                        <span className="text-[#F1D18A] mr-2 font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Newsletter Form */}
              <div className="p-8 border-t border-l border-r border-b rounded-b-lg" style={{ borderColor: '#e5e5e5', backgroundColor: 'white' }}>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
                      placeholder="Enter your name"
                      style={{ borderColor: '#e2e8f0', focusRing: colors.secondary }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
                      placeholder="Enter your email"
                      style={{ borderColor: '#e2e8f0', focusRing: colors.secondary }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Vehicle Information (Optional)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
                      placeholder="Make / Model / Year"
                      style={{ borderColor: '#e2e8f0', focusRing: colors.secondary }}
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="preferences"
                        type="checkbox"
                        className="h-4 w-4"
                        style={{ accentColor: colors.secondary }}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="preferences" className="text-gray-600">
                        I'd like to receive personalized performance recommendations based on my vehicle.
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 rounded-md font-medium text-white transition-all duration-300 hover:bg-opacity-90"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Subscribe to Performance Updates
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                    You can unsubscribe at any time.
                  </p>
                </form>
                
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Truck size={16} /> 
                    <span>Subscribers get free shipping on their first order!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQNewsletterSection;