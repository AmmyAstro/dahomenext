"use client";

const majoryogarr = [
    {
        "dasha_id": 1,
        "dasha_name": "Pingla",
        "start_date": "9-11-2000 5:9",
        "end_date": "9-11-2002 5:9",
        "start_ms": 973726740000,
        "end_ms": 1036798740000,
        "duration": 2
    },
    {
        "dasha_id": 2,
        "dasha_name": "Dhanya",
        "start_date": "9-11-2002 5:9",
        "end_date": "9-11-2005 5:9",
        "start_ms": 1036798740000,
        "end_ms": 1131493140000,
        "duration": 3
    },
    {
        "dasha_id": 3,
        "dasha_name": "Bhramari",
        "start_date": "9-11-2005 5:9",
        "end_date": "9-11-2009 5:9",
        "start_ms": 1131493140000,
        "end_ms": 1257723540000,
        "duration": 4
    },
    {
        "dasha_id": 4,
        "dasha_name": "Bhadrika",
        "start_date": "9-11-2009 5:9",
        "end_date": "9-11-2014 5:9",
        "start_ms": 1257723540000,
        "end_ms": 1415489940000,
        "duration": 5
    },
    {
        "dasha_id": 5,
        "dasha_name": "Ulka",
        "start_date": "9-11-2014 5:9",
        "end_date": "9-11-2020 5:9",
        "start_ms": 1415489940000,
        "end_ms": 1604878740000,
        "duration": 6
    },
    {
        "dasha_id": 6,
        "dasha_name": "Siddha",
        "start_date": "9-11-2020 5:9",
        "end_date": "9-11-2027 5:9",
        "start_ms": 1604878740000,
        "end_ms": 1825717140000,
        "duration": 7
    },
    {
        "dasha_id": 7,
        "dasha_name": "Sankata",
        "start_date": "9-11-2027 5:9",
        "end_date": "9-11-2035 5:9",
        "start_ms": 1825717140000,
        "end_ms": 2078177940000,
        "duration": 8
    },
    {
        "dasha_id": 0,
        "dasha_name": "Mangla",
        "start_date": "9-11-2035 5:9",
        "end_date": "9-11-2036 5:9",
        "start_ms": 2078177940000,
        "end_ms": 2109800340000,
        "duration": 1
    },
    {
        "dasha_id": 1,
        "dasha_name": "Pingla",
        "start_date": "9-11-2036 5:9",
        "end_date": "9-11-2038 5:9",
        "start_ms": 2109800340000,
        "end_ms": 2172872340000,
        "duration": 2
    },
    {
        "dasha_id": 2,
        "dasha_name": "Dhanya",
        "start_date": "9-11-2038 5:9",
        "end_date": "9-11-2041 5:9",
        "start_ms": 2172872340000,
        "end_ms": 2267566740000,
        "duration": 3
    },
    {
        "dasha_id": 3,
        "dasha_name": "Bhramari",
        "start_date": "9-11-2041 5:9",
        "end_date": "9-11-2045 5:9",
        "start_ms": 2267566740000,
        "end_ms": 2393797140000,
        "duration": 4
    },
    {
        "dasha_id": 4,
        "dasha_name": "Bhadrika",
        "start_date": "9-11-2045 5:9",
        "end_date": "9-11-2050 5:9",
        "start_ms": 2393797140000,
        "end_ms": 2551563540000,
        "duration": 5
    },
    {
        "dasha_id": 5,
        "dasha_name": "Ulka",
        "start_date": "9-11-2050 5:9",
        "end_date": "9-11-2056 5:9",
        "start_ms": 2551563540000,
        "end_ms": 2740952340000,
        "duration": 6
    },
    {
        "dasha_id": 6,
        "dasha_name": "Siddha",
        "start_date": "9-11-2056 5:9",
        "end_date": "9-11-2063 5:9",
        "start_ms": 2740952340000,
        "end_ms": 2961790740000,
        "duration": 7
    },
    {
        "dasha_id": 7,
        "dasha_name": "Sankata",
        "start_date": "9-11-2063 5:9",
        "end_date": "9-11-2071 5:9",
        "start_ms": 2961790740000,
        "end_ms": 3214251540000,
        "duration": 8
    },
    {
        "dasha_id": 0,
        "dasha_name": "Mangla",
        "start_date": "9-11-2071 5:9",
        "end_date": "9-11-2072 5:9",
        "start_ms": 3214251540000,
        "end_ms": 3245873940000,
        "duration": 1
    }
]

