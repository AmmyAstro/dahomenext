"use client"; // Required for interactive UI in Next.js 13+
import Link from "next/link";

import { IoCall } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";

export default function Callchatsec() {
  return (
    <div className=" call-chat-nw w-full rounded-lg p-3 flex flex-col gap-5 py-5">
      <div className="cc-top-con">
        <h3 className=" text-center text-[#000] text-xs sm:text-base">
          Connect with an Astrologer on Call or Chat for more personalised
          <br /> <span className="text-rose-600">detailed predictions.</span>
        </h3>
      </div>
      <div className="flex items-center justify-center gap-5">
    <Link href={"/homepage/talkto"}>    <button type="button" className="neumorphism cursor-pointer flex items-center gap-2 px-4 py-3 rounded-full border-1 border-rose-600 text-rose-600 hover:scale-105">
      
      <IoCall className="text-xl hidden md:block"/>
     <span className="text-xs text-rose-600">Talk To Astrologers</span>
    </button></Link>
      
   <Link href={"/homepage/navbarcomp"}>     <button type="button" className="neumorphism cursor-pointer flex items-center gap-2 px-4 py-3 rounded-full border-1 border-rose-600 text-rose-600 hover:scale-105">
          
          <IoIosChatbubbles className="text-xl hidden md:block"/>
          <span className="text-xs text-rose-600"> Chat With Astrologers</span>
        </button></Link>
      </div>
    </div>
  );
}
