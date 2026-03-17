"use client"

import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="retro-window w-full">
      <div className="retro-window-header border-neutral-900 border-b-[3px]">
        <div className="retro-dot"></div>
        <div className="retro-dot"></div>
        <span className="absolute left-1/2 -translate-x-1/2 text-xs font-bold font-poppins hidden sm:block">
           category-{category.toLowerCase().replace(/\s+/g, '-')}.html
        </span>
      </div>
      <div className="bg-white p-6 md:p-8 flex flex-col gap-6">
        <h3 className="font-cormorant font-bold text-3xl text-neutral-900">{category}</h3>
        <div className="flex flex-col gap-3">
          {articles.map((article, id) => (
            <Link
              key={id}
              href={`/blogs/${article.id}`}
              className="text-neutral-800 hover:text-white hover:bg-neutral-900 font-medium px-3 py-2 -mx-3 transition-colors flex items-center gap-2 group border-2 border-transparent hover:border-neutral-900 active:translate-y-0.5"
            >
              <span className="group-hover:translate-x-1 transition-transform">→</span>
              <span className="underline-offset-4 group-hover:underline">{article.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleItemList;
