"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";
import Personal from "@/components/Smcompo/Personal";
import Kundlioth from "@/components/Smcompo/Kundlioth";
import Kundliother from "@/components/Smcompo/Kunother";

const pointarr = [
    {
        id: 1,
        name: "Ashtakoota",
        src: "/ds-img/wedding-couple.png",
        nmdet: {
            "status": "true",
            "received_points": 22
        }
    },
    {
        id: 2,
        name: "Manglik",
        src: "/ds-img/ology.webp",
        nmdet: {
            "status": "true",
            "male_percentage": 18.75,
            "female_percentage": 18.75
        }
    },
    {
        id: 3,
        name: "Rajju_dosha",
        src: "/ds-img/galaxy.png",
        nmdet: {
            "status": "false"
        },
    },
    {
        id: 4,
        name: "Vedha_dosha",
        src: "/ds-img/k11.png",
        nmdet: {
            "status": "false"
        },

    },

]

const maleplanet = [
    {
        "id": 0,
        "name": "Sun",
        "fullDegree": 72.18954079246434,
        "normDegree": 12.189540792464342,
        "speed": 0.9537797443255392,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 2,
        "house": 9,
        "is_planet_set": false,
        "planet_awastha": "Yuva"
    },
    {
        "id": 1,
        "name": "Moon",
        "fullDegree": 11.72351598586304,
        "normDegree": 11.72351598586304,
        "speed": 13.920316198066743,
        "isRetro": "false",
        "sign": "Aries",
        "signLord": "Mars",
        "nakshatra": "Ashwini",
        "nakshatraLord": "Ketu",
        "nakshatra_pad": 4,
        "house": 7,
        "is_planet_set": false,
        "planet_awastha": "Kumara"
    },
    {
        "id": 2,
        "name": "Mars",
        "fullDegree": 73.41992352157277,
        "normDegree": 13.41992352157277,
        "speed": 0.6649777633290916,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 3,
        "house": 9,
        "is_planet_set": true,
        "planet_awastha": "Yuva"
    },
    {
        "id": 3,
        "name": "Mercury",
        "fullDegree": 85.49171301406825,
        "normDegree": 25.491713014068253,
        "speed": -0.29467903633858694,
        "isRetro": "true",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Punarvasu",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 2,
        "house": 9,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 4,
        "name": "Jupiter",
        "fullDegree": 35.53009646668099,
        "normDegree": 5.5300964666809875,
        "speed": 0.2119922731034037,
        "isRetro": "false",
        "sign": "Taurus",
        "signLord": "Venus",
        "nakshatra": "Krittika",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 3,
        "house": 8,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 5,
        "name": "Venus",
        "fullDegree": 76.57181911264793,
        "normDegree": 16.57181911264793,
        "speed": 1.2289765385390012,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 3,
        "house": 9,
        "is_planet_set": true,
        "planet_awastha": "Yuva"
    },
    {
        "id": 6,
        "name": "Saturn",
        "fullDegree": 32.39707346334402,
        "normDegree": 2.3970734633440216,
        "speed": 0.10910000257030411,
        "isRetro": "false",
        "sign": "Taurus",
        "signLord": "Venus",
        "nakshatra": "Krittika",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 2,
        "house": 8,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 7,
        "name": "Rahu",
        "fullDegree": 91.7592615626992,
        "normDegree": 1.7592615626991943,
        "speed": -0.05299201968813196,
        "isRetro": "true",
        "sign": "Cancer",
        "signLord": "Moon",
        "nakshatra": "Punarvasu",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 4,
        "house": 10,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 8,
        "name": "Ketu",
        "fullDegree": 271.7592615626992,
        "normDegree": 1.75926156269918,
        "speed": -0.05299201968813196,
        "isRetro": "true",
        "sign": "Capricorn",
        "signLord": "Saturn",
        "nakshatra": "Uttra Shadha",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 2,
        "house": 4,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 9,
        "name": "Ascendant",
        "fullDegree": 207.92868587120444,
        "normDegree": 27.928685871204436,
        "speed": 0,
        "isRetro": false,
        "sign": "Libra",
        "signLord": "Venus",
        "nakshatra": "Vishakha",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 3,
        "house": 1,
        "is_planet_set": false,
        "planet_awastha": "--"
    }
]

const malemang = [
    {
        "percentage_manglik_present": 23.5,
        "manglik_status": "LESS_EFFECTIVE",
        "percentage_manglik_after_cancellation": 18.5,
        "manglik_report": "The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.",
        "manglik_cancel_rule": "Mars mangalik dosha is get cancelled because Mars is situated in Eighth house with Pisces",
        "based_on_aspect": [
            "Fourth house of your birth chart is aspected by KETU",
            "Twelfth house of your birth chart is aspected by KETU.",
            "RAHU is aspecting eighth house of your birth chart.",
            "MARS is aspecting second house of your birth chart.",
            "KETU is aspecting second house of your birth chart.",
            "Your first house in birth chart is aspected by planet SUN.",
            "Your first house in birth chart is aspected by planet SATURN."
        ],
        "based_on_house": [
            "Planet Rahu is situated in SECOND house in your birth chart.",
            "Planet Saturn is in FOURTH house in your horoscope.",
            "Planet Sun is situated in SEVENTH house in your birth chart.",
            "EIGHTH house is occupied by planet Mars in your birth chart.",
            "Planet Ketu is situated in EIGHTH house in your birth chart."
        ]
    }
]

