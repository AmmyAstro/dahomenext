"use client"; // Required for interactive UI in Next.js 13+

import { FaSun, FaMoon } from "react-icons/fa";

const chaugarr = [
    {
        chaughadiya: {
            day: [
                {
                    time: "5 : 41 : 01 - 4 : 06 : 50",
                    muhurta: "Labh",
                },
                {
                    time: "4 : 06 : 50 - 2 : 32 : 39",
                    muhurta: "Amrit",
                },
                {
                    time: "2 : 32 : 39 - 12 : 58 : 27",
                    muhurta: "Kaal",
                },
                {
                    time: "12 : 58 : 27 - 11 : 24 : 16",
                    muhurta: "Shubh",
                },
                {
                    time: "11 : 24 : 16 - 09 : 50 : 05",
                    muhurta: "Rog",
                },
                {
                    time: "09 : 50 : 05 - 08 : 15 : 53",
                    muhurta: "Udveg",
                },
                {
                    time: "08 : 15 : 53 - 06 : 41 : 42",
                    muhurta: "Char",
                },
                {
                    time: "06 : 41 : 42 - 05 : 07 : 30",
                    muhurta: "Labh",
                },
            ],
            night: [
                {
                    time: "05 : 07 : 30 - 06 : 41 : 38",
                    muhurta: "Udveg",
                },
                {
                    time: "06 : 41 : 38 - 08 : 15 : 46",
                    muhurta: "Shubh",
                },
                {
                    time: "08 : 15 : 46 - 09 : 49 : 55",
                    muhurta: "Amrit",
                },
                {
                    time: "09 : 49 : 55 - 11 : 24 : 03",
                    muhurta: "Char",
                },
                {
                    time: "11 : 24 : 03 - 12 : 58 : 11",
                    muhurta: "Rog",
                },
                {
                    time: "12 : 58 : 11 - 2 : 32 : 19",
                    muhurta: "Kaal",
                },
                {
                    time: "2 : 32 : 19 - 4 : 06 : 27",
                    muhurta: "Labh",
                },
                {
                    time: "4 : 06 : 27 - 5 : 40 : 35",
                    muhurta: "Udveg",
                },
            ],
        },
    },
];

