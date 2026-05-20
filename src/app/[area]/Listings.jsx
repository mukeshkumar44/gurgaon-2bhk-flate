import FilterProperties from "./FilterProperties";

import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
export default function Listing({ slug }) {
  
   const rawArea = slug
// ✅ CLEAN SLUG (IMPORTANT)
const area = rawArea?.replace("2bhk-flat-for-sale-in-", "");

// slug format → sector-9 → Sector 9
const formattedArea = area
  ?.replace(/-/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-[#EFF6FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-2 py-10">
<div className="mb-6">
   <Breadcrumb />
  </div>
        {/* 🔥 DYNAMIC HEADING */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            2BHK Flat For Sale in{" "}
            <span className="text-[#0046FF]">
              {formattedArea || "Faridabad"}
            </span>
          </h1>

          <p className="text-gray-600 mt-4 text-base">
            Explore luxury residential properties in prime and high-growth locations.
          </p>

          <div className="w-24 h-1 bg-[#0046FF] mt-6 rounded-full"></div>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-8 space-y-8">
            <FilterProperties area={area} />

            {/* Optional: Show extra properties section */}
            {/* <Proprtes /> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <SidebarEnquiryForm />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}