"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";
import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";
import { useState } from "react";


const doshaarr = [
    {
        id: 0,
        name: "Mangal Dosha",
        img: "/ds-img/mars.gif",
        href: "#",
        clr: "#e9d4ff",
        pre: "No",
        "is_mars_manglik_cancelled": "false",
        "manglik_status": "INEFFECTIVE",
        "percentage_manglik_present": 8.25,
        "percentage_manglik_after_cancellation": 8.25,
        "is_present": "false",
        "manglik_report": "The effectiveness of manglik dosha present in your horoscope is very minor which makes it ineffective. Therefore, you are not manglik.",
        "based_on_house": [
            "Planet Ketu is situated in Fourth house in your birth chart.",
            "Planet Saturn is in Eighth house in your horoscope."
        ]
    },
    {
        id: 1,
        name: "Kalsharp Dosha",
        img: "/ds-img/k7.png",
        href: "#",
        clr: "#ddd6ff",
        pre: "Yes",
        "type": "Full Ascending",
        "namek": "Ghatak",
        "house_id": 10,
        "one_line": "You have ascending kalsarpa dosha direction, which is treated as powerful. The KalSarpa Dosha is having full effect in your horoscope.",
        "report": "In your horoscope the Ghaatak Kaal Sarp Yog is present. Due to this reason the native lives away from his parents since birth. The native does not get the bliss of parents. The native suffers due to the separation from grandfather/grandmother (paternal or maternal). The married life is painful and disturbed. The children of the native may remain ill causing anxiety and loss to him. The family life remains disturbed; peace and happiness remain absent. His near relatives do not regard him in high esteem."
    },

    {
        id: 2,
        name: "Pitra Dosha",
        img: "/ds-img/horoscope.gif",
        href: "#",
        clr: "#e9d4ff",
        pre: "Yes",
        "what_is_pitri_dosha": "Pitri Dosha is a Karmic Debt of the ancestors and reflected in the horoscope in the form of planetary combinations. It can also happen due to the neglect of ancestors and not providing them their proper due in the form of shraddh or charity or spiritual upliftments.",
        "rules_matched": "Conjuction of Moon and Rahu and/or Rahu and Saturn causes Pitri Dosha.",
        "conclusion": "Your horoscope is having Pitri Dosha as it is satisfying 1 rules laid down for Pitri Dosha. You should not worry as there are remedies for Pitri Dosha which you can perform and be relieved from this dosha.",
    },
    {
        id: 3,
        name: "Sade Sati Dosha",
        img: "/ds-img/uranus.gif",
        href: "#",
        clr: "#e9d4ff",
        pre: "No",
        "is_undergoing_sadhesati": "No, currently you are not undergoing Sadhesati.",
        "saturn_sign": "Scorpio",
        "moon_sign": "Leo",
    },

];

