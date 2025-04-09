'use client';

import { useState } from "react";
import Image from "next/image"; // ✅ REQUIRED!

const ascarr = [
    {
        "asc_report": {
            "ascendant": "Aquarius",
            "report": "People with Aquarius rising tend to be altruistic, friendly, yet detached, impersonal, humanitarian, sociable, intellectual, freedom-loving, rebellious, independent, and unusual. You are here to learn altruism, brotherhood, and working for the common good, to forget yourself and your needs for the sake of your friends, who can also be strangers. You have new and different ways of looking at things. You can be very original and inventive, perhaps eccentric or bohemian. You are prone to uncertain and sudden impulses. You tend to be very intuitive, possessing a good mind. You have organizing ability and are capable and practical. You are intelligent, but sometimes cold and calculating where feelings are concerned. There is a certain detachment about you. You cannot stand possessiveness and jealousy and you require plenty of freedom. Depending on the relative strengths of Saturn and Uranus in your chart, caution, coldness and selfishness may be exhibited (Saturn stronger) or there will be more altruism, freedom and free-flowingness (Uranus stronger). If Uranus is stronger, then the things of the spirit will be stronger than materialistic worldliness. Spiritual lesson to learn: Warmth (less head and more heart). Saturn and Uranus both rule Aquarius so Saturn and Uranus will be important in your chart."
        }
    }
]

const genearr = [
    {
        "physical": [
            "Male born in Ashwini Nakshatra will have a delightful face. His eyes will be brilliant and vast. Forehead broad and nose minimal greater"
        ],
        "character": [
            "The native may appear to be very calm and quiet, but capable of getting his work done un-noticed and  un-felt by others. He is very stubborn in his decision. This stubborness is more predominant in the case of native born during the period from April 14th to April 28th, when the Sun will be transiting his exaltation place in Ashwini and from October 14th to October 28th, when the Sun will be transiting his debilitation place in Svati. There is a saying that even Yama, the god of death, cannot change his adamant attitude. Those born in Ashwini of other months will have stubborness in a lesser degree.",
            "He will remain faithful to those who love him and will not hesitate to sacrifice anything for such persons. Ashwini born is the best friend in need provided others understand him. He keeps his patience even at the time of greatest peril. But it will be a hurricane task to console the native when he goes berserk. He is the best adviser to the persons in agony: But he deeply resents and fears criticism, see suggestions from  others as a frightening attempt at manipulation.",
            "He takes his own time to do any work. Even so, his actions may be slow but well thought. He will not jump upon any matter without examining prose and corns of each item of work. He cannot be easily influenced. Once he carries out an action or work, whether it is good or bad, right or wrong, he will stick to what he has done, come what may.",
            "He is a firm believer of God. But there is no room for religious or other sentiments. He is orthodox but in new style i.e., he believes in modernisation of orthodox method and belief.",
            "Even though he is quite intelligent, at times he makes mountain of even small matters. This leads him in a state of lack of mental peace and will always be in desperate mood. He is always interested in keeping the entire surroundings neat and clean.",
            "If the birth is in between 2 degree to 3 degree of Ashwini, such native is very much arrogant for nothing. A deceit and a smuggler. If all other combinations are good, he may have wealth but cannot enjoy them. He will bring bad name to the family."
        ],
        "education": [
            "He is jack of all arts. He is generally fond of music and interested in literary pursuit. Periods up to his/30th years of age will be full of struggle. He has to face obstacles even for small matters. From the 30th years of age, there will be steady and continuous progress which will continue up to 55 years of age.",
            "One of the predominant features noticed is that he is very stingy, but his expenditure will be more than his income due mainly to pomp and show. He is inclined to meet his desires/and needs at any cost."
        ],
        "family": [
            "He loves his family in entire sincerity. However, he is subjected to hatred by his own family members due to his adamant behaviour. Affection that was expected and the care that was required, cannot be derived from the father of the native. In other words, the native as also his co-borns  will be neglected by their father. Whatever help he may derive is only from the side of his maternal uncle. Maximum possible help will come from those who are outside the family circle.",
            "Normally marriage takes place between 26 to 30 years of age. There will be more sons than daughters."
        ],
        "health": [
            "His health will generally be good. However if the birth is in between 2 degree and 3 degree of  Ashwini, his health will be poor. He is prone to migraine headache, heart trouble, etc. He must follow the remedial measures mentioned at the end of this chapter."
        ]
    }
]



export default function Ascendant() {
    // const [sugTab, setSugTab] = useState("pujasugg");

    return (
        <section className="basic-ul-main w-full">
            <div className="flex flex-col gap-5 text-[#000]">
                <h5 className="text-sm text-center md:text-xl text-[#000] font-semibold">
                    <span className="text-red-500 text-xl">"General Ascendant  : </span>
                    Report"
                </h5>


                <div className="border border-purple-100 rounded-lg text-sm  px-5 py-3 shadow-lg">
                    {ascarr.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <span className="flex items-center gap-2">        <h2 className="font-semibold">Ascendant: </h2><span>{item.asc_report.ascendant}</span></span>
                            <p>{item.asc_report.report}</p>
                        </div>
                    ))}
                </div>


                <div className="border border-purple-100 rounded-lg  px-5 py-3 shadow-lg">
                <h5 className="text-sm text-center md:text-xl text-[#000] font-semibold">
                    <span className="text-red-500 text-xl">"General Nakshatra  : </span>
                    Report"
                </h5>
                    {genearr.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 text-sm">
                            <div className="flex flex-col ">   <h2 className="font-semibold">Physical :</h2>
                                {item.physical.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}</div>

                            <div className="flex flex-col ">   <h2 className="font-semibold">Character :</h2>
                                {item.character.map((c, i) => (
                                    <p key={i}>{c}</p>
                                ))}</div>

                            <div className="flex flex-col ">   <h2 className="font-semibold">Education :</h2>
                                {item.education.map((e, i) => (
                                    <p key={i}>{e}</p>
                                ))}</div>

                            <div className="flex flex-col ">   <h2 className="font-semibold">Family :</h2>
                                {item.family.map((f, i) => (
                                    <p key={i}>{f}</p>
                                ))}
                            </div>

                            <div className="flex flex-col ">   <h2 className="font-semibold">Health :</h2>
                                {item.health.map((h, i) => (
                                    <p key={i}>{h}</p>
                                ))}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
