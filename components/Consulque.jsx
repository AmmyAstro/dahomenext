"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"

export default function Consulque() {
  const consult = [
    {
      id: 1,
      ulname: "Astrology Consultaion",
      src: "/ds-img/horoscope.webp",
      pri: "₹ 800",
    },
    {
      id: 2,
      ulname: " Tarot Reading",
      src: "/ds-img/mandala.webp",
      pri: "₹ 1800",
    },
    {
      id: 3,
      ulname: "Medical Astrology Consultaion",
      src: "/ds-img/om.webp",
      pri: "₹ 7800",
    },
    {
      id: 4,
      ulname: "Premium Healing",
      src: "/ds-img/heal2.webp",
      pri: "₹ 1200",
    },
  ];

  const query = [
    { id: 1, ulname: "Career" },
    { id: 2, ulname: " Marriage" },
    { id: 3, ulname: "Relationship" },
    { id: 4, ulname: " Mental Health" },
    { id: 5, ulname: "Job" },
    { id: 6, ulname: " Couple" },
  ];
  return (
    <div className="astro-paid-dis-exp flex flex-col sm:flex-row gap-10 sm:max-w-7xl self-center">
      <div className="astro-paid-consultation flex flex-col items-center justify-center">
        <h1 className="relative text-[#2f1254] text-md sm:text-2xl  py-1 sm:py-5 text-center font-semibold">
          • Book Session <strong>/ Get your Consultaion Call</strong> •
        </h1>
        <div className="relative py-3  items-center justify-center flex flex-wrap gap-6 z-10">
          {consult.map((conque) => (
            <div
              key={conque.id}
              className="relative consul-card-top bg-violet-200 w-38 sm:w-85 rounded-lg sm:rounded-full shadow-lg p-3 text-center flex  items-center justify-center"
            >
              <h3 className=" absolute text-sm sm:text-xl text-[#2f1254] font-semibold">
                {conque.ulname}
              </h3>
              <div className="consul-box absolute z-40 ">
                <span className="font-semibold text-base text-[#000]"> {conque.pri}</span>
              </div>
              <img
                className=" w-15 sm:w-25 opacity-40"
                src={conque.src}
                alt="consultation image"
                loading="lazy"
                width={20}
                height={20}
              />
            </div>
          ))}
          
        </div>
      </div>

      <div className="discuss-expert hidden">
        <div className="astro-paid-consultation flex flex-col items-center justify-center">
          <h1 className="relative text-[#2f1254] text-md sm:text-2xl  py-1 sm:py-5 text-center font-semibold">
            • Ask your queries with our
            <strong>Experts / Therapists / Counsellors / Psychologists</strong> 
            •
          </h1>
          <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 z-10">
            {query.map((querr) => (
              <div
                key={querr.id}
                className=" exp-card-top bg-violet-200 w-30 sm:w-30 rounded-full shadow-lg p-3 text-center flex flex-col items-center justify-center"
              >
                <h3 className="  text-xs sm:text-[16px]  text-[#2f1254] ">
                  {querr.ulname}
                </h3>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
