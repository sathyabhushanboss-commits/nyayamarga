"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { Scale, Gavel, Shield, Target, Eye, BookOpen, MapPin, Calendar, Award, Heart, Star, Lock, Users, Lightbulb } from "lucide-react";
import Link from "next/link";

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

  // Images array for marquee
  const marqueeImages = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/13.jpeg",
    "/14.jpeg"
  ];

  // Core Values data
  const coreValues = [
    { icon: Shield, title: "Integrity", description: "Upholding honesty, ethics, and professional responsibility in every matter." },
    { icon: Users, title: "Client Commitment", description: "Prioritizing the needs and objectives of clients through personalized legal solutions." },
    { icon: Star, title: "Excellence", description: "Delivering high standards of legal research, advocacy, and advisory services." },
    { icon: Scale, title: "Justice", description: "Ensuring fair representation and protection of legal rights." },
    { icon: Lock, title: "Confidentiality", description: "Maintaining the highest level of privacy and trust in client relationships." },
    { icon: Award, title: "Professionalism", description: "Conducting all legal matters with diligence, respect, and accountability." },
    { icon: Lightbulb, title: "Innovation", description: "Adopting modern legal strategies and practical approaches to resolve complex disputes." },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] text-white pt-16 pb-12">
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
            className="text-center mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex justify-center mb-4"
            >
              <Scale size={60} className="text-[#d4af37]" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
              NYAYAMARGA LAW CHAMBERS
            </h1>

            <p className="text-xl md:text-2xl text-[#f4d03f] mt-3 font-light tracking-wide">
              Justice Through Knowledge, Integrity & Advocacy
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"
            ></motion.div>
          </motion.div>

          {/* Image Gallery Section - Marquee on Desktop, 2-Column Grid on Mobile */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-6 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <Award className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Our Gallery
                </h2>
              </div>

              {/* Desktop Marquee (hidden on mobile) */}
              <div className="hidden md:block relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#3b0f0f]/90 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#3b0f0f]/90 to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee">
                  {[...marqueeImages, ...marqueeImages].map((src, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 w-80 h-64 mx-4 rounded-xl overflow-hidden shadow-xl border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex animate-marquee-reverse mt-4">
                  {[...marqueeImages, ...marqueeImages].reverse().map((src, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 w-80 h-64 mx-4 rounded-xl overflow-hidden shadow-xl border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Grid Layout (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {marqueeImages.map((src, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="rounded-xl overflow-hidden shadow-xl border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition-all duration-300 aspect-[4/3]"
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Firm Overview Card */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl hover:shadow-[#d4af37]/10 transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <MapPin className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Firm Overview
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-8">
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

          {/* About the Firm - Updated with new content */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <BookOpen className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  About the Firm
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Nyayamarga Law Chambers is a <span className="text-[#d4af37] font-semibold">distinguished and client-centric law firm</span> established in 2019 with a steadfast commitment to delivering high-quality legal services rooted in integrity, professionalism, transparency, and justice. Since its inception, the firm has earned a reputation for providing practical, strategic, and result-oriented legal solutions tailored to the unique needs of each client.
                </p>

                <p className="text-lg">
                  The firm serves a diverse clientele, including individuals, families, entrepreneurs, startups, corporations, educational institutions, trusts, societies, and other organizations. By combining in-depth legal knowledge with a thorough understanding of business and societal realities, Nyayamarga Law Chambers offers <span className="text-[#d4af37] font-semibold">comprehensive legal counsel and representation</span> across a broad spectrum of legal disciplines.
                </p>

                <p className="text-lg">
                  At Nyayamarga Law Chambers, every matter is approached with meticulous attention to detail, ensuring that clients receive personalized guidance, clear legal advice, and effective representation at every stage of the legal process. The firm believes that legal services should not only address immediate concerns but also provide long-term solutions that safeguard the interests of clients and minimize future legal risks.
                </p>

                <p className="text-lg">
                  The firm's areas of practice include civil litigation, criminal defense, family and matrimonial disputes, property and real estate matters, corporate and commercial law, contract drafting and review, consumer disputes, labor and employment matters, arbitration, mediation, legal compliance, and constitutional remedies. The firm is dedicated to protecting the legal rights of its clients while pursuing favorable outcomes through both litigation and alternative dispute resolution mechanisms.
                </p>

                <p className="text-lg">
                  Nyayamarga Law Chambers places a strong emphasis on <span className="text-[#d4af37] font-semibold">ethical advocacy and professional excellence</span>. The firm operates with the highest standards of confidentiality, accountability, and client service, ensuring that every client receives honest advice and diligent representation. Its lawyers are committed to remaining updated with evolving legal developments, enabling the firm to provide innovative and effective legal strategies in an increasingly complex legal environment.
                </p>

                <p className="text-lg">
                  Recognizing that legal challenges often involve significant personal, financial, and business implications, the firm adopts a solution-oriented approach focused on achieving practical and timely resolutions. Whether representing clients before courts, tribunals, regulatory authorities, or negotiating settlements, Nyayamarga Law Chambers strives to uphold justice while protecting the interests and objectives of those it serves.
                </p>

                <p className="text-lg">
                  Driven by the principles of trust, dedication, and excellence, Nyayamarga Law Chambers continues to expand its legal capabilities and strengthen its presence as a reliable legal partner for clients seeking competent legal assistance. The firm's mission is to make quality legal services accessible, responsive, and effective while fostering long-term relationships built on confidence and mutual respect.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Core Values Section - New */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <Heart className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Our Core Values
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group bg-[#1a0808]/50 rounded-xl p-5 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#d4af37]/20 rounded-lg group-hover:bg-[#d4af37]/30 transition-colors">
                        <value.icon className="text-[#d4af37]" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#d4af37]">{value.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl h-full hover:shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
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

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl h-full hover:shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
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
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-[#d4af37]/20 rounded-lg">
                  <Gavel className="text-[#d4af37]" size={28} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                  Our Legal Philosophy
                </h2>
              </div>

              <div className="space-y-3 text-gray-300 leading-relaxed relative z-10">
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

          {/* CTA Section with Working Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#f4d03f]/20 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-[#d4af37] mb-3">
                Ready to Work With Us?
              </h3>
              <p className="text-gray-300 mb-5">
                Let us help you navigate your legal challenges with expertise and dedication.
              </p>
              <Link href="/appointment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0808] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}