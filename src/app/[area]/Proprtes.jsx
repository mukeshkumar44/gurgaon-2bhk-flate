"use client";

import { useState, useRef } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import Pagination from "@/components/Pagination";

export default function Properties() {

  const { properties, loading, error } = useProperty();

  // ✅ Safe array
  const safeProperties = Array.isArray(properties) ? properties : [];

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 100; // 🔥 change if needed
  const firstCardRef = useRef(null);

  // ✅ Pagination Logic
  const totalItems = safeProperties.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProperties = safeProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-[#EFF6FF]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0046FF] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm">
            Loading Premium Listings...
          </p>
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error) {
    return (
      <div className="text-center py-16 bg-[#EFF6FF]">
        <p className="text-red-500 font-medium">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (properties.length === 0) {
    return (
      <div className="text-center py-16 bg-[#EFF6FF]">
        <p className="text-gray-600">No Properties Available</p>
      </div>
    );
  }

  return (
    <section className="bg-[#EFF6FF] py-3">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-8">

          {currentProperties.map((property, index) => (
            <div
              key={property._id}
              ref={index === 0 ? firstCardRef : null}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">

                  <h2 className="text-xl font-semibold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* INFO BAR */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 relative">


                    
                    <div className="relative">
                      {/* <p className="font-semibold text-gray-800">
                        {formatArea(property.area, property.areaUnit)}
                      </p> */}
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

                  <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                    {property.description2 ||
                      "Premium commercial/residential space offering strong rental potential and long-term appreciation."}
                  </p>

                  <div className="flex-1" />

                  <div className="flex justify-between items-center border-t mt-6 pt-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="border border-[#0046FF] text-[#0046FF] px-5 py-2 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                    >
                      Enquire Now
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

        {/* PAGINATION */}
        <div className="mt-14">
            <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            setTimeout(() => {
              firstCardRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 100);
          }}
        />
        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}