"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBriefcase, FaLanguage  } from "react-icons/fa";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Recastro() {
    const recastro = [
        {
            id: 1,
            src: "/ds-img/sachin.svg",
            name: "Sachin",
            yr: "5",
            lan: "Hindi, English",
            skill:"Vedic, Tarot",
        },
        {
            id: 2,
            src: "/ds-img/parth.svg",
            name: "Parth ",
            yr: "7",
            lan: "Hindi, Kannada",
            skill:"Physic, Tarot",
        },
        {
            id: 3,
            src: "/ds-img/anshika.svg",
            name: "Anshika",
            yr: "8",
            lan: "Hindi, Punjabi",
            skill:"Vedic, Palmistry",
        },
        {
            id: 4,
            src: "/ds-img/anvi.svg",
            name: "Anvi",
            yr: "10",
            lan: "Hindi",
            skill:"Astro, Tarot",
        },
        {
            id: 5,
            src: "/ds-img/shefali.svg",
            name: "Shefali ",
            yr: "15",
            lan: "Hindi, English",
            skill:"Vedic, Numerology",
        },
    ];

    return (
        <section className="flex flex-col w-full items-center self-center sm:max-w-7xl my-4 ">
            <div className="py-3">
                <h1 className="relative text-[#2f1254] text-md sm:text-2xl text-center font-semibold">
                    • Recommended <strong> Astrologers</strong> •
                </h1>
              

            </div>
            <div className="slider-recastro  w-full relative">
                   {/* Custom Navigation Buttons */}
                   <div className="absolute top-1/2 left-[-5px] md:left-[-50px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-prev-rec">‹</button>
                </div>
                <div className="absolute top-1/2 right-[-5px] md:right-[-50px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-next-rec">›</button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{
                        nextEl: ".swiper-button-next-rec",
                        prevEl: ".swiper-button-prev-rec",
                    }} 
                    // pagination={{ clickable: true }}
                    autoplay={false}
                    loop={true}
                    className="mySiperrecastro w-[23rem] md:w-full"
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "25px",

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
                    {recastro.map((reca) => (
                        <SwiperSlide key={reca.id} style={{ width: "100%" }}>
                            <div className="border-1 border-purple-200 shadow-lg  rounded-lg p-2 flex flex-col gap-3 ">
                                <div className="flex flex-col md:flex-row  items-center justify-center gap-3">
                                    <Image className="md:w-16 md:h-16 w-12 h-12" width={50} height={50} src={reca.src} alt="astrologer image" />

                                    <div className="flex flex-col gap-1 justify-center items-center">
                                        <h5 className="text-center text-[#000] ">{reca.name}</h5>
                                        <span className="flex items-center gap-2 text-[#000] text-xs"><FaLanguage className="text-xl"/> {reca.lan}</span>
                                        <span className="flex items-center gap-2 text-[#000] text-xs"><FaBriefcase className="text-base"/> Experience : {reca.yr} years</span>
                                    </div>
                                </div>
                                <div className="w-full md:px-10 flex items-center justify-between ">
                                    <button className="text-xs justify-end items-end self-end bg-green-600 text-white md:px-4 md:py-2 px-2 py-1 rounded-lg">Chat</button>
                                    <button className="text-xs justify-end items-end self-end bg-green-600 text-white md:px-4 md:py-2 px-2 py-1 rounded-lg">Call</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}
