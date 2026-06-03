"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Elegant Loading Screen */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] flex items-center justify-center z-20">
          <div className="text-center">
            {/* Animated Scales of Justice */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#d4af37]/30 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-swing">
                <span className="text-5xl">⚖️</span>
              </div>
            </div>
            
            {/* Animated Title */}
            <h2 className="text-[#d4af37] text-2xl md:text-3xl font-bold tracking-wider animate-pulse-slow">
              NYAYAMARGA
            </h2>
            
            {/* Loading Bar */}
            <div className="w-48 md:w-64 h-[1px] bg-[#d4af37]/20 mx-auto mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-[#d4af37] animate-loading-bar"></div>
            </div>
            
            <p className="text-[#d4af37]/60 text-xs tracking-widest mt-4 animate-pulse-slow">
              Justice Is Our path
            </p>
          </div>
        </div>
      )}

      {/* Desktop Video */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile Video */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div 
        className={`absolute inset-0 bg-[#2b0b0b]/70 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div 
        className={`relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 text-center pt-24 md:pt-0 transition-all duration-1000 transform ${
          contentVisible && videoLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#d4af37] leading-none">
          NYAYAMARGA
        </h1>

        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#f4d03f] tracking-[4px] md:tracking-[10px] mt-3">
          LAW CHAMBERS
        </h2>

        <div className="w-24 md:w-40 h-[2px] bg-[#d4af37] mx-auto my-6 md:my-8"></div>

        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#f4d03f] font-medium px-4 leading-relaxed">
          ನ್ಯಾಯದ ಮಾರ್ಗ ನಮ್ಮದು
        </p>

        <p className="text-base sm:text-lg md:text-2xl text-white mt-3 font-medium">
          Justice Is Our Way
        </p>

        <p className="max-w-3xl mx-auto text-gray-200 mt-6 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-2">
          Delivering exceptional legal services founded upon integrity,
          professionalism, and commitment to justice.
          <span className="hidden md:inline">
            {" "}
            We provide strategic legal solutions across Civil Law, Criminal
            Law, Property Law, Family Law, Consumer Law, Corporate Law, and
            Documentation Services.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 max-w-md sm:max-w-none mx-auto">
          <a
            href="#appointment"
            className="w-full sm:w-auto bg-[#d4af37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#f4d03f] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Book Consultation
          </a>

          <a
            href="tel:+919353237692"
            className="w-full sm:w-auto border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-xl font-semibold hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#2b0b0b] to-transparent"></div>

      <style jsx>{`
        @keyframes swing {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes loading-bar {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}