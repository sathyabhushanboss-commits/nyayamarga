// src/components/home/ContactSection.tsx
"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1f0707] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37]">
            Contact Us
          </h2>

          <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mt-4"></div>

          <p className="text-gray-300 mt-6">
            Get in touch for legal consultation and professional assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-[#2b0b0b] border border-[#d4af37]/20 rounded-xl p-8">

            <h3 className="text-2xl font-bold text-[#d4af37] mb-6">
              NYAYAMARGA LAW CHAMBERS
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>
                📍 No. 343, 1st Cross,<br />
                Kogilu Main Road,<br />
                Kogilu Layout, Yelahanka,<br />
                Bengaluru – 560064
              </p>

              <p>
                📞 +91 9353237692
              </p>

              <p>
                ✉️ contact.nyayamarga@gmail.com
              </p>

              <p>
                🕘 Office Hours: 9:30 AM – 6:30 PM
              </p>

            </div>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="tel:+919353237692"
                className="bg-[#d4af37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#f4d03f] transition-all duration-300"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919353237692"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-all duration-300"
              >
                WhatsApp
              </a>

              <Link href="/contact">
                <button className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-md font-semibold hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  View Full Contact Page
                </button>
              </Link>

            </div>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-xl border border-[#d4af37]/20">

            <iframe
              src="https://www.google.com/maps?q=Yelahanka,Bangalore&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

        

      </div>
    </section>
  );
}