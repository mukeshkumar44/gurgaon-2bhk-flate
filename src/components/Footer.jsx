"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

const createSlug = (location) => {
  return location
    .replace(", Gurgaon", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 50; // initially show limited
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#0b1120] pt-16 pb-8 px-4 border-t border-[#1a2238] overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">

        {/* BRAND */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            2BHK Flats for Sale in{" "}
            <span className="text-[#0046FF]">Gurgaon</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium 2BHK flats in prime sectors with excellent connectivity and investment value.
          </p>
        </div>

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h2 className="text-lg font-semibold text-white mb-6">
            Popular Locations in Gurgaon
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`/2bhk-flat-for-sale-in-${createSlug(loc)}-gurgaon`}
                  className="block truncate text-gray-400 hover:text-white transition duration-300"
                >
                  2BHK Flats For Sale in {loc}, Gurgaon
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200 whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md shadow-lg
                  border border-[#0046FF]/40 z-[9999]
                  pointer-events-none">
                  2BHK Flats For Sale in {loc}, Gurgaon
                </div>

              </div>
            ))}

            {!showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(true)}
                  className="block cursor-pointer text-[#0046FF] hover:underline"
                >
                  View More...
                </span>
              </div>
            )}

            {showAll && locations.length > initialCount && (
              <div>
                <span
                  onClick={() => setShowAll(false)}
                  className="block cursor-pointer text-[#0046FF] hover:underline"
                >
                  View Less...
                </span>
              </div>
            )}

          </div>
        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#1a2238] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-gray-400 hover:text-[#0046FF] transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-gray-400 hover:text-[#0046FF] transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-[#0046FF] transition"
      >
        Contact
      </Link>

      <Link
        href="/how-it-works"
        className="text-gray-400 hover:text-[#0046FF] transition"
      >
        How It's Work
      </Link>
    </div>

  </div>
</div>
        {/* BOTTOM */}
        <div className="border-t border-[#1a2238] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Flats For Sale In Gurgaon.com - All right resverd
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}