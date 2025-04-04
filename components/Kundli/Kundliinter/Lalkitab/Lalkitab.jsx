"use client"; 
const lalarr = [
    {
        "sign": 1,
        "sign_name": "Aries",
        "planet": [],
        "planet_small": [],
        "planet_degree": []
    },
    {
        "sign": 2,
        "sign_name": "Taurus",
        "planet": [],
        "planet_small": [],
        "planet_degree": []
    },
    {
        "sign": 3,
        "sign_name": "Gemini",
        "planet": [],
        "planet_small": [],
        "planet_degree": []
    },
    {
        "sign": 4,
        "sign_name": "Cancer",
        "planet": [
            "KETU"
        ],
        "planet_small": [
            "Ke "
        ],
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
        "planet": [],
        "planet_small": [],
        "planet_degree": []
    },
    {
        "sign": 7,
        "sign_name": "Libra",
        "planet": [
            "MOON"
        ],
        "planet_small": [
            "Mo "
        ],
        "planet_degree": []
    },
    {
        "sign": 8,
        "sign_name": "Scorpio",
        "planet": [
            "JUPITER ",
            "SATURN "
        ],
        "planet_small": [
            "Ju ",
            "Sa "
        ],
        "planet_degree": []
    },
    {
        "sign": 9,
        "sign_name": "Sagittarius",
        "planet": [
            "SUN ",
            "MARS ",
            "MERCURY ",
            "VENUS "
        ],
        "planet_small": [
            "Su ",
            "Ma ",
            "Me ",
            "Ve "
        ],
        "planet_degree": []
    },
    {
        "sign": 10,
        "sign_name": "Capricorn",
        "planet": [
            "RAHU "
        ],
        "planet_small": [
            "Ra "
        ],
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
    }
]

const debtarr =
    [
        {
            "debt_name": "Self Debts",
            "indications": "Fear from King, punishment or payment of penalty in legal suitseven though you are faultless; heart diseases, pain inshoulders, physical weakness, difficulty in eyes, spoiling life.",
            "events": "The native will become an atheist, do not care dharma/religion,Health will not be favourable; the native will not follow the customs of ancestors."
        },
        {
            "debt_name": "Debts to Relatives",
            "indications": "killing or getting killed a she buffalo which is going to deliver a calf, performing black magic at the time of construction of a house or laying foundation stone by others, hating those people who mingle with the relatives of the native, keeping away in the functions like birth days of children or family festivals.",
            "events": "The native cheats his friends, spoils the work done by others or burns the ripe crops in the agricultural fields of others."
        },
        {
            "debt_name": "Father Debts",
            "indications": "Changing or defaming of family priest, districting the shrine constructed along with residence, cutting or having holy long pepper tree.",
            "events": "The hair of the any one of the elder’s persons in the family will become white. After turning to white,the hair colour starts becoming pale. Complaining of cough, or events like keeping the stigma of the bad actions of all other people on his head, etc., will happen."
        }
    ]

const lalremarr = [
    {
        "planet": "Sun",
        "house": "Ninth",
        "lal_kitab_desc": [
            "Benefits and favours from government, good health and financially stronger. ",
            "The native will get a government job and comforts of vehicles and servants. ",
            "The native will always be suspicious about others.",
            "If the Sun is in the 4th house, the native.s father will die in his childhood. ",
            "If the Sun is in the 10th house and moon is in the 5th house the native will have a very short life. ",
            "If the 4th house is without any planet, the native will be deprived of government favours and benefits. "
        ],
        "lal_kitab_remedies": [
            "Never wear blue or black clothes.",
            "Throwing a copper coin in a river or canal for 43 years will be highly beneficial.",
            "Abstain from liquor and meat."
        ]
    }
]
const houses = [
    {
        khana_number: 1,
        maalik: "Mars",
        pakka_ghar: "Sun",
        kismat: "Mars",
        soya: true,
        exalt: ["Sun"],
        debilitated: ["Saturn"],
    },
    {
        khana_number: 2,
        maalik: "Venus",
        pakka_ghar: "Jupiter",
        kismat: "Moon",
        soya: false,
        exalt: ["Moon", "Rahu"],
        debilitated: "-",
    },

];
const planetsData = [
    { planet: 'Sun', rashi: 'Virgo', soya: true, position: 'NEUTRAL SIGN', nature: 'Malefic' },
    { planet: 'Moon', rashi: 'Scorpio', soya: false, position: 'DEBILITATED', nature: 'Malefic' },
    { planet: 'Mars', rashi: 'Scorpio', soya: false, position: 'OWN', nature: 'Malefic' },
    { planet: 'Mercury', rashi: 'Libra', soya: true, position: 'FRIEND SIGN', nature: 'Malefic' },
    { planet: 'Jupiter', rashi: 'Scorpio', soya: false, position: 'FRIEND SIGN', nature: 'Benefic' },
    { planet: 'Venus', rashi: 'Leo', soya: true, position: 'ENEMY SIGN', nature: 'Benefic' },
    { planet: 'Saturn', rashi: 'Cancer', soya: true, position: 'ENEMY SIGN', nature: 'Malefic' },
    { planet: 'Rahu', rashi: 'Scorpio', soya: false, position: '-', nature: 'Malefic' },
    { planet: 'Ketu', rashi: 'Taurus', soya: false, position: '-', nature: 'Malefic' },
];





