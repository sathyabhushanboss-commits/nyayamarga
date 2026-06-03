"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircle, XCircle, Loader2, Calendar, Phone, Mail, User, Clock, FileText, MessageSquare } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function AppointmentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    date: "",
    time: "",
    message: "",
  });

  const practiceAreas = [
    "Civil Law",
    "Criminal Law",
    "Property Law",
    "Family Law",
    "Corporate Law",
    "Consumer Law",
    "Labour Law",
    "Constitutional Law",
    "Documentation Services",
    "Other",
  ];

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          phoneNumber: form.phone,
          practiceArea: form.practiceArea,
          preferredDate: form.date,
          preferredTime: form.time,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        
        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          practiceArea: "",
          date: "",
          time: "",
          message: "",
        });
        
        // Auto hide success message after 5 seconds and redirect
        setTimeout(() => {
          setShowSuccess(false);
          router.push("/");
        }, 3000);
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
        setShowError(true);
        setTimeout(() => setShowError(false), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white rounded-lg shadow-2xl p-4 min-w-[320px] backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center gap-3">
              <CheckCircle size={28} className="text-white" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">Success!</h3>
                <p className="text-sm opacity-95">Appointment request sent successfully! We'll contact you within 24 hours.</p>
              </div>
              <button onClick={() => setShowSuccess(false)} className="hover:opacity-70">
                <XCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Toast Notification */}
      {showError && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in">
          <div className="bg-red-500 text-white rounded-lg shadow-2xl p-4 min-w-[320px] backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center gap-3">
              <XCircle size={28} className="text-white" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">Error!</h3>
                <p className="text-sm opacity-95">{errorMessage}</p>
              </div>
              <button onClick={() => setShowError(false)} className="hover:opacity-70">
                <XCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="w-full bg-[#2b0b0b] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <div className="p-6 md:p-8">
              {/* Logo and Header */}
              <div className="text-center relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl"></div>
                <div className="flex justify-center mb-4 relative">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <Image
                      src="/logo.png"
                      alt="Nyayamarga Law Chambers"
                      width={80}
                      height={80}
                      priority
                      className="w-20 h-20 md:w-24 md:h-24 relative z-10 transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
                  NYAYAMARGA
                </h1>
                <p className="text-[#f4d03f] tracking-[4px] uppercase text-xs md:text-sm mt-1">
                  Law Chambers
                </p>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] flex items-center justify-center gap-2">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                  Book a Consultation
                </h2>
                <p className="text-gray-300 text-sm mt-2">
                  Schedule your consultation with our legal experts
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Practice Area *
                    </label>
                    <select
                      name="practiceArea"
                      required
                      value={form.practiceArea}
                      onChange={handleChange}
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    >
                      <option value="">Select practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37]/50"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 group">
                  <label className="block mb-2 font-medium text-[#d4af37] text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message / Description of Legal Issue
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your legal issue..."
                    className="w-full bg-[#1f0707] border border-[#d4af37]/30 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 resize-none group-hover:border-[#d4af37]/50"
                  />
                  <p className="text-gray-500 text-xs mt-1 text-right">
                    {form.message.length}/500 characters
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#1f0707]/50 to-[#1f0707]/30 border-l-4 border-[#d4af37] rounded-lg">
                  <p className="text-gray-300 text-xs text-center leading-relaxed">
                    <span className="text-[#d4af37] font-semibold">📋 Note:</span>{" "}
                    Our team will contact you within 24 hours to confirm your appointment. 
                    Your information is secure and confidential.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="group relative overflow-hidden border border-[#d4af37]/40 text-[#d4af37] py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all duration-300"
                  >
                    <span className="relative z-10">Cancel</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative overflow-hidden bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Submit Appointment Request
                      </span>
                    )}
                  </button>
                </div>

                <div className="mt-6 flex justify-center gap-6 text-gray-400 text-xs">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Email Confirmation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>WhatsApp Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>24hr Response</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}