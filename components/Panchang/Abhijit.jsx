"use client"; // Required for interactive UI in Next.js 13+

import { useState } from "react";


const pujaarr = [
    {
        "summary": "Following are the puja suggestions based on your horoscope and planetary combinations.",
        "suggestions": [
            {
                "status": "true",
           
                "title": "Kal Sarpa Dosha Shanti Pujan",
                "puja_id": "KAL_SARPA",
                "summary": "If all the 7 planets are situated between Rahu and Ketu then Kaal Sarp Yog is formed.According to the situation of Rahu in 12 houses of horoscope there are Kaal Sarp Yogas of 12 types. These are : 1. Anant, 2. Kulik, 3. Vasuki, 4. Shankhpal, 5. Padma, 6. Mahapadma, 7. Takshak, 8. Karkotak, 9. Shankhchud, 10. Ghaatak, 11. Vishdhar and 12. Sheshnag. The Kaal Sarp Yog is of two types- Ascending and Descending. If all the 7 planets are eaten away by Rahus mouth then it is Ascending Kaal Sarp Yog. If all planets are situated in back of Rahu then Descending Kaal Sarp Yog is formed.",
                "one_line": "You have ascending kalsarpa dosha direction, which is treated as powerful. The KalSarpa Dosha is having partial effect in your horoscope."
            },
            {
                "status": "true",
         
                "title": "Nakshatra Pujan",
                "puja_id": "NAKSHATRA_PUJA",
                "summary": "Moon nakshatra is one of the most important nakshatra is horoscope. In horoscope, fifth, seventh and ninth houses are for children, life partner and luck respectively. And if their lords are in vedha (obstructive position) with Moon naksahtra then various hardships might be faced in your life. To reduce the effect of obsctructions and make your constellations in sync with other house lords, Nakshatra Puja is recommended.",
                "one_line": "Ninth house lord is in VIPAT vedha with your Moon nakshatra and therefore it is recommended that you perform nakshatra puja to mitigate evil effects of vedha."
            }
        ]
    }
]
export default function Abhijit() {
    // const [actFav, setActfav] = useState(0);
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    {pujaarr.map((parr, index) => (
                        <section className="basic-details text-[#000] main w-full flex flex-col gap-5 border border-purple-100 rounded-lg px-4 py-2">
                            <span className="text-center font-semibold text-xl">a Suggestions</span>
                            <div key={index} className="flex flex-col gap-4 text-[#000]">
                                <div className="flex flex-col md:flex-row gap-1 text-sm">
                                    <h5>Summary : </h5>
                                    <span>{parr.summary}</span>
                                </div>
                                {parr.suggestions?.map((sug, sugIndex) => (
                                    <div
                                        key={sugIndex}
                                        className="flex flex-col gap-1 text-[#000] border text-sm border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                        <div className="flex items-center gap-4">
                                            <h5 className="font-semibold text-xl">{sug.title}</h5>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <h5 className="font-semibold ">Present in your Kundli : </h5> <span>{sug.status}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="font-semibold ">Desciption : </h5> <span>{sug.summary}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="font-semibold ">One Line  : </h5> <span>{sug.one_line}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
