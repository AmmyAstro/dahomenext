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

const numeroarr = [
    {
        name: "Demo",
        date: "6-121-2014",
        destiny_number: 8,
        radical_number: 6,
        name_number: 1,
        evil_num: "1,8",
        fav_color: "White",
        fav_day: "Thursday, Tuesday, Friday",
        fav_god: "Devi",
        fav_mantra: "|| Om Shum Shukray Namah ||",
        fav_metal: "Sillver",
        fav_stone: "Diamond, Opal",
        fav_substone: "Zircon, White Sapphire",
        friendly_num: "4,3,9",
        neutral_num: "2,5,7",
        radical_num: "6",
        radical_ruler: "Venus",
    },
];

const predarr = [
    {
        "prediction": "Do not let your past negative experience hamper your present. You might  face issues related to health. Changing your diet regime might help you feel better. Negative emotions which have been brewing since quite some time shall surface today. You shall be unusually sensitive to criticism. Avoid all activities involving physical risks. You might develop a throat problem.",
        "lucky_color": "White",
        "lucky_number": "7,9",
        "prediction_date": "17-6-2017"
    }
]

const numreparr = [
    {
        id:0,
        "title": "What the Number Says About You",
        "description": "Your Radical number is 8. The ruler of Radical number 8 is Saturn. Due to Saturns influence you will rise slowly in life. To attain success after crossing obstacles and hardships is in your nature. You will not be deterred by failures though on occasions you may sink in despair. Your staunchest enemy is lethargy and this will be the reason for your decline. Therefore, dont procrastinate. Due to Saturns influence you will do many important jobs, which will render you name, acclaim and eminence. Not many people will understand your style of work. This will create many critics. You will have less tendency for show-off. This may lead people to regard you as a rough and tough person, while deep inside your heart you are quite sentimental and kind hearted. Mostly you will concern yourself with your work. Your tendency will be to confine yourself to your business. This attitude will generate many adverse people.You will have spirit of sacrifice. You will never waver from desired exertion, dedication and sacrifice desired for an endeavour. Therefore, you will certainly attain your goal after crossing hurdles. The people under the influence of Saturn are hardworking and struggling. As they have to cross many obstacles, they attain success somewhat late but their achievements are stable and permanent."
    },
    {     id:1,
        "title": "Favourable Time For You",
        "description": " According to western view the Sun remains in Capricorn and Aquarius from 23rd December to 19th February and by Indian thought it is in these signs from 14th January to 13th March. These are the own signs of Saturn. From 17th October to 13th November the Sun is in Libra which is the exalted sign of Saturn. These dates are lucky for people of Radical number 8."
    },
    {     id:2,
        "title": "Favourable Place Vastu For You",
        "description": "Choose the west direction for your house, flat or shopping complex as for Radical number 8 West is a lucky direction. If the total of your house number is 8 it will be good. To reside in western area of a city or in Western part of your house will be beneficial. Similarly to perform your important jobs by sitting in this direction will be good for you."
    },
    {     id:3,
        "title": "Fast Vrata Timing For You",
        "description": "Observe fast on Saturday for elimination of malefic effects of Saturn. Wear black or blue clothes on these days. Observe this fast for 19 or 51 Saturdays. Massage oil on your body, donate oil and worship Peepal tree. Recite Shani mantra on beads of rudraksha as much as possible."
    },
    {     id:4,
        "title": "Favourable Lord For You",
        "description": "You should worship Saturn or Batuk Bhairav. Recite Batuk Bhairav Mantra daily 108 times on rudraksha beads. All your problems and diseases will be over. The Batuk Bhairav mantra is \"Hreem Batukay Aapdudharnay Kuru Kuru Batukay Hreem\". This mantra of 21 letters can fulfill all desires. Its recitation on ashtami (8th day of Indian calender) of Krishna paksh (dark half of lunar month) is very advantageous."
    },
    {     id:5,
        "title": "Favourable Gayatri Mantra For You",
        "description": "You should recite Sani Gayatri mantra for increasing the benefic effects of Saturn daily after bath 11, 21 or 108 times. The Sani Gayatri Mantra : ||\"Om Bhagbhavay Vidmahe Mrityuroopay Dheemahi Tanno Shanih Prachodyat\" ||"
    }
]
export default function Numerokundli() {
    const [actFav, setActfav] = useState(0);
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec ">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-20 gap-5 py-5">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-3 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Numerology & Favorability: </span>{" "}
                        Everything You Should Know"
                    </h5>
                    <section className="basic-details-main w-full flex flex-col gap-5">

                        <div>
                            {predarr.map((pred, index) => (
                                <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-center text-xl">Today's Prediction : </span>
                                        <span className="text-sm">{pred.prediction}</span>
                                    </div>
                                    <div className="grid grid-cols-2 px-20 gap-10">
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full  px-5 py-2 "><span className="font-semibold">Lucky Color : </span> <span>{pred.lucky_color}</span></div>
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full px-5 py-2"><span className="font-semibold">Lucky Number : </span> <span>{pred.lucky_number}</span></div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {numeroarr.map((numero, index) => (
                                <div className="flex flex-col gap-10">

                                    <div key={index} className="grid grid-cols-5 gap-5 text-[#000]">
                                        <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.destiny_number}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Destiny Number</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.radical_number}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Radical Number</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.name_number}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Name Number</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.evil_num}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Evil Number</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.fav_color}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Favorite Color</span>
                                        </div> <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.fav_god}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Favorite God</span>
                                        </div> <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.fav_metal}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Favorite Metal</span>
                                        </div> <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.radical_ruler}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Radical Ruler</span>
                                        </div> <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.neutral_num}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Neutral Number</span>
                                        </div> <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg gap-2 bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c]">
                                            <span className=" text-xl font-semibold">{numero.friendly_num}</span>
                                            <span className="bg-white rounded-full px-4 py-1 text-sm">Friendly Number</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="flex items-center justify-between shadow-lg rounded-lg px-4 py-3">
                                            <span className="text-[#000] font-semibold">Favorite Day</span> <span className="text-orange-400 font-semibold">{numero.fav_day}</span>
                                        </div>
                                        <div className="flex items-center justify-between shadow-lg rounded-lg px-4 py-3">
                                            <span className="text-[#000] font-semibold">Favorite Mantra</span> <span className="text-orange-400 font-semibold">{numero.fav_mantra}</span>
                                        </div>
                                        <div className="flex items-center justify-between shadow-lg rounded-lg px-4 py-3">
                                            <span className="text-[#000] font-semibold">Favorite Stone</span> <span className="text-orange-400 font-semibold">{numero.fav_stone}</span>
                                        </div> <div className="flex items-center justify-between shadow-lg rounded-lg px-4 py-3">
                                            <span className="text-[#000] font-semibold">Favorite Substance</span> <span className="text-orange-400 font-semibold">{numero.fav_substone}</span>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </div>

                        <div className="numero-rep flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg p-5">
                            <h5 className="text-xl font-semibold py-1 text-center">Numerology Reports</h5>
                            <div className="grid grid-cols-3 gap-5">
                                {numreparr.map((nrep, index) => (

                                    <div key={index} className=" gap-3">
                                        <h5 onClick={() => setActfav(nrep.id)}
                                         className={`text-sm cursor-pointer text-center bg-gradient-to-r from-[#c54e5a8a] to-[#7042ac8c] rounded-lg shadow-lg px-3 py-2 ${actFav === nrep.id ? "bg-[#00000050]" : ""}`}>{nrep.title}</h5>
                                    </div>
                                ))}

                            </div>

                            <div className="numero-det">
                                <div className=" border border-purple-100 rounded-lg shadow-lg p-5">
                                <span className="text-base font-semibold">{numreparr[actFav].title} :</span>

                                    <p>{numreparr[actFav].description}</p>
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
