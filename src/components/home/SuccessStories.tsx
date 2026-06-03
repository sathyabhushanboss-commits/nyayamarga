// src/components/home/SuccessStories.tsx
"use client";

import Link from "next/link";

export default function SuccessStories() {
  const cases = [
    {
      id: 1,
      no: "01",
      title: "Landmark Victory in Property Fraud Dispute",
      category: "Property Law / Civil Litigation",
      verdict: "Relief Granted in Favour of Client",
      description: "Successfully protected client's ownership rights against fraudulent claims in a complex property dispute case.",
      duration: "14 Months",
      court: "Civil Court, Bengaluru",
    },
    {
      id: 2,
      no: "02",
      title: "Securing Bail in a Complex Criminal Matter",
      category: "Criminal Law",
      verdict: "Bail Granted",
      description: "Successfully secured bail for client in a serious criminal matter, protecting personal liberty.",
      duration: "3 Months",
      court: "Criminal Court, Bengaluru",
    },
    {
      id: 3,
      no: "03",
      title: "Successful Recovery in a Cheque Bounce Dispute",
      category: "Negotiable Instruments Act",
      verdict: "Settled in Favour of Client",
      description: "Recovered substantial amount for client through strategic legal action under NI Act.",
      duration: "6 Months",
      court: "Magistrate Court, Bengaluru",
    },
    {
      id: 4,
      no: "04",
      title: "Favourable Resolution in a Matrimonial Dispute",
      category: "Family Law",
      verdict: "Substantial Relief Granted",
      description: "Protected client's financial interests while ensuring fair resolution of matrimonial claims.",
      duration: "8 Months",
      court: "Family Court, Bengaluru",
    },
  ];

  return (
    <section className="bg-[#2b0b0b] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37]">
            Success Stories
          </h2>

          <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mt-4"></div>

          <p className="text-gray-300 mt-6">
            Every case represents dedication, strategy, and commitment to justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1f0707] border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-6xl font-bold text-[#d4af37]/20 group-hover:text-[#d4af37]/40 transition-colors">
                {item.no}
              </div>

              <h3 className="text-white text-xl font-semibold mt-4 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-[#d4af37] mt-2 text-sm">
                {item.category}
              </p>

              <p className="text-gray-400 mt-3 text-sm line-clamp-3">
                {item.description}
              </p>

              {item.verdict && (
                <p className="text-green-400 mt-3 text-sm font-semibold">
                  ✓ {item.verdict}
                </p>
              )}

              <div className="flex flex-col gap-2 mt-4">
                <Link href={`/success-stories/${item.id}`}>
                  <button className="text-[#d4af37] border border-[#d4af37] px-4 py-2 rounded-md hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-full">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/success-stories">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#f4d03f] transition-all duration-300">
              View All Success Stories
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}