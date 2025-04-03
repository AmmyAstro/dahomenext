"use client"; // Required for interactive UI in Next.js 13+
import Link from "next/link";
import { useState } from "react";

const varsharr = [
    {
        "year_lord": "Mars",
        "varshaphal_date": "27-06-2001 21:36:24",
        "chart": [
            {
                "sign": 10,
                "sign_name": "Capricorn",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 11,
                "sign_name": "Aquarius",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 12,
                "sign_name": "Pisces",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 1,
                "sign_name": "Aries",
                "planet": [
                    "VENUS"
                ],
                "planet_small": [
                    "Ve "
                ],
                "planet_degree": []
            },
            {
                "sign": 2,
                "sign_name": "Taurus",
                "planet": [
                    "MERCURY",
                    "SATURN"
                ],
                "planet_small": [
                    "Me ",
                    "Sa "
                ],
                "planet_degree": []
            },
            {
                "sign": 3,
                "sign_name": "Gemini",
                "planet": [
                    "SUN",
                    "JUPITER",
                    "RAHU"
                ],
                "planet_small": [
                    "Su ",
                    "Ju ",
                    "Ra "
                ],
                "planet_degree": []
            },
            {
                "sign": 4,
                "sign_name": "Cancer",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 5,
                "sign_name": "Leo",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 6,
                "sign_name": "Virgo",
                "planet": [
                    "MOON"
                ],
                "planet_small": [
                    "Mo "
                ],
                "planet_degree": []
            },
            {
                "sign": 7,
                "sign_name": "Libra",
                "planet": [],
                "planet_small": [],
                "planet_degree": []
            },
            {
                "sign": 8,
                "sign_name": "Scorpio",
                "planet": [
                    "MARS"
                ],
                "planet_small": [
                    "Ma "
                ],
                "planet_degree": []
            },
            {
                "sign": 9,
                "sign_name": "Sagittarius",
                "planet": [
                    "KETU"
                ],
                "planet_small": [
                    "Ke "
                ],
                "planet_degree": []
            }
        ]
    }
]

const varshdet = [
    {
        "varshaphala_year": 2001,
        "age_of_native": 1,
        "ayanamsha_name": "LAHIRI",
        "ayanamsha_degree": 23.8779,
        "varshaphala_timestamp": 993677784000,
        "native_birth_date": "27-06-2000 15:30:00",
        "varshaphala_date": "27-06-2001 21:36:24",
        "panchadhikari": {
            "muntha_lord": "Mars",
            "muntha_lord_id": 2,
            "birth_ascendant_lord": "Venus",
            "birth_ascendant_lord_id": 5,
            "year_ascendant_lord": "Saturn",
            "year_ascendant_lord_id": 6,
            "dinratri_lord": "Mercury",
            "trirashi_lord": "Mars"
        },
        "varshaphala_year_lord": "Mars",
        "varshaphala_muntha": {
            "muntha_sign": "Scorpio",
            "muntha_sign_lord": "Mars"
        }
    }
]

