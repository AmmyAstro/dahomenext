"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Aboutdirect() { 
  return (
 
    <div
    className="m-2 about-director-section py-8 max-w-7xl flex flex-col items-center justify-center self-center">
    <h1 className="relative text-[#2f1254] text-md sm:text-2xl text-center font-semibold">
      • Know More About Dhwani Astro & Astrology <strong>Direct from the Director & Founder</strong> •
    </h1>
    <div className="relative py-5 px-0 items-center justify-center flex flex-col sm:flex-row  gap-6 z-10">
      <div className="founder-video-frame"><iframe width="400" height="280" className="rounded-lg"
          src="https://www.youtube.com/embed/Z1xtQkosANM?si=NFC7Ayx8lCwE0eBy" title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className="director-box flex flex-col px-3 py-2 shadow-lg rounded-lg">
        <p className=" text-[#2f1254] text-md sm:text-2xl  font-semibold"> "Unlock Your Destiny With Dhwani Astro"</p>

        <p className="text-sm text-[#000]">At Dhwani Astro, we believe astrology is more than just a practice—it’s a guiding force
          that empowers
          lives. Our mission is to bring ancient wisdom into the modern world, offering clarity, solutions, and
          transformation. With passion and dedication, we continue to illuminate paths, helping you align with the
          cosmic energies that shape destiny.
          Together, we embrace the power of the stars. 🌟

          — <span className=" text-[#2f1254] text-base sm:text-xl  font-semibold">Niraj Jain</span></p>
        <div className="img-text-legacy flex items-center gap-5">
          <Image src="/ds-img/legacy.webp" className="w-14 h-15" width={14} height={15} alt="leagcy image" unoptimized loading="lazy" />
          <span className="flex flex-col">
            <h4 className=" text-[#2f1254] text-sm md:text-xl  font-semibold">20+ Years Of Legacy</h4>
            <span className=" text-[#2f1254] text-sm sm:text-xl">With Horoscope, Kundali, And Predictions</span>
          </span>
        </div>
      </div>

    </div>
  </div>

    

  )
}; 
