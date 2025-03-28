"use client";

import Image from "next/image";
import Link from "next/link";
import Kuninterimg from "./Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";



const kundlicards = [
    {
        name: "Birth Chart/ Kundli",
        img: "/ds-img/k1.png",
        named: "Planet positions & various charts",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "General Life Prediction",
        img: "/ds-img/fnn.jpg",
        named: "Get to know about your nature",
        href:"/homepage/Inkundli/Ingeneral",

    },
    {
        name: "Western Horoscope",
        img: "/ds-img/ology.webp",
        named: "Positions of celestial bodies ",
        href:"/homepage/Inkundli/Inwestern",
    },
    {
        name: "Dosha in Kundli",
        img: "/ds-img/k3.png",
        named: "Do you have any Kundli Dosh?",
        href:"/homepage/Inkundli/Indosha",
    },
    {
        name: "Match Horoscope",
        img: "/ds-img/mh.webp",
        named: "Kundli Milan (Guna Milan)",
        href:"/homepage/Inkundli/Inmatch",
    },
    {
        name: "Numerology",
        img: "/ds-img/num.webp",
        named: "Your Lucky number is...",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "My Day Today",
        img: "/ds-img/k5.webp",
        named: "Get predictions about the day",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Year Analysis",
        img: "/ds-img/k6.png",
        named: "How will this year for you?",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    // {
    //     name: "Kalsharp Dosh",
    //     img: "/ds-img/k7.png",
    //     named: "How Kalsharp dosh effect you?",
    //     href:"/homepage/Inkundli/Inbasicchart",
    // },
    {
        name: "Career",
        img: "/ds-img/k8.png",
        named: "Get predictions about your Career",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Nakshatra",
        img: "/ds-img/nak.jpg",
        named: "Get to know about your Nakshatra",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Love",
        img: "/ds-img/klii.png",
        named: "How is your Love Life?",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Sade Sati",
        img: "/ds-img/k11a.png",
        named: "How Sade Sati effect you?",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Lal Kitab Horoscope",
        img: "/ds-img/klf.png",
        named: "Get your Life Report as pdf",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Ascendant Report",
        img: "/ds-img/k5.png",
        named: "Get your Life Report as pdf",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "GocharPhal (Transit)",
        img: "/ds-img/transit.png",
        named: "Position of Planets",
        href:"/homepage/Inkundli/Inbasicchart",
    },
    {
        name: "Char Dasha",
        img: "/ds-img/k11.png",
        named: "Timing events based on planets",
        href:"/homepage/Inkundli/Inbasicchart",
    },
]


export default function Kuninter() {


    return (

        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-5 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">
                <div className="kundli-items-main col-span-3 flex flex-col gap-10">

                    <div className="kundli-items-main grid md:grid-cols-4 grid-cols-3 md:gap-5 gap-3  ">
                        {kundlicards.map((kunca, index) => (


                            <Link key={index} href={kunca.href} className="kundli-cards text-[#000] shadow-lg rounded-lg gap-2 md:p-3 p-2 flex flex-col items-center justify-center">
                                <h5 className="text-xs md:text-xs text-center font-normal">{kunca.name}</h5>
                                <Image src={kunca.img} alt="kundli images" width={50} height={50} className="w-10 h-10 md:w-15 md:h-15 rounded-full" />
                                <span className="text-center md:text-xs  text-[10px]">{kunca.named}</span>
                            </Link>
                        ))}
                    </div>

                        {/* <Kundlioth/> */}

                </div>
                <div className="kundli-side flex flex-col items-center justify-start gap-3">
                    <Ytvideo/>
                    <Bestsell/>
                    <Sidebanner/>
                </div>
            </div>

            <Freereport/>
            <Recastro/>
            <FAQue/>
            <Callchatsec/>

        </section>


    );
}
