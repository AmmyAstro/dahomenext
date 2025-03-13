"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Astroserv() {
    const astroservices = [
        { name: "Muhurata Consultation", img: "/ds-img/muhurat.jpg"},
        { name: "Yearly Chart Prediction", img: "/ds-img/fn.jpg"},
        { name: "Child Related Consultation", img:"/ds-img/childbirth.jpg" },
        { name: "Health Consultation", img: "/ds-img/Medical.jpg"},
        { name: "Property/Land/House Consultation", img:"/ds-img/Property.jpeg"},
        { name: "Legal Case Consultation", img: "/ds-img/legal-astro.jpg" },
        { name: "Buisness Consultation", img:"/ds-img/buisness.png"},
        { name: "Marriage / Relationship", img:"/ds-img/marriage.webp"},
        { name: "Match Making", img:"/ds-img/match-mak.png"},       
      ];
  return (
    <section className="healing_service_new mt-2 self-center sm:max-w-7xl w-full  p-4 ">
    <div className="container">
      <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-5 text-center font-semibold">
        • Personalize <strong>ASTROLOGY SERVICES</strong> •
      </h1>

      <div className="main-product-store-home ">
      {astroservices.map((astroser,index) => (
        <Link href="#" key={index} className="free_store_pro-home sm:w-75 sm:h-55 xl:min-w-70 xl:h-50 min-w-40 sm:min-w-55 h-40" >
          <Image className="store-img-home"
            src={astroser.img}  unoptimized
            height={120} width={120} loading="lazy" alt="Horoscope Sign"/>
          <p className="name_free_str text-xs sm:text-base">{astroser.name} </p>
        </Link>
      ))};
   

      </div>
    </div>
  </section>
  )
};