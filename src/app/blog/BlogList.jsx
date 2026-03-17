"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const loading = false;
  const error = null;

  const blogs = [
    {
      _id: "1",
      Slug: "2bhk-flats-in-gurgaon-buyers-guide",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
      HeroAltText: "2BHK Flats in Gurgaon Guide",
      Category: "Real Estate",
      Title: "Complete Guide to Buying a 2BHK Flat in Gurgaon",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "best-sectors-to-buy-2bhk-in-gurgaon",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      },
      HeroAltText: "Best Sectors in Gurgaon",
      Category: "Property Investment",
      Title: "Best Sectors in Gurgaon to Buy a 2BHK Flat in 2024",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "why-invest-in-gurgaon-real-estate",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      },
      HeroAltText: "Invest in Gurgaon Real Estate",
      Category: "Investment",
      Title: "Why Gurgaon Real Estate is a Smart Investment in 2024",
      Date: "2024-03-18",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-gradient-to-b from-blue-50 to-blue-50">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Insights on{" "}
          <span className="text-[#0046FF]">Gurgaon Real Estate</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore expert guides, market insights, and investment tips for
          buying a 2BHK flat in Gurgaon. Stay updated with the latest trends
          in Gurgaon property and real estate developments.
        </p>

        <div className="w-20 h-1 bg-[#0046FF] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0046FF] border-r-black animate-spin"></div>
          </div>
        </div>
      )}

      {/* ===== ERROR ===== */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-red-600 mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Unable to load blogs right now.
          </p>
        </div>
      )}

      {/* ===== BLOG GRID ===== */}
      {!loading && !error && blogs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.Slug}`}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-blue-100 transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={post.HeroImg?.url}
                  alt={post?.HeroAltText}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold bg-blue-100 text-[#0046FF] px-3 py-1 rounded-full mb-3">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#0046FF] transition-colors duration-300">
                  {post.Title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>

              </div>

            </Link>
          ))}

        </div>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          No blogs found.
        </div>
      )}

    </section>
  );
}