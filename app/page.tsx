
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="bg-[#F7EEE9] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl text-[#A18072] font-bold mb-5 ">Welcome to SimbiSpace</h2>
      <span className="text-black"><i>A personal blog made by Kelia</i></span>
      <Link href="/blogs" className="bg-[#8B6F47] text-white font-semibold px-4 py-4 rounded-4xl mt-8" >View my inner thoughts!</Link>
    </div>
  );
}
