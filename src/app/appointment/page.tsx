import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function AppointmentPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#2b0b0b] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-[#d4af37]">
            Book Consultation
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Appointment booking page coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}