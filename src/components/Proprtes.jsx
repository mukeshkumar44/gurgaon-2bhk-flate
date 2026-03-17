"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";

export default function Properties() {
  const { properties, loading, error } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  /* ================= PAGINATION ================= */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProperties = properties?.slice(indexOfFirst, indexOfLast);

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
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0046FF] border-r-black animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Listings...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-500">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Properties Available in Gurgaon
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-blue-50 px-4 py-16">

      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto  mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Residential Properties in Gurgaon
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl ">
          Explore high-potential 2BHK and Residential spaces available for sale
          and investment across prime locations in Gurgaon.
        </p>

        <div className="w-24 h-1 bg-[#0046FF]  mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT LIST ================= */}
        <div className="lg:col-span-2 space-y-10">

          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%] overflow-hidden">
  <Image
    src={property?.media?.url || "/no-image.png"}
    alt={property.title}
    width={600}
    height={400}
    className="w-full h-60 md:h-full object-cover"
  />

  {/* Ribbon */}
  <span onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }} className="
    absolute top-4 left-0
    bg-[#0046FF] text-white
    text-xs md:text-sm
    px-3 py-1
    font-semibold
    shadow-lg
    rounded-r-full
    tracking-wide cursor-pointer
  ">
    {property.propertyType}
  </span>
</div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">

                  <h2 className="text-xl font-bold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* DETAILS GRID */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 relative">

                    {/* PRICE */}
                    {/* <div className="relative">
                      <p className="text-2xl font-bold text-[#0046FF]">
                        ₹ {property.price?.toLocaleString("en-IN")}
                      </p>
                      
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></div>
                    </div> */}

                    {/* AREA */}
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

                  <p className="text-gray-500 text-sm mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Premium commercial space offering excellent rental yield and long-term appreciation potential in a prime Faridabad location."}
                  </p>

                  <div className="flex-1" />

                  {/* BUTTONS */}
                  <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="border border-[#0046FF] text-[#0046FF] px-5 py-2 rounded-lg hover:bg-blue-50 transition w-full md:w-auto font-medium"
                    >
                      Price on Call
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="bg-[#0046FF] text-white px-6 py-2 rounded-lg hover:bg-black transition w-full md:w-auto text-center font-medium"
                    >
                      View Details
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* ================= PAGINATION ================= */}
          <Pagination
            totalItems={properties.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
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