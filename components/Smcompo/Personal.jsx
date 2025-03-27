"use client"; // Required for interactive UI in Next.js 13+
import Link from "next/link";


export default function Personal() {
  return (
    <div className=" call-chat-nw w-full rounded-lg p-3 flex flex-col gap-3 py-5">
      <div className="cc-top-con">
        <h3 className=" text-center text-red-400 text-xl ">
        Get Personalized Horoscope & Predictions 2025    
        </h3>
      </div>
      <div className="text-[#000] text-sm">We all are curious to know our personalized horoscope or future in order to calculate the favorable and unfavorable times of our life. Chirag Daruwalla is the best way to find answers to the mystery called the year 2024. Our team will give you a glimpse of your life in the year 2024.</div>
      <div className="flex items-center justify-center gap-5">
    <Link href={"/homepage/talkto"}>    <button type="button" className="neumorphism cursor-pointer flex items-center gap-2 px-4 py-3 rounded-full border-1 border-rose-600 text-rose-600 hover:scale-105">
      
      {/* <IoCall className="text-xl hidden md:block"/> */}
     <span className="text-xs text-rose-600">Email Now</span>
    </button></Link>
      
   <Link href={"/homepage/navbarcomp"}>     <button type="button" className="neumorphism cursor-pointer flex items-center gap-2 px-4 py-3 rounded-full border-1 border-rose-600 text-rose-600 hover:scale-105">
          
          {/* <IoIosChatbubbles className="text-xl hidden md:block"/> */}
          <span className="text-xs text-rose-600"> Call Now</span>
        </button></Link>
      </div>
    </div>
  );
}
