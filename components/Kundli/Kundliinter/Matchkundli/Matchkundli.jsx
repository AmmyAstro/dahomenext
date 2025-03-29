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
import Personal from "@/components/Smcompo/Personal";
import Kundlioth from "@/components/Smcompo/Kundlioth";
import Kundliother from "@/components/Smcompo/Kunother";



export default function Matchkundli() {
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


    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec ">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-20 gap-5 py-5">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-3 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold"><span className="text-red-500">Free Match Making - Kundli Milan</span> - Find your right one, through matchmaking
                    </h5>
                    <section className="basic-details-main w-full">

                        <div className="get-compat flex flex-col gap-5 ">
                            <div className="compat-patner grid md:grid-cols-2  gap-5">

                                <div className="  md:p-6 p-2 py-3 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                                    <h2 className="md:text-xl text-center text-[#000] font-semibold md:mb-4 mb-2">
                                        Your Details
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
                                                Birth Place:
                                            </label>
                                            <input
                                                type="text"
                                                name="birthPlace"
                                                value={formData.birthPlace}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter Birth place..."
                                                className="md:w-full w-full mt-1 md:p-2 p-1.5 text-[#666] placeholder:text-xs  rounded-full bg-white outline-0 border-0 shadow-lg"
                                            />
                                        </div>


                                    </form>
                                </div>

                                <div className="  md:p-6 p-2 py-3 bg-[#dfc7fd6e] shadow-lg rounded-lg">
                                    <h2 className="md:text-xl  text-center text-[#000] font-semibold mb-4">
                                        Your Partner's Details
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
                                                    placeholder="Enter partner's name..."
                                                    className=" mt-1 p-2 shadow-lg rounded-full placeholder:text-xs text-sm text-[#666] bg-white outline-0 border-0 w-[100%]"
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

                                        <div>
                                            <label className="block text-xs md:text-sm text-[#666] font-medium">
                                                Birth Place:
                                            </label>
                                            <input
                                                type="text"
                                                name="birthPlace"
                                                value={formData.birthPlace}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter Birth place..."
                                                className="w-full mt-1 md:p-2 p-1.5 text-[#666] placeholder:text-xs  rounded-full bg-white outline-0 border-0 shadow-lg"
                                            />
                                        </div>


                                    </form>
                                </div>

                            </div>
                            <div className="btn-kun flex w-full items-center justify-center">
                                <Link href={"/homepage/Inkuinter"}>
                                    <button
                                        type="submit"
                                        className="md:w-[20rem] text-sm w-[10rem] justify-self-center bg-[#2f1254] text-white p-2 rounded-full hover:bg-[#2f1254a1]">
                                        Match Your Kundli
                                    </button></Link>
                            </div>
                        </div>


                        <div className="result-compat border border-gray-400 rounded-lg p-5  text-[#000] flex flex-col gap-5 mt-5">

                            <div className="flex flex-col gap-2">
                                <h5 className="text-[#000] text-base text-center"><span className="text-red-400 font-semibold">Kundli Milan & Gun Milan</span> to Check Possibilities of Marriage</h5>
                                <span className="text-xs md:text-sm text-[#000]">
                                    <p>Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so.</p>
                                    <p>So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself.</p>
                                </span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-[#000] text-base text-center">What happens during <span className="text-red-400 font-semibold">Kundli Milan & Gun Milan</span> </h5>
                                <span className="text-xs md:text-sm text-[#000]">
                                    <p>The whole process of horoscope matching is called AshtaKoot Milan in Vedic astrology. Here, Ashta means 8 and Kootas are categories. These eight categories of parameters depict different aspects of life. These 8 parameters are considered for measuring one’s compatibility with the other person. Each of these parameters carry some points, which in total make 36 gunas. The more the gunas match, the more compatible you are with the other person in your life.</p>
                                    <div className="flex flex-col gap-1 py-2">
                                        <span>The eight parameters or categories among which the points have been divided are:-</span>
                                        <ul>
                                            <li><b>Varna</b> - it is the classification of people in four categories namely Brahmin, Kshatriya, Vaishya and Shudra.</li>
                                            <li><b>Vashya</b> - the Vashya denotes the power or dominance in Vedic astrology. Vahsya classifies a person into five types – Human, Wild Animals, Small animals, Waterborne animals and Insect.</li>
                                            <li><b>Tara</b> - it is used to denote the birth star compatibility of the person.</li>
                                            <li><b>Yoni</b> - is the sexual compatibility the two people would share with each other.</li>
                                            <li><b>Rasyadhipati</b> - This defines who is the Lord of the zodiac.</li>
                                            <li><b>Gana</b> - The three Ganas in Astrology are; Dev, Manav and Rakshasa.</li>
                                            <li><b>Rashi</b> - This category denotes love that the two people would share. The category takes into account the exact position of the Moon in the bride’s and groom’s horoscope.</li>
                                            <li><b>Nadi</b> - Nadi Koot is related to the health of the bride and the groom. The three Nadis in astrology are Vata (air), Pitta (bile) and Kappa (phlegm).</li>
                                        </ul>

                                        <div className="bg-purple-100 rounded-lg shadow-lg flex flex-col gap-1 md:px-15 px-5 py-5">
                                            <span className="bg-purple-400 rounded-lg px-10 py-1 flex items-center justify-between "><h5 className="font-semibold">Koota</h5><span>Maximum Points</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Varna</h5><span>1</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Vasya/Vashya</h5><span>2</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Tara/Dina </h5><span>3</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Yoni</h5><span>4</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Grah Maitri/Rasyadipati </h5><span>5</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Gana</h5><span>6</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Rashi or Bhakoota </h5><span>7</span></span>
                                            <span className="bg-purple-300 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Nadi</h5><span>8</span></span>
                                            <span className="bg-purple-400 rounded-lg px-10 py-1 flex items-center justify-between"><h5 className="font-semibold">Total</h5><span>36</span></span>



                                        </div>
                                    </div>
                                </span>
                            </div>

                            <Personal />

                        </div>

                    </section>
                </div>

                <div className="kundli-side flex flex-col items-center justify-start gap-3">
                    <Ytvideo />
                    <Kundliother />
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
