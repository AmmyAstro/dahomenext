"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
const remedbox = [
  { id: 1, ulname: "Gemstones" },
  { id: 2, ulname: "Puja & Anusthan" },
  { id: 3, ulname: "Rudraksha" },
  { id: 4, ulname: "Sadhesati" },
  { id: 5, ulname: "Mini Horoscope Report" },
  { id: 6, ulname: "Basic Horoscope Report" },
  { id: 7, ulname: "Pro Horoscope Report" },
  { id: 8, ulname: "Match-Making Report" },
  // { id: 9, ulname: "Share Market Astrology" },
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
            • Astrology Remedies & <strong>Premium Indian Astrology PDF</strong> •
          </h1>
          <div className="relative py-3 grid  items-center justify-center grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 z-10">
            {remedbox.map((rembx) => (
              <div
                key={rembx.id}
                className="remedies-card-top bg-[#dccef3e3] rounded-xl w-30 h-18 sm:w-25 xl:w-50 shadow-lg p-3 text-center flex flex-col items-center justify-center"
              >
                <h3 className="sm:text-sm text-xs text-[#000] ">
                  {rembx.ulname}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="astro-free-calculator  flex flex-col items-center justify-center">
          <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1 sm:py-5 text-center font-semibold">
            • Free <strong>Calculators & Compatibility</strong> •
          </h1>
          <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 z-10">
            <div className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-violet-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-xs   text-[#000] ">
                Friendship Calculator
              </h3>
              <Image
                className="w-11 sm:w-10"
                src="/ds-img/ology.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-purple-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="sm:text-sm text-xs  text-[#000] ">
                Personal DD/MM/YY
              </h3>
              <Image
                className="w-11 sm:w-10"
                src="/ds-img/calend.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-fuchsia-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="sm:text-sm text-xs text-[#000] ">
                Numerology Calculator
              </h3>
              <Image
                className="w-11 sm:w-10"
                src="/ds-img/number-blocks.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-violet-300 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="sm:text-sm text-xs  text-[#000] ">
                Moon Sign Calculator
              </h3>
              <Image
                className="w-11 sm:w-10"
                src="/ds-img/moonsign.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-purple-300 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="sm:text-sm text-xs text-[#000] ">
                Nakshatra Calculator
              </h3>
              <Image
                src="/ds-img/astrology.webp"
                className="w-11 sm:w-10"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <Link href={"/homepage/inhome"} className="calculator-card-top w-45 h-22 sm:w-25 xl:w-55 bg-purple-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="sm:text-sm text-xs text-[#000] ">
                Love Calculator
              </h3>
              <Image
                src="/ds-img/wedding-cost.webp"
                className="w-11 sm:w-10"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </Link>
          </div>

          <div className="realtive py-1 grid max-w-7xl items-center justify-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-5 z-10">
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
          </div>

        </div>
      </div>
    </div>
  );
}
