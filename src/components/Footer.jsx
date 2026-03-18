"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  'Ashok Vihar',           'Ashok Vihar Phase 2', 'DLF Phase 1',
  'DLF Phase 2',           'DLF Phase 4',         'MG Road',
  'Manesar',               'New Palam Vihar',     'Palam Vihar',
  'Palam Vihar Extension', 'Sadar Bazar',         'Sector 1',
  'Sector 102',            'Sector 103',          'Sector 106',
  'Sector 107',            'Sector 108',          'Sector 109',
  'Sector 10A',            'Sector 11',           'Sector 111',
  'Sector 112',            'Sector 113',          'Sector 2',
  'Sector 25',             'Sector 28',           'Sector 3',
  'Sector 30',             'Sector 31',           'Sector 33',
  'Sector 37D',            'Sector 3A',           'Sector 41',
  'Sector 45',             'Sector 47',           'Sector 51',
  'Sector 53',             'Sector 56',           'Sector 57',
  'Sector 58',             'Sector 6',            'Sector 60',
  'Sector 61',             'Sector 62',           'Sector 63',
  'Sector 63A',            'Sector 65',           'Sector 66',
  'Sector 67',             'Sector 67A',          'Sector 68',
  'Sector 69',             'Sector 76',           'Sector 77',
  'Sector 78',             'Sector 8',            'Sector 81',
  'Sector 82',             'Sector 83',           'Sector 84',
  'Sector 85',             'Sector 86',           'Sector 88',
  'Sector 89',             'Sector 91',           'Sector 92',
  'Sector 93',             'Sector 95',           'Sector 99',
  'South City 1',          'South City 2',        'Sushant Lok Phase 2',
  'Sushant Lok Phase 3',   'Udyog Vihar'
];

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