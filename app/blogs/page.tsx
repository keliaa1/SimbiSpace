import ArticleItemList from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Blogs() {
    const articles = getCategorisedArticles();
    return (
       <div className="w-full flex flex-col font-poppins min-h-screen text-neutral-900 bg-[#F7EEE9]">
         {/* Hero Section */}
         <section className="mx-auto w-full max-w-6xl px-4 md:px-8 mt-12 md:mt-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-20">
           <div className="flex-1 flex flex-col">
             <h1 className="font-cormorant font-bold text-7xl md:text-8xl tracking-tight leading-none mb-6">
                Hello.<br/>
                I&apos;m Kelia.
             </h1>
             <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg">
                I&apos;m a software engineer and this is my little corner of the internet.
             </p>
             <div>
               <Link href="/" className="retro-btn inline-flex bg-neutral-200">
                  Clone me on Webflow {/* Keeping text similar to screenshot or something playful */}
               </Link>
             </div>
           </div>
           <div className="flex-1 w-full max-w-md flex justify-center md:justify-end">
             {/* Simple SVG illustration to match the screenshot vibe roughly */}
             <div className="w-64 h-64 md:w-80 md:h-80 retro-window items-center justify-center bg-white p-4">
                 <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                    <rect x="20" y="20" width="60" height="50" rx="4" className="stroke-neutral-900 stroke-[3px] fill-white" />
                    <circle cx="50" cy="45" r="10" className="stroke-neutral-900 stroke-[3px] fill-white" />
                    <path d="M 40 45 Q 50 60 60 45" className="stroke-neutral-900 stroke-[3px] fill-none stroke-linecap-round" />
                    <rect x="25" y="70" width="50" height="10" className="stroke-neutral-900 stroke-[3px] fill-white" />
                    <path d="M 10 90 L 90 90" className="stroke-neutral-900 stroke-[4px]" strokeLinecap="round" />
                 </svg>
             </div>
           </div>
         </section>

         {/* Quick Links Section */}
         <section className="w-full border-t-[3px] border-neutral-900 bg-neutral-200 mt-10">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-8 py-8">
               <h2 className="font-cormorant font-bold text-3xl mb-4">Quick links</h2>
               <div className="flex flex-wrap border-[3px] border-neutral-900 bg-[#F7EEE9]">
                 {["Blog", "Projects", "About", "Contact"].map((link, i, arr) => (
                    <Link 
                      href="#" 
                      key={link} 
                      className={`flex-1 min-w-[150px] p-4 flex justify-between items-center font-bold text-lg hover:bg-white transition-colors
                        ${i !== arr.length - 1 ? 'border-b-[3px] md:border-b-0 md:border-r-[3px] border-neutral-900' : ''}
                      `}
                    >
                      {link}
                      <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
                    </Link>
                 ))}
               </div>
            </div>
         </section>

         {/* Projects/Blogs Grid */}
         <section className="mx-auto w-full max-w-6xl px-4 md:px-8 py-20 flex flex-col gap-10">
            <h2 className="font-cormorant font-bold text-5xl md:text-6xl tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {/* Dummy Project Cards matching screenshot */}
               <div className="retro-window col-span-1">
                 <div className="retro-window-header">
                   <div className="retro-dot"></div>
                   <div className="retro-dot"></div>
                   <span className="absolute left-1/2 -translate-x-1/2 text-xs font-bold font-poppins">2026-03-17-project.html</span>
                 </div>
                 <div className="h-48 bg-neutral-300 border-b-[3px] border-neutral-900 shrink-0">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" alt="retro computer" className="w-full h-full object-cover grayscale" />
                 </div>
                 <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-cormorant font-bold text-2xl">Possimus</h3>
                    <p className="text-sm font-medium text-neutral-700">Officia sit numquam fugiat sint molestiae id. Est modi est at debitis dolorem...</p>
                    <div className="mt-auto pt-4">
                       <button className="retro-btn text-xs py-2 px-4 shadow-[4px_4px_0_0_#000]">View project</button>
                    </div>
                 </div>
               </div>

               <div className="retro-window col-span-1">
                 <div className="retro-window-header">
                   <div className="retro-dot"></div>
                   <div className="retro-dot"></div>
                   <span className="absolute left-1/2 -translate-x-1/2 text-xs font-bold font-poppins">2026-03-17-project.html</span>
                 </div>
                 <div className="h-48 bg-neutral-300 border-b-[3px] border-neutral-900 shrink-0">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="retro circuit" className="w-full h-full object-cover grayscale" />
                 </div>
                 <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-cormorant font-bold text-2xl">Dolorum Ullam Totam</h3>
                    <p className="text-sm font-medium text-neutral-700">Consequatur consequatur et quisquam sit velit. Distinctio sint omnis...</p>
                    <div className="mt-auto pt-4">
                       <button className="retro-btn text-xs py-2 px-4 shadow-[4px_4px_0_0_#000]">View project</button>
                    </div>
                 </div>
               </div>
            </div>
         </section>

         {/* From the blog - Actual Categories */}
         <section className="mx-auto w-full max-w-6xl px-4 md:px-8 py-10 pb-32 border-t-[3px] border-neutral-900">
            <div className="flex items-end justify-between mb-10">
               <h2 className="font-cormorant font-bold text-5xl md:text-6xl tracking-tight">From the blog</h2>
               <Link href="/blogs" className="font-bold underline underline-offset-4 hover:bg-neutral-900 hover:text-white transition-colors">View all blog posts</Link>
            </div>
            <div className="grid grid-cols-1 gap-12 max-w-3xl">
              {articles !== null && Object.keys(articles).map((category)=>(
                  <ArticleItemList category={category} articles={articles[category]} key={category} />
              ))}
            </div>
         </section>
       </div>
    );
}