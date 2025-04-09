"use client"; // Required for interactive UI in Next.js 13+

const tranarr = [
    {
        "start_date": "1-25-2023",
        "end_date": "2-1-2023",
        "natal_ascendant": "Sagittarius",
        "transit_relation": [
            {
                "transit_planet": "Sun",
                "natal_planet": "Mercury",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-23 05:57:47",
                "exact_time": "2023-01-25 05:08:14",
                "end_time": "2023-01-27 04:20:14"
            },
            {
                "transit_planet": "Moon",
                "natal_planet": "Neptune",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-25 05:29:41",
                "exact_time": "2023-01-25 08:48:16",
                "end_time": "2023-01-25 12:07:46"
            },
            {
                "transit_planet": "Mercury",
                "natal_planet": "Uranus",
                "aspect_type": "Trine",
                "start_time": "2023-01-22 05:03:23",
                "exact_time": "2023-01-25 15:50:48",
                "end_time": "2023-01-28 03:10:36"
            },
            {
                "transit_planet": "Jupiter",
                "natal_planet": "Mercury",
                "aspect_type": "Sextile",
                "start_time": "2023-01-18 22:03:04",
                "exact_time": "2023-01-24 20:10:10",
                "end_time": "2023-01-30 09:36:16"
            },
            {
                "transit_planet": "Uranus",
                "natal_planet": "Sun",
                "aspect_type": "Trine",
                "start_time": "2022-11-16 13:59:51",
                "exact_time": "2022-12-13 11:45:19",
                "end_time": "2023-03-28 14:04:18"
            },
            {
                "transit_planet": "Sun",
                "natal_planet": "Mercury",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-25 12:41:49",
                "exact_time": "2023-01-27 03:13:47",
                "end_time": "2023-01-28 17:47:07"
            },
            {
                "transit_planet": "Mercury",
                "natal_planet": "Uranus",
                "aspect_type": "Trine",
                "start_time": "2023-01-26 23:48:17",
                "exact_time": "2023-01-27 03:19:40",
                "end_time": "2023-01-27 06:52:09"
            },
            {
                "transit_planet": "Jupiter",
                "natal_planet": "Mercury",
                "aspect_type": "Sextile",
                "start_time": "2023-01-27 08:32:39",
                "exact_time": "2023-01-27 12:06:48",
                "end_time": "2023-01-27 15:42:03"
            },
            {
                "transit_planet": "Venus",
                "natal_planet": "Moon",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-26 23:11:37",
                "exact_time": "2023-01-28 13:44:48",
                "end_time": "2023-01-30 04:19:26"
            },
            {
                "transit_planet": "Uranus",
                "natal_planet": "Sun",
                "aspect_type": "Trine",
                "start_time": "2023-01-28 10:11:41",
                "exact_time": "2023-01-28 13:53:38",
                "end_time": "2023-01-28 17:36:39"
            },
            {
                "transit_planet": "Moon",
                "natal_planet": "Sun",
                "aspect_type": "Square",
                "start_time": "2023-01-29 07:40:55",
                "exact_time": "2023-01-31 06:56:31",
                "end_time": "2023-02-02 06:13:57"
            },
            {
                "transit_planet": "Moon",
                "natal_planet": "Venus",
                "aspect_type": "Square",
                "start_time": "2023-01-29 06:34:48",
                "exact_time": "2023-01-29 10:22:20",
                "end_time": "2023-01-29 14:10:49"
            },
            {
                "transit_planet": "Mercury",
                "natal_planet": "Uranus",
                "aspect_type": "Trine",
                "start_time": "2023-01-28 22:30:21",
                "exact_time": "2023-01-30 23:17:52",
                "end_time": "2023-02-01 20:06:20"
            },
            {
                "transit_planet": "Jupiter",
                "natal_planet": "Mercury",
                "aspect_type": "Sextile",
                "start_time": "2023-01-30 09:41:39",
                "exact_time": "2023-01-30 13:35:19",
                "end_time": "2023-01-30 17:29:43"
            },
            {
                "transit_planet": "Venus",
                "natal_planet": "Moon",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-30 20:37:12",
                "exact_time": "2023-02-01 19:54:13",
                "end_time": "2023-02-03 19:13:06"
            },
            {
                "transit_planet": "Venus",
                "natal_planet": "Jupiter",
                "aspect_type": "Conjunction",
                "start_time": "2023-01-31 10:37:24",
                "exact_time": "2023-01-31 14:35:14",
                "end_time": "2023-01-31 18:33:36"
            }
        ]
    }

]

