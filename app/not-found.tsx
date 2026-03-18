import Link from "next/link";
import { User } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] relative overflow-hidden flex items-center justify-center font-poppins text-[#090B14]">
      {/* Background Shapes */}
      {/* Top right circle */}
      <div className="absolute top-[18%] right-[18%] w-20 h-20 rounded-full border-[3px] border-[#090B14]"></div>
      {/* Center right small circle */}
      <div className="absolute top-[35%] right-[28%] w-7 h-7 rounded-full border-[2px] border-[#090B14]"></div>
      {/* Bottom left medium circle */}
      <div className="absolute bottom-[20%] left-[22%] w-16 h-16 rounded-full border-[3px] border-[#090B14]"></div>

      {/* Top left cross */}
      <div className="absolute top-[28%] left-[26%] w-6 h-6 text-[#090B14]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      {/* Center left small cross */}
      <div className="absolute top-[52%] left-[24%] w-4 h-4 text-[#090B14]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      {/* Bottom right cross */}
      <div className="absolute bottom-[22%] right-[25%] w-8 h-8 text-[#090B14]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      {/* Wire and Plugs SVG on the left */}
      <div className="absolute left-0 top-0 h-full w-[40%] md:w-[35%] text-[#090B14] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="xMinYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Top Wire meandering down */}
          <path d="M 0,0 C 150,150 -50,300 180,440" stroke="currentColor" strokeWidth="3" fill="none" />

          {/* Top Plug Head */}
          <g transform="translate(180,440) rotate(-25)">
             <path d="M 0,-14 L 30,-14 C 35,-14 40,-8 40,-2 L 40,2 C 40,8 35,14 30,14 L 0,14 C -4,14 -8,10 -8,4 L -8,-4 C -8,-10 -4,-14 0,-14 Z" fill="currentColor" />
             {/* Prongs */}
             <rect x="40" y="-8" width="14" height="4" fill="currentColor" rx="1" />
             <rect x="40" y="4" width="14" height="4" fill="currentColor" rx="1" />
             <line x1="5" y1="-14" x2="5" y2="14" stroke="#FDFBF7" strokeWidth="2" />
          </g>

          {/* Bottom Wire meandering up */}
          <path d="M 0,900 C 120,750 300,600 160,510" stroke="currentColor" strokeWidth="3" fill="none" />

          {/* Bottom Plug Head */}
          <g transform="translate(160,510) rotate(145)">
             <path d="M 0,-14 L 30,-14 C 35,-14 40,-8 40,-2 L 40,2 C 40,8 35,14 30,14 L 0,14 C -4,14 -8,10 -8,4 L -8,-4 C -8,-10 -4,-14 0,-14 Z" fill="currentColor" />
             <line x1="5" y1="-14" x2="5" y2="14" stroke="#FDFBF7" strokeWidth="2" />
             <rect x="40" y="-12" width="10" height="24" fill="currentColor" rx="2" />
          </g>

          {/* Sparks/Exclamation lines between plugs */}
          <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="160" y1="440" x2="150" y2="430" />
            <line x1="190" y1="420" x2="185" y2="405" />
            <line x1="220" y1="420" x2="230" y2="410" />

            <line x1="130" y1="475" x2="115" y2="465" />
            <line x1="135" y1="510" x2="120" y2="515" />
            <line x1="180" y1="500" x2="190" y2="515" />
            <line x1="210" y1="475" x2="225" y2="485" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[28rem] text-center px-4 md:ml-[15%]">
        <h1 className="text-[2.75rem] md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm text-[#050710]">
          Oops! you got lost
        </h1>
        <p className="text-[15px] md:text-[15px] font-medium mb-8 leading-relaxed text-[#050710]/80 px-2">
          Let&apos;s get you back home.<br className="hidden sm:block"/> safe and sound
        </p>
        <div className="flex items-center justify-center gap-5">
           <Link href="/" className="bg-[#050710] text-[#FDFBF7] px-6 py-3 rounded-lg font-semibold shadow-[0_8px_15px_rgba(5,7,16,0.2)] hover:bg-black hover:-translate-y-0.5 transition-all text-[15px]">
             Back home
           </Link>
        </div>
      </div>
    </div>
  );
}