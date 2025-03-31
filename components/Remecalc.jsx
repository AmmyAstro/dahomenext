"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
const remedbox = [
  { id: 1, ulname: "Gemstones", src: "/ds-img/diamond.png" },
  { id: 2, ulname: "Puja & Anusthan", src: "/ds-img/onpooja.webp" },
  { id: 3, ulname: "Rudraksha", src: "/ds-img/cultural-celebration.png" },
  { id: 4, ulname: "Sadhesati", src: "/ds-img/saturn.png" },
  { id: 5, ulname: "Kalsharp", src: "/ds-img/king.png" },
  { id: 6, ulname: "Manglik Dosha", src: "/ds-img/heterosexual.png" },
  { id: 7, ulname: "Lal Kitab", src: "/ds-img/booklal.png" },
  { id: 8, ulname: "Krishnamurti Paddhati", src: "/ds-img/scroll.png" },
  { id: 9, ulname: "Pitra Dosha", src: "/ds-img/pitradosha.png" },
];
const calbox = [
  { id: 1, ulname: " Friendship Calculator", src: "/ds-img/ology.webp" },
  { id: 2, ulname: "Personal DD/MM/YY", src: "/ds-img/calend.webp" },
  { id: 3, ulname: " Numerology Calculator", src: "/ds-img/number-blocks.webp" },
  { id: 4, ulname: "Moon Sign Calculator", src: "/ds-img/moonsign.webp" },
  { id: 5, ulname: "Nakshatra Calculator", src: "/ds-img/astrology.webp" },
  { id: 6, ulname: "Love Calculator", src: "/ds-img/wedding-cost.webp" },
  { id: 7, ulname: " Kundali Milan", src: "/ds-img/not-compatible.png" },
  { id: 8, ulname: "Zodiac Compatibility ", src: "/ds-img/astrologylove.png" },
  { id: 9, ulname: "Moon Biorhythm ", src: "/ds-img/esoteric.png" },
];
export default function Remecalc() {

  return (
    <div className="astrology-remedies-section flex flex-col items-center justify-center relative w-full mx-auto py-0 sm:py-10 px-3 md:px-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/ds-img/bgreme.webp')" }}
        ></div>
      </div>
      <div className="remedies-and-query flex flex-col sm:flex-row items-start justify-between gap-5">
        <div className="heading-astro-remed relative">
          <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1 md:py-5 text-center font-semibold">
            • Astrology Remedies & <strong>Services</strong> •
          </h1>
          <div className="relative py-3 grid  items-center justify-center grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 z-10">
            {remedbox.map((rembx) => (
              <div
                key={rembx.id}
                className="remedies-card-top bg-[#dccef3e3] rounded-xl w-25 h-26 sm:w-25 xl:w-50 shadow-lg p-3 text-center flex flex-col items-center justify-center gap-2"
              >
                <h3 className="sm:text-sm text-xs text-[#000] ">
                  {rembx.ulname}
                </h3>
                <Image className="w-11 sm:w-10" src={rembx.src} width={50} height={50} alt="service image" />
              </div>
            ))}
          </div>
        </div>

        <div className="astro-free-calculator  flex flex-col items-center justify-self-center">
          <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1 sm:py-5 text-center font-semibold">
            • Free <strong>Calculators & Compatibility</strong> •
          </h1>
          <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 z-10">
            {calbox.map((calcu, index) => (


              <div key={index} className="calculator-card-top w-40 h-26 sm:w-25 xl:w-55 bg-violet-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
                <h3 className="md:text-sm text-xs   text-[#000] ">
                  {calcu.ulname}
                </h3>
                <Image
                  className="w-11 sm:w-12"
                  src={calcu.src}
                  alt="free calculator image"
                  height={15}
                  width={15}
                  loading="lazy" unoptimized />
              </div>
            ))}


          </div>

          {/* <div className="realtive py-1 grid max-w-7xl items-center justify-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-5 z-10">
            <div className="compat-box w-45 h-16 sm:w-25 xl:w-55 bg-violet-200 rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Destiny Report
              </h3>
            </div>
         
            <div className="compat-box w-45 h-16 sm:w-25 xl:w-55 bg-violet-200 rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Couple Forecast
              </h3>
            </div>
            <div className="compat-box w-45 h-16 sm:w-25 xl:w-55 bg-violet-200 rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Personality Report
              </h3>
            </div>
            <div className="compat-box w-45 h-16 sm:w-25 xl:w-55 bg-violet-200 rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Zodiac Compatibility
              </h3>
            </div>
            <div className="compat-box w-45 h-16 sm:w-25 xl:w-55 bg-violet-200 rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Sun Sign Compatibility
              </h3>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
