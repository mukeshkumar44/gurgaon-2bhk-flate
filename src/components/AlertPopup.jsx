"use client";

import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

export default function AlertPopup({
  open,
  type = "success",
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fadeIn">
      <div
        className={`relative overflow-hidden w-full max-w-md rounded-[32px] p-[2px] shadow-[0_25px_80px_rgba(0,0,0,0.45)] animate-popup
        ${
          type === "success"
            ? "bg-gradient-to-br from-[#4F8CFF] via-[#0046FF] to-[#001F7A]"
            : "bg-gradient-to-br from-[#ff6b6b] via-[#ff3b3b] to-[#8b0000]"
        }`}
      >
        {/* Inner Card */}
        <div className="relative rounded-[30px] bg-[#0b1120]/95 backdrop-blur-xl px-8 py-10">
          {/* Glow */}
          <div
            className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-30
            ${
              type === "success" ? "bg-blue-400" : "bg-red-400"
            }`}
          />

          {/* Floating Spark */}
          <div className="absolute top-5 right-5 animate-pulse">
            <Sparkles className="text-white/70" size={22} />
          </div>

          <div className="relative flex flex-col items-center text-center text-white">
            {/* Icon */}
            <div
              className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 shadow-2xl
              ${
                type === "success"
                  ? "bg-gradient-to-br from-blue-400/30 to-blue-700/30"
                  : "bg-gradient-to-br from-red-400/30 to-red-700/30"
              }`}
            >
              {type === "success" ? (
                <CheckCircle2 size={64} className="text-white drop-shadow-lg" />
              ) : (
                <XCircle size={64} className="text-white drop-shadow-lg" />
              )}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-wide">
              {type === "success" ? "Success!" : "Oops!"}
            </h2>

            {/* Message */}
            <p className="mt-4 text-white/80 text-[15px] leading-7 max-w-sm">
              {message}
            </p>

            {/* Button */}
            <button
              onClick={onClose}
              className={`mt-8 w-full rounded-2xl py-3.5 text-[15px] font-bold tracking-wide transition-all duration-300
              ${
                type === "success"
                  ? "bg-gradient-to-r from-[#0066ff] to-[#0046FF] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)]"
                  : "bg-gradient-to-r from-[#ff4d4d] to-[#d60000] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]"
              }`}
            >
              OKAY
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.75) translateY(30px);
          }
          60% {
            opacity: 1;
            transform: scale(1.04) translateY(-4px);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-popup {
          animation: popup 0.45s ease;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </div>
  );
}