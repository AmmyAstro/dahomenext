"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
const remedbox = [
  { id: 1, ulname: "Gemstones" },
  { id: 2, ulname: "Yantras" },
  { id: 3, ulname: "Rudraksha" },
  { id: 4, ulname: "Feng-Shui" },
  { id: 5, ulname: "Jadi (Tree Roots" },
  { id: 6, ulname: "Property Astrology" },
  { id: 7, ulname: "Buisness Astrology" },
  { id: 8, ulname: "All about Vastu" },
  { id: 9, ulname: "Share Market Astrology" },
  { id: 10, ulname: "Court Legal Issue" },
];
export default function RemeCalc() {

  return (
    <div className="astrology-remedies-section flex flex-col items-center justify-center relative w-full mx-auto py-0 md:py-10 px-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/ds-img/bgreme.webp')" }}
        ></div>
      </div>
      <div className="remedies-and-query flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="heading-astro-remed relative">
          <h1 className="relative text-[#2f1254] text-md md:text-2xl py-1 md:py-5 text-center font-semibold">
            • Astrology Remedies & <strong>Astrological Solutions </strong> •
          </h1>
          <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 z-10">
            {remedbox.map((rembx) => (
              <div
                key={rembx.id}
                className="remedies-card-top bg-[#dccef3e3] rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center"
              >
                <h3 className="md:text-sm text-[10px] text-[#000] ">
                  {rembx.ulname}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="astro-free-calculator">
          <h1 className="relative text-[#2f1254] text-md md:text-2xl py-1 md:py-5 text-center font-semibold">
            • Free <strong>Calculators</strong> •
          </h1>
          <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 z-10">
            <div className="calculator-card-top bg-violet-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px]   text-[#000] ">
                Lagna Navamsa Calculator
              </h3>
              <Image
                className="w-11 md:w-15"
                src="/ds-img/ology.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized  />
            </div>

            <div className="calculator-card-top bg-purple-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px]  text-[#000] ">
                Lucky Date / Unlucky Date
              </h3>
              <Image
                className="w-11 md:w-15"
                src="/ds-img/calend.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top bg-fuchsia-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px] text-[#000] ">
                Lucky Vehicle Number
              </h3>
              <Image
                className="w-11 md:w-15"
                src="/ds-img/number-blocks.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy"    unoptimized   />
            </div>

            <div className="calculator-card-top bg-violet-300 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px]  text-[#000] ">
                Moon Sign Calculator
              </h3>
              <Image
                className="w-11 md:w-15"
                src="/ds-img/moonsign.webp"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top bg-purple-300 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px] text-[#000] ">
                Nakshatra Calculator
              </h3>
              <Image
                src="/ds-img/astrology.webp"
                className="w-11 md:w-15"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>

            <div className="calculator-card-top bg-purple-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
              <h3 className="md:text-sm text-[10px] text-[#000] ">
                Love Calculator
              </h3>
              <Image
                src="/ds-img/wedding-cost.webp"
                className="w-11 md:w-15"
                alt="free calculator image"
                height={15}
                width={15}
                loading="lazy" unoptimized />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
