"use client"; // Required for interactive UI in Next.js 13+

import { useState } from "react";


const gemarr = [
    {
        LIFE: {
            name: 'Ruby',
            gem_key: 'ruby',
            semi_gem: 'Red Garnet',
            wear_finger: 'Ring',
            weight_caret: '3 - 4.25',
            wear_metal: 'Gold',
            wear_day: 'Sunday',
            gem_deity: 'Sun',
        },
        BENEFIC: {
            name: 'Yellow Sapphire',
            gem_key: 'yellow_sapphire',
            semi_gem: 'Topaz',
            wear_finger: 'Index',
            weight_caret: '4 - 5.25',
            wear_metal: 'Gold',
            wear_day: 'Thursday',
            gem_deity: 'Jupiter',
        },
        LUCKY: {
            name: 'Red Coral',
            gem_key: 'red_coral',
            semi_gem: 'Red Agate',
            wear_finger: 'Index',
            weight_caret: '6 - 10.25',
            wear_metal: 'Gold',
            wear_day: 'Tuesday',
            gem_deity: 'Mars',
        },
    },
];
export default function Gemsugg() {
    const gems = gemarr[0];
        return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <section className="basic-details-main w-full flex flex-col gap-5">
                        {Object.entries(gems).map(([type, details], index) => (
                            <div key={index} className="border border-purple-200 rounded-xl shadow-md p-4 bg-white text-gray-800">
                                <h3 className="text-xl font-semibold text-purple-600 mb-2">{type} Gem: {details.name}</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-5 text-sm">
                                    <li className="flex items-center gap-5"><strong>Semi-precious:</strong> {details.semi_gem}</li>
                                    <li className="flex items-center gap-5"><strong>Finger:</strong> {details.wear_finger}</li>
                                    <li className="flex items-center gap-5"><strong>Weight (carats):</strong> {details.weight_caret}</li>
                                    <li className="flex items-center gap-5"><strong>Metal:</strong> {details.wear_metal}</li>
                                    <li className="flex items-center gap-5"><strong>Day to Wear:</strong> {details.wear_day}</li>
                                    <li className="flex items-center gap-5"><strong>Deity:</strong> {details.gem_deity}</li>
                                </ul>
                            </div>
                        ))}
                    </section>
                </div>


            </div>


        </section>
    );
}
