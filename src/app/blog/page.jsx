import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "2BHK Flat for Sale in Gurgaon Blogs | Price Trends & Buying Guide",
    description:
      "Explore blogs on 2BHK flats for sale in Gurgaon. Get expert insights on pricing, best locations, investment tips and home buying guides for Gurgaon properties.",
    keywords: [
      "2BHK flat for sale in Gurgaon",
      "buy 2bhk Gurgaon",
      "Gurgaon property investment",
      "2bhk price in Gurgaon",
      "best areas in Gurgaon for flats",
      "Gurgaon real estate blogs"
    ],
    alternates: {
      canonical: "www.2bhkflatsforsaleingurgaon.com/blog", // 🔥 apna real domain yaha replace karna
    },
  };
}

const Page = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <BlogList />
    </div>
  );
};

export default Page;