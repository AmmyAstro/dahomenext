"use client";

import Image from "next/image";
import Link from "next/link";
import Kuninterimg from "./Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";
import Zodhoro from "@/components/Zodhoro/Zodhoro";
import Basicdetail from "./Basicdetail";



const kundlicards = [
  {
    name: "Birth Chart/ Kundli",
    img: "/ds-img/k1.png",
    named: "Planet positions & various charts",
  },
  {
    name: "General Life Prediction",
    img: "/ds-img/fnn.jpg",
    named: "Get to know about your nature",
  },
  {
    name: "Western Horoscope",
    img: "/ds-img/ology.webp",
    named: "Positions of celestial bodies ",
  },
  {
    name: "Dosha in Kundli",
    img: "/ds-img/k3.png",
    named: "Do you have any Kundli Dosh?",
  },
  {
    name: "Match Horoscope",
    img: "/ds-img/mh.webp",
    named: "Match Horoscope (Guna Milan)",
  },
  {
    name: "Numerology",
    img: "/ds-img/num.webp",
    named: "Your Lucky number is...",
  },
  {
    name: "My Day Today",
    img: "/ds-img/k5.webp",
    named: "Get predictions about the day",
  },
  {
    name: "Year Analysis(Varshphal)",
    img: "/ds-img/k6.png",
    named: "How will this year for you?",
  },
  {
    name: "Kalsharp Dosh",
    img: "/ds-img/k7.png",
    named: "How Kalsharp dosh effect you?",
  },
  {
    name: "Career",
    img: "/ds-img/k8.png",
    named: "Get predictions about your Career",
  },
  {
    name: "Nakshatra",
    img: "/ds-img/nak.jpg",
    named: "Get to know about your Nakshatra",
  },
  {
    name: "Love",
    img: "/ds-img/klii.png",
    named: "How is your Love Life?",
  },
  {
    name: "Sade Sati",
    img: "/ds-img/k11a.png",
    named: "How Sade Sati effect you?",
  },
  {
    name: "Lal Kitab Horoscope",
    img: "/ds-img/klf.png",
    named: "Get your Life Report as pdf",
  },
  {
    name: "Ascendant Report",
    img: "/ds-img/k5.png",
    named: "Get your Life Report as pdf",
  },
  {
    name: "GocharPhal (Transit)",
    img: "/ds-img/transit.png",
    named: "Position of Planets",
  },
  {
    name: "Char Dasha",
    img: "/ds-img/k11.png",
    named: "Timing events based on planets",
  },
]


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
