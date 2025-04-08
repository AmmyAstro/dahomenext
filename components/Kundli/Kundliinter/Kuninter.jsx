"use client";

import Personal from "@/components/Smcompo/Personal";
import Image from "next/image";
import Link from "next/link";

const kundlicards = [
    {
        name: "Birth Chart/ Kundli",
        img: "/ds-img/k1.png",
        named: "Planet positions & various charts",
        href: "/homepage/inKundli/getKundlipage/kundliBasic1",
    },
    {
        name: "General Life Prediction",
        img: "/ds-img/fnn.jpg",
        named: "Get to know about your nature",
        href: "/homepage/inKundli/getKundlipage/generalPred",
    },
    {
        name: "Western Horoscope",
        img: "/ds-img/ology.webp",
        named: "Positions of celestial bodies ",
        href: "/homepage/inKundli/getKundlipage/westernPage",
    },
    {
        name: "Dosha in Kundli",
        img: "/ds-img/k3.png",
        named: "Do you have any Kundli Dosh?",
        href: "/homepage/inKundli/getKundlipage/doshakundli",
    },
    {
        name: "Match Horoscope",
        img: "/ds-img/mh.webp",
        named: "Kundli Milan (Guna Milan)",
        href: "/homepage/inKundli/getKundlipage/matchHoro",
    },
    {
        name: "Numerology",
        img: "/ds-img/num.webp",
        named: "Your Lucky number is...",
        href: "/homepage/inKundli/getKundlipage/numerokundli",
    },
    {
        name: "My Day Today",
        img: "/ds-img/k5.webp",
        named: "Get predictions about the day",
        href: "/homepage/inKundli/getKundlipage/mydaytoday",
    },
    {
        name: "Year Analysis",
        img: "/ds-img/k6.png",
        named: "How will this year for you?",
        href: "/homepage/inKundli/getKundlipage/varshaphal",
    },
 
    // {
    //     name: "Career",
    //     img: "/ds-img/k8.png",
    //     named: "Get predictions about your Career",
    //     href:"/homepage/inKundli/getKundlipage/Inbasicchart",
    // },
    {
        name: "Nakshatra",
        img: "/ds-img/nak.jpg",
        named: "Get to know about your Nakshatra",
        href: "/homepage/inKundli/getKundlipage/nakshatra",
    },
    {
        name: "Lal Kitab Horoscope",
        img: "/ds-img/klf.png",
        named: "Get your Life Report as pdf",
        href: "/homepage/inKundli/getKundlipage/lalkitab",
    },
    // {
    //     name: "Love",
    //     img: "/ds-img/klii.png",
    //     named: "How is your Love Life?",
    //     href: "/homepage/inKundli/getKundlipage/Inbasicchart",
    // },

    {
        name: "Sade Sati",
        img: "/ds-img/k11a.png",
        named: "How Sade Sati effect you?",
        href: "/homepage/inKundli/getKundlipage/sadhesati",
    },
    {
        name: "Suggestions And Remedies",
        img: "/ds-img/Remedy.webp",
        named: "Free Remedies Suggestion Report",
        href:"/homepage/inKundli/getKundlipage/suggestion",
    },

    {
        name: "Ascendant Report",
        img: "/ds-img/k5.png",
        named: "Get your Life Report as pdf",
        href: "/homepage/inKundli/getKundlipage/ascendant",
    },
    {
        name: "GocharPhal (Transit)",
        img: "/ds-img/transit.png",
        named: "Position of Planets",
        href: "/homepage/inKundli/getKundlipage/gocharphal",
    },
    {
        name: "Char / Yogini Dasha",
        img: "/ds-img/k11.png",
        named: "Timing events based on planets",
        href: "/homepage/inKundli/getKundlipage/charyogini",
    },
]


export default function Kuninter() {
    return (
        <section className="kundli-inter-page w-full gap-10 flex flex-col items-center justify-center md:p-5 p-1">
            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-1 gap-5 py-0">
                <div className="kundli-items-main col-span-4 flex flex-col gap-10">
                    <div className="kundli-items-main grid md:grid-cols-4 grid-cols-3 md:gap-5 gap-3  ">
                        {kundlicards.map((kunca, index) => (
                            <Link key={index} href={kunca.href} className="kundli-cards text-[#000] shadow-lg rounded-lg gap-2 md:p-3 p-2 flex flex-col items-center justify-center">
                                <h5 className="text-xs md:text-xs text-center font-normal">{kunca.name}</h5>
                                <Image src={kunca.img} alt="kundli images" width={50} height={50} className="w-10 h-10 md:w-15 md:h-15 rounded-full" />
                                <span className="text-center md:text-xs  text-[10px]">{kunca.named}</span>
                            </Link>
                        ))}
                    </div>
                    
                </div>
            </div>
            <Personal/>
        </section>
    );
}
Kuninter.getLayout = (page) => (
    <KundliLayout>
        {page}
    </KundliLayout>
);