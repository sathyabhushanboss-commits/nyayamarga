"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Scale, 
  Gavel, 
  Home, 
  Shield, 
  Heart,
  MapPin,
  Award,
  CheckCircle,
  FileText,
  Clock,
  ChevronDown,
  ChevronUp,
  Quote,
  BookOpen,
  TrendingUp,
  MessageCircle,
  ArrowLeft
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Landmark Victory in Property Fraud Dispute",
    category: "Property Law / Civil Litigation",
    icon: Home,
    duration: "14 Months",
    court: "Civil Court, Bengaluru",
    relief: "Protection of Ownership and Possession Rights",
    verdict: "Relief Granted in Favour of Client",
    verdictColor: "text-green-500",
    shortDescription: "Successfully protected client's ownership rights against fraudulent claims in a complex property dispute case.",
    background: `A property owner approached Nyayamarga Law Chambers after discovering that a third party was attempting to interfere with his lawful ownership and possession of a valuable immovable property. The opposing side relied on disputed documents and raised claims that created uncertainty regarding title and ownership.

The dispute involved complex legal and factual issues concerning property records, title verification, and possession rights.`,
    approach: `Our legal team conducted a comprehensive review of revenue records, title deeds, encumbrance certificates, and historical ownership documents. Through strategic pleadings and careful presentation of evidence, we established our client's lawful ownership and uninterrupted possession of the property.

We successfully identified inconsistencies in the opposing party's claims and demonstrated the lack of credible evidence supporting their assertions.`,
    outcome: `After considering the documentary evidence and legal submissions, the court granted relief in favour of our client. The client's ownership and possession rights were protected, and the adverse claims raised by the opposing party were effectively rejected.

This case demonstrates the importance of proper documentation and timely legal intervention in property disputes. Through meticulous preparation and strategic advocacy, Nyayamarga Law Chambers safeguarded the interests of the client and prevented substantial financial loss and prolonged litigation.`,
    conclusion: `At Nyayamarga Law Chambers, we remain committed to protecting property owners and delivering practical legal solutions through dedicated representation and result-oriented advocacy.`,
    faq: [
      {
        question: "How long does a property dispute case typically take?",
        answer: "Property dispute cases can vary in duration depending on the complexity of the matter, court schedules, and the cooperation of parties involved. In this case, we resolved the matter in 14 months through strategic presentation and strong evidence."
      },
      {
        question: "What documents are essential for property dispute cases?",
        answer: "Essential documents include title deeds, sale agreements, encumbrance certificates, revenue records (RTC), tax paid receipts, possession proof, and any prior court orders related to the property."
      },
      {
        question: "Can a property dispute be settled outside court?",
        answer: "Yes, many property disputes can be settled through mediation, negotiation, or arbitration. However, when ownership rights are disputed with fraudulent claims, court intervention becomes necessary to establish legal title."
      },
      {
        question: "What is the success rate in property fraud cases?",
        answer: "With proper documentation and experienced legal representation, property fraud cases have a high success rate. Our firm has achieved favorable outcomes in over 90% of property dispute cases."
      }
    ]
  },
  {
    id: 2,
    title: "Securing Bail in a Complex Criminal Matter",
    category: "Criminal Law",
    icon: Shield,
    duration: "3 Months",
    court: "Criminal Court, Bengaluru",
    relief: "Protection of Personal Liberty",
    verdict: "Bail Granted",
    verdictColor: "text-green-500",
    shortDescription: "Successfully secured bail for client in a serious criminal matter, protecting personal liberty.",
    background: `A client approached Nyayamarga Law Chambers after being implicated in a criminal case involving serious allegations. The circumstances of the case indicated that the accusations were exaggerated and unsupported by substantial evidence.

The client's personal liberty was at stake, and immediate legal intervention was required to prevent prolonged custody.`,
    approach: `Our team conducted a detailed analysis of the complaint, witness statements, and investigation records. We highlighted inconsistencies in the prosecution's version and demonstrated that custodial interrogation was unnecessary.

We presented compelling arguments before the court, emphasizing the lack of prima facie evidence against our client and the availability of all necessary documents with the investigating authorities.`,
    outcome: `Through persuasive arguments before the court, we successfully secured bail for our client, ensuring protection of his personal liberty while the investigation continued. The order enabled the client to resume his professional and personal commitments without undue hardship.`,
    conclusion: `We firmly believe that every individual is entitled to a fair defense and protection of their legal rights, regardless of the allegations made against them. This case reaffirms our commitment to protecting the fundamental rights of our clients.`,
    faq: [
      {
        question: "What factors does court consider for granting bail?",
        answer: "Courts consider nature of offense, severity of punishment, likelihood of accused absconding, possibility of tampering with evidence, influencing witnesses, and the accused's past criminal record."
      },
      {
        question: "How long does the bail process take?",
        answer: "Bail applications can be filed immediately after arrest. The court typically takes 1-7 days to decide depending on case complexity and prosecution's response."
      },
      {
        question: "Is bail guaranteed in all cases?",
        answer: "No, bail is not automatic. It depends on the nature of offense. Bailable offenses grant bail as a right, while non-bailable offenses require court discretion based on merit."
      },
      {
        question: "Can bail be cancelled after being granted?",
        answer: "Yes, bail can be cancelled if the accused violates bail conditions, attempts to flee, tampers with evidence, or commits similar offenses while on bail."
      }
    ]
  },
  {
    id: 3,
    title: "Successful Recovery in a Cheque Bounce Dispute",
    category: "Negotiable Instruments Act",
    icon: TrendingUp,
    duration: "6 Months",
    court: "Magistrate Court, Bengaluru",
    relief: "Recovery of Outstanding Dues",
    verdict: "Settled in Favour of Client",
    verdictColor: "text-green-500",
    shortDescription: "Recovered substantial amount for client through strategic legal action under NI Act.",
    background: `Our client approached us after a substantial amount remained unpaid despite repeated assurances from the borrower. Several cheques issued towards repayment were dishonoured upon presentation.

The client was facing significant financial strain due to the non-recovery of legitimate dues and needed urgent legal action to recover the amount.`,
    approach: `We immediately initiated proceedings under the Negotiable Instruments Act and ensured strict compliance with statutory timelines. The legal notice and subsequent court proceedings were supported by strong documentary evidence.

Our legal team prepared a robust case demonstrating the liability of the borrower and the validity of the cheques issued. We maintained strategic pressure through timely court appearances and submissions.`,
    outcome: `Faced with compelling evidence and legal proceedings, the opposite party agreed to settle the matter and repay the outstanding amount. Our client successfully recovered a significant portion of the dues, avoiding prolonged litigation.`,
    conclusion: `At Nyayamarga Law Chambers, we assist businesses and individuals in recovering legitimate dues through strategic and result-oriented legal action. Timely legal intervention under the NI Act can often lead to swift recovery without years of litigation.`,
    faq: [
      {
        question: "What is the time limit for filing a cheque bounce case?",
        answer: "A complaint must be filed within 30 days from the expiry of the 15-day period given to the drawer to make payment after receiving legal notice."
      },
      {
        question: "What is the punishment for cheque bounce?",
        answer: "Under Section 138 of NI Act, punishment includes imprisonment up to 2 years or fine up to twice the cheque amount or both."
      },
      {
        question: "Can a cheque bounce case be settled out of court?",
        answer: "Yes, courts encourage settlement. The accused can pay the amount with interest and costs to avoid criminal proceedings."
      },
      {
        question: "Is legal notice mandatory before filing cheque bounce case?",
        answer: "Yes, issuing a legal notice within 30 days of cheque dishonour is mandatory. The drawer has 15 days to make payment before complaint can be filed."
      }
    ]
  },
  {
    id: 4,
    title: "Favourable Resolution in a Matrimonial Dispute",
    category: "Family Law",
    icon: Heart,
    duration: "8 Months",
    court: "Family Court, Bengaluru",
    relief: "Protection of Financial Interests",
    verdict: "Substantial Relief Granted",
    verdictColor: "text-green-500",
    shortDescription: "Protected client's financial interests while ensuring fair resolution of matrimonial claims.",
    background: `A client approached our office facing multiple matrimonial proceedings, including claims for maintenance and allegations that significantly affected his reputation and financial stability.

The client was dealing with exaggerated claims that threatened his financial security and peace of mind. The situation required sensitive handling combined with strong legal strategy.`,
    approach: `We carefully examined the factual background, collected documentary evidence, and presented the true circumstances before the court. Our approach focused on ensuring that only genuine and legally sustainable claims were entertained.

Our team demonstrated the lack of basis for exaggerated claims while acknowledging legitimate legal obligations. We maintained a balanced approach that protected our client's rights while respecting the legal framework governing matrimonial disputes.`,
    outcome: `The court took note of the evidence placed on record and granted substantial relief to our client. The exaggerated claims were significantly curtailed, safeguarding the client's financial interests while ensuring compliance with legal obligations.`,
    conclusion: `Family disputes require both legal expertise and sensitivity. Our team strives to secure fair outcomes while protecting the dignity and rights of all parties involved. We understand the emotional toll of family litigation and work to resolve matters efficiently.`,
    faq: [
      {
        question: "What factors determine maintenance amount?",
        answer: "Courts consider income of both parties, standard of living during marriage, needs of the claimant, capacity to pay, and custody arrangements for children."
      },
      {
        question: "How long does divorce proceedings take?",
        answer: "Mutual consent divorce takes 6-18 months. Contested divorce can take 2-5 years depending on complexity and court backlog."
      },
      {
        question: "Can child custody be modified after court order?",
        answer: "Yes, custody orders can be modified if there's significant change in circumstances affecting child's welfare."
      },
      {
        question: "What is the difference between divorce and judicial separation?",
        answer: "Judicial separation allows couples to live separately without dissolving marriage. Divorce permanently ends the marriage, allowing remarriage."
      }
    ]
  }
];

