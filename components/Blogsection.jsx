"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    FaCalendarAlt,FaEye,
} from "react-icons/fa";


import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Blogsection() {
  const blogcardarray = [
    {
      id: 1,
      src: "/ds-img/onman.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "666",
    },
    {
      id: 2,
      src: "/ds-img/ganc.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "1232",
    },
    {
      id: 3,
      src: "/ds-img/dhg.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "8732",
    },
    {
      id: 4,
      src: "/ds-img/onman.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "12372",
    },
    {
      id: 5,
      src: "/ds-img/dhg.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "2",
    },
  ];

  return (
    <section className="flex flex-col items-center self-center md:max-w-7xl my-4">
        <div className="py-3">
        <h1 className="relative text-[#2f1254] text-md md:text-2xl text-center font-semibold">
          • Latest<strong> Blogs</strong> •
        </h1>
        <span className="relative text-[#2f1254] text-sm text-center  ">Read and enlighten yourself with precise knowledge
          of Astrology and Vastu shaastra blogs written by our experts.</span>

        </div>
      <div className="slider-astrocard-home  w-full ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          // pagination={{ clickable: true }}
          autoplay={false}
          loop={true}
          className="mySiperblog"
          style={{
            "--swiper-navigation-color": "#8334e4",
          }}
        >
          {blogcardarray.map((blgsec) => (
            <SwiperSlide key={blgsec.id}>
              <Link href="#">
                <div className="blog-bx  flex flex-col ">
                  <Image
                    src={blgsec.src}
                    className="bl-im"
                    width={40}
                    height={40}
                    alt="blog image"
                    loading="lazy"
                    unoptimized
                  />

                  <div className="bl-con  flex flex-col  justify-between">
                    <div href="#" className="text-decoration-none">
                      <h6 className="bl-h">{blgsec.ulname}</h6>
                    </div>
                    <div className="bldate  items-center justify-between ">
                      <span className="bldat1 flex items-center justify-between flex-column">
                        <span className="bl-d-t flex items-center text-[#000]">
                        <FaCalendarAlt />&nbsp;
                          {blgsec.dat}
                        </span>
                        <span className="bl-d-c text-[#000]">
                          •&nbsp;&nbsp;Posted By DhwaniAstro{" "}
                        </span>
                      </span>
                    </div>
                    <button className="bl-btn self-center">Read Blog</button>
                    <div className="review_upper_image">
                    <FaEye />
                      <span>                      
                          &nbsp;{blgsec.vw}&nbsp;                    
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
    </section>
  );
}
