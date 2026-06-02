"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Gavel, 
  FileText, 
  Home, 
  Heart, 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  Scale, 
  Handshake,
  ArrowRight
} from "lucide-react";

const practiceAreas = [
  {
    title: "Criminal Law",
    icon: Gavel,
    description: "Expert defense representation in criminal matters ranging from bail applications to complex trials. Our team ensures your rights are protected throughout the legal process with strategic and aggressive advocacy.",
    items: [
      "Bail and Anticipatory Bail Matters",
      "Criminal Trials",
      "FIR Quashing Proceedings",
      "White-Collar Crime Cases",
      "Cyber Crime Matters",
      "Economic Offences",
    ],
  },
  {
    title: "Civil Litigation",
    icon: FileText,
    description: "Comprehensive handling of civil disputes including recovery suits, injunctions, and execution proceedings. We provide strategic representation to protect your civil rights and property interests.",
    items: [
      "Recovery Suits",
      "Injunction Suits",
      "Declaration Suits",
      "Specific Performance Matters",
      "Execution Proceedings",
    ],
  },
  {
    title: "Property & Real Estate Law",
    icon: Home,
    description: "End-to-end legal solutions for property matters including verification, documentation, and dispute resolution. We ensure clear titles and smooth property transactions for our clients.",
    items: [
      "Property Verification and Due Diligence",
      "Sale Deeds and Conveyancing",
      "Partition and Succession Matters",
      "Land Acquisition Cases",
      "Revenue and Mutation Proceedings",
      "Real Estate Disputes",
    ],
  },
  {
    title: "Family & Matrimonial Law",
    icon: Heart,
    description: "Sensitive and compassionate handling of family disputes including divorce, custody, and domestic violence cases. We strive for amicable resolutions while protecting your family's best interests.",
    items: [
      "Divorce Proceedings",
      "Child Custody Matters",
      "Maintenance Claims",
      "Domestic Violence Cases",
      "Matrimonial Disputes",
    ],
  },
  {
    title: "Corporate & Commercial Law",
    icon: Building2,
    description: "Strategic legal advisory for businesses including contract management, compliance, and commercial litigation. We help enterprises navigate complex regulatory landscapes.",
    items: [
      "Contract Drafting and Review",
      "Corporate Compliance",
      "Commercial Litigation",
      "Partnership and Company Advisory",
    ],
  },
  {
    title: "Consumer Law",
    icon: ShoppingBag,
    description: "Strong representation for consumer rights violations including defective products and service deficiencies. We help you claim fair compensation for consumer grievances.",
    items: [
      "Consumer Complaints",
      "Service Deficiency Claims",
      "Product Liability Matters",
    ],
  },
  {
    title: "Labour & Employment Law",
    icon: Briefcase,
    description: "Expert guidance on workplace disputes, employment contracts, and labour law compliance. We protect the rights of both employers and employees in all service matters.",
    items: [
      "Employment Disputes",
      "Service Matters",
      "Labour Law Compliance Advisory",
    ],
  },
  {
    title: "Constitutional & Writ Jurisdiction",
    icon: Scale,
    description: "Specialized in constitutional remedies including writ petitions and public interest litigations. We fight for fundamental rights and social justice through higher judiciary.",
    items: [
      "Writ Petitions",
      "Public Interest Litigations (PILs)",
      "Fundamental Rights Enforcement",
    ],
  },
  {
    title: "Alternative Dispute Resolution",
    icon: Handshake,
    description: "Cost-effective dispute resolution through arbitration, mediation, and negotiations. We help avoid lengthy litigation while ensuring fair settlements for all parties.",
    items: [
      "Arbitration",
      "Mediation",
      "Negotiation and Settlements",
    ],
  },
];

export default function PracticeAreasPage() {
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
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex justify-center mb-6"
            >
              <Scale size={60} className="text-[#d4af37]" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
              PRACTICE AREAS
            </h1>

            <p className="text-xl md:text-2xl text-[#f4d03f] mt-6 font-light tracking-wide">
              Comprehensive Legal Services Across Diverse Areas of Law
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-8"
            ></motion.div>

            <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg">
              Nyayamarga Law Chambers offers specialized legal expertise across multiple domains, 
              ensuring comprehensive representation tailored to your unique legal needs.
            </p>
          </motion.div>

          {/* Practice Areas Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#3b0f0f]/90 to-[#2b0808]/90 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#d4af37]/20 rounded-xl group-hover:bg-[#d4af37]/30 transition-colors">
                      <area.icon className="text-[#d4af37]" size={32} />
                    </div>
                    <ArrowRight className="text-[#d4af37]/50 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" size={20} />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-[#d4af37] mb-4">
                    {area.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm border-l-2 border-[#d4af37]/30 pl-4">
                    {area.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[#d4af37]/20 to-transparent my-4"></div>

                  {/* Services List */}
                  <ul className="space-y-2 mt-4">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2 group-hover:text-gray-300 transition-colors"
                      >
                        <span className="text-[#d4af37] mt-1 text-xs">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
                Need Expert Legal Representation?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our experienced team is ready to assist you with your legal matters. 
                Schedule a consultation to discuss how we can help.
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