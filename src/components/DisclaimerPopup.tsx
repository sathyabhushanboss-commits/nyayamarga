"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DisclaimerPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("nyayamarga_disclaimer");
    if (!accepted) {
      setOpen(true);
    }
  }, []);

  const acceptDisclaimer = () => {
    localStorage.setItem("nyayamarga_disclaimer", "accepted");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Small Compact Box */}
      <div className="w-full max-w-md bg-[#2b0b0b] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Nyayamarga Law Chambers"
              width={80}
              height={80}
              priority
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37]">
              NYAYAMARGA
            </h2>
            <p className="text-[#f4d03f] tracking-[4px] uppercase text-xs md:text-sm mt-1">
              Law Chambers
            </p>
            <div className="w-20 h-[1px] bg-[#d4af37] mx-auto my-3"></div>
            <h3 className="text-lg md:text-xl font-bold text-[#d4af37]">
              Acknowledgement
            </h3>
          </div>

          {/* Content */}
          <div className="mt-4 space-y-3 text-sm">
            <p className="text-gray-200 leading-6 text-xs md:text-sm">
              As per the rules of the Bar Council of India, advocates are not
              permitted to solicit work or advertise.
            </p>

            <p className="text-gray-200 leading-6 text-xs md:text-sm">
              By clicking <strong>"I Agree"</strong>, I confirm that I am
              accessing the website of <strong>Nyayamarga Law Chambers</strong>
              on my own initiative for information purposes only.
            </p>

            <div className="border-t border-[#d4af37]/20 pt-3 mt-2">
              <h4 className="text-base md:text-lg font-bold text-[#d4af37] mb-2">
                Disclaimer
              </h4>
              <p className="text-gray-200 leading-6 text-xs md:text-sm">
                This website is for informational purposes only and does not
                constitute legal advice. Use of this website does not create an
                attorney-client relationship.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-5 text-center">
            <button
              onClick={acceptDisclaimer}
              className="bg-[#d4af37] text-black font-bold px-8 md:px-10 py-2.5 rounded-lg text-sm hover:bg-[#f4d03f] transition-all duration-300 shadow-lg w-full"
            >
              I AGREE & ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}