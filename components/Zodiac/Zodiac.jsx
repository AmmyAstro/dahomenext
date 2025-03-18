"use client"; // Required for interactive UI in Next.js 13+

import { MdOutlineAbc } from "react-icons/md"; import Link from "next/link";
import { FaMoon } from "react-icons/fa";
export default function Zodiac() {

    return (
        <section className="find-zod-sign">
            <div className="unc-zod-sign">
                <div className="get-zod flex items-center content-center flex-col gap-5">
                    <h5 className="md:text-2xl text-base">Uncover Your Zodiac Sign</h5>

                    <div className="zod-dob-etc">
                        <div className="flex flex-wrap items-center justify-center md:justify-between w-full md:gap-10 gap-3 ">
                            <div className="">
                                <input type="text"   placeholder="Enter Date"  className="bg-[#00000031] rounded-lg px-4 py-2"
                                    aria-label="First name" />
                            </div>
                            <div className="">
                                <input type="text"  placeholder="Enter Time" className="bg-[#00000031] rounded-lg px-4 py-2"
                                    aria-label="Last name" />
                            </div>
                            <div className="">
                                <input type="text" 
                                    placeholder="Enter Place of Birth" className="bg-[#00000031] rounded-lg px-4 py-2" aria-label="Last name" />
                            </div>
                            <div className=" text-center">
                                <button type="submit" className=" bg-[#3a1667] p-2 text-xs md:text-sm rounded-lg">
                                    Find Zodiac Sign
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="rashi-dt flex gap-10 items-end self-center">
                        <button className="flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-[#ffffff69]">
                            {/* <MdOutlineAbc className="text-[#000] text-2xl"/>                       */}
                                  <h6 className="text-[#000] text-xs md:text-sm font-semibold">Find Rashi With Name</h6>
                        </button>
                        <button className="flex flex-col items-center justify-center px-4 py-2 rounded-lg bg-[#ffffff69]">
                            {/* <FaMoon className="text-[#000]"/> */}
                            <h6 className="text-[#000] text-xs md:text-sm font-semibold">Find Rashi With Time</h6>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
