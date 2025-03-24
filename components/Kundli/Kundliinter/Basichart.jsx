"use client";

import Image from "next/image";
import Link from "next/link";
import Kuninterimg from "./Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";
import Basicdetail from "./Basicdetail";






export default function Basichart() {


  return (

    <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
      <div className="kundli-top-sec w-full">
        <Kuninterimg />
      </div>

      <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

        <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">

          <span className="text-xl text-[#fff] text-center font- bg-[#2f1254] rounded-full px-10 py-2 w-full shadow-lg">Dhwani Astro Kundli Birth Chart & Planetry Positions </span>

          <div className="lag-nav-chart w-full grid grid-cols-2 gap-5">
            <div className="lagna-chart flex flex-col items-center justify-center gap-2">
              <h5 className="text-sm text-[#fff] font- bg-[#2f12549e] rounded-full px-10 py-2">Lagna Chart</h5>
              <div className="chart-img w-full">
                <Image src={"/ds-img/chrtlag.webp"} height={100} width={100} alt="chart image" className="w-[100%] h-100" />
              </div>
            </div>
            <div className="nav-chart flex flex-col items-center justify-center gap-2">
              <h5 className="text-sm text-[#fff] font- bg-[#2f12549f] rounded-full px-10 py-2">Navamsa Chart</h5>
              <div className="chart-img w-full">
                <Image src={"/ds-img/chrtlag.webp"} height={100} width={100} alt="chart image" className="w-[100%] h-100" />
              </div>

            </div>
          </div>

          <Basicdetail/>



        </div>



        <div className="kundli-side flex flex-col items-center justify-start gap-3">
          <Ytvideo />
          <Bestsell />
          <Sidebanner />
        </div>
      </div>

      <Freereport />
      <Recastro />
      <FAQue />
      <Callchatsec />

    </section>


  );
}
