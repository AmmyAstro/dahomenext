import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const kundliother = [
    {
        id: 0,
        name: "Match Making",
        src: "/ds-img/kuoth1.png",
    },
    {
        id: 1,
        name: "Kundli Types",
        src: "/ds-img/kuoth2.png",
    },
    {
        id: 2,
        name: "Yog",
        src: "/ds-img/kuoth3.png",
    },
    {
        id: 3,
        name: "Dosh",
        src: "/ds-img/kuoth4.png",
    },
    {
        id: 4,
        name: "House",
        src: "/ds-img/kuoth5.png",
    },
    {
        id: 5,
        name: "Ascendant",
        src: "/ds-img/kuoth6.png",
    },
    {
        id: 6,
        name: "Dasha",
        src: "/ds-img/kuoth7.png",
    },

];

export default function Kundlioth() {

    return (
        <section>
            <div className=" p-3 flex flex-col gap-3">
                <div className=" flex items-center flex-wrap justify-start gap-5">
                    {kundliother.map((kuoth, index) => (
                        <Link key={index} href="#" className="kundli-other-item  ">
                            <div className=" rounded-lg flex flex-col items-center justify-center gap-3">
                                <Image src={kuoth.src} height={40} width={40} alt="kundli images" className="kunoth-img"/>
                                <div className="w-full rounded-full py-1 text-[#000] bg-white text-center text-xs">
                                    {kuoth.name}
                                </div>
                            </div>
                        </Link>
                    ))}


                </div>
            </div>
        </section>
    );
}
