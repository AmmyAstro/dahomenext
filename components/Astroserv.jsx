"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Astroserv() {
    const astroservices = [
        { name: "Healing", img: "/ds-img/ser1.webp"},
        { name: "Puja", img: "/ds-img/ser2.webp"},
        { name: "Face Reading", img:"/ds-img/ser3.webp" },
        { name: "Past Life Regression", img: "/ds-img/ser4.webp"},
        { name: "Spells", img:"/ds-img/ser5.webp"},
        { name: "Birth Time Rectification", img: "/ds-img/ser6.webp" },
        { name: "Pendulum Dowsing", img:"/ds-img/ser7.webp"},
       
      ];
  return (
    <section className="healing_service_new mt-2 self-center md:max-w-7xl w-full  p-4 ">
    <div className="container">
      <h1 className="relative text-[#2f1254] text-md md:text-2xl py-1  md:py-5 text-center font-semibold">
        • Personalize <strong>ASTROLOGY SERVICES</strong> •
      </h1>

      <div className="main-product-store-home ">
      {astroservices.map((astroser,index) => (
        <Link href="#" key={index} className="free_store_pro-home" >
          <Image className="store-img-home"
            src={astroser.img} 
            height="120" width="120" loading="lazy" alt="Horoscope Sign"/>
          <p className="name_free_str text-md">{astroser.name} </p>
        </Link>
      ))};
   

      </div>
    </div>
  </section>
  )
};