"use client"; // Required for interactive UI in Next.js 13+

import { FaSun, FaMoon } from "react-icons/fa";


const horarr = [
    {
        hora: {
            day: [
                {
                    "time": "17:41 - 18:41",
                    "hora": "Mercury"
                },
                {
                    "time": "18:41 - 19:41",
                    "hora": "Moon"
                },
                {
                    "time": "19:41 - 20:41",
                    "hora": "Saturn"
                },
                {
                    "time": "20:41 - 21:41",
                    "hora": "Jupiter"
                },
                {
                    "time": "21:41 - 22:41",
                    "hora": "Mars"
                },
                {
                    "time": "22:41 - 23:41",
                    "hora": "Sun"
                },
                {
                    "time": "23:41 - 0:41",
                    "hora": "Venus"
                },
                {
                    "time": "0:41 - 1:41",
                    "hora": "Mercury"
                },
                {
                    "time": "1:41 - 2:41",
                    "hora": "Moon"
                },
                {
                    "time": "2:41 - 3:41",
                    "hora": "Saturn"
                },
                {
                    "time": "3:41 - 4:41",
                    "hora": "Jupiter"
                },
                {
                    "time": "4:41 - 5:41",
                    "hora": "Mars"
                }
            ],
            night: [
                {
                    "time": "5:41 - 6:41",
                    "hora": "Sun"
                },
                {
                    "time": "6:41 - 7:41",
                    "hora": "Venus"
                },
                {
                    "time": "7:41 - 8:41",
                    "hora": "Mercury"
                },
                {
                    "time": "8:41 - 9:41",
                    "hora": "Moon"
                },
                {
                    "time": "9:41 - 10:41",
                    "hora": "Saturn"
                },
                {
                    "time": "10:41 - 11:41",
                    "hora": "Jupiter"
                },
                {
                    "time": "11:41 - 12:41",
                    "hora": "Mars"
                },
                {
                    "time": "12:41 - 13:41",
                    "hora": "Sun"
                },
                {
                    "time": "13:41 - 14:41",
                    "hora": "Venus"
                },
                {
                    "time": "14:41 - 15:41",
                    "hora": "Mercury"
                },
                {
                    "time": "15:41 - 16:41",
                    "hora": "Moon"
                },
                {
                    "time": "16:41 - 17:41",
                    "hora": "Saturn"
                },
            ],
        },
    },
];
export default function Hora() {
    const { day, night } = horarr[0].hora;
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    {horarr.map((parr, index) => (
                        <section key={index} className="basic-details text-[#000] main w-full flex flex-col gap-5 border border-purple-100 rounded-lg px-4 py-2">
                            <h5 className="text-sm md:text-xl text-[#000] font-semibold text-center">
                                <span className="text-red-500">"Hora  : </span>
                                Muhurta"
                            </h5>
                            <div className="flex flex-col w-[80%] self-center  gap-4">
                                <div className="flex items-ceenter justify-around py-2">
                                    <div className="flex items-center justify-center gap-5  ">
                                        <span>
                                            <FaSun className="text-yellow-400 text-2xl" />
                                        </span>
                                        <span className="font-semibold">Day Hora Muhurat</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-5">
                                        <span>
                                            <FaMoon className="text-black text-2xl" />
                                        </span>
                                        <span className="font-semibold">Night Hora Muhurat</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 ">
                                    <div className="flex flex-col w-full gap-1 bg-purple-100 rounded-lg justify-center items-center py-2">
                                        {day.map(({ time, hora }, i) => {
                                            return (
                                                <div
                                                    key={`day-${i}`}
                                                    className={` grid grid-cols-2 rounded-lg w-[80%]  `}
                                                >
                                                    <p className=" rounded-l-lg px-5 py-1">
                                                 
                                                        {hora}
                                                    </p>
                                                    <p className=" rounded-r-lg px-5 py-1"> {time}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="flex flex-col w-full gap-1  bg-purple-100 rounded-lg justify-center items-center py-2">
                                        {night.map(({ time, hora }, i) => {
                                            return (
                                                <div
                                                    key={`night-${i}`}
                                                    className={` grid rounded-lg grid-cols-2 w-[80%]  `}
                                                >
                                                    <p className=" rounded-l-lg px-5 py-1">

                                                        {hora}
                                                    </p>
                                                    <p className=" rounded-r-lg px-5 py-1 "> {time}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>


                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
