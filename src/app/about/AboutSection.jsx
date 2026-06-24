"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb"
import DisclaimerSection from "./DisclaimerSection";
export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
<div className="py-5">
            <Breadcrumb/>
           </div>
        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About{" "}
              <span className="text-[#0046FF]">
                2BHK Flat for Sale in Gurgaon
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-xl">
              The most popular flat size in Gurgaon — now easier than ever 
              to find, buy, and move into. Explore verified 2BHK flats, new 
              launches, and ready-to-move options all in one place.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-[#0046FF] text-white shadow-lg hover:bg-black transition"
              >
                Explore 2BHK Flats Now
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#0046FF] text-[#0046FF]
                hover:bg-blue-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="bg-white border border-blue-100 rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#0046FF]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified 2BHK Flats Listed
            </p>

            <div className="h-px bg-blue-200 my-8"></div>

            <h3 className="text-4xl font-bold text-[#0046FF]">
              180+
            </h3>
            <p className="text-gray-600 mt-2">
              New Launch & Builder Projects
            </p>

            <div className="h-px bg-blue-200 my-8"></div>

            <h3 className="text-4xl font-bold text-[#0046FF]">
              3000+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Buyers & Investors Served
            </p>

          </div>
        </div>


        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            A 2BHK flat is where most homeownership journeys in Gurgaon begin — 
            and we want that journey to start on the right note. Our mission is 
            to be the go-to platform for anyone searching for a 2BHK flat for 
            sale in Gurgaon — whether you are a young professional working in 
            the corporate hubs, a small family looking for a modern lifestyle, 
            or a first-time buyer ready to stop renting and start owning.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            From affordable 2BHK flats in developing sectors to premium 
            residential projects in prime areas like Sector 56, Sector 57, 
            Golf Course Road, Sohna Road, and Dwarka Expressway — we bring 
            together every kind of 2BHK option across Gurgaon so you always 
            have the right choices in front of you, at every budget and at 
            every stage of your decision.
          </p>
        </div>


        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-2xl p-10 border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ready-to-Move & New Launch Both
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you want to move in immediately or invest early in 
                a new launch project at a better price — we list both 
                ready-to-move and under-construction 2BHK flats so you never 
                have to compromise on timing or budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings, Honest Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every 2BHK flat on our platform is verified for accuracy, 
                current availability, and fair pricing — so you spend your 
                time exploring genuine options and not chasing listings 
                that no longer exist.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Sellers, List & Reach Buyers Fast
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Selling your 2BHK flat in Gurgaon? Post your listing in 
                minutes and get it instantly in front of thousands of serious 
                homebuyers, working professionals, and investors actively 
                searching right now.
              </p>
            </div>

          </div>
        </div>


        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#0046FF] to-black rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your First Home — or Your Next One — Starts Right Here.
          </h2>

          <p className="text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Browse verified 2BHK flats for sale across Gurgaon — 
            ready-to-move options, new launches, and premium residential 
            projects — and take the first step toward a home that fits 
            your lifestyle and investment goals.
          </p>

          <Link
            href="/"
            className="bg-white text-[#0046FF] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Explore 2BHK Flats Now
          </Link>

        </div>

      </div>
      <DisclaimerSection/>
    </section>
  );
}