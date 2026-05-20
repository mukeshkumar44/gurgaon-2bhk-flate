"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the price of a 2BHK flat for sale in Gurgaon?",
    answer:
      "2BHK flat prices in Gurgaon range from ₹30 lakh in affordable housing projects in Sectors 82-115 to ₹3+ crore in premium DLF or Golf Course Road projects. The sweet spot for mid-segment 2BHK buyers is ₹60-1.2 crore.",
  },
  {
    question:
      "Which locality offers the best value 2BHK flats in Gurgaon?",
    answer:
      "For best value, consider Sohna Road (mid-segment), New Gurgaon Sectors 82-95 (affordable to mid), Golf Course Extension Road (mid-premium), and Dwarka Expressway Sectors 99-115 (affordable with high appreciation potential).",
  },
  {
    question:
      "What is the typical carpet area of a 2BHK flat in Gurgaon?",
    answer:
      "2BHK flats in Gurgaon typically range from 600-700 sq ft carpet area in affordable projects to 800-1,100 sq ft in mid-premium and luxury developments. Always check RERA-declared carpet area, not super built-up area.",
  },
  {
    question:
      "Are 2BHK flats in Gurgaon good for investment?",
    answer:
      "Yes, 2BHK flats are Gurgaon's highest-demand residential asset. They offer the best combination of capital appreciation (8-12% annually in established areas) and rental yield (4-5%), with the highest liquidity for resale.",
  },
  {
    question:
      "Can I get a home loan for a 2BHK flat below ₹50 lakh in Gurgaon?",
    answer:
      "Yes, banks readily offer home loans for 2BHK flats below ₹50 lakh in Gurgaon. PMAY-CLSS subsidy may also apply, reducing effective loan cost. SBI, HDFC, and LIC Housing Finance are popular choices.",
  },
  {
    question:
      "What amenities should a good 2BHK flat project in Gurgaon have?",
    answer:
      "Look for gated security, CCTV, power backup, gymnasium, swimming pool, children's play area, covered parking, efficient elevator-to-flat ratio, and proximity to schools, hospitals, and grocery stores.",
  },
  {
    question:
      "How long does it take to get possession of an under-construction 2BHK flat in Gurgaon?",
    answer:
      "Possession timelines vary from 18 months to 4 years for new launches. Always check the HRERA-registered delivery date and builder's past project delivery track record before booking an under-construction 2BHK.",
  },
  {
    question:
      "What rental income can I expect from a 2BHK flat in Gurgaon?",
    answer:
      "A 2BHK flat in a good Gurgaon society earns ₹15,000-40,000/month in rent depending on location and furnishing. Premium 2BHK flats near Cyber City on Golf Course Road can command ₹50,000-90,000/month.",
  },
  {
    question:
      "Are 2BHK flats with study rooms available in Gurgaon?",
    answer:
      "Yes, many new projects in Gurgaon offer 2BHK+study configurations where the study room can serve as a small third room or home office. This format has become more popular post-pandemic due to work-from-home requirements.",
  },
  {
    question:
      "What is the resale process for a 2BHK flat in Gurgaon?",
    answer:
      "Resale of a 2BHK flat involves finding a buyer (through agents or portals), executing a sale agreement, completing legal due diligence, arranging buyer's home loan valuation, and completing registration at the Sub-Registrar's office.",
  },
];

export default function GurgaonRealEstateSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
   <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6">

  {/* Background Lights */}
  <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#0046FF]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#0046FF]/10 blur-3xl" />

  {/* Border Circles */}
  <div className="absolute top-16 left-10 h-24 w-24 rounded-full border border-[#0046FF]/20" />

  <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-[#0046FF]/10" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Main Content Box */}
    <div className="rounded-[34px] border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 p-8 md:p-14 shadow-[0_20px_60px_rgba(0,70,255,0.08)]">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-bold leading-tight text-gray-900 max-w-5xl">
        About
        <span className="text-[#0046FF]">
          {" "}Gurgaon Real Estate
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="mt-8 space-y-7">

        <p className="text-lg leading-9 text-gray-600">
         The 2BHK flat segment is the undisputed engine of Gurgaon's residential real estate market — consistently accounting for the largest share of both total transactions and new project launches city-wide. Its appeal is near-universal: 2BHK flats in Gurgaon serve first-time homebuyers taking their first step onto the property ladder, investor buyers targeting the city's strongest rental yield segment, couples and young families seeking a practical and comfortable home, and upsizers converting from smaller units. From a market dynamics perspective, Gurgaon's 2BHK segment is characterised by deep liquidity — these flats are the easiest to sell and rent, minimising vacancy risk for investors. Price points for 2BHK flats in Gurgaon range from approximately ₹28-35 lakh in peripheral affordable housing projects (Sectors 82-115) to ₹70 lakh-1.5 crore in mid-premium localities like Sohna Road and Golf Course Extension Road, and ₹1.5-3.5 crore in premium zones like DLF and Golf Course Road. Carpet areas typically range from 600 to 1,050 sq ft depending on the project and budget. Leading 2BHK project providers include Signature Global, Godrej Properties, M3M, Emaar, and DLF's more accessible developments. With consistently strong demand from both end-users and tenants, 2BHK flats in Gurgaon offer the most reliable and rewarding real estate investment in the city.
        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-14">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <p className="mt-2 text-gray-500">
          Everything you need to know before renting a flat in Gurgaon.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border-[#0046FF]/30 shadow-[0_10px_40px_rgba(0,70,255,0.10)]"
                  : "border-gray-200 hover:border-[#0046FF]/20"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h4
                  className={`text-base md:text-lg font-semibold transition ${
                    isOpen
                      ? "text-[#0046FF]"
                      : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h4>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0046FF] rotate-180"
                      : "bg-[#0046FF]/10"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`${
                      isOpen
                        ? "text-white"
                        : "text-[#0046FF]"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 py-5 text-gray-600 leading-7 bg-gradient-to-b from-[#0046FF]/[0.03] to-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
  );
}