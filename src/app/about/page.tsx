"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { Scale, Gavel, Shield, Target, Eye, BookOpen, MapPin, Calendar, Award } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] text-white pt-32 pb-20">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex justify-center mb-6"
            >
              <Scale size={60} className="text-[#d4af37]" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
              NYAYAMARGA LAW CHAMBERS
            </h1>

            <p className="text-xl md:text-2xl text-[#f4d03f] mt-6 font-light tracking-wide">
              Justice Through Knowledge, Integrity & Advocacy
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-8"
            ></motion.div>
          </motion.div>

          {/* Firm Overview Card */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl hover:shadow-[#d4af37]/10 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <MapPin className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Firm Overview
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-8">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <Calendar className="text-[#d4af37] mt-1 flex-shrink-0" size={20} />
                  <p>
                    <span className="text-[#d4af37] font-semibold">Year Established:</span>{" "}
                    2019
                  </p>
                </div>

                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <MapPin className="text-[#d4af37] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-[#d4af37] font-semibold">Office Address:</span>
                    <br />
                    <span className="text-gray-300">
                      Nyayamarga Law Chambers
                      <br />
                      No. 343, 1st Cross, Kogilu Main Road,
                      <br />
                      Kogilu Layout, Yelahanka, Bengaluru – 560064
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* About the Firm */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <BookOpen className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  About the Firm
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Nyayamarga Law Chambers is a <span className="text-[#d4af37] font-semibold">dynamic and client-focused</span> law
                  firm established in 2019 with a vision of delivering
                  exceptional legal services founded upon integrity,
                  professionalism, and a commitment to justice.
                </p>

                <p className="text-lg">
                  The firm provides <span className="text-[#d4af37] font-semibold">comprehensive legal solutions</span> to
                  individuals, businesses, institutions, and organizations
                  across diverse areas of law.
                </p>

                <p className="text-lg">
                  With a strong emphasis on <span className="text-[#d4af37] font-semibold">ethical advocacy, strategic legal
                  representation, and practical problem-solving</span>, the firm
                  strives to protect the rights and interests of its clients
                  while ensuring effective and timely legal remedies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Mission */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl h-full hover:shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#d4af37]/20 rounded-full group-hover:bg-[#d4af37]/30 transition-colors">
                    <Target className="text-[#d4af37]" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#d4af37]">Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To provide accessible, affordable, and high-quality legal
                  services while safeguarding the rights and interests of
                  clients through professional excellence, ethical advocacy,
                  and unwavering dedication to justice.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl h-full hover:shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#d4af37]/20 rounded-full group-hover:bg-[#d4af37]/30 transition-colors">
                    <Eye className="text-[#d4af37]" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#d4af37]">Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To emerge as a trusted and respected legal institution
                  recognized for excellence in litigation, legal advisory
                  services, dispute resolution, and public service across
                  India.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Legal Philosophy */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <Gavel className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Our Legal Philosophy
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed relative z-10">
                <p className="text-lg">
                  At Nyayamarga Law Chambers, we believe that law is not merely
                  a profession but a <span className="text-[#d4af37] font-semibold">powerful instrument for securing justice
                  and protecting rights</span>.
                </p>

                <p className="text-lg">
                  We are committed to providing <span className="text-[#d4af37] font-semibold">personalized legal solutions</span>{" "}
                  tailored to the unique circumstances of every client while
                  maintaining the highest standards of professional ethics,
                  transparency, and accountability.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#f4d03f]/20 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-[#d4af37] mb-4">
                Ready to Work With Us?
              </h3>
              <p className="text-gray-300 mb-6">
                Let us help you navigate your legal challenges with expertise and dedication.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0808] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}