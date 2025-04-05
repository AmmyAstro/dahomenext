"use client"; // Required for interactive UI in Next.js 13+

const sadearr = [
    {
        "consideration_date": "16-8-2015",
        "is_saturn_retrograde": "true",
        "moon_sign": "Leo",
        "saturn_sign": "Scorpio",
        "is_undergoing_sadhesati": "No, currently you are not undergoing Sadhesati.",
        "sadhesati_status": "false",
        "what_is_sadhesati": "Sadhe Sati refers to the seven-and-a-half year period in which Saturn moves through three signs, the moon sign, one before the moon and the one after it. Sadhe Sati starts when Saturn (Shani) enters the 12th sign from the birth Moon sign and ends when Saturn leaves 2nd sign from the birth Moon sign. Since Saturn approximately takes around two and half years to transit a sign which is called Shanis dhaiya it takes around seven and half year to transit three signs and that is why it is known as Sadhe Sati. Generally Sade-Sati comes thrice in a horoscope in the life time - first in childhood, second in youth & third in old-age. First Sade-Sati has effect on education & parents. Second Sade-Sati has effect on profession, finance & family. The last one affects health more than anything else."
    }
]

const satiarr = [
    {
        "moon_sign": "Aries",
        "saturn_sign": "Gemini",
        "is_saturn_retrograde": "false",
        "type": "SETTING_END",
        "millisecond": "1027386000000",
        "date": "23-7-2002",
        "summary": "Sadhesati Setting Phase ending and with this Sadhesati is also ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Gemini",
        "is_saturn_retrograde": "true",
        "type": "SETTING_START",
        "millisecond": "1041987600000",
        "date": "8-1-2003",
        "summary": "Sadhesati Setting Phase starting with Peak Phase ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Gemini",
        "is_saturn_retrograde": "false",
        "type": "SETTING_END",
        "millisecond": "1049763600000",
        "date": "8-4-2003",
        "summary": "Sadhesati Setting Phase ending and with this Sadhesati is also ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "false",
        "type": "PEAK_START",
        "millisecond": "1811984400000",
        "date": "3-6-2027",
        "summary": "Sadhesati Peak Phase starting with Rise Phase ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "true",
        "type": "RISING_START",
        "millisecond": "1823907600000",
        "date": "19-10-2027",
        "summary": "Sadhesati Rise Phase starting."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "true",
        "type": "RISING_START",
        "millisecond": "1823994000000",
        "date": "20-10-2027",
        "summary": "Sadhesati Rise Phase starting."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "true",
        "type": "RISING_START",
        "millisecond": "1824080400000",
        "date": "21-10-2027",
        "summary": "Sadhesati Rise Phase starting."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "false",
        "type": "PEAK_START",
        "millisecond": "1834880400000",
        "date": "23-2-2028",
        "summary": "Sadhesati Peak Phase starting with Rise Phase ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Taurus",
        "is_saturn_retrograde": "false",
        "type": "RISING_START",
        "millisecond": "1880845200000",
        "date": "8-8-2029",
        "summary": "Sadhesati Rise Phase starting."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Taurus",
        "is_saturn_retrograde": "true",
        "type": "RISING_END",
        "millisecond": "1885856400000",
        "date": "5-10-2029",
        "summary": "Sadhesati Rise Phase ending and with this Sadhesati is also ending."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Taurus",
        "is_saturn_retrograde": "false",
        "type": "RISING_START",
        "millisecond": "1902618000000",
        "date": "17-4-2030",
        "summary": "Sadhesati Rise Phase starting."
    },
    {
        "moon_sign": "Aries",
        "saturn_sign": "Aries",
        "is_saturn_retrograde": "false",
        "type": "PEAK_START",
        "millisecond": "2753830800000",
        "date": "7-4-2057",
        "summary": "Sadhesati Peak Phase starting with Rise Phase ending."
    },


]

