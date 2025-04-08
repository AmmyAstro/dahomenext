"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";


const pointarr = [
    {
        id: 1,
        name: "Ashtakoota",
        src: "/ds-img/wedding-couple.png",
        nmdet: {
            "status": "true",
            "received_points": 22
        }
    },
    {
        id: 2,
        name: "Manglik",
        src: "/ds-img/ology.webp",
        nmdet: {
            "status": "true",
            "male_percentage": 18.75,
            "female_percentage": 18.75
        }
    },
    {
        id: 3,
        name: "Rajju_dosha",
        src: "/ds-img/galaxy.png",
        nmdet: {
            "status": "false"
        },
    },
    {
        id: 4,
        name: "Vedha_dosha",
        src: "/ds-img/k11.png",
        nmdet: {
            "status": "false"
        },

    },

]

const maleplanet = [
    {
        "id": 0,
        "name": "Sun",
        "fullDegree": 72.18954079246434,
        "normDegree": 12.189540792464342,
        "speed": 0.9537797443255392,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 2,
        "house": 9,
        "is_planet_set": false,
        "planet_awastha": "Yuva"
    },
    {
        "id": 1,
        "name": "Moon",
        "fullDegree": 11.72351598586304,
        "normDegree": 11.72351598586304,
        "speed": 13.920316198066743,
        "isRetro": "false",
        "sign": "Aries",
        "signLord": "Mars",
        "nakshatra": "Ashwini",
        "nakshatraLord": "Ketu",
        "nakshatra_pad": 4,
        "house": 7,
        "is_planet_set": false,
        "planet_awastha": "Kumara"
    },
    {
        "id": 2,
        "name": "Mars",
        "fullDegree": 73.41992352157277,
        "normDegree": 13.41992352157277,
        "speed": 0.6649777633290916,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 3,
        "house": 9,
        "is_planet_set": true,
        "planet_awastha": "Yuva"
    },
    {
        "id": 3,
        "name": "Mercury",
        "fullDegree": 85.49171301406825,
        "normDegree": 25.491713014068253,
        "speed": -0.29467903633858694,
        "isRetro": "true",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Punarvasu",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 2,
        "house": 9,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 4,
        "name": "Jupiter",
        "fullDegree": 35.53009646668099,
        "normDegree": 5.5300964666809875,
        "speed": 0.2119922731034037,
        "isRetro": "false",
        "sign": "Taurus",
        "signLord": "Venus",
        "nakshatra": "Krittika",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 3,
        "house": 8,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 5,
        "name": "Venus",
        "fullDegree": 76.57181911264793,
        "normDegree": 16.57181911264793,
        "speed": 1.2289765385390012,
        "isRetro": "false",
        "sign": "Gemini",
        "signLord": "Mercury",
        "nakshatra": "Ardra",
        "nakshatraLord": "Rahu",
        "nakshatra_pad": 3,
        "house": 9,
        "is_planet_set": true,
        "planet_awastha": "Yuva"
    },
    {
        "id": 6,
        "name": "Saturn",
        "fullDegree": 32.39707346334402,
        "normDegree": 2.3970734633440216,
        "speed": 0.10910000257030411,
        "isRetro": "false",
        "sign": "Taurus",
        "signLord": "Venus",
        "nakshatra": "Krittika",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 2,
        "house": 8,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 7,
        "name": "Rahu",
        "fullDegree": 91.7592615626992,
        "normDegree": 1.7592615626991943,
        "speed": -0.05299201968813196,
        "isRetro": "true",
        "sign": "Cancer",
        "signLord": "Moon",
        "nakshatra": "Punarvasu",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 4,
        "house": 10,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 8,
        "name": "Ketu",
        "fullDegree": 271.7592615626992,
        "normDegree": 1.75926156269918,
        "speed": -0.05299201968813196,
        "isRetro": "true",
        "sign": "Capricorn",
        "signLord": "Saturn",
        "nakshatra": "Uttra Shadha",
        "nakshatraLord": "Sun",
        "nakshatra_pad": 2,
        "house": 4,
        "is_planet_set": false,
        "planet_awastha": "Mrit"
    },
    {
        "id": 9,
        "name": "Ascendant",
        "fullDegree": 207.92868587120444,
        "normDegree": 27.928685871204436,
        "speed": 0,
        "isRetro": false,
        "sign": "Libra",
        "signLord": "Venus",
        "nakshatra": "Vishakha",
        "nakshatraLord": "Jupiter",
        "nakshatra_pad": 3,
        "house": 1,
        "is_planet_set": false,
        "planet_awastha": "--"
    }
]

