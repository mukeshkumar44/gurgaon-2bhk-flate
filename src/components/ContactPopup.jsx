"use client";

import { useState } from "react";
import AlertPopup from "./AlertPopup";

export default function ContactPopup({
  isOpen,
  onClose,
  propertyTitle,
}) {
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

  // CLOSE POPUP
  if (!isOpen) return null;

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

  // CLOSE ALERT POPUP
  const closePopup = () => {
    setPopup({
      open: false,
      type: "success",
      message: "",
    });

    // MAIN POPUP CLOSE
    onClose();
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
          "Phone number must be exactly 10 digits",
      });

      return;
    }

    // WEBSITE NAME
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
        propertyTitle,
        website,
        source: "Popup Enquiry",
      };

      console.log("PAYLOAD:", payload);

      // IMPORTANT
      // /api/submit use karo
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
        setPopup({
          open: true,
          type: "success",
          message:
            "Enquiry Submitted Successfully!",
        });

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        setPopup({
          open: true,
          type: "error",
          message:
            data.message ||
            "Something went wrong",
        });
      }
    } catch (err) {
      console.log("ERROR:", err);

      setPopup({
        open: true,
        type: "error",
        message:
          "Server error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

        <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-gray-100">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#0046FF] text-xl transition"
          >
            ×
          </button>

          <h3 className="text-2xl font-semibold text-gray-900">
            Get Best Price Details
          </h3>

          <p className="text-sm text-gray-600 mt-3 mb-7 leading-relaxed">
            Enquiry for:
            <span className="block font-medium text-[#0046FF] mt-1">
              {propertyTitle}
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl 
              bg-white text-gray-900 placeholder-gray-400
              focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
              outline-none transition"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl 
              bg-white text-gray-900 placeholder-gray-400
              focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
              outline-none transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Write your requirement (budget, location, size, etc.)"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl 
              bg-white text-gray-900 placeholder-gray-400
              focus:ring-2 focus:ring-[#0046FF] focus:border-[#0046FF]
              outline-none resize-none transition"
            />

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
}