const tropicalarr = [
    {
        "week_start_date": "11-6-2017",
        "week_end_date": "17-6-2017",
        "ascendant": "Leo",
        "moon_phase": null,
        "transit_relation": [
            {
                "transit_planet": "Saturn",
                "natal_planet": "Jupiter",
                "type": "Trine",
                "orb": 0.79,
                "date": "11-6-2017"
            },
            {
                "transit_planet": "Mercury",
                "natal_planet": "Saturn",
                "type": "Trine",
                "orb": 0.74,
                "date": "12-6-2017"
            },
            {
                "transit_planet": "Mercury",
                "natal_planet": "Ascendant",
                "type": "Sextile",
                "orb": 0.57,
                "date": "16-6-2017"
            },
            {
                "transit_planet": "Saturn",
                "natal_planet": "Moon",
                "type": "Sextile",
                "orb": 0.48,
                "date": "17-6-2017"
            }
        ],
        "retrogrades": []
    }
]

const trodarr = [
    {
        "transit_date": "17-6-2017",
        "ascendant": "Leo",
        "transit_house": [
            {
                "planet": "Sun",
                "natal_sign": "Taurus",
                "transit_house": 11,
                "is_retrograde": false
            },
            {
                "planet": "Moon",
                "natal_sign": "Libra",
                "transit_house": 8,
                "is_retrograde": false
            },
            {
                "planet": "Mercury",
                "natal_sign": "Aries",
                "transit_house": 11,
                "is_retrograde": false
            },
            {
                "planet": "Venus",
                "natal_sign": "Aries",
                "transit_house": 10,
                "is_retrograde": false
            },
            {
                "planet": "Mars",
                "natal_sign": "Taurus",
                "transit_house": 12,
                "is_retrograde": false
            },
            {
                "planet": "Jupiter",
                "natal_sign": "Aries",
                "transit_house": 3,
                "is_retrograde": false
            },
            {
                "planet": "Saturn",
                "natal_sign": "Libra",
                "transit_house": 5,
                "is_retrograde": true
            },
            {
                "planet": "Uranus",
                "natal_sign": "Aries",
                "transit_house": 9,
                "is_retrograde": false
            },
            {
                "planet": "Neptune",
                "natal_sign": "Pisces",
                "transit_house": 8,
                "is_retrograde": true
            },
            {
                "planet": "Pluto",
                "natal_sign": "Capricorn",
                "transit_house": 6,
                "is_retrograde": true
            }
        ],
        "transit_relation": [
            {
                "transit_planet": "Sun",
                "natal_planet": "Jupiter",
                "type": "Sextile",
                "orb": 0.66
            },
            {
                "transit_planet": "Moon",
                "natal_planet": "Sun",
                "type": "Sextile",
                "orb": 0.43
            },
            {
                "transit_planet": "Saturn",
                "natal_planet": "Moon",
                "type": "Sextile",
                "orb": 0.48
            }
        ],
        "retrogrades": [],
        "moon_phase": null
    }
]

