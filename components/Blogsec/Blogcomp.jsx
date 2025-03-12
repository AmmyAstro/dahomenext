"use client";

import Image from "next/image";
import Link from "next/link";

import { IoFilterOutline, IoSearch } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaGrinHearts, FaRegCommentDots, FaEye, FaCalendarAlt, FaHeart } from "react-icons/fa";

export default function Blogcomp() {
    const blogarray = [
        {
            id: 1,
            src: "/ds-img/onman.webp",
            ulname: "Phalguna Purnima 2025 Muhurat Date, Time, Significance & More ",
            dat: "September 11, 2024",
            vw: "666",
            textpa: "Purnima is one of the most auspicious days of the year. let' s explore Phalguna Purnima 2025 Muhurat Date, Time, Significance & More."
        },
        {
            id: 2,
            src: "/ds-img/ganc.webp",
            ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
            dat: "December 5, 2024",
            vw: "1232",
            textpa: "Purnima is one of the most auspicious days of the year. let' s explore Phalguna Purnima 2025 Muhurat Date, Time, Significance & More."

        },
        {
            id: 3,
            src: "/ds-img/dhg.webp",
            ulname: "Namkaran Muhurat 2025 Dates, Time, Significance and More ",
            dat: "January 5, 2025",
            vw: "8732",
            textpa: " A complete lunar eclipse or Blood Moon is visible in March. In this blog, we mentioned Blood Moon 2025 Date, Time, Visibility, and Astrological Effects."

        },
        {
            id: 4,
            src: "/ds-img/onman.webp",
            ulname: "Top 5 Zodiac Signs Are Most Likely to Become Parents in 2025 ",
            dat: "September 5, 2024",
            vw: "12372",
            textpa: "Do you want to know the zodiac signs that will have a baby in 2025? Let’s find out the top zodiac signs expecting a baby in 2025."

        },
        {
            id: 5,
            src: "/ds-img/dhg.webp",
            ulname: "Blood Moon 2025 Date, Time, Visibility & Astrological Effects",
            dat: "July 5, 2024",
            vw: "2",
            textpa: "As per Hinduism, the name you select for your kid has some special energy.  In this blog we explore Namkaran Muhurat 2025 Dates, Time, Significance and More."

        },
    ];

    return (
        <section className=" relative p-2 sm:p-5 flex w-full flex-col items-center self-center ">
            <div className="ui-group w-full">
                <div className=" bl-rec text-center flex flex-row items-center gap-5">
                    <span className="uproline"></span>

                    <form action="#" method="get">
                        <span className="dash-span-inp flex items-center">
                            <input
                                type="search"
                                name="search"
                                className="dash-inp outline-0 border-0 placeholder:text-[#777] placeholder:text-xs"
                                placeholder="Search services here...."
                            />
                            <IoSearch className="text-[#000]" />
                        </span>
                    </form>
                    <span className="uproline"></span>
                </div>
            </div>

            <section className="blog-category-main flex flex-row w-[90%] py-5 gap-5">

                <div className="blog-main-box grid grid-cols-3 basis-3/4 gap-5">
                    {blogarray.map((blg, index) => (
                        <div key={index} className="blog-and-gem flex ">
                            <div className="blogdanger-nw">
                                <div className="blog-bx-nw gap-2  flex   flex-col">
                                    <Link href="#">
                                        <Image src={blg.src} alt="image here" width={100} height={100} className="bl-img-nw h-42" />
                                    </Link>

                                    <div className="bl-con-nw  flex flex-col  justify-between">
                                        <h1>
                                            <Link href="#"
                                                className="decoration-none">
                                                <h6 className="text-sm text-[#4c307a]">
                                                    {blg.ulname}
                                                </h6>
                                            </Link>
                                        </h1>

                                        <div className="bldate-nw flex items-center justify-between ">
                                            <span className="bldat1-nw  flex items-center justify-between flex-col">
                                                <span className="texxx-nw text-[.8rem] text-[#000]">
                                                    {blg.textpa}
                                                </span>
                                            </span>
                                        </div>

                                        <div className="bldate-nw blog-date-card flex items-center justify-between ">
                                            <span className="bldat1-nw flex items-start justify-between flex-col gap-2">
                                                <span className="bl-d-t-nw flex items-center text-[#000] gap-3">
                                                    <FaCalendarAlt />
                                                    <span className="text-xs">{blg.dat}</span>
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

                                        <Link href="#" className="flex items-center justify-center py-2">
                                            <button className="bl-btn-nw  text-[#000]">Read Blog</button>
                                        </Link>
                                        <div className="review_upper_image-nw">
                                            <FaEye className="text-[#fff] text-xs" />
                                            <span>
                                                <p className="pvc_stats total_only text-xs text-[#fff]"
                                                    data-element-id="187496">
                                                    &nbsp;4185&nbsp;
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="category-sec basis-1/4 flex items-start justify-center">
                    <div className="da-store-card flex justify-center items-center">
                    <div className="blog-cat-nw">
                        <h6 className=" text-xl font-semibold text-center  text-[#000]">Dhwani Astro Store</h6>
                        <div className=" flex flex-col">
                            <Link href="#" className="decoration-none">
                                <div className="category-nw rounded-lg overflow-hidden">
                                    <div className="bl-cath-f"><Image src="/ds-img/onman.webp" width={100} height={50} className="bl-hin h-50 w-max" alt="store image " /></div>
                                    <div className="b-fest-con-nw">                                      
                                        <p className="b-fest-d">Dhwani Store: Premium Religious Gifts, Gemstones, & Decor</p>
                                    </div>
                                </div>
                            </Link>
                        

                        </div>
                    </div>
                    </div>
                </div>

            </section>
        </section>
    );
}
