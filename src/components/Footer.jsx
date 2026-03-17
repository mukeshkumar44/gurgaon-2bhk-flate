"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  'Aravali Vihar, Faridabad',
  'Ashoka Enclave Part 1, Faridabad',
  'Ashoka Enclave Part 3, Faridabad',
  'Ashoka Enclave, Faridabad',
  'BPTP, Faridabad',
  'Ballabhgarh, Faridabad',
  'Bharat Colony, Faridabad',
  'Block A New Industrial Twp 3, Faridabad',
  'Block A New Industrial Twp 5, Faridabad',
  'Block B New Industrial Twp 3, Faridabad',
  'Block E New Industrial Twp 5, Faridabad',
  'Block-S Sector 75, Faridabad',
  'Charmwood Village, Faridabad',
  'Dayal Bagh Colony, Faridabad',
  'Faridpur, Faridabad',
  'Fruit Garden, Faridabad',
  'Greenfield Colony Block B, Faridabad',
  'Greenfield Colony, Faridabad',
  'Greenfields, Faridabad',
  'IP Colony, Faridabad',
  'IP Extension 2, Faridabad',
  'IP extension 3, Faridabad',
  'Indraprastha Colony, Faridabad',
  'Jawahar Colony, Faridabad',
  'Lakkarpur, Faridabad',
  'NIT 5, Faridabad',
  'NIT, Faridabad',
  'Neemka Village, Faridabad',
  'Nehar Par, Faridabad',
  'New Industrial Township 1, Faridabad',
  'New Industrial Township 3, Faridabad',
  'New Industrial Township 5, Faridabad',
  'New Industrial Township, Faridabad',
  'Sainik Colony, Faridabad',
  'Sayad Wara, Faridabad',
  'Sector 10 HBC, Faridabad',
  'Sector 10 Housing Board Colony, Faridabad',
  'Sector 11, Faridabad',
  'Sector 11C, Faridabad',
  'Sector 11D faridabad, Faridabad',
  'Sector 14, Faridabad',
  'Sector 18, Faridabad',
  'Sector 19, Faridabad',
  'Sector 2, Faridabad',
  'Sector 21, Faridabad',
  'Sector 21D, Faridabad',
  'Sector 29, Faridabad',
  'Sector 3, Faridabad',
  'Sector 30, Faridabad',
  'Sector 31, Faridabad',
  'Sector 32, Faridabad',
  'Sector 34, Faridabad',
  'Sector 35, Faridabad',
  'Sector 37, Faridabad',
  'Sector 43, Faridabad',
  'Sector 45, Faridabad',
  'Sector 46, Faridabad',
  'Sector 48, Faridabad',
  'Sector 49, Faridabad',
  'Sector 52, Faridabad',
  'Sector 55, Faridabad',
  'Sector 56A, Faridabad',
  'Sector 57, Faridabad',
  'Sector 62, Faridabad',
  'Sector 63, Faridabad',
  'Sector 65, Faridabad',
  'Sector 70, Faridabad',
  'Sector 72, Faridabad',
  'Sector 73, Faridabad',
  'Sector 75, Faridabad',
  'Sector 76, Faridabad',
  'Sector 77, Faridabad',
  'Sector 78, Faridabad',
  'Sector 80, Faridabad',
  'Sector 82, Faridabad',
  'Sector 83, Faridabad',
  'Sector 84, Faridabad',
  'Sector 85, Faridabad',
  'Sector 86, Faridabad',
  'Sector 87, Faridabad',
  'Sector 88, Faridabad',
  'Sector 89, Faridabad',
  'Sector 9, Faridabad',
  'Sector 91, Faridabad',
  'Sector 97, Faridabad',
  'Sector 98, Faridabad',
  'Sector-143, Faridabad',
  'Shiv Durga Vihar, Faridabad',
  'Sikri, Faridabad',
  'Springfield Colony, Faridabad',
  'Surajkund, Faridabad',
  'Surya Nagar Phase 1, Faridabad',
  'Surya Nagar Phase 2, Faridabad',
  'Surya Vihar Part 2, Faridabad',
  'advitya homes, Faridabad',
  'sector 104 faridabad'
];

const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
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
        {/* <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            2BHK Flats for Sale in{" "}
            <span className="text-[#0046FF]">Faridabad</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Discover premium 2BHK flats in prime sectors with excellent connectivity and investment value.
          </p>
        </div> */}

        {/* LOCATIONS */}
        <div className="mb-10 overflow-visible">
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-4 text-sm overflow-visible">

            {visibleLocations.map((loc, index) => (
              <div key={index} className="relative group overflow-visible">

                <Link
                  href={`/${createSlug(loc)}`}
                  className="block truncate text-gray-400 hover:text-white transition duration-300"
                >
                  2BHK Flats For Sale in {loc}
                </Link>

                <div className="
                  absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200 whitespace-nowrap
                  bg-[#111827] text-white text-xs
                  px-3 py-1.5 rounded-md shadow-lg
                  border border-[#0046FF]/40 z-[9999]
                  pointer-events-none">
                  2BHK Flats For Sale in {loc}
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