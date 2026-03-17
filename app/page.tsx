"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-12 md:gap-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full flex justify-center md:justify-end"
      >
        <div className="retro-window w-full bg-white border-4 border-neutral-900 shadow-[8px_8px_0_0_#A18072]">
           <div className="retro-window-header bg-[#F7EEE9] border-b-4 border-neutral-900">
             <div className="retro-dot"></div>
             <div className="retro-dot"></div>
             <span className="absolute left-1/2 -translate-x-1/2 text-xs font-bold font-poppins hidden sm:block">hello.exe</span>
           </div>
           <div className="p-4 bg-white flex justify-center">
             <div dangerouslySetInnerHTML={{ __html: `
               <creattie-embed
                 src="https://ik.imagekit.io/creattie/main/saved_colors/122527/X9Mon6ZOxEJ3UyB7.json"
                 delay="1"
                 speed="100"
                 frame_rate="24"
                 trigger="loop"
                 style="width: 100%; max-width: 600px; background-color: transparent;"
               ></creattie-embed>
             `}} />
             <Script src="https://creattie.com/js/embed.js?id=3efa1fcb5d85991e845a" strategy="lazyOnload" />
           </div>
        </div>
      </motion.div>

      <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left pt-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl text-neutral-900 font-bold mb-6 font-cormorant leading-tight"
        >
          Say hello!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-800 font-poppins text-lg md:text-xl tracking-wide max-w-md font-medium"
        >
          I&apos;d love to hear from you and always welcome any feedback - please don&apos;t hesitate to get in touch!
        </motion.p>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start w-full sm:w-auto"
        >
          <Link
            href="/blogs"
            className="retro-btn bg-[#8B6F47] text-white border-neutral-900 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:bg-[#6F5939] whitespace-nowrap"
          >
            Explore My Thoughts
          </Link>
          <Link
            href="https://keliais4ward.vercel.app/"
            target="_blank"
            className="retro-btn bg-white text-neutral-900 border-neutral-900 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] whitespace-nowrap"
          >
            View My Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
