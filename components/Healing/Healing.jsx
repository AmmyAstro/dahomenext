"use client";

import Image from "next/image";
import Link from "next/link";

import {IoFilterOutline, IoSearch } from "react-icons/io5";

export default function Healing() {
  const healing = [
    { name: "Pranic Healing", img: "/ds-img/healnw.jpg", pri:"999", },
    { name: "Child Birth Healing", img: "/ds-img/healnw2.png", pri:"1000", },
    { name: "Legal Matters Healing", img: "/ds-img/healnw3.jpg", pri:"888", },
    { name: "Prosperity Healing", img: "/ds-img/healnw4.png", pri:"1999", },
    { name: "Career Healing", img: "/ds-img/healnw5.png", pri:"2999", },
    { name: "Medical Healing", img: "/ds-img/healnw6.png", pri:"1001", },
    { name: "Angel Healing", img: "/ds-img/healnw7.jpg", pri:"800", },
    { name: "Relationship Healing", img: "/ds-img/healnw8.jpg", pri:"900", },
    { name: "Chakra Healing", img: "/ds-img/healnw9.jpg", pri:"1300", },
    { name: "Reiki Healing", img: "/ds-img/healnw10.jpg", pri:"1400", },
  ];

  return (
    <section className=" relative p-2 sm:p-5 flex w-full flex-col items-center self-center ">
      <div className="ui-group w-full">
        <div className=" bl-rec text-center flex flex-row items-center gap-5">
          <span className="uproline"></span>

          <form action="#" method="get">
            <span className="dash-span-inp flex items-center">
              <input
                type="search"
                name="search"
                className="dash-inp outline-0 border-0 placeholder:text-[#777] placeholder:text-xs"
                placeholder="Search services here...."
              />
              <IoSearch className="text-[#000]" />
            </span>
          </form>
          <span className="uproline"></span>
        </div>
      </div>

      <div className="healing-card-main grid grid-cols-2 xl:grid-cols-4 gap-5 py-5 xl:p-5 w-[100%] xl:w-[90%]">
        {healing.map((heal, index) => (
          <div
            key={index}
            className="element-item cat-Service"
            data-category="cat-Service" >
            <Link href="#" className="text-center">
              <div className="heal-main-card">
                <div className="heal-main-img-card">
                  <Image
                    src={heal.img}
                    alt="healing services"
                    className="dsser-img-hm"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h5 className="text-xs bg-[#2f1254dd] rounded-lg p-1">{heal.name}</h5>
                  <div className="price-heal flex items-center gap-2">
                    <h5 className="text-sm text-[#000] font-semibold">Starting From</h5>
                    <span className="text-[#b80c0c]">₹ {heal.pri} </span>
                    <span className="text-sm text-[#888]">(Per Session)</span>
                  </div>
                  <div className="heal-book-btn">
                    <button className="rounded-full cursor-pointer px-4 py-1 text-sm bg-[#f5c300] text-[#000]">Book Now</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
