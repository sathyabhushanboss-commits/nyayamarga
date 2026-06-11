// src/components/home/AppointmentSection.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function AppointmentSection() {
  const [selectedDate, setSelectedDate] = useState("");

  // Format date for display (optional, but keeps input value as YYYY-MM-DD)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <section id="appointment" className="bg-[#2b0b0b] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4af37]">
            Book a Consultation
          </h2>
          <div className="w-24 md:w-32 h-[2px] bg-[#d4af37] mx-auto mt-3 md:mt-4"></div>
          <p className="text-gray-300 mt-4 md:mt-6 text-sm md:text-base">
            Schedule a consultation with our legal experts.
          </p>
        </div>

        <form className="bg-[#1f0707] border border-[#d4af37]/20 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base"
              />
            </div>

            {/* Practice Area */}
            <div>
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Practice Area
              </label>
              <select className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base">
                <option>Civil Law</option>
                <option>Criminal Law</option>
                <option>Property Law</option>
                <option>Family Law</option>
                <option>Corporate Law</option>
                <option>Consumer Law</option>
                <option>Documentation Services</option>
              </select>
            </div>

            {/* Preferred Date - with calendar picker and responsive styling */}
            <div className="w-full overflow-visible">
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Preferred Date
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:bg-white/20 [&::-webkit-calendar-picker-indicator]:p-1 [&::-webkit-calendar-picker-indicator]:rounded [&::-webkit-calendar-picker-indicator]:hover:bg-white/30 [&::-webkit-datetime-edit-month-field]:text-white [&::-webkit-datetime-edit-day-field]:text-white [&::-webkit-datetime-edit-year-field]:text-white [&::-webkit-datetime-edit-text]:text-white/70"
                />
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
                Preferred Time
              </label>
              <select className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 text-sm md:text-base">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
                <option>06:00 PM</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-5 md:mt-6">
            <label className="block text-[#d4af37] mb-2 md:mb-3 font-medium text-sm md:text-base">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Briefly describe your legal issue..."
              className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 resize-none text-sm md:text-base"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
            <Link href="/appointment" className="flex-1">
              <button
                type="button"
                className="w-full bg-[#d4af37] text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#f4d03f] transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                Book Consultation
              </button>
            </Link>
            <a
              href="https://wa.me/919353237692"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-center hover:bg-green-700 transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}