"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"

export default function Credent() {
  const creden = [
    {
      id: 1,
      ulname: "Spiritual Connection",
      src: "/ds-img/heal2.webp",
      clr:"#e9d4ff"
    },
    {
      id: 2,
      ulname: " 100%  Transparency",
      src: "/ds-img/transparency.webp",
        clr:"#ddd6ff"
    },
    {
      id: 3,
      ulname: " Free Shipping",
      src: "/ds-img/free-shipping.webp",
        clr:"#f6cfff"
    },
    {
      id: 4,
      ulname: "Certified Products",
      src: "/ds-img/contract.webp",
        clr:"#e9d4ff"
    },
    ,
    {
      id: 5,
      ulname: " Abhimantarit Items",
      src: "/ds-img/chdwa-rem.webp",
        clr:"#ddd6ff"
    },
    ,
    {
      id: 6,
      ulname: "Handcrafted  With care",
      src: "/ds-img/hand-made.png",
        clr:"#f6cfff"
    },
    ,
    {
      id: 7,
      ulname: "No Compromise  on Quality",
      src: "/ds-img/high-quality.webp",
        clr:"#ddd6ff"
    },
  ];

  const glances = [
    { id: 1, ulname: " Licensed  Guide", src:"/ds-img/contract.webp", },
    { id: 2, ulname: " Astrologers" , exp:"2K", src:"/ds-img/teamwork.webp",},
    { id: 3, ulname: "Customer Base" , exp:"50 Lakh", src:"/ds-img/global-user.webp",},
    { id: 4, ulname: "Kundali Served" , exp:"200K+", src:"/ds-img/kundli.webp" ,},
    { id: 5, ulname: "Consultaions" , exp:"100K+", src:"/ds-img/talk.webp",},
    { id: 6, ulname: "   Authentic  Products ", src:"/ds-img/transparency.webp",},
  ];
  return (
    <section>
      <div className="discuss-expert ">
        <div className="astro-paid-consultation flex flex-col items-center justify-center">
          <h1 className="relative text-[#2f1254] text-md md:text-2xl text-center font-semibold">
            • Dhwani Astro <strong>Promises & Credentials At a glance</strong> •
          </h1>
          <div className="relative py-3 flex md:max-w-7xl w-full flex-wrap items-center justify-center  gap-6 z-10">
            {creden.map((cred) => (
              <div
                key={cred.id} style={{ backgroundColor: cred.clr }}
                className=" pro-card-top w-28 md:w-40 rounded-lg shadow-lg p-3 text-center flex  items-center justify-center"
              >
                <Image
                  src={cred.src}
                  className="w-8 md:w-13"
                  alt="da image"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <h3 className="text-xs md:text-base text-[#2f1254]  w-24">
      
                  {cred.ulname}
                </h3>
              </div>
            ))}
          </div>

          <div className="relative bg-[#dfc7fd] rounded-lg p-5  py-6 md:py-10 flex md:max-w-7xl w-full flex-wrap items-center justify-center  gap-3 z-10">
            {glances.map((glan) => (
              <div
                key={glan.id}
                className=" pro-card-top bg-[#fff] w-28 md:w-40 rounded-lg shadow-lg p-1 text-center flex  items-center justify-center"
              >
                <Image
                  src={glan.src}
                  className="w-8 md:w-13"
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="da image"
                />
                <h3 className=" text-xs md:text-base text-[#2f1254] ">
                <span className="text-base md:text-xl text-[#2f1254] font-semibold">{glan.exp}</span> <br/> {glan.ulname}
              </h3>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
