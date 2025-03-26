"use client"; // Required for interactive UI in Next.js 13+

import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";



const lunararr = [
    {
        "month": "10-5-1990",
        "within_perigee_range": false,
        "distance": "--",
        "within_apogee_range": true,
        "apogee_distance": 406431,
        "moon_sign": "Scorpio",
        "moon_phase": "Full Moon",
        "moon_age_in_days": 15.470096481335087,
        "moon_day": 16,
        "moon_illumination": 99
    },
   
];
const moonarr =[
    {
        "considered_date": "2-10-2017",
        "moon_phase": "Balsamic Moon",
        "significance": "The Moon now is waning and is located halfway between Last Quarter and New Moon. The seeds are moving towards maturation, while rest of the plant withers away. The energy of the plant concentrates into the seed which is preparing itself for the next cycle. In the seasonal progression, this phase represents Halloween, midway between the Fall Equinox and the Winter Solstice. The wall that separates the dead from the living, thins and ghosts walk on the plant of the living.",
        "report": "This is a time to rest, recreate and reflect on yourself and try to reconnect with inner powerhouses of strength. It is currently not a good time to start something afresh. It is a phase where all you should do is reflect your life objectively and increase awareness of what is important to you. At this point, make your bucket list and realise your dreams and aspirations. What are the larger goals that you can you aspire to and will bring vitality and excitement into your life and make your life a little more interesting and offbeat$1651 Just think and reflect on those aspects. Do not jump on the implementation of the listed goals."
    }
]



export default function Lunar() {


    return (


        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">

                    <section className="basic-details-main w-full">
                        <div className="flex  gap-5 flex-col w-full">

                            <div className="natal-cusps-rep flex flex-col p-5 shadow-lg rounded-lg w-full">
                                <h5 className="text-xl font-semibold text-[#000] text-center">Lunar Metrics</h5>
                                <div className="mob-dsp-none py-3 flex flex-col gap-3  justify-between">
                                    {lunararr.map((lunar, index) => (
                                        <div key={index} className="zod-det-mob-card text-[#000] border grid grid-cols-2 gap-3 border-purple-300 bg-purple-100 rounded-lg p-5">
                                            <div className="flex gap-2"><span className="text-sm font-semibold">Moon Sign :</span> <span className="text-sm ">{lunar.moon_sign}</span></div>
                                            <div className="flex gap-2"><span className="text-sm font-semibold">Moon Phase :</span> <span className="text-sm ">{lunar.moon_phase}</span></div>
                                            <div className="flex gap-2"><span className="text-sm font-semibold">Month :</span> <span className="text-sm ">{lunar.month}</span></div>
                                            <div className="flex gap-2"><span className="text-sm font-semibold">Moon Day :</span> <span className="text-sm ">{lunar.moon_day}</span></div>
                                            <div className="flex gap-2"><span className="text-sm font-semibold">Moon Illumination :</span> <span className="text-sm ">{lunar.moon_illumination}</span></div>

                                        </div>
                                    ))}
                                </div>


                            </div>

                            <div className="natal-cusps-rep flex flex-col p-5 shadow-lg rounded-lg w-full">
                                <h5 className="text-xl font-semibold text-[#000] text-center">Moon Phase Report</h5>
                                <div className="mob-dsp-none py-3 flex flex-col gap-3  justify-between">
                                    {moonarr.map((moon, index) => (
                                       <div key={index} className="zod-det-mob-card text-[#000] border flex flex-col gap-3 border-purple-300 bg-purple-100 rounded-lg p-5">
                                       <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Moon Phase : </h5> <span>{moon.moon_phase}</span></span>
                                       <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Moon Pahse Date : </h5> <span>{moon.considered_date}</span></span>

                                       <span className="flex flex-col "><h5 className="text-sm font-semibold">Significance : </h5> <p className="text-sm">{moon.significance}</p></span>
                                       <span className="flex flex-col "><h5 className="text-sm font-semibold">Report : </h5> <p className="text-sm"> {moon.report}</p></span>

                                   </div>
                                    ))}
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
