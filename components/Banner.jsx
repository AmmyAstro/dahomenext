"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import { useState } from "react";

export default function Banner() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleImageLoad = () => {
    if (swiperInstance) {
      swiperInstance.update(); // Properly update Swiper after image load
    }
  };

  return (
    <div className="slider-banner-home w-full pt-0 sm:pt-0">
      <Swiper
        onSwiper={setSwiperInstance} // Store Swiper instance
        modules={[Navigation, Pagination, Autoplay]}   
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        observer={true}
        observeParents={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className="w-full md:h-[450px]  h-[130px] object-cover" src="/ds-img/banner1.webp" height={450} width={1000} alt="Slide 1" onLoad={handleImageLoad} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full md:h-[450px] h-[130px] object-cover" src="/ds-img/banner2.webp" height={450} width={1000} alt="Slide 2" onLoad={handleImageLoad} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full md:h-[450px] h-[130px] object-cover" src="/ds-img/banner3.webp" height={450} width={1000} alt="Slide 3" onLoad={handleImageLoad} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full md:h-[450px] h-[130px] object-cover" src="/ds-img/banner4.webp" height={450} width={1000} alt="Slide 4" onLoad={handleImageLoad} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
