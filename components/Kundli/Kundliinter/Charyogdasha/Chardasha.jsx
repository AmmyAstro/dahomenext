"use client";

const majorchararr = [
    {
        "sign_id": 10,
        "sign_name": "Aquarius",
        "duration": "5 Years",
        "start_date": "16-8-2015",
        "end_date": "16-8-2020"
    },
    {
        "sign_id": 11,
        "sign_name": "Pisces",
        "duration": "7 Years",
        "start_date": "16-8-2020",
        "end_date": "16-8-2027"
    },
    {
        "sign_id": 0,
        "sign_name": "Aries",
        "duration": "3 Years",
        "start_date": "16-8-2027",
        "end_date": "16-8-2030"
    },
    {
        "sign_id": 1,
        "sign_name": "Taurus",
        "duration": "2 Years",
        "start_date": "16-8-2030",
        "end_date": "16-8-2032"
    },
    {
        "sign_id": 2,
        "sign_name": "Gemini",
        "duration": "2 Years",
        "start_date": "16-8-2032",
        "end_date": "16-8-2034"
    },
    {
        "sign_id": 3,
        "sign_name": "Cancer",
        "duration": "11 Years",
        "start_date": "16-8-2034",
        "end_date": "16-8-2045"
    },
    {
        "sign_id": 4,
        "sign_name": "Leo",
        "duration": "1 Years",
        "start_date": "16-8-2045",
        "end_date": "16-8-2046"
    },
    {
        "sign_id": 5,
        "sign_name": "Virgo",
        "duration": "1 Years",
        "start_date": "16-8-2046",
        "end_date": "16-8-2047"
    },
    {
        "sign_id": 6,
        "sign_name": "Libra",
        "duration": "9 Years",
        "start_date": "16-8-2047",
        "end_date": "16-8-2056"
    },
    {
        "sign_id": 7,
        "sign_name": "Scorpio",
        "duration": "8 Years",
        "start_date": "16-8-2056",
        "end_date": "16-8-2064"
    },
    {
        "sign_id": 8,
        "sign_name": "Sagittarius",
        "duration": "8 Years",
        "start_date": "16-8-2064",
        "end_date": "16-8-2072"
    },
    {
        "sign_id": 9,
        "sign_name": "Capricorn",
        "duration": "2 Years",
        "start_date": "16-8-2072",
        "end_date": "16-8-2074"
    }
]

const dashaArray = [
    {
        "dasha_date": "16-8-2015",
        "major_dasha": {
            "sign_id": 10,
            "sign_name": "Aquarius",
            "duration": "5 Years",
            "start_date": "16-8-2015",
            "end_date": "16-8-2020"
        },
        "sub_dasha": {
            "sign_id": 11,
            "sign_name": "Pisces",
            "duration": "5 Months",
            "start_date": "16-8-2015",
            "end_date": "16-1-2016"
        },
        "sub_sub_dasha": [
            {
                "sign_id": 0,
                "sign_name": "Aries",
                "start_date": "16-8-2015",
                "end_date": "28-8-2015"
            },
            {
                "sign_id": 1,
                "sign_name": "Taurus",
                "start_date": "28-8-2015",
                "end_date": "10-9-2015"
            },
            {
                "sign_id": 2,
                "sign_name": "Gemini",
                "start_date": "10-9-2015",
                "end_date": "23-9-2015"
            },
            {
                "sign_id": 3,
                "sign_name": "Cancer",
                "start_date": "23-9-2015",
                "end_date": "6-10-2015"
            },
            {
                "sign_id": 4,
                "sign_name": "Leo",
                "start_date": "6-10-2015",
                "end_date": "18-10-2015"
            },
            {
                "sign_id": 5,
                "sign_name": "Virgo",
                "start_date": "18-10-2015",
                "end_date": "31-10-2015"
            },
            {
                "sign_id": 6,
                "sign_name": "Libra",
                "start_date": "31-10-2015",
                "end_date": "13-11-2015"
            },
            {
                "sign_id": 7,
                "sign_name": "Scorpio",
                "start_date": "13-11-2015",
                "end_date": "26-11-2015"
            },
            {
                "sign_id": 8,
                "sign_name": "Sagittarius",
                "start_date": "26-11-2015",
                "end_date": "8-12-2015"
            },
            {
                "sign_id": 9,
                "sign_name": "Capricorn",
                "start_date": "8-12-2015",
                "end_date": "21-12-2015"
            },
            {
                "sign_id": 10,
                "sign_name": "Aquarius",
                "start_date": "21-12-2015",
                "end_date": "3-1-2016"
            },
            {
                "sign_id": 11,
                "sign_name": "Pisces",
                "start_date": "3-1-2016",
                "end_date": "16-1-2016"
            }
        ]
    }
]



