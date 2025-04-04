"use client"; // Required for interactive UI in Next.js 13+

import { useState } from "react";


const myday = [
    {
        "birth_moon_sign": "Leo",
        "birth_moon_nakshatra": "Magha",
        "prediction": {
            "health": "You will feel active and happy the whole day. Beginning a new physical exercise regime and sporting activity will cause good health. Tendency to suffer from joints and muscular pain exists. However, there are no major health related issues to worry about.",
            "emotions": "This is a time of heightened yet manageable emotions. Increased sensitivity and warmth helps endear you to others.",
            "profession": "This is a good time for making business decisions, investments and dispute settlements. You shall have an edge over competitors. Job interview or negotiations will give good results. It's your time to be recognized and appreciated.",
            "luck": "There are a few pleasant surprises in store for you today. You will be able to achieve immense success even with small efforts.",
            "personal_life": "You will be more sympathetic to the feelings of others and shall freely share your own emotions with them. It’s a party time. Enjoy the day with family and friends. You may get an invitation to attend a social gathering.",
            "travel": "Traveling for professional purpose will prove very productive."
        },
        "prediction_date": "18 June 2017"
    }
]
export default function Naktomm() {
    // const [actFav, setActfav] = useState(0);
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
         

        <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
            <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
              
                <section className="basic-details-main w-full flex flex-col gap-5">             

                    <div>
                        {myday.map((mday, index) => (
                            <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                <div className="flex flex-col gap-2">
                                    <span className="text-center text-xl">Tomorrow Nakshatra Prediction </span>
                                    <div className="grid grid-cols-2 px-20 gap-10">
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full  px-5 py-2 "><span className="font-semibold">Birth Moon Sign : </span> <span>{mday.birth_moon_sign}</span></div>
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full px-5 py-2"><span className="font-semibold">Birth Moon Nakshatra : </span> <span>{mday.birth_moon_nakshatra}</span></div>

                                    </div>
                                    <div className="pred-day flex flex-col gap-2 text-[#000]">
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Health : </span><span>{mday.prediction.health}</span></div>
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Emotions : </span><span>{mday.prediction.emotions}</span></div>
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Profession : </span><span>{mday.prediction.profession}</span></div>
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Luck : </span><span>{mday.prediction.luck}</span></div>
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Personal Life : </span><span>{mday.prediction.personal_life}</span></div>
                                        <div className="flex flex-col gap-0"><span className="font-semibold">Travel : </span><span>{mday.prediction.travel}</span></div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>



                </section>
            </div>

      
        </div>

     
    </section>
    );
}
