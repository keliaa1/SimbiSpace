import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-[#F7EEE9] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl text-[#A18072] font-bold mb-5 ">Welcome to SimbiSpace</h2>
      <span><i>A personal blog made by Kelia</i></span>
      <a className="bg-[#8B6F47] text-white font-semibold px-4 py-4 rounded-4xl mt-8" href="">View my inner thoughts!</a>
    </div>
  );
}
