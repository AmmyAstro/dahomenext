'use client';

import { useState } from "react";

import Chardasha from "./Chardasha";
import Yoginidasha from "./Yognidasha";

const charyog = [
    {
        id: "chardasha",
        label: "Char Dasha ",
        component: <Chardasha />,
    },
    {
        id: "yognidasha",
        label: "Yogini Dasha ",
        component: <Yoginidasha />,
    },

];

export default function Charyogd() {
    const [dashaTab, setDashaTab] = useState("chardasha");

    return (
        <section className="basic-ul-main w-full">
            <div className="flex flex-col gap-1">
                <h5 className="text-sm text-center md:text-xl text-[#000] font-semibold">
                    <span className="text-red-500 text-xl">"Char Dasha & Yogini Dasha Report  : </span>
                    according to your Kundli"
                </h5>      
                  <div className="basic-list">
                    <div className="basic-li flex bg-purple-50 rounded-lg border border-purple-100 py-5 items-center gap-5 justify-center">
                        {charyog.map((chyo) => (
                            <div
                                key={chyo.id}
                                onClick={() => setDashaTab(chyo.id)}
                                className={`cursor-pointer flex flex-col items-center font-semibold justify-center lg:px-5 text-sm px-2 py-1 md:text-base lg:py-1 rounded-lg ${dashaTab === chyo.id ? "bg-purple-300 text-black" : "text-black"
                                    }`}
                            >
                                {chyo.label}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="basic-down py-5">
                    {charyog.find((chyo) => chyo.id === dashaTab)?.component}
                </div>
            </div>
        </section>
    );
}