const sadereme = [
    {
        "what_is_sadhesati": "Sadhe Sati refers to the seven-and-a-half year period in which Saturn moves through three signs, the moon sign, one before the moon and the one after it. Sadhe Sati starts when Saturn (Shani) enters the 12th sign from the birth Moon sign and ends when Saturn leaves 2nd sign from the birth Moon sign. Since Saturn approximately takes around two and half years to transit a sign which is called Shanis dhaiya it takes around seven and half year to transit three signs and that is why it is known as Sadhe Sati. Generally Sade-Sati comes thrice in a horoscope in the life time - first in childhood, second in youth & third in old-age. First Sade-Sati has effect on education & parents. Second Sade-Sati has effect on profession, finance & family. The last one affects health more than anything else.",
        "remedies": [
            "Following are the remedies for Sadhe Sati : - ",
            "Give respect to your subordinate, servant, poor and lower class people.",
            "Serve and respect your parents and elderly people.",
            "Recite Shri Hanuman Chalisa.",
            "Shani Yantra is used to pacify an afflicted Shani and get blessings of Lord Shani. When Saturn is malefic in a horoscope due to wrong placement, Sadhe Sati or Small Affliction, use of Shani Yantra is very Beneficial. ",
            "It is good and beneficial to fast on Saturdays starting from sunrise to ending at sunset when Sadhe Sati is in effect.",
            "Donate urad (a type of pulse), oil, sapphire, black sesame seeds, black buffalo, iron, money and black clothes as per your financial situation to poor and needy people.",
            "Wearing of seven faced Rudraksha tends to mitigate the ill effects of Sadhe Sati."
        ]
    }
]

export default function Sadhesati() {

    const { what_is_sadhesati, remedies } = sadereme[0];
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Sadhesati  </span> Report"
                    </h5>
                    <section className="basic-details-main w-full flex flex-col gap-5">

                        <div className="flex flex-col gap-2 text-[#000] border border-purple-100 rounded-lg px-4 py-2 shadow-lg">
                            <h5 className="text-xl">Sadhesati Current Status</h5>

                            {sadearr.map((sade, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="flex items-center justify-between bg-purple-200 rounded-full px-5 py-2"><span>Moon Sign :</span> <span>{sade.moon_sign}</span></div>
                                        <div className="flex items-center justify-between bg-purple-200 rounded-full px-5 py-2"><span>Saturn Sign :</span> <span>{sade.saturn_sign}</span></div>
                                        <div className="flex items-center justify-between bg-purple-200 rounded-full px-5 py-2"><span>Is Saturn Retrograde :</span> <span>{sade.is_saturn_retrograde}</span></div>
                                        <div className="flex items-center justify-between bg-purple-200 rounded-full px-5 py-2"><span>Sadhesati Status :</span> <span>{sade.sadhesati_status}</span></div>

                                    </div>
                                    <div className="flex items-center gap-2   px-5 py-2"><span>Is Undergoing Sadhesati :</span> <span>{sade.is_undergoing_sadhesati}</span></div>
                                </div>
                            ))}
                        </div>

                        <div className="basic-det w-full border border-purple-100 rounded-lg px-4 py-2 shadow-lg">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Sadhesati Life Details</h5>
                            <div className="overflow-x-auto w-[22rem] md:w-full text-[#000] text-xs md:text-sm">
                                <div className="basic-box flex flex-col gap-1 w-[50rem] md:w-full">
                                    <div className="pl-ul grid grid-cols-6 bg-purple-400 rounded-lg px-5 py-2">
                                        <h5 className="text-sm font-semibold">Moon Sign</h5>
                                        <h5 className="text-sm font-semibold">Saturn Sign</h5>
                                        <h5 className="text-sm font-semibold">Saturn Retrograde</h5>
                                        <h5 className="text-sm font-semibold">Type</h5>
                                        <h5 className="text-sm font-semibold">Date</h5>
                                        <h5 className="text-sm font-semibold">Summary</h5>


                                    </div>

                                    {satiarr.map((sati, index) => (
                                        <div key={index} className="basic-card grid grid-cols-6 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                            <span className="text-sm">{sati.moon_sign}</span>
                                            <span className="text-sm">{sati.saturn_sign}</span>
                                            <span className="text-sm">{sati.is_saturn_retrograde}</span>
                                            <span className="text-sm">{sati.type}</span>
                                            <span className="text-sm">{sati.date}</span>
                                            <span className="text-sm">{sati.summary}</span>


                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full border border-purple-100 rounded-lg px-4 py-2 shadow-lg bg-purple-100">
                            <h5 className="md:p-5 p-2 text-center justify-self-center md:text-2xl text-xl text-[#000]">Sadhe Sati Remedies</h5>
                            <div className="p-6   l space-y-2">
                                <h2 className="text-xl  text-gray-800">What is Sadhe Sati?</h2>
                                <p className="text-gray-700 leading-relaxed">{what_is_sadhesati}</p>

                                <h3 className="text-xl  text-gray-800 mt-6">Remedies</h3>
                                <ul className="list-disc list-inside text-gray-700 ">
                                    {remedies.map((remedy, index) => (
                                        <li key={index}>{remedy}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>






                    </section>
                </div>
            </div>
        </section>
    );
}
