"use client";

import Image from "next/image";

import Basicdetail from "./Basicdetail";
// import Kundliinterout from "@/components/Layouts/Kundliinterout";






export default function Basichart() {


  return (

    <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
  

      <div className="kundli-items-box-side flex flex-col md:grid w-full md:px-0 gap-5 py-1">

        <div className="basic-kundli-charts  flex flex-col gap-2 items-center">

          <span className="text-sm md:text-xl text-[#fff] text-center font- bg-[#2f1254] rounded-lg px-10 py-2 w-full shadow-lg">Dhwani Astro Kundli Birth Chart & Planetry Positions </span>

          <div className="lag-nav-chart w-full grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="lagna-chart flex flex-col items-center justify-center gap-2">
              <h5 className="text-xs md:text-sm text-[#fff] font- bg-[#2f12549e] rounded-full px-10 py-2">Lagna Chart</h5>
              <div className="chart-img w-full">
                <Image src={"/ds-img/chrtlag.webp"} height={100} width={100} alt="chart image" className="w-[100%] md:h-100 h-75" />
              </div>
            </div>
            <div className="nav-chart flex flex-col items-center justify-center gap-2">
              <h5 className="text-xs md:text-sm text-[#fff] font- bg-[#2f12549f] rounded-full px-10 py-2">Navamsa Chart</h5>
              <div className="chart-img w-full">
                <Image src={"/ds-img/chrtlag.webp"} height={100} width={100} alt="chart image" className="w-[100%] md:h-100 h-75" />
              </div>

            </div>
          </div>

          <Basicdetail/>



        </div>



      </div>



    </section>


  );
}

