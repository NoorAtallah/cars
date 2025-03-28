import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Gauge, Truck, Settings, Shield } from 'lucide-react';

const Footer = () => {
  // Car parts theme color palette
  const colors = {
    primary: '#232931',    // Dark navy
    secondary: '#F73859',  // Vibrant red
    accent: '#F1D18A',     // Golden yellow
    background: '#EDEDED'  // Light gray
  };

  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer */}
      <div style={{ backgroundColor: colors.background }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg mr-2 flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                  <Gauge size={20} color="white" />
                </div>
                <span className="text-xl font-bold" style={{ color: colors.primary }}>TurboParts</span>
              </div>
              
              <p className="text-gray-600 mb-6">
                TurboParts delivers premium performance automotive parts for enthusiasts and professional mechanics. 
                Discover high-quality components to enhance your vehicle's performance, handling, and aesthetics.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1" style={{ color: colors.secondary }} />
                  <span className="text-gray-600">
                    123 Performance Drive, Suite 100<br />
                    Detroit, MI 48201
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3" style={{ color: colors.secondary }} />
                  <span className="text-gray-600">(555) 789-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-3" style={{ color: colors.secondary }} />
                  <span className="text-gray-600">support@turboparts.com</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Shop', 'Featured Products', 'Contact Us'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-900 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-1 transition-colors duration-300 group-hover:text-[#F73859]" style={{ color: colors.secondary }} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Parts Categories</h3>
              <ul className="space-y-2">
                {['Engine Components', 'Performance Exhaust', 'Suspension Systems', 'Brake Kits', 'Turbochargers', 'All Categories'].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-900 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-1 transition-colors duration-300 group-hover:text-[#F73859]" style={{ color: colors.secondary }} />
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Customer Support</h3>
              <ul className="space-y-2">
                {['FAQ', 'Shipping Policy', 'Return Policy', 'Warranty Information', 'Terms & Conditions', 'Installation Help'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-900 flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-1 transition-colors duration-300 group-hover:text-[#F73859]" style={{ color: colors.secondary }} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600">
                  Get weekly updates on new performance parts, exclusive deals, and technical guides for your vehicle.
                </p>
              </div>
              <div>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 border rounded-l-lg focus:outline-none"
                    style={{ borderColor: '#e2e8f0' }}
                  />
                  <button 
                    className="px-4 py-3 rounded-r-lg text-white transition-colors duration-300 hover:bg-opacity-90"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badges & Social */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90" style={{ backgroundColor: colors.primary }}>
                  <Facebook size={18} color="white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90" style={{ backgroundColor: colors.primary }}>
                  <Twitter size={18} color="white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90" style={{ backgroundColor: colors.primary }}>
                  <Instagram size={18} color="white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90" style={{ backgroundColor: colors.primary }}>
                  <Linkedin size={18} color="white" />
                </a>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: colors.accent }}>
                    <Truck size={22} style={{ color: colors.primary }} />
                  </div>
                  <span className="text-xs text-center text-gray-500">Fast<br/>Shipping</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: colors.accent }}>
                    <Shield size={22} style={{ color: colors.primary }} />
                  </div>
                  <span className="text-xs text-center text-gray-500">Secure<br/>Payments</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: colors.accent }}>
                    <Settings size={22} style={{ color: colors.primary }} />
                  </div>
                  <span className="text-xs text-center text-gray-500">Quality<br/>Guarantee</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: colors.accent }}>
                    <div className="relative">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V8M12 16V18M8 12H6M18 12H16M16.95 7.05L15.5 8.5M7.05 7.05L8.5 8.5M7.05 16.95L8.5 15.5M16.95 16.95L15.5 15.5M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#232931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-center text-gray-500">Expert<br/>Support</span>
                </div>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center">
              <span className="text-gray-600 text-sm mr-4 mb-2 md:mb-0">We Accept:</span>
              <div className="flex space-x-3">
                {/* Visa */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center"
                     style={{ borderColor: '#e2e8f0' }}>
                  <svg width="28" height="9" viewBox="0 0 28 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.083 8.716H8.628L10.142 0.214H12.597L11.083 8.716Z" fill="#00579F"/>
                    <path d="M18.932 0.436C18.406 0.234 17.575 0 16.577 0C14.475 0 12.992 1.087 12.982 2.644C12.973 3.811 14.018 4.456 14.811 4.843C15.625 5.239 15.889 5.497 15.889 5.845C15.879 6.382 15.221 6.629 14.603 6.629C13.741 6.629 13.284 6.495 12.574 6.186L12.308 6.072L12.022 8.184C12.639 8.445 13.772 8.677 14.943 8.687C17.189 8.687 18.633 7.610 18.643 5.942C18.652 5.021 18.064 4.306 16.854 3.713C16.129 3.337 15.684 3.089 15.684 2.721C15.694 2.385 16.071 2.047 16.892 2.047C17.585 2.037 18.075 2.203 18.456 2.375L18.645 2.468L18.932 0.436Z" fill="#00579F"/>
                    <path d="M21.634 5.732C21.827 5.245 22.576 3.267 22.576 3.267C22.567 3.277 22.771 2.764 22.891 2.447L22.97 3.168C22.97 3.168 23.425 5.306 23.519 5.732H21.634ZM24.468 0.214H22.585C22.044 0.214 21.634 0.36 21.398 0.909L18.202 8.716H20.459C20.459 8.716 20.874 7.609 20.948 7.41C21.183 7.41 23.538 7.41 23.837 7.41C23.897 7.670 24.123 8.716 24.123 8.716H26.132L24.468 0.214Z" fill="#00579F"/>
                    <path d="M7.328 0.214L5.207 6.016L4.98 4.892C4.6 3.614 3.435 2.233 2.134 1.473L4.085 8.706H6.361L9.604 0.214H7.328Z" fill="#00579F"/>
                    <path d="M3.354 0.214H0.042L0 0.37C2.584 0.979 4.295 2.663 4.98 4.892L4.264 0.919C4.146 0.37 3.796 0.224 3.354 0.214Z" fill="#FAA61A"/>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center"
                     style={{ borderColor: '#e2e8f0' }}>
                  <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1328 2.00391H9.86719V12.5391H14.1328V2.00391Z" fill="#FF5F00"/>
                    <path d="M10.2891 7.27344C10.2891 5.16797 11.2734 3.28125 12.8359 2.00781C11.5156 1.02344 9.85547 0.464844 8.07422 0.464844C3.91016 0.464844 0.535156 3.5 0.535156 7.27344C0.535156 11.0469 3.91016 14.082 8.07422 14.082C9.85547 14.082 11.5156 13.5234 12.8359 12.5391C11.2734 11.2656 10.2891 9.37891 10.2891 7.27344Z" fill="#EB001B"/>
                    <path d="M23.4648 7.27344C23.4648 11.0469 20.0898 14.082 15.9258 14.082C14.1445 14.082 12.4844 13.5234 11.1641 12.5391C12.7266 11.2656 13.7109 9.37891 13.7109 7.27344C13.7109 5.16797 12.7266 3.28125 11.1641 2.00781C12.4844 1.02344 14.1445 0.464844 15.9258 0.464844C20.0898 0.464844 23.4648 3.5 23.4648 7.27344Z" fill="#F79E1B"/>
                  </svg>
                </div>
                
                {/* American Express */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center"
                     style={{ borderColor: '#e2e8f0' }}>
                  <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.1504 0H1.84961C0.826172 0 0 0.826172 0 1.84961V15.1504C0 16.1738 0.826172 17 1.84961 17H26.1504C27.1738 17 28 16.1738 28 15.1504V1.84961C28 0.826172 27.1738 0 26.1504 0Z" fill="#016FD0"/>
                    <path d="M12.3203 8.5L13.8301 4.86621L15.3398 8.5H12.3203ZM17.9004 11.3379L17.1641 9.43555H12.4883L11.752 11.3379H9.75L13.5977 3.33008H16.0547L19.9023 11.3379H17.9004ZM21.5801 3.33594H24.5996V11.3379H22.5977V5.16211L20.1875 11.3379H18.3516L15.9414 5.16211V11.3379H11.3945L10.6406 9.45508H7.0957L6.34766 11.3379H4.28711L7.63672 3.33594H10.1055L13.3398 11.1348H18.6016V3.33594H21.5801ZM3.33594 3.33594H7.64844L8.40039 5.22461H11.959L12.7109 3.33594H24.6582V13.6641H3.33594V3.33594Z" fill="white"/>
                  </svg>
                </div>
                
                {/* PayPal */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center"
                     style={{ borderColor: '#e2e8f0' }}>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 13.75C4.5 13.75 2.06875 4.99375 2 4.75C1.99166 4.72166 2 4.75 2 4.75H0C0 4.75 0.0270833 4.61177 0.09375 4.41302C0.1625 4.21177 2.75 4.31427 3 2.5C3.25 0.683335 5.22708 0 6.5 0H13C13 0 15 0.187502 15 2.5C15 4.81251 13.5729 10 13.5729 10C13.5729 10 13 12.5 10 12.5H6L5.25 16.25H10.5C10.5 16.25 12.5 16.25 12.5 18.125C12.5 20 10.5 20 10.5 20H5.25C5.25 20 3.5 20 3 18.125C2.5 16.25 4.5 13.75 4.5 13.75Z" fill="#003087"/>
                    <path d="M15 2.5C15 4.81251 13.5729 10 13.5729 10C13.5729 10 13 12.5 10 12.5H6L5.75 13.75L4.75 18.125C4.75 18.125 4.5 20 7 20H12.25C12.25 20 14.25 20 14.25 18.125C14.25 16.25 12.25 16.25 12.25 16.25H6.75L7.5 12.5H11.5C11.5 12.5 13.5 12.5 13.5 10C13.5 7.5 15 2.5 15 2.5Z" fill="#0070E0"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div style={{ backgroundColor: colors.primary }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © {year} TurboParts. All rights reserved.
            </p>
            
            <div className="mt-2 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-4 text-sm">
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;