export default function SuccessStories() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState({});

  const toggleFaq = (faqIndex) => {
    setExpandedFaq(prev => ({
      ...prev,
      [faqIndex]: !prev[faqIndex]
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  // If a case is selected, show full details with back button
  if (selectedCase) {
    return (
      <>
        <Navbar />
        
        <main className="bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] text-white pt-32 pb-20">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedCase(null)}
              className="flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors mb-6 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Cases</span>
            </motion.button>

            {/* Full Case Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#3b0f0f]/70 to-[#2b0808]/70 backdrop-blur-sm border border-[#d4af37]/20 rounded-3xl overflow-hidden"
            >
              <div className="p-6 md:p-8 lg:p-10">
                {/* Category Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#d4af37]/20 rounded-xl">
                    <selectedCase.icon className="text-[#d4af37]" size={24} />
                  </div>
                  <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wide">
                    {selectedCase.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {selectedCase.title}
                </h1>

                {/* Verdict Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                  <CheckCircle size={16} className={selectedCase.verdictColor} />
                  <span className={`text-sm font-semibold ${selectedCase.verdictColor}`}>
                    {selectedCase.verdict}
                  </span>
                </div>

                {/* Case Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-black/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#d4af37]" />
                    <div>
                      <p className="text-gray-400 text-xs">Duration</p>
                      <p className="text-white text-sm font-medium">{selectedCase.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#d4af37]" />
                    <div>
                      <p className="text-gray-400 text-xs">Court</p>
                      <p className="text-white text-sm font-medium">{selectedCase.court}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#d4af37]" />
                    <div>
                      <p className="text-gray-400 text-xs">Relief Sought</p>
                      <p className="text-white text-sm font-medium">{selectedCase.relief}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="mb-8 p-6 bg-[#d4af37]/5 border-l-4 border-[#d4af37] rounded-r-xl">
                  <Quote size={24} className="text-[#d4af37] mb-2" />
                  <p className="text-gray-200 italic leading-relaxed">
                    {selectedCase.conclusion}
                  </p>
                </div>

                {/* Full Content */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold text-[#d4af37] mb-3 flex items-center gap-2">
                      <FileText size={20} />
                      Case Overview
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-3">
                      {selectedCase.background.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#d4af37] mb-3 flex items-center gap-2">
                      <Gavel size={20} />
                      Our Approach
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-3">
                      {selectedCase.approach.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#d4af37] mb-3 flex items-center gap-2">
                      <Award size={20} />
                      The Outcome
                    </h2>
                    <div className="text-gray-300 leading-relaxed space-y-3">
                      {selectedCase.outcome.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                  <div className="flex items-center gap-2 mb-6">
                    <MessageCircle size={22} className="text-[#d4af37]" />
                    <h2 className="text-xl font-semibold text-[#d4af37]">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {selectedCase.faq.map((faq, faqIndex) => {
                      const isExpanded = expandedFaq[faqIndex];
                      
                      return (
                        <div key={faqIndex} className="bg-black/30 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleFaq(faqIndex)}
                            className="w-full flex justify-between items-center p-4 text-left hover:bg-[#d4af37]/5 transition-colors"
                          >
                            <span className="font-medium text-white pr-4 text-sm md:text-base">
                              {faq.question}
                            </span>
                            {isExpanded ? (
                              <ChevronUp size={18} className="text-[#d4af37] flex-shrink-0" />
                            ) : (
                              <ChevronDown size={18} className="text-[#d4af37] flex-shrink-0" />
                            )}
                          </button>
                          
                          {isExpanded && (
                            <div className="p-4 pt-0 text-gray-300 leading-relaxed border-t border-[#d4af37]/10 text-sm">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#f4d03f]/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-3">
                  Have a Similar Legal Matter?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Every case is unique. Let us help you navigate your legal challenges with the same dedication and expertise.
                </p>
                <button className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0808] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </>
    );
  }

  // Default view: Show grid of case previews
  return (
    <>
      <Navbar />
      
      <main className="bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] text-white pt-32 pb-20">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex justify-center mb-6"
            >
              <BookOpen size={60} className="text-[#d4af37]" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] bg-clip-text text-transparent">
              Success Stories
            </h1>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"></div>

            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Real cases, real results — insights from our legal practice
            </p>
          </motion.div>

          {/* 2-Column Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#3b0f0f]/70 to-[#2b0808]/70 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-[#d4af37]/20 rounded-lg">
                      <caseStudy.icon className="text-[#d4af37]" size={18} />
                    </div>
                    <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wide">
                      {caseStudy.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {caseStudy.title}
                  </h3>

                  {/* Verdict */}
                  <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-1 mb-3">
                    <CheckCircle size={12} className={caseStudy.verdictColor} />
                    <span className={`text-xs font-semibold ${caseStudy.verdictColor}`}>
                      {caseStudy.verdict}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {caseStudy.shortDescription}
                  </p>

                  {/* Case Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={12} className="text-[#d4af37]" />
                      <span>Duration: {caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <MapPin size={12} className="text-[#d4af37]" />
                      <span>Court: {caseStudy.court}</span>
                    </div>
                  </div>

                  {/* Know More Button */}
                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="w-full mt-2 bg-[#d4af37] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#f4d03f] transition-all duration-300"
                  >
                    Know More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#f4d03f]/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-3">
                Have a Similar Legal Matter?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every case is unique. Let us help you navigate your legal challenges with the same dedication and expertise.
              </p>
              <button className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0808] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}