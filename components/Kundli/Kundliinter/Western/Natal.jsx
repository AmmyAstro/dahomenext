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

const westernarr = [
    {
        "name": "Sun",
        "full_degree": 275.6427,
        "norm_degree": 5.6427,
        "speed": 1.019,
        "is_retro": "false",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 2,
        "asp": "Sun",
        "astdp": "Neptune",
        "type": "Conjunction",
    },
    {
        "name": "Moon",
        "full_degree": 12.271,
        "norm_degree": 12.271,
        "speed": 13.5085,
        "is_retro": "false",
        "sign_id": 1,
        "sign": "Aries",
        "house": 5,
        "asp": "Sun",
        "astdp": "Midheaven",
        "type": "Trine",
    },
    {
        "name": "Mars",
        "full_degree": 232.2381,
        "norm_degree": 22.2381,
        "speed": 0.6621,
        "is_retro": "false",
        "sign_id": 8,
        "sign": "Scorpio",
        "house": 12,
        "asp": "Moon",
        "astdp": "Mercury",
        "type": "Square",
    },
    {
        "name": "Mercury",
        "full_degree": 278.3033,
        "norm_degree": 8.3033,
        "speed": 1.6049,
        "is_retro": "false",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 2,
        "asp": "Moon",
        "astdp": "Venus",
        "type": "Sextile",
    },
    {
        "name": "Jupiter",
        "full_degree": 20.033,
        "norm_degree": 20.033,
        "speed": 0.043,
        "is_retro": "false",
        "sign_id": 1,
        "sign": "Aries",
        "house": 5,
        "asp": "Moon",
        "astdp": "Neptune",
        "type": "Square",
    },
    {
        "name": "Venus",
        "full_degree": 307.0102,
        "norm_degree": 7.0102,
        "speed": 1.2339,
        "is_retro": "false",
        "sign_id": 11,
        "sign": "Aquarius",
        "house": 3,
        "asp": "Mercury",
        "astdp": "Neptune",
        "type": "Conjunction",
    },
    {
        "name": "Saturn",
        "full_degree": 264.9924,
        "norm_degree": 24.9924,
        "speed": 0.117,
        "is_retro": "false",
        "sign_id": 9,
        "sign": "Sagittarius",
        "house": 1,
        "asp": "Mercury",
        "astdp": "Pluto",
        "type": "Sextile",
    },
    {
        "name": "Uranus",
        "full_degree": 267.4199,
        "norm_degree": 27.4199,
        "speed": 0.0601,
        "is_retro": "false",
        "sign_id": 9,
        "sign": "Sagittarius",
        "house": 1,
        "asp": "Mercury",
        "astdp": "Midheaven",
        "type": "Trine",
    },
    {
        "name": "Neptune",
        "full_degree": 277.6325,
        "norm_degree": 7.6325,
        "speed": 0.0379,
        "is_retro": "false",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 2,
        "asp": "Jupiter",
        "astdp": "Saturn",
        "type": "Trine",
    },
    {
        "name": "Pluto",
        "full_degree": 221.8913,
        "norm_degree": 11.8913,
        "speed": 0.0273,
        "is_retro": "false",
        "sign_id": 8,
        "sign": "Scorpio",
        "house": 12,
        "asp": "Venus",
        "astdp": "Pluto",
        "type": "Square",
    },
    {
        "name": "Node",
        "full_degree": 357.3824,
        "norm_degree": 27.3824,
        "speed": -0.053,
        "is_retro": "true",
        "sign_id": 12,
        "sign": "Pisces",
        "house": 4,
        "asp": "Saturn",
        "astdp": "Uranus",
        "type": "Conjunction",
    },
    {
        "name": "Chiron",
        "full_degree": 85.3981,
        "norm_degree": 25.3981,
        "speed": -0.0619,
        "is_retro": "true",
        "sign_id": 3,
        "sign": "Gemini",
        "house": 7,
        "asp": "Neptune",
        "astdp": "Pluto",
        "type": "Sextile",
    },
    {
        "name": "Part of Fortune",
        "full_degree": 144.086,
        "norm_degree": 24.086,
        "speed": 0,
        "is_retro": "false",
        "sign_id": 5,
        "sign": "Leo",
        "house": 9,
        "asp": "Neptune",
        "astdp": "Midheaven",
        "type": "Trine",
    }
]

