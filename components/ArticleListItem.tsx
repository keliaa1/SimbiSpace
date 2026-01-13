"use client"

import Link from "next/link";
import type { ArticleItem } from "@/types";
import { motion } from "motion/react";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#A18072]/5 hover:bg-white/80 transition-colors shadow-sm">
      <h2 className="font-cormorant text-3xl font-bold text-[#A18072] border-b border-[#A18072]/10 pb-2">{category}</h2>
      <div className="flex flex-col gap-4 font-poppins text-lg">
        {articles.map((article, id) => (
          <motion.div key={id} whileHover={{ x: 10 }}>
            <Link
              href={`/blogs/${article.id}`}
              className="text-neutral-800 hover:text-[#8B6F47] transition-colors flex items-center gap-2 group"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              {article.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
