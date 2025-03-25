"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";

const comparr =[
    {
        id:0,
        name:"Friendship Report",
        src:"/ds-img/handshake.png",
        cont:"friendship paragraph",
    },
    {
        id:1,
        name:"Destiny Report",
        src:"/ds-img/handshake.png",
        cont:"destiny paragraph",
    },
    {
        id:2,
        name:"Love Compatibility ",
        src:"/ds-img/handshake.png",
        cont:"love compat paragraph",
    },
    {
        id:3,
        name:"Couple Forecast",
        src:"/ds-img/handshake.png",
        cont:"couple forecast paragraph",
    },
    {
        id:4,
        name:"Romantic Personality",
        src:"/ds-img/handshake.png",
        cont:"romantic personality paragraph",
    },
    {
        id:5,
        name:"Zodiac Compatibility",
        src:"/ds-img/handshake.png",
        cont:"zodiac compatibility paragraph",
        signt:"Your Zodiac Sign",
        sign:"Aries",
        signp:"Your Partner's Zodiac Sign",
        signpt:"Venus",
        zcomp:"Zodiac Compatibility",
        zcompper:"80%",
    },
  
]

export default function Compatwest() {
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
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">
                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">
                    <section className="basic-details-main w-full">

                        <div className="get-compat flex flex-col gap-5 ">
                            <div className="compat-patner grid grid-cols-2  gap-5">

                                <div className="  p-6 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                                    <h2 className="text-xl text-center text-[#000] font-semibold mb-4">
                                        Your Details
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:w-[100%] w-[25%]">
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Enter your name..."
                                                    className=" mt-1 p-2 shadow-lg rounded-full placeholder:text-xs text-sm text-[#666] bg-white outline-0 border-0 w-[100%]"
                                                />
                                            </div>

                                        </div>

                                        <div className="dob-dt flex flex-col gap-2 w-full  justify-between">
                                            <div className="">
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Date of Birth:
                                                </label>
                                                <div className="flex space-x-2 ">
                                                    <select
                                                        name="dobDay"
                                                        value={formData.dobDay}
                                                        onChange={handleChange}
                                                        required
                                                        className="shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                        className=" shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                        className="shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Birth Time:
                                                </label>
                                                <div className="flex space-x-2">
                                                    <select
                                                        name="birthHour"
                                                        value={formData.birthHour}
                                                        onChange={handleChange}
                                                        required
                                                        className=" shadow-lg w-1/3 text-sm p-2 bg-white outline-0 border-0 text-[#555] rounded-full"
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
                                                        className=" shadow-lg w-1/3 text-sm p-2 text-[#555] bg-white outline-0 border-0 rounded-full"
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
                                                        className="shadow-lg w-1/3 text-sm p-2 text-[#555] bg-white outline-0 border-0 rounded-full"
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

                                        <div>
                                            <label className="block text-sm text-[#666] font-medium">
                                                Birth Place:
                                            </label>
                                            <input
                                                type="text"
                                                name="birthPlace"
                                                value={formData.birthPlace}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter Birth place..."
                                                className="md:w-full w-50% mt-1 p-2 text-[#666] placeholder:text-xs  rounded-full bg-white outline-0 border-0 shadow-lg"
                                            />
                                        </div>

      
                                    </form>
                                </div>

                                <div className="  p-6 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                                    <h2 className="text-xl text-center text-[#000] font-semibold mb-4">
                                        Your Partner's Details
                                    </h2>

                                       <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="flex flex-col md:flex-row items-center justify-between">
                                            <div className="md:w-[100%] w-[25%]">
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Enter partner's name..."
                                                    className=" mt-1 p-2 shadow-lg rounded-full placeholder:text-xs text-sm text-[#666] bg-white outline-0 border-0 w-[100%]"
                                                />
                                            </div>

                                        </div>

                                        <div className="dob-dt flex flex-col gap-2 w-full  justify-between">
                                            <div className="">
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Date of Birth:
                                                </label>
                                                <div className="flex space-x-2 ">
                                                    <select
                                                        name="dobDay"
                                                        value={formData.dobDay}
                                                        onChange={handleChange}
                                                        required
                                                        className="shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                        className=" shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                        className="shadow-lg w-1/3 text-sm p-2  text-[#555] rounded-full bg-white outline-0 border-0"
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
                                                <label className="block text-sm text-[#666] font-medium">
                                                    Birth Time:
                                                </label>
                                                <div className="flex space-x-2">
                                                    <select
                                                        name="birthHour"
                                                        value={formData.birthHour}
                                                        onChange={handleChange}
                                                        required
                                                        className=" shadow-lg w-1/3 text-sm p-2 bg-white outline-0 border-0 text-[#555] rounded-full"
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
                                                        className=" shadow-lg w-1/3 text-sm p-2 text-[#555] bg-white outline-0 border-0 rounded-full"
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
                                                        className="shadow-lg w-1/3 text-sm p-2 text-[#555] bg-white outline-0 border-0 rounded-full"
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

                                        <div>
                                            <label className="block text-sm text-[#666] font-medium">
                                                Birth Place:
                                            </label>
                                            <input
                                                type="text"
                                                name="birthPlace"
                                                value={formData.birthPlace}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter Birth place..."
                                                className="md:w-full w-50% mt-1 p-2 text-[#666] placeholder:text-xs  rounded-full bg-white outline-0 border-0 shadow-lg"
                                            />
                                        </div>

      
                                    </form>
                                </div>

                            </div>
                             <div className="btn-kun flex w-full items-center justify-center">
                                     <Link href={"/homepage/Inkuinter"}>
                                     <button
                                            type="submit"
                                            className="w-[20rem] justify-self-center bg-[#2f1254] text-white p-2 rounded-full hover:bg-[#2f1254a1]"
                                        >
                                            Submit
                                        </button></Link>
                                    </div>
                        </div>


                        <div className="result-compat text-[#000] flex flex-col gap-5 mt-5">

                        <h5 className="text-xl text-center">Compatiblity Reports</h5>

                        <div className="comp-repo flex items-center justify-center flex-wrap gap-5">

                            {comparr.map((comp,index) => (
                                <div key={index} onClick={() => setCompat(comp.id)}
                                className={`bg-purple-300 flex items-center text-[#000] border rounded-lg w-60 justify-center gap-2 px-4 p-1 cursor-pointer ${activeCompat === comp.id
                                    ? "border border-violet-200 shadow-lg" : "border border-purple-300" }`}   >

                                        <Image
                                        src={comp.src}
                                        width={30}
                                        height={30}
                                        alt="compatibility report"
                                        className=""
                                        />
                                        <span className="text-sm">{comp.name}</span>

                                </div>

                            ))}

                        </div>

                        <div className="comp-rep-det">
                            <div className="compat-det border border-purple-300 rounded-lg p-3 flex flex-col gap-4">
                            {comparr[activeCompat].id === 5 && ( 
                                     <div className="text-sm flex flex-col gap-2"> 
                                     <span className="flex"><span>{comparr[activeCompat].signt} : </span> <span>{comparr[activeCompat].sign}</span></span>
                                     <span className="flex"><span>{comparr[activeCompat].signp} : </span> <span>{comparr[activeCompat].signpt}</span></span>
                                     <span className="flex"><span>{comparr[activeCompat].zcomp} : </span> <span>{comparr[activeCompat].zcompper}</span></span>
                                 </div>                         
                            )}
                                <p className="text-sm" >{comparr[activeCompat].cont}</p>
                             

                            </div>
                        </div>


                        </div>
                       
                    </section>
                </div>

                <div className="kundli-side flex flex-col items-center justify-start gap-3">
                    <Ytvideo />
                    <Bestsell />
                    <Sidebanner />
                </div>
            </div>

            <Freereport />
            <Recastro />
            <FAQue />
            <Callchatsec />
        </section>
    );
}
