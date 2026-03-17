"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-[#0046FF] shadow-md px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-[70px]">

            {/* LOGO */}
            <Link
               href="/"
  onClick={(e) => {
    if (window.location.pathname === "/") {
      e.preventDefault(); // route reload prevent
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }}
              className="text-xl sm:text-2xl font-bold tracking-wide text-white  transition duration-300"
            >
              2BHK Flat for sale Gurgaon
            </Link>

            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden md:flex items-center gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative text-lg font-medium text-white hover:text-black transition duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* CONTACT BUTTON */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 rounded-full text-sm font-semibold
                bg-white text-blue-600
                hover:bg-white hover:text-blue-600
                transition duration-300 shadow-md"
              >
                Contact
              </Link>

            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed top-[70px] left-0 w-full z-40 md:hidden bg-[#0046FF] shadow-xl">
          <div className="flex flex-col gap-6 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
           <Link
                href="/contact"
                className="ml-4 px-6 py-2 rounded-full text-sm font-semibold
                bg-white text-blue-600
                hover:bg-white hover:text-blue-600
                transition duration-300 shadow-md"
              >
                Contact
              </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;