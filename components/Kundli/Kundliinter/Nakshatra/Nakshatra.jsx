'use client'

import { useState } from "react";
import Nakprev from "./Nakprev";
import Naktoday from "./Naktoday";
import Naktomm from "./Naktomm";

const nakarr = [
    { id: "nakprev", label: "Yesterday Nakshatra ", component: < Nakprev/> },
    { id: "naktoday", label: "Today Nakshatra ", component: <Naktoday /> },
    { id: "naktomm", label: "Tomorrow Nakshatra", component: <Naktomm /> }
]

const consolarr = [
    {
        "birth_moon_sign": "Leo",
        "birth_moon_nakshatra": "Magha",
        "prediction": "Avoid rich foods or else there is a likelihood of a stomach problem. Anxiety can be the cause of some health related problems today. You tend to worry too much. Remain alert while driving and while taking up a journey. You may have difference of opinion with your spouse. You may find your domestic front troublesome for your normal peace of mind. Be on your guard against deceit. A foe in the garb of friend may betray your trust. Today is not a day to depend upon your luck. You shall have to carve out your own fate by your efforts.",
        "prediction_date": "17 June 2017"
    }
]
export default function Nakshatra() {
    const [nakkTab, setNakTab] = useState("naktoday");

    return (
        <section className="basic-ul-main w-full">

            <div className="flex flex-col gap-1">
            <h5 className="text-xl md:text-xl text-[#000] font-semibold text-center">
                        <span className="text-red-500">"Nakshatra : </span>
                        Report"
                    </h5>                <div className="basic-list bg-[#2f1254] px-10 py-2 rounded-lg">
                    <ul className="basic-li flex items-center gap-5 justify-self-center self-center">
                        {nakarr.map((ntab) => (
                            <li
                                key={ntab.id}
                                onClick={() => setNakTab(ntab.id)}
                                className={`cursor-pointer lg:px-5 text-xs px-2 py-1 md:text-base lg:py-1 rounded-full ${nakkTab === ntab.id ? "bg-purple-500 text-white" : " text-white"
                                    }`}     >
                                {ntab.label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="basic-down py-5">
                    {nakarr.find((ntab) => ntab.id === nakkTab)?.component}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div>
                    {consolarr.map((carr, index) => (
                        <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                            <div className="flex flex-col gap-2">
                                <span className="text-center text-xl">Consolidated Nakshatra Prediction </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 gap-5 md:gap-10 text-sm">
                                    <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full  px-5 py-2 "><span className="font-semibold">Birth Moon Sign : </span> <span>{carr.birth_moon_sign}</span></div>
                                    <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full px-5 py-2"><span className="font-semibold">Birth Moon Nakshatra : </span> <span>{carr.birth_moon_nakshatra}</span></div>

                                </div>
                                <div className="pred-day flex flex-col gap-2 text-[#000] text-sm">
                                    <div className="flex flex-col gap-0"><span className="font-semibold">Prediction : </span><span>{carr.prediction}</span></div>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );




}