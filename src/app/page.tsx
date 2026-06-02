import Navbar from "../components/layout/Navbar";
import DisclaimerPopup from "../components/DisclaimerPopup";

import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PracticeAreas from "../components/home/PracticeAreas";
import OurTeam from "../components/home/OurTeam";
import SuccessStories from "../components/home/SuccessStories";
import ContactSection from "../components/home/ContactSection";
import FloatingButtons from "../components/ui/FloatingButtons";
import AppointmentSection from "../components/home/AppointmentSection";
import MapSection from "../components/home/MapSection";



import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <DisclaimerPopup />

      <Navbar />

      <main>
        <Hero />

        <WhyChooseUs />

        <PracticeAreas />

        <OurTeam />

        <SuccessStories />
        <AppointmentSection />

        <ContactSection />
      </main>
<MapSection />
      <Footer />
      <FloatingButtons />
    </>
  );
}