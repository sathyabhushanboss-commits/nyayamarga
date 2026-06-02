"use client";

import { useState } from "react";
import {
Phone,
Mail,
MessageCircle,
Plus,
} from "lucide-react";

export default function FloatingButtons() {
const [open, setOpen] = useState(false);

return ( <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center">


  {/* Floating Actions */}
  <div
    className={`flex flex-col items-center gap-4 mb-4 transition-all duration-300 ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
  >

    {/* WhatsApp */}
    <a
      href="https://wa.me/919353237692"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      aria-label="WhatsApp"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
        <MessageCircle size={30} className="text-white" />
      </div>
    </a>

    {/* Call */}
    <a
      href="tel:+919353237692"
      className="group"
      aria-label="Call"
    >
      <div className="w-16 h-16 rounded-full bg-[#B97A56] flex items-center justify-center shadow-[0_0_30px_rgba(185,122,86,0.6)] hover:scale-110 transition-all duration-300">
        <Phone size={28} className="text-white" />
      </div>
    </a>

    {/* Email */}
    <a
      href="mailto:contact.nyayamarga@gmail.com"
      className="group"
      aria-label="Email"
    >
      <div className="w-16 h-16 rounded-full bg-[#2563EB] flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-110 transition-all duration-300">
        <Mail size={28} className="text-white" />
      </div>
    </a>

  </div>

  {/* Main Toggle Button */}
  <button
    onClick={() => setOpen(!open)}
    aria-label="Toggle Contact Menu"
    className="w-16 h-16 rounded-full bg-[#B97A56] flex items-center justify-center border border-white/20 shadow-[0_0_35px_rgba(185,122,86,0.6)] hover:scale-110 transition-all duration-300"
  >
    <Plus
      size={34}
      className={`text-white transition-transform duration-300 ${
        open ? "rotate-45" : ""
      }`}
    />
  </button>

</div>


);
}