export default function Chardasha() {

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">

                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Major Char Dasha   </span> Report"
                    </h5>
                    <div className="text-[#000] w-full">
                        <div className="flex flex-col gap-5">
                            <div className="basic-box flex flex-col gap-1 w-full md:w-full">
                                <div className="pl-ul grid grid-cols-5 bg-purple-400 rounded-lg px-5 py-2">
                                    <h5 className="text-sm font-semibold">Sign Id</h5>
                                    <h5 className="text-sm font-semibold">Sign Name</h5>
                                    <h5 className="text-sm font-semibold">Duration</h5>
                                    <h5 className="text-sm font-semibold">Start Date</h5>
                                    <h5 className="text-sm font-semibold">End Time</h5>
                                </div>
                                {majorchararr.map((item, i) => (
                                    <div key={i} className="basic-card grid grid-cols-5 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                        <span className="text-xs md:text-sm">{item.sign_id}</span>
                                        <span className="text-xs md:text-sm">{item.sign_name}</span>
                                        <span className="text-xs md:text-sm">{item.duration}</span>
                                        <span className="text-xs md:text-sm">{item.start_date}</span>
                                        <span className="text-xs md:text-sm">{item.end_time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="p-1 md:p-4 space-y-4 w-full">
                {dashaArray.map((item, idx) => (
                    <div key={idx} className="border flex flex-col  rounded-xl p-1 md:p-1 shadow-md text-[#000]">
                        <h5 className="text-xl md:text-xl text-[#000] font-semibold text-center">
                            <span className="text-red-500">"Current Char Dasha  </span> Report"
                        </h5>
                        <div className="flex flex-col md:flex-row text-sm items-center justify-between">
                            <div >   <h2 className="text-lg font-semibold">Major Dasha: {item.major_dasha.sign_name}</h2>
                                <p>Duration: {item.major_dasha.duration}</p>
                                <p>From: {item.major_dasha.start_date} To: {item.major_dasha.end_date}</p></div>

                            <div>  <h3 className="text-md font-semibold mt-4">Sub Dasha: {item.sub_dasha.sign_name}</h3>
                                <p>Duration: {item.sub_dasha.duration}</p>
                                <p>From: {item.sub_dasha.start_date} To: {item.sub_dasha.end_date}</p></div>
                        </div>


                        <h4 className="text-md font-semibold mt-4 mb-2 text-center">Sub-Sub Dasha:</h4>

                        <div className="basic-box flex flex-col gap-1 w-full md:w-full">
                            <div className="pl-ul grid grid-cols-4 bg-purple-400 rounded-lg px-5 py-2">
                                <h5 className="text-sm font-semibold">Sign Id</h5>
                                <h5 className="text-sm font-semibold">Sign Name</h5>
                                <h5 className="text-sm font-semibold">Start Date</h5>
                                <h5 className="text-sm font-semibold">End Time</h5>
                            </div>
                            {item.sub_sub_dasha.map((sub, i) => (
                                <div key={i} className="basic-card grid grid-cols-4 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                    <span className="text-sm">{sub.sign_id}</span>
                                    <span className="text-sm">{sub.sign_name}</span>
                                    <span className="text-sm">{sub.start_date}</span>
                                    <span className="text-sm">{sub.end_date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>






        </section>
    );
}
