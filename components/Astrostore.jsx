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
    <section className="products_service_new  mt-2 self-center sm:max-w-7xl w-full  p-4 ">
    <div className="container">
      <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-5 text-center font-semibold">
      • Get the Best Picks & Trending Products at <strong>Dhwani Store</strong> •
      </h1>

      <div className="main-product-store-home ">
      {astrostorepro.map((astrostr,index) => (
        <Link href="#" key={index} className="prblm-card-top flex items-center justify-center sm:w-75 sm:h-55 xl:min-w-70 xl:h-60 min-w-40 sm:min-w-55 h-40">
          <Image className="store-img-home"
            src={astrostr.img}  unoptimized
            height={120} width={120} loading="lazy" alt="Horoscope Sign"/>
         <div className="flex items-center justify-center absolute bottom-2 w-[100%] left-0">
                <h3 className="prblm-txt w-[90%] rounded-full border justify-self-center self-center place-self-center text-xs sm:text-base ">
                    {astrostr.name}
                  </h3>
                </div>
        </Link>
      ))};
   

      </div>
    </div>
  </section>
  )
};