const varshplanet = [
    
        {
            "id": 0,
            "name": "Sun",
            "fullDegree": 72.18940674617663,
            "normDegree": 12.18940674617663,
            "speed": 0.9539452243199952,
            "isRetro": "false",
            "sign": "Gemini",
            "signLord": "Mercury",
            "nakshatra": "Ardra",
            "nakshatraLord": "Rahu",
            "nakshatra_pad": 2,
            "house": 12,
            "is_planet_set": false,
            "planet_awastha": "Yuva"
        },
        {
            "id": 1,
            "name": "Moon",
            "fullDegree": 60.53349349753208,
            "normDegree": 0.5334934975320778,
            "speed": 11.827711506359607,
            "isRetro": "false",
            "sign": "Gemini",
            "signLord": "Mercury",
            "nakshatra": "Mrigshira",
            "nakshatraLord": "Mars",
            "nakshatra_pad": 3,
            "house": 12,
            "is_planet_set": true,
            "planet_awastha": "Bala"
        },
        {
            "id": 2,
            "name": "Mars",
            "fullDegree": 0.741288656260683,
            "normDegree": 0.741288656260683,
            "speed": 0.7119873764381827,
            "isRetro": "false",
            "sign": "Aries",
            "signLord": "Mars",
            "nakshatra": "Ashwini",
            "nakshatraLord": "Ketu",
            "nakshatra_pad": 1,
            "house": 10,
            "is_planet_set": false,
            "planet_awastha": "Bala"
        },
        {
            "id": 3,
            "name": "Mercury",
            "fullDegree": 52.93784158043533,
            "normDegree": 22.937841580435332,
            "speed": 1.601263570603116,
            "isRetro": "false",
            "sign": "Taurus",
            "signLord": "Venus",
            "nakshatra": "Rohini",
            "nakshatraLord": "Moon",
            "nakshatra_pad": 4,
            "house": 11,
            "is_planet_set": false,
            "planet_awastha": "Kumara"
        },
        {
            "id": 4,
            "name": "Jupiter",
            "fullDegree": 343.0447942759372,
            "normDegree": 13.044794275937193,
            "speed": 0.09469955415258587,
            "isRetro": "false",
            "sign": "Pisces",
            "signLord": "Jupiter",
            "nakshatra": "Uttra Bhadrapad",
            "nakshatraLord": "Saturn",
            "nakshatra_pad": 3,
            "house": 9,
            "is_planet_set": false,
            "planet_awastha": "Yuva"
        },
        {
            "id": 5,
            "name": "Venus",
            "fullDegree": 41.819250660352424,
            "normDegree": 11.819250660352424,
            "speed": 1.1934112336305052,
            "isRetro": "false",
            "sign": "Taurus",
            "signLord": "Venus",
            "nakshatra": "Rohini",
            "nakshatraLord": "Moon",
            "nakshatra_pad": 1,
            "house": 11,
            "is_planet_set": false,
            "planet_awastha": "Vridha"
        },
        {
            "id": 6,
            "name": "Saturn",
            "fullDegree": 300.65843774261566,
            "normDegree": 0.6584377426156607,
            "speed": -0.03624728410538493,
            "isRetro": "true",
            "sign": "Aquarius",
            "signLord": "Saturn",
            "nakshatra": "Dhanishtha",
            "nakshatraLord": "Mars",
            "nakshatra_pad": 3,
            "house": 8,
            "is_planet_set": false,
            "planet_awastha": "Bala"
        },
        {
            "id": 7,
            "name": "Rahu",
            "fullDegree": 25.9351218834935,
            "normDegree": 25.9351218834935,
            "speed": -0.05299198276767747,
            "isRetro": "true",
            "sign": "Aries",
            "signLord": "Mars",
            "nakshatra": "Bharni",
            "nakshatraLord": "Venus",
            "nakshatra_pad": 4,
            "house": 10,
            "is_planet_set": false,
            "planet_awastha": "Mrit"
        },
        {
            "id": 8,
            "name": "Ketu",
            "fullDegree": 205.9351218834935,
            "normDegree": 25.935121883493508,
            "speed": -0.05299198276767747,
            "isRetro": "true",
            "sign": "Libra",
            "signLord": "Venus",
            "nakshatra": "Vishakha",
            "nakshatraLord": "Jupiter",
            "nakshatra_pad": 2,
            "house": 4,
            "is_planet_set": false,
            "planet_awastha": "Mrit"
        },
        {
            "id": 9,
            "name": "Ascendant",
            "fullDegree": 90.49569662262402,
            "normDegree": 0.49569662262402403,
            "speed": 0,
            "isRetro": false,
            "sign": "Cancer",
            "signLord": "Moon",
            "nakshatra": "Punarvasu",
            "nakshatraLord": "Jupiter",
            "nakshatra_pad": 4,
            "house": 1,
            "is_planet_set": false,
            "planet_awastha": "--"
        }
    
]