const natalarr = [
    {
        id:0,
        house: 1,
        sign: "Aquarius",
        icon: "/ds-img/s11.png",
        content:
            "Your window to the world reveals you to be an original, innovative, and somewhat unpredictable individual that enjoys the odd and unusual, the old and the futuristic. You tend to be idealistic and often hold utopian ideas; this can lead you to take on causes that protect individual freedoms, privacy, and the pursuit of happiness. You can count on many varied people to be good friends and companions, and assist in your endeavors whether for business or recreation. Your interests range from such subjects as antiquities and ancient beliefs, to modern science, new inventions, electronics, and computer technology. There is little that can be hidden or with-held from you because of your inquiring mind and innate sense of intuition.",
    },
    {
        id:1,
        house: 2,
        sign: "Pisces",
        icon: "/ds-img/s2.png",
        content:
            "Your window to the world reveals you to be an original, innovative, and somewhat unpredictable individual that enjoys the odd and unusual, the old and the futuristic. You tend to be idealistic and often hold utopian ideas; this can lead you to take on causes that protect individual freedoms, privacy, and the pursuit of happiness. You can count on many varied people to be good friends and companions, and assist in your endeavors whether for business or recreation. Your interests range from such subjects as antiquities and ancient beliefs, to modern science, new inventions, electronics, and computer technology. There is little that can be hidden or with-held from you because of your inquiring mind and innate sense of intuition.",
    },
    {
        id:2,
        house: 3,
        sign: "Aries",
        icon: "/ds-img/s3.png",
        content:
            "Matters dealing with the financial side of your life can bring opportunities from a variety of sources, and many of these sources could spring from unknown origins. The success or failure of your financial endeavors would hinge mainly on your own ability to recognize the inherent risks associated with these endeavors. One such risk might occur in not being able to obtain full disclosure about an impending transaction, or not being made aware of all the ramifications once a deal is closed. There could be hidden conditions that if known might cause you to change your mind. It need not be all this mysterious if you avoid rushing into situations before fully checking them out. You are inclined to possess a natural psychic sense that gives you the ability to see through any deception or false front.",
    },
    {
        id:3,
        house: 4,
        sign: "Taurus",
        icon: "/ds-img/s4.png",
        content:
            "You have a strong inclination to build things, or design them, and your studies may lead you to engineering or architectural degrees. Your quick mind often brings visualization of a project, although patience is needed to see it brought to reality. You may be inclined to travel in regard to business, particularly by car. The desire to seek out new places, or investigate old ones, ought to make travel enjoyable, especially when combined with business trips. Relationships with relatives and neighbors can become strained at times, and produce some form of friction. This is often the result of poor communications, or none at all; keep everyone informed, particularly when their interests are involved. Your correspondence may be somewhat irregular at times, especially with routine contacts. Emergencies tend to bring your immediate response.",
    },
    {
        id:4,
        house: 5,
        sign: "Gemini",
        icon: "/ds-img/s5.png",
        content: "You enjoy the comforts of your home, and it is often the social center for relatives and friends. You take special pride in seeing that your life is full of beauty, and tend to surround yourself with flowers and objects of art. Members of the family may fill the house with music, or play various instruments, especially the piano. Your early growing years may have been happy and filled with love by those around you. It is important for your health and well-being that there is peace and harmony within the home, and that your creative projects have a place for open and free expression. The indication is for a long and happy life, and the end is apt to be peaceful.",
    },
    {
        id:5,
        house: 6,
        sign: "Cancer",
        icon: "/ds-img/s6.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:6,
        house: 7,
        sign: "Leo",
        icon: "/ds-img/s7.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:7,
        house: 8,
        sign: "Virgo",
        icon: "/ds-img/s8.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:8,
        house: 9,
        sign: "Libra",
        icon: "/ds-img/s9.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:9,
        house: 10,
        sign: "Scorpio",
        icon: "/ds-img/s10.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:10,
        house: 11,
        sign: "Sagittarius",
        icon: "/ds-img/s111.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
    {
        id:11,
        house: 12,
        sign: "Capricorn",
        icon: "/ds-img/s12.png",
        content:
            "You tend to take an intellectual approach to the affairs of the heart. Courtship is a time of discovery in getting to know the other person; communication is important in establishing the bonds of intimacy. Your social life tends to be a whirl, and you like to 'get-around' where the action is happening. Others like to congregate around you because of your easy going and light hearted nature; you are not usually bound by strong emotional needs, and have the ability to think things through in a clear and logical way. The indication is for a small family, or no children at all, although many factors are at work in this area. You are not inclined to take risks where investments are concerned, and you could do well with stocks and bonds, newspapers, and all aspects of computers including networking and software.",
    },
];


function roundUp(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
}
export default function Natal() {
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
                                <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Western Horoscope</h5>
                                <div className="basic-box flex flex-col gap-3 text-[#000]">
                                    <div className="pl-ul grid grid-cols-9 bg-purple-400 rounded-lg px-5 py-2">
                                        <h5 className="text-sm font-semibold">Planet</h5>
                                        <h5 className="text-sm font-semibold">Sign</h5>
                                        <h5 className="text-sm font-semibold">Sign ID</h5>
                                        <h5 className="text-sm font-semibold">Degree</h5>
                                        <h5 className="text-sm font-semibold">Retro(R)</h5>
                                        <h5 className="text-sm font-semibold">House</h5>
                                        <h5 className="text-sm font-semibold">Aspecting Planet</h5>
                                        <h5 className="text-sm font-semibold">Aspected Planet</h5>
                                        <h5 className="text-sm font-semibold">Type</h5>

                                    </div>

                                    {westernarr.map((westt, index) => (
                                        <div key={index} className="basic-card grid grid-cols-9 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                            <span className="text-sm">{westt.name}</span>
                                            <span className="text-sm">{westt.sign}</span>
                                            <span className="text-sm">{westt.sign_id}</span>
                                            <span className="text-sm">{roundUp(westt.norm_degree, 3)}</span>
                                            <span className="text-sm">{westt.is_retro}</span>
                                            <span className="text-sm">{westt.house}</span>
                                            <span className="text-sm">{westt.asp}</span>
                                            <span className="text-sm">{westt.astdp}</span>
                                            <span className="text-sm">{westt.type}</span>

                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="natal-cusps-rep flex flex-col p-5 shadow-lg rounded-lg">
                                <h5 className="text-xl font-semibold text-[#000] text-center">Natal House Cusp Report</h5>
                                <div className="mob-dsp-none py-3 flex flex-wrap gap-3 items-center justify-between">
                                    {natalarr.map((natal,index) => (
                                        <div key={index} className="zod-det-mob-card">
                                            <p
                                                onClick={() => setActiveNatal(natal.id)}
                                                className={`bg-gradient-to-r from-[#ffffff] to-[#fffffff4] flex items-center border text-[#000] rounded-lg shadow-lg justify-center md:w-48 w-38  py-2  gap-2 cursor-pointer transition-all ${activeNatal === natal.id
                                                    ? "border border-white shadow-lg"
                                                    : ""
                                                    }`}
                                            >
                                                <Image
                                                    alt="natal image"
                                                    className="zodiac-imgs"
                                                    loading="lazy"
                                                    width={25}
                                                    height={25}
                                                    src={natal.icon}
                                                />
                                                <span className="text-xs">{natal.sign}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="car-swn-zod-det position-relative mt-4">
                                    <div className="horoscope_single_box rounded-lg border-2 border-violet-300 p-3">
                                        <div className="horoscope_single_heading flex items-center gap-4">
                                            <div className="horoscope_single_image">
                                                <Image
                                                    alt={natalarr[activeNatal].sign}
                                                    width={30}
                                                    height={30}
                                                    loading="lazy"
                                                    src={natalarr[activeNatal].icon}
                                                    className="w-7 h-7"
                                                />
                                            </div>
                                            <div className="horoscope_single_title">
                                                <h3 className="text-[#000] md:text-base text-xs">
                                                    {natalarr[activeNatal].sign}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="text-[#000] md:text-sm text-xs mt-2">
                                            {natalarr[activeNatal].content}
                                        </div>
                                    </div>
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
