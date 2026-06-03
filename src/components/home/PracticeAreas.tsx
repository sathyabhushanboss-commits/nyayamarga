// src/components/home/PracticeAreas.tsx
"use client";

import Link from "next/link";

export default function PracticeAreas() {
  const areas = [
    "Criminal Law",
    "Civil Litigation",
    "Property & Real Estate Law",
    "Family & Matrimonial Law",
    "Corporate & Commercial Law",
    "Consumer Law",
    "Labour & Employment Law",
    "Constitutional & Writ Matters",
    "Arbitration & Mediation",
  ];

  return (
    <section className="bg-[#2b0b0b] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37]">
            Practice Areas
          </h2>

          <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mt-4"></div>

          <p className="text-gray-300 mt-6">
            Comprehensive legal services across multiple practice areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#1f0707] border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl text-[#d4af37] mb-4">
                ⚖
              </div>

              <h3 className="text-white text-xl font-semibold">
                {area}
              </h3>

              <p className="text-gray-400 mt-3">
                Professional legal representation and advisory services.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/practice-areas">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#f4d03f] transition-all duration-300">
              View All Practice Areas
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}