const femang = [
    {
        "percentage_manglik_present": 223.5,
        "manglik_status": "LESS_EFFECTIVE",
        "percentage_manglik_after_cancellation": 18.5,
        "manglik_cancel_rule": "Mars mangalik dosha is get cancelled because Mars is situated in Eighth house with Pisces",
        "manglik_report": "The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.",
        "based_on_house": [
            "Planet Rahu is situated in SECOND house in your birth chart.",
            "Planet Saturn is in FOURTH house in your horoscope.",
            "Planet Sun is situated in SEVENTH house in your birth chart.",
            "EIGHTH house is occupied by planet Mars in your birth chart.",
            "Planet Ketu is situated in EIGHTH house in your birth chart."
        ],
        "based_on_aspect": [
            "Fourth house of your birth chart is aspected by KETU",
            "Twelfth house of your birth chart is aspected by KETU.",
            "RAHU is aspecting eighth house of your birth chart.",
            "MARS is aspecting second house of your birth chart.",
            "KETU is aspecting second house of your birth chart.",
            "Your first house in birth chart is aspected by planet SUN.",
            "Your first house in birth chart is aspected by planet SATURN."
        ],
    }
]

const data = {
    ashtakoota: {
        varna: {
            description: "Natural Refinement  / Work",
            male_koot_attribute: "Kshatriya",
            female_koot_attribute: "Kshatriya",
            total_points: 1,
            received_points: 1,
            male_point: 1,
            female_point: 1,
        },
        vashya: {
            description: "Innate Giving / Attraction  towards each other",
            male_koot_attribute: "Chatuspad",
            female_koot_attribute: "Chatuspad",
            total_points: 2,
            received_points: 2,
            male_point: 1,
            female_point: 1,
        },
    },
};

