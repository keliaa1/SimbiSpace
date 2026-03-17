"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-[#F7EEE9] border-b-[3px] border-neutral-900"
    >
      <Link href="/" className="font-cormorant text-3xl font-bold text-neutral-900 hover:-translate-y-0.5 transition-transform">
        SimbiSpace
      </Link>
      <nav className="flex gap-8 font-poppins text-sm uppercase tracking-widest font-bold text-neutral-900">
        <Link href="/" className="hover:text-[#A18072] transition-colors relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neutral-900 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/blogs" className="hover:text-[#A18072] transition-colors relative group">
          Blogs
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neutral-900 transition-all group-hover:w-full"></span>
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
