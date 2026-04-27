"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 py-7 bg-gradient-to-br from-[#0046FF] to-[#002a99]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold mb-5 leading-tight">
            2BHK Flats for Sale in{" "}
            <span className="bg-white text-black px-2 py-1 rounded">
              Gurgaon
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-blue-100 leading-relaxed">
            Buying a 2BHK flat for sale in Gurgaon is one of the smartest
            decisions for homebuyers looking for comfort, modern lifestyle, and
            strong investment potential. Gurgaon, one of the fastest-growing
            cities in Delhi NCR, offers world-class infrastructure, metro
            connectivity, corporate hubs, shopping malls, reputed schools,
            hospitals, and premium residential communities.
            <br />
            A 2BHK flat for sale in Gurgaon is perfect for working
            professionals, small families, and investors who want a balance of
            affordability and luxury. These flats are available in prime
            locations, gated societies, and newly developed residential
            projects offering modern amenities such as lifts, security,
            parking, landscaped parks, clubhouse, and power backup.
            <br />
            With high rental demand and continuous property appreciation,
            owning a 2BHK flat for sale in Gurgaon ensures long-term value and
            excellent returns on investment. As a trusted venture of Deal
            Acres, we help you find verified, legally clear, and best-priced
            2BHK flats for sale in Gurgaon, making your home-buying journey
            smooth, transparent, and stress-free.
          </p>
          <Link href="/how-it-works">
  <button className="relative overflow-hidden bg-white text-[#0046FF] px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105 mt-4 cursor-pointer">
    
    <span className="relative z-10">Learn More</span>

    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
  
  </button>
</Link>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Free Consultation
            </h2>

            <p className="text-sm mb-6 text-gray-500">
              Fill your details and our expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                placeholder-gray-400
                focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                placeholder-gray-400
                focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                placeholder-gray-400
                focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-[#0046FF] hover:bg-black
                text-white transition duration-300 
                disabled:opacity-70 shadow-md"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;