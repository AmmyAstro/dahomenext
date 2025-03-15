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

const categories = [
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
export default function Inblog() {
    return (
        <section className="blog-inside flex flex-row w-[90%]  py-10 gap-5">
            <div className="blogsec-in basis-3/4  flex flex-col items-start justify-start gap-5">
                <div className=" flex  flex-col gap-3 justify-center items-center">
                    <h6 className="text-[#000] text-2xl font-semibold">
                        Onam Festival 2024: Dates, Rituals and Significance
                    </h6>
                    <div className="bldate-nw w-100 blog-date-card flex items-center justify-between ">
                        <span className="bldat1-nw flex items-start justify-between flex-col gap-2">
                            <span className="bl-d-t-nw flex items-center text-[#000] gap-3">
                                <FaCalendarAlt />
                                <span className="text-xs">March 15</span>
                            </span>
                            <span className="bl-d-c-nw text-xs text-[#000]">
                                By: Suman Ghosh
                            </span>
                        </span>

                        <span className="bldat1-nw bld-mob flex items-end justify-between gap-2 flex-col">
                            <span className="bl-d-t-nw flex items-center gap-3 text-[#000]">
                                <FaXTwitter />

                                <FaHeart className="text-red-500" />
                            </span>
                            <span className="bl-d-c-nw flex items-center text-[#000] gap-2">
                                <FaRegCommentDots />
                                <span className="text-xs">Comments</span>
                            </span>
                        </span>
                    </div>
                    <div className="w-full flex rounded-lg overflow-hidden">
                        <div className="img-blog-nw basis-4/6">
                            <Image
                                src="/ds-img/onman.webp"
                                width={100}
                                height={100}
                                unoptimized
                                alt="blog image"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="basis-2/6 bg-[#a298bd8e] p-5 flex items-center justify-center">
                            <div className=" blog-side-con gap-2 flex flex-col items-center justify-center">
                                <h6 className="text-[#000] text-base font-semibold text-center">
                                    Need Guidance On Your Problems?
                                </h6>
                                <p className="text-[#000] text-sm text-center">
                                    Consult With The Best Online Astrologers
                                </p>
                                <div className=" flex flex-col w-full gap-2">
                                    <Link href={"/homepage/talkto"}>
                                        
                                        <button
                                            type="button"
                                            className="rounded-full hover:scale-102 cursor-pointer w-full bg-green-600 p-3 text-xs"
                                        >
                                            Talk To Astrologers
                                        </button>
                                    </Link>
                                    <Link href={"/homepage/navbarcomp"}>
                                        
                                        <button
                                            type="button"
                                            className="rounded-full hover:scale-102 w-full cursor-pointer bg-green-600 p-3 text-xs"
                                        >
                                            Chat With Astrologers
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-content-sec">
                        <p className="text-[#000] text-base py-5 font-medium ">
                            One of the most asked questions is which is the best day for a
                            haircut or nail cut? As per astrology, there are many limitations
                            on the cutting of hair and nails.
                        </p>

                        <div className="blog-para-img">
                            <div className="bg-con-bx">
                                <h5 className="text-sm text-[#000] font-medium">
                                    Onam Festival 2024: Dates
                                </h5>
                                <p className="text-sm text-[#000]">
                                    The main Onam festival is celebrated on 12th September 2024 on
                                    Sunday. However, the ritual is related to the Onam Festival
                                    this year starting on 6th September 2024 on Thursday and will
                                    continue till 17th September 2024 on Tuesday. There are
                                    different rituals related to Thiruvonam 2024 between 6th
                                    September 2024 to 17th September 2024.
                                </p>
                                <p className="text-[#000] text-sm">
                                    Onam (Hindu New Year) is a festival celebrated on the 27th of
                                    January, marking the beginning of the new year in Hinduism. It
                                    is a time of renewal and rebirth, symbolizing the
                                    transformation of life from the cycle of birth, death, and
                                    rebirth. The festival is popular among Hindus and other
                                    communities, and it is believed to bring about a sense of
                                    renewal, spiritual growth, and a new beginning for all beings.
                                    Onam has been celebrated in various forms and styles
                                    throughout history, with various festivals and celebrations
                                    being held annually. In this blog, we will explore the
                                    significance of Onam, the dates of its festivals, and some
                                    popular rituals associated with it. Let's dive into the
                                    details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Callchatsec />
            </div>
            <div className="category-sec basis-1/4 flex items-start justify-center">
                <div className="da-store-card-nw flex-col gap-5 flex items-">
                    <div className="blog-cat-nw">
                        <h6 className=" text-xl font-semibold text-center  text-[#000]">
                            Dhwani Astro Store
                        </h6>
                        <div className="">
                            <Link href="#" className="decoration-none">
                                <div className="category-nw flex flex-col rounded-lg overflow-hidden">
                                    <div className="bl-cath-f">
                                        <Image
                                            src="/ds-img/onman.webp"
                                            width={100}
                                            height={50}
                                            className="bl-hin h-50 w-max"
                                            alt="store image "
                                        />
                                    </div>
                                    <div className="b-fest-con-nw">
                                        <p className="b-fest-d">
                                            Dhwani Store: Premium Religious Gifts, Gemstones, & Decor
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="blog-cat-nw">
                        <h6 className="text-xl font-semibold text-center  text-[#000]">
                            Category
                        </h6>
                        <div className="bl-cat-main-nw grid grid-cols-2">
                            {categories.map((categories, index) => (
                                <Link href="#" key={index} className="text-decoration-none">
                                    <div className="category-nw w-30 flex flex-col  items-center justify-center">
                                        <div className="bl-cat-nw">{categories.smanme}</div>
                                        <h6 className="text-xs font-semibold text-[#000] text-center">
                                            {categories.name}
                                        </h6>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
