"use client"; // Required for Next.js App Router (if using Next.js 13+)

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

export default function Banner() {
  return (
    <div className="slider-banner-home  w-[100%] pt-0
      sm:pt-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}   
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={false}
        loop={true} 
        className="mySwiper"
      >
        {/* Slides */}
        <SwiperSlide>
        <img className="w-[100%]" src="./ds-img/banner1.webp" height="450" width="1000" alt="Slide 1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[100%]" src="./ds-img/banner2.webp" height="450" width="1000" alt="Slide 2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[100%]" src="./ds-img/banner3.webp" height="450" width="1000" alt="Slide 3" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[100%]" src="./ds-img/banner4.webp" height="450" width="1000" alt="Slide 4" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
