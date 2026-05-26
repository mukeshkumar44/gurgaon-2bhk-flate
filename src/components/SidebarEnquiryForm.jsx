"use client";

import React, { useState } from "react";
import AlertPopup from "./AlertPopup";

// IMPORT ALERT POPUP
import AlertPopup from "./AlertPopup";

const SidebarEnquiryForm = () => {
   const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [popup, setPopup] = useState({
  open: false,
  type: "success",
  message: "",
});

  const [loading, setLoading] = useState(false);

  // ALERT POPUP STATE
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION
    if (name === "phone") {
      // only numbers
      if (!/^\d*$/.test(value)) return;

      // max 10 digits
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CLOSE POPUP
  const closePopup = () => {
    setPopup({
      open: false,
      type: "success",
      message: "",
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    // PHONE CHECK
    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message:
          "Phone number must be exactly 10 digits.",
      });

      return;
    }

    // WEBSITE
    const website =
      typeof window !== "undefined"
        ? window.location.hostname.replace(
            "www.",
            ""
          )
        : "";

    try {
      setLoading(true);

      const payload = {
        ...formData,
        website,
        source: "Sidebar Enquiry Form",
      };

      console.log("PAYLOAD:", payload);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        // SUCCESS POPUP
        setPopup({
          open: true,
          type: "success",
          message:
            "Request submitted successfully!",
        });

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        // ERROR POPUP
        setPopup({
          open: true,
          type: "error",
          message:
            data.error ||
            "Something went wrong.",
        });
      }
    } catch (err) {
      console.log("ERROR:", err);

      // NETWORK ERROR POPUP
      setPopup({
        open: true,
        type: "error",
        message:
          "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

      {/* ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
};

export default SidebarEnquiryForm;