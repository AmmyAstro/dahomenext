"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import {
    FaGrinHearts,
    FaRegCommentDots,
    FaEye,
    FaCalendarAlt,
    FaHeart,
} from "react-icons/fa";
import Callchatsec from "../CallChatsec/Callchatsec";

const horoarr = [
    { name: "Horoscope", smanme: "H" },
    { name: "Festivals", smanme: "F" },
    { name: "Transits & Retrograde", smanme: "T" },
    { name: "Celebrities", smanme: "C" },
    { name: "Numerology", smanme: "N" },
    { name: "Zodiacs & Planets", smanme: "Z" },
    { name: "Vedic astrology", smanme: "V" },
    { name: "Mythological Stories", smanme: "M" },
    { name: "Kundli", smanme: "K" },
    { name: "Remedies & Healing", smanme: "R" },
    { name: "Puja Vidhi", smanme: "P" },
    { name: "Mandir", smanme: "M" },
    { name: "Sports", smanme: "S" },
    { name: "Buisness", smanme: "B" },
    { name: "Palmistry", smanme: "P" },
    { name: "Tarot Reading", smanme: "T" },
    { name: "Vastu & Feng-Shui", smanme: "V" },
    { name: "Aarti, Chalisa & Mantra", smanme: "A" },
    { name: "Gemstones", smanme: "G" },
    { name: "Predictions", smanme: "P" },
];
export default function Horoscope() {
    return (
        <section className="horo-sec-main">
            <div className="horoscope-main w-[90%] justify-self-center">
                <div className="text-[#000] ">
                    <h5 className="text-[#000] ">About Horoscope</h5>
                    <p className="horo-p-mob text-[#000]">
                        Horoscopes can assist you in overcoming obstacles, identifying
                        possibilities, and taking risks. Our expert astrologers'
                        horoscopes provide you with a comprehensive understanding of Vedic
                        Astrology and how it influences your life in all of its facets. It
                        also offers predictions on a daily, weekly, monthly, and annual
                        basis. We deliver horoscopes according to Vedic Astrology, which
                        is based on the Moon Sign. Find out what the stars have in store
                        for you by getting your free horoscope. To read forecasts and much
                        more, choose your zodiac sign below.
                    </p>
                </div>
            </div>
        </section>
    );
}
