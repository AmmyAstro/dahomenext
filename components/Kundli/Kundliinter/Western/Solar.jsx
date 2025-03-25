"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";
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

const solararr = [
    {
        "solar_return_planet": "Sun",
        "aspecting_planet": "Mars",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Sun",
        "aspecting_planet": "Mars",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Sun",
        "aspecting_planet": "Jupiter",
        "type": "Opposition",
    },
    {
        "solar_return_planet": "Moon",
        "aspecting_planet": "Mars",
        "type": "Square",
    },
    {
        "solar_return_planet": "Moon",
        "aspecting_planet": "Mercury",
        "type": "Opposition",
    },
    {
        "solar_return_planet": "Moon",
        "aspecting_planet": "Venus",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Mars",
        "aspecting_planet": "Mercury",
        "type": "Conjunction",
    },
    {
        "solar_return_planet": "Mars",
        "aspecting_planet": "Venus",
        "type": "Sextile",
    },
    {
        "solar_return_planet": "Mars",
        "aspecting_planet": "Saturn",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Mars",
        "aspecting_planet": "Rahu",
        "type": "Square",
    },
    {
        "solar_return_planet": "Mars",
        "aspecting_planet": "Ketu",
        "type": "Square",
    },
    {
        "solar_return_planet": "Mercury",
        "aspecting_planet": "Mars",
        "type": "Square",
    },
    {
        "solar_return_planet": "Mercury",
        "aspecting_planet": "Venus",
        "type": "Sextile",
    },
    {
        "solar_return_planet": "Mercury",
        "aspecting_planet": "Saturn",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Jupiter",
        "aspecting_planet": "Mars",
        "type": "Square",
    },
    {
        "solar_return_planet": "Jupiter",
        "aspecting_planet": "Mercury",
        "type": "Conjunction",
    },
    {
        "solar_return_planet": "Jupiter",
        "aspecting_planet": "Venus",
        "type": "Sextile",
    },
    {
        "solar_return_planet": "Venus",
        "aspecting_planet": "Mars",
        "type": "Square",
    },
    {
        "solar_return_planet": "Venus",
        "aspecting_planet": "Mercury",
        "type": "Conjunction",
    },
    {
        "solar_return_planet": "Venus",
        "aspecting_planet": "Saturn",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Saturn",
        "aspecting_planet": "Rahu",
        "type": "Sextile",
    },
    {
        "solar_return_planet": "Saturn",
        "aspecting_planet": "Ketu",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Rahu",
        "aspecting_planet": "Mercury",
        "type": "Trine",
    },
    {
        "solar_return_planet": "Rahu",
        "aspecting_planet": "Venus",
        "type": "Opposition",
    },
    {
        "solar_return_planet": "Ketu",
        "aspecting_planet": "Mercury",
        "type": "Sextile",
    },
    {
        "solar_return_planet": "Ketu",
        "aspecting_planet": "Venus",
        "type": "Conjunction",
    }
]