export default function Doshas() {
    const [activeDosh, setActiveDosh] = useState(0);

    return (



        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">


                    <div className="container">
                        <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-5 text-center font-semibold">
                            • <strong>Dosha In Kundli</strong> •
                        </h1>

                        <div className="love-product-new flex flex-wrap gap-4">
                            {doshaarr.map((dosh, index) => (
                                <Link
                                    href={dosh.href}
                                    key={index}
                                    style={{ backgroundColor: dosh.clr }}
                                    className={`bg-gradient-to-r from-[#c54e5a6b] to-[#7042ac98] w-18 sm:w-32 xl:w-58  rounded-xl gap-1 shadow-lg p-3 py-3  text-center flex flex-col items-center justify-center`}
                                >
                                    <Image
                                        src={dosh.img}
                                        className="w-7 h-7  sm:w-14 sm:h-14 mb-2 rounded-full"
                                        width={35}
                                        height={35}
                                        alt="Image 1"
                                        loading="lazy"
                                    />
                                    <h3 className="sm:text-xs xl:text-base text-[13px] text-[#fff] font-semibold w-full rounded-full px-3 py-1">
                                        {dosh.name}
                                    </h3>
                                    <div className="sm:text-xs xl:text-sm text-[13px] w-full  justify-center text-[#000] gap-3 flex items-center bg-[#fff] rounded-full px-3 py-1">
                                        <span>Present</span> : <span>{dosh.pre}</span>
                                    </div>
                                    <button onClick={() => setActiveDosh(dosh.id)} className={`bg-[#9563c0db] rounded-full px-4 py-1 text-xs  mt-1 ${activeDosh === dosh.id ? "bg-[#fff] text-[#000]" : ""}`}>Know More</button>

                                </Link>
                            ))}
                            ;

                            <div className=" position-relative mt-4">
                                <div className="horoscope_single_box rounded-lg border-2 border-violet-300 p-3">
                                    <div className="horoscope_single_heading flex gap-10 items-center justify-start">
                                        <div className=" flex items-center justify-between">
                                            <Image
                                                alt="dosha image"
                                                width={30}
                                                height={30}
                                                loading="lazy"
                                                src={doshaarr[activeDosh].img}
                                                className="w-10 h-10"
                                            />
                                            <span className="text-[#000] text-xl font-semibold">{doshaarr[activeDosh].name}</span>
                                        </div>
                                        <div className=" text-[#000]">
                                            <span className="text-[#000]">Present</span> : <span className="bg-purple-300 text-[#fff] text-sm px-2 py-1 rounded-lg">{doshaarr[activeDosh].pre}</span>
                                        </div>
                                    </div>

                                    {doshaarr[activeDosh].id === 0 && (
                                        <div className="flex flex-col items-start gap-1">

                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold">Effectiveness of Manglik Dosha</span> : <span>{doshaarr[activeDosh].manglik_status}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold"> Percentage of Manglik Dosha</span> : <span>{doshaarr[activeDosh].percentage_manglik_present}%</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold"> Percentage Manglik after cancellation</span> : <span>{doshaarr[activeDosh].percentage_manglik_present}%</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-3">
                                                <span className="text-sm font-semibold">Manglik Report :</span>  <span> {doshaarr[activeDosh].manglik_report}</span>
                                            </div>
                                        </div>
                                    )}


                                    {doshaarr[activeDosh].id === 1 && (
                                        <div className="flex flex-col items-start gap-1">

                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold">Type of Kalsharp Dosha</span> : <span>{doshaarr[activeDosh].type}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold"> Particular name of Kalsharp Dosha</span> : <span>{doshaarr[activeDosh].namek}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-center gap-3">
                                                <span className="text-sm font-semibold"> House Effected</span> : <span>{doshaarr[activeDosh].house_id}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-1">
                                                <span className="text-sm font-semibold">Kaalsharp Report :</span>  <span> {doshaarr[activeDosh].one_line}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-1">
                                                <span className="text-sm font-semibold">Kaalsharp Main Report :</span>  <span> {doshaarr[activeDosh].report}</span>
                                            </div>
                                        </div>
                                    )}

                                    {doshaarr[activeDosh].id === 2 && (
                                        <div className="flex flex-col items-start gap-1">

                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-1">
                                                <span className="text-sm font-semibold">What is Pitra Dosh :</span>  <span>{doshaarr[activeDosh].what_is_pitri_dosha}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-1">
                                                <span className="text-sm font-semibold"> Pitra Dosha Causes :</span>  <span>{doshaarr[activeDosh].rules_matched}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex flex-col items-start gap-1">
                                                <span className="text-sm font-semibold"> Conclusion :</span> <span>{doshaarr[activeDosh].conclusion}</span>
                                            </div>

                                        </div>
                                    )}

                                    {doshaarr[activeDosh].id === 3 && (
                                        <div className="flex flex-col items-start gap-1">

                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex  items-start gap-1">
                                                <span className="text-sm font-semibold">Are you under the influence of SadeSati :</span>  <span>{doshaarr[activeDosh].is_undergoing_sadhesati}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex items-start gap-1">
                                                <span className="text-sm font-semibold"> Saturn Sign :</span>  <span>{doshaarr[activeDosh].saturn_sign}</span>
                                            </div>
                                            <div className="text-[#000] md:text-sm text-xs mt-2 flex  items-start gap-1">
                                                <span className="text-sm font-semibold"> Moon Sign :</span> <span>{doshaarr[activeDosh].moon_sign}</span>
                                            </div>

                                        </div>
                                    )}


                                    {/* <div className="text-[#000] md:text-sm text-xs mt-2">
                                        {natalarr[activeNatal].content}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>




                </div>



                <div className="kundli-side flex flex-col items-center justify-start gap-3">
                    <Ytvideo />
                    <Bestsell />
                    {/* <Sidebanner /> */}
                </div>
            </div>

            <Freereport />
            <Recastro />
            <FAQue />
            <Callchatsec />

        </section>

    );
}
