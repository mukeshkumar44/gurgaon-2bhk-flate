"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";
import ViewDetailsButton from "./ViewDetailsButton";
import NearbyLocations from "./NearbyLocations";
import { useClickLimit } from "@/hooks/useClickLimit"; 
export default function Properties() {
  const { properties, loading, error, page, setPage, totalItems, itemsPerPage } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
const { handlePropertyClick } = useClickLimit();
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
    return <p className="text-center py-20 text-red-500">Something went wrong while loading properties.</p>;
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">No Properties Available in Gurgaon</h2>
        <p className="text-gray-500 mt-2">New listings will be updated soon.</p>
      </div>
    );
  }

  return (
    <section id="locations" className="bg-blue-50 px-4 py-16">
      <div className="max-w-7xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Premium Residential Properties in Gurgaon</h2>
        <p className="mt-4 text-gray-500 max-w-2xl ">Explore high-potential 2BHK and Residential spaces available for sale and investment across prime locations in Gurgaon.</p>
        <div className="w-24 h-1 bg-[#0046FF] mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {properties.map((property, index) => {
            // SLUG GENERATION LOGIC
            const typeSlug = property.propertyType
              ? property.propertyType.toLowerCase().trim().replace(/[\s\W-]+/g, '-')
              : "property";

            return (
              <div key={property._id}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 md:h-[280px]">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* IMAGE */}
                    <div className="relative md:w-[35%] overflow-hidden">
                      <Image
                        src={property?.media?.url || "https://res.cloudinary.com/dbihlu2ve/image/upload/v1778830985/GurgaonProperties/ioopp3bvwvbtg7nqegiy.webp"}
                        unoptimized
                        alt={property.title}
                        width={600}
                        height={400}
                        className="w-full h-60 md:h-full object-cover"
                      />
                      <span
                        onClick={() => { setSelectedProperty(property.title); setOpen(true); }}
                        className="absolute top-4 left-0 bg-[#0046FF] text-white text-xs md:text-sm px-3 py-1 font-semibold shadow-lg rounded-r-full cursor-pointer"
                      >
                        {property.propertyType}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{property.locality}</p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                        <div>
                          <p className="text-sm text-gray-500">STATUS : <span className="font-semibold text-blue-800">Available</span></p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">TYPE : <span className="font-semibold text-gray-800">{property.propertyCategory}</span></p>
                        </div>
                      </div>

                      <div className="flex-1" />

                      {/* BUTTONS */}
                      <div className="flex flex-col md:flex-row justify-between items-center border-t mt-4 pt-4 gap-4">
                        <button onClick={() => { setSelectedProperty(property.title); setOpen(true); }} className="border border-[#0046FF] text-[#0046FF] px-5 py-2 rounded-lg hover:bg-blue-50 transition w-full md:w-auto font-medium">
                          Price on Call
                        </button>
                        <ViewDetailsButton 
  slug={property.slug} 
   href={`https://www.dealacres.com/property/${property.slug}`}
                      
  id={property._id} /* <-- Yeh line add karni hai */
/>
                      </div>

                      {/* EXPLORE MORE LINKS */}

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500 font-medium">

                        {/* Left Link */}
                        <Link
                          href={`https://www.dealacres.com/properties/${typeSlug}-for-sale-in-gurgaon`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handlePropertyClick}
                          className="group text-left flex items-center gap-1"
                        >
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#0046FF] transition-colors underline-offset-2 hover:underline">
                            Explore more
                          </h4>
                          <span className="text-[#0046FF] group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>

                        {/* Vertical Divider */}
                        {/* <div className="h-5 w-px bg-gray-300 mx-4"></div> */}

                        {/* Right Link */}
                        <Link
                          href="https://www.dealacres.com/sell-property"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-right flex items-center gap-1"
                        >
                          <h4 className="font-semibold text-gray-700 group-hover:text-[#0046FF] transition-colors underline-offset-2 hover:underline">
                            Free Sell Property
                          </h4>
                          <span className="text-[#0046FF] group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>

                {(index + 1) % 10 === 0 && <NearbyLocations blockIndex={Math.floor(index / 10)} />}
              </div>
            );
          })}

          <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={page} onPageChange={setPage} />
        </div>

        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
        </div>
      </div>

      <ContactPopup isOpen={open} onClose={() => setOpen(false)} propertyTitle={selectedProperty} />
    </section>
  );
}