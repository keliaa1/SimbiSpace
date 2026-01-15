import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#F7EEE9] font-poppins">
      <div className="flex flex-col items-center gap-4">
        {/* Glowing orb matching cursor theme */}
        <div className="relative flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6),0_0_20px_5px_rgba(255,255,255,0.3)] animate-ping absolute opacity-75"></div>
          <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8),0_0_20px_5px_rgba(255,255,255,0.4)] relative"></div>
        </div>

        <p className="text-gray-600 text-sm tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
