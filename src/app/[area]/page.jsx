import FilterProperties from "./FilterProperties";

import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const area = resolvedParams?.area;

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-[#EFF6FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* 🔥 DYNAMIC HEADING */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Premium 2BHK Flat For Sale in{" "}
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