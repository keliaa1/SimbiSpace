"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl text-[#A18072] font-bold mb-6 font-cormorant leading-tight"
        >
          Welcome to <br /> SimbiSpace
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 font-poppins text-lg tracking-wide italic"
        >
          A personal blog made with love by Kelia
        </motion.p>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row gap-6 mt-10 justify-center"
        >
          <Link
            href="/blogs"
            className="inline-block bg-[#8B6F47] text-white font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#6F5939] hover:scale-105 transition-all shadow-lg hover:shadow-[#A18072]/20"
          >
            Explore My Thoughts
          </Link>
          <Link
            href="https://keliais4ward.vercel.app/"
            target="_blank"
            className="inline-block bg-transparent border-2 border-[#8B6F47] text-[#8B6F47] font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#8B6F47] hover:text-white hover:scale-105 transition-all shadow-lg hover:shadow-[#A18072]/20"
          >
            View My Portfolio
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="mt-16 text-sm text-[#A18072]/60 font-poppins italic"
        >
          a break from the darkness if you came from my portfolio
        </motion.p>
      </motion.div>
    </div>
  );
}
