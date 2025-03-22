import { useState } from "react";
import Image from "next/image";

const bestsell = [
    {
        id: 0,
        name: "Pendant",
        src: "/ds-img/st1.webp",
    },
    {
        id: 1,
        name: "Divine Mala",

        src: "/ds-img/st6.webp",

    },
    {
        id: 2,
        name: "Bracelet",

        src: "/ds-img/st3.webp",
    },
    {
        id: 3,
        name: "Love Bracelet",
        src: "/ds-img/st3.webp",

    },

];

export default function Bestsell() {

    return (
        <section>
            <div className="side-pop p-3 flex flex-col gap-3 border-2 rounded-lg">
                <span className="text-[#000] text-center font-semibold text-xl"> Shop Best Sellers At Store</span>
                <div className="pop-imgs  flex items-center flex-wrap justify-between gap-3">
                    {bestsell.map((bestsell, index) => (
                        <div key={index} className="pop-img-txt flex-col items-center justify-items-center">
                            <Image
                                alt="best seller image "
                                className="kundli-imgs md:w-32 md:h-25 w-40 h-30 rounded-lg shadow-lg object-cover"
                                loading="lazy"
                                width={50}
                                height={50}
                                unoptimized
                                src={bestsell.src}
                            />
                            <span className="text-[#000]  text-xs"> {bestsell.name}</span>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}