const dashaArray = [
    {
        "major_dasha": {
            "dasha_id": 4,
            "dasha_name": "Bhadrika",
            "duration": "5 Years",
            "start_date": "1-3-2014 2:30",
            "end_date": "1-3-2019 2:30"
        },
        "sub_dasha": {
            "dasha_id": 5,
            "dasha_name": "Ulka",
            "start_date": "9-11-2014 18:0",
            "end_date": "10-9-2015 4:0"
        },
        "sub_sub_dasha": {
            "dasha_id": 4,
            "dasha_name": "Bhadrika",
            "start_date": "29-7-2015 21:25",
            "end_date": "10-9-2015 4:0"
        }
    }
]



export default function Yoginidasha() {

    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">

                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Major Yogini Dasha   </span> Report"
                    </h5>
                    <div className="text-[#000] w-full">
                        <div className="flex flex-col gap-5">
                            <div className="basic-box flex flex-col gap-1 w-full md:w-full">
                                <div className="pl-ul grid grid-cols-5 bg-purple-400 rounded-lg px-5 py-2">
                                    <h5 className="text-sm font-semibold">Dasha Id</h5>
                                    <h5 className="text-sm font-semibold">Dasha Name</h5>
                                    <h5 className="text-sm font-semibold">Start Date</h5>
                                    <h5 className="text-sm font-semibold">End Date</h5>
                                    <h5 className="text-sm font-semibold">Duration</h5>
                                </div>
                                {majoryogarr.map((item, i) => (
                                    <div key={i} className="basic-card grid grid-cols-5 gap-4 bg-purple-200 rounded-lg px-5 py-2">
                                        <span className="text-sm">{item.dasha_id}</span>
                                        <span className="text-sm">{item.dasha_name}</span>
                                        <span className="text-sm">{item.start_date}</span>
                                        <span className="text-sm">{item.end_date}</span>
                                        <span className="text-sm">{item.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="p-4 space-y-4 w-full">
                {dashaArray.map((item, idx) => (
                    <div key={idx} className="border flex flex-col  rounded-xl p-4 shadow-md text-[#000]">
                        <h5 className="text-sm md:text-xl text-[#000] font-semibold text-center">
                            <span className="text-red-500">"Current Yogini Dasha</span> Report"
                        </h5>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col ">   <h2 className="text-lg font-semibold">Major Dasha: </h2>
                                <span className="flex items-center gap-1"><h3>Dasha Id :</h3> <span>{item.major_dasha.dasha_id}</span></span>
                                <span className="flex items-center gap-1"><h3>Dasha Name :</h3> <span>{item.major_dasha.dasha_name}</span></span>
                                <span className="flex items-center gap-1"><h3>Start Date :</h3> <span>{item.major_dasha.start_date}</span></span>
                                <span className="flex items-center gap-1"><h3>End Date :</h3> <span>{item.major_dasha.end_date}</span></span>
                            </div>

                            <div className="flex flex-col ">  <h3 className="text-md font-semibold mt-4">Sub Dasha: </h3>
                                <span className="flex items-center gap-1"><h3>Dasha Id :</h3> <span>{item.sub_dasha.dasha_id}</span></span>
                                <span className="flex items-center gap-1"><h3>Dasha Name :</h3> <span>{item.sub_dasha.dasha_name}</span></span>
                                <span className="flex items-center gap-1"><h3>Start Date :</h3> <span>{item.sub_dasha.start_date}</span></span>
                                <span className="flex items-center gap-1"><h3>End Date :</h3> <span>{item.sub_dasha.end_date}</span></span></div>
                            <div  className="flex flex-col ">   <h2 className="text-lg font-semibold">Sub Sub Dasha: </h2>
                                <span className="flex items-center gap-1"><h3>Dasha Id :</h3> <span>{item.sub_sub_dasha.dasha_id}</span></span>
                                <span className="flex items-center gap-1"><h3>Dasha Name :</h3> <span>{item.sub_sub_dasha.dasha_name}</span></span>
                                <span className="flex items-center gap-1"><h3>Start Date :</h3> <span>{item.sub_sub_dasha.start_date}</span></span>
                                <span className="flex items-center gap-1"><h3>End Date :</h3> <span>{item.sub_sub_dasha.end_date}</span></span></div>
                        </div>

                    </div>
                ))}
            </div>






        </section>
    );
}
