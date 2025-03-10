"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoCall } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import {
  FaStarHalfAlt,
  FaUserPlus,
  FaMoneyBillAlt,
  FaGrinStars,
} from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Astrocard() {
  const astrocardarray = [
    {
      id: 1,
      src: "/ds-img/sachin.svg",
      alt: "Astro Image",
      ulname: "Astro Sachin ",
      expas: 5,
      reve: 4.85,
      ordr: 6600,
      skill: "Vedic, Tarot, Neumrology",
      prcl: 20,
      prct: 10,
      prclf: 30,
      prctf: 15,
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
      prcl: 12,
      prct: 18,
      prclf: 30,
      prctf: 38,
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
      prcl: 2,
      prct: 24,
      prclf: 30,
      prctf: 307,
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
      prcl: 10,
      prct: 20,
      prclf: 30,
      prctf: 302,
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
      prcl: 15,
      prct: 55,
      prclf: 30,
      prctf: 35,
    },
  ];

  return (
    <section className="flex w-full flex-col items-center self-center md:max-w-7xl">
      <div className="flex flex-col items-center justify-center md:max-w-7xl   p-4">
        <h1 className="text-[#2f1254] text-md md:text-2xl  py-3 text-center font-semibold">
          • Consult with our <strong>Top Premium Astrologers</strong> •
        </h1>
        <div className="user-sign-up  relative grid w-full  items-start justify-center grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 z-10 mt-3 shadow-lg">
          <div className="service-card-sign rounded-xl p-1 md:p-3 text-center flex flex-col items-center justify-center gap-2">
            <FaUserPlus className="icreact bg-violet-400 "  />
            <h3 className="text-[10px] text-[#2f1254] md:font-semibold">
              Sign Up with <br />
              <strong>Dhwani Astro</strong>
            </h3>
          </div>

          <div className="service-card-sign rounded-xl p-1 md:p-3 text-center flex flex-col items-center justify-center gap-2">
            <FaMoneyBillAlt className="icreact bg-purple-300 text-[#000" />
            <h3 className="text-[10px] text-[#2f1254] md:font-semibold">
              Put Money in <br />
              <strong> Dhwani Astro Wallet</strong>
            </h3>
          </div>

          <div className="service-card-sign rounded-xl p-1 md:p-3 text-center flex flex-col items-center justify-center gap-2">
            <MdOutlineGroups className="icreact bg-fuchsia-300" />
            <h3 className="text-[10px] text-[#2f1254] md:font-semibold">
              Click on <br />
              <strong>Call and Chat</strong>
            </h3>
          </div>

          <div className="service-card-sign rounded-xl p-1 md:p-3 text-center flex flex-col items-center justify-center gap-2">
            <FaGrinStars className="icreact bg-violet-400" />
            <h3 className="text-[10px] text-[#2f1254] md:font-semibold">
              <strong>Rate & Review</strong> <br />
              after consultation
            </h3>
          </div>
        </div>
      </div>

      <div className="astrocard-swipe md:max-w-7xl w-full p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={true}
          // pagination={{ clickable: true }}
          autoplay={false}
          loop={true}
          className="mySwiperhoro"
          style={{
            "--swiper-navigation-color": "#8334e4",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {astrocardarray.map((ascard, index) => (
            <SwiperSlide key={index}>
              <Link href="#">
                <div
                  className="relative w-full p-1 md:p-3 rounded-lg overflow-hidden shadow-lg bg-cover bg-center back-astro-image"
                  style={{ backgroundImage: "url('./ds-img/ba2.webp')" }}
                >
                  <div className="absolute inset-0 bg-[#00000030] bg-opacity-0"></div>

                  <div className="relative p-2 flex rounded-lg flex-col  items-center text-white bg-[#6a5781a1]">
                    <div className="astro-image-price-box flex flex-col items-start justify-start gap-2 ">
                      <div className="astro-image-name flex  md:flex-row place-self-center items-center justify-between gap-1 md:gap-2">
                        <Image
                          src={ascard.src}
                          className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-yellow-400 shadow-md object-cover"
                          width={50}
                          height={50}
                          loading="lazy"
                          alt={ascard.alt}
                        />

                        <div className="astro-name-exp flex flex-col items-center gap-1">
                          <h2 className="mt-1 md:mt-3 text-sm md:text-xl font-bold">
                            {ascard.ulname}
                          </h2>

                          <p className="text-xs text-yellow-300 bg-[#00000880] rounded-lg py-1 px-2 w-fit">
                            Exp: {ascard.expas} Yrs
                          </p>

                          <span className="flex items-center gap-1">
                            <p className="text-xs bg-[#00000880] rounded-lg py-1 px-2 w-fit flex items-center gap-2">
                              {ascard.reve}
                              <FaStarHalfAlt className="text-yellow-300 text-xs" />
                            </p>
                            <span className="text-[11px] text-yellow-300 bg-[#00000880] p-1 rounded-lg">
                              {ascard.ordr}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="astrologer-price-skill p-2 bg-[#00000880]  w-full rounded-lg flex flex-col items-center justify-center">
                        <p className="text-xs text-yellow-300 whitespace-nowrap overflow-hidden text-ellipsis">
                          {ascard.skill}
                        </p>

                        <div className="astrologer-price-box flex items-center justify-between w-full">
                          <p className="mt-2 text-[10px] md:text-xs font-semibold flex flex-col items-center justify-center">
                            <span> Call : ₹ {ascard.prcl}</span>
                            <span className="text-red-500 text-[10px]  md:text-xs line-through">
                              ₹ {ascard.prct}
                            </span>
                          </p>
                          <p className="mt-2 text-[10px] md:text-xs font-semibold flex flex-col items-center justify-center">
                            <span>Chat : ₹ {ascard.prclf}/min</span>
                            <span className="text-red-500 text-[10px]  md:text-xs line-through">
                              ₹ {ascard.prctf}/min
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-4 justify-around w-full">
                      <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-3 rounded-full shadow-md transition">
                        <IoCall className="text-xl" />
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-3 rounded-full shadow-md transition">
                        <IoIosChatbubbles className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </section>
  );
}
