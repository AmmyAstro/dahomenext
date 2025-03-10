"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Astrostore() {
    const astrostorepro = [
        { name: "499 Store", img: "/ds-img/st1.webp"},
        { name: "Rose Quartz", img: "/ds-img/st2.webp"},
        { name: "Best Selling", img:"/ds-img/st3.webp" },
        { name: "Buy 1 Get 1", img: "/ds-img/st4.webp"},
        { name: "Protective Kavach", img:"/ds-img/st5.webp"},
        { name: "Divine Malas", img: "/ds-img/st6.webp" },
        { name: "God Idols", img:"/ds-img/st7.webp"},
        { name: "Crystal Tree", img:"/ds-img/st8.webp"},       
      ];
  return (
    <section className="products_service_new  mt-2 self-center md:max-w-7xl w-full  p-4 ">
    <div className="container">
      <h1 className="relative text-[#2f1254] text-md md:text-2xl py-1  md:py-5 text-center font-semibold">
      • Get the Best Picks & Trending Products at <strong>Dhwani Store</strong> •
      </h1>

      <div className="main-product-store-home ">
      {astrostorepro.map((astrostr,index) => (
        <Link href="#" key={index} className="free_store_pro-home w-40 md:w-75 md:h-70 min-w-40 md:min-w-75 h-40" >
          <Image className="store-img-home"
            src={astrostr.img}  unoptimized
            height={120} width={120} loading="lazy" alt="Horoscope Sign"/>
          <p className="name_free_str text-xs">{astrostr.name} </p>
        </Link>
      ))};
   

      </div>
    </div>
  </section>
  )
};