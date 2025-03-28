import { useState } from "react";
import Image from "next/image";

const horochart = [
    {
        "name": "Sun",
        "chart": "/ds-img/chrtlag.webp",
    },
    {
        "name": "Moon",
        "chart": "/ds-img/chrtlag.webp",
    },
    {
        "name": "Chalit",
        "chart": "/ds-img/chrtlag.webp",
    },
    {
        "name": "Horo",
        "chart": "/ds-img/chrtlag.webp",
    }
]


export default function Divcharts() {
    //   const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section className="div-charts">
            <h5 className="md:p-5 text-center justify-self-center md:text-2xl text-xl text-[#000]">Horoscope Charts</h5>
            <div className="basic-box grid md:grid-cols-3 grid-cols-1 gap-3">


                {horochart.map((hrch, index) => (
                    <div key={index} className="basic-card flex flex-col items-center justify-center gap-2">
                        <h5 className="text-[#fff] md:text-base text-sm font-semibold bg-purple-400 rounded-lg px-5 md:py-2 py-1">{hrch.name}</h5>
                        <Image src={hrch.chart} width={100} height={100} alt="chart images" className="w-[100%] h-70" />
                    </div>
                ))}
            </div>

        </section>

    );
}