export default function Gochartransit() {

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">

                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Natal Transits   </span> Weekly Report"
                    </h5>
                    <div className="text-[#000]">
                        {tranarr.map((item, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <div className="flex flex-col md:flex-row justify-between px-10 gap-1 items-center shadow-lg rounded-lg border border-purple-100  py-3">
                                    <p className="flex items-center gap-2"><strong>Start Date:</strong> <span>{item.start_date}</span></p>
                                    <p className="flex items-center gap-2"><strong>End Date:</strong> <span>{item.end_date}</span></p>
                                    <p className="flex items-center gap-2"><strong>Natal Ascendant:</strong> <span>{item.natal_ascendant}</span></p>
                                </div>

                                <h3 className="text-center font-semibold">Transit Relations</h3>
                                <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                    <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                        <div className="pl-ul grid grid-cols-6 bg-purple-400 rounded-lg px-5 py-2">
                                            <h5 className="text-sm font-semibold">Transit Planet</h5>
                                            <h5 className="text-sm font-semibold">Natal Planet</h5>
                                            <h5 className="text-sm font-semibold">Aspect Type</h5>
                                            <h5 className="text-sm font-semibold">Start Time</h5>
                                            <h5 className="text-sm font-semibold">Exact Time</h5>
                                            <h5 className="text-sm font-semibold">End Time</h5>
                                        </div>


                                        {item.transit_relation.map((relation, i) => (
                                            <div key={i} className="basic-card grid grid-cols-6 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                                <span className="text-sm">{relation.transit_planet}</span>
                                                <span className="text-sm">{relation.natal_planet}</span>
                                                <span className="text-sm">{relation.aspect_type}</span>
                                                <span className="text-sm">{relation.start_time}</span>
                                                <span className="text-sm">{relation.exact_time}</span>
                                                <span className="text-sm">{relation.end_time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center w-full">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Tropical Transit   </span> Weekly Report"
                    </h5>
                    <div className="text-[#000] w-full">
                        {tropicalarr.map((item, index) => (
                            <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                <div key={index} className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                    <div className="grid grid-cols-2 px-10 gap-1 items-center shadow-lg rounded-lg border border-purple-100  py-3">
                                        <p className="flex items-center gap-2"><strong>Week Start Date:</strong> <span>{item.week_start_date}</span></p>
                                        <p className="flex items-center gap-2"><strong>Week End Date:</strong> <span>{item.week_end_date}</span></p>
                                        <p className="flex items-center gap-2"><strong>Ascendant:</strong> <span>{item.ascendant}</span></p>
                                        <p className="flex items-center gap-2"><strong>Moon Phase:</strong> <span>{item.moon_phase}</span></p>

                                    </div>

                                    <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                        <div className="pl-ul grid grid-cols-5 bg-purple-400 rounded-lg px-5 py-2">
                                            <h5 className="text-sm font-semibold">Transit Planet</h5>
                                            <h5 className="text-sm font-semibold">Natal Planet</h5>
                                            <h5 className="text-sm font-semibold"> Type</h5>
                                            <h5 className="text-sm font-semibold">Orb</h5>
                                            <h5 className="text-sm font-semibold">Date</h5>

                                        </div>


                                        {item.transit_relation.map((relation, i) => (
                                            <div key={i} className="basic-card grid grid-cols-5 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                                <span className="text-sm">{relation.transit_planet}</span>
                                                <span className="text-sm">{relation.natal_planet}</span>
                                                <span className="text-sm">{relation.type}</span>
                                                <span className="text-sm">{relation.orb}</span>
                                                <span className="text-sm">{relation.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center w-full">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Tropical Transit   </span> Daily Report"
                    </h5>
                    <div className="text-[#000] w-full">
                        {trodarr.map((item, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 px-10 gap-1 items-center shadow-lg rounded-lg border border-purple-100  py-3">
                                    <p className="flex items-center gap-2"><strong>Transit Date:</strong> <span>{item.transit_date}</span></p>
                                    <p className="flex items-center gap-2"><strong>Ascendant:</strong> <span>{item.ascendant}</span></p>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-center font-semibold">Transit House</span>
                                    <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                        <div className="basic-box flex flex-col gap-1 w-[22rem] md:w-full">
                                            <div className="pl-ul grid grid-cols-4 bg-purple-400 rounded-lg px-5 py-2">
                                                <h5 className="text-sm font-semibold"> Planet</h5>
                                                <h5 className="text-sm font-semibold">Natal natal_sign</h5>
                                                <h5 className="text-sm font-semibold"> Transit House</h5>
                                                <h5 className="text-sm font-semibold">Is Retrograde</h5>
                                            </div>
                                            {item.transit_house.map((relation, i) => (
                                                <div key={i} className="basic-card grid grid-cols-4 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                                    <span className="text-sm">{relation.planet}</span>
                                                    <span className="text-sm">{relation.natal_sign}</span>
                                                    <span className="text-sm">{relation.transit_house}</span>
                                                    <span className="text-sm">{relation.is_retrograde}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-center font-semibold">Transit Relation</span>
                                    <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                        <div className="basic-box flex flex-col gap-1 w-[22rem] md:w-full">
                                            <div className="pl-ul grid grid-cols-3 bg-purple-400 rounded-lg px-5 py-2">
                                                <h5 className="text-sm font-semibold">Transit Planet</h5>
                                                <h5 className="text-sm font-semibold">Natal Planet</h5>
                                                <h5 className="text-sm font-semibold"> Type</h5>
                                            </div>
                                            {item.transit_relation.map((relation, i) => (
                                                <div key={i} className="basic-card grid grid-cols-3 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                                    <span className="text-sm">{relation.transit_planet}</span>
                                                    <span className="text-sm">{relation.natal_planet}</span>
                                                    <span className="text-sm">{relation.type}</span>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
