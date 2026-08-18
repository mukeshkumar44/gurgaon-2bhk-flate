"use client";

import Link from "next/link";
import { useProperty } from "@/contextapi/propertycontext";

const renderedSlugs = new Set();

// yaha apni start date do
const START_DATE = "2026-05-21";

// MongoDB ID se date nikalne ka function
const getDateFromObjectId = (objectId) => {
  // Galti yahan thi: agar id na mile toh new Date() (aaj ki date) ho rahi thi.
  // Ab main isey new Date(0) (saal 1970) kar raha hoon, taaki error aane par wo isey purana hi maane, naya nahi.
  if (!objectId || objectId.length !== 24) {
    return new Date(0); 
  }
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export default function ViewDetailsButton({
  href,
  slug,
  id, // Parent se ID aani chahiye
}) {
  const { dailyLimit } = useProperty();

  // ==========================================
  // 1. NAYA LOGIC: Naye documents ko hide karna
  // ==========================================
  const documentDate = getDateFromObjectId(id);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Aaj raat 12:00 AM ka time

  // Agar document aaj ya uske baad bana hai, toh seedha hide kar do
  if (documentDate >= today) {
    return null;
  }

  // ==========================================
  // 2. PURANA LOGIC: Jo pehle chal raha tha
  // ==========================================
  
  // duplicate slug add na ho
  if (!renderedSlugs.has(slug)) {
    renderedSlugs.add(slug);
  }

  const buttonNumber = Array.from(renderedSlugs).indexOf(slug) + 1;

  // days calculate
  const start = new Date(START_DATE);
  const diffTime = new Date() - start;
  const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // day wise unlock
  const unlockedLimit = (daysPassed + 1) * dailyLimit;
  const isEnabled = buttonNumber <= unlockedLimit;

  // Agar limit se bahar hai, toh disabled / hide
  if (!isEnabled) {
    return null;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 rounded-lg transition w-full md:w-auto text-center font-medium inline-block bg-[#0046FF] text-white hover:bg-black"
    >
      View Details
    </Link>
  );
}