export default function Lalkitab() {
    // const [actFav, setActfav] = useState(0);
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500 text-xl">"Lal Kitab : </span>
                        Predictions"
                    </h5>
                    <section className="basic-details-main w-full flex flex-col gap-5">

                        <div className="basic-det w-full border rounded-lg shadow-lg p-2 border-purple-100">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-xl text-xl text-[#000]">Lal Kitab Horoscope</h5>
                            <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                    <div className="pl-ul grid grid-cols-5 bg-purple-400 rounded-lg px-4 py-2">
                                        <h5 className="text-sm font-semibold">Sign</h5>
                                        <h5 className="text-sm font-semibold">Sign Name</h5>
                                        <h5 className="text-sm font-semibold">Planet </h5>
                                        <h5 className="text-sm font-semibold">Planet Small</h5>
                                        <h5 className="text-sm font-semibold">Planet Degree</h5>



                                    </div>

                                    {lalarr.map((lal, index) => (
                                        <div key={index} className="basic-card grid grid-cols-5  bg-purple-200 rounded-lg px-5 py-2">
                                            <span className="text-sm">{lal.sign}</span>
                                            <span className="text-sm">{lal.sign_name}</span>
                                            <span className="text-sm">{lal.planet}</span>
                                            <span className="text-sm">{lal.planet_small}</span>
                                            <span className="text-sm">{lal.planet_degree}</span>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="basic-det w-full border rounded-lg shadow-lg p-2 border-purple-100">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Lal Kitab Debt</h5>
                            <div className=" md:w-full text-[#000] text-xs md:text-sm flex flex-col gap-2">
                                {debtarr.map((kitab, index) => (
                                    <div key={index} className="basic-box flex flex-col gap-1  md:w-full">
                                        <h5 className="text-base font-semibold text-center bg-purple-200 rounded-lg py-1">{kitab.debt_name}</h5>
                                        <div className="flex  flex-col">   <span className="font-semibold">Indications :</span> <span>{kitab.indications}</span></div>
                                        <div className="flex flex-col ">
                                            <span className="font-semibold">Events :</span>  <span>{kitab.events}</span>
                                        </div>


                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="basic-det w-full border rounded-lg shadow-lg p-2 border-purple-100">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Lal Kitab Planet Remedies</h5>
                            <div className=" md:w-full text-[#000]  flex flex-col gap-2">
                                {lalremarr.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-2 ps-6">
                                        <div className="flex items-center text-xl font-semifold gap-5"><h3>Planet: {item.planet}</h3>
                                            <h4>House: {item.house}</h4></div>

                                        <div className="flex flex-col p">
                                            <h5 className="font-semibold">Lal Kitab Description:</h5>
                                            <ul className="list-decimal">
                                                {item.lal_kitab_desc.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col">
                                            <h5 className="font-semibold">Remedies:</h5>
                                            <ul>
                                                {item.lal_kitab_remedies.map((remedy, j) => (
                                                    <li key={j}>{remedy}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="basic-det w-full border rounded-lg shadow-lg p-2 border-purple-100 flex flex-col justify-center items-center">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Lal Kitab Houses</h5>
                            <div className="grid grid-cols-4 grid-rows-3 gap-1 w-[80%] rounded-lg border-2 border-black p-2 bg-white">
                                {Array.from({ length: 12 }, (_, i) => {
                                    const house = houses.find(h => h.khana_number === i + 1);
                                    return (
                                        <div key={i} className="border rounded-lg border-black p-2 h-30 relative flex flex-col justify-between">
                                            <span className="absolute top-1 right-2 text-sm font-semibold text-gray-600">
                                                {i + 1}
                                            </span>
                                            <div className="text-xs text-gray-700">
                                                <strong className="text-purple-700">Maalik:</strong> {house?.maalik || '-'}
                                            </div>
                                            <div className="text-xs text-gray-700">
                                                <strong className="text-purple-700">Pakka Ghar:</strong> {house?.pakka_ghar || '-'}
                                            </div>
                                            <div className="text-xs text-gray-700">
                                                <strong className="text-purple-700">Kismat:</strong> {house?.kismat || '-'}
                                            </div>
                                            <div className="text-xs text-gray-700">
                                                <strong className="text-purple-700">Soya:</strong> {house?.soya ? 'Yes' : 'No'}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="basic-det w-full text-[#000] border rounded-lg shadow-lg p-2 border-purple-100 flex flex-col justify-center items-center">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Lal Kitab Planets</h5>
                            <div className="grid grid-cols-5 gap-4">
                                {planetsData.map((planet, idx) => (
                                    <div key={idx} className="border p-2 rounded-md shadow-sm flex flex-col gap-1">
                                        <h2 className="font-bold text-purple-700">{planet.planet}</h2>
                                        <p className="text-sm">Rashi: {planet.rashi}</p>
                                        <p className="text-sm">Soya: {planet.soya ? "Yes" : "No"}</p>
                                        <p className="text-sm">Position: {planet.position}</p>
                                        <p className="text-sm">Nature: {planet.nature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