export default function Matchkuinter() {

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec ">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-20 gap-5 py-5">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-3 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold"><span className="text-red-500">Free Match Making - Kundli Milan</span> Report
                    </h5>
                    <section className="basic-details-main w-full">

                        <div className="match-details-all flex flex-col gap-5 items-center justify-center ">
                            <div className="flex items-center gap-5 text-[#000]">
                                <h5>Boy Name</h5>
                                <Image src="/ds-img/Couple.png" alt="weds image" width={50} height={50} />
                                <h5>Girl Name</h5>
                            </div>

                            <div className="grid grid-cols-2 gap-10 text-[#000] text-[15px] w-full">
                                <div className="basicboy bg-purple-200 rounded-lg shadow-lg flex flex-col gap-1 px-8 py-4">
                                    <div><span className="font-semibold">Name : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Date & Time : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Place : </span> <span></span></div>
                                    <div><span className="font-semibold">Janam Rashi : </span> <span></span></div>
                                    <div><span className="font-semibold">Rashi Lord : </span> <span></span></div>
                                </div>
                                <div className="basicgrl bg-purple-200 rounded-lg shadow-lg flex flex-col gap-1 px-8 py-4">
                                    <div><span className="font-semibold">Name : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Date & Time : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Place : </span> <span></span></div>
                                    <div><span className="font-semibold">Janam Rashi : </span> <span></span></div>
                                    <div><span className="font-semibold">Rashi Lord : </span> <span></span></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 w-full text-[#000] gap-5">
                                {pointarr.map((point, index) => (

                                    <div className="px-2 py-2 rounded-lg shadow-lg point-bx flex gap-2 flex-col  items-center justify-center bg-gradient-to-r from-[#c54e5a6b] to-[#7042ac98]" key={index}>
                                        <Image src={point.src} width={50} height={50} alt="points image" />
                                        <h5 className="p-1 w-full rounded-full bg-white text-center text-sm font-semibold ">{point.name}</h5>
                                        <div className="p-1 w-full rounded-full bg-white text-center text-xs  "><span>Status : </span>  <span>{point.nmdet.status}</span></div>

                                        {point.id === 1 && (
                                            <div className="p-1 w-full rounded-full bg-white text-center text-xs  "><span>Points : </span>  <span>{point.nmdet.received_points}</span></div>
                                        )
                                        }

                                    </div>
                                ))}
                            </div>


                            <div className="manglik-table w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col text-[#000] text-sm gap-2">
                                        <h5 className="text-2xl font-semibold text-center bg-purple-300 rounded-lg px-3 py-1 shadow-lg">Amrender</h5>
                                        {malemang.map((malemang, index) => (
                                            < >
                                                <div key={index} className="bg-gray-200 flex flex-col gap-1 rounded-lg px-4 py-2">
                                                    <div className="flex items-center justify-between ">
                                                        <span className="font-semibold">Male Manglik percentage </span> <span>{malemang.percentage_manglik_present}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Manglik Status </span> <span>{malemang.manglik_status}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Percentage Manglik After Cancellation </span> <span>{malemang.percentage_manglik_after_cancellation}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Male Manglik percentage </span> <span>{malemang.percentage_manglik_present}</span>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-200 flex flex-col gap-1 rounded-lg p-2">
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Report : </span> <span>{malemang.manglik_report}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Cancel Rule : </span> <span>{malemang.manglik_cancel_rule}</span></div>
                                                </div>

                                                <div className="bg-gray-200 flex flex-col gap-1 rounded-lg p-2">
                                                    <span className="text-xl font-semibold">Male Manglik Present Rule :</span>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On Aspects : </span> <span>{malemang.based_on_aspect}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On House : </span> <span>{malemang.based_on_house}</span></div>
                                                </div>
                                            </>
                                        ))}
                                    </div>

                                    <div className="flex flex-col text-[#000] text-sm gap-2">
                                        <h5 className="text-2xl font-semibold text-center bg-purple-300 rounded-lg px-3 py-1 shadow-lg">Girl</h5>
                                        {femang.map((femang, index) => (
                                            < >
                                                <div key={index} className="bg-gray-200 flex flex-col gap-1 rounded-lg px-4 py-2">
                                                    <div className="flex items-center justify-between ">
                                                        <span className="font-semibold">Female Manglik percentage </span> <span>{femang.percentage_manglik_present}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Manglik Status </span> <span>{femang.manglik_status}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Percentage Manglik After Cancellation </span> <span>{femang.percentage_manglik_after_cancellation}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Female Manglik percentage </span> <span>{femang.percentage_manglik_present}</span>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-200 flex flex-col gap-1 rounded-lg p-2">
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Report : </span> <span>{femang.manglik_report}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Cancel Rule : </span> <span>{femang.manglik_cancel_rule}</span></div>
                                                </div>

                                                <div className="bg-gray-200 flex flex-col gap-1 rounded-lg p-2">
                                                    <span className="text-xl font-semibold">Female Manglik Present Rule :</span>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On Aspects : </span> <span>{femang.based_on_aspect}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On House : </span> <span>{femang.based_on_house}</span></div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <div>
                                {Object.entries(data.ashtakoota).map(([key, value]) => (
                                    <div key={key} className="border p-4 mb-2 flex rounded-lg shadow">
                                        <h2 className="font-bold text-lg capitalize">{key}</h2>
                                        <p className="text-gray-600">{value.description}</p>
                                        <ul className=" flex pl-5 list-none">
                                            <li>Male Attribute: {value.male_koot_attribute}</li>
                                            <li>Female Attribute: {value.female_koot_attribute}</li>
                                            <li>Total Points: {value.total_points}</li>
                                            <li>Received Points: {value.received_points}</li>
                                            <li>Male Points: {value.male_point}</li>
                                            <li>Female Points: {value.female_point}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>



                            <div>
                                <div className="flex items-center gap-1">

                                    <div className="grid grid-cols-1 gap-2 text-[#000] ">
                                        <div className="flex flex-col gap-1">
                                            <div className="pl-ul grid grid-cols-10 bg-purple-400 rounded-lg px-5 py-2 text-nowrap">
                                                <h5 className="text-xs font-semibold">Id</h5>
                                                <h5 className="text-xs font-semibold">Name</h5>
                                                <h5 className="text-xs font-semibold">isRetro</h5>
                                                <h5 className="text-xs font-semibold">House</h5>
                                                <h5 className="text-xs font-semibold">Sign </h5>
                                                <h5 className="text-xs font-semibold">Sign Lord</h5>
                                                <h5 className="text-xs font-semibold">Nakshatra</h5>
                                                <h5 className="text-xs font-semibold">Naksh Lord</h5>
                                                <h5 className="text-xs font-semibold">Nakshatra Pad</h5>

                                                <h5 className="text-xs font-semibold">Planet Awastha</h5>
                                            </div>

                                            {maleplanet.map((male, index) => (
                                                <div key={index} className="text-xs basic-card grid grid-cols-10 gap-1 bg-purple-200 rounded-lg px-5 py-2 text-nowrap">
                                                    <span className="text-xs">{male.id}</span>
                                                    <span className="text-xs">{male.name}</span>
                                                    <span className="text-xs">{male.isRetro}</span>
                                                    <span className="text-xs">{male.house}</span>
                                                    <span className="text-xs">{male.sign}</span>
                                                    <span className="text-xs">{male.signLord}</span>
                                                    <span className="text-xs">{male.nakshatra}</span>
                                                    <span className="text-xs">{male.nakshatraLord}</span>
                                                    <span className="text-xs">{male.nakshatra_pad}</span>

                                                    <span className="text-xs">{male.planet_awastha}</span>

                                                </div>
                                            ))}

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>




                    </section>
                </div>

                <div className="kundli-side flex flex-col items-center justify-start gap-3">
                    <Ytvideo />
                    <Kundliother />
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
