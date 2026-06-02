export default function AppointmentSection() {
  return (
    <section id="appointment" className="bg-[#2b0b0b] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37]">
            Book a Consultation
          </h2>
          <div className="w-32 h-[2px] bg-[#d4af37] mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6">
            Schedule a consultation with our legal experts.
          </p>
        </div>

        <form className="bg-[#1f0707] border border-[#d4af37]/20 rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
              />
            </div>

            {/* Practice Area */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Practice Area
              </label>
              <select className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20">
                <option>Civil Law</option>
                <option>Criminal Law</option>
                <option>Property Law</option>
                <option>Family Law</option>
                <option>Corporate Law</option>
                <option>Consumer Law</option>
                <option>Documentation Services</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-[#d4af37] mb-3 font-medium">
                Preferred Time
              </label>
              <select className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20">
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
          <div className="mt-6">
            <label className="block text-[#d4af37] mb-3 font-medium">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Briefly describe your legal issue..."
              className="w-full bg-[#3b0707] border border-[#d4af37]/30 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button
              type="submit"
              className="bg-[#d4af37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#f4d03f] transition-all duration-300 shadow-lg"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/919353237692"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}