"use client";

import Image from "next/image";
import Link from "next/link";

import { IoFilterOutline, IoSearch } from "react-icons/io5";
import { HiOutlineSortDescending } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaStarHalfAlt, FaLanguage } from "react-icons/fa";

export default function Callastro() {
  const chatastro = [
    {
      id: 1,
      src: "/ds-img/sachin.svg",
      alt: "Astro Image",
      ulname: "Astro Sachin ",
      expas: 5,
      reve: 4.85,
      ordr: 6600,
      skill: "Vedic, Tarot, Neumrology",
      lang: "Hindi, English",
      prcl: 20,
      prclf: 30,
      celeb: "Celebrity",
    },
    {
      id: 2,
      src: "/ds-img/parth.svg",
      alt: "Chat",
      ulname: " Parth",
      expas: 10,
      reve: 4.5,
      ordr: 2000,
      skill: "Vedic,  Neumrology",
      lang: "Hindi, Malyalam, Sindi",
      prcl: 12,
      prclf: 30,
      celeb: "Best Vedic",
    },
    {
      id: 3,
      src: "/ds-img/anvi.svg",
      alt: "Match",
      ulname: "Tarot Anvi",
      expas: 2,
      reve: 3.85,
      ordr: 600,
      skill: "Vedic, Tarot ",
      lang: "Kannada",
      prcl: 2,
      prclf: 30,
      celeb: "Top Rating",
    },
    {
      id: 4,
      src: "/ds-img/anshika.svg",
      alt: "Live",
      ulname: "Astro Anvi",
      expas: 8,
      reve: 4.25,
      ordr: 5600,
      skill: "Vedic ",
      lang: "Hindi, Marathi",
      prcl: 10,
      prclf: 30,
      celeb: "Special",
    },
    {
      id: 5,
      src: "/ds-img/shefali.svg",
      alt: "Store",
      ulname: "Tarot Shefali ",
      expas: 7,
      reve: 4.95,
      ordr: 6100,
      skill: "Palmistry, Tarot, Neumrology",
      lang: "Punjabi, English",
      prcl: 15,
      prclf: 30,
      celeb: "Top Choice",
    },
  ];

  return (
    <section className=" p-5 flex w-full flex-col items-center self-center ">
      <div className="flex justify-between items-center sm:w-[90%] gap-5  p-4">
        <h1 className="text-[#2f1254] text-md sm:text-2xl  py-3 text-center font-semibold">
          Talk To Astrologer
        </h1>

        <div className="avail-bal-rech flex items-center justify-between gap-5  border-purple-500 rounded-lg p-3">
          <div className="avail-bal">
            <h5 className="text-[#000]">Available Balance ₹ 0.00 </h5>
          </div>
          <div className="recharge-btn">
            <button className="text-xs sm:text-sm py-2 px-4 rounded-full border border-b-green-600 text-green-600">
              Recharge
            </button>
          </div>
        </div>

        <div className="filter-sort-search flex items-center justify-between gap-5">
          <div className="fixed z-22 bottom-0 left-0 md:relative filter-items bg-[#2f1254] p-2 py-3 w-full xl:w-fit md:bg-transparent flex items-center justify-between gap-5 xl:gap-2">
            <div className="filter-btn">
              <button className="text-xs sm:text-sm py-2 px-4 w-47 xl:w-25  flex items-center bg-[#ffd70a]   justify-center gap-1 rounded-full border border-[#ffd70a] ">
                <IoFilterOutline className="text-[#000]" />
                <h5 className="text-[#000]">Filter</h5>
              </button>
            </div>
            <div className="sort-btn">
              <button className="text-xs sm:text-sm py-2 px-4 w-47 xl:w-25 bg-[#ffd70a]  flex items-center justify-center gap-1 rounded-full border border-[#ffd70a]  ">
                <HiOutlineSortDescending className="text-[#000]" />
                <h5 className="text-[#000]">Sort</h5>
              </button>
            </div>
          </div>

          <div className="search-astro h-[2.5rem] flex items-center gap-1 px-5 rounded-full border border-green-600">
            <input
              type="text"
              placeholder="Search by Astrologer Name"
              className="w-full text-[#000]  px-4  text-sm sm:text-md outline-none border-none rounded-full"
            />
            <IoSearch className="text-[#000]" />
          </div>
        </div>
      </div>

      <section className="chatastro-cards-main  items-center flex-wrap gap-5 grid grid-cols-3 justify-around w-[90%]">
        {chatastro.map((chatas, index) => (
          <Link href="#" key={index}>
            <div
              className="relative h-47 w-full p-1 sm:p-3 rounded-lg overflow-hidden shadow-lg bg-cover bg-center back-astro-image"
              style={{ backgroundImage: "url('/ds-img/ba2.webp')" }}
            >
              <div className="absolute inset-0 bg-[#00000030] bg-opacity-0"></div>
              <div className="celeb-tag absolute -rotate-45 top-2 left-[-30] z-111">
                <span className="bg-[#ffd70a] p-1.5 text-[9px] text-[#000] w-30 inline-block  px-8">
                  {chatas.celeb}
                </span>
              </div>
              <div className="relative h-[100%] p-2 flex rounded-lg justify-center items-center text-white bg-[#6a5781a1]">
                <div className="astro-image-price-box flex  items-center justify-between gap-5">
                  <div className="astro-image-name flex flex-col place-self-center items-center justify-between gap-1 sm:gap-2">
                    <Image
                      src={chatas.src}
                      className="w-16 h-16 sm:w-25 sm:h-25 rounded-full border-4 border-yellow-400 shadow-md object-cover"
                      width={50}
                      height={50}
                      loading="lazy"
                      alt={chatas.alt}
                    />
                    <div className=" flex space-x-4 justify-around w-[80%]">
                      <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white gap-2 w-full flex items-center justify-center px-3 py-1 rounded-full shadow-md transition">
                        <IoCall className="text-xl" />
                        <h5 className="text-[#fff]">Call</h5>
                      </button>
                    </div>
                  </div>

                  <div className="astrologer-price-skill p-2 bg-[#00000880]   rounded-lg flex flex-col items-center justify-center">
                    <div className="astro-name-exp flex flex-col items-center gap-1">
                      <h2 className=" sm:mt-1 text-sm sm:text-base font-bold">
                        {chatas.ulname}
                      </h2>

                      <p className="text-xs text-yellow-300 whitespace-nowrap overflow-hidden text-ellipsis">
                        {chatas.skill}
                      </p>
                      <div className="lang-bar flex items-center gap-2">
                        <FaLanguage className="text-[#fff] text-xl" />
                        <p className="text-xs text-yellow-300  whitespace-nowrap overflow-hidden text-ellipsis">
                          {chatas.lang}
                        </p>
                      </div>

                      <span className="flex items-center gap-1">
                        <p className="text-xs text-yellow-300 bg-[#00000880] rounded-lg py-1 px-2 w-fit">
                          Exp: {chatas.expas} Yrs
                        </p>
                        <p className="text-xs bg-[#00000880] rounded-lg py-1 px-2 w-fit flex items-center gap-2">
                          {chatas.reve}
                          <FaStarHalfAlt className="text-yellow-300 text-xs" />
                        </p>
                        <span className="text-[11px] text-yellow-300 flex gap-1 bg-[#00000880] p-1 rounded-lg">
                          {chatas.ordr} <h6>Orders</h6>
                        </span>
                      </span>
                    </div>

                    <div className="astrologer-price-box flex items-center justify-center w-full">
                      <p className="mt-2 text-[10px] sm:text-xs font-semibold flex gap-3 items-center justify-center">
                        <span>Chat : ₹ {chatas.prcl}/min</span>
                        <span className="text-red-500 text-[10px]  sm:text-xs line-through">
                          ₹ {chatas.prclf}/min
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}
