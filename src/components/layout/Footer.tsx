import Image from "next/image";

export default function Footer() {
return ( <footer className="bg-[#120404] border-t border-[#d4af37]/20">


  {/* Top Section */}
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/logo.png"
            alt="Nyayamarga Law Chambers"
            width={55}
            height={55}
          />

          <div>
            <h3 className="text-[#d4af37] font-bold text-lg">
              NYAYAMARGA
            </h3>

            <p className="text-[#f4d03f] text-xs tracking-[3px]">
              LAW CHAMBERS
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-7">
          Delivering justice through knowledge, integrity, and advocacy.
          We provide strategic legal solutions with professionalism and commitment.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-[#d4af37] font-semibold mb-5">
          Quick Links
        </h4>

        <ul className="space-y-3 text-gray-400">
          <li><a href="#home" className="hover:text-[#d4af37]">Home</a></li>
          <li><a href="#about" className="hover:text-[#d4af37]">About Us</a></li>
          <li><a href="#practice" className="hover:text-[#d4af37]">Practice Areas</a></li>
          <li><a href="#team" className="hover:text-[#d4af37]">Our Team</a></li>
          <li><a href="#stories" className="hover:text-[#d4af37]">Success Stories</a></li>
        </ul>
      </div>

      {/* Practice Areas */}
      <div>
        <h4 className="text-[#d4af37] font-semibold mb-5">
          Practice Areas
        </h4>

        <ul className="space-y-3 text-gray-400">
          <li>Civil Law</li>
          <li>Criminal Law</li>
          <li>Property Law</li>
          <li>Family Law</li>
          <li>Corporate Law</li>
          <li>Consumer Law</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-[#d4af37] font-semibold mb-5">
          Contact Us
        </h4>

        <div className="space-y-3 text-gray-400 text-sm">

          <p>
            📍 No.343, 1st Cross,
            Kogilu Main Road,
            Yelahanka,
            Bengaluru - 560064
          </p>

          <p>📞 +91 9353237692</p>

          <p>✉️ contact.nyayamarga@gmail.com</p>

          <p>🕘 9:30 AM – 6:30 PM</p>

        </div>
      </div>

    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-[#d4af37]/10">

    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-sm text-center md:text-left">
        © {new Date().getFullYear()} Nyayamarga Law Chambers.
        All Rights Reserved.
      </p>

      <div className="flex gap-6 text-sm">

        <a
          href="/privacy-policy"
          className="text-gray-500 hover:text-[#d4af37]"
        >
          Privacy Policy
        </a>

        <a
          href="/terms-conditions"
          className="text-gray-500 hover:text-[#d4af37]"
        >
          Terms & Conditions
        </a>

        <a
          href="/disclaimer"
          className="text-gray-500 hover:text-[#d4af37]"
        >
          Disclaimer
        </a>

      </div>

    </div>

  </div>

</footer>


);
}