const malemang = [
    {
        "percentage_manglik_present": 23.5,
        "manglik_status": "LESS_EFFECTIVE",
        "percentage_manglik_after_cancellation": 18.5,
        "manglik_report": "The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.",
        "manglik_cancel_rule": "Mars mangalik dosha is get cancelled because Mars is situated in Eighth house with Pisces",
        "based_on_aspect": [
            "Fourth house of your birth chart is aspected by KETU",
            "Twelfth house of your birth chart is aspected by KETU.",
            "RAHU is aspecting eighth house of your birth chart.",
            "MARS is aspecting second house of your birth chart.",
            "KETU is aspecting second house of your birth chart.",
            "Your first house in birth chart is aspected by planet SUN.",
            "Your first house in birth chart is aspected by planet SATURN."
        ],
        "based_on_house": [
            "Planet Rahu is situated in SECOND house in your birth chart.",
            "Planet Saturn is in FOURTH house in your horoscope.",
            "Planet Sun is situated in SEVENTH house in your birth chart.",
            "EIGHTH house is occupied by planet Mars in your birth chart.",
            "Planet Ketu is situated in EIGHTH house in your birth chart."
        ]
    }
]

const femang = [
    {
        "percentage_manglik_present": 223.5,
        "manglik_status": "LESS_EFFECTIVE",
        "percentage_manglik_after_cancellation": 18.5,
        "manglik_cancel_rule": "Mars mangalik dosha is get cancelled because Mars is situated in Eighth house with Pisces",
        "manglik_report": "The manglik dosha is present in your horoscope, however it is less effective. With some remedies related to mangalik dosha this can be reduced further.",
        "based_on_house": [
            "Planet Rahu is situated in SECOND house in your birth chart.",
            "Planet Saturn is in FOURTH house in your horoscope.",
            "Planet Sun is situated in SEVENTH house in your birth chart.",
            "EIGHTH house is occupied by planet Mars in your birth chart.",
            "Planet Ketu is situated in EIGHTH house in your birth chart."
        ],
        "based_on_aspect": [
            "Fourth house of your birth chart is aspected by KETU",
            "Twelfth house of your birth chart is aspected by KETU.",
            "RAHU is aspecting eighth house of your birth chart.",
            "MARS is aspecting second house of your birth chart.",
            "KETU is aspecting second house of your birth chart.",
            "Your first house in birth chart is aspected by planet SUN.",
            "Your first house in birth chart is aspected by planet SATURN."
        ],
    }
]

const percentage = [
    {
        "ashtakoota_percentage": 58,
        "manglik_match_percentage": 85,
        "rajju_match_percentage": 100,
        "vedha_match_percentage": 100,
        "match_percentage": 79,
        "is_match_good": true
    }
]

const mfdetails = [
    {
        gender: "Male",
        "ascendant": "Libra",
        "Varna": "Kshatriya",
        "Vashya": "Chatuspad",
        "Yoni": "Ashwa",
        "Gan": "Dev",
        "Nadi": "Adi",
        "SignLord": "Mars",
        "sign": "Aries",
        "Naksahtra": "Ashwini",
        "NaksahtraLord": "Ketu",
        "Charan": 4,
        "Yog": "Sukarma",
        "Karan": "Vishti",
        "Tithi": "Krishna Dashami",
        "yunja": "Poorva",
        "tatva": "Fire",
        "name_alphabet": "La",
        "paya": "Gold"
    },
    {
        gender: "Female",
        "ascendant": "Libra",
        "Varna": "Kshatriya",
        "Vashya": "Chatuspad",
        "Yoni": "Ashwa",
        "Gan": "Dev",
        "Nadi": "Adi",
        "SignLord": "Mars",
        "sign": "Aries",
        "Naksahtra": "Ashwini",
        "NaksahtraLord": "Ketu",
        "Charan": 4,
        "Yog": "Sukarma",
        "Karan": "Vishti",
        "Tithi": "Krishna Dashami",
        "yunja": "Poorva",
        "tatva": "Fire",
        "name_alphabet": "La",
        "paya": "Gold"
    }
]

const arraydata = {
    "Varna": {
        "description": "Natural Refinement  / Work",
        "male_koot_attribute": "Kshatriya",
        "female_koot_attribute": "Kshatriya",
        "total_points": 1,
        "received_points": 1,
        "male_point": 1,
        "female_point": 1
    },
    "Tara": {
        "description": "Comfort - Prosperity - Health",
        "male_koot_attribute": "Ashwini",
        "female_koot_attribute": "Ashwini",
        "total_points": 3,
        "received_points": 3,
        "male_point": 1,
        "female_point": 1
    },
    "Yoni": {
        "description": "Intimate Physical",
        "male_koot_attribute": "Ashwa",
        "female_koot_attribute": "Ashwa",
        "total_points": 4,
        "received_points": 4,
        "male_point": 1,
        "female_point": 1
    },
};

