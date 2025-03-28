import { useState } from "react";
import Image from "next/image";

const basicarr = [
    {

        name: "Name",
        det: "Ammy",
    },
    {
        name: "Date",
        det: "14/9/2008",
    },
    {
        name: "Time",
        det: "7:13:0",
    },
    {
        name: "Place",
        det: "Delhi , Delhi , India",
    },
    {
        name: "Latitude",
        det: "28.6654",
    },
    {
        name: "Longitude",
        det: "77.4391",
    },
    {
        name: "Timezone",
        det: "5.5",
    },
    {
        name: "Sunrise",
        det: "6:4:39",
    },
    {
        name: "Sunset",
        det: "18:26:20",
    },
    {
        name: "Ayanamsha",
        det: "23.978658218336",
    },
];
const panarr = [
    {

        name: "Tithi",
        det: "Shukla Chaturdashi",
    },
    {
        name: "Karan",
        det: "Vanija",
    },
    {
        name: "Yog",
        det: "Dhriti",
    },
    {
        name: "Nakshatra",
        det: "Shatbhisha",
    },
    {
        name: "Day",
        det: "Wednesday",
    },
    {
        name: "Sunrise",
        det: "7:3:17",
    },
    {
        name: "Sunset",
        det: "18:43:38",
    },


];
const akaarr = [
    {

        name: "Ascendant",
        det: "Virgo",
    },
    {
        name: "Ascendant Lord",
        det: "Mercury",
    },
    {
        name: "Varna",
        det: "Shoodra",
    },
    {
        name: "Vashya",
        det: "Maanav",
    },
    {
        name: "Yoni",
        det: "Ashwa",
    },
    {
        name: "Gan",
        det: "Rakshasa",
    },
    {
        name: "Nadi",
        det: "Adi",
    },
    {
        name: "SignLord	",
        det: "Saturn",
    },
    {
        name: "Sign",
        det: "Aquarius",
    },
    {
        name: "Naksahtra",
        det: "Shatbhisha",
    },
    {
        name: "NaksahtraLord",
        det: "Rahu",
    },
    {
        name: "Charan",
        det: "2",
    },
    {
        name: "Yog",
        det: "Dhriti",
    },
    {
        name: "Karan",
        det: "Vanija",
    },
    {
        name: "Tithi",
        det: "Shukla Chaturdashi",
    },
    {
        name: "Yunja",
        det: "Parbhaag",
    },
    {
        name: "Tatva",
        det: "Air",
    },
    {
        name: "Name Alphabet",
        det: "Saa",
    },
    {
        name: "Paya",
        det: "Copper",
    },

];

export default function Basic() {
    //   const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section className="basic-details-main flex flex-col gap-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-start w-full">

                <div className="bas-panch flex flex-col gap-3">
                    <div className="basic-det flex flex-col gap-2 p-2 shadow-lg  rounded-lg pb-3  justify-center text-[#000]">
                        <h5 className="text-center">Birth Details</h5>
                        <div className="basic-box grid grid-cols-2 gap-4">

                            {basicarr.map((barr, index) => (
                                <div key={index} className="basic-card flex-col md:flex-row bg-purple-200 px-2 py-2 shadow-lg rounded-lg gap-1  flex items-center justify-center">
                                    <span className="text-xs font-semibold">{barr.name} :  </span>
                                    <span className="text-xs">{barr.det}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="basic-det flex flex-col gap-2 p-2 shadow-lg  rounded-lg pb-3  justify-center text-[#000]">
                        <h5 className="text-center">Panchang Details</h5>
                        <div className="basic-box grid grid-cols-2 gap-4">

                            {panarr.map((pan, index) => (
                                <div key={index} className="basic-card flex-col md:flex-row bg-purple-200 px-2 py-2 shadow-lg rounded-lg gap-1  flex items-center justify-center">
                                    <span className="text-xs font-semibold">{pan.name} :  </span>
                                    <span className="text-xs">{pan.det}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="basic-det flex flex-col gap-2 p-2 shadow-lg rounded-lg pb-3 justify-center text-[#000]">
                    <h5 className="text-center">Avakhada Details</h5>
                    <div className="basic-box grid grid-cols-2 gap-4">

                        {akaarr.map((akr, index) => (
                            <div key={index} className="basic-card flex-col md:flex-row bg-purple-200 px-2 py-2 shadow-lg rounded-lg gap-1  flex items-center justify-center">
                                <span className="text-xs font-semibold">{akr.name} :  </span>
                                <span className="text-xs">{akr.det}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="personal-rep flex flex-col text-[#000] gap-2">
                <h5 className="md:text-xl text-sm font-semibold">Personality Report: </h5>
                <span className="md:text-base text-sm">"You may have had trouble communicating in early life. Perhaps you suffer from feelings of inadequacy. You overcome these feelings through sheer necessity, for you have determination in achieving your goals and purposes in life. ",
                    "You will have strong likes and dislikes, and can be very reserved and dignified, though when vexed you are apt to be sharp and sarcastic if not actually cruel. Avoid pride, cultivate sympathy and endeavour to see things from others’ standpoints as well as your own. ",
                    "The position of the Moon in your horoscope will much increase the emotional nature, making you extremely sensitive. You like to be appreciated, and feel things that are said of you very keenly. You need to associate only with pure-minded and cheerful persons, or you may find yourself liable to moods often undesirable ones. ",
                    "In your heart of hearts you want a close intimate relationship with an equal. You make friends easily and give unwaveringly to them. You are capable of extreme self-sacrifice for those they love. Your greatest strengths is the ability to recover and recoup from loss. ",</span>
                <div><span className="text-sm font-semibold">Spiritual Lesson : </span> <span className="text-sm">"Spiritual lesson to learn: Sociability (lighten up)"</span></div>
            </div>

        </section>

    );
}
