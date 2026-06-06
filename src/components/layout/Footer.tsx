import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#120404] border-t border-[#d4af37]/20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Nyayamarga Law Chambers"
                  width={83}
                  height={83}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-[#d4af37] font-bold text-xl">
                    NYAYAMARGA
                  </h3>
                  <p className="text-[#f4d03f] text-xs tracking-[3px]">
                    LAW CHAMBERS
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-7">
              Delivering justice through knowledge, integrity, and advocacy.
              We provide strategic legal solutions with professionalism and commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[#d4af37] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link href="/practice-areas" className="hover:text-[#d4af37] transition-colors">Practice Areas</Link></li>
              <li><Link href="/team" className="hover:text-[#d4af37] transition-colors">Our Team</Link></li>
              <li><Link href="/success-stories" className="hover:text-[#d4af37] transition-colors">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="text-center md:text-left">
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
          <div className="text-center md:text-left">
            <h4 className="text-[#d4af37] font-semibold mb-5">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                No.343, 1st Cross,
                Kogilu Main Road,
                Yelahanka,
                Bengaluru - 560064
              </p>
              <p>+91 9353237692</p>
              <p>contact.nyayamarga@gmail.com</p>
              <p>legal@nyayamarga.com</p>
              <p>9:30 AM – 6:30 PM</p>
            </div>
            {/* QR Code for Brochure */}
            <div className="mt-4 flex flex-col items-center md:items-start">
              <Image
                src="/qr.jpeg"
                alt="Scan to download brochure"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <p className="text-gray-500 text-xs mt-2">Scan to download brochure</p>
              <p className="text-gray-500 text-xs">No sign up required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Nyayamarga Law Chambers.
            All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm text-center">
            Designed, Developed and Maintained by Sathya Enterprises
          </p>
        </div>
      </div>
    </footer>
  );
}