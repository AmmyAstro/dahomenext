"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Chathoro() {
  const chathorobox = [
    {
      id: 1,
      src: "/ds-img/talk-to-astrologer-home.webp",
      alt: "Talk",
      ulname: "   Chat With Astrologer",
    },
    {
      id: 2,
      src: "/ds-img/chat-with-astrologer-home.webp",
      alt: "Chat",
      ulname: " Talk To Astrologer",
    },
    {
      id: 3,
      src: "/ds-img/match-making-home.webp",
      alt: "Match",
      ulname: " Dhwani Service",
    },
    {
      id: 4,
      src: "/ds-img/live-astrologer-home.webp",
      alt: "Live",
      ulname: "Live Astrologer",
    },
    {
      id: 5,
      src: "/ds-img/store.webp",
      alt: "Store",
      ulname: "    Dhwani Store",
    },
  ];
  const horoscopes = [
    { name: "Aries", img: "/ds-img/ARIESn.webp" },
    { name: "Taurus", img: "/ds-img/Taurusn.webp" },
    { name: "Cancer", img: "/ds-img/cancern.webp" },
    { name: "Leo", img: "/ds-img/LEO.webp" },
    { name: "Virgo", img: "/ds-img/virgon.webp" },
    { name: "Libra", img: "/ds-img/LIBRAn.webp" },
    { name: "Scorpio", img: "/ds-img/Scorpio.webp" },
    { name: "Sagittarius", img: "/ds-img/SAGITTARIUSn.webp" },
    { name: "Capricorn", img: "/ds-img/CAPRICORNn.webp" },
    { name: "Aquarius", img: "/ds-img/Aquariusn.webp" },
    { name: "Gemini", img: "/ds-img/GEMINIn.webp" },
    { name: "Pisces", img: "/ds-img/PISCESn.webp" },
  ];
  return (
    <section>
      <section className="relative w-full mx-auto py-5 sm:py-10 px-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-3/3 h-full bg-cover bg-center opacity-3"
            style={{ backgroundImage: "url('/ds-img/ZODIAC-CONSTELL.webp')" }}
          ></div>
        </div>

        <div className="service-horocope flex flex-col items-center justify-center">
          <div className="relative grid max-w-7xl items-center justify-center grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-2 sm:gap-6 z-10">
            {chathorobox.map((chatbox) => (
              <div
                key={chatbox.id}
                className="service-card-top w-18 sm:w-32 bg-[#dccef3e3] rounded-xl shadow-lg p-3 py-3 sm:py-5 text-center flex flex-col items-center justify-center"
              >
                <Image
                  src={chatbox.src}
                  className="w-7 h-7  sm:w-14 sm:h-14 rounded-full mb-2"
                  width={35}
                  height={35}
                  alt="Image 1"
                  loading="lazy"
                />
                <h3 className="sm:text-xs text-[10px] text-[#000] ">
                  {chatbox.ulname}
                </h3>
              </div>
            ))}
          </div>

          <div className="horoscope-swipe sm:max-w-7xl w-full">
            <div className="horo-text p-2 py-1">
              <h1 className="text-[#2f1254] text-md sm:text-2xl pt-4 text-center font-semibold">
                • FREE <strong>HOROSCOPE</strong> •
              </h1>
              <p className="text-[#2f1254] text-[12px] sm:text-base text-center">
                You can solve the universe's riddles with our horoscopes. Our
                astrological knowledge will assist you in making plans for a
                better and brighter future.
              </p>
            </div>

            <div className="slider-horo-home  w-full ">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation={true}
                // pagination={{ clickable: true }}
                autoplay={false}
                loop={true}
                className="mySwiperhoro"
                style={{
                  "--swiper-navigation-color": "#fff",   
                  "--swiper-navigation-size": "25px",
               
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 4, 
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 4, 
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 5, 
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 7, 
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 7, 
                    spaceBetween: 20,
                  },
                }}
              >
                {horoscopes.map((sign, index) => (
                  <SwiperSlide key={index}>
                    <Link href="#">
                      <Image
                        className="horo-img-home w-23 h-23 sm:w-28 sm:h-28 xl:w-32 xl:h-32 "
                        src={sign.img}
                        height={100}
                        width={100}
                        loading="lazy"
                        alt={`${sign.name} Horoscope Sign`}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
            
              </Swiper>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
