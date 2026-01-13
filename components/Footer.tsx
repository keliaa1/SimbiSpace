"use client";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full py-12 px-8 flex flex-col items-center justify-center border-t border-[#A18072]/10 mt-20"
    >
      <div className="flex gap-6 mb-6">
        <a href="#" className="text-2xl text-[#A18072] hover:scale-125 transition-transform">🪶</a>
        <a href="#" className="text-2xl text-[#A18072] hover:scale-125 transition-transform">✨</a>
        <a href="#" className="text-2xl text-[#A18072] hover:scale-125 transition-transform">🌿</a>
      </div>
      <p className="font-poppins text-xs text-neutral-500 uppercase tracking-[0.2em]">
        Made with love by Kelia • SimbiSpace © {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
};

export default Footer;
