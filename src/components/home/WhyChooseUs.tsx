export default function WhyChooseUs() {
  const points = [
    "Client-Centric Legal Solutions",
    "Ethical and Professional Representation",
    "Strategic Litigation & Advisory Services",
    "Timely and Effective Legal Assistance",
    "Transparent Communication",
    "Comprehensive Legal Services",
    "Commitment to Justice & Excellence",
    "Experienced Legal Team",
  ];

  return (
    <section className="bg-[#1f0707] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37]">
            Why Choose Us
          </h2>

          <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mt-4"></div>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Dedicated to protecting your rights through ethical advocacy,
            strategic legal representation, and practical legal solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-[#2b0b0b] border border-[#d4af37]/30 rounded-xl p-6 hover:border-[#d4af37] transition"
            >
              <div className="text-[#d4af37] text-3xl mb-4">⚖</div>

              <h3 className="text-white font-semibold">
                {point}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}