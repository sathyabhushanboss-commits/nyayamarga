import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function ContactPage() {
return (
<> <Navbar />


  <main className="min-h-screen bg-[#2b0b0b] text-white pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37]">
          Contact Us
        </h1>

        <p className="text-xl text-[#f4d03f] mt-6">
          Get in touch for legal consultation and professional assistance.
        </p>

        <div className="w-32 h-1 bg-[#d4af37] mx-auto mt-8"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Information */}
        <div className="bg-[#3b0f0f] border border-[#d4af37]/20 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-[#d4af37] mb-8">
            NYAYAMARGA LAW CHAMBERS
          </h2>

          <div className="space-y-8 text-gray-300">

            <div>
              <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                📍 Office Address
              </h3>

              <p>
                No. 343, 1st Cross,
                <br />
                Kogilu Main Road,
                <br />
                Kogilu Layout, Yelahanka,
                <br />
                Bengaluru – 560064
              </p>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                📞 Phone
              </h3>

              <a
                href="tel:+919353237692"
                className="hover:text-[#d4af37]"
              >
                +91 9353237692
              </a>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                ✉️ Email
              </h3>

              <a
                href="mailto:contact.nyayamarga@gmail.com"
                className="hover:text-[#d4af37]"
              >
                contact.nyayamarga@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                🕘 Office Hours
              </h3>

              <p>Monday – Saturday</p>
              <p>9:30 AM – 6:30 PM</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="tel:+919353237692"
                className="bg-[#d4af37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#f4d03f] transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919353237692"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                WhatsApp
              </a>

            </div>

          </div>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-2xl border border-[#d4af37]/20 shadow-xl min-h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=No.343,1st Cross,Kogilu Main Road,Kogilu Layout,Yelahanka,Bengaluru 560064&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
          />
        </div>

      </div>

    </div>
  </main>

  <Footer />
</>

);
}
