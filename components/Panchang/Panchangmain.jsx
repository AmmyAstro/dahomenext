"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import Bestsell from "../Smcompo/Bestsell";
import FAQue from "../FAQue";
import Kundlioth from "../Smcompo/Kundlioth";
import Sidebanner from "../Smcompo/Sidebanner";
import Kunservice from "../Smcompo/Kunservice";
import Callchatsec from "../CallChatsec/Callchatsec";
import Recastro from "../Smcompo/Recastro";
import Freereport from "../Smcompo/Freereport";

export default function Panchangmain() {
    const pancharr = [
        {
            "day": "Wednesday",
            "sunrise": "7:3:17",
            "sunset": "18:43:38",
            "moonrise": "10:59:45",
            "moonset": "0:9:13",
            "tithi": {
                "details": {
                    "tithi_number": 7,
                    "tithi_name": "Shukla-Saptami",
                    "special": "Bhadra Tithi",
                    "summary": "Favourable for starting any new work, debate, beginning of a journey and physical exercise.",
                    "deity": "Indra"
                },
                "end_time": {
                    "hour": 10,
                    "minute": 55,
                    "second": 8
                }
            },
            "nakshatra": {
                "details": {
                    "nak_number": 3,
                    "nak_name": "Krittika",
                    "ruler": "Sun",
                    "deity": "Agni",
                    "special": "Adhomukh Nakshatra",
                    "summary": "This nakshatra is of a mixed quality. Good for immediate actions, competition, work with metals. It is suitable to perform the routine activities, day-to-day duties, but it is not recommended to start new important deeds."
                },
                "end_time": {
                    "hour": 17,
                    "minute": 48,
                    "second": 8
                }
            },
            "yog": {
                "details": {
                    "yog_number": 26,
                    "yog_name": "Endra",
                    "special": "Auspicious yoga,Good for all Auspicious Deeds.",
                    "meaning": "(Chief) — interest in education and knowledge; helpful, well-off."
                },
                "end_time": {
                    "hour": 7,
                    "minute": 57,
                    "second": 19
                }
            },
            "karan": {
                "details": {
                    "karan_number": 7,
                    "karan_name": "Vanija",
                    "special": "It is suited for sale transactions and sellers may reap good profits whereas buyers may incur losses in this Karana.",
                    "deity": "Manibhadra"
                },
                "end_time": {
                    "hour": 10,
                    "minute": 57,
                    "second": 8
                }
            },
            "hindu_maah": {
                "adhik_status": false,
                "purnimanta": "Phalguna",
                "amanta": "Phalguna"
            },
            "paksha": "Shukla-Paksha",
            "ritu": "Shishir",
            "sun_sign": "Aquarius",
            "moon_sign": "Taurus",
            "ayana": "Uttarayana",
            "panchang_yog": " Sarvarth Siddhi Yog",
            "vikram_samvat": 2071,
            "shaka_samvat": 1936,
            "shaka_samvat_name": "Jay",
            "vkram_samvat_name": "Plavang",
            "disha_shool": "NORTH",
            "disha_shool_remedies": [],
            "nak_shool": "none",
            "moon_nivas": "SOUTH",
            "abhijit_muhurta": {
                "start": "12:29",
                "end": "01:15"
            },
            "rahukaal": {
                "start": "12 : 52 : 59",
                "end": "2 : 20 : 29"
            },
            "guliKaal": {
                "start": "11 : 25 : 29",
                "end": "12 : 52 : 59"
            },
            "yamghant_kaal": {
                "start": "08 : 30 : 29",
                "end": "09 : 57 : 59"
            }
        }
    ]
    return (
        <section className="kundli-main-page py-5">
            <div className="kundli-page md:max-w-7xl  justify-self-center flex flex-col gap-5 items-center justify-center p-2">
                <div className="kundloi-top flex flex-col">
                    <h5 className="text-sm text-center md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Today's Panchang : </span>
                        (AAJ KA PANCHANG)"
                    </h5>
                    <div className="kundli-img-txt flex flex-col items-start ">
                        <div className="flex items-center justify-between gap-10">
                            <Image
                                alt="ganesh ji image"
                                className="kundli-imgs hidden md:block w-80 h-50 rounded-lg"
                                loading="lazy"
                                width={100}
                                height={100}
                                src="/ds-img/ganeshji-img.jpg" />

                            <div className="kundli-para flex flex-col text-[#000] text-sm md:text-sm">
                                <p>Panchang is the Hindu calender followed by Vedic astrology, which provides complete detailson each day's Tithis and auspicious and inauspicious timings.
                                    Today's panchang on anytime astro is based on Vijay Vishwa Panchang, which is the rarestof Panchang, used by Astrologers for hundreds of years. Through Daily Panchang,
                                    you can get all the information about the time, date, and day to determine teh Muhurat for everything. Astrologers suggest people should follow the Day
                                    Panchang while doing new work for performing any auspicious event.</p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="kundli-sec-side-item w-full ">
                    <div className="kundli-side flex flex-col md:grid grid-cols-4 gap-5">

                        <div className="kundli-section col-span-4 flex flex-col gap-5">
                            <div className="w-[80%]  p-6 bg-[#dfc7fd] shadow-lg self-center place-self-center rounded-lg">
                                <div className="text-[#000] flex justify-between items-center "><span className="text-base flex gap-1 items-center font-semibold text-[#000]">
                                    <FaLocationDot />
                                    <span> New Delhi , NCT, INDIA</span> , <span>June 11 2024</span></span>
                                    <div className="panchdate flex items-center gap-10">
                                        <div className="bg-[#fff] px-2 py-1 rounded-md">
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className=" flex gap-1 items-center bg-[#fff] px-2 py-1 rounded-lg">
                                            <input type="text" className="form-control" />
                                            <span className=" bg-[#2f1254]  rounded-lg p-1"><BiCurrentLocation className="text-[#fff]" /></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-5 text-[#000] gap-5">
                                <div className="grid col-span-3">
                                    <div className="flex flex-col rounded-lg border border-purple-200">
                                        <div className="flex items-center justify-center gap-10 p-5">
                                            <div className="flex flex-col bg-purple-200 rounded-lg px-10 py-4 gap-2">
                                                <span className="flex items-center gap-2"><FaSun className="text-yellow-400 text-2xl" /><span className="font-semibold">Sunrise</span></span>
                                                <span>07:05 - 17:26</span>
                                            </div>
                                            <div className="flex flex-col bg-purple-200 rounded-lg px-10 py-4 gap-2">
                                                <span className="flex items-center gap-2"><FaMoon className="text-white text-2xl" /><span className="font-semibold">Moonrise</span></span>
                                                <span>07:05 - 17:26</span>
                                            </div>
                                        </div>

                                        <div className="panch-table flex flex-col text-sm">

                                            {pancharr.map((pary, index) => (
                                                <div key={index} className="flex flex-col gap-1  px-10">
                                                    <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                        <span className="font-semibold">Day</span> <span>{pary.day}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                        <span className="font-semibold">Sunrise</span> <span>{pary.sunrise}</span>
                                                    </div>     <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                        <span className="font-semibold">Sunset</span> <span>{pary.sunset}</span>
                                                    </div>     <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                        <span className="font-semibold">Moonrise</span> <span>{pary.moonrise}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                        <span className="font-semibold">Moonset</span> <span>{pary.moonset}</span>
                                                    </div>
                                                    <div className="tithi">
                                                        <h5 className="font-semibold text-center">Tithi Deatils :</h5>
                                                     
                                                            <div key={index} className="flex flex-col gap-1  ">
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Tithi Number</span> <span>{pary.tithi.details.tithi_number}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Tithi Number</span> <span>{pary.tithi.details.tithi_name}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Special Tithi</span> <span>{pary.tithi.details.special}</span>
                                                                </div>
                                                                <div className="gap-25 flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Summary</span> <span>{pary.tithi.details.summary}</span>
                                                                </div>
                                                            </div>
                                                
                                                    </div>
                                                    <div className="tithi">
                                                        <h5 className="font-semibold text-center">Nakshatra Deatils :</h5>
                                                     
                                                            <div key={index} className="flex flex-col gap-1  ">
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Nakshatra Number  :</span> <span>{pary.nakshatra.details.nak_number}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Nakshatra Name  :</span> <span>{pary.nakshatra.details.nak_name}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Ruler  :</span> <span>{pary.nakshatra.details.ruler}</span>
                                                                </div>
                                                                <div className="gap-25 flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Deity  :</span> <span>{pary.nakshatra.details.deity}</span>
                                                                </div>
                                                                <div className="gap-25 flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Special  :</span> <span>{pary.nakshatra.details.special}</span>
                                                                </div>
                                                                <div className="gap-25 flex items-center justify-between rounded-lg bg-purple-100 px-10 py-1">
                                                                    <span className="font-semibold">Summary  :</span> <span>{pary.nakshatra.details.summary}</span>
                                                                </div>
                                                            </div>
                                                
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid col-span-2">hello</div>
                            </div>


                        </div>

                        <div className="side-sec">
                            <div className="k-side-top w-full border-0 rounded-lg flex flex-col gap-5">
                                <Bestsell />
                                <Kunservice />
                                <Sidebanner />
                            </div>
                        </div>

                    </div>

                    <Freereport />

                    <Recastro />
                </div>
            </div>

            <FAQue />
            <Callchatsec />

        </section>
    );
}
