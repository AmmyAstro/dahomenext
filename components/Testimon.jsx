"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SiComma } from "react-icons/si";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimon() {
  const testim = [
    {
      id: 1,
      src: "/ds-img/sachin.svg",
      ulname: "Suraj Chaudhary ",
      para: " It's an incredible platform for people who want to know about their predictions. it's amazing because the astrologers were so intuitive and their predictions were very true. Must recommend!",
      add: "New Delhi",
    },
    {
      id: 2,
      src: "/ds-img/parth.svg",
      ulname: " Chaudhary ",
      para: " It's an incredible platform for people who want to know about their predictions. it's amazing because the astrologers were so intuitive and their predictions were very true. Must recommend!",
      add: "Shimla",
    },
    {
      id: 3,
      src: "/ds-img/shefali.svg",
      ulname: "Renuka Pawar ",
      para: " It's an incredible platform for people who want to know about their predictions. it's amazing because the astrologers were so intuitive and their predictions were very true. Must recommend!",
      add: "Dehradun",
    },
    {
      id: 4,
      src: "/ds-img/anshika.svg",
      ulname: "Natasha ",
      para: " It's an incredible platform for people who want to know about their predictions. it's amazing because the astrologers were so intuitive and their predictions were very true. Must recommend!",
      add: "UK",
    },
    {
      id: 5,
      src: "/ds-img/anvi.svg",
      ulname: "Pinky ",
      para: " It's an incredible platform for people who want to know about their predictions. it's amazing because the astrologers were so intuitive and their predictions were very true. Must recommend!",
      add: "Noida",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center self-center sm:max-w-7xl my-4 p-3">
      <div className="py-3">
      <h1 className="relative text-[#2f1254] text-md sm:text-2xl text-center font-semibold">
        • Client Testimonials <strong> & Success Stories</strong> •
      </h1>
      
      </div>
      <div className="slider-astrocard-home  w-full relative">
           {/* Custom Navigation Buttons */}
           <div className="absolute top-1/2 md:left-[-50px] left-[-10px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-prev-custom">‹</button>
                </div>
                <div className="absolute top-1/2 md:right-[-50px] right-[-10px] transform -translate-y-1/2 z-50">
                    <button className="swiper-button-next-custom">›</button>
                </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
        }} 
          // pagination={{ clickable: true }}
          autoplay={false}
          loop={true}
          className="mySiperblog"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "25px",

            "padding": "3rem 0",
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
              slidesPerView: 3, 
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3, 
              spaceBetween: 20,
            },
          }}
        >
          {testim.map((test) => (
            <SwiperSlide key={test.id}>
              <Link href="#">
                <div className="relative  bg-white shadow-lg rounded-lg p-6 text-center">
                  <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
                    <Image
                      src={test.src}
                      alt="Customer image"
                      width={40}
                      height={40}
                      loading="lazy"
                      className="w-20 h-20 sm:w-30 sm:h-30 rounded-full border-4 border-white shadow-md"
                    />
                  </div>

                  <div className="mt-5 md:mt-15">
                    <h3 className="text-xs sm:text-lg font-semibold text-gray-800">
                      {test.ulname}
                    </h3>

                    <div className="flex justify-center mt-1 text-yellow-400">
                      ★★★★★
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {test.add}
                    </p>

                    <p className="text-gray-600 mt-3 text-xs sm:text-sm">
                   <span className="flex "> <SiComma  className="text-yellow-400 rotate-180"/>   <SiComma  className="text-yellow-400 rotate-180"/></span>

                      {test.para}
                      <span className="flex justify-end"> <SiComma  className="text-yellow-400"/>   <SiComma  className="text-yellow-400"/></span>
                      </p>
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
