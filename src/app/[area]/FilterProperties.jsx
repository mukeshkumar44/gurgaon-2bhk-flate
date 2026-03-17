"use client";

import { useEffect, useState, useMemo } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";

export default function FilterProperties({ area }) {

  const { data, properties, loading2, error2, setLocality } = useProperty();

  const safeData = Array.isArray(data) ? data : [];
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [highlightId, setHighlightId] = useState(null);

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea, setLocality]);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    return `${formattedNumber} ${unit}`;
  };

  /* ================= 150 CARD LOGIC ================= */

  const finalData = useMemo(() => {

    if (safeProperties.length === 0) {
      return safeData;
    }

    const filteredIds = new Set(
      safeData.map((p) => p._id)
    );

    const remaining = safeProperties.filter(
      (p) => !filteredIds.has(p._id)
    );

    const needed = 150 - safeData.length;

    return [
      ...safeData,
      ...remaining.slice(0, needed > 0 ? needed : 0)
    ].slice(0, 150);

  }, [safeData, safeProperties]);

  /* ================= LOADING ================= */

  if (loading2) {
    return (
      <section className="bg-[#EFF6FF] min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0046FF] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm">
            Loading Premium Properties...
          </p>
        </div>
      </section>
    );
  }

  /* ================= ERROR ================= */

  if (error2) {
    return (
      <section className="bg-[#EFF6FF] py-16">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-xl font-semibold text-gray-800">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Unable to load properties right now. Please try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-[#0046FF] text-white px-6 py-2 rounded-lg hover:bg-[#0033CC] transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  /* ================= EMPTY ================= */

  if (finalData.length === 0) {
    return (
      <section className="bg-[#EFF6FF] py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          No Properties Available in {formattedArea}
        </h2>
      </section>
    );
  }

  /* ================= MAIN ================= */

  return (
    <section className="bg-[#EFF6FF] py-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-6">

        {finalData.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
          >

            <div className="flex flex-col md:flex-row">

              {/* PROPERTY IMAGE */}
              <div className="relative md:w-[35%] overflow-hidden">

                <Image
                  src={property?.media?.url || "/no-image.png"}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="w-full h-60 md:h-full object-cover"
                />

                {/* Property Type Ribbon */}

                <span  onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }} className="
                  absolute top-4 left-0
                  bg-[#0046FF] text-white
                  text-xs md:text-sm
                  px-4 py-1.5
                  font-semibold
                  shadow-lg
                  rounded-r-full
                  tracking-wide
                  cursor-pointer
                ">
                  {property.propertyType}
                </span>

              </div>

              {/* PROPERTY DETAILS */}

              <div className="p-4 flex-1 flex flex-col">

                <h2 className="text-xl font-semibold text-gray-900">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {property.locality}
                </p>

                {/* STATUS + TYPE */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 relative">

                   
                    <div className="relative">
                      
                      <p className="text-sm text-gray-500">
                        STATUS : <span  className="font-semibold text-blue-800 text-md">Available</span>
                      </p>
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></div>
                    </div>

                    {/* TYPE */}
                    <div>
                      <p className="text-sm text-gray-500">
                        TYPE :  <span  className="font-semibold text-gray-800 text-md"> {property.propertyCategory}</span>
                      </p>
                      <p>
                        
                      </p>
                    </div>

                  </div>

                {/* DESCRIPTION */}

                <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                  {property.description ||
                    "Premium residential/commercial space offering strong rental potential and long-term appreciation."}
                </p>

                <div className="flex-1" />

                {/* ACTION BUTTONS */}

                <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">

                  <button
                    onClick={() => {
                      setSelectedProperty(property.title);
                      setOpen(true);
                    }}
                    className="border border-[#0046FF] text-[#0046FF] px-5 py-2 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                  >
                    Price on Call
                  </button>

                  <Link
                    href={`/properties/${property.slug}`}
                    className="bg-[#0046FF] text-white px-6 py-2 rounded-lg hover:bg-[#0033CC] transition text-sm"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* CONTACT POPUP */}

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />

    </section>
  );
}