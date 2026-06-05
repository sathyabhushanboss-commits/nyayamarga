"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Scale, 
  BookOpen, 
  Users, 
  ExternalLink,
  GraduationCap
} from "lucide-react";

export default function OurTeam() {
  const advocates = [
    {
      name: "Krishnappa S.",
      role: "Founder & Advocate",
      image: "/ourteams/Krishnappa.jpeg",
      description: `Krishnappa S. is the Founder of Nyayamarga Law Chambers, Yelahanka, Bengaluru, and a founding member of the Dr. H. Narasimhaya Seva Trust. He holds a B.A., M.A., B.Ed., and LL.B., providing a strong educational foundation for his legal and social work.

As an advocate, Krishnappa specializes in a wide range of legal matters, focusing on both civil and criminal law. His practice is marked by a strong commitment to justice, whether guiding clients through civil disputes or defending rights in criminal cases.

In addition to his legal practice, Krishnappa is deeply involved in social service. He is a member of the Karnataka Legal Cell (Yelahanka Branch) and actively works with the Dr. B. R. Ambedkar Seva Samiti Trust (R) to secure rights for SC/ST communities. He continues to make a difference by supporting rural education and empowering communities through legal and social initiatives.`,
      qualifications: "B.A., M.A., B.Ed., LL.B.",
      expertise: ["Civil Law", "Criminal Law", "Social Justice", "Community Empowerment"]
    },
    {
      name: "Yogesh Kumar B.S.",
      role: "Co-Founder | Advocate | Assistant Professor of Law",
      image: "/ourteams/yogesh.jpeg",
      description: `Yogesh Kumar B.S. is a distinguished legal professional, academician, and co-founder of Nyayamarga Law Chambers, Bengaluru.

Holding qualifications including B.Com., PGDIBO, M.Com., CBA, LL.B., LL.M., Diploma in Taxation (DIT), Diploma in Banking (DIB), and KSET, with an MBA currently in progress, Mr. Yogesh possesses extensive knowledge across diverse fields of law, business, finance, taxation, and corporate governance. His academic excellence and commitment to continuous learning enable him to provide well-rounded legal solutions to individuals, businesses, and institutions.

As an Advocate, he has been actively involved in advising and representing clients in various legal matters, with a focus on delivering practical, ethical, and result-oriented solutions.

In addition to his legal practice, Mr. Yogesh serves as an Assistant Professor of Law, contributing to the development of future legal professionals through teaching, mentoring, and academic research. He is also a Karnataka State Eligibility Test (KSET) qualified academician, reflecting his commitment to excellence in legal education and scholarship.

Beyond the courtroom and classroom, he has been recognized by several social organizations and NGOs for his contributions toward the welfare and empowerment of backward communities. Mr. Yogesh has authored and published various legal articles, research papers, and blogs on contemporary legal issues, contributing to legal discourse.`,
      qualifications: "B.Com., PGDIBO, M.Com., CBA, LL.B., LL.M., DIT, DIB, KSET",
      expertise: ["Taxation", "Corporate Governance", "Legal Education", "Finance"]
    },
    {
      name: "Sheryl Sarah Merlin D",
      role: "Advocate | Corporate & Banking Law Professional",
      image: "/ourteams/sheryl.jpeg",
      description: `Sheryl Sarah Merlin D is a Legal Associate at Nyayamarga Law Chambers, Bengaluru. She is a gold medalist in LL.B. from ISBR Law College (affiliated to Karnataka State Law University) and holds an LL.M. from Dayananda Sagar University, along with a B.A. from Karnataka College. Sheryl excels in legal research, drafting, corporate compliance, and client interaction. Recognized for awards like Best Speaker and Ambedkar Seva Ratna, she is dedicated to ethical, practical legal solutions and women's welfare. Fluent in English, Kannada, and Hindi, she is committed to continuous growth.

In addition to her litigation and corporate experience, Sheryl is well-versed in arbitration and commercial matters, offering clients strategic guidance on dispute resolution outside traditional courtrooms. Her comprehensive understanding of commercial law enables her to assist in resolving business disputes efficiently, ensuring that clients' commercial interests are protected through both preventive legal advice and effective arbitration strategies.`,
      qualifications: "Gold Medalist LL.B., LL.M.",
      expertise: ["Corporate Compliance", "Banking Law", "Arbitration", "Commercial Advisory"]
    },
    {
      name: "Indushree S.",
      role: "Advocate | Legal Researcher | Corporate Law Professional",
      image: "/ourteams/Indushree.jpeg",
      description: `Indushree S. is a dedicated legal professional with a strong academic foundation and practical exposure to litigation and corporate legal practice. She holds an LL.M. from Dayananda Sagar University and an LL.B. from BMS College of Law, affiliated with Karnataka State Law University.

She has gained valuable experience in legal research, drafting, case preparation, client consultations, and court proceedings under the guidance of senior legal practitioners. Her professional interests include corporate compliance, contract management, legal advisory, and commercial law matters.

Indushree has also undertaken significant academic research, including a study on "Risk Management in Contract Drafting: The Need for Professional Standards in India," which strengthened her expertise in legal analysis and empirical research.

Her core competencies include legal research, contract drafting, litigation support, corporate compliance, and client advisory services. Fluent in English, Kannada, Tamil, and Telugu, she is committed to delivering practical, ethical, and result-oriented legal solutions while continuously advancing her professional growth.`,
      qualifications: "LL.M., LL.B.",
      expertise: ["Contract Drafting", "Corporate Compliance", "Legal Research", "Commercial Advisory"]
    }
  ];

  const interns: any[] = [
    
    {
      name: "Puneet V.",
      image: "/ourteams/puneet.jpeg",
      role: "Legal Intern",
      description: `Puneet V. is a legal intern currently pursuing his five-year BBA LLB from PES University, Bangalore. With a keen interest in litigation, legal research, and drafting, he has actively contributed to case analysis, document preparation, and client-focused assignments. Puneet's dedication to learning is complemented by his strong analytical skills and attention to detail. As he continues to hone his advocacy skills, he is passionate about civil, criminal, and corporate law, striving to become a well-rounded legal professional.`,
      interests: ["Litigation", "Legal Research", "Drafting", "Corporate Law"]
    },
    {
      name: "Prerana Madhukar Bhatt",
      image: "/ourteams/Prerana.jpeg",
      role: "Legal Intern",
      description: `Prerana Madhukar Bhatt is a bright and accomplished legal intern, recognized for her academic excellence and active participation in co-curricular activities. Pursuing her BBA LLB at PES University, Bangalore, she excels in legal research, drafting, and moot court competitions. With a keen eye for detail and a passion for advocacy, she balances her academic success with leadership and community involvement, aiming to build a well-rounded legal career.`,
      interests: ["Legal Research", "Drafting", "Moot Courts", "Leadership"]
    },
    {
      name: "Rohan Adithya",
      image: "/ourteams/Rohan.jpeg",
      role: "Legal Intern",
      description: `Rohan Adithya is a diligent legal intern contributing to our law chambers with curiosity and determination. He is currently pursuing his legal studies while immersing himself in practical aspects of litigation and corporate law. Rohan has engaged in legal drafting, case preparation, and research assignments, bringing a thoughtful perspective to each task. Beyond academics, he has shown enthusiasm for teamwork and problem-solving, always eager to expand his expertise in diverse areas of law. His dedication to learning and adaptability make him a promising future legal practitioner.`,
      interests: ["Drafting", "Case Preparation", "Litigation Support", "Corporate Law"]
    },
    {
      name: "Anil Kumar V.",
      image: "/ourteams/Anil.jpeg",
      role: "Legal Intern",
      description: `Anil Kumar V is a legal intern with a distinct focus on real estate matters, bringing both legal insight and practical market awareness to the table. While immersed in his legal studies, he has honed his expertise in property law, assisting in title verifications, documentation, and contract review. His dual passion for legal intricacies and real estate dealings positions him as a valuable resource. Anil's analytical mindset and practical approach ensure that both legal compliance and business goals align in the realm of property law.`,
      interests: ["Real Estate Law", "Title Verification", "Contract Review", "Compliance"]
    }
    {
      name: "Yasha Shree S.",
      image: "/ourteams/Yasha.jpeg",
      role: "Legal Intern",
      description: `Yasha Shree S. is a dedicated legal intern with a strong interest in civil litigation, dispute resolution, and legal research. She has gained practical exposure to court proceedings, mediation, legal drafting, and case analysis through internships at various legal institutions and law firms. With strong analytical and communication skills, she is committed to building a successful career in litigation and advocacy.`,
      interests: ["Civil Litigation", "Dispute Resolution", "Mediation", "Legal Drafting"]
    },
    {
      name: "Pranav A.M.",
      image: "/ourteams/Pranav.jpeg",
      role: "Legal Intern",
      description: `Pranav A.M. is a committed legal intern with a strong inclination towards corporate and litigation practice. He possesses a keen interest in legal research, drafting, compliance-related matters, and practical legal problem-solving. Through his academic and professional exposure, he has developed analytical skills and a professional approach towards legal work. His dedication, adaptability, and eagerness to learn contribute positively to the legal and professional environment.`,
      interests: ["Corporate Law", "Litigation Practice", "Compliance", "Legal Research"]
    },
    {
      name: "Divya Krishnan",
      image: "/ourteams/Divya.jpeg",
      role: "Legal Intern & Teaching Assistant",
      description: `Divya Krishnan is a research-oriented legal intern with academic exposure in legal studies and environmental law. She serves as a Teaching Assistant at the Faculty of Law, contributing to academic assistance, legal research, and student engagement. Her interest in Marine Environmental Law and international legal frameworks reflects her commitment to emerging areas of law and global legal issues. With strong research abilities, academic dedication, and a professional outlook, she aspires to contribute meaningfully to the legal field.`,
      interests: ["Environmental Law", "Marine Law", "International Law", "Legal Research"]
    },
    {
      name: "Samhita Kulkarni",
      image: "/ourteams/Samhita.jpeg",
      role: "Legal Intern & Published Author",
      description: `Samhita Kulkarni is a dedicated legal intern with strong interests in legal research, analytical writing, and contemporary legal studies. She is also a published author of PHOENIXTERZ, reflecting her excellence in writing, critical thinking, and intellectual creativity. With a keen interest in legal drafting and research-oriented work, she actively contributes to academic and professional assignments with discipline and attention to detail. Her commitment to continuous learning and effective communication makes her a promising legal professional.`,
      interests: ["Legal Research", "Analytical Writing", "Contemporary Legal Studies", "Drafting"],
      book: {
        title: "PHOENIXTERZ",
        asin: "B0DCWFLBZ4",
        publisher: "Notion Press"
      }
    },
  ];

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <>
      <Navbar />
      
      <main className="bg-gradient-to-br from-[#1a0808] via-[#2b0b0b] to-[#1a0808] text-white pt-32 pb-20">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Our Team
            </h1>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"></div>

            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Meet our dedicated team of legal professionals committed to justice and excellence
            </p>
          </motion.div>

          {/* Advocates Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] text-center mb-12">
              Senior Advocates
            </h2>
            
            <div className="space-y-16">
              {advocates.map((member, index) => (
                <motion.div
                  key={index}
                  {...(index % 2 === 0 ? fadeInLeft : fadeInRight)}
                  className="bg-gradient-to-br from-[#3b0f0f]/70 to-[#2b0808]/70 backdrop-blur-sm border border-[#d4af37]/20 rounded-3xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative">
                      <div className="relative h-96 lg:h-full min-h-[500px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-transparent"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#d4af37] font-semibold text-sm md:text-base">
                          {member.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-xs bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
                        <GraduationCap size={16} className="text-[#d4af37]" />
                        <span>{member.qualifications}</span>
                      </div>

                      <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
                        {member.description.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interns Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] text-center mb-12">
              Legal Interns
            </h2>
            
            <div className="space-y-16">
              {interns.map((intern, index) => (
                <motion.div
                  key={index}
                  {...(index % 2 === 0 ? fadeInRight : fadeInLeft)}
                  className="bg-gradient-to-br from-[#3b0f0f]/70 to-[#2b0808]/70 backdrop-blur-sm border border-[#d4af37]/20 rounded-3xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative">
                      <div className="relative h-96 lg:h-full min-h-[400px]">
                        <Image
                          src={intern.image}
                          alt={intern.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-transparent"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {intern.name}
                        </h3>
                        <p className="text-[#d4af37] font-semibold text-sm md:text-base">
                          {intern.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {intern.interests.map((interest: string, i: number) => (
                          <span key={i} className="text-xs bg-[#d4af37]/10 text-gray-300 px-3 py-1 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>

                      <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>{intern.description}</p>
                      </div>

                      {intern.book && (
                        <div className="mt-6 border border-[#d4af37]/20 rounded-xl p-4 bg-[#d4af37]/5">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen size={16} className="text-[#d4af37]" />
                            <h4 className="text-[#d4af37] font-semibold text-sm uppercase tracking-wide">
                              Published Author
                            </h4>
                          </div>

                          <p className="text-white font-medium">
                            {intern.book?.title}
                          </p>

                          <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-400">
                            <span>ASIN: {intern.book?.asin}</span>
                            <span>Publisher: {intern.book?.publisher}</span>
                          </div>

                          <button className="mt-3 text-[#d4af37] text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            View on Amazon <ExternalLink size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#f4d03f]/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-3">
                Join Our Team
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Are you passionate about law and justice? We're always looking for dedicated interns 
                and legal professionals to join our growing team.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a0808] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Apply for Internship
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}