"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";
import { useState } from "react";


const rudrarr = [
    {
        "img_url": "/img/three+twelve.jpg",
        "rudraksha_key": "three_faced_twelve_faced",
        "name": "Three + Twelve Faced Rudraksha (Teen + Baarah Mukhi)",
        "recommend": "You are recommended to wear a combination of THREE and TWELVE FACED Rudraksha.",
        "detail": "Twelve face rudraksha is symbol of Aditya. This symbolises lord Vishnu too. It should be worn by people wanting to attain influential and powerful positions. It is an extremely blessed bead and provides protection against many evils and perils. The bead is said to increase charisma and charm. Helps in ruling and creating a powerful aura round oneself. Malefic effects of the Sun are controlled."
    }
]
export default function Rudrasugg() {
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
         

        <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
            <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
           
                <section className="basic-details-main w-full flex flex-col gap-5">

             

                    <div>
                        {rudrarr.map((ruarr, index) => (
                            <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                <div className="flex flex-col gap-2">
                                    <span className="text-center text-xl">Rudraksha Suggestions  </span>
                                  <div className="flex flex-col gap-3">
                                    <Image src={ruarr.src} width={100} height={100} alt="rudraksha image" />
                                    <div className="flex  gap-5 bg-purple-100 rounded-lg px-4 py-2">
                                        <h5 className="font-semibold">Rudraksha Name : </h5>
                                        <span>{ruarr.name}</span>
                                    </div>
                                    <div className="flex gap-5  bg-purple-100 rounded-lg px-4 py-2">
                                        <h5 className="font-semibold">Rudraksha Key : </h5>
                                        <span>{ruarr.rudraksha_key}</span>
                                    </div>
                                    <div className="flex flex-col  justify-around bg-purple-100 rounded-lg px-4 py-2">
                                        <h5 className="font-semibold">Recommendation : </h5>
                                        <span>{ruarr.recommend}</span>
                                    </div>
                                    <div className="flex flex-col  justify-around bg-purple-100 rounded-lg px-4 py-2">
                                        <h5 className="font-semibold">Rudraksha Details  : </h5>
                                        <span>{ruarr.detail}</span>
                                    </div>
                                
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
