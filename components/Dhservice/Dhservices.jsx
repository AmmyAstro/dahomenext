"use client";

import Image from "next/image";
import Link from "next/link";

import { IoFilterOutline, IoSearch } from "react-icons/io5";

export default function Dhservices() {
  const dhservice = [
    { name: "Healing", img: "/ds-img/healnew.png" },
    { name: "Puja", img: "/ds-img/ser2.webp" },
    { name: "Face Reading", img: "/ds-img/ser3.webp" },
    { name: "Past Life Regression", img: "/ds-img/ser4.webp" },
    { name: "Spells", img: "/ds-img/ser5.webp" },
    { name: "Birth Time Rectification", img: "/ds-img/ser6.webp" },
    { name: "Pendulum Dowsing", img: "/ds-img/ser7.webp" },
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

      <div className="services-card-main grid grid-cols-2 xl:grid-cols-4 gap-5 py-5 xl:p-5 w-[100%] xl:w-[90%]">
        {dhservice.map((dhser, index) => (
          <div
            key={index}
            className="element-item cat-Service"
            data-category="cat-Service"
          >
            <Link href="#" className="text-center">
              <div className="ser-main-card">
                <div className="ser-main-img-card">
                  <Image
                    src={dhser.img}
                    alt="Face Reading"
                    className="dsser-img-hm"
                    loading="lazy"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ser-main-name">
                  <h5 className="text-xs">{dhser.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