function getCurrentChaughadiya() {
    const now = new Date();
    const pad = (num) => num.toString().padStart(2, "0");
    const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
        now.getSeconds()
    )}`;

    const allPeriods = [
        ...chaugarr[0].chaughadiya.day,
        ...chaugarr[0].chaughadiya.night,
    ];

    const to24Hour = (t) => t.replace(/\s/g, "").split(":").map(Number);

    const toSeconds = ([h, m, s]) => h * 3600 + m * 60 + s;
    const currentSeconds = toSeconds(to24Hour(currentTime));

    for (const { time, muhurta } of allPeriods) {
        const [startStr, endStr] = time.split(" - ");
        const start = toSeconds(to24Hour(startStr));
        const end = toSeconds(to24Hour(endStr));

        if (start < end) {
            if (currentSeconds >= start && currentSeconds < end) return muhurta;
        } else {
         
            if (currentSeconds >= start || currentSeconds < end) return muhurta;
        }
    }

    return "No muhurta found";
}

export default function Chaugadiya() {
    const { day, night } = chaugarr[0].chaughadiya;
    const badMuhurtas = ["Kaal", "Rog", "Udveg"];
    const netMuhurtas = ["Char"];
    const ausMuhurtas = ["Amrit"];

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    {chaugarr.map((chaur, index) => (
                        <section
                            key={index}
                            className="basic-details text-[#000] main w-full flex flex-col gap-2 border border-purple-100 rounded-lg px-4 py-2"
                        >
                            <div className="flex flex-col gap-2">
                                <h5 className="text-sm md:text-xl text-[#000] font-semibold text-center">
                                    <span className="text-red-500">"CHOGHADIYA CHART : </span>
                                    (AAJ KA CHOGHADIYA CHART)"
                                </h5>

                                <div className="flex flex-col md:flex-row gap-1 text-sm">
                                    <span>
                                        Chaughadiya Muhurat is a traditional Hindu system of
                                        dividing day and night into eight equal time periods, each
                                        ruled by a specific planetary energy. These periods are used
                                        to determine the auspiciousness of starting new activities.
                                        There are seven types of Chaughadiya—Amrit, Shubh, and Labh
                                        are considered auspicious, while Kaal, Rog, and Udveg are
                                        inauspicious. It is commonly used in daily panchang to plan
                                        journeys, business deals, and religious activities.
                                    </span>
                                </div>

                                <div className="astrology-remedies-section flex flex-col items-center justify-center relative w-full mx-auto py-0 sm:py-10 px-3 md:px-6">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="w-full h-full bg-cover bg-center rounded-lg opacity-100"
                                            style={{ backgroundImage: "url('/ds-img/cho.jpg')" }}
                                        ></div>
                                    </div>
                                    <div className="w-full remedies-and-query flex flex-col sm:flex-row items-start justify-between gap-5">
                                        <div className="heading-astro-remed relative flex  justify-around w-full">
                                            <div className="flex rounded-lg px-5 py-2 bg-white">
                                                <span className="flex gap-2">
                                                    <h5 className="font-semibold">
                                                        Current Chaugadiya:
                                                    </h5>
                                                    {getCurrentChaughadiya()}
                                                </span>
                                            </div>
                                            <div className="flex rounded-lg px-5 py-2 bg-white">
                                                <h5>{Date()} </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-[80%] self-center  gap-4">
                                    <div className="flex items-ceenter justify-around py-2">
                                        <div className="flex items-center justify-center gap-5  ">
                                            <span>
                                                <FaSun className="text-yellow-400 text-2xl" />
                                            </span>
                                            <span className="font-semibold">Day Chaugadiya</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-5">
                                            <span>
                                                <FaMoon className="text-black text-2xl" />
                                            </span>
                                            <span className="font-semibold">Night Chaugadiya</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 ">
                                        <div className="flex flex-col w-full gap-1">
                                            {day.map(({ time, muhurta }, i) => {
                                                const isBad = badMuhurtas.includes(muhurta);
                                                const isNet = netMuhurtas.includes(muhurta);
                                                const isAus = ausMuhurtas.includes(muhurta);

                                                let bgColor = "bg-green-200"; // default
                                                if (isBad) {
                                                    bgColor = "bg-red-300";
                                                } else if (isNet) {
                                                    bgColor = "bg-violet-300";
                                                } else if (isAus) {
                                                    bgColor = "bg-green-600";
                                                }

                                                return (
                                                    <div
                                                        key={`day-${i}`}
                                                        className={` grid grid-cols-2 rounded-lg w-full ${bgColor} `}
                                                    >
                                                        <p className=" rounded-l-lg px-5 py-1">
                                                            {" "}
                                                            {muhurta}
                                                        </p>
                                                        <p className=" rounded-r-lg px-5 py-1"> {time}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-col w-full gap-1">
                                            {night.map(({ time, muhurta }, i) => {
                                                const isBad = badMuhurtas.includes(muhurta);
                                                const isNet = netMuhurtas.includes(muhurta);
                                                const isAus = ausMuhurtas.includes(muhurta);

                                                let bgColor = "bg-green-200"; // default
                                                if (isBad) {
                                                    bgColor = "bg-red-300";
                                                } else if (isNet) {
                                                    bgColor = "bg-violet-300";
                                                } else if (isAus) {
                                                    bgColor = "bg-green-600";
                                                }

                                                return (
                                                    <div
                                                        key={`night-${i}`}
                                                        className={` grid rounded-lg grid-cols-2 w-full ${bgColor} `}
                                                    >
                                                        <p className=" rounded-l-lg px-5 py-1">
                                                            {" "}
                                                            {muhurta}
                                                        </p>
                                                        <p className=" rounded-r-lg px-5 py-1 "> {time}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex-items-center text-red-400 text-sm">
                                        <span className="font-semibold">Note :</span>
                                        <span>
                                            All timings are represented in 12 hours notation of local
                                            time of New Delhi, India with DST adjustment(if
                                            applicable). Hours which are past midnight are suffixed
                                            with next day date. In Panchang day starts and ends with
                                            Sunrise.
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center gap-5">
                                        <div className="flex gap-2 items-center">
                                            <span className="h-5 w-5 rounded-full bg-red-300"></span>
                                            <span>Inauspicious </span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <span className="h-5 w-5 rounded-full bg-violet-300"></span>
                                            <span>Neutral </span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <span className="h-5 w-5 rounded-full bg-green-300"></span>
                                            <span>Auspicious </span>
                                        </div>
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
