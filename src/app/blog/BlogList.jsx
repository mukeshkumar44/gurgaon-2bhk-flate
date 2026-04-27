"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlog } from "@/contextapi/BlogContext";
import Pagination from "@/components/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {
  const { blogs, loading, error, page, total, limit, fetchBlogs } = useBlog();

  const handlePageChange = (pageNum) => {
    fetchBlogs(pageNum);

    const section = document.getElementById("blog-section");
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="blog-section"
      className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-blue-50"
    >
<div className="mb-6">
   <Breadcrumb />
  </div>
      {/* HEADING */}
      <div className=" mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Insights on{" "}
          <span className="text-blue-600">Gurgaon Real Estate</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Explore expert guides, market insights, and investment tips for
          buying a 2BHK flat in Gurgaon.
        </p>

        <div className="w-20 h-1 bg-blue-600 mt-6 rounded-full"></div>
      </div>

      {/* LOADING */}
      {loading && (
  <div className="flex justify-center items-center py-24">
    
    <div className="relative flex items-center justify-center">
      
      {/* OUTER GLOW RING */}
      <div className="absolute w-20 h-20 rounded-full 
      bg-blue-400 opacity-20 blur-xl animate-pulse"></div>

      {/* SPINNER RING */}
      <div className="w-16 h-16 rounded-full border-[5px] border-blue-100"></div>

      {/* ANIMATED ROTATION */}
      <div className="absolute w-16 h-16 rounded-full 
      border-[5px] border-transparent 
      border-t-blue-600 border-r-blue-500 
      animate-spin"></div>

      {/* INNER DOT */}
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full shadow-md"></div>

    </div>

  </div>
)}

      {/* ERROR */}
      {error && !loading && (
        <div className="text-center py-16 text-red-500">{error}</div>
      )}

      {/* BLOG GRID */}
      {!loading && !error && Array.isArray(blogs) && blogs.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((post, index) => (
              <Link
                href={`/blog/${post?.Slug || post?.slug || ""}`}
                key={post?._id || index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl 
                border border-blue-100 transition duration-300 hover:-translate-y-1"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <Image
                    src={
                      post?.HeroImg?.url ||
                      post?.heroImg?.url ||
                      post?.image ||
                      "/fallback.jpg"
                    }
                    unoptimized
                    alt={post?.HeroAltText || post?.alt || "blog image"}
                    width={600}
                    height={350}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <span className="inline-block text-xs font-semibold 
                  bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-3">
                    {post?.Category || post?.category || "General"}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition">
                    {post?.Title || post?.title || "No Title"}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {formatDate(post?.Date || post?.date)}
                  </p>

                </div>

              </Link>
            ))}

          </div>

          {/* PAGINATION */}
          <div className="mt-12">
            <Pagination
              totalItems={total}
              itemsPerPage={limit}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}

      {/* EMPTY */}
      {!loading && !error && Array.isArray(blogs) && blogs.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-20">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Blogs Coming Soon 🚀
          </h2>

          <p className="text-gray-500 mt-3 max-w-md">
            We are working on some amazing real estate insights.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 rounded-lg 
            bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition"
          >
            Refresh
          </button>

        </div>
      )}

    </section>
  );
}