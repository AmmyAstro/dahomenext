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
      src: "/ds-img/love1.png",
      alt: "Talk",
      ulname: "Love",
      href: "/homepage/problemBaseLove",
    },
    {
      id: 2,
      src: "/ds-img/jobb.png",
      alt: "Chat",
      ulname: "Job",
      href: "/homepage/Inlovecat",

    },
    {
      id: 3,
      src: "/prblm/moneyy.jpeg",
      alt: "Match",
      ulname: "Money",
      href: "/homepage/Inlovecat",

    },
    {
      id: 4,
      src: "/prblm/hclegal.jpeg",
      alt: "Live",
      ulname: "Legal",
      href: "/homepage/Inlovecat",

    },
    {
      id: 5,
      src: "/prblm/pregg.jpeg",
      alt: "Store",
      ulname: "Pregnancy",
      href: "/homepage/Inlovecat",

    },
    {
      id: 6,
      src: "/prblm/educat.jpeg",
      alt: "Store",
      ulname: "Education",
      href: "/homepage/Inlovecat",

    },
    {
      id: 7,
      src: "/prblm/marriage.jpeg",
      alt: "Store",
      ulname: "Marriage",
      href: "/homepage/Inlovecat",

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
          <div className="healing_service_new mt-2 self-center sm:max-w-7xl w-full  p-4 ">
            <h1 className="text-[#2f1254] text-md sm:text-2xl py-4 text-center font-semibold">
              • Discover personalized astrological solutions <strong>from our Experts</strong> •
            </h1>
            <div className="problem-base-card flex overflow-x-auto overflow-y-hidden py-[10px]">
              {chathorobox.map((chatbox) => (
                <Link href={chatbox.href}
                  key={chatbox.id}
                  className="prblm-card-top flex items-center justify-center sm:w-75 sm:h-55 xl:min-w-70 xl:h-60 min-w-40 sm:min-w-55 h-40"
                >
                  <Image
                    src={chatbox.src}
                    className="prblm-image "
                    width={35}
                    height={35}
                    alt="Image 1"
                    unoptimized
                    loading="lazy"
                  />
                <div className="flex items-center justify-center absolute bottom-2 w-[100%] left-0">
                <h3 className="prblm-txt w-[90%] rounded-full border justify-self-center self-center place-self-center text-xs sm:text-base ">
                    {chatbox.ulname}
                  </h3>
                </div>
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="horoscope-swipe sm:max-w-7xl w-full">
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
                        className="horo-img-home w-23 h-23 sm:w-28 sm:h-28 xl:w-34 xl:h-36 "
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
          </div> */}
        </div>
      </section>
    </section>
  );
}
