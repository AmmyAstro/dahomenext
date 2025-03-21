"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Freereport() {
    const freereport = [
        {
            id: 1,
            src: "/ds-img/dating.gif",
            name: "Love Horoscope",
        },
        {
            id: 2,
            src: "/ds-img/mars.gif",
            name: "Manglik Dosha ",
        },
        {
            id: 3,
            src: "/ds-img/solar-system.gif",
            name: "Gochar Phal (Transit Report)",
        },
        {
            id: 4,
            src: "/ds-img/uranus.gif",
            name: "Sade Sati Life Report",
        },
        {
            id: 5,
            src: "/ds-img/horoscope.gif",
            name: "Year Analysis (Varshaphal) ",
        },
        {
            id: 6,
            src: "/ds-img/taurus.gif",
            name: "Ascendant Report ",
        },
    ];

    return (
        <section className=" flex-col w-full items-center self-center sm:max-w-7xl my-4  ">
            <div className="py-3">
                <h1 className="relative text-[#2f1254] text-md sm:text-2xl text-center font-semibold">
                    • Free Astrology <strong> Services & Reports</strong> •
                </h1>


            </div>
            <div className="slider-freereport  w-full relative">

                <div className="absolute top-1/2 left-[-20px] md:left-[-50px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-prev-free">‹</button>
                </div>
                <div className="absolute top-1/2 right-[-20px] md:right-[-50px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-next-free">›</button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{
                        nextEl: ".swiper-button-next-free",
                        prevEl: ".swiper-button-prev-free",
                    }}
                    // pagination={{ clickable: true }}
                    autoplay={false}
                    loop={true}
                    className="mySiperfree"
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
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {freereport.map((freere) => (
                        <SwiperSlide key={freere.id} style={{ width: "100%" }}>
                            <Link href={"#"} className="p-3 border-2 border-stone-500 rounded-lg flex items-center justify-between">
                                <Image className=" w-20 h-20" width={50} height={50} src={freere.src} alt="report images" unoptimized />

                                <div className="">
                                    <h5 className="text-center text-[#000]">{freere.name}</h5>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}
