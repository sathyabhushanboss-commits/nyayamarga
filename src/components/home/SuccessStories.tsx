export default function SuccessStories() {
  const cases = [
    {
      no: "01",
      title: "Landmark Victory in Property Fraud Dispute",
      category: "Property Law / Civil Litigation",
      verdict: "Relief Granted in Favour of Client",
    },
    {
      no: "02",
      title: "Upcoming Case Study",
      category: "Coming Soon",
      verdict: "",
    },
    {
      no: "03",
      title: "Upcoming Case Study",
      category: "Coming Soon",
      verdict: "",
    },
    {
      no: "04",
      title: "Upcoming Case Study",
      category: "Coming Soon",
      verdict: "",
    },
    {
      no: "05",
      title: "Upcoming Case Study",
      category: "Coming Soon",
      verdict: "",
    },
    {
      no: "06",
      title: "Upcoming Case Study",
      category: "Coming Soon",
      verdict: "",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cases.map((item) => (
            <div
              key={item.no}
              className="group bg-[#1f0707] border border-[#d4af37]/20 rounded-xl p-8 hover:border-[#d4af37] transition"
            >
              <div className="text-6xl font-bold text-[#d4af37]/20">
                {item.no}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="text-[#d4af37] mt-3">
                {item.category}
              </p>

              {item.verdict && (
                <p className="text-green-400 mt-4">
                  {item.verdict}
                </p>
              )}

              <button className="mt-6 text-[#d4af37] border border-[#d4af37] px-4 py-2 rounded-md hover:bg-[#d4af37] hover:text-black transition">
                Read More
              </button>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <a
            href="/success-stories"
            className="bg-[#d4af37] text-black px-8 py-4 rounded-md font-semibold"
          >
            View All Success Stories
          </a>
        </div>

      </div>
    </section>
  );
}