'use client';

import { useState } from "react";
import Image from "next/image"; // ✅ REQUIRED!

import Pujasugg from "./Pujasugg";
import Gemsugg from "./Gemsugg";
import Rudrasugg from "./Rudrasugg";

const suggarr = [
    {
        id: "pujasugg",
        label: "Puja Suggestions & Remedies ",
        src: "/ds-img/onpooja.webp",
        component: <Pujasugg />,
    },
    {
        id: "gemsugg",
        label: "Gemstones Suggestions ",
        src: "/ds-img/diamond.png",
        component: <Gemsugg />,
    },
    {
        id: "rudrasugg",
        label: "Rudraksha Suggestions",
        src: "/ds-img/cultural-celebration.png",
        component: <Rudrasugg />,
    },
];

export default function Suggestion() {
    const [sugTab, setSugTab] = useState("pujasugg");

    return (
        <section className="basic-ul-main w-full">
            <div className="flex flex-col gap-1">
                <h5 className="text-sm text-center md:text-xl text-[#000] font-semibold">
                    <span className="text-red-500 text-xl">"Suggestions & Remedies  : </span>
                    according to your Kundli"
                </h5>      
                  <div className="basic-list">
                    <div className="basic-li flex bg-purple-50 rounded-lg border border-purple-100 py-5 items-center gap-5 justify-center">
                        {suggarr.map((sugg) => (
                            <div
                                key={sugg.id}
                                onClick={() => setSugTab(sugg.id)}
                                className={`cursor-pointer flex flex-col items-center justify-center lg:px-5 text-xs px-2 py-1 md:text-base lg:py-1 rounded-lg ${sugTab === sugg.id ? "bg-purple-300 text-black" : "text-black"
                                    }`}
                            >
                                <Image
                                    src={sugg.src}
                                    alt="suggestions images"
                                    height={40}
                                    width={40}
                                />
                                {sugg.label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="basic-down py-5">
                    {suggarr.find((sugg) => sugg.id === sugTab)?.component}
                </div>
            </div>
        </section>
    );
}
