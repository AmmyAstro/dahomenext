"use client";
import Image from "next/image";
import Link from "next/link";

import Zodiac from "../Zodiac/Zodiac";
import Zodhoro from "../Zodhoro/Zodhoro";

const horoscopezod = [
    { name: "Mesha", img: "/ds-img/ARIESn.webp", indate: "Mar 21 - Apr 19" },
    { name: "Varishabha", img: "/ds-img/Taurusn.webp", indate: "Apr 20 - May 20" },
    { name: "Mithuna", img: "/ds-img/GEMINIn.webp", indate: "May 21 - Jun 20" },
    { name: "Karka", img: "/ds-img/cancern.webp", indate: "Jun 21 - Jul 22" },
    { name: "Simha", img: "/ds-img/LEO.webp", indate: "Jul 23 - Aug 22" },
    { name: "Kanya", img: "/ds-img/virgon.webp", indate: "Aug 23 - Sep 22" },
    { name: "Tula", img: "/ds-img/LIBRAn.webp", indate: "Sep 23 - Oct 22" },
    { name: "Varischika", img: "/ds-img/Scorpio.webp", indate: "Oct 23 - Nov 21" },
    { name: "Dhanu", img: "/ds-img/SAGITTARIUSn.webp", indate: "Nov 22 - Dec 21" },
    { name: "Makara", img: "/ds-img/CAPRICORNn.webp", indate: "Dec 22 - Jan 19" },
    { name: "Kumbha", img: "/ds-img/Aquariusn.webp", indate: "Jan 20 - Feb 18" },
    { name: "Meena", img: "/ds-img/PISCESn.webp", indate: "Feb 19 - Mar 20" },
];
const starzod = [
    { name: "Aries", img: "/ds-img/sn1.png", },
    { name: "Taurus", img: "/ds-img/st1.png",},
    { name: "Gemini", img: "/ds-img/sn3.png",  },
    { name: "Cancer", img: "/ds-img/sn4.png",  },
    { name: "Leo", img: "/ds-img/sn5.png",  },
    { name: "Virgo", img: "/ds-img/sn6.png", },
    { name: "Libra", img: "/ds-img/sn7.png", },
    { name: "Scorpio", img: "/ds-img/sn8.png", },
    { name: "Sagittarius", img: "/ds-img/sn9.png", },
    { name: "Capricorn", img: "/ds-img/sn10.png",  },
    { name: "Aquarius", img: "/ds-img/sn11.png", },
    { name: "Pisces", img: "/ds-img/sn12.png",  },
];
export default function Horoscope() {
    return (
        <section className="horo-sec-main py-10">
            <div className="horoscope-main w-[90%] justify-self-center flex flex-col gap-10">
                <div className="text-[#000] p-5">
                    <h5 className="text-[#2f1254] text-md sm:text-2xl text-center font-semibold">• About <strong>Horoscope</strong> •</h5>
                    <p className="horo-p-mob text-[#000] text-sm">
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

                <section className="horo-icons-zod relative w-full mx-auto py-5 sm:py-5 px-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-3/3 h-full bg-cover bg-center bg-before"
                            style={{ backgroundImage: "url('/ds-img/deep-sky.jpg')" }}
                        ></div>
                    </div>

                    <div className="relative service-horocope flex flex-col items-center justify-center">
                        <div className="problem-icons-card flex flex-col items-center justify-center">
                            <h1 className="text-[#fff] text-md sm:text-2xl py-4 text-center font-semibold">
                                • Know Yourself Through Your Sign •
                            </h1>
                            <div className="zodiac-cards-box grid grid-cols-6 gap-10">
                                {horoscopezod.map((horoim, index) => (
                                    <Link href={"#"} key={index} className="zod-card-bx cursor-pointer d-flex flex-column items-center justify-center bg-[#2a2626c6] rounded-lg shadow-lg p-5 px-6">
                                        <div className="zodiac-card-img flex items-center justify-center">
                                            <Image className="img-ch-h" src={horoim.img} alt="Aries" height={100} width={100} />
                                        </div>
                                        <div className="zod-det mt-1 flex flex-col justify-center items-center">
                                            <p className="zod-h-nm text-sm">{horoim.name}</p>
                                            <p className="zod-h-dt text-xs">{horoim.indate}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Zodiac />


                <Zodhoro />

                <div className="cho-more-zod justify-self-center  bg-[#2b1a52e1] p-3 rounded-xl">
                    <div className="cho-head">
                        <h4 className="text-center text-[#fff] text-xl">Choose Your Zodiac Sign</h4>
                        <h5 className="text-center text-[#fff] text-base">
                            The starry vault of heaven is in truth the open book of cosmic
                            projection.
                        </h5>
                    </div>
                    <div className="grid grid-cols-6 gap-20 justify-self-center p-10">
                        {starzod.map((strz, index) => (

                            <div key={index} className="dwn-sign">
                                <Image className="sign-img-new" src={strz.img} alt="sign images" width={100} height={100} />
                                <span>{strz.name}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