function roundUp(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
}
export default function Varshaphal() {
    const [formData, setFormData] = useState({
        name: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        birthHour: "",
        birthMinute: "",
        birthSecond: "",
        birthPlace: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        alert("Form submitted successfully!");
    };

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => 1950 + i);
    const hours = Array.from({ length: 24 }, (_, i) => i + 1);
    const minutesAndSeconds = Array.from({ length: 60 }, (_, i) => i);

    const [activeCompat, setCompat] = useState(0);

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">

            <div className="get-compat flex flex-col gap-5 w-full">
                <div className="compat-patner grid md:grid-cols-1  gap-5 w-[80%] place-self-center">

                    <div className="  md:p-6 p-2 py-3 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                        <h2 className="md:text-xl text-center text-[#000] font-semibold md:mb-4 mb-2">
                            Get Your Varshaphal Details
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col md:flex-row items-start justify-between">
                                <div className="w-full">
                                    <label className="block text-xs md:text-sm text-[#666] font-medium">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name..."
                                        className=" mt-1 p-1.5 md:p-2 shadow-lg rounded-full placeholder:text-xs text-sm text-[#666] bg-white outline-0 border-0 w-[100%]"
                                    />
                                </div>

                            </div>

                            <div className="dob-dt flex flex-col gap-2 w-full  justify-between">
                                <div className="">
                                    <label className="block text-xs md:text-sm text-[#666] font-medium">
                                        Date of Birth:
                                    </label>
                                    <div className="flex space-x-2 ">
                                        <select
                                            name="dobDay"
                                            value={formData.dobDay}
                                            onChange={handleChange}
                                            required
                                            className="shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5  text-[#555] rounded-full bg-white outline-0 border-0"
                                        >
                                            <option value="">Day</option>
                                            {days.map((day) => (
                                                <option key={day} value={day}>
                                                    {day}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            name="dobMonth"
                                            value={formData.dobMonth}
                                            onChange={handleChange}
                                            required
                                            className=" shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5  text-[#555] rounded-full bg-white outline-0 border-0"
                                        >
                                            <option value="">Month</option>
                                            {months.map((month, index) => (
                                                <option key={month} value={index + 1}>
                                                    {month}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            name="dobYear"
                                            value={formData.dobYear}
                                            onChange={handleChange}
                                            required
                                            className="shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5  text-[#555] rounded-full bg-white outline-0 border-0"
                                        >
                                            <option value="">Year</option>
                                            {years.map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="">
                                    <label className="block text-xs md:text-sm text-[#666] font-medium">
                                        Birth Time:
                                    </label>
                                    <div className="flex space-x-2">
                                        <select
                                            name="birthHour"
                                            value={formData.birthHour}
                                            onChange={handleChange}
                                            required
                                            className=" shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5 bg-white outline-0 border-0 text-[#555] rounded-full"
                                        >
                                            <option value="" className="text-[#555]">HH</option>
                                            {hours.map((hour) => (
                                                <option key={hour} value={hour}>
                                                    {hour}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            name="birthMinute"
                                            value={formData.birthMinute}
                                            onChange={handleChange}
                                            required
                                            className=" shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5 text-[#555] bg-white outline-0 border-0 rounded-full"
                                        >
                                            <option value="" className="text-[#555]">MM</option>
                                            {minutesAndSeconds.map((min) => (
                                                <option key={min} value={min}>
                                                    {min}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            name="birthSecond"
                                            value={formData.birthSecond}
                                            onChange={handleChange}
                                            required
                                            className="shadow-lg w-1/3 md:text-sm text-xs md:p-2 p-1.5 text-[#555] bg-white outline-0 border-0 rounded-full"
                                        >
                                            <option value="" >SS</option>
                                            {minutesAndSeconds.map((sec) => (
                                                <option key={sec} value={sec}>
                                                    {sec}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block text-xs md:text-sm text-[#666] font-medium">
                                    Varshaphal year for which you want the details :
                                </label>
                                <input
                                    type="text"
                                    name="varshaphal year"
                                    value={formData.birthPlace}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter varshaphal year..."
                                    className="md:w-full w-full mt-1 md:p-2 p-1.5 text-[#666] placeholder:text-xs  rounded-full bg-white outline-0 border-0 shadow-lg"
                                />
                            </div>
                        </form>
                    </div>

                </div>
                <div className="btn-kun flex  items-center justify-center w-full">
                    <Link href={"#"}>
                        <button
                            type="submit"
                            className="md:w-[20rem] w-[10rem] text-sm md:text-base  justify-self-center bg-[#2f1254] text-white p-2 rounded-full hover:bg-[#2f1254a1]"
                        >
                            Submit
                        </button></Link>
                </div>
            </div>


            <div className="result-compat text-[#000] flex flex-col gap-5 mt-5">

                <h5 className="text-xl text-center text-red-500  font-semibold">Varshaphal Details</h5>

                <div className="grid grid-cols-2 gap-5">
                    <div className="yaerly-chart items-center gap-2 justify-start flex flex-col">
                        <h5 className="bg-purple-400 rounded-lg px-2 py-1 w-fit">Yearly Chart</h5>
                        <div>
                            {varsharr.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex flex-col gap- items-center justify-center">
                                        <h2>Year Lord: {item.year_lord}</h2>
                                        <p>Varshaphal Date: {item.varshaphal_date}</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="grid grid-cols-3 bg-purple-300 rounded-lg px-4 py-1">
                                            <span>Sign</span>
                                            <span>Sign Name</span>
                                            <span>Planets</span>
                                        </div>
                                        {item.chart.map((chartItem, chartIndex) => (
                                            <div className="grid grid-cols-3 bg-purple-100 rounded-lg px-4 py-1" key={chartIndex}>
                                                <span>{chartItem.sign}</span>
                                                <span>{chartItem.sign_name} </span>
                                                <span>{chartItem.planet.length > 0 ? chartItem.planet.join(", ") : "None"}</span >
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="yaerly-chart items-center gap-2 justify-center flex flex-col">
                        <h5 className="bg-purple-400 rounded-lg px-2 py-1 w-fit">Yearly Details</h5>
                        <div>
                            {varshdet.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Varshaphala Year :</span> <span>{item.varshaphala_year}</span></div>
                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Age Of Native :</span> <span>{item.age_of_native}</span></div>

                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Ayanamsha Name :</span> <span>{item.ayanamsha_name}</span></div>
                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Ayanamsha Degree :</span> <span>{item.ayanamsha_degree}</span></div>
                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Native Birth Date :</span> <span>{item.native_birth_date}</span></div>
                                    <div className="flex flex-col items-center justify-center gap-1"><h5 className="text-center bg-purple-400 rounded-lg px-2 py-1 w-fit"> Panchadhikari</h5>
                                        <div className="flex flex-col w-full gap-1">
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Muntha Lord :</span> <span>{item.panchadhikari.muntha_lord}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span> Muntha Lord Id :</span> <span>{item.panchadhikari.muntha_lord_id}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span> Birth Ascendant Lord :</span> <span>{item.panchadhikari.birth_ascendant_lord}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Birth Ascendant Lord Id :</span> <span>{item.panchadhikari.birth_ascendant_lord_id}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Year Ascendant Lord :</span> <span>{item.panchadhikari.year_ascendant_lord}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Year Ascendant Lord Id :</span> <span>{item.panchadhikari.year_ascendant_lord_id}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Dinratri Lord :</span> <span>{item.panchadhikari.dinratri_lord}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Trirashi Lord :</span> <span>{item.panchadhikari.trirashi_lord}</span></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Varshaphala Year Lord :</span> <span>{item.varshaphala_year_lord}</span></div>
                                    <div className="flex flex-col items-center justify-center gap-1"><h5 className="text-center bg-purple-400 rounded-lg px-2 py-1 w-fit">Varshaphala Muntha</h5>
                                        <div className="flex flex-col w-full gap-1">
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Muntha Sign :</span> <span>{item.varshaphala_muntha.muntha_sign}</span></div>
                                            <div className="flex items-center justify-between bg-purple-100 rounded-lg px-4 py-1"><span>Muntha Sign Lord :</span> <span>{item.varshaphala_muntha.muntha_sign_lord}</span></div>
                                       
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="basic-det w-full">
                                <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Vashaphal Planets</h5>
                                <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                    <div className="pl-ul grid grid-cols-10 bg-purple-400 rounded-lg px-5 py-2">
                                        <h5 className="text-sm font-semibold">Planet</h5>
                                        <h5 className="text-sm font-semibold">Sign</h5>
                                        <h5 className="text-sm font-semibold">Sign Lord</h5>
                                        <h5 className="text-sm font-semibold">Degree</h5>
                                        <h5 className="text-sm font-semibold">Retro(R)</h5>
                                        <h5 className="text-sm font-semibold">House</h5>
                                        <h5 className="text-sm font-semibold">Nakshatra</h5>
                                        <h5 className="text-sm font-semibold">Nakshatra Lord</h5>
                                        <h5 className="text-sm font-semibold">Nakshatra Pad</h5>

                                        <h5 className="text-sm font-semibold">Planet Awastha</h5>

                                    </div>

                                    {varshplanet.map((varsh, index) => (
                                        <div key={index} className="basic-card grid grid-cols-10 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                            <span className="text-sm">{varsh.name}</span>
                                            <span className="text-sm">{varsh.sign}</span>
                                            <span className="text-sm">{varsh.signLord}</span>
                                            <span className="text-sm">{roundUp(varsh.normDegree, 3)}</span>
                                            <span className="text-sm">{varsh.isRetro}</span>
                                            <span className="text-sm">{varsh.house}</span>
                                            <span className="text-sm">{varsh.nakshatra}</span>
                                            <span className="text-sm">{varsh.nakshatraLord}</span>
                                            <span className="text-sm">{varsh.nakshatra_pad}</span>
                                            <span className="text-sm">{varsh.planet_awastha}</span>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>



            </div>





        </section>
    );
}
