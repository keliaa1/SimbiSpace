"use client";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full py-12 px-8 flex flex-col items-center justify-center border-t-[3px] border-neutral-900 bg-neutral-200"
    >
      <div className="flex gap-6 mb-6">
        <a href="#" className="text-2xl text-neutral-900 hover:-translate-y-1 transition-transform">🪶</a>
        <a href="#" className="text-2xl text-neutral-900 hover:-translate-y-1 transition-transform">✨</a>
        <a href="#" className="text-2xl text-neutral-900 hover:-translate-y-1 transition-transform">🌿</a>
      </div>
      <p className="font-poppins text-xs font-bold text-neutral-900 uppercase tracking-[0.2em]">
        Made with love by Kelia • SimbiSpace © {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
};

export default Footer;