export default function Matchkuinter() {

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
  

            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-5">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold"><span className="text-red-500">Free Match Making - Kundli Milan</span> Report
                    </h5>
                    <section className="basic-details-main w-full">

                        <div className="match-details-all flex flex-col gap-5 items-center justify-center ">
                            <div className="flex items-center gap-20 text-[#000]">
                            <Image src="/ds-img/newmatchboy.png" alt="weds image" width={50} height={50} className="w-20 h-auto"/>
                            <Image src="/ds-img/Couple.png" alt="weds image" width={50} height={50} />
                            <Image src="/ds-img/newmatchgrl.png" alt="weds image" width={50} height={50} className="w-20 h-auto"/>
                            </div>

                            <div className="grid grid-cols-2 gap-10 text-[#000] text-[15px] w-full">
                                <div className="basicboy bg-purple-200 rounded-lg shadow-lg flex flex-col gap-1 px-8 py-4">
                                    <div><span className="font-semibold">Name : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Date & Time : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Place : </span> <span></span></div>
                                    <div><span className="font-semibold">Janam Rashi : </span> <span></span></div>
                                    <div><span className="font-semibold">Rashi Lord : </span> <span></span></div>
                                </div>
                                <div className="basicgrl bg-purple-200 rounded-lg shadow-lg flex flex-col gap-1 px-8 py-4">
                                    <div><span className="font-semibold">Name : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Date & Time : </span> <span></span></div>
                                    <div><span className="font-semibold">Birth Place : </span> <span></span></div>
                                    <div><span className="font-semibold">Janam Rashi : </span> <span></span></div>
                                    <div><span className="font-semibold">Rashi Lord : </span> <span></span></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 w-full text-[#000] gap-5">
                                {pointarr.map((point, index) => (

                                    <div className="px-2 py-2 rounded-lg shadow-lg point-bx flex gap-2 flex-col  items-center justify-center bg-gradient-to-r from-[#c54e5a6b] to-[#7042ac98]" key={index}>
                                        <Image src={point.src} width={50} height={50} alt="points image" />
                                        <h5 className="p-1 w-full rounded-full bg-white text-center text-sm font-semibold ">{point.name}</h5>
                                        <div className="p-1 w-full rounded-full bg-white text-center text-xs  "><span>Status : </span>  <span>{point.nmdet.status}</span></div>

                                        {/* {point.id === 1 && (
                                            <div className="p-1 w-full rounded-full bg-white text-center text-xs  "><span>Points : </span>  <span>{point.nmdet.received_points}</span></div>
                                        )
                                        } */}

                                    </div>
                                ))}
                            </div>


                            <div className="w-full">
                                <div className="w-full">
                                    {percentage.map((percent, index) => (
                                        <div key={index} className="w-full grid-cols-3 grid md:grid-cols-5 md:gap-4 gap-2 md:p-5 p-3 shadow-xl rounded-lg bg-gradient-to-r from-[#c54e5a44] to-[#7042ac57]">
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="md:text-2xl text-xl text-[#2f1254] font-extrabold">{percent.ashtakoota_percentage}%</span>
                                                <span className="text-xs md:font-semibold text-[#000] bg-purple-100 px-2 py-1 rounded-lg">Ashtakoota Percentage</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="md:text-2xl text-xl text-[#2f1254] font-extrabold">{percent.manglik_match_percentage}%</span>
                                                <span className="text-xs md:font-semibold text-[#000] bg-purple-100 px-2 py-1 rounded-lg">Manglik Match Percentage</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="md:text-2xl text-xl text-[#2f1254] font-extrabold">{percent.rajju_match_percentage}%</span>
                                                <span className="text-xs md:font-semibold text-[#000] bg-purple-100 px-2 py-1 rounded-lg">Rajju Match Percentage</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="md:text-2xl text-xl text-[#2f1254] font-extrabold">{percent.vedha_match_percentage}%</span>
                                                <span className="text-xs md:font-semibold text-[#000] bg-purple-100 px-2 py-1 rounded-lg">Vedha Match Percentage</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <span className="md:text-2xl text-xl text-[#2f1254] font-extrabold">{percent.match_percentage}%</span>
                                                <span className="text-xs md:font-semibold text-[#000] bg-purple-100 px-2 py-1 rounded-lg">Match Percentage</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="manglik-table w-full">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    <div className="flex flex-col text-[#000] text-sm gap-2">
                                        <h5 className="md:text-2xl text-xl font-semibold text-center bg-purple-300 rounded-lg px-3 py-1 shadow-lg">Amrender</h5>
                                        {malemang.map((malemang, index) => (
                                            < >
                                                <div key={index} className="bg-gray-100 flex flex-col gap-1 rounded-lg px-4 py-4">
                                                    <div className="flex items-center justify-between ">
                                                        <span className="font-semibold">Male Manglik percentage </span> <span>{malemang.percentage_manglik_present}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Manglik Status </span> <span>{malemang.manglik_status}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Percentage Manglik After Cancellation </span> <span>{malemang.percentage_manglik_after_cancellation}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Male Manglik percentage </span> <span>{malemang.percentage_manglik_present}</span>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-100 flex flex-col gap-1 rounded-lg p-4">
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Report : </span> <span>{malemang.manglik_report}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Cancel Rule : </span> <span>{malemang.manglik_cancel_rule}</span></div>
                                                </div>

                                                <div className="bg-gray-100 flex flex-col gap-1 rounded-lg p-4">
                                                    <span className="text-xl font-semibold">Male Manglik Present Rule :</span>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On Aspects : </span> <span>{malemang.based_on_aspect}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On House : </span> <span>{malemang.based_on_house}</span></div>
                                                </div>
                                            </>
                                        ))}
                                    </div>

                                    <div className="flex flex-col text-[#000] text-sm gap-2">
                                        <h5 className="md:text-2xl text-xl font-semibold text-center bg-purple-300 rounded-lg px-3 py-1 shadow-lg">Girl</h5>
                                        {femang.map((femang, index) => (
                                            < >
                                                <div key={index} className="bg-gray-100 flex flex-col gap-1 rounded-lg px-4 py-4">
                                                    <div className="flex items-center justify-between ">
                                                        <span className="font-semibold">Female Manglik percentage </span> <span>{femang.percentage_manglik_present}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Manglik Status </span> <span>{femang.manglik_status}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Percentage Manglik After Cancellation </span> <span>{femang.percentage_manglik_after_cancellation}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold">Female Manglik percentage </span> <span>{femang.percentage_manglik_present}</span>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-100 flex flex-col gap-1 rounded-lg p-4">
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Report : </span> <span>{femang.manglik_report}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Manglik Cancel Rule : </span> <span>{femang.manglik_cancel_rule}</span></div>
                                                </div>

                                                <div className="bg-gray-100 flex flex-col gap-1 rounded-lg p-4">
                                                    <span className="text-xl font-semibold">Female Manglik Present Rule :</span>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On Aspects : </span> <span>{femang.based_on_aspect}</span></div>
                                                    <div className="flex flex-col items-start text-sm"><span className="font-semibold">Based On House : </span> <span>{femang.based_on_house}</span></div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <div className="mf-details w-full">
                                <h5 className="text-xl font-semibold text-center py-3 text-[#000]">Matching Astro Details</h5>
                                <div className="grid grid-cols-3 gap-1 md:gap-5 w-full">
                                    <div className="text-xs md:text-base flex flex-col text-[#000] gap-1 bg-purple-100 rounded-lg text-start px-2 p-1">
                                        <h5 className=" font-extrabold py-1 bg-purple-300 rounded-lg text-center">GUNAS</h5>

                                        <h5 className=" font-semibold">Ascendant</h5>
                                        <h5 className=" font-semibold">Varna</h5>
                                        <h5 className=" font-semibold">Vashya</h5>
                                        <h5 className=" font-semibold">Yoni</h5>
                                        <h5 className=" font-semibold">Gan </h5>
                                        <h5 className=" font-semibold">Nadi</h5>
                                        <h5 className=" font-semibold">SignLord</h5>
                                        <h5 className=" font-semibold">Sign</h5>
                                        <h5 className=" font-semibold">Nakshatra </h5>
                                        <h5 className=" font-semibold">NaksahtraLord</h5>
                                        <h5 className=" font-semibold">Charan </h5>
                                        <h5 className=" font-semibold">Yog</h5>
                                        <h5 className=" font-semibold">Karan</h5>
                                        <h5 className=" font-semibold">Tithi</h5>
                                        <h5 className=" font-semibold">Yunja </h5>
                                        <h5 className=" font-semibold">Tatva</h5>
                                        <h5 className=" font-semibold">Name Alphabet </h5>
                                        <h5 className=" font-semibold">Paya</h5>
                                    </div>

                                    {mfdetails.map((male, index) => (


                                        <div key={index} className="text-xs md:text-base flex flex-col text-[#000] gap-1 bg-purple-100 rounded-lg text-start px-2 p-1">
                                            <h5 className=" font-extrabold py-1 bg-purple-300 rounded-lg text-center">{male.gender}</h5>
                                            <h5 className=" font-">{male.ascendant}</h5>
                                            <h5 className=" font-">{male.Varna}</h5>
                                            <h5 className=" font-">{male.Vashya}</h5>
                                            <h5 className=" font-">{male.Yoni}</h5>
                                            <h5 className=" font-">{male.Gan} </h5>
                                            <h5 className=" font-">{male.Nadi}</h5>
                                            <h5 className=" font-">{male.SignLord}</h5>
                                            <h5 className=" font-">{male.sign}</h5>
                                            <h5 className=" font-">{male.Naksahtra} </h5>
                                            <h5 className=" font-">{male.NaksahtraLord}</h5>
                                            <h5 className=" font-">{male.Charan} </h5>
                                            <h5 className=" font-">{male.Yog}</h5>
                                            <h5 className=" font-">{male.Karan}</h5>
                                            <h5 className=" font-">{male.Tithi}</h5>
                                            <h5 className=" font-">{male.yunja} </h5>
                                            <h5 className=" font-">{male.tatva}</h5>
                                            <h5 className=" font-">{male.name_alphabet} </h5>
                                            <h5 className=" font-">{male.paya}</h5>
                                        </div>
                                    ))}


                                </div>
                            </div>

                        <div className="askdoot w-full">
                            <h5 className="text-xl font-semibold text-center text-[#000]">Matching Ashtakoot Points</h5>
                        <div className="dakshakoot grid grid-cols-1 md:grid-cols-3 gap-4  py-2 w-full">
                                {Object.entries(arraydata).map(([key, value]) => (
                                    <div key={key} className=" border-b bg-purple-100 border-purple-200 p-4 text-sm rounded-lg shadow-lg text-[#000] flex flex-col gap-1">
                                        <span className="font-extrabold text-base"> {key} </span>
                                        <div className="flex items-center justify-between">  <div className="flex  gap-3 items-center"><span className="font-semibold text-purple-400">Male : </span> <span>{value.male_koot_attribute}</span></div>
                                            <div className="flex items-center gap-3">  <span className="font-semibold text-pink-400"> Female : </span><span> {value.female_koot_attribute} </span></div></div>
                                        <div className="flex items-center justify-between">  <div className="flex  items-center gap-3"><span className="font-semibold text-purple-400">Male Points : </span> <span>{value.male_point}</span></div>
                                            <div className="flex  items-center gap-3">  <span className="font-semibold text-pink-400"> Female Points : </span> <span>{value.female_point} </span></div></div>
                                        <div className="flex items-center gap-3">  <span className="font-semibold">Received Points: </span> <span>{value.received_points}/{value.total_points} </span></div>
                                    </div>
                                ))}
                            </div>
                        </div>




                            <div>
                                <div className="flex items-center gap-1">

                                    <div className="grid grid-cols-1 gap-2 text-[#000] overflow-x-auto w-[22rem] md:w-full  text-xs md:text-sm">
                                        <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                            <div className="pl-ul grid grid-cols-10 bg-purple-400 text-sm rounded-lg px-5 py-2 text-nowrap">
                                                <h5 className=" font-semibold">Id</h5>
                                                <h5 className=" font-semibold">Name</h5>
                                                <h5 className=" font-semibold">isRetro</h5>
                                                <h5 className=" font-semibold">House</h5>
                                                <h5 className=" font-semibold">Sign </h5>
                                                <h5 className=" font-semibold">Sign Lord</h5>
                                                <h5 className=" font-semibold">Nakshatra</h5>
                                                <h5 className=" font-semibold">Naksh Lord</h5>
                                                <h5 className=" font-semibold">Nakshatra Pad</h5>

                                                <h5 className=" font-semibold">Planet Awastha</h5>
                                            </div>

                                            {maleplanet.map((male, index) => (
                                                <div key={index} className="text-sm basic-card grid grid-cols-10 gap-1 bg-purple-200 rounded-lg px-5 py-2 text-nowrap">
                                                    <span className="">{male.id}</span>
                                                    <span className="">{male.name}</span>
                                                    <span className="">{male.isRetro}</span>
                                                    <span className="">{male.house}</span>
                                                    <span className="">{male.sign}</span>
                                                    <span className="">{male.signLord}</span>
                                                    <span className="">{male.nakshatra}</span>
                                                    <span className="">{male.nakshatraLord}</span>
                                                    <span className="">{male.nakshatra_pad}</span>
                                                    <span className="">{male.planet_awastha}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </section>
    );
}
