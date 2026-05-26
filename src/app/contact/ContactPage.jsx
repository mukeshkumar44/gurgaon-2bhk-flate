"use client"

import { useState } from "react"
import Image from "next/image"
import AlertPopup from "@/components/AlertPopup"
import Breadcrumb from "@/components/Breadcrumb"


export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  // ALERT POPUP STATE
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  })

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })
  }

  // CLOSE ALERT POPUP
  const closePopup = () => {
    setPopup({
      open: false,
      type: "success",
      message: "",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.phone.length !== 10) {
      setPopup({
        open: true,
        type: "error",
        message: "Phone number must be 10 digits",
      })
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      })

      const result = await res.json()

      if (result.success) {
        setPopup({
          open: true,
          type: "success",
          message: "Your inquiry has been submitted!",
        })

        setFormData({
          name: "",
          phone: "",
          message: "",
        })
      } else {
        setPopup({
          open: true,
          type: "error",
          message:
            "Something went wrong. Please try again.",
        })
      }
    } catch (err) {
      setPopup({
        open: true,
        type: "error",
        message: "Server error. Please try later.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-b from-white to-blue-50 py-6 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
           <div className="py-5">
            <Breadcrumb/>
           </div>
    
          <div className=" mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Let’s Discuss Your{" "}
              <span className="text-[#0046FF]">
                Gurgaon Property Goals
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-2xl ">
              Looking for a 2BHK flat for sale in Gurgaon? Whether you are
              buying your first home, upgrading your lifestyle, or investing
              in Gurgaon real estate, our property experts are here to guide
              you with verified listings and trusted advice.
            </p>

            <div className="w-20 h-1 bg-[#0046FF]  mt-6 rounded-full"></div>
          </div>

          {/* ================= FORM + IMAGE ================= */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ===== FORM CARD ===== */}
            <div className="bg-white border border-blue-100 
            rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500">

              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                Enquire About 2BHK Flats in Gurgaon
              </h2>

              <p className="text-gray-500 mb-8 text-sm">
                Fill in your details and our consultant will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="text-sm text-gray-600">Full Name*</label>
                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-blue-50
                    border border-blue-200 text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#0046FF] outline-none transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm text-gray-600">Phone*</label>
                  <input
                    name="phone"
                    required
                    inputMode="numeric"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-blue-50
                    border border-blue-200 text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#0046FF] outline-none transition"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-gray-600">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us your requirement for 2BHK flats in Gurgaon..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-blue-50
                    border border-blue-200 text-gray-900 placeholder-gray-400
                    focus:ring-2 focus:ring-[#0046FF] outline-none resize-none transition"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-semibold
                  bg-[#0046FF] hover:bg-black
                  text-white transition shadow-lg"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>

              </form>
            </div>

            {/* ===== IMAGE SIDE ===== */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-blue-100 shadow-xl">
              <Image
                src="https://images.presentationgo.com/2025/06/business-partnership-handshake.jpg"
                alt="Contact Gurgaon Real Estate"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

          </div>

          {/* ================= MAP ================= */}
          <div className="mt-24 rounded-3xl overflow-hidden border border-blue-100 shadow-xl">
            <iframe
  title="Location"
  src="https://www.google.com/maps?q=Gurgaon&z=14&output=embed"
  className="w-full h-[500px] border-0"
  loading="lazy"
/>
          </div>

        </div>
      </section>

      {/* ALERT POPUP */}
      <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  )
}