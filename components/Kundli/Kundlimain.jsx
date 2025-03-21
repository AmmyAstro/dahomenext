"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Bestsell from "../Smcompo/Bestsell";
import FAQue from "../FAQue";
import Kundlioth from "../Smcompo/Kundlioth";
import Sidebanner from "../Smcompo/Sidebanner";
import Kunservice from "../Smcompo/Kunservice";
import Callchatsec from "../CallChatsec/Callchatsec";
import Recastro from "../Smcompo/Recastro";
import Freereport from "../Smcompo/Freereport";

export default function Kundlimain() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
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

    return (
        <section className="kundli-main-page py-5">
            <div className="kundli-page md:max-w-7xl  justify-self-center flex flex-col gap-5 items-center justify-center p-2">
                <div className="kundloi-top flex flex-col">
                    <h4 className="py-5 text-2xl text-[#000] text-center font-semibold">
                        KUNDLI FREE ONLINE
                    </h4>
                    <div className="kundli-img-txt flex items-start justify-between gap-10">
                        <Image
                            alt="ganesh ji image"
                            className="kundli-imgs hidden md:block w-80 h-50 rounded-lg"
                            loading="lazy"
                            width={100}
                            height={100}
                            src="/ds-img/ganeshji-img.jpg"
                        />
                        <div className="kundli-para flex flex-col text-[#000] text-sm">
                            <p>
                                Kundli is an astrological chart that shows the exact positions
                                of heavenly bodies and planets at a specific time, which is
                                constructed by Vedic astrologers based on an individual's exact
                                birthday, birthplace, and birth time. Kundli has the ability to
                                disclose what you are genuinely meant to do. It's all about the
                                positions of planets or celestial bodies at the very beginning
                                of time in simple terms.
                            </p>
                            <p>
                             
                                One's 'Kundli,' according to Vedic Astrology, is a blueprint
                                that contains information on major life milestones as well as
                                the time range in which they will occur. Kundli also believes
                                that everything happens for a reason and that everything in the
                                cosmos operates according to cosmic rules. One's 'Kundli,'
                                according to Vedic Astrology, is a blueprint that contains
                                information on major life milestones as well as the time range
                                in which they will occur. Kundli also believes that everything
                                happens for a reason and that everything in the cosmos operates
                                according to cosmic rules.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="kundli-sec-side-item w-full ">
                    <div className="kundli-side flex flex-col md:grid grid-cols-4 gap-5">

                        <div className="kundli-section col-span-3 flex flex-col gap-5">
                            <div className=" w-[30rem] p-6 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                                <h2 className="text-xl text-center text-[#000] font-semibold mb-4">
                                    Get Your free Janam Kundli
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                        <div className="md:w-[45%] w-[25%]">
                                            <label className="block text-sm text-[#666] font-medium">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className=" mt-1 p-2 shadow-lg rounded-full text-sm text-[#666] bg-white outline-0 border-0"
                                            />
                                        </div>

                                        <div className="md:w-[45%] w-[25%]">
                                            <label className="block text-sm text-[#666] font-medium">
                                                Gender:
                                            </label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                                className=" mt-1 p-2 shadow-lg rounded-full text-sm text-[#555] bg-white outline-0 border-0"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="dob-dt flex w-full items-center justify-between">
                                        <div className="md:w-[45%] w-[25%]">
                                            <label className="block text-sm text-[#666] font-medium">
                                                Date of Birth:
                                            </label>
                                            <div className="flex space-x-2">
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

                                        <div className="md:w-[45%] w-[25%]">
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
                                                    <option value="">HH</option>
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
                                                    <option value="">MM</option>
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
                                                    <option value="">SS</option>
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
                                            className="md:w-full w-50% mt-1 p-2 text-[#666]  rounded-full bg-white outline-0 border-0 shadow-lg"
                                        />
                                    </div>

                                    <div className="btn-kun flex w-full items-center justify-center">
                                     <Link href={"/homepage/Inkuinter"}>
                                     <button
                                            type="submit"
                                            className="w-[20rem] justify-self-center bg-[#2f1254] text-white p-2 rounded-full hover:bg-[#2f1254a1]"
                                        >
                                            Get Your Kundli
                                        </button></Link>
                                    </div>
                                </form>
                            </div>

                            <div className="kundli-cont flex flex-col gap-2 text-[#000] p-5 shadow-lg rounded-lg">
                                <h5 className="text-xl font-semibold text-center">Know more about : </h5>
                                <div className="kun-con ">
                                    <h5 className="text-base font-semibold">1. What is Janam Kundli?</h5>
                                    <p className="text-sm">
                                        Janam Kundli is called birth chart in English. It is a map
                                        of the sky as seen at the time of birth. It is the basis of
                                        predicting future in astrology.
                                    </p>
                                </div>
                                <div className="kun-con">
                                    <h5 className="text-base font-semibold">2. Can astrology predict future accurately?</h5>
                                    <p className="text-sm">
                                        Astrology is Vedanga and considered eye of the Vedas. Like
                                        Ayurveda & Yoga, astrology and its branches like Hora,
                                        Muhurat & Samhita, it is backbone of Vedas.
                                    </p>
                                </div>
                                <div className="kun-con">
                                    <h5 className="text-base font-semibold">3. Which is the most accurate Kundli software?</h5>
                                    <p className="text-sm">
                                        Most of the software use NASA algorithm for planetary
                                        position calculations. For remaining calculations like
                                        Namvamsa, Shodashvarga and Ashtakvarga, you can use free
                                        Dhwani Astro software which is the most used Vedic astrology
                                        software on Internet.
                                    </p>
                                </div>
                                <div className="kun-con">
                                    <h5 className="text-base font-semibold">4. What is Navamsa chart?</h5>
                                    <p className="text-sm">
                                        This is a division or varga. When a Rasi, i.e. zodiac sign,
                                        is subdivided in nine parts in a particular order, it is
                                        called Navamsa. It is sometimes considered as important as
                                        Rasi itself.
                                    </p>
                                </div>
                                <div className="kun-con">
                                    <h5 className="text-base font-semibold">5. What is Lagna chart?</h5>
                                    <p className="text-sm">
                                        Lagna chart, also called Rasi chart, is the most important
                                        chart in Vedic astrology. It shows Ascendant and planet's
                                        position in various signs. This chart along with other
                                        calculations like Vimshottari Dasa & Gochar are used to
                                        predict future.
                                    </p>
                                </div>
                            </div>

                            <Kundlioth />
                        </div>

                        <div className="side-sec">
                            <div className="k-side-top w-full border-0 rounded-lg flex flex-col gap-5">
                                <Bestsell />
                                <Kunservice />
                                <Sidebanner />
                            </div>
                        </div>

                    </div>

                    <Freereport/>

                    <Recastro />
                </div>
            </div>

            <FAQue />
            <Callchatsec />

        </section>
    );
}
