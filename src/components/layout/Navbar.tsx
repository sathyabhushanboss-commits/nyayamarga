"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return ( <header className="fixed top-0 left-0 right-0 z-50 bg-[#2b0b0b]/95 backdrop-blur-md border-b border-[#d4af37]/20"> <div className="max-w-7xl mx-auto px-4 sm:px-6">


    <div className="h-20 flex items-center justify-between">

      <a href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Nyayamarga Law Chambers"
          width={45}
          height={45}
          priority
        />

        <div>
          <h1 className="text-[#d4af37] text-base sm:text-lg font-bold leading-none">
            NYAYAMARGA
          </h1>

          <p className="text-[#f4d03f] text-[9px] sm:text-[10px] tracking-[3px] mt-1">
            LAW CHAMBERS
          </p>
        </div>
      </a>

      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
        <a href="/" className="hover:text-[#d4af37] transition">Home</a>
        <a href="/about" className="hover:text-[#d4af37] transition">About</a>
        <a href="/practice-areas" className="hover:text-[#d4af37] transition">Practice Areas</a>
        <a href="/team" className="hover:text-[#d4af37] transition">Team</a>
        <a href="/success-stories" className="hover:text-[#d4af37] transition">Cases</a>
        <a href="/contact" className="hover:text-[#d4af37] transition">Contact</a>
      </nav>

      <div className="hidden lg:flex items-center gap-2">
        <a
          href="tel:+919353237692"
          className="text-[#d4af37] border border-[#d4af37]/50 px-3 py-2 rounded-md text-sm hover:bg-[#d4af37] hover:text-black transition"
        >
          Call
        </a>

        <a
          href="https://wa.me/919353237692"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 border border-green-500 px-3 py-2 rounded-md text-sm hover:bg-green-500 hover:text-white transition"
        >
          WhatsApp
        </a>

        <a
          href="/appointment"
          className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#f4d03f]"
        >
          Consultation
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#d4af37]"
      >
        ☰
      </button>

    </div>

    {isOpen && (
      <div className="lg:hidden bg-[#2b0b0b] border-t border-[#d4af37]/20">
        <nav className="flex flex-col py-4">
          <a href="/" className="px-4 py-3 text-white">Home</a>
          <a href="/about" className="px-4 py-3 text-white">About</a>
          <a href="/practice-areas" className="px-4 py-3 text-white">Practice Areas</a>
          <a href="/team" className="px-4 py-3 text-white">Team</a>
          <a href="/success-stories" className="px-4 py-3 text-white">Cases</a>
          <a href="/contact" className="px-4 py-3 text-white">Contact</a>
          <a
            href="/appointment"
            className="mx-4 mt-3 text-center bg-[#d4af37] text-black py-3 rounded-md font-semibold"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    )}

  </div>
</header>


);
}
