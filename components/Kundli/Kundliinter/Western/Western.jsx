"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";


export default function Western() {
    const western = [
        {
            name: "Natal Astrology",
            img: "/ds-img/horoscope.gif",
            href: "/homepage/inKundli/getKundlipage/westernPage/natalpage",
            clr: "#e9d4ff",
        },
        {
            name: "Numerology",
            img: "/ds-img/num.webp",
            href: "/homepage/inKundli/getKundlipage/westernPage/numberpage",
            clr: "#ddd6ff",
        },
     
        {
            name: "Compatibility",
            img: "/ds-img/not-compatible.png",
            href: "/homepage/inKundli/getKundlipage/westernPage/compatwest",
            clr: "#e9d4ff",
        },
        {
            name: "Solar Return",
            img: "/ds-img/astrologylove.png",
            href: "/homepage/inKundli/getKundlipage/westernPage/solarwest",
            clr: "#e9d4ff",
        },
        {
            name: "Transit",
            img: "/ds-img/galaxy.png",
            href: "/homepage/inKundli/getKundlipage/westernPage/transitwest",
            clr: "#ddd6ff",
        },
        {
            name: "Moon Phases",
            img: "/ds-img/esoteric.png",
            href: "/homepage/inKundli/getKundlipage/westernPage/lunarwest",
            clr: "#f6cfff",
        },

    ];
    return (


        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
        

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-0 gap-5 py-1">

                <div className="basic-kundli-charts col-span-4 flex flex-col gap-2 items-center">


                    <div className="container">
                        <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-5 text-center font-semibold">
                            • Western <strong>Astrology Lists</strong> •
                        </h1>

                        <div className="love-product-new flex flex-wrap gap-4">
                            {western.map((west, index) => (
                                <Link
                                    href={west.href}
                                    key={index}
                                    style={{ backgroundColor: west.clr }}
                                    className={`service-card-top w-26 sm:w-32 xl:w-45  rounded-xl shadow-lg p-3 py-3 sm:py-5 text-center flex flex-col items-center justify-center`}
                                >
                                    <Image
                                        src={west.img}
                                        className="w-8 h-8  sm:w-14 sm:h-14 mb-2 rounded-full"
                                        width={35}
                                        height={35}
                                        alt="Image 1"
                                        loading="lazy"
                                    />
                                    <h3 className="sm:text-xs xl:text-sm text-[11px] text-[#000] ">
                                        {west.name}
                                    </h3>
                                </Link>
                            ))}
                            ;
                        </div>
                    </div>




                </div>



           
            </div>

        

        </section>

    );
}
