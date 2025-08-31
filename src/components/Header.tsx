import React from 'react';

interface HeaderProps {
  onScroll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onScroll }) => {
  return (
    <div className="mt-32 relative">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0 mt-8">
          <img 
            src="/download.jpeg" 
            alt="Unreal Economy Hero" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              // Fallback gradient if image doesn't load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #8788f4 0%, #101010 100%)';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content - Centered on Image */}
        <div className="relative z-10 text-center px-4">
          {/* Hero Title */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              <span className="block">THE</span>
              <span className="block text-[#8788f4]">UNREAL</span>
              <span className="block">STUDIO</span>
            </h1>
          </div>

          {/* Action Buttons - Centered on Image */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onScroll}
              className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="mr-3">Scroll Down</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <a 
              href="https://art.unreal.art" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#8788f4] text-white font-semibold rounded-2xl hover:bg-[#7677e3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">Launch App</span>
              <svg 
                className="w-12 h-12 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-5"></div>
      </header>
    </div>
  );
};

export default Header;