"use client";
import { useState } from "react";

export default function Flats2BHKFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "1. What is the average price of 2BHK flats in Gurgaon?",
      a: "The price of 2bhk flats for sale in Gurgaon depends on location and amenities. Affordable areas have lower prices, while premium areas are higher. On average, prices are increasing due to demand. You can compare multiple options on our platform easily.",
    },
    {
      q: "2. Are ready to move flats better than under construction?",
      a: "Yes, ready to move flats in Gurgaon are better if you want immediate possession. There is no waiting time, and you can check the property before buying. However, under-construction flats may be cheaper.",
    },
    {
      q: "3. How can I find affordable 2BHK flats in Gurgaon?",
      a: "You can search for affordable 2bhk flats in Gurgaon using filters on our platform. It shows budget-friendly options with complete details. You can compare and choose easily.",
    },
    {
      q: "4. Is it safe to buy property without a broker?",
      a: "Yes, with direct buyer-seller interaction, it is safe. Our platform ensures trusted property deals Gurgaon with verified listings. This removes unnecessary broker fees.",
    },
    {
      q: "5. Which are the best areas to buy 2BHK flats in Gurgaon?",
      a: "Popular areas include Sohna Road, Dwarka Expressway, and New Gurgaon. These locations have good connectivity and growth. Many residential flats in Gurgaon are available in these areas.",
    },
    {
      q: "6. What documents are needed to buy a flat?",
      a: "You need ID proof, address proof, and property papers. Also check sale agreements and approvals. These are important for buying 2bhk apartments in Gurgaon safely.",
    },
    {
      q: "7. Can I list my property for free?",
      a: "Yes, our platform offers free property listing. Sellers can list their property without any cost and connect directly with buyers.",
    },
    {
      q: "8. Why should I use your platform instead of others?",
      a: "Our platform offers verified listings, direct interaction, and no middleman. You can find all property listings in Gurgaon in one place, making the process simple.",
    },
    {
      q: "9. Is Gurgaon a good place for investment?",
      a: "Yes, Gurgaon is growing fast. Buying 2bhk flats for sale in Gurgaon can give good returns due to rising demand and infrastructure development.",
    },
    {
      q: "10. How do I contact the seller?",
      a: "You can directly contact the seller through our platform. This makes it easy to buy 2bhk flats in Gurgaon without any extra cost or delay.",
    },
  ];

  return (
    <section className="bg-blue-50 py-6 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#0046FF]">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`border border-blue-200 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                ${
                  isOpen
                    ? "bg-blue-100 shadow-md"
                    : "bg-white hover:shadow-lg"
                }`}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">
                    {faq.q}
                  </span>

                  <span
                    className={`text-black transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}