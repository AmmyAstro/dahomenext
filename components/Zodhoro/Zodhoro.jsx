'use client'
import { useState } from "react";

import Monthly from "@/components/Zodcomp/Zodyester/Monthly";
import Today from "@/components/Zodcomp/Zodyester/Today";
import Tomorrow from "@/components/Zodcomp/Zodyester/Tomorrow";
import Weekly from "@/components/Zodcomp/Zodyester/Weekly";
import Yearly from "@/components/Zodcomp/Zodyester/Yearly";
import Yesterday from "@/components/Zodcomp/Zodyester/Yesterday";

const tabs = [
  { id: "yesterday", label: "Yesterday", component: <Yesterday /> },
  { id: "today", label: "Today", component: <Today /> },
  { id: "tomorrow", label: "Tomorrow", component: <Tomorrow /> },
  { id: "weekly", label: "Weekly", component: <Weekly /> },
  { id: "monthly", label: "Monthly", component: <Monthly /> },
  { id: "yearly", label: "Yearly", component: <Yearly /> },
];

export default function Zodhoro() {
  const [activeTab, setActiveTab] = useState("today"); 

  return (
   <section className="zodiac-main-box">
     <h5 className="text-center md:text-2xl text-base text-[#000] font-semibold">Aries (Mesha)</h5>
     <section className="zod-days w-[90%] m-5 
      justify-self-center">
      <div className="zodiac-days">
        <ul className="zodiac-days-ul px-10 flex  flex-wrap gap-5">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer lg:px-5 text-xs px-2 py-2 md:text-xl lg:py-2 rounded-full ${
                activeTab === tab.id ? "bg-purple-500 text-white" : " text-black"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic Content Display */}
      <div className="zod-det-down mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </section>
   </section>
  );
}