const returnarr = [
    {
        id: 0,
        sign: "Aquarius",
        plnt: "Mercury",
        content:
            "Your window to the world reveals you to be an original, innovative, and somewhat unpredictable individual that enjoys the odd and unusual, the old and the futuristic. You tend to be idealistic and often hold utopian ideas; this can lead you to take on causes that protect individual freedoms, privacy, and the pursuit of happiness. You can count on many varied people to be good friends and companions, and assist in your endeavors whether for business or recreation. Your interests range from such subjects as antiquities and ancient beliefs, to modern science, new inventions, electronics, and computer technology. There is little that can be hidden or with-held from you because of your inquiring mind and innate sense of intuition.",
    },
    {
        id: 1,
        retro: "true",
        sign: "Pisces",
        plnt: "Mercury",
        content:
            "Your window to the world reveals you to be an original, innovative, and somewhat unpredictable individual that enjoys the odd and unusual, the old and the futuristic. You tend to be idealistic and often hold utopian ideas; this can lead you to take on causes that protect individual freedoms, privacy, and the pursuit of happiness. You can count on many varied people to be good friends and companions, and assist in your endeavors whether for business or recreation. Your interests range from such subjects as antiquities and ancient beliefs, to modern science, new inventions, electronics, and computer technology. There is little that can be hidden or with-held from you because of your inquiring mind and innate sense of intuition.",
    },
    {
        id: 2,
        retro: "true",
        sign: "Aries",
        plnt: "Mercury",
        content:
            "Matters dealing with the financial side of your life can bring opportunities from a variety of sources, and many of these sources could spring from unknown origins. The success or failure of your financial endeavors would hinge mainly on your own ability to recognize the inherent risks associated with these endeavors. One such risk might occur in not being able to obtain full disclosure about an impending transaction, or not being made aware of all the ramifications once a deal is closed. There could be hidden conditions that if known might cause you to change your mind. It need not be all this mysterious if you avoid rushing into situations before fully checking them out. You are inclined to possess a natural psychic sense that gives you the ability to see through any deception or false front.",
    },
    {
        id: 3,
        retro: "true",
        sign: "Taurus",
        plnt: "Mercury",
        content:
            "You have a strong inclination to build things, or design them, and your studies may lead you to engineering or architectural degrees. Your quick mind often brings visualization of a project, although patience is needed to see it brought to reality. You may be inclined to travel in regard to business, particularly by car. The desire to seek out new places, or investigate old ones, ought to make travel enjoyable, especially when combined with business trips. Relationships with relatives and neighbors can become strained at times, and produce some form of friction. This is often the result of poor communications, or none at all; keep everyone informed, particularly when their interests are involved. Your correspondence may be somewhat irregular at times, especially with routine contacts. Emergencies tend to bring your immediate response.",
    },
    {
        id: 4,
        retro: "true",
        sign: "Gemini",
        plnt: "Mercury",
        content: "You enjoy the comforts of your home, and it is often the social center for relatives and friends. You take special pride in seeing that your life is full of beauty, and tend to surround yourself with flowers and objects of art. Members of the family may fill the house with music, or play various instruments, especially the piano. Your early growing years may have been happy and filled with love by those around you. It is important for your health and well-being that there is peace and harmony within the home, and that your creative projects have a place for open and free expression. The indication is for a long and happy life, and the end is apt to be peaceful.",
    },
    {
        id: 5,
        retro: "true",
        sign: "Cancer",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 6,
        retro: "true",
        sign: "Leo",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 7,
        retro: "true",
        sign: "Virgo",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 8,
        house: 9,
        sign: "Libra",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 9,
        retro: "true",
        sign: "Scorpio",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 10,
        retro: "true",
        sign: "Sagittarius",
        plnt: "Mercury",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id: 11,
        retro: "true",
        sign: "Capricorn",
        plnt: "Cancer",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
];


function roundUp(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
}
export default function Solar() {
    const [activeNatal, setActiveNatal] = useState(0);

    return (


        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">

                    <section className="basic-details-main">
                        <div className="flex  gap-5 flex-col">

                            <div className="basic-det w-full">
                                <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Solar Return Planet Aspects</h5>
                                <div className="basic-box flex flex-col gap-3 text-[#000]">
                                    <div className="pl-ul grid grid-cols-3 bg-purple-400 rounded-lg px-5 py-2">
                                        <h5 className="text-sm font-semibold">Solar Return Planet</h5>
                                        <h5 className="text-sm font-semibold">Aspecting Planet</h5>
                                        <h5 className="text-sm font-semibold">Type</h5>

                                    </div>

                                    {solararr.map((solar, index) => (
                                        <div key={index} className="basic-card grid grid-cols-3 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                            <span className="text-sm">{solar.solar_return_planet}</span>
                                            <span className="text-sm">{solar.aspecting_planet}</span>
                                            <span className="text-sm">{solar.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="natal-cusps-rep flex flex-col p-5 shadow-lg rounded-lg">
                                <h5 className="text-xl font-semibold text-[#000] text-center">Solar Return Planet Report</h5>
                                <div className="mob-dsp-none py-3 flex flex-col gap-3  justify-between">
                                    {returnarr.map((rearr, index) => (
                                        <div key={index} className="zod-det-mob-card text-[#000] border border-purple-300 rounded-lg p-5">
                                            <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Planet : </h5> <span>{rearr.plnt}</span></span>
                                            <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Is Retro : </h5> <span>{rearr.retro}</span></span>
                                            <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Sign : </h5> <span>{rearr.sign}</span></span>

                                            <p className="text-sm ">{rearr.content}</p>

                                        </div>
                                    ))}
                                </div>


                            </div>

                        </div>
                    </section>





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
