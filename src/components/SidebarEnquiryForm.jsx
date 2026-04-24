"use client";

import React, { useState } from "react";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setError("");
    setSuccess("");

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Sidebar Enquiry Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Request submitted successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setError(data.error || "Something went wrong.");
      }

    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-28 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Get Instant Call Back
      </h2>

      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Share your requirement and our property consultant will contact you shortly with complete details.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* NAME */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
          outline-none transition"
        />

        {/* PHONE */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
          outline-none transition"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="4"
          placeholder="Write your requirement (budget, location preference, shop size, etc.)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
          outline-none resize-none transition"
        />

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-2 rounded-lg">
            {success}
          </div>
        )}

        {/* BUTTON */}
        <button
  type="submit"
  disabled={loading}
  className="w-full py-3 
  bg-[#0046FF] hover:bg-black
  text-white font-semibold rounded-xl 
  transition shadow-md disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit Enquiry"}
</button>

      </form>
    </div>
  );
};

export default SidebarEnquiryForm;