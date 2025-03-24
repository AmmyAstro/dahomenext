"use client";

import Image from "next/image";
import Link from "next/link";
import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";
import Kundliother from "@/components/Smcompo/Kunother";


const general = [
    {
        "name": "Physical",
        "para": "He is of medium size, with less hair, large forehead, bright eyes, beautiful teeth. His complexion will be ruddy and fairly long neck and face. It has been found that if birth takes place during mid-day, the native is very tall. His head will be broad at the temples and narrow at the chin. Bushy eye brows.",
    },
    {
        "name": "Character",
        "para": "He is of medium size, with less hair, large forehead, bright eyes, beautiful teeth. His complexion will be ruddy and fairly long neck and face. It has been found that if birth takes place during mid-day, the native is very tall. His head will be broad at the temples and narrow at the chin. Bushy eye brows.",
    },
    {
        "name": "Education",
        "para": "He is of medium size, with less hair, large forehead, bright eyes, beautiful teeth. His complexion will be ruddy and fairly long neck and face. It has been found that if birth takes place during mid-day, the native is very tall. His head will be broad at the temples and narrow at the chin. Bushy eye brows.",
    },
    {
        "name": "Family",
        "para": "He is of medium size, with less hair, large forehead, bright eyes, beautiful teeth. His complexion will be ruddy and fairly long neck and face. It has been found that if birth takes place during mid-day, the native is very tall. His head will be broad at the temples and narrow at the chin. Bushy eye brows.",
    },
    {
        "name": "Health",
        "para": "He is of medium size, with less hair, large forehead, bright eyes, beautiful teeth. His complexion will be ruddy and fairly long neck and face. It has been found that if birth takes place during mid-day, the native is very tall. His head will be broad at the temples and narrow at the chin. Bushy eye brows.",
    }
]
const personalm = [
    {
        "pmn": "9",
        "consim": "11",
        "rep": "This is a time for PURGING yourself from the past, enabling the future to bring new experiences. The past comes alive through memories of both good and bad times. If you were married during the 8 year, cycle or month, then the 9 year, cycle or month can be considered the \"getting to know you\" syndrome, where all of your programming from your single days can be changed very quickly into \"we\" and how we operate as a unit, instead of \"me\" as a single entity. Old habits and thoughts die hard and the mighty 9 sees to it that thoughts and attitudes that need to be changed so that you can function as a unit, die or are modified. This may very well prove to be a very \"Frustrating\" time for you as we hold on to the old and try to reject the new. The 9 also gives us the ability to put others before ourselves, to help your new partner feel comfortable in a different environment, especially if they are moving into your home and they may feel somewhat uncomfortable in your space.",
    },

]



export default function General() {

    return (

        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">

                    <span className="text-xl text-[#fff] text-center font- bg-[#2f1254] rounded-full px-10 py-2 w-full shadow-lg">Dhwani Astro Kundli Birth Chart & Planetry Positions </span>

                    <div className="general-life">
                        <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">General Life Reports</h5>
                        <div className="basic-box flex flex-col gap-5">
                            {general.map((gen, index) => (
                                <div key={index} className="basic-card flex flex-col items-center justify-center gap-2 border shadow-lg px-2 py-2 rounded-lg">
                                    <h5 className="text-[#000] text-sm font-semibold rounded-full bg-purple-300 px-15 py-1.5">{gen.name}</h5>
                                    <p className="text-[#000] text-sm " >{gen.para} </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="general-life">
                        <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Personal Day Prediction</h5>
                        <div className="basic-box flex flex-col gap-5">
                            {personalm.map((perm, index) => (
                                <div key={index} className="basic-card flex flex-col items-start justify-start gap-2 border shadow-lg px-2 py-2 rounded-lg">
                                    <h5 className="text-[#000] text-sm font-semibold rounded-full bg-purple-300 px-5 py-1.5"><span>Personal Day Number</span> : <span>{perm.pmn}</span></h5>
                                    <span className="text-[#000] text-sm font-semibold rounded-full bg-purple-200 px-5 py-1.5"><span>Considered Date </span> : <span>{perm.consim}</span></span>
                                    <p className="text-[#000] text-sm " >{perm.rep} </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="general-life">
                        <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Personal Month Prediction</h5>
                        <div className="basic-box flex flex-col gap-5">
                            {personalm.map((perm, index) => (
                                <div key={index} className="basic-card flex flex-col items-start justify-start gap-2 border shadow-lg px-2 py-2 rounded-lg">
                                    <h5 className="text-[#000] text-sm font-semibold rounded-full bg-purple-300 px-5 py-1.5"><span>Personal Month Number</span> : <span>{perm.pmn}</span></h5>
                                    <span className="text-[#000] text-sm font-semibold rounded-full bg-purple-200 px-5 py-1.5"><span>Considered Month </span> : <span>{perm.consim}</span></span>
                                    <p className="text-[#000] text-sm " >{perm.rep} </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="general-life">
                        <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Personal Year Prediction</h5>
                        <div className="basic-box flex flex-col gap-5">
                            {personalm.map((perm, index) => (
                                <div key={index} className="basic-card flex flex-col items-start justify-start gap-2 border shadow-lg px-2 py-2 rounded-lg">
                                    <h5 className="text-[#000] text-sm font-semibold rounded-full bg-purple-300 px-5 py-1.5"><span>Personal Year Number</span> : <span>{perm.pmn}</span></h5>
                                    <span className="text-[#000] text-sm font-semibold rounded-full bg-purple-200 px-5 py-1.5"><span>Considered Year </span> : <span>{perm.consim}</span></span>
                                    <p className="text-[#000] text-sm " >{perm.rep} </p>
                                </div>
                            ))}
                        </div>
                    </div>





                </div>



                <div className="kundli-side flex flex-col items-center justify-start gap-3">

                    <Kundliother />
                    <Bestsell />
                    <Sidebanner />
                    <Ytvideo/>
                </div>
            </div>

            <Freereport />
            <Recastro />
            <FAQue />
            <Callchatsec />

        </section>


    );
}

