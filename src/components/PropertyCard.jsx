"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col h-full">

        {/* IMAGE */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={property?.media?.url || "/no-image.png"}
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

          <span onClick={() => setOpen(true)} 
           className="absolute top-3 left-3 bg-[#0046FF] text-white text-xs px-3 py-1 rounded-full shadow font-medium cursor-pointer">
            {property.propertyType}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-3 flex flex-col flex-1">

          <h2 className="text-base font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  {property.locality}
</p>

          {/* STATS */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {/* <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Area
              </span>
              <span className="font-semibold text-gray-900 text-sm">
                {formatArea(property.area, property.areaUnit)}
              </span>
            </div> */}

            <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Type
              </span>
              <span className="font-semibold text-gray-900 text-sm">
                {property.propertyCategory}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-2">
              <span className="text-gray-400 uppercase text-xs tracking-wide block mb-1">
                Status
              </span>
              <span className="font-semibold text-[#0046FF] text-sm">
                {property.status || "Available"}
              </span>
            </div>
          </div>

          {/* <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
            {property.description ||
              "High-value commercial asset offering strong rental potential and long-term growth."}
          </p> */}

          <div className="flex-1" />

          {/* PRICE + BUTTONS */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            {/* <p className="text-lg font-bold text-[#0046FF] mb-3">
              {property.price && property.price > 0
                ? `₹ ${property.price.toLocaleString("en-IN")}`
                : "Price on Request"}
            </p> */}

            {/* BUTTON ROW */}
            <div className="flex gap-3">

              {/* CONTACT NOW */}
              <button
                onClick={() => setOpen(true)}
                className="flex-1 bg-[#0046FF] text-white
                py-1.5 rounded-full text-sm font-medium
                hover:bg-[#0035cc] transition
                shadow cursor-pointer"
              >
                Price on Call
              </button>

              {/* VIEW DETAILS */}
              <Link
                href={`/properties/${property.slug}`}
                className="flex-1 border border-[#0046FF] text-[#0046FF]
                py-1.5 rounded-full text-sm font-medium text-center
                hover:bg-[#0046FF] hover:text-white
                transition cursor-pointer"
              >
                View Details
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={property.title}
      />
    </>
  );
}