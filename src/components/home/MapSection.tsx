// src/components/home/MapSection.tsx
export default function MapSection() {
  return (
    <section className="py-16 bg-[#2b0b0b]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#d4af37]">
            Find Us
          </h2>

          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#d4af37]/20 shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Kogilu+Main+Road+Yelahanka+Bengaluru&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=Kogilu+Main+Road+Yelahanka+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:text-[#f4d03f] transition-colors"
          >
            Get Directions on Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
}