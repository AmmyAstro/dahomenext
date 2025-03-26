"use client"; // Required for interactive UI in Next.js 13+

import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";



const transarr = [
    {
        "planet_position": "Transiting Moon Trine Natal Mercury",
        "date": "19-6-2017",
        "forecast": "Your feeling, intuitive side is balanced with your rational thought processes to give acute perceptive skills. You can read others easily and quickly assess any situation. Your are in touch with your own feelings to give sound judgement and decision-making skills."
    },
	{
        "planet_position": "Transiting Moon Opposition Natal Saturn",
        "date": "19-6-2017",
        "forecast": "This is not a good time for socializing as people may find you cold or distant. A morbid outlook on life is possible and you are likely to see the worst in other people and situations. While a Moon transit last only a few hours, moon phases pose a more serious problem and you will need to work hard to avoid your negative feelings manifesting as depression, loss or disappointment."
    },
    {
        "planet_position": "Transiting Mercury Opposition Natal Mercury",
        "date": "19-6-2017",
        "forecast": "You are mentally sharp and alert now. Your curiosity is aroused regarding new ideas, unfamiliar facts and interesting concepts. Objectivity is strong and your thinking is not colored by emotional biases. Travel is likely."
    },
    {
        "planet_position": "Transiting Mercury Opposition Natal Neptune",
        "date": "19-6-2017",
        "forecast": "Your imagination is working overtime today. You may be interested in spiritual subjects or art and music today. Your thinking will tend to be idealistic, not necessarily realistic. Keep your feet on the ground and your head out of the clouds. Don't let anyone pull the wool over your eyes and stop daydreaming if there is work to be done."
    },
    {
        "planet_position": "Transiting Sun Square Natal Mars",
        "date": "20-6-2017",
        "forecast": "You are full of it today, high energy, force of will, and a dislike of any restraint. Slow down a little so you don't go flying off the handle. Physical, mental, and verbal confrontations are likely today, so stay in control. Don't speed today as the police may be watching you."
    },
    {
        "planet_position": "Transiting Mercury Square Natal Mars",
        "date": "21-6-2017",
        "forecast": "Don't go looking for trouble today. Trouble will find you quick enough. Watch your offhand remarks. You may bum more people out than you think. Be careful driving or working on machinery. Don't let little irritations get to you. Be tactful."
    },
   
];



export default function Transit() {


    return (


        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
            <div className="kundli-top-sec w-full">
                <Kuninterimg />
            </div>

            <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">

                <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">

                    <section className="basic-details-main">
                        <div className="flex  gap-5 flex-col">                

                            <div className="natal-cusps-rep flex flex-col p-5 shadow-lg rounded-lg">
                                <h5 className="text-xl font-semibold text-[#000] text-center">Transit Life Forecast Report</h5>
                                <div className="mob-dsp-none py-3 flex flex-col gap-3  justify-between">
                                    {transarr.map((trans, index) => (
                                        <div key={index} className="zod-det-mob-card text-[#000] border border-purple-300 bg-purple-100 rounded-lg p-5">
                                            <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Planet Positions: </h5> <span>{trans.planet_position}</span></span>
                                            <span className="flex items-center gap-3"><h5 className="text-sm font-semibold">Date : </h5> <span>{trans.date}</span></span>

                                            <p className="text-sm ">{trans.forecast}</p>

                                        </div>
                                    ))}
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
