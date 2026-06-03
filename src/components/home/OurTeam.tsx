// src/components/home/OurTeam.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  const advocates = [
    {
      name: "Krishnappa S.",
      role: "Founder & Advocate",
      image: "/ourteams/Krishnappa.jpeg",
      description:
        "Founder of Nyayamarga Law Chambers and founding member of Dr. H. Narasimhaya Seva Trust. Specializes in civil and criminal law while actively contributing to social justice, rural education, and SC/ST community empowerment.",
    },
    {
      name: "Yogesh Kumar B.S.",
      role: "Co-Founder | Advocate | Assistant Professor of Law",
      image: "/ourteams/yogesh.jpeg",
      description:
        "Advocate, academician, researcher, and Assistant Professor of Law with expertise in law, taxation, finance, corporate governance, and legal education. Author of various legal articles and research papers.",
    },
    {
      name: "Sheryl Sarah Merlin D",
      role: "Advocate | Corporate & Banking Law Professional",
      image: "/ourteams/sheryl.jpeg",
      description:
        "Gold Medalist advocate with expertise in corporate compliance, banking law, arbitration, legal research, commercial advisory, and dispute resolution.",
    },
    {
      name: "Indushree S.",
      role: "Advocate | Legal Researcher | Corporate Law Professional",
      image: "/ourteams/Indushree.jpeg",
      description:
        "Legal researcher and corporate law professional experienced in contract drafting, litigation support, corporate compliance, commercial advisory, and legal analysis.",
    },
  ];

  const interns = [
    {
      name: "Yasha Shree S.",
      image: "/ourteams/Yasha.jpeg",
      role: "Legal Intern",
      description:
        "Dedicated legal intern with strong interest in civil litigation, dispute resolution, mediation, legal drafting, legal research, and case analysis.",
    },
    {
      name: "Pranav A.M.",
      image: "/ourteams/Pranav.jpeg",
      role: "Legal Intern",
      description:
        "Committed legal intern with interests in corporate law, litigation practice, compliance matters, drafting, and practical legal problem-solving.",
    },
    {
      name: "Divya Krishnan",
      image: "/ourteams/Divya.jpeg",
      role: "Legal Intern & Teaching Assistant",
      description:
        "Research-oriented legal intern and Teaching Assistant with interests in environmental law, marine environmental law, international legal frameworks, and academic legal research.",
    },
    {
      name: "Samhita Kulkarni",
      image: "/ourteams/Samhita.jpeg",
      role: "Legal Intern & Published Author",
      description:
        "Published author and legal intern with interests in legal research, analytical writing, contemporary legal studies, drafting, and academic contributions.",
    },
    {
      name: "Puneet V.",
      image: "/ourteams/puneet.jpeg",
      role: "Legal Intern",
      description:
        "Legal intern pursuing BBA LLB at PES University with interests in litigation, legal research, drafting, and client-focused legal assignments.",
    },
    {
      name: "Prerana Madhukar Bhatt",
      image: "/ourteams/Prerana.jpeg",
      role: "Legal Intern",
      description:
        "Accomplished legal intern pursuing BBA LLB at PES University, recognized for legal research, drafting, moot courts, leadership, and academic excellence.",
    },
    {
      name: "Rohan Adithya",
      image: "/ourteams/Rohan.jpeg",
      role: "Legal Intern",
      description:
        "Diligent legal intern actively involved in drafting, case preparation, legal research, litigation support, and corporate law assignments.",
    },
    {
      name: "Anil Kumar V.",
      image: "/ourteams/Anil.jpeg",
      role: "Legal Intern",
      description:
        "Legal intern with strong focus on real estate law, title verification, documentation, contract review, property transactions, and compliance.",
    },
  ];

  return (
    <section id="team" className="bg-[#1f0707] py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advocates Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4af37]">
            Our Legal Team
          </h2>

          <div className="w-24 sm:w-28 md:w-32 h-0.5 bg-[#d4af37] mx-auto mt-3 sm:mt-4"></div>

          <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base px-4">
            Experienced advocates committed to justice and professional excellence.
          </p>
        </div>

        {/* Advocates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {advocates.map((member, index) => (
            <div
              key={index}
              className="bg-[#2b0b0b] border border-[#d4af37]/20 rounded-xl overflow-hidden hover:border-[#d4af37] transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full"
            >
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-[#d4af37] mt-2 text-xs sm:text-sm">
                  {member.role}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed flex-grow line-clamp-4">
                  {member.description}
                </p>

                <Link href="/team">
                  <button className="mt-4 sm:mt-5 border border-[#d4af37] text-[#d4af37] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-full">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interns Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
            Legal Interns
          </h2>

          <div className="w-20 sm:w-24 h-0.5 bg-[#d4af37] mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Interns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {interns.map((intern, index) => (
            <div
              key={index}
              className="bg-[#2b0b0b] border border-[#d4af37]/20 rounded-xl overflow-hidden hover:border-[#d4af37] transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full"
            >
              <div className="relative w-full h-72 sm:h-80">
                <Image
                  src={intern.image}
                  alt={intern.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {intern.name}
                </h3>

                <p className="text-[#d4af37] mt-2 text-xs sm:text-sm">
                  {intern.role}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed flex-grow line-clamp-4">
                  {intern.description}
                </p>

                <Link href="/team">
                  <button className="mt-4 sm:mt-5 border border-[#d4af37] text-[#d4af37] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-full">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/team">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#f4d03f] transition-all duration-300">
              Meet Our